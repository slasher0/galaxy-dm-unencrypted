const localPlayer = mp.players.local;
let WeaponType = {
  Melee: 2685387236
};
global.playerHealths = {
  Health: 100,
  Armour: 100
};
mp.events.add('changeHealthData', (_0x8fb3x5, _0x8fb3x6) => {
  switch (_0x8fb3x5) {
    case 'a':
      playerHealths.Armour = parseInt(_0x8fb3x6);
      break;

    case 'h':
      playerHealths.Health = parseInt(_0x8fb3x6);
      break;
  }
});
let DamageParts = [];

function addDamagePart(_0x8fb3x9, _0x8fb3xa, _0x8fb3xb) {
  let _0x8fb3xc = DamageParts.find(_0x8fb3xd => {
    return _0x8fb3xd.PartName == _0x8fb3x9;
  });

  if (_0x8fb3xc) {
    return;
  }

  ;
  DamageParts.push({
    PartName: `${''}${_0x8fb3x9}${''}`,
    BoneID: parseInt(_0x8fb3xa),
    size: parseFloat(_0x8fb3xb)
  });
}

function getDistanceFrom(_0x8fb3xf, _0x8fb3x10, _0x8fb3x11) {
  var _0x8fb3x12 = _0x8fb3x10.getBoneCoords(_0x8fb3xf, 0.0, 0.0, 0.0);

  return mp.game.system.vdist(_0x8fb3x12.x, _0x8fb3x12.y, _0x8fb3x12.z, _0x8fb3x11.x, _0x8fb3x11.y, _0x8fb3x11.z);
}

function getDistance(_0x8fb3x11, _0x8fb3x14) {
  return mp.game.system.vdist(_0x8fb3x11.x, _0x8fb3x11.y, _0x8fb3x11.z, _0x8fb3x14.x, _0x8fb3x14.y, _0x8fb3x14.z);
}

function getBonePositionByName(_0x8fb3x16) {
  var _0x8fb3x17 = mp.players.local.position;
  DamageParts.forEach(_0x8fb3xd => {
    if (_0x8fb3xd.PartName != _0x8fb3x16) {
      return false;
    }

    ;
    _0x8fb3x17 = mp.players.local.getBoneCoords(_0x8fb3xd.BoneID, 0, 0, 0);
  });
  return _0x8fb3x17;
}

function getHitBone(_0x8fb3x1b, _0x8fb3x10) {
  var _0x8fb3x1c = 10;
  var _0x8fb3x12 = undefined;

  var _0x8fb3x1d = mp.players.local.weapon.toString();

  DamageParts.forEach(_0x8fb3xd => {
    var _0x8fb3x1e = getDistanceFrom(_0x8fb3xd.BoneID, _0x8fb3x10, _0x8fb3x1b);

    if (_0x8fb3x1e < 10) {
      _0x8fb3x1c = _0x8fb3x1e;
      _0x8fb3x12 = _0x8fb3xd;
    }
  });

  if (_0x8fb3x12 != undefined) {
    if (!_0x8fb3x10.vehicle) {
      if (_0x8fb3x1c < _0x8fb3x12.size) {
        mp.events.callRemote('greenzonesallin', _0x8fb3x10.remoteId, _0x8fb3x10.getVariable('rtdp'), _0x8fb3x12.PartName, _0x8fb3x1d);
      } else {
        mp.events.callRemote('greenzonesallin', _0x8fb3x10.remoteId, _0x8fb3x10.getVariable('rtdp'), _0x8fb3x12.PartName, _0x8fb3x1d);
      }
    } else {
      if (_0x8fb3x1c < _0x8fb3x12.size + 0.3) {
        mp.events.callRemote('greenzonesallin', _0x8fb3x10.remoteId, _0x8fb3x10.getVariable('rtdp'), _0x8fb3x12.PartName, _0x8fb3x1d);
      }
    }
  } else {
    if (!_0x8fb3x10.vehicle) {
      mp.events.callRemote('greenzonesallin', _0x8fb3x10.remoteId, _0x8fb3x10.getVariable('rtdp'), 'Spine_1', _0x8fb3x1d);
    }
  }
}

