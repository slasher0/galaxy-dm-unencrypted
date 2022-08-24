const localplayer = mp.players.local;
mp.markers.new(1, new mp.Vector3(166.00889587402344, -1297.617431640625, 28.364152908325195), 2, {
  direction: 0,
  rotation: 0,
  color: [255, 0, 0, 150],
  visible: true,
  dimension: 8
});
mp.labels.new(`GUNGAME [100$] (E)`, new mp.Vector3(166.00889587402344, -1297.617431640625, 29.364152908325195), {
  font: 4,
  drawDistance: 30,
  color: [255, 255, 255, 255],
  dimension: 8
});
let GunGameColshape = mp.colshapes.newCircle(166.00889587402344, -1297.617431640625, 2, 8);
let GunGameArenaColshape = mp.colshapes.newCircle(166.00889587402344, -1297.617431640625, 3, 8);
global.GunGameControlsLock = false;
setInterval(() => {
  if (GunGameControlsLock == true && localplayer.dimension == 8) {
    mp.game.player.disableFiring(true);
    mp.game.controls.disableControlAction(0, 24, true);
    mp.game.controls.disableControlAction(1, 24, true);
    mp.game.controls.disableControlAction(2, 24, true);
    mp.game.controls.disableControlAction(0, 140, true);
    mp.game.controls.disableControlAction(1, 140, true);
    mp.game.controls.disableControlAction(2, 140, true);
    mp.game.controls.disableControlAction(0, 141, true);
    mp.game.controls.disableControlAction(1, 141, true);
    mp.game.controls.disableControlAction(2, 141, true);
  }
}, 0);
mp.events.add('playerEnterColshape', shape => {
  if (shape == GunGameColshape) {}

  if (shape == GunGameArenaColshape) {}
});
mp.events.add('playerExitColshape', shape => {
  if (shape == GunGameColshape) {}

  if (shape == GunGameArenaColshape) {
    if (localplayer.getVariable('GangwarGunGameWrited') == true) {
      mp.events.callRemote('QuitFromGunGameArena');
      HudMenuCEF.execute(`changeGunGameDisplay('close');`);
      ChangeHUDKeysDisplay('open');
      ChangeHUDKillFeedDisplay('open');
      ChangeHUDFreeCaseDisplay('open');
      ShowChat();
    }
  }
});
mp.keys.bind(0x45, false, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (localplayer.dimension == 8 && false) {
    mp.gui.chat.activate(false);
    mp.gui.chat.show(false);
    mp.gui.cursor.visible = true;
    ChangeHUDKeysDisplay('hide');
    ChangeHUDKillFeedDisplay('hide');
    ChangeHUDFreeCaseDisplay('hide');
    ChangeHUDRaitingDisplay('hide');
    mp.events.callRemote('LoadGangwarGGInfo');
    HudMenuCEF.execute(`changeGunGameDisplay('open');`);
  }
});
mp.events.add('LoadGangwarGGInfo', (_0x1722A, _0x17272, _0x1724E) => {
  HudMenuCEF.execute(`changeGunGameInfo('${_0x1722A}','${_0x17272}','${_0x1724E}');`);
});
mp.events.add('changeGunGameCounts', (_0x1722A, _0x1724E) => {
  HudMenuCEF.execute(`changeGunGameCounts('${_0x1722A}','${_0x1724E}');`);
});
mp.events.add('closeGangwarGGInterface', () => {
  HudMenuCEF.execute(`changeGunGameDisplay('close');`);
  mp.gui.cursor.visible = false;
  ChangeHUDKeysDisplay('open');
  ChangeHUDKillFeedDisplay('open');
  ChangeHUDFreeCaseDisplay('open');
  ShowChat();
});
mp.events.add('GangwarGGWrite', () => {
  if (localplayer.getVariable('GangwarGunGameWrited') == true) {
    return HudMenuCEF.execute(`fastemsg('Вы уже записались на игру.');`);
  }

  mp.events.callRemote('WriteGangwarGunGame');
});
mp.events.add('GangwarPlaySyncSounds', _0x12B26 => {
  let _0x17296;

  switch (_0x12B26) {
    case 'GunGameSuccess':
      _0x17296 = mp.game.audio.playSound3D('package://player/musicPlayer/GunGameSuccess.ogg', new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z), 5, 1, 8);
      setTimeout(() => {
        _0x17296.destroy();
      }, 1000);
      break;

    case 'UsingHealthItem':
      _0x17296 = mp.game.audio.playSound3D('package://player/musicPlayer/Health.ogg', new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z), 5, 1, 8);
      setTimeout(() => {
        _0x17296.destroy();
      }, 1000);
      break;

    case 'ShopBuySuccess':
      break;
  }
});
mp.events.add('GangwarPlayLocalSounds', _0x12B26 => {
  InventoryCEF.execute(`GangwarPlayLocalSounds('${_0x12B26}')`);
});
mp.events.addDataHandler('GangwarGunGameLvl', (_0x12C22, _0x12B4A) => {
  if (localplayer.dimension == 10) {
    if (_0x12C22.type === 'player') {
      mp.events.call('SetGangwarGGTop');
    }
  }
});
mp.events.add('SetGangwarGGTop', () => {
  let _0x15D36 = mp.players.toArray().filter(_0x15DA2 => {
    return _0x15DA2.hasVariable('GangwarGunGameLvl') && _0x15DA2.dimension == 10;
  });

  _0x15D36.sort((_0x15DC6, _0x15DEA) => {
    return _0x15DEA.getVariable('GangwarGunGameLvl') - _0x15DC6.getVariable('GangwarGunGameLvl');
  });

  _0x15D36 = _0x15D36.slice(0, 3);

  if (!_0x15D36[0]) {} else {
    if (_0x15D36[0].getVariable('GangwarGunGameLvl') > 0) {} else {}
  }

  if (!_0x15D36[1]) {} else {
    if (_0x15D36[1].getVariable('GangwarGunGameLvl') > 0) {} else {}
  }

  if (!_0x15D36[2]) {} else {
    if (_0x15D36[2].getVariable('GangwarGunGameLvl') > 0) {} else {}
  }

  HudMenuCEF.execute(`insertGameTop('${'First'}','${'Second'}','${'Third'}');`);
});
mp.events.add('playerWeaponShot', (_0x1478E, _0x1476A) => {
  if (localplayer.dimension == 10) {
    if (mp.players.local.weapon != 3249783761) {
      return;
    }

    let _0x14746 = pointingAtGangwarGG(200);

    if (_0x14746 === undefined || _0x14746.entity === undefined || _0x14746 === 'undefined' || _0x14746.entity === 'undefined') {
      return;
    }

    if (_0x14746.entity.type === 'player') {
      if (_0x14746.entity == localplayer) {
        return;
      }

      mp.events.callRemote('GangwarGGShot', _0x14746.entity);
    }
  }
});

function pointingAtGangwarGG(_0x14866) {
  const _0x17AE2 = mp.cameras.new('gameplay');

  let _0x16B46 = _0x17AE2.getCoord();

  let direction = _0x17AE2.getDirection();

  let _0x17956 = new mp.Vector3(direction.x * _0x14866 + _0x16B46.x, direction.y * _0x14866 + _0x16B46.y, direction.z * _0x14866 + _0x16B46.z);

  return mp.raycasting.testPointToPoint(_0x16B46, _0x17956, [1, 16, 256], 13);
}

mp.events.add('gangwarChangeGameStatus', _0x12B26 => {
  HudMenuCEF.execute(`gangwarChangeGameStatus('${_0x12B26}')`);
});