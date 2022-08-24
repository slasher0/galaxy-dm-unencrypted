global.inMinigame = false;
var inMinigameParams = {
  FirstAK: 3,
  Alcohol: 1,
  'FirstAK': 3,
  'Alcohol': 1
};
var MGweaponsDataDefaultAmmoCount = [{
  ID: 0,
  weapon: 'Revolver',
  Ammo: 6
}, {
  ID: 1,
  weapon: 'Mini SMG',
  Ammo: 20
}, {
  ID: 2,
  weapon: 'Heavy Shotgun',
  Ammo: 6
}, {
  ID: 3,
  weapon: 'Gusenberg Sweeper',
  Ammo: 30
}, {
  ID: 4,
  weapon: 'Carbine Rifle',
  Ammo: 30
}, {
  ID: 5,
  weapon: 'Combat PDW',
  Ammo: 30
}, {
  ID: 6,
  weapon: 'Assault Rifle',
  Ammo: 30
}, {
  ID: 7,
  weapon: 'Revolver MK2',
  Ammo: 6
}, {
  ID: 8,
  weapon: 'Combat MG',
  Ammo: 100
}, {
  ID: 9,
  weapon: 'Assault SMG',
  Ammo: 30
}, {
  ID: 10,
  weapon: 'SMG',
  Ammo: 30
}, {
  ID: 11,
  weapon: 'SMG MK2',
  Ammo: 30
}, {
  ID: 12,
  weapon: 'Assault Shotgun',
  Ammo: 8
}, {
  ID: 13,
  weapon: 'Advanced Rifle',
  Ammo: 30
}, {
  ID: 14,
  weapon: 'Special Carbine',
  Ammo: 30
}, {
  ID: 15,
  weapon: 'Military Rifle',
  Ammo: 30
}, {
  ID: 16,
  weapon: 'Sniper Rifle',
  Ammo: 10
}, {
  ID: 17,
  weapon: 'Compact Rifle',
  Ammo: 30
}, {
  ID: 18,
  weapon: 'Combat MG MK2',
  Ammo: 100
}, {
  ID: 19,
  weapon: 'Perico Pistol',
  Ammo: 1
}, {
  ID: 20,
  weapon: 'Navy Revolver',
  Ammo: 6
}, {
  ID: 21,
  weapon: 'Marksman Rifle',
  Ammo: 8
}, {
  ID: 22,
  weapon: 'GALAXY Glock',
  Ammo: 6
}, {
  ID: 23,
  weapon: 'GALAXY USP',
  Ammo: 6
}, {
  ID: 24,
  weapon: 'Up-n-Atomizer',
  Ammo: 10
}, {
  ID: 25,
  weapon: 'Heavy Sniper',
  Ammo: 7
}];
var MGweaponsDataAmmo = [{
  ID: 0,
  weapon: 'Revolver',
  Ammo: 6
}, {
  ID: 1,
  weapon: 'Mini SMG',
  Ammo: 20
}, {
  ID: 2,
  weapon: 'Heavy Shotgun',
  Ammo: 6
}, {
  ID: 3,
  weapon: 'Gusenberg Sweeper',
  Ammo: 30
}, {
  ID: 4,
  weapon: 'Carbine Rifle',
  Ammo: 30
}, {
  ID: 5,
  weapon: 'Combat PDW',
  Ammo: 30
}, {
  ID: 6,
  weapon: 'Assault Rifle',
  Ammo: 30
}, {
  ID: 7,
  weapon: 'Revolver MK2',
  Ammo: 6
}, {
  ID: 8,
  weapon: 'Combat MG',
  Ammo: 100
}, {
  ID: 9,
  weapon: 'Assault SMG',
  Ammo: 30
}, {
  ID: 10,
  weapon: 'SMG',
  Ammo: 30
}, {
  ID: 11,
  weapon: 'SMG MK2',
  Ammo: 30
}, {
  ID: 12,
  weapon: 'Assault Shotgun',
  Ammo: 8
}, {
  ID: 13,
  weapon: 'Advanced Rifle',
  Ammo: 30
}, {
  ID: 14,
  weapon: 'Special Carbine',
  Ammo: 30
}, {
  ID: 15,
  weapon: 'Military Rifle',
  Ammo: 30
}, {
  ID: 16,
  weapon: 'Sniper Rifle',
  Ammo: 10
}, {
  ID: 17,
  weapon: 'Compact Rifle',
  Ammo: 30
}, {
  ID: 18,
  weapon: 'Combat MG MK2',
  Ammo: 100
}, {
  ID: 19,
  weapon: 'Perico Pistol',
  Ammo: 1
}, {
  ID: 20,
  weapon: 'Navy Revolver',
  Ammo: 6
}, {
  ID: 21,
  weapon: 'Marksman Rifle',
  Ammo: 8
}, {
  ID: 22,
  weapon: 'GALAXY Glock',
  Ammo: 6
}, {
  ID: 23,
  weapon: 'GALAXY USP',
  Ammo: 6
}, {
  ID: 24,
  weapon: 'Up-n-Atomizer',
  Ammo: 10
}, {
  ID: 25,
  weapon: 'Heavy Sniper',
  Ammo: 7
}, {
  ID: null,
  weapon: 'Hand',
  Ammo: 0
}];
const localplayer = mp.players.local;
let lastMGWeapSwap = new Date().getTime();
mp.events.add('changeInMGStatus', _0x255FB => {
  inMinigame = _0x255FB;

  if (_0x255FB == true) {
    playerHealths.Health = 100;
    playerHealths.Armour = 100;
  }
});
mp.events.add('ReloadAllWeaponsAmmoAfterDeath', () => {
  for (let _0x25367 = 0; _0x25367 < MGweaponsDataAmmo.length - 1; _0x25367++) {
    MGweaponsDataAmmo[_0x25367].Ammo = MGweaponsDataDefaultAmmoCount[_0x25367].Ammo;
  }
});
mp.keys.bind(0x31, true, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (inMinigame != true) {
    return;
  }

  if (localplayer.dimension != 15) {
    return;
  }

  if (new Date().getTime() - lastMGWeapSwap < 1700) {
    return;
  }

  lastMGWeapSwap = new Date().getTime();
  setWeaponInHandMG(0xC1B3C3D1);
});
mp.keys.bind(0x32, true, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (inMinigame != true) {
    return;
  }

  if (localplayer.dimension != 15) {
    return;
  }

  if (new Date().getTime() - lastMGWeapSwap < 1700) {
    return;
  }

  lastMGWeapSwap = new Date().getTime();
  setWeaponInHandMG(0x83BF0278);
});
mp.keys.bind(0x33, true, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (inMinigame != true) {
    return;
  }

  if (localplayer.dimension != 15) {
    return;
  }

  if (new Date().getTime() - lastMGWeapSwap < 1700) {
    return;
  }

  lastMGWeapSwap = new Date().getTime();
  setWeaponInHandMG(0x0A3D4D34);
});
mp.keys.bind(0x34, false, function () {
  if (localplayer.isFalling()) {
    return;
  }

  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (inMinigame != true) {
    return;
  }

  if (localplayer.dimension != 15) {
    return;
  }

  if (inMinigameParams.FirstAK <= 0) {
    return mp.events.call('emsghud', 'У вас нет аптек.');
  }

  if (localplayer.getHealth() == 100) {
    return mp.events.call('emsghud', 'Невозможно использовать аптеку, когда вы полностью здоровы.');
  }

  inMinigameParams.FirstAK--;
  mp.attachmentMngr.addLocal('MedicPack');
  mp.events.callRemote('MINIGamesOtherItems', 'MedicPack', 'using');
  setTimeout(() => {
    mp.attachmentMngr.removeLocal('MedicPack');
    mp.events.callRemote('MINIGamesOtherItems', 'MedicPack', 'stop');
  }, 3000);
});
mp.keys.bind(0x35, false, function () {
  if (localplayer.isFalling()) {
    return;
  }

  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (inMinigame != true) {
    return;
  }

  if (localplayer.dimension != 15) {
    return;
  }

  if (inMinigameParams.Alcohol <= 0) {
    return mp.events.call('emsghud', 'У вас нет алкоголя.');
  }

  inMinigameParams.Alcohol = 0;
  mp.events.callRemote('MINIGamesOtherItems', 'Alcohol', 'using');
  mp.attachmentMngr.addLocal('Alko');
  setTimeout(() => {
    mp.events.callRemote('MINIGamesOtherItems', 'Alcohol', 'stop');
    mp.attachmentMngr.removeLocal('Alko');
  }, 5300);
});