function getHitBoneDM(_0x8fb3x1b, _0x8fb3x10) {
  var _0x8fb3x1c = 10;
  var _0x8fb3x12 = undefined;

  var _0x8fb3x1d = mp.players.local.weapon.toString();

  DamageParts.forEach(_0x8fb3xd => {
    var _0x8fb3x1e = getDistanceFrom(_0x8fb3xd.BoneID, _0x8fb3x10, _0x8fb3x1b);

    if (_0x8fb3x1e < 10) {
      _0x8fb3x1c = _0x8fb3x1e;
      _0x8fb3x12 = _0x8fb3xd;
    }
  });

  if (_0x8fb3x12 != undefined) {
    if (!_0x8fb3x10.vehicle) {
      if (_0x8fb3x1c < _0x8fb3x12.size) {
        mp.events.callRemote('capturezonesloadall', _0x8fb3x10.remoteId, _0x8fb3x12.PartName, _0x8fb3x1d);
      } else {
        mp.events.callRemote('capturezonesloadall', _0x8fb3x10.remoteId, _0x8fb3x12.PartName, _0x8fb3x1d);
      }
    } else {
      if (_0x8fb3x1c < _0x8fb3x12.size + 0.3) {
        mp.events.callRemote('capturezonesloadall', _0x8fb3x10.remoteId, _0x8fb3x12.PartName, _0x8fb3x1d);
      }
    }
  } else {
    if (!_0x8fb3x10.vehicle) {
      mp.events.callRemote('capturezonesloadall', _0x8fb3x10.remoteId, 'Spine_1', _0x8fb3x1d);
    }
  }

  ;

  if (alcoshoteeffect == 1) {
    let _0x8fb3x10 = pointingAtWithAlcohol(200);

    if (_0x8fb3x10 === undefined || _0x8fb3x10.entity === undefined || _0x8fb3x10 === 'undefined' || _0x8fb3x10.entity === 'undefined') {
      return;
    }

    ;

    if (_0x8fb3x10.entity.type === 'player' || _0x8fb3x10.entity.type === 'vehicle') {
      ShotTicksDM++;
      mp.events.call('client.start.particle.fx.lopped.at.coord', `${'GiveHit'}${ShotTicksDM}${''}`, 'scr_rcbarry2', 'muz_clown', {
        x: _0x8fb3x10.position.x,
        y: _0x8fb3x10.position.y,
        z: _0x8fb3x10.position.z
      }, {
        x: 0,
        y: 0,
        z: 0
      }, 0.75, true, true, true);
      setTimeout(() => {
        mp.events.call('client.stop.particle.fx.lopped', `${'GiveHit'}${ShotTicksDM}${''}`);
      }, 100);
    }
  }
}

function getHitBoneMG(_0x8fb3x1b, _0x8fb3x10) {
  var _0x8fb3x1c = 10;
  var _0x8fb3x12 = undefined;

  var _0x8fb3x1d = mp.players.local.weapon.toString();

  DamageParts.forEach(_0x8fb3xd => {
    var _0x8fb3x1e = getDistanceFrom(_0x8fb3xd.BoneID, _0x8fb3x10, _0x8fb3x1b);

    if (_0x8fb3x1e < 10) {
      _0x8fb3x1c = _0x8fb3x1e;
      _0x8fb3x12 = _0x8fb3xd;
    }
  });

  if (_0x8fb3x12 != undefined) {
    if (!_0x8fb3x10.vehicle) {
      if (_0x8fb3x1c < _0x8fb3x12.size) {
        mp.events.callRemote('loadhitmarkerlcl', _0x8fb3x10.remoteId, _0x8fb3x12.PartName, _0x8fb3x1d);
      } else {
        mp.events.callRemote('loadhitmarkerlcl', _0x8fb3x10.remoteId, _0x8fb3x12.PartName, _0x8fb3x1d);
      }
    } else {
      if (_0x8fb3x1c < _0x8fb3x12.size + 0.3) {
        mp.events.callRemote('loadhitmarkerlcl', _0x8fb3x10.remoteId, _0x8fb3x12.PartName, _0x8fb3x1d);
      }
    }
  } else {
    if (!_0x8fb3x10.vehicle) {
      mp.events.callRemote('loadhitmarkerlcl', _0x8fb3x10.remoteId, 'Spine_1', _0x8fb3x1d);
    }
  }

  ;

  if (alcoshoteeffect == 1) {
    let _0x8fb3x10 = pointingAtWithAlcohol(200);

    if (_0x8fb3x10 === undefined || _0x8fb3x10.entity === undefined || _0x8fb3x10 === 'undefined' || _0x8fb3x10.entity === 'undefined') {
      return;
    }

    ;

    if (_0x8fb3x10.entity.type === 'player' || _0x8fb3x10.entity.type === 'vehicle') {
      ShotTicksDM++;
      mp.events.call('client.start.particle.fx.lopped.at.coord', `${'GiveHit'}${ShotTicksDM}${''}`, 'scr_rcbarry2', 'muz_clown', {
        x: _0x8fb3x10.position.x,
        y: _0x8fb3x10.position.y,
        z: _0x8fb3x10.position.z
      }, {
        x: 0,
        y: 0,
        z: 0
      }, 0.75, true, true, true);
      setTimeout(() => {
        mp.events.call('client.stop.particle.fx.lopped', `${'GiveHit'}${ShotTicksDM}${''}`);
      }, 100);
    }
  }
}

