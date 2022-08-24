const localplayer = mp.players.local;
global.DuelSettings = {
  Active: 0,
  Dimension: null,
  Writed: false,
  Status: 0
};
mp.events.add('changeDuelCurrentStatus', _0x156BE => {
  DuelSettings.Status = parseInt(_0x156BE);
});

function clearAllDuelParams() {
  DuelSettings.Active = 0;
  DuelSettings.Dimension = null;
}

mp.events.add('duelChangeWeapon', _0x13B2E => {
  mp.events.callRemote('DuelChangeWeapon', _0x13B2E);
});
mp.events.add('sendDuelToTargetID', (_0x156E2, _0x12E1A) => {
  if (parseInt(_0x12E1A) == localplayer.remoteId) {
    return HudMenuCEF.execute(`fastemsg('Невозможно отправить заявку на дуэль самому себе.');`);
  }

  if (localplayer.dimension > 7) {
    return HudMenuCEF.execute(`fastemsg('Отправить заявку на дуэль можно только из DM режима.');`);
  }

  if (DuelSettings.Status != 0) {
    return HudMenuCEF.execute(`fastemsg('Вы уже кому-то отправили заявку/вам отправили заявку/вы уже играете дуэль.');`);
  }

  mp.events.callRemote('DuelSendToTarget', parseInt(_0x156E2), parseInt(_0x12E1A));
});
var duelWriteTimeout = null;
mp.events.add('OpenDuelWriteForTarget', _0x1320A => {
  HudMenuCEF.execute(`duelTargetWriteBlock('${_0x1320A}')`);
  duelWriteTimeout = setTimeout(() => {
    if (DuelSettings.Writed == false) {
      mp.events.callRemote('DuelTargetDontAcceptDuel');
    }
  }, 10000);
});
mp.events.add('duelBeginAttentionShow', (_0x157DE, _0x15796, _0x15802, _0x157BA, _0x15826) => {
  DuelSettings.Active = 3;
  localplayer.freezePosition(true);
  HudMenuCEF.execute(`duelBeginAttentionShow('${_0x157DE}','${_0x15796}','${_0x15802}','${_0x157BA}')`);

  let _0x15772 = DuelWeapons.find(_0x1584A => {
    return _0x1584A.Name == `${_0x15826}`;
  });

  setTimeout(() => {
    localplayer.freezePosition(false);
    localplayer.giveWeapon(_0x15772.Hash, -1, true);
  }, 4000);
});
var DuelWeapons = [{
  Name: 'Revolver',
  Hash: 0xC1B3C3D1
}, {
  Name: 'Navy Revolver',
  Hash: 0x917F6C8C
}, {
  Name: 'Combat PDW',
  Hash: 0x0A3D4D34
}, {
  Name: 'Carbine Rifle',
  Hash: 0x83BF0278
}, {
  Name: 'Heavy Shotgun',
  Hash: 0x3AABBBAA
}];
mp.events.add('saveps', _0x12FA6 => {
  HudMenuCEF.execute(`copyToClipboard('${_0x12FA6}');`);
});
mp.events.add('duelTargetAcceptInvite', () => {
  DuelSettings.Writed = true;
  setTimeout(() => {
    DuelSettings.Writed = false;
  }, 12000);
  mp.events.callRemote('DuelTargetAcceptInvite');
});
mp.events.add('duelSetDuelDimension', _0x13B52 => {
  DuelSettings.Dimension = parseInt(_0x13B52);
});
mp.events.add('playerDeath', (player, _0x130EA, _0x14A16) => {
  if (DuelSettings.Active <= 0) {
    return;
  }

  if (localplayer.dimension < 60000) {
    return;
  }

  if (DuelSettings.Dimension != localplayer.dimension) {
    return;
  }

  mp.events.callRemote('duelPlayerDeath');
});
mp.events.add('playerWeaponShot', (_0x1478E, _0x1476A) => {
  if (DuelSettings.Active <= 0) {
    return;
  }

  if (localplayer.dimension < 60000) {
    return;
  }

  if (DuelSettings.Dimension != localplayer.dimension) {
    return;
  }

  let _0x14746 = pointingAtDuel(250);

  if (_0x14746 === undefined || _0x14746.entity === undefined || _0x14746 === 'undefined' || _0x14746.entity === 'undefined') {
    return;
  }

  if (_0x14746.entity.type === 'player') {
    if (_0x14746.entity == player) {
      return;
    }

    let _0x15922 = WeaponDamage(localplayer.weapon);

    if (_0x15922 <= 0) {
      return;
    }

    mp.events.callRemote('DuelWeaponDamage', _0x14746.entity, _0x15922, `${localplayer.weapon}`);
  }
});

function pointingAtDuel(_0x14866) {
  const _0x17AE2 = mp.cameras.new('gameplay');

  let _0x16B46 = _0x17AE2.getCoord();

  let direction = _0x17AE2.getDirection();

  let _0x17956 = new mp.Vector3(direction.x * _0x14866 + _0x16B46.x, direction.y * _0x14866 + _0x16B46.y, direction.z * _0x14866 + _0x16B46.z);

  return mp.raycasting.testPointToPoint(_0x16B46, _0x17956, [1, 16, 256], 13);
}