var _$_b785 = ["position", "local", "players", "now", "round", "active", "timeoutsleep", "pos", "isFalling", "isRagdoll", "vehicle", "x", "y", "z", "itstime", "adminlvl", "getVariable", "dimension", "getDistanceBetweenCoords", "gameplay", "game", "plwalking", "lastSpawn", "lastvehSpawn", "yepedtg", "callRemote", "events", "playerSpawn", "retrnch", "add", "playerChangeCordByServer", "vehspwnd"];
let checkplayer = {
  pos: mp.players.local.position,
  active: true,
  lastSpawn: Math.round(Date.now() / 1000),
  lastvehSpawn: Math.round(Date.now() / 1000),
  timeoutsleep: null,
  retrnch: function (_0x265AF) {
    this.active = false;

    if (this.timeoutsleep != null) {
      clearTimeout(timeoutsleep);
    }

    this.timeoutsleep = setTimeout(() => {
      this.active = true;
      this.timeoutsleep = null;
      this.pos = mp.players.local.position;
    }, _0x265AF * 1000);
  },
  itstime: function () {
    return Math.round(Date.now() / 1000);
  },
  plwalking: function () {
    if (mp.players.local.isFalling() || mp.players.local.isRagdoll()) {
      return false;
    } else {
      if (!mp.players.local.vehicle) {
        return true;
      }
    }
  },
  getvctr: function (_0x26807, _0x26843) {
    return {
      "x": _0x26807.x - _0x26843.x,
      "y": _0x26807.y - _0x26843.y,
      "z": _0x26807.z - _0x26843.z
    };
  }
};
var lstchktm = checkplayer.itstime();
let lastveh = Math.round(Date.now() / 1000);
setTimeout(() => {
  checkplayer.pos = mp.players.local.position;
  checkplayer.pos = mp.players.local.position;

  if (mp.players.local.getVariable('adminlvl') != null) {
    return;
  }

  setInterval(() => {
    if (mp.players.local.dimension != 8) {
      return;
    }

    if (checkplayer.active) {
      if (mp.players.local.dimension != 8) {
        return;
      }

      if (mp.players.local.vehicle) {
        lastveh = Math.round(Date.now() / 1000);
      }

      let _0x268BB = mp.players.local.position;

      let _0x2687F = mp.game.gameplay.getDistanceBetweenCoords(checkplayer.pos.x, checkplayer.pos.y, checkplayer.pos.z, _0x268BB.x, _0x268BB.y, _0x268BB.z, true);

      if (_0x2687F > 25) {
        if (checkplayer.plwalking()) {
          if (checkplayer.itstime() - checkplayer.lastSpawn <= 5) {
            return checkplayer.pos = mp.players.local.position;
          }

          if (checkplayer.itstime() - checkplayer.lastvehSpawn < 5) {
            return checkplayer.pos = mp.players.local.position;
          }

          if (checkplayer.itstime() - lastveh < 5) {
            return checkplayer.pos = mp.players.local.position;
          }

          mp.events.callRemote('yepedtg', checkplayer.itstime() - checkplayer.lastSpawn, checkplayer.itstime() - checkplayer.lastvehSpawn, _0x2687F);
        }
      }

      checkplayer.pos = mp.players.local.position;
    }
  }, 1000);
}, 10000);
mp.events.add('playerSpawn', () => {
  checkplayer.lastSpawn = checkplayer.itstime();

  if (checkplayer.active) {
    checkplayer.retrnch(3);
  }
});
mp.events.add('playerChangeCordByServer', () => {
  checkplayer.lastSpawn = checkplayer.itstime();

  if (checkplayer.active) {
    checkplayer.retrnch(3);
  }
});
mp.events.add('vehspwnd', () => {
  checkplayer.lastvehSpawn = checkplayer.itstime();

  if (checkplayer.active) {
    checkplayer.retrnch(3);
  }
});