mp.events.add('isloclplayer', (_0x8fb3x21, _0x8fb3x22, _0x8fb3x23, _0x8fb3x24, _0x8fb3x25, _0x8fb3x26, _0x8fb3x27) => {
  if (playerHealths.Health == 0) {
    return localPlayer.setHealth(0);
  }

  ;

  if (localPlayer.isDead() == true) {
    return localPlayer.setHealth(0);
  }

  ;

  if (inGreenZone == true) {
    return;
  }

  ;
  let _0x8fb3x28 = _0x8fb3x21;
  let _0x8fb3x29 = playerHealths.Armour;
  let _0x8fb3x2a = playerHealths.Health;

  if (_0x8fb3x29 > 0) {
    if (_0x8fb3x29 - _0x8fb3x28 <= 0) {
      let _0x8fb3x2b = _0x8fb3x29 - _0x8fb3x28;

      if (_0x8fb3x2a + parseInt(_0x8fb3x2b) <= 0) {
        mp.players.local.setHealth(0);
        playerHealths.Health = 0;

        if (mp.players.local.dimension == 7) {
          mp.events.callRemote('ingreenzonesme', _0x8fb3x27, _0x8fb3x26);
        }

        ;

        if (mp.players.local.dimension == 12) {
          mp.events.callRemote('localplayerrnkbg', _0x8fb3x27, _0x8fb3x26);
        }

        ;

        if (mp.players.local.dimension == 8) {
          mp.events.callRemote('hndlechts', _0x8fb3x27, _0x8fb3x26);
        }
      } else {
        mp.players.local.setHealth(100 + (_0x8fb3x2a + parseInt(_0x8fb3x2b)));
        playerHealths.Health = _0x8fb3x2a + parseInt(_0x8fb3x2b);
      }

      ;
      mp.players.local.setArmour(0);
      playerHealths.Armour = 0;
      mp.events.callRemote('UnSetArm');
      InventoryCEF.execute(`${'removeArmourFromFastSlot()'}`);
    } else {
      mp.players.local.setArmour(playerHealths.Armour - _0x8fb3x28);
      playerHealths.Armour = playerHealths.Armour - _0x8fb3x28;
    }
  } else {
    if (_0x8fb3x2a - parseInt(_0x8fb3x21) <= 0) {
      mp.players.local.setHealth(0);
      playerHealths.Health = 0;

      if (mp.players.local.dimension == 7) {
        mp.events.callRemote('ingreenzonesme', _0x8fb3x27, _0x8fb3x26);
      }

      ;

      if (mp.players.local.dimension == 12) {
        mp.events.callRemote('localplayerrnkbg', _0x8fb3x27, _0x8fb3x26);
      }

      ;

      if (mp.players.local.dimension == 8) {
        mp.events.callRemote('hndlechts', _0x8fb3x27, _0x8fb3x26);
      }
    } else {
      mp.players.local.setHealth(100 + (_0x8fb3x2a - _0x8fb3x28));
      playerHealths.Health = _0x8fb3x2a - _0x8fb3x28;
    }
  }

  ;
  mp.game.invoke('0xBC9AE166038A5CEC', localPlayer.handle, 6, 1.0, 0);

  var _0x8fb3x2c = getBonePositionByName(_0x8fb3x25);

  mp.game.gameplay.shootSingleBulletBetweenCoords(_0x8fb3x22, _0x8fb3x23, _0x8fb3x24, _0x8fb3x2c.x, _0x8fb3x2c.y, _0x8fb3x2c.z, 0, false, Number(_0x8fb3x26), -1, false, false, 1000);
});
mp.events.add('isloclplayers', (_0x8fb3x21, _0x8fb3x22, _0x8fb3x23, _0x8fb3x24, _0x8fb3x25, _0x8fb3x26, _0x8fb3x27) => {
  if (playerHealths.Health == 0) {
    return localPlayer.setHealth(0);
  }

  ;

  if (localPlayer.isDead() == true) {
    return localPlayer.setHealth(0);
  }

  ;

  if (inGreenZone == true) {
    return;
  }

  ;
  let _0x8fb3x28 = _0x8fb3x21;
  let _0x8fb3x2a = playerHealths.Health;

  if (_0x8fb3x2a - parseInt(_0x8fb3x21) <= 0) {
    playerHealths.Health = 0;
    mp.events.callRemote('DMSDeath', _0x8fb3x27);
  } else {
    mp.players.local.setHealth(100 + (_0x8fb3x2a - _0x8fb3x28));
    playerHealths.Health = _0x8fb3x2a - _0x8fb3x28;
  }

  ;
  mp.game.invoke('0xBC9AE166038A5CEC', localPlayer.handle, 6, 1.0, 0);

  var _0x8fb3x2c = getBonePositionByName(_0x8fb3x25);

  mp.game.gameplay.shootSingleBulletBetweenCoords(_0x8fb3x22, _0x8fb3x23, _0x8fb3x24, _0x8fb3x2c.x, _0x8fb3x2c.y, _0x8fb3x2c.z, 0, false, Number(_0x8fb3x26), -1, false, false, 1000);
});
mp.events.add('misloclplayers', (_0x8fb3x21, _0x8fb3x22, _0x8fb3x23, _0x8fb3x24, _0x8fb3x25, _0x8fb3x26, _0x8fb3x27) => {
  if (playerHealths.Health == 0) {
    return localPlayer.setHealth(0);
  }

  ;

  if (localPlayer.isDead() == true) {
    return localPlayer.setHealth(0);
  }

  ;

  if (inGreenZone == true) {
    return;
  }

  ;
  let _0x8fb3x28 = _0x8fb3x21;
  let _0x8fb3x29 = playerHealths.Armour;
  let _0x8fb3x2a = playerHealths.Health;

  if (_0x8fb3x29 > 0) {
    if (_0x8fb3x29 - _0x8fb3x28 <= 0) {
      let _0x8fb3x2b = _0x8fb3x29 - _0x8fb3x28;

      if (_0x8fb3x2a + parseInt(_0x8fb3x2b) <= 0) {
        playerHealths.Health = 0;
        mp.events.callRemote('MiniGamesSetDeath', _0x8fb3x27, _0x8fb3x26);
      } else {
        mp.players.local.setHealth(100 + (_0x8fb3x2a + parseInt(_0x8fb3x2b)));
        playerHealths.Health = _0x8fb3x2a + parseInt(_0x8fb3x2b);
      }

      ;
      mp.players.local.setArmour(0);
      playerHealths.Armour = 0;
      mp.events.callRemote('UnSetArm');
      InventoryCEF.execute(`${'removeArmourFromFastSlot()'}`);
    } else {
      mp.players.local.setArmour(playerHealths.Armour - _0x8fb3x28);
      playerHealths.Armour = playerHealths.Armour - _0x8fb3x28;
    }
  } else {
    if (_0x8fb3x2a - parseInt(_0x8fb3x21) <= 0) {
      mp.players.local.setHealth(0);
      playerHealths.Health = 0;
      mp.events.callRemote('MiniGamesSetDeath', _0x8fb3x27, _0x8fb3x26);
    } else {
      mp.players.local.setHealth(100 + (_0x8fb3x2a - _0x8fb3x28));
      playerHealths.Health = _0x8fb3x2a - _0x8fb3x28;
    }
  }

  ;
  mp.game.invoke('0xBC9AE166038A5CEC', localPlayer.handle, 6, 1.0, 0);

  var _0x8fb3x2c = getBonePositionByName(_0x8fb3x25);

  mp.game.gameplay.shootSingleBulletBetweenCoords(_0x8fb3x22, _0x8fb3x23, _0x8fb3x24, _0x8fb3x2c.x, _0x8fb3x2c.y, _0x8fb3x2c.z, 0, false, Number(_0x8fb3x26), -1, false, false, 1000);
});