function setWeaponInHandMG(_0x26E5B) {
  mp.game.invoke('0xADF692B254977C0C', localplayer.handle, _0x26E5B >> 0, true);
  mp.game.invoke('0x14E56BC5B5DB6A19', localplayer.handle, _0x26E5B >> 0, 9999);
}

mp.events.add('setNewHealth', _0x255FB => {
  switch (_0x255FB) {
    case 'add':
      if (playerHealths.Health >= 50) {
        playerHealths.Health = 100;
      } else {
        playerHealths.Health = parseInt(playerHealths.Health) + 50;
      }

      mp.events.call('smsghud', `Вы восстановили здоровье до ${playerHealths.Health}%`);
      break;

    default:
      break;
  }
});
mp.events.add('playerWeaponShot', (_0x264FB, _0x264BF) => {
  if (inMinigame != true) {
    return;
  }

  if (localplayer.dimension != 15) {
    return;
  }

  if (localplayer.weapon != 0x83BF0278 && localplayer.weapon != 0x0A3D4D34 && localplayer.weapon != 0xC1B3C3D1) {
    return;
  }

  if (mp.players.exists(_0x264BF)) {
    getHitBoneMG(_0x264FB, _0x264BF);
  } else {
    let _0x26483 = pointingAtTestGG(_0x264FB);

    if (_0x26483 === undefined || _0x26483.entity === undefined || _0x26483 === 'undefined' || _0x26483.entity === 'undefined') {} else {
      if (_0x26483.entity.type === 'player') {
        getHitBoneMG(_0x264FB, _0x26483.entity);
      }
    }
  }
});
mp.events.add('MINIGAMESKillFeedPush', (_0x2600F, _0x25F97, _0x26087, _0x25FD3, _0x260C3) => {
  HudMenuCEF.execute(`KillFeedPush('${_0x2600F}','${_0x25F97}','${_0x26087}','${_0x25FD3}','${_0x260C3}')`);
});
mp.events.add('minigamesTimerImages', (_0x275DB, _0x27653, _0x27617, _0x2768F) => {
  HudMenuCEF.execute(`SetMinigamesTimerImages('${_0x275DB}','${_0x27653}','${_0x27617}','${_0x2768F}')`);
});
let MiniGamesShapesPos = [{
  x: -1330.9493408203125,
  y: -2699.603759765625,
  z: 13.944945335388184,
  MGshapeType: 'info',
  labelText: 'Как играть?'
}];

