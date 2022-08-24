var _$_18fb = ["adminlvl", "getVariable", "notify", "graphics", "game", "tpToWaypoint", "call", "events", "bind", "keys", "add", "assign", "position", "local", "players", "z", "x", "y", "Vector3", "freezePosition", "getGroundZFor3dCoord", "gameplay", "notifyCoords", "Телепорт пo координатам:", "callRemote", "render", "0x1DD1F58F493F1DA5", "invoke", "0x1BEDE233E6CD2A1F", "getBlipInfoIdCoord", "ui"];
let waypoint;
let lastWaypointCoords;
let wtpToggle = false;
mp.keys.bind(0x60, true, function () {
  let _0x13156 = player.getVariable('adminlvl');

  if (_0x13156 <= 7 || _0x13156 == undefined || _0x13156 == null) {
    return;
  }

  if (!lastWaypointCoords) {
    mp.game.graphics.notify(`Ошибка: ~n~~h~~r~Нет записи последнего waypoint'a.`);
    return;
  }

  mp.events.call('tpToWaypoint');
});
mp.events.add('tpToWaypoint', () => {
  findWP(mp);
});

function findWP(_0x17782) {
  let _0x177CA = Object.assign({}, lastWaypointCoords);

  let _0x177A6 = _0x17782.players.local.position;

  if (_0x177CA.z != 20) {
    _0x17782.players.local.position = new _0x17782.Vector3(_0x177CA.x, _0x177CA.y, _0x177CA.z + 2);
    return;
  }

  findZ(_0x17782, 10, 150, _0x177CA, _0x177A6);
}

function findZ(_0x17782, _0x17836, _0x177EE, _0x177CA, _0x177A6) {
  _0x17782.players.local.position = new _0x17782.Vector3(_0x177CA.x, _0x177CA.y, 0);

  _0x17782.players.local.freezePosition(true);

  attempts = 1;
  timeout = setTimeout(function _0x17812() {
    _0x177CA.z = _0x17782.game.gameplay.getGroundZFor3dCoord(_0x177CA.x, _0x177CA.y, 1000, 0, false);

    if (!_0x177CA.z && attempts < 10) {
      attempts++;
      _0x17782.players.local.position = new _0x17782.Vector3(_0x177CA.x, _0x177CA.y, attempts * 50);
      timeout = setTimeout(_0x17812, _0x177EE);
    } else {
      if (!_0x177CA.z && attempts == _0x17836) {
        _0x17782.players.local.position = _0x177A6;

        _0x17782.game.graphics.notify(`Ошибка: ~n~~h~~r~Не удалось получить координату Z.`);

        _0x17782.players.local.freezePosition(false);

        clearTimeout(timeout);
      } else {
        _0x17782.players.local.position = new _0x17782.Vector3(_0x177CA.x, _0x177CA.y, _0x177CA.z + 2);

        _0x17782.players.local.freezePosition(false);

        _0x17782.events.callRemote('notifyCoords', 'Телепорт пo координатам:', _0x177CA.x, _0x177CA.y, _0x177CA.z + 1);

        clearTimeout(timeout);
      }
    }
  }, _0x177EE);
}

mp.events.add('render', () => {
  if (waypoint !== mp.game.invoke('0x1DD1F58F493F1DA5')) {
    waypoint = mp.game.invoke('0x1DD1F58F493F1DA5');

    if (waypoint) {
      let _0x13762 = mp.game.invoke('0x1BEDE233E6CD2A1F', 8);

      let coords = mp.game.ui.getBlipInfoIdCoord(_0x13762);
      lastWaypointCoords = coords;

      if (wtpToggle) {
        mp.events.call('tpToWaypoint');
      }
    }
  }
});