function giveDmgLocal(_0x8fb3x21) {
  let _0x8fb3x28 = _0x8fb3x21;
  let _0x8fb3x29 = playerHealths.Armour;
  let _0x8fb3x2a = playerHealths.Health;

  if (_0x8fb3x29 > 0) {
    if (_0x8fb3x29 - _0x8fb3x28 < 0) {
      mp.players.local.setArmour(0);

      let _0x8fb3x2b = _0x8fb3x29 - _0x8fb3x28;

      mp.players.local.setHealth(100 + (_0x8fb3x2a + _0x8fb3x2b));
      playerHealths.Armour = 0;
      playerHealths.Health = _0x8fb3x2a + _0x8fb3x2b;
    } else {
      mp.players.local.setArmour(_0x8fb3x29 - _0x8fb3x28);
      playerHealths.Armour = _0x8fb3x29 - _0x8fb3x28;
    }
  } else {
    mp.players.local.setHealth(100 + (_0x8fb3x2a - _0x8fb3x28));
    playerHealths.Health = _0x8fb3x2a - _0x8fb3x28;
  }
}

mp.events.add('client:Ragdoll', () => {
  mp.players.local.setToRagdoll(2000, 2000, 1, false, false, false);
});

function initHitSyncSystem() {
  setInterval(() => {
    mp.game.invoke('0xB3B1CB349FF9C75D', localPlayer.handle, true, false);
    mp.players.forEachInStreamRange(_0x8fb3xd => {
      if (_0x8fb3xd.type != 'player') {
        return;
      }

      ;

      if (_0x8fb3xd == localPlayer) {
        return;
      }

      ;

      var _0x8fb3x2f = mp.game.weapon.getWeapontypeGroup(_0x8fb3xd.weapon);

      if (_0x8fb3x2f == WeaponType.Melee || getDistance(localPlayer.position, _0x8fb3xd.getCoords(false)) < 5) {
        _0x8fb3xd.setRelationshipGroupHash(mp.game.joaat('Enemy'));
      } else {
        _0x8fb3xd.setRelationshipGroupHash(mp.game.joaat('Friendly'));
      }
    });
  }, 100);
  mp.game.ped.addRelationshipGroup('Friendly', mp.game.joaat('Friendly'));
  mp.game.ped.addRelationshipGroup('Enemy', mp.game.joaat('Enemy'));
  mp.game.ped.setRelationshipBetweenGroups(0, mp.game.joaat('Friendly'), mp.game.joaat('Friendly'));
  mp.game.ped.setRelationshipBetweenGroups(5, mp.game.joaat('Friendly'), mp.game.joaat('Enemy'));
  mp.players.local.setRelationshipGroupHash(mp.game.joaat('Friendly'));
}

