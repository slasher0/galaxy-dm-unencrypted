const localplayer = mp.players.local;
global.menuDisplay = true;
mp.keys.bind(0x72, true, function () {
  if (player.dimension == 0) {
    return;
  }

  if (LobbySettings.Active != 0) {
    return HudMenuCEF.execute(`emsg('Сначала покиньте лобби.');`);
  }

  if (menuDisplay == false) {
    if (RouletteGames.GameActive == true) {
      return;
    }

    if (inACarShop == 1) {
      return HudMenuCEF.execute(`emsg('Сначала выйдите из Магазина');`);
    }

    if (inTattooShop == 1) {
      return HudMenuCEF.execute(`emsg('Невозможно открыть меню в редакторе персонажа/выборе татуировок. Выйдите из редактора/меню выбора татуировок.');`);
    }

    if (player.getVariable('admicptbrowseropen')) {
      return HudMenuCEF.execute(`emsg('Дождитесь окончания записи за капт.');`);
    }

    if (player.getVariable('AdminCptRev1Writed')) {
      return HudMenuCEF.execute(`emsg('Сначала сыграйте капт.');`);
    }

    if (player.isDead() == true) {
      return HudMenuCEF.execute(`emsg('Невозможно выйти в главное меню в нокнутом состоянии.');`);
    }

    if (player.dimension == player.dimension + 110000) {
      return HudMenuCEF.execute(`emsg('Невозможно главное меню в Battle Royale, чтобы выйти в главное меню нажмите иконку крестика в правом верхнем углу');`);
    }

    UpdatePlayersCount();
    mp.gui.chat.activate(false);
    mp.gui.chat.show(false);
    mp.gui.cursor.visible = true;
    HudMenuCEF.execute(`ChangeMenuDisplay('Open');`);
    ChangeHUDKeysDisplay('hide');
    ChangeHUDKillFeedDisplay('hide');
    ChangeHUDFreeCaseDisplay('hide');
    ChangeHUDRaitingDisplay('hide');
    mp.game.ui.displayRadar(false);
  } else {
    mp.gui.cursor.visible = false;
    HudMenuCEF.execute(`ChangeMenuDisplay('Close');`);
    HudMenuCEF.execute(`$('.aim-setting').css("display", 'none');`);
    ChangeHUDKeysDisplay('open');
    ChangeHUDKillFeedDisplay('open');
    ChangeHUDFreeCaseDisplay('open');
    ShowChat();
    mp.game.ui.displayRadar(true);
    let _0x13B52 = player.dimension;

    if (_0x13B52 == 1 || _0x13B52 == 2 || _0x13B52 == 3 || _0x13B52 == 4 || _0x13B52 == 5 || _0x13B52 == 6 || _0x13B52 == 10 || _0x13B52 == 500) {
      ChangeHUDRaitingDisplay('open');
    }
  }
});
mp.keys.bind(0x78, true, function () {
  let _0x13156 = localplayer.getVariable('adminlvl');

  if (_0x13156 == null || _0x13156 == undefined || _0x13156 <= 0) {
    return;
  }

  mp.events.callRemote('adminfly');
});
mp.events.add('hidefortour', () => {
  hudBrowser.execute(`ghettotogglehideall();`);
});
mp.keys.bind(0x74, true, function () {
  let _0x13156 = localplayer.getVariable('adminlvl');

  if (_0x13156 == null || _0x13156 == undefined || _0x13156 <= 0) {
    return;
  }

  mp.events.callRemote('adminesp');
});

function pointingAtMarker(_0x14866) {
  const _0x17AE2 = mp.cameras.new('gameplay');

  let _0x16B46 = _0x17AE2.getCoord();

  let direction = _0x17AE2.getDirection();

  let _0x17956 = new mp.Vector3(direction.x * _0x14866 + _0x16B46.x, direction.y * _0x14866 + _0x16B46.y, direction.z * _0x14866 + _0x16B46.z);

  return mp.raycasting.testPointToPoint(_0x16B46, _0x17956, null, 1);
}