function loadMiniGamesShapes() {
  for (let _0x25367 = 0; _0x25367 < MiniGamesShapesPos.length; _0x25367++) {
    var _0x2898B = mp.colshapes.newCircle(MiniGamesShapesPos[_0x25367].x, MiniGamesShapesPos[_0x25367].y, 2, 13);

    _0x2898B.MGshapeType = `${MiniGamesShapesPos[_0x25367].MGshapeType}`;

    if (MiniGamesShapesPos[_0x25367].labelText != null) {
      mp.labels.new(`${MiniGamesShapesPos[_0x25367].labelText}`, new mp.Vector3(MiniGamesShapesPos[_0x25367].x, MiniGamesShapesPos[_0x25367].y, MiniGamesShapesPos[_0x25367].z), {
        font: 4,
        drawDistance: 8,
        color: [255, 255, 255, 255],
        dimension: 13
      });
    }
  }
}

loadMiniGamesShapes();
mp.events.add('playerEnterColshape', _0x273BF => {
  if (_0x273BF.MGshapeType == 'info') {}
});
mp.events.add('playerExitColshape', _0x273BF => {
  if (_0x273BF.MGshapeType == 'info') {}
});
mp.keys.bind(0x45, false, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }
});
mp.events.add('closeMinigameInfo', () => {
  HudMenuCEF.execute(`MiniGameInfo.Active = 0`);
  ChangeHUDKeysDisplay('open');
  ChangeHUDKillFeedDisplay('open');
  ChangeHUDFreeCaseDisplay('open');
  ShowChat();
  mp.gui.cursor.visible = false;
});