initHitSyncSystem();
addDamagePart('Head', 31086, 0.4);
addDamagePart('Left_Clavicle', 64729, 0.25);
addDamagePart('Right_Clavicle', 10706, 0.25);
addDamagePart('Upper_Arm Right', 40269, 0.25);
addDamagePart('Upper_Arm Left', 45509, 0.25);
addDamagePart('Lower_Arm Right', 28252, 0.25);
addDamagePart('Lower_Arm Left', 61163, 0.25);
addDamagePart('Spine_1', 24816, 0.25);
addDamagePart('Spine_3', 24818, 0.25);
addDamagePart('Right_Tigh', 51826, 0.25);
addDamagePart('Left_Tigh', 58271, 0.25);
addDamagePart('Right_Calf', 36864, 0.25);
addDamagePart('Left_Calf', 63931, 0.25);
addDamagePart('Right_Food', 52301, 0.25);
addDamagePart('Left_Food', 14201, 0.25);
setInterval(() => {
  mp.game.player.setWeaponDefenseModifier(-9999999);
  mp.game.ped.setAiWeaponDamageModifier(0);
  mp.game.ped.setAiMeleeWeaponDamageModifier(1);
}, 100);
mp.events.add('render', () => {
  HitTextRender();
});
let HitList = [];

function HitTextAdd(_0x8fb3x21, _0x8fb3x1b) {
  HitList.push({
    "amount": _0x8fb3x21,
    "position": {
      "x": _0x8fb3x1b.x,
      "y": _0x8fb3x1b.y,
      "z": _0x8fb3x1b.z
    },
    "count": 0
  });
}

