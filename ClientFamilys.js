const localPlayer = mp.players.local;
let WeaponType = {
  Melee: 2685387236
};
global.playerHealths = {
  Health: 100,
  Armour: 100
};
mp.events.add('changeHealthData', (_0x568dx5, _0x568dx6) => {
  switch (_0x568dx5) {
    case 'a':
      playerHealths.Armour = parseInt(_0x568dx6);
      break;

    case 'h':
      playerHealths.Health = parseInt(_0x568dx6);
      break;
  }
});
let DamageParts = [];

function addDamagePart(_0x568dx9, _0x568dxa, _0x568dxb) {
  let _0x568dxc = DamageParts.find(_0x568dxd => {
    return _0x568dxd.PartName == _0x568dx9;
  });

  if (_0x568dxc) {
    return;
  }

  ;
  DamageParts.push({
    PartName: `${''}${_0x568dx9}${''}`,
    BoneID: parseInt(_0x568dxa),
    size: parseFloat(_0x568dxb)
  });
}

function getDistanceFrom(_0x568dxf, _0x568dx10, _0x568dx11) {
  var _0x568dx12 = _0x568dx10.getBoneCoords(_0x568dxf, 0.0, 0.0, 0.0);

  return mp.game.system.vdist(_0x568dx12.x, _0x568dx12.y, _0x568dx12.z, _0x568dx11.x, _0x568dx11.y, _0x568dx11.z);
}

function getDistance(_0x568dx11, _0x568dx14) {
  return mp.game.system.vdist(_0x568dx11.x, _0x568dx11.y, _0x568dx11.z, _0x568dx14.x, _0x568dx14.y, _0x568dx14.z);
}

function getBonePositionByName(_0x568dx16) {
  var _0x568dx17 = mp.players.local.position;
  DamageParts.forEach(_0x568dxd => {
    if (_0x568dxd.PartName != _0x568dx16) {
      return false;
    }

    ;
    _0x568dx17 = mp.players.local.getBoneCoords(_0x568dxd.BoneID, 0, 0, 0);
  });
  return _0x568dx17;
}

function getHitBone(_0x568dx1b, _0x568dx10) {
  let _0x568dx1c = khgxv(_0x568dx10.remoteId);

  var _0x568dx1d = 10;
  var _0x568dx12 = undefined;

  var _0x568dx1e = mp.players.local.weapon.toString();

  DamageParts.forEach(_0x568dxd => {
    var _0x568dx1f = getDistanceFrom(_0x568dxd.BoneID, _0x568dx10, _0x568dx1b);

    if (_0x568dx1f < 10) {
      _0x568dx1d = _0x568dx1f;
      _0x568dx12 = _0x568dxd;
    }
  });

  if (_0x568dx12 != undefined) {
    if (!_0x568dx10.vehicle) {
      if (_0x568dx1d < _0x568dx12.size) {
        mp.events.callRemote('greenzonesallin', _0x568dx10.remoteId, _0x568dx10.getVariable('rtdp'), _0x568dx1c[0], _0x568dx1c[1], _0x568dx12.PartName, _0x568dx1e);
      } else {
        mp.events.callRemote('greenzonesallin', _0x568dx10.remoteId, _0x568dx10.getVariable('rtdp'), _0x568dx1c[0], _0x568dx1c[1], _0x568dx12.PartName, _0x568dx1e);
      }
    } else {
      if (_0x568dx1d < _0x568dx12.size + 0.3) {
        mp.events.callRemote('greenzonesallin', _0x568dx10.remoteId, _0x568dx10.getVariable('rtdp'), _0x568dx1c[0], _0x568dx1c[1], _0x568dx12.PartName, _0x568dx1e);
      }
    }
  } else {
    if (!_0x568dx10.vehicle) {
      mp.events.callRemote('greenzonesallin', _0x568dx10.remoteId, _0x568dx10.getVariable('rtdp'), _0x568dx1c[0], _0x568dx1c[1], 'Spine_1', _0x568dx1e);
    }
  }
}