mp.keys.bind(0xC0, false, function () {
  mp.gui.cursor.visible = !mp.gui.cursor.visible;
});
mp.keys.bind(0x73, false, function () {
  mp.events.callRemote('adminpanel', 1);
});
mp.keys.bind(0x21, false, function () {
  mp.events.callRemote('adminpanel', 2);
});
global.roulettestatus = 0;
mp.events.add('OpenRouletteFromMainMenu', () => {
  HudMenuCEF.execute(`imsg('Вы можете открыть меню рулетки с помощью клавиши F11');`);

  if (roulettestatus == 0) {
    roulettestatus = 1;
    mp.gui.chat.activate(false);
    RouletteBwsr.execute(`OpenRouletteForm();`);
  } else {
    RouletteBwsr.execute(`HideRouletteForm();`);
    mp.gui.chat.activate(true);
  }

  mp.gui.cursor.visible = true;
});
mp.keys.bind(0x77, false, function () {
  mp.voiceChat.cleanupAndReload(true, true, true);
  HudMenuCEF.execute(`smsgfast('Войс-чат перезагружен!');`);
});
var bigmap = [];
bigmap.status = 0;
bigmap.timer = null;
mp.game.ui.setRadarZoom(1.0);
mp.game.ui.setRadarBigmapEnabled(false, false);
mp.events.add('render', () => {
  mp.game.controls.disableControlAction(0, 48, true);

  if (mp.game.controls.isDisabledControlJustPressed(0, 48)) {
    mp.game.ui.setRadarZoom(0.0);
    bigmap.status = 1;
    bigmap.timer = setTimeout(() => {
      mp.game.ui.setRadarBigmapEnabled(false, true);
      mp.game.ui.setRadarZoom(1.0);
      bigmap.status = 0;
      bigmap.timer = null;
    }, 10000);
  }
});
var res = mp.game.graphics.getScreenActiveResolution(0, 0);
let selObj = null;
let oldPos;
let oldRot;
let curBtn;
let oldcursorPos = [0, 0];
mp.events.add('objecteditor:start', _0x13F66 => {
  mp.gui.cursor.show(true, true);
  selObj = mp.objects.at(_0x13F66);
  selObj.setCollision(false, false);
  oldPos = selObj.position;
  oldRot = selObj.rotation;
});
mp.events.add('render', () => {
  try {
    if (cefopened == false) {
      return;
    }

    if (TuningVehSpawned) {
      if (!mp.players.local.vehicle) {
        return mp.game.controls.disableAllControlActions(0);
      }

      mp.game.controls.disableAllControlActions(1);
      mp.game.controls.disableAllControlActions(2);
      let _0x12FA6 = mp.gui.cursor.position;
      let _0x13F8A = {
        x: _0x12FA6[0] - 0,
        y: _0x12FA6[1] - 0
      };
      _0x13F8A.x /= res.x;
      _0x13F8A.y /= res.y;

      let _0x1401A = mp.players.local.vehicle.getRotation(2);

      if (curBtn == 'z') {
        let _0x13FD2 = mp.game.graphics.world3dToScreen2d(mp.players.local.vehicle.position.x, mp.players.local.vehicle.position.y, mp.players.local.vehicle.position.z);

        let _0x1403E = mp.game.graphics.world3dToScreen2d(mp.players.local.vehicle.position.x, mp.players.local.vehicle.position.y, mp.players.local.vehicle.position.z + 1);

        if (_0x13FD2 == undefined || _0x1403E == undefined) {
          return;
        }

        var _0x14062 = {
          x: _0x1403E.x - _0x13FD2.x,
          y: _0x1403E.y - _0x13FD2.y
        };

        var _0x13FAE = _0x13F8A.x * _0x14062.x + _0x13F8A.y * _0x14062.y;

        mp.players.local.vehicle.setRotation(_0x1401A.x, _0x1401A.y, _0x1401A.z + _0x13F8A.x * 800 * 0.6, 1, true);

        let _0x13FF6 = mp.players.local.vehicle.getHeading();

        mp.players.local.vehicle.setHeading(_0x13FF6);
      }

      oldcursorPos = _0x12FA6;
    } else {
      if (vehspawned == null) {
        mp.game.controls.disableAllControlActions(0);
        mp.game.controls.disableAllControlActions(1);
        mp.game.controls.disableAllControlActions(2);
        let _0x12FA6 = mp.gui.cursor.position;
        let _0x13F8A = {
          x: _0x12FA6[0] - oldcursorPos[0],
          y: _0x12FA6[1] - oldcursorPos[1]
        };
        _0x13F8A.x /= res.x;
        _0x13F8A.y /= res.y;

        let _0x1401A = player.getRotation(2);

        if (curBtn == 'z') {
          let _0x13FD2 = mp.game.graphics.world3dToScreen2d(player.position.x, player.position.y, player.position.z);

          let _0x1403E = mp.game.graphics.world3dToScreen2d(player.position.x, player.position.y, player.position.z + 1);

          if (_0x13FD2 == undefined || _0x1403E == undefined) {
            return;
          }

          var _0x14062 = {
            x: _0x1403E.x - _0x13FD2.x,
            y: _0x1403E.y - _0x13FD2.y
          };

          var _0x13FAE = _0x13F8A.x * _0x14062.x + _0x13F8A.y * _0x14062.y;

          player.setRotation(_0x1401A.x, _0x1401A.y, _0x1401A.z + _0x13F8A.x * 800 * 0.6, 1, true);

          let _0x13FF6 = player.getHeading();

          player.setHeading(_0x13FF6);
        }

        oldcursorPos = _0x12FA6;
      } else {
        if (vehspawned != null) {
          if (mp.players.local.vehicle) {
            return;
          }

          let _0x12FA6 = mp.gui.cursor.position;
          let _0x13F8A = {
            x: _0x12FA6[0] - oldcursorPos[0],
            y: _0x12FA6[1] - oldcursorPos[1]
          };
          _0x13F8A.x /= res.x;
          _0x13F8A.y /= res.y;

          let _0x1401A = spawnedveh.getRotation(2);

          if (curBtn == 'z') {
            let _0x13FD2 = mp.game.graphics.world3dToScreen2d(spawnedveh.position.x, spawnedveh.position.y, spawnedveh.position.z);

            let _0x1403E = mp.game.graphics.world3dToScreen2d(spawnedveh.position.x, spawnedveh.position.y, spawnedveh.position.z + 1);

            if (_0x13FD2 == undefined || _0x1403E == undefined) {
              return;
            }

            var _0x14062 = {
              x: _0x1403E.x - _0x13FD2.x,
              y: _0x1403E.y - _0x13FD2.y
            };

            var _0x13FAE = _0x13F8A.x * _0x14062.x + _0x13F8A.y * _0x14062.y;

            spawnedveh.setRotation(_0x1401A.x, _0x1401A.y, _0x1401A.z + _0x13F8A.x * 800 * 0.6, 1, true);

            let _0x13FF6 = spawnedveh.getHeading();

            spawnedveh.setHeading(_0x13FF6);
          }

          oldcursorPos = _0x12FA6;
        }
      }
    }
  } catch (e) {
    mp.gui.chat.push(`${e}`);
  }
});
mp.events.add('click', (_0x143E6, _0x1440A, _0x1439E, _0x1430E, _0x14356, _0x1437A, _0x143C2, _0x142EA) => {
  if (_0x1439E == 'up') {
    curBtn = '';
  } else {
    if (_0x1439E == 'down') {
      if (!mp.gui.cursor.visible) {
        return;
      }

      if (cefopened == false) {
        return;
      }

      curBtn = 'z';
    }
  }
});