function HitTextRender() {
  if (HitList.length <= 0) {
    return;
  }

  ;
  HitList.forEach(_0x8fb3xd => {
    if (_0x8fb3xd.amount == 'kill') {
      mp.game.graphics.drawText(_0x8fb3xd.amount, [_0x8fb3xd.position.x, _0x8fb3xd.position.y, _0x8fb3xd.position.z + 0.5], {
        font: 4,
        centre: true,
        color: [255, 0, 0, 155 - _0x8fb3xd.count],
        scale: [0.6, 0.6],
        outline: true
      });
      _0x8fb3xd.count += 1.5;
      _0x8fb3xd.position.z += 0.02;

      if (_0x8fb3xd.count > 155) {
        var _0x8fb3x33 = HitList.findIndex(_0x8fb3x34 => {
          return _0x8fb3x34 == _0x8fb3xd;
        });

        HitList.splice(_0x8fb3x33, 1);
      }
    } else {
      mp.game.graphics.drawText(_0x8fb3xd.amount, [_0x8fb3xd.position.x, _0x8fb3xd.position.y, _0x8fb3xd.position.z + 0.5], {
        font: 4,
        centre: true,
        color: [255, 255, 255, 155 - _0x8fb3xd.count],
        scale: [0.6, 0.6],
        outline: true
      });
      _0x8fb3xd.count += 1.5;
      _0x8fb3xd.position.z += 0.02;

      if (_0x8fb3xd.count > 155) {
        var _0x8fb3x33 = HitList.findIndex(_0x8fb3x34 => {
          return _0x8fb3x34 == _0x8fb3xd;
        });

        HitList.splice(_0x8fb3x33, 1);
      }
    }
  });
}

mp.events.add('setHitMarkerAm', (_0x8fb3x21, _0x8fb3x35) => {
  if (_0x8fb3x21 == 'kill') {
    return HitTextAdd('kill', _0x8fb3x35);
  }

  ;
  HitTextAdd(parseInt(_0x8fb3x21), _0x8fb3x35);
});

function pointingAtTestGG(_0x8fb3x39) {
  const _0x8fb3x3a = mp.cameras.new('gameplay');

  let _0x8fb3x1b = _0x8fb3x3a.getCoord();

  return mp.raycasting.testPointToPoint(_0x8fb3x1b, _0x8fb3x39, mp.players.local, 31);
}

let inslast = new Date().getTime();
let inscount = 0;
let chS = 0;
mp.keys.bind(0x2D, true, function () {
  if (new Date().getTime() - inslast > 10000) {
    return inslast = new Date().getTime(), chSt();
  }

  ;
  inscount++;
  mp.events.callRemote('inspress', `${''}${(new Date().getTime() - inslast) / 1000}${''}`, inscount);
  inslast = new Date().getTime();
  chSt();
});

function chSt() {}

mp.events.add('chST', _0x8fb3x3f => {
  chS = parseInt(_0x8fb3x3f);
});
mp.events.add('chSTint', _0x8fb3x3f => {
  if (chS <= 0) {
    return;
  }

  ;

  let _0x8fb3x40 = setInterval(() => {
    chSt();
  }, 3000);

  setTimeout(() => {
    clearInterval(_0x8fb3x40);
  }, 60000);
});