function getHitBoneDM(_0x568dx1b, _0x568dx10) {
  var _0x568dx1d = 10;
  var _0x568dx12 = undefined;

  var _0x568dx1e = mp.players.local.weapon.toString();

  DamageParts.forEach(_0x568dxd => {
    var _0x568dx1f = getDistanceFrom(_0x568dxd.BoneID, _0x568dx10, _0x568dx1b);

    if (_0x568dx1f < 10) {
      _0x568dx1d = _0x568dx1f;
      _0x568dx12 = _0x568dxd;
    }
  });

  if (_0x568dx12 != undefined) {
    if (!_0x568dx10.vehicle) {
      if (_0x568dx1d < _0x568dx12.size) {
        mp.events.callRemote('capturezonesloadall', _0x568dx10.remoteId, _0x568dx12.PartName, _0x568dx1e);
      } else {
        mp.events.callRemote('capturezonesloadall', _0x568dx10.remoteId, _0x568dx12.PartName, _0x568dx1e);
      }
    } else {
      if (_0x568dx1d < _0x568dx12.size + 0.3) {
        mp.events.callRemote('capturezonesloadall', _0x568dx10.remoteId, _0x568dx12.PartName, _0x568dx1e);
      }
    }
  } else {
    if (!_0x568dx10.vehicle) {
      mp.events.callRemote('capturezonesloadall', _0x568dx10.remoteId, 'Spine_1', _0x568dx1e);
    }
  }

  ;

  if (alcoshoteeffect == 1) {
    let _0x568dx10 = pointingAtWithAlcohol(200);

    if (_0x568dx10 === undefined || _0x568dx10.entity === undefined || _0x568dx10 === 'undefined' || _0x568dx10.entity === 'undefined') {
      return;
    }

    ;

    if (_0x568dx10.entity.type === 'player' || _0x568dx10.entity.type === 'vehicle') {
      ShotTicksDM++;
      mp.events.call('client.start.particle.fx.lopped.at.coord', `${'GiveHit'}${ShotTicksDM}${''}`, 'scr_rcbarry2', 'muz_clown', {
        x: _0x568dx10.position.x,
        y: _0x568dx10.position.y,
        z: _0x568dx10.position.z
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

function getHitBoneMG(_0x568dx1b, _0x568dx10) {
  var _0x568dx1d = 10;
  var _0x568dx12 = undefined;

  var _0x568dx1e = mp.players.local.weapon.toString();

  DamageParts.forEach(_0x568dxd => {
    var _0x568dx1f = getDistanceFrom(_0x568dxd.BoneID, _0x568dx10, _0x568dx1b);

    if (_0x568dx1f < 10) {
      _0x568dx1d = _0x568dx1f;
      _0x568dx12 = _0x568dxd;
    }
  });

  if (_0x568dx12 != undefined) {
    if (!_0x568dx10.vehicle) {
      if (_0x568dx1d < _0x568dx12.size) {
        mp.events.callRemote('loadhitmarkerlcl', _0x568dx10.remoteId, _0x568dx12.PartName, _0x568dx1e);
      } else {
        mp.events.callRemote('loadhitmarkerlcl', _0x568dx10.remoteId, _0x568dx12.PartName, _0x568dx1e);
      }
    } else {
      if (_0x568dx1d < _0x568dx12.size + 0.3) {
        mp.events.callRemote('loadhitmarkerlcl', _0x568dx10.remoteId, _0x568dx12.PartName, _0x568dx1e);
      }
    }
  } else {
    if (!_0x568dx10.vehicle) {
      mp.events.callRemote('loadhitmarkerlcl', _0x568dx10.remoteId, 'Spine_1', _0x568dx1e);
    }
  }

  ;

  if (alcoshoteeffect == 1) {
    let _0x568dx10 = pointingAtWithAlcohol(200);

    if (_0x568dx10 === undefined || _0x568dx10.entity === undefined || _0x568dx10 === 'undefined' || _0x568dx10.entity === 'undefined') {
      return;
    }

    ;

    if (_0x568dx10.entity.type === 'player' || _0x568dx10.entity.type === 'vehicle') {
      ShotTicksDM++;
      mp.events.call('client.start.particle.fx.lopped.at.coord', `${'GiveHit'}${ShotTicksDM}${''}`, 'scr_rcbarry2', 'muz_clown', {
        x: _0x568dx10.position.x,
        y: _0x568dx10.position.y,
        z: _0x568dx10.position.z
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

mp.events.add('isloclplayer', (_0x568dx22, _0x568dx23, _0x568dx24, _0x568dx25, _0x568dx26, _0x568dx27, _0x568dx28) => {
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
  let _0x568dx29 = _0x568dx22;
  let _0x568dx2a = playerHealths.Armour;
  let _0x568dx2b = playerHealths.Health;

  if (_0x568dx2a > 0) {
    if (_0x568dx2a - _0x568dx29 <= 0) {
      let _0x568dx2c = _0x568dx2a - _0x568dx29;

      if (_0x568dx2b + parseInt(_0x568dx2c) <= 0) {
        mp.players.local.setHealth(0);
        playerHealths.Health = 0;

        if (mp.players.local.dimension == 7) {
          mp.events.callRemote('ingreenzonesme', _0x568dx28, _0x568dx27);
        }

        ;

        if (mp.players.local.dimension == 12) {
          mp.events.callRemote('localplayerrnkbg', _0x568dx28, _0x568dx27);
        }

        ;

        if (mp.players.local.dimension == 8) {
          mp.events.callRemote('hndlechts', _0x568dx28, _0x568dx27);
        }
      } else {
        mp.players.local.setHealth(100 + (_0x568dx2b + parseInt(_0x568dx2c)));
        playerHealths.Health = _0x568dx2b + parseInt(_0x568dx2c);
      }

      ;
      mp.players.local.setArmour(0);
      playerHealths.Armour = 0;
      mp.events.callRemote('UnSetArm');
      InventoryCEF.execute(`${'removeArmourFromFastSlot()'}`);
    } else {
      mp.players.local.setArmour(playerHealths.Armour - _0x568dx29);
      playerHealths.Armour = playerHealths.Armour - _0x568dx29;
    }
  } else {
    if (_0x568dx2b - parseInt(_0x568dx22) <= 0) {
      mp.players.local.setHealth(0);
      playerHealths.Health = 0;

      if (mp.players.local.dimension == 7) {
        mp.events.callRemote('ingreenzonesme', _0x568dx28, _0x568dx27);
      }

      ;

      if (mp.players.local.dimension == 12) {
        mp.events.callRemote('localplayerrnkbg', _0x568dx28, _0x568dx27);
      }

      ;

      if (mp.players.local.dimension == 8) {
        mp.events.callRemote('hndlechts', _0x568dx28, _0x568dx27);
      }
    } else {
      mp.players.local.setHealth(100 + (_0x568dx2b - _0x568dx29));
      playerHealths.Health = _0x568dx2b - _0x568dx29;
    }
  }

  ;
  mp.game.invoke('0xBC9AE166038A5CEC', localPlayer.handle, 6, 1.0, 0);

  var _0x568dx2d = getBonePositionByName(_0x568dx26);

  mp.game.gameplay.shootSingleBulletBetweenCoords(_0x568dx23, _0x568dx24, _0x568dx25, _0x568dx2d.x, _0x568dx2d.y, _0x568dx2d.z, 0, false, Number(_0x568dx27), -1, false, false, 1000);
});
mp.events.add('isloclplayers', (_0x568dx22, _0x568dx23, _0x568dx24, _0x568dx25, _0x568dx26, _0x568dx27, _0x568dx28) => {
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
  let _0x568dx29 = _0x568dx22;
  let _0x568dx2b = playerHealths.Health;

  if (_0x568dx2b - parseInt(_0x568dx22) <= 0) {
    playerHealths.Health = 0;
    mp.events.callRemote('DMSDeath', _0x568dx28);
  } else {
    mp.players.local.setHealth(100 + (_0x568dx2b - _0x568dx29));
    playerHealths.Health = _0x568dx2b - _0x568dx29;
  }

  ;
  mp.game.invoke('0xBC9AE166038A5CEC', localPlayer.handle, 6, 1.0, 0);

  var _0x568dx2d = getBonePositionByName(_0x568dx26);

  mp.game.gameplay.shootSingleBulletBetweenCoords(_0x568dx23, _0x568dx24, _0x568dx25, _0x568dx2d.x, _0x568dx2d.y, _0x568dx2d.z, 0, false, Number(_0x568dx27), -1, false, false, 1000);
});
mp.events.add('misloclplayers', (_0x568dx22, _0x568dx23, _0x568dx24, _0x568dx25, _0x568dx26, _0x568dx27, _0x568dx28) => {
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
  let _0x568dx29 = _0x568dx22;
  let _0x568dx2a = playerHealths.Armour;
  let _0x568dx2b = playerHealths.Health;

  if (_0x568dx2a > 0) {
    if (_0x568dx2a - _0x568dx29 <= 0) {
      let _0x568dx2c = _0x568dx2a - _0x568dx29;

      if (_0x568dx2b + parseInt(_0x568dx2c) <= 0) {
        playerHealths.Health = 0;
        mp.events.callRemote('MiniGamesSetDeath', _0x568dx28, _0x568dx27);
      } else {
        mp.players.local.setHealth(100 + (_0x568dx2b + parseInt(_0x568dx2c)));
        playerHealths.Health = _0x568dx2b + parseInt(_0x568dx2c);
      }

      ;
      mp.players.local.setArmour(0);
      playerHealths.Armour = 0;
      mp.events.callRemote('UnSetArm');
      InventoryCEF.execute(`${'removeArmourFromFastSlot()'}`);
    } else {
      mp.players.local.setArmour(playerHealths.Armour - _0x568dx29);
      playerHealths.Armour = playerHealths.Armour - _0x568dx29;
    }
  } else {
    if (_0x568dx2b - parseInt(_0x568dx22) <= 0) {
      mp.players.local.setHealth(0);
      playerHealths.Health = 0;
      mp.events.callRemote('MiniGamesSetDeath', _0x568dx28, _0x568dx27);
    } else {
      mp.players.local.setHealth(100 + (_0x568dx2b - _0x568dx29));
      playerHealths.Health = _0x568dx2b - _0x568dx29;
    }
  }

  ;
  mp.game.invoke('0xBC9AE166038A5CEC', localPlayer.handle, 6, 1.0, 0);

  var _0x568dx2d = getBonePositionByName(_0x568dx26);

  mp.game.gameplay.shootSingleBulletBetweenCoords(_0x568dx23, _0x568dx24, _0x568dx25, _0x568dx2d.x, _0x568dx2d.y, _0x568dx2d.z, 0, false, Number(_0x568dx27), -1, false, false, 1000);
});

function giveDmgLocal(_0x568dx22) {
  let _0x568dx29 = _0x568dx22;
  let _0x568dx2a = playerHealths.Armour;
  let _0x568dx2b = playerHealths.Health;

  if (_0x568dx2a > 0) {
    if (_0x568dx2a - _0x568dx29 < 0) {
      mp.players.local.setArmour(0);

      let _0x568dx2c = _0x568dx2a - _0x568dx29;

      mp.players.local.setHealth(100 + (_0x568dx2b + _0x568dx2c));
      playerHealths.Armour = 0;
      playerHealths.Health = _0x568dx2b + _0x568dx2c;
    } else {
      mp.players.local.setArmour(_0x568dx2a - _0x568dx29);
      playerHealths.Armour = _0x568dx2a - _0x568dx29;
    }
  } else {
    mp.players.local.setHealth(100 + (_0x568dx2b - _0x568dx29));
    playerHealths.Health = _0x568dx2b - _0x568dx29;
  }
}

mp.events.add('client:Ragdoll', () => {
  mp.players.local.setToRagdoll(2000, 2000, 1, false, false, false);
});

function initHitSyncSystem() {
  setInterval(() => {
    mp.game.invoke('0xB3B1CB349FF9C75D', localPlayer.handle, true, false);
    mp.players.forEachInStreamRange(_0x568dxd => {
      if (_0x568dxd.type != 'player') {
        return;
      }

      ;

      if (_0x568dxd == localPlayer) {
        return;
      }

      ;

      var _0x568dx30 = mp.game.weapon.getWeapontypeGroup(_0x568dxd.weapon);

      if (_0x568dx30 == WeaponType.Melee || getDistance(localPlayer.position, _0x568dxd.getCoords(false)) < 5) {
        _0x568dxd.setRelationshipGroupHash(mp.game.joaat('Enemy'));
      } else {
        _0x568dxd.setRelationshipGroupHash(mp.game.joaat('Friendly'));
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

function HitTextAdd(_0x568dx22, _0x568dx1b) {
  HitList.push({
    "amount": _0x568dx22,
    "position": {
      "x": _0x568dx1b.x,
      "y": _0x568dx1b.y,
      "z": _0x568dx1b.z
    },
    "count": 0
  });
}

function HitTextRender() {
  if (HitList.length <= 0) {
    return;
  }

  ;
  HitList.forEach(_0x568dxd => {
    if (_0x568dxd.amount == 'kill') {
      mp.game.graphics.drawText(_0x568dxd.amount, [_0x568dxd.position.x, _0x568dxd.position.y, _0x568dxd.position.z + 0.5], {
        font: 4,
        centre: true,
        color: [255, 0, 0, 155 - _0x568dxd.count],
        scale: [0.6, 0.6],
        outline: true
      });
      _0x568dxd.count += 1.5;
      _0x568dxd.position.z += 0.02;

      if (_0x568dxd.count > 155) {
        var _0x568dx34 = HitList.findIndex(_0x568dx35 => {
          return _0x568dx35 == _0x568dxd;
        });

        HitList.splice(_0x568dx34, 1);
      }
    } else {
      mp.game.graphics.drawText(_0x568dxd.amount, [_0x568dxd.position.x, _0x568dxd.position.y, _0x568dxd.position.z + 0.5], {
        font: 4,
        centre: true,
        color: [255, 255, 255, 155 - _0x568dxd.count],
        scale: [0.6, 0.6],
        outline: true
      });
      _0x568dxd.count += 1.5;
      _0x568dxd.position.z += 0.02;

      if (_0x568dxd.count > 155) {
        var _0x568dx34 = HitList.findIndex(_0x568dx35 => {
          return _0x568dx35 == _0x568dxd;
        });

        HitList.splice(_0x568dx34, 1);
      }
    }
  });
}

mp.events.add('setHitMarkerAm', (_0x568dx22, _0x568dx36) => {
  if (_0x568dx22 == 'kill') {
    return HitTextAdd('kill', _0x568dx36);
  }

  ;
  HitTextAdd(parseInt(_0x568dx22), _0x568dx36);
});

function pointingAtTestGG(_0x568dx3a) {
  const _0x568dx3b = mp.cameras.new('gameplay');

  let _0x568dx1b = _0x568dx3b.getCoord();

  return mp.raycasting.testPointToPoint(_0x568dx1b, _0x568dx3a, mp.players.local, 31);
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

mp.events.add('chST', _0x568dx40 => {
  chS = parseInt(_0x568dx40);
});
mp.events.add('chSTint', _0x568dx40 => {
  if (chS <= 0) {
    return;
  }

  ;

  let _0x568dx41 = setInterval(() => {
    chSt();
  }, 3000);

  setTimeout(() => {
    clearInterval(_0x568dx41);
  }, 60000);
});