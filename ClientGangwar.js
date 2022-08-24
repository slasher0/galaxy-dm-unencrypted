var VehLockKeyPress = new Date().getTime();
var VehEngineKeyPress = new Date().getTime();
const localplayer = mp.players.local;
mp.keys.bind(0x4C, true, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (new Date().getTime() - VehLockKeyPress < 500) {
    return;
  }

  VehLockKeyPress = new Date().getTime();
  let _0xd256x4 = mp.players.local;
  let _0xd256x5 = _0xd256x4.position;

  if (!_0xd256x4.vehicle) {
    let _0xd256x6 = mp.game.vehicle.getClosestVehicle(_0xd256x5.x, _0xd256x5.y, _0xd256x5.z, 5, 0, 70);

    let _0xd256x7 = mp.vehicles.atHandle(_0xd256x6);

    if (_0xd256x7 == null) {
      return;
    }

    let _0xd256x8 = mp.game.system.vdist(_0xd256x5.x, _0xd256x5.y, _0xd256x5.z, _0xd256x7.position.x, _0xd256x7.position.y, _0xd256x7.position.z);

    if (_0xd256x8 > 5) {
      return;
    }

    if (!_0xd256x7) {
      return;
    }

    mp.events.callRemote('SetVehLock', _0xd256x7.remoteId);
  } else {
    mp.events.callRemote('SetVehLock', _0xd256x4.vehicle.remoteId);
  }
});
mp.events.add('VehLockIntercation', (_0xd256x9, _0xd256xa) => {
  let _0xd256x7 = null;

  if (_0xd256xa != null) {
    _0xd256x7 = mp.vehicles.at(parseInt(_0xd256xa));

    if (_0xd256x7 != null) {} else {
      _0xd256x7 = null;
    }
  }

  switch (_0xd256x9) {
    case 'StopAnimation':
      setTimeout(() => {
        mp.events.callRemote('VehLockAnimStop');
      }, 1000);
      break;

    case 'Open':
      {
        return;
      }
      mp.game.audio.playSoundFromEntity(-1, 'Remote_Control_Open', _0xd256x7.handle, 'PI_Menu_Sounds', true, 0);
      break;

    case 'Close':
      {
        return;
      }
      mp.game.audio.playSoundFromEntity(-1, 'Remote_Control_Close', _0xd256x7.handle, 'PI_Menu_Sounds', true, 0);
      break;
  }
});
mp.keys.bind(0x42, true, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (new Date().getTime() - VehEngineKeyPress < 500) {
    return;
  }

  VehEngineKeyPress = new Date().getTime();
  let _0xd256x4 = mp.players.local;

  if (!_0xd256x4.vehicle) {
    return;
  }

  if (_0xd256x4.vehicle.getPedInSeat(-1) === _0xd256x4.handle) {
    mp.events.callRemote('SetVehEngine', _0xd256x4.vehicle.remoteId);
  }
});
mp.events.add('CarRemoteControl', _0xd256x9 => {
  switch (parseInt(_0xd256x9)) {
    case 1:
      mp.attachmentMngr.addLocal('carkey');
      break;

    case 0:
      mp.attachmentMngr.removeLocal('carkey');
      break;
  }
});
var MobileKeyPress = new Date().getTime();
mp.keys.bind(0x26, true, function () {
  if (mp.game.ui.isPauseMenuActive()) {
    return;
  }

  if (ChatActive) {
    return;
  }

  if (mp.players.local.dimension != 7 && mp.players.local.dimension != 8 && mp.players.local.dimension != 12 && inGangwar != true && true) {
    return;
  }

  if (new Date().getTime() - MobileKeyPress < 1000) {
    return;
  }

  MobileKeyPress = new Date().getTime();
  {
    PhoneCEF.execute(`${'changePhoneDisplay(\'open\');'}`);
    mp.events.callRemote('startphone');
    mp.attachmentMngr.addLocal('mobilephone');
    mp.gui.cursor.visible = true;
    mp.gui.chat.activate(false);
  }
});
mp.events.add('addVehicleInPhone', (_0xd256xd, _0xd256xe, _0xd256xf, _0xd256x10, _0xd256x11, _0xd256x12) => {
  PhoneCEF.execute(`${'addVehicleInList(\''}${_0xd256xd}${'\',\''}${_0xd256xe}${'\',\''}${_0xd256xf}${'\',\''}${_0xd256x10}${'\');'}`);

  if (parseInt(_0xd256x10) != 1) {
    let _0xd256x13 = vehsIMGs.findIndex(_0xd256x14 => {
      return _0xd256x14.Model == _0xd256xd;
    });

    if (_0xd256x13 <= -1) {
      return;
    }

    HudMenuCEF.execute(`${'GANGWARVehSell.AddVehicleForSell(\''}${_0xd256xf}${'\',\''}${_0xd256x13.Name}${'\',\''}${_0xd256x13.Img}${'\',\''}${_0xd256x11}${'\',\''}${_0xd256xe}${'\','}${_0xd256x12}${')'}`);
  }
});
var vehsIMGs = [{
  Model: 'Tezeract',
  Name: 'Tezeract',
  Img: 'package://cefs/phone/img/Tezeract.png'
}, {
  Model: 'Tyrant',
  Name: 'Tyrant',
  Img: 'package://cefs/phone/img/Tyrant.png'
}, {
  Model: 'Zentorno',
  Name: 'Zentorno',
  Img: 'package://cefs/phone/img/Zentorno.png'
}, {
  Model: 'Reaper',
  Name: 'Reaper',
  Img: 'package://cefs/phone/img/Reaper.png'
}, {
  Model: 'Prototipo',
  Name: 'Prototipo',
  Img: 'package://cefs/phone/img/Prototipo.png'
}, {
  Model: 'Turismor',
  Name: 'Turismor',
  Img: 'package://cefs/phone/img/Turismor.png'
}, {
  Model: 'Cyclone',
  Name: 'Cyclone',
  Img: 'package://cefs/phone/img/Cyclone.png'
}, {
  Model: 'Neon',
  Name: 'Neon',
  Img: 'package://cefs/phone/img/Neon.png'
}, {
  Model: 'Entity2',
  Name: 'Entity2',
  Img: 'package://cefs/phone/img/Entity2.png'
}, {
  Model: 'Emerus',
  Name: 'Emerus',
  Img: 'package://cefs/phone/img/Emerus.png'
}, {
  Model: 'Fmj',
  Name: 'Fmj',
  Img: 'package://cefs/phone/img/Fmj.png'
}, {
  Model: 'Furia',
  Name: 'Furia',
  Img: 'package://cefs/phone/img/Furia.png'
}, {
  Model: 'Italigtb',
  Name: 'Italigtb',
  Img: 'package://cefs/phone/img/Italigtb.png'
}, {
  Model: 'Tempesta',
  Name: 'Tempesta',
  Img: 'package://cefs/phone/img/Tempesta.png'
}, {
  Model: 'Thrax',
  Name: 'Thrax',
  Img: 'package://cefs/phone/img/Thrax.png'
}, {
  Model: 'Visione',
  Name: 'Visione',
  Img: 'package://cefs/phone/img/Visione.png'
}, {
  Model: 'Sultan2',
  Name: 'Sultan2',
  Img: 'package://cefs/phone/img/Sultan2.png'
}, {
  Model: 'italirsx',
  Name: 'Itali RSX',
  Img: 'package://cefs/phone/img/italirsx.png'
}, {
  Model: 'veto',
  Name: 'Veto',
  Img: 'package://cefs/phone/img/veto.png'
}, {
  Model: 'issi6',
  Name: 'Issi 6',
  Img: 'package://cefs/phone/img/issi6.png'
}, {
  Model: 'openwheel2',
  Name: 'OpenWheel 2',
  Img: 'package://cefs/phone/img/openwheel2.png'
}, {
  Model: 'Shotaro',
  Name: 'Shotaro',
  Img: 'img/shotaro.png'
}, {
  Model: 'Coquette4',
  Name: 'Coquette4',
  Img: 'package://cefs/phone/img/coquette4.png'
}, {
  Model: 'italigto',
  Name: 'italigto',
  Img: 'package://cefs/phone/img/ItaliGTO2.png'
}, {
  Model: 'ItaliGTO2',
  Name: 'ItaliGTO2',
  Img: 'package://cefs/phone/img/ItaliGTO2.png'
}, {
  Model: 'Specter2',
  Name: 'Specter2',
  Img: 'package://cefs/phone/img/Specter2.png'
}, {
  Model: 'Revolter',
  Name: 'Revolter',
  Img: 'package://cefs/phone/img/Revolter.png'
}, {
  Model: 'Toros',
  Name: 'Toros',
  Img: 'img/rent/toros2.png'
}, {
  Model: 'Pfister811',
  Name: 'Pfister811',
  Img: 'package://cefs/phone/img/Pfister811.png'
}, {
  Model: 'GP1',
  Name: 'GP1',
  Img: 'package://cefs/phone/img/GP1.png'
}, {
  Model: 'hakuchou',
  Name: 'Hakuchou',
  Img: 'img/hakuchou.png'
}, {
  Model: 'schlagen',
  Name: 'Schlagen',
  Img: 'package://cefs/phone/img/schlagen.png'
}, {
  Model: 'comet6',
  Name: 'comet6',
  Img: 'package://cefs/phone/img/comet6.png'
}];
mp.events.add('setVehEngineFlag', () => {
  mp.players.local.setConfigFlag(429, true);
});
mp.events.add('openGangwarDeathBlock', _0xd256x16 => {
  HudMenuCEF.execute(`${'OpenGangwarDeathDiv('}${_0xd256x16}${')'}`);
  mp.gui.cursor.visible = true;
});
mp.events.add('spawnAfterDeathTimer', _0xd256x9 => {
  mp.events.callRemote('GhettoDeathSpawn', _0xd256x9);
  mp.gui.cursor.visible = false;
  mp.events.call('ReloadAllWeaponsAmmoAfterDeath');
  playerHealths.Health = 100;
  playerHealths.Armour = 0;
});
mp.events.add('CloseDeathGhettoCef', () => {
  HudMenuCEF.execute(`${'CloseGangwarDeathDiv()'}`);
  mp.gui.cursor.visible = false;
});
mp.events.add('PlayerCloseGangwarShop', _0xd256x17 => {
  ShowChat();
  mp.gui.cursor.visible = false;

  switch (_0xd256x17) {
    case 'different-shop':
      HudMenuCEF.execute(`${'differentShop.Active = 0'}`);
      break;

    case 'weapon-shop':
      HudMenuCEF.execute(`${'weaponShop.Active = 0'}`);
      break;

    case 'newyear-shop':
      HudMenuCEF.execute(`newyearShop.Active = 0`);
      break;

    default:
      HudMenuCEF.execute(`${'changeGangwarShopDisplay(\'close\',\''}${activeShopName}${'\');'}`);
      break;
  }
});
global.GhettoGangwarlvl = 1;
mp.events.add('changeGhettoGangwarlvl', _0xd256x18 => {
  GhettoGangwarlvl = parseInt(_0xd256x18);
});
mp.events.add('SpawnRentVehicle', (_0xd256x19, _0xd256x1a) => {
  if (parseInt(GhettoGangwarlvl) < parseInt(_0xd256x1a)) {
    return HudMenuCEF.execute(`${'emsg(\'У вашего лвла нет доступа к этой машине.\');'}`);
  }

  HudMenuCEF.execute(`${'autoRent.Active = 0'}`);

  if (inOfficeRentShapeZone != false) {
    mp.events.callRemote('OfficeSpawnFreeVehicle', _0xd256x19);
  }

  if (EMSData.inEMSRentShapeZone != false) {
    mp.events.callRemote('EMSSpawnFreeVehicle', _0xd256x19);
  }

  if (inOfficeRentShapeZone == false && EMSData.inEMSRentShapeZone == false) {
    mp.events.callRemote('PhoneSpawnFreeVehicle', _0xd256x19);
  }
});
var DefaultShopsPos = [{
  x: 85.78622436523438,
  y: -1946.5947265625,
  z: 20.772659301757812,
  shopType: 'different-shop',
  shopName: '24/7 (E)'
}, {
  x: 82.08467102050781,
  y: -1951.140869140625,
  z: 20.81488609313965,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}, {
  x: 477.23797607421875,
  y: -1523.6534423828125,
  z: 29.299407958984375,
  shopType: 'different-shop',
  shopName: '24/7 (E)'
}, {
  x: 477.6478576660156,
  y: -1528.3177490234375,
  z: 29.30513572692871,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}, {
  x: -115.75354766845703,
  y: -1422.9918212890625,
  z: 30.02330780029297,
  shopType: 'different-shop',
  shopName: '24/7 (E)'
}, {
  x: -106.36597442626953,
  y: -1408.7015380859375,
  z: 29.711528778076172,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}, {
  x: 960.9946899414062,
  y: -2184.452880859375,
  z: 30.49030113220215,
  shopType: 'different-shop',
  shopName: '24/7 (E)'
}, {
  x: 961.006103515625,
  y: -2187.49658203125,
  z: 30.49653434753418,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}, {
  x: 1380.9703369140625,
  y: -1514.603759765625,
  z: 58.03755569458008,
  shopType: 'different-shop',
  shopName: '24/7 (E)'
}, {
  x: 1382.0733642578125,
  y: -1516.61572265625,
  z: 58.01890182495117,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}, {
  x: 418.9406433105469,
  y: -985.66259765625,
  z: 29.401107788085938,
  shopType: 'different-shop',
  shopName: '24/7 (E)'
}, {
  x: 419.0369567871094,
  y: -988.5879516601562,
  z: 29.354244232177734,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}, {
  x: 22.348657608032227,
  y: -1107.1021728515625,
  z: 29.797033309936523,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}, {
  x: 810.0537109375,
  y: -2157.163330078125,
  z: 29.619020462036133,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}, {
  x: 440.6438903808594,
  y: -981.046630859375,
  z: 30.68933868408203,
  shopType: 'NPC-BuyingUp',
  shopName: 'Скупка оружия (E)'
}, {
  x: 713.4660034179688,
  y: -977.6757202148438,
  z: 24.121902465820312,
  shopType: 'gp-shop',
  shopName: 'GALAXY POINTS SHOP (E)'
}, {
  x: 723.8775634765625,
  y: -977.615478515625,
  z: 24.13296890258789,
  shopType: 'newyear-shop',
  shopName: 'NEW YEAR SHOP (E)'
}];
var DefaultShopsPosCapture = [{
  x: 85.78622436523438,
  y: -1946.5947265625,
  z: 20.772659301757812,
  shopType: 'different-shop',
  shopName: '24/7 (E)'
}, {
  x: 82.08467102050781,
  y: -1951.140869140625,
  z: 20.81488609313965,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}, {
  x: 505.3703918457031,
  y: -1334.4404296875,
  z: 29.315799713134766,
  shopType: 'different-shop',
  shopName: '24/7 (E)'
}, {
  x: 503.8509216308594,
  y: -1332.5867919921875,
  z: 29.323352813720703,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}, {
  x: -166.13119506835938,
  y: -1636.5667724609375,
  z: 33.650360107421875,
  shopType: 'different-shop',
  shopName: '24/7 (E)'
}, {
  x: -162.61233520507812,
  y: -1632.97314453125,
  z: 33.65882873535156,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}, {
  x: 867.51806640625,
  y: -2041.9593505859375,
  z: 30.96175765991211,
  shopType: 'different-shop',
  shopName: '24/7 (E)'
}, {
  x: 868.0653076171875,
  y: -2038.4022216796875,
  z: 30.9617919921875,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}, {
  x: 802.7230834960938,
  y: -1628.1370849609375,
  z: 31.164278030395508,
  shopType: 'different-shop',
  shopName: '24/7 (E)'
}, {
  x: 798.4192504882812,
  y: -1627.55712890625,
  z: 31.16550064086914,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}, {
  x: 141.26600646972656,
  y: -703.7539672851562,
  z: 33.12859344482422,
  shopType: 'different-shop',
  shopName: '24/7 (E)'
}, {
  x: 140.5060577392578,
  y: -700.2012939453125,
  z: 33.124420166015625,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}, {
  x: 343.2288513183594,
  y: -1398.4002685546875,
  z: 32.5092658996582,
  shopType: 'medicines-shop',
  shopName: 'Медикаменты (E)'
}, {
  x: 22.348657608032227,
  y: -1107.1021728515625,
  z: 29.797033309936523,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}, {
  x: 810.0537109375,
  y: -2157.163330078125,
  z: 29.619020462036133,
  shopType: 'weapon-shop',
  shopName: 'Оружейный магазин (E)'
}];

function loadGangwarColshapes(_0xd256x1e) {
  if (_0xd256x1e == 7) {
    for (let _0xd256x1f = 0; _0xd256x1f < DefaultShopsPosCapture.length; _0xd256x1f++) {
      var _0xd256x20 = mp.colshapes.newCircle(DefaultShopsPosCapture[_0xd256x1f].x, DefaultShopsPosCapture[_0xd256x1f].y, 1, _0xd256x1e);

      _0xd256x20.isgangwarshop = 1;
      _0xd256x20.shoptype = `${''}${DefaultShopsPosCapture[_0xd256x1f].shopType}${''}`;

      var _0xd256x21 = mp.markers.new(1, new mp.Vector3(DefaultShopsPosCapture[_0xd256x1f].x, DefaultShopsPosCapture[_0xd256x1f].y, DefaultShopsPosCapture[_0xd256x1f].z - 1), 0.5, {
        direction: 0,
        rotation: 0,
        color: [255, 255, 255, 220],
        visible: true,
        dimension: _0xd256x1e
      });
    }
  } else {
    for (let _0xd256x1f = 0; _0xd256x1f < DefaultShopsPos.length; _0xd256x1f++) {
      if (DefaultShopsPos[_0xd256x1f].shopType == 'medicines-shop' || DefaultShopsPos[_0xd256x1f].shopName == 'Магазин EMS') {
        var _0xd256x20 = mp.colshapes.newCircle(DefaultShopsPos[_0xd256x1f].x, DefaultShopsPos[_0xd256x1f].y, 2, _0xd256x1e);

        _0xd256x20.isgangwarshop = 1;
        _0xd256x20.shoptype = `${''}${DefaultShopsPos[_0xd256x1f].shopType}${''}`;
      } else {
        var _0xd256x20 = mp.colshapes.newCircle(DefaultShopsPos[_0xd256x1f].x, DefaultShopsPos[_0xd256x1f].y, 1, _0xd256x1e);

        _0xd256x20.isgangwarshop = 1;
        _0xd256x20.shoptype = `${''}${DefaultShopsPos[_0xd256x1f].shopType}${''}`;

        var _0xd256x21 = mp.markers.new(1, new mp.Vector3(DefaultShopsPos[_0xd256x1f].x, DefaultShopsPos[_0xd256x1f].y, DefaultShopsPos[_0xd256x1f].z - 1), 0.5, {
          direction: 0,
          rotation: 0,
          color: [255, 255, 255, 220],
          visible: true,
          dimension: _0xd256x1e
        });
      }
    }
  }
}

loadGangwarColshapes(7);
loadGangwarColshapes(8);
var GangwarCraft = [{
  x: -121.72055053710938,
  y: -1424.607421875,
  z: 30.239948272705078,
  fraction: 3
}, {
  x: 84.25125122070312,
  y: -1958.3594970703125,
  z: 21.12154197692871,
  fraction: 1
}, {
  x: 956.5036010742188,
  y: -2175.02197265625,
  z: 31.15761947631836,
  fraction: 4
}, {
  x: 1373.4918212890625,
  y: -1516.94140625,
  z: 57.665950775146484,
  fraction: 5
}, {
  x: 481.119140625,
  y: -1532.05224609375,
  z: 29.30600357055664,
  fraction: 2
}];

function loadGangwarCraft() {
  for (let _0xd256x1f = 0; _0xd256x1f < GangwarCraft.length; _0xd256x1f++) {
    var _0xd256x20 = mp.colshapes.newCircle(GangwarCraft[_0xd256x1f].x, GangwarCraft[_0xd256x1f].y, 1, 8);

    _0xd256x20.isgangwarcraft = 1;
    _0xd256x20.craft = GangwarCraft[_0xd256x1f].fraction;
  }
}

loadGangwarCraft();
var GangwarVehicleRent = [{
  x: 89.3096923828125,
  y: -1958.643798828125,
  z: 20.747411727905273,
  fraction: 1
}, {
  x: 475.2461242675781,
  y: -1525.8076171875,
  z: 29.303512573242188,
  fraction: 2
}, {
  x: -134.04380798339844,
  y: -1424.4317626953125,
  z: 30.564754486083984,
  fraction: 3
}, {
  x: 953.9501953125,
  y: -2181.044677734375,
  z: 30.551578521728516,
  fraction: 4
}, {
  x: 1370.353759765625,
  y: -1519.539794921875,
  z: 57.54469680786133,
  fraction: 5
}, {
  x: 429.0147399902344,
  y: -985.5406494140625,
  z: 30.71144676208496,
  fraction: 6
}];
var GangwarVehicleCapture = [{
  x: 89.3096923828125,
  y: -1958.643798828125,
  z: 20.747411727905273,
  fraction: 1
}, {
  x: 475.2461242675781,
  y: -1525.8076171875,
  z: 29.303512573242188,
  fraction: 2
}, {
  x: -134.04380798339844,
  y: -1424.4317626953125,
  z: 30.564754486083984,
  fraction: 3
}, {
  x: 953.9501953125,
  y: -2181.044677734375,
  z: 30.551578521728516,
  fraction: 4
}, {
  x: 1370.353759765625,
  y: -1519.539794921875,
  z: 57.54469680786133,
  fraction: 5
}, {
  x: 429.0147399902344,
  y: -985.5406494140625,
  z: 30.71144676208496,
  fraction: 6
}];

function loadGangwarVehicleRent(_0xd256x1e) {
  if (_0xd256x1e == 7) {
    for (let _0xd256x1f = 0; _0xd256x1f < GangwarVehicleCapture.length; _0xd256x1f++) {
      var _0xd256x20 = mp.colshapes.newCircle(GangwarVehicleCapture[_0xd256x1f].x, GangwarVehicleCapture[_0xd256x1f].y, 1, parseInt(_0xd256x1e));

      _0xd256x20.GangwarVehRent = true;
      _0xd256x20.GangwarVehRentFraction = GangwarVehicleCapture[_0xd256x1f].fraction;

      var _0xd256x21 = mp.markers.new(1, new mp.Vector3(GangwarVehicleCapture[_0xd256x1f].x, GangwarVehicleCapture[_0xd256x1f].y, GangwarVehicleCapture[_0xd256x1f].z - 1), 0.5, {
        direction: 0,
        rotation: 0,
        color: [255, 255, 255, 220],
        visible: true,
        dimension: _0xd256x1e
      });
    }
  } else {
    for (let _0xd256x1f = 0; _0xd256x1f < GangwarVehicleRent.length; _0xd256x1f++) {
      var _0xd256x20 = mp.colshapes.newCircle(GangwarVehicleRent[_0xd256x1f].x, GangwarVehicleRent[_0xd256x1f].y, 1, parseInt(_0xd256x1e));

      _0xd256x20.GangwarVehRent = true;
      _0xd256x20.GangwarVehRentFraction = GangwarVehicleRent[_0xd256x1f].fraction;

      var _0xd256x21 = mp.markers.new(1, new mp.Vector3(GangwarVehicleRent[_0xd256x1f].x, GangwarVehicleRent[_0xd256x1f].y, GangwarVehicleRent[_0xd256x1f].z - 1), 0.5, {
        direction: 0,
        rotation: 0,
        color: [255, 255, 255, 220],
        visible: true,
        dimension: _0xd256x1e
      });
    }
  }
}

loadGangwarVehicleRent(7);
loadGangwarVehicleRent(8);
global.FractionCarPickCurFrac = 1;
mp.events.add('PlayerCloseVehicleRent', () => {
  ShowChat();
  mp.gui.cursor.visible = false;
  HudMenuCEF.execute(`${'autoRent.Active = 0'}`);

  if (inOfficeRentShapeZone == true) {
    mp.events.call('unlockOfficeVehRent');
  }
});
global.inGreenZone = false;
mp.events.add('changeGreenZoneStatus', _0xd256x2a => {
  inGreenZone = _0xd256x2a;

  switch (_0xd256x2a) {
    case true:
      HudMenuCEF.execute(`${'GreenZoneChange(\'enter\')'}`);
      break;

    default:
      HudMenuCEF.execute(`${'GreenZoneChange(\'exit\')'}`);
      break;
  }
});
var GangwarGreenZones = [{
  x: 97.34600067138672,
  y: -1933.23486328125,
  z: 29.43658447265625,
  radius: 40,
  fraction: 1
}, {
  x: 482.1493835449219,
  y: -1525.5509033203125,
  z: 29.433090209960938,
  radius: 50,
  fraction: 2
}, {
  x: -141.51480102539062,
  y: -1424.0965576171875,
  z: 30.713085174560547,
  radius: 30,
  fraction: 3
}, {
  x: 946.7306518554688,
  y: -2180.5712890625,
  z: 29.739240646362305,
  radius: 30,
  fraction: 4
}, {
  x: 1376.5028076171875,
  y: -1528.8165283203125,
  z: 56.399845123291016,
  radius: 30,
  fraction: 5
}, {
  x: 428.5248718261719,
  y: -980.463623046875,
  z: 30.710216522216797,
  radius: 50,
  fraction: 6
}, {
  x: 421.1866760253906,
  y: -808.1804809570312,
  z: 29.491252899169922,
  radius: 80,
  fraction: null
}, {
  x: -116.03668975830078,
  y: -604.9052734375,
  z: 36.2807731628418,
  radius: 50,
  fraction: null
}, {
  x: 713.8214111328125,
  y: -980.3604125976562,
  z: 24.114015579223633,
  radius: 20,
  fraction: null
}, {
  x: 1121.71875,
  y: 238.92645263671875,
  z: -50.44071578979492,
  radius: 120,
  fraction: null
}, {
  x: -177.41616821289062,
  y: -1150.0081787109375,
  z: 22.99770736694336,
  radius: 20,
  fraction: null
}, {
  x: -49.366065979003906,
  y: -1104.900390625,
  z: 26.43141746520996,
  z: 22.99770736694336,
  radius: 20,
  fraction: null
}, {
  x: 114.37311553955078,
  y: -875.7509765625,
  z: 31.12738037109375,
  radius: 40,
  fraction: null
}, {
  x: -27.613975524902344,
  y: -1490.573974609375,
  z: 30.36211395263672,
  radius: 10,
  fraction: null
}, {
  x: 948.8513793945312,
  y: -1490.6580810546875,
  z: 30.685449600219727,
  radius: 10,
  fraction: null
}, {
  x: 199.53370666503906,
  y: -2003.62939453125,
  z: 24.563310623168945,
  radius: 10,
  fraction: null
}, {
  x: 1019.6425170898438,
  y: -1861.8095703125,
  z: 30.889835357666016,
  radius: 30,
  fraction: null
}];

function loadGangwarGreenZone() {
  for (let _0xd256x1f = 0; _0xd256x1f < GangwarGreenZones.length; _0xd256x1f++) {
    var _0xd256x20 = mp.colshapes.newCircle(GangwarGreenZones[_0xd256x1f].x, GangwarGreenZones[_0xd256x1f].y, GangwarGreenZones[_0xd256x1f].radius, 8);

    _0xd256x20.gangwarGreenZone = true;
    _0xd256x20.gangwarFractionID = GangwarGreenZones[_0xd256x1f].fraction;
  }
}

loadGangwarGreenZone();
var GangwarCaptureGreenZones = [{
  x: 97.34600067138672,
  y: -1933.23486328125,
  z: 29.43658447265625,
  radius: 40,
  fraction: 1
}, {
  x: 495.466552734375,
  y: -1326.9593505859375,
  z: 29.32958984375,
  radius: 50,
  fraction: 2
}, {
  x: -157.26637268066406,
  y: -1625.458740234375,
  z: 33.65185546875,
  radius: 30,
  fraction: 3
}, {
  x: 870.1735229492188,
  y: -2043.8109130859375,
  z: 30.38430404663086,
  radius: 30,
  fraction: 4
}, {
  x: 798.1912841796875,
  y: -1607.5274658203125,
  z: 31.293264389038086,
  radius: 30,
  fraction: 5
}, {
  x: 134.2173614501953,
  y: -710.0271606445312,
  z: 33.12799835205078,
  radius: 50,
  fraction: 6
}];

function loadGangwarCaptureGreenZone() {
  for (let _0xd256x1f = 0; _0xd256x1f < GangwarCaptureGreenZones.length; _0xd256x1f++) {
    var _0xd256x20 = mp.colshapes.newCircle(GangwarCaptureGreenZones[_0xd256x1f].x, GangwarCaptureGreenZones[_0xd256x1f].y, GangwarCaptureGreenZones[_0xd256x1f].radius, 7);

    _0xd256x20.gangwarGreenZone = true;
    _0xd256x20.gangwarFractionID = GangwarCaptureGreenZones[_0xd256x1f].fraction;
  }
}

loadGangwarCaptureGreenZone();
var CameraMonitoring = [{
  x: 95.6745376586914,
  y: -1961.8646240234375,
  z: 20.74765968322754,
  fraction: 1
}, {
  x: 490.5143737792969,
  y: -1522.9029541015625,
  z: 29.291397094726562,
  fraction: 2
}, {
  x: -145.66416931152344,
  y: -1428.467041015625,
  z: 30.900625228881836,
  fraction: 3
}, {
  x: 935.964599609375,
  y: -2185.95556640625,
  z: 30.50718116760254,
  fraction: 4
}, {
  x: 1376.4681396484375,
  y: -1514.175537109375,
  z: 58.01523971557617,
  fraction: 5
}, {
  x: 435.5206298828125,
  y: -976.6068725585938,
  z: 30.717105865478516,
  fraction: 6
}];

function loadGangwarCameraMonitoring() {
  for (let _0xd256x1f = 0; _0xd256x1f < CameraMonitoring.length; _0xd256x1f++) {
    var _0xd256x20 = mp.colshapes.newCircle(CameraMonitoring[_0xd256x1f].x, CameraMonitoring[_0xd256x1f].y, 1, 8);

    _0xd256x20.GangwarCameraMonitor = true;
    _0xd256x20.GangwarCameraMonitorFraction = CameraMonitoring[_0xd256x1f].fraction;
  }
}

loadGangwarCameraMonitoring();
var GangwarVehicleSell = [{
  x: -45.411991119384766,
  y: -1081.522705078125,
  z: 26.688812255859375
}];

function loadGangwarVehicleSell() {
  for (let _0xd256x1f = 0; _0xd256x1f < GangwarVehicleSell.length; _0xd256x1f++) {
    var _0xd256x20 = mp.colshapes.newCircle(GangwarVehicleSell[_0xd256x1f].x, GangwarVehicleSell[_0xd256x1f].y, 2, 8);

    _0xd256x20.GangwarVehicleSell = true;
  }
}

loadGangwarVehicleSell();
mp.events.add('PlayerCloseVehicleSell', () => {
  HudMenuCEF.execute(`${'changeGGVehSellDisplay(\'close\');'}`);
  ShowChat();
  mp.gui.cursor.visible = false;
  ChangeHUDKeysDisplay('open');
  ChangeHUDKillFeedDisplay('open');
  ChangeHUDFreeCaseDisplay('open');
});
var activeShopName = null;
var activeCraftName = null;
global.fractionRespawnZone = null;
mp.events.add('playerEnterColshape', _0xd256x39 => {
  if (_0xd256x39.isgangwarshop == 1) {
    activeShopName = _0xd256x39.shoptype;
  }

  if (_0xd256x39.GangwarVehicleSell == true) {}

  if (_0xd256x39.isgangwarcraft == 1) {
    activeCraftName = _0xd256x39.craft;
  }

  if (_0xd256x39.gangwarGreenZone == true) {
    fractionRespawnZone = _0xd256x39.gangwarFractionID;
    HudMenuCEF.execute(`${'GreenZoneChange(\'enter\')'}`);
  }

  if (_0xd256x39.GangwarVehRent == true) {
    if (_0xd256x39.GangwarVehRentFraction == mp.players.local.getVariable('FractionID')) {
      FractionCarPickCurFrac = mp.players.local.getVariable('FractionID');
    }
  }

  if (_0xd256x39.GangwarCameraMonitor == true) {
    if (_0xd256x39.GangwarCameraMonitorFraction == mp.players.local.getVariable('FractionID')) {}
  }

  if (_0xd256x39.gangwarTattooShop == true) {}
});
mp.events.add('playerExitColshape', _0xd256x39 => {
  if (_0xd256x39.isgangwarshop == 1) {
    if (activeShopName != null) {
      switch (activeShopName) {
        case 'different-shop':
          HudMenuCEF.execute(`${'differentShop.Active = 0'}`);
          break;

        case 'weapon-shop':
          HudMenuCEF.execute(`${'weaponShop.Active = 0'}`);
          break;

        default:
          HudMenuCEF.execute(`${'changeGangwarShopDisplay(\'close\',\''}${activeShopName}${'\');'}`);
          break;
      }

      ShowChat();
      mp.gui.cursor.visible = false;
      activeShopName = null;
    }
  }

  if (_0xd256x39.isgangwarcraft == 1) {
    if (activeCraftName != null) {
      HudMenuCEF.execute(`${'changeGangwarCraftDisplay(\'close\');'}`);
      ShowChat();
      mp.gui.cursor.visible = false;
      activeCraftName = null;
    }
  }

  if (_0xd256x39.gangwarGreenZone == true) {
    HudMenuCEF.execute(`${'GreenZoneChange(\'exit\')'}`);
  }

  if (_0xd256x39.GangwarVehicleSell == true) {}

  if (_0xd256x39.GangwarVehRent == true) {
    if (FractionCarPickCEFOpen = 1) {
      ShowChat();
      mp.gui.cursor.visible = false;
      HudMenuCEF.execute(`${'autoRent.Active = 0'}`);
    }
  }

  if (_0xd256x39.GangwarCameraMonitor == true) {}

  if (_0xd256x39.gangwarTattooShop == true) {}
});
mp.keys.bind(0x45, false, function () {
  if (player.dimension != 7 && player.dimension != 8) {
    return;
  }

  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }
});
mp.events.add('setVehSellInfo', (_0xd256x3c, _0xd256x3d, _0xd256x3e, _0xd256x3f, _0xd256xf) => {
  HudMenuCEF.execute(`${'setVehSellInfo(\''}${_0xd256x3c}${'\',\''}${_0xd256x3d}${'\',\''}${_0xd256x3e}${'\',\''}${_0xd256x3f}${'\',\''}${_0xd256xf}${'\');'}`);
  HudMenuCEF.execute(`${'changeGGVehSellDisplay(\'open\');'}`);
  mp.gui.chat.activate(false);
  mp.gui.chat.show(false);
  mp.gui.cursor.visible = true;
  ChangeHUDKeysDisplay('hide');
  ChangeHUDKillFeedDisplay('hide');
  ChangeHUDFreeCaseDisplay('hide');
});
mp.events.add('closeGangwarCameraMonitorInterface', () => {
  HudMenuCEF.execute(`${'changeGangwarCameraMonitorDisplay(\'close\');'}`);
  ChangeHUDKeysDisplay('open');
  ChangeHUDKillFeedDisplay('open');
  ChangeHUDFreeCaseDisplay('open');
  ShowChat();
  mp.gui.cursor.visible = false;
});
mp.events.add('OpenFractionCraft', (_0xd256x3c, _0xd256x40) => {
  HudMenuCEF.execute(`${'changeGangwarCraftDisplay(\'open\');'}`);
  HudMenuCEF.execute(`${'changeGangwarCraftInfo(\''}${_0xd256x3c}${'\',\''}${_0xd256x40}${'\');'}`);
  mp.gui.chat.activate(false);
  mp.gui.chat.show(false);
  mp.gui.cursor.visible = true;
});
mp.events.add('changeGGMaterialsCount', _0xd256x40 => {
  HudMenuCEF.execute(`${'changeGangwarCraftMaterialsCount(\''}${_0xd256x40}${'\');'}`);
});
mp.events.add('closeGangwarCraftInterface', () => {
  HudMenuCEF.execute(`${'changeGangwarCraftDisplay(\'close\');'}`);
  mp.gui.cursor.visible = false;
  ChangeHUDKeysDisplay('open');
  ChangeHUDKillFeedDisplay('open');
  ChangeHUDFreeCaseDisplay('open');
  ShowChat();
});
mp.keys.bind(0x45, false, function () {
  if (player.dimension != 7 && player.dimension != 8 && player.dimension != 9 && player.dimension != 12 && inGangwar != true) {
    return;
  }

  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (localplayer.getHealth() <= 0) {
    return;
  }

  mp.events.callRemote('PlayerPressE');
  let _0xd256x42 = null;
  mp.objects.forEach(_0xd256x43 => {
    if (_0xd256x43.dimension == player.dimension) {
      const _0xd256x44 = _0xd256x43.position;
      const _0xd256x5 = player.position;

      let _0xd256x45 = mp.game.system.vdist(_0xd256x5.x, _0xd256x5.y, _0xd256x5.z, _0xd256x44.x, _0xd256x44.y, _0xd256x44.z);

      if (_0xd256x45 < 2.1) {
        _0xd256x42 = _0xd256x43.remoteId;
      }
    }
  });

  if (_0xd256x42 == null) {
    return;
  }

  mp.events.callRemote('InventoryFindDropAround', _0xd256x42);
});
mp.events.add('gangwarShopBuyItem', (_0xd256x46, _0xd256x40) => {
  if (player.dimension != 7 && player.dimension != 8) {
    return;
  }

  mp.events.callRemote('gangwarShopBuyItem', parseInt(_0xd256x46), parseInt(_0xd256x40));
});
mp.events.add('gangwarNPCBuyingUpItem', _0xd256x46 => {
  if (player.dimension != 7 && player.dimension != 8) {
    return;
  }

  mp.events.callRemote('gangwarNPCBuyingUpItem', parseInt(_0xd256x46));
});
mp.events.add('setPlayerShopsFraction', _0xd256x47 => {
  HudMenuCEF.execute(`${'setPlayerShopsFraction(\''}${_0xd256x47}${'\')'}`);
});
global.InHealthAnimation = false;
setInterval(() => {
  if (InHealthAnimation) {
    mp.game.controls.disableControlAction(0, 22, true);
    mp.game.controls.disableControlAction(0, 21, true);
    mp.game.controls.disableControlAction(0, 24, true);
    mp.game.controls.disableControlAction(1, 24, true);
    mp.game.controls.disableControlAction(2, 24, true);
    mp.game.controls.disableControlAction(0, 25, true);
    mp.game.controls.disableControlAction(1, 25, true);
    mp.game.controls.disableControlAction(2, 25, true);
  }

  mp.game.controls.disableControlAction(2, 12, true);
  mp.game.controls.disableControlAction(2, 13, true);
  mp.game.controls.disableControlAction(2, 14, true);
  mp.game.controls.disableControlAction(2, 15, true);
  mp.game.controls.disableControlAction(2, 16, true);
  mp.game.controls.disableControlAction(2, 17, true);
  mp.game.controls.disableControlAction(2, 37, true);
  mp.game.controls.disableControlAction(2, 99, true);
  mp.game.controls.disableControlAction(2, 100, true);

  if (inGreenZone || mp.players.local.dimension == 13) {
    mp.game.controls.disableControlAction(0, 24, true);
    mp.game.controls.disableControlAction(0, 25, true);
    mp.game.controls.disableControlAction(0, 140, true);
    mp.game.controls.disableControlAction(0, 141, true);
  }

  if (localplayer.dimension == 11) {
    mp.game.player.disableFiring(true);
  }

  if (mp.players.local.getVariable('bakeaknock') == 1) {
    mp.players.local.setCanBeKnockedOffVehicle(1);
  }
}, 0);
var GangwarPeds = [{
  x: 88.34274291992188,
  y: -1959.8184814453125,
  z: 20.747447967529297,
  heading: 319.1193542480469,
  model: 's_f_y_movprem_01',
  NPCName: null
}, {
  x: 473.89532470703125,
  y: -1525.859619140625,
  z: 29.302675247192383,
  heading: 273.37811279296875,
  model: 'ig_maryann'
}, {
  x: -132.69186401367188,
  y: -1424.6458740234375,
  z: 30.541194915771484,
  heading: 81.837890625,
  model: 'ig_tonya'
}, {
  x: 954.9819946289062,
  y: -2179.89013671875,
  z: 30.551576614379883,
  heading: 132.63218688964844,
  model: 's_m_y_pestcont_01'
}, {
  x: 1369.1634521484375,
  y: -1518.46630859375,
  z: 57.66489791870117,
  heading: 217.9204559326172,
  model: 'a_m_m_stlat_02'
}, {
  x: 429.5729675292969,
  y: -986.3753051757812,
  z: 30.711397171020508,
  heading: 359.90496826171875,
  model: 's_m_m_fibsec_01'
}, {
  x: 1324.5997314453125,
  y: -1650.221923828125,
  z: 52.275108337402344,
  heading: 126.05339813232422,
  model: 'u_m_y_tattoo_01',
  NPCName: null
}, {
  x: 319.5124206542969,
  y: 181.2243194580078,
  z: 103.58648681640625,
  heading: 252.04837036132812,
  model: 'u_m_y_tattoo_01',
  NPCName: null
}, {
  x: -1152.084228515625,
  y: -1424.081298828125,
  z: 4.954458713531494,
  heading: 121.14380645751953,
  model: 'u_m_y_tattoo_01',
  NPCName: null
}, {
  x: -292.1407775878906,
  y: 6199.630859375,
  z: 31.487123489379883,
  heading: 222.80174255371094,
  model: 'u_m_y_tattoo_01',
  NPCName: null
}, {
  x: 440.7314147949219,
  y: -978.9486694335938,
  z: 30.6893367767334,
  heading: 183.0657958984375,
  model: 'g_m_m_chicold_01',
  NPCName: null
}, {
  x: 713.41015625,
  y: -977.0758056640625,
  z: 24.126811981201172,
  heading: 181.30015563964844,
  model: 'a_m_y_business_03',
  NPCName: 'Майкл'
}, {
  x: 348.7825622558594,
  y: -1403.3353271484375,
  z: 32.52267837524414,
  heading: 52.28620910644531,
  model: 's_m_m_scientist_01',
  NPCName: 'Ethan'
}, {
  x: 349.978515625,
  y: -1401.9676513671875,
  z: 32.42919158935547,
  heading: 55.98566436767578,
  model: 's_f_y_scrubs_01',
  NPCName: 'Emily'
}, {
  x: 351.1126403808594,
  y: -1377.6328125,
  z: 32.42925262451172,
  heading: 230.28994750976562,
  model: 's_m_y_chef_01',
  NPCName: 'Mark'
}, {
  x: 339.49468994140625,
  y: -1414.3968505859375,
  z: 32.42926025390625,
  heading: 47.92963790893555,
  model: 's_m_m_paramedic_01',
  NPCName: 'Liam'
}, {
  x: 330.4800109863281,
  y: -1400.243896484375,
  z: 32.5093994140625,
  heading: 320.15789794921875,
  model: 'a_m_m_prolhost_01',
  NPCName: 'Michael\nСведение татуировок'
}, {
  x: 337.70184326171875,
  y: -1416.41064453125,
  z: 32.42924118041992,
  heading: 44.875144958496094,
  model: 's_m_m_doctor_01',
  NPCName: 'Robert\nЛечение зависимости от RNK'
}];
var GangwarPedsCapture = [{
  x: 88.34274291992188,
  y: -1959.8184814453125,
  z: 20.747447967529297,
  heading: 319.1193542480469,
  model: 's_f_y_movprem_01',
  NPCName: null
}, {
  x: -166.6742401123047,
  y: -1630.4361572265625,
  z: 33.65045928955078,
  heading: 232.798828125,
  model: 'ig_tonya'
}, {
  x: 877.1077270507812,
  y: -2045.20654296875,
  z: 30.473472595214844,
  heading: 90.17497253417969,
  model: 's_m_y_pestcont_01'
}, {
  x: 810.3021850585938,
  y: -1623.020751953125,
  z: 31.26180648803711,
  heading: 84.4625473022461,
  model: 'a_m_m_stlat_02'
}, {
  x: 137.22210693359375,
  y: -701.697265625,
  z: 33.122528076171875,
  heading: 233.50106811523438,
  model: 's_m_m_fibsec_01'
}, {
  x: 1324.5997314453125,
  y: -1650.221923828125,
  z: 52.275108337402344,
  heading: 126.05339813232422,
  model: 'u_m_y_tattoo_01'
}, {
  x: 319.5124206542969,
  y: 181.2243194580078,
  z: 103.58648681640625,
  heading: 252.04837036132812,
  model: 'u_m_y_tattoo_01'
}, {
  x: -1152.084228515625,
  y: -1424.081298828125,
  z: 4.954458713531494,
  heading: 121.14380645751953,
  model: 'u_m_y_tattoo_01'
}, {
  x: -292.1407775878906,
  y: 6199.630859375,
  z: 31.487123489379883,
  heading: 222.80174255371094,
  model: 'u_m_y_tattoo_01'
}];

function loadGangwarPeds(_0xd256x1e) {
  if (_0xd256x1e == 7) {
    for (let _0xd256x1f = 0; _0xd256x1f < GangwarPedsCapture.length; _0xd256x1f++) {
      mp.peds.new(mp.game.joaat(`${''}${GangwarPedsCapture[_0xd256x1f].model}${''}`), new mp.Vector3(GangwarPedsCapture[_0xd256x1f].x, GangwarPedsCapture[_0xd256x1f].y, GangwarPedsCapture[_0xd256x1f].z), GangwarPedsCapture[_0xd256x1f].heading, _0xd256x1e);

      if (GangwarPedsCapture[_0xd256x1f].NPCName != null) {
        mp.labels.new(`${''}${GangwarPedsCapture[_0xd256x1f].NPCName}${''}`, new mp.Vector3(GangwarPedsCapture[_0xd256x1f].x, GangwarPedsCapture[_0xd256x1f].y, GangwarPedsCapture[_0xd256x1f].z + 1.3), {
          font: 4,
          drawDistance: 5,
          color: [255, 255, 255, 255],
          dimension: _0xd256x1e
        });
      }
    }
  } else {
    for (let _0xd256x1f = 0; _0xd256x1f < GangwarPeds.length; _0xd256x1f++) {
      mp.peds.new(mp.game.joaat(`${''}${GangwarPeds[_0xd256x1f].model}${''}`), new mp.Vector3(GangwarPeds[_0xd256x1f].x, GangwarPeds[_0xd256x1f].y, GangwarPeds[_0xd256x1f].z), GangwarPeds[_0xd256x1f].heading, _0xd256x1e);

      if (GangwarPeds[_0xd256x1f].NPCName != null) {
        mp.labels.new(`${''}${GangwarPeds[_0xd256x1f].NPCName}${''}`, new mp.Vector3(GangwarPeds[_0xd256x1f].x, GangwarPeds[_0xd256x1f].y, GangwarPeds[_0xd256x1f].z + 1.3), {
          font: 4,
          drawDistance: 5,
          color: [255, 255, 255, 255],
          dimension: _0xd256x1e
        });
      }
    }
  }
}

loadGangwarPeds(7);
loadGangwarPeds(8);
mp.events.add('CraftItem', _0xd256x4b => {
  if (parseInt(_0xd256x4b) != _0xd256x4b) {
    return;
  }

  mp.events.callRemote('CraftItem', parseInt(_0xd256x4b));
});
mp.events.add('GhettoLvlUp', (_0xd256x4c, _0xd256x4d, _0xd256x4e) => {
  InventoryCEF.execute(`${'setGGDefaultLvlStats(\''}${_0xd256x4c}${'\',\''}${_0xd256x4d}${'\',\''}${_0xd256x4e}${'\')'}`);
});
mp.events.add('GhettoChangeStats', (_0xd256x4d, _0xd256x4e) => {
  InventoryCEF.execute(`${'setGGkillsDeathStats(\''}${_0xd256x4d}${'\',\''}${_0xd256x4e}${'\')'}`);
});
mp.events.add('playerSellPersonalVeh', (_0xd256x19, _0xd256xe, _0xd256xf) => {
  mp.events.callRemote('playerSellPersonalVeh', _0xd256x19, _0xd256xe, parseInt(_0xd256xf));
});
mp.events.add('unlockVehicleSellBtnFreeze', () => {
  HudMenuCEF.execute(`${'unlockVehicleSellBtnFreeze()'}`);
});
var GangwarTattooShop = [{
  x: 1323.3118896484375,
  y: -1651.5552978515625,
  z: 52.27512741088867
}, {
  x: 321.4063415527344,
  y: 180.47409057617188,
  z: 103.58647155761719
}, {
  x: -1153.2242431640625,
  y: -1425.112060546875,
  z: 4.954464435577393
}, {
  x: -293.5007019042969,
  y: 6200.56689453125,
  z: 31.48712158203125
}];

function loadGangwarTattooShop() {
  for (let _0xd256x1f = 0; _0xd256x1f < GangwarTattooShop.length; _0xd256x1f++) {
    var _0xd256x20 = mp.colshapes.newCircle(GangwarTattooShop[_0xd256x1f].x, GangwarTattooShop[_0xd256x1f].y, 1, 8);

    _0xd256x20.gangwarTattooShop = true;
  }
}

loadGangwarTattooShop();
var chlast = new Date().getTime();
var chcount = 0;
mp.events.add('GangwarDeathCheck', () => {
  if (new Date().getTime() - chlast > 500) {
    return chlast = new Date().getTime();
  }

  chlast = new Date().getTime();
  chcount++;

  if (chcount >= 10) {
    mp.events.callRemote('GangwarDeathCh');
  }
});
mp.events.add('DiverStart', () => {
  mp.players.local.setMaxTimeUnderwater(100);
});
mp.events.add('GGPlayDanceAnim', _0xd256x55 => {
  mp.events.callRemote('GGPlayDanceAnim', _0xd256x55);
  AnimationRun = true;
});
global.AnimationRun = false;
mp.events.add('render', () => {
  if (AnimationRun == true) {
    mp.game.graphics.drawText(`${'С - остановить анимацию'}`, [0.5, 0.8], {
      font: 0,
      color: [255, 255, 255, 185],
      scale: [0.35, 0.35],
      outline: false
    });
  }
});
mp.keys.bind(0x43, true, function () {
  if (mp.players.local.isDead() == true) {
    return;
  }

  if (mp.players.local.isFalling() == true) {
    return;
  }

  if (AnimationRun == false) {
    return;
  }

  AnimationRun = false;
  mp.events.callRemote('GGStopDanceAnimation');
});
global.seatbeltStatus = false;
mp.keys.bind(0x4A, true, function () {
  if (!localplayer.vehicle) {
    return;
  }

  if (seatbeltStatus == false) {
    localplayer.setConfigFlag(32, false);
    seatbeltStatus = true;
    mp.game.graphics.notify('Ремень безопасности ~g~пристёгнут');
  } else {
    localplayer.setConfigFlag(32, true);
    seatbeltStatus = false;
    mp.game.graphics.notify('Ремень безопасности ~r~отстёгнут');
  }
});
global.circleMenuStatus = false;
global.circleMenuPlayerTarget = null;
global.circleMenuTargetVehicle = null;
mp.keys.bind(0x47, true, function () {
  if (circleMenuStatus == false && (localplayer.dimension == 8 || localplayer.dimension == 9) && !mp.gui.cursor.visible && !ChatActive) {
    let _0xd256x56 = pointingAtCircleTarget(8);

    if (_0xd256x56 === undefined || _0xd256x56.entity === undefined || _0xd256x56 === 'undefined' || _0xd256x56.entity === 'undefined') {} else {
      if (_0xd256x56.entity.type === 'player') {
        if (_0xd256x56.entity.remoteId == localplayer.remoteId) {
          return;
        }

        HudMenuCEF.execute('changeGangwarCircleMenu(\'GangwarCircleMenuTargetPeople\',\'open\');');
        circleMenuStatus = true;
        mp.gui.cursor.visible = true;
        circleMenuPlayerTarget = _0xd256x56.entity;
      } else {
        if (_0xd256x56.entity.type === 'vehicle') {
          HudMenuCEF.execute('changeGangwarCircleMenu(\'GangwarCircleMenuTargetVehicle\',\'open\');');
          mp.gui.cursor.visible = true;
          circleMenuTargetVehicle = _0xd256x56.entity;
        }
      }
    }
  } else {
    if (ChatActive) {
      return;
    }

    if (circleMenuStatus == false) {
      return;
    }

    circleMenuStatus = false;
    HudMenuCEF.execute('changeGangwarCircleMenu(\'GangwarCircleMenuSoloPeople\',\'close\');');
    HudMenuCEF.execute('changeGangwarCircleMenu(\'GangwarCircleMenuTargetPeople\',\'close\');');
    HudMenuCEF.execute('changeGangwarCircleMenu(\'GangwarCircleMenuTargetVehicle\',\'close\');');
    mp.gui.cursor.visible = false;
  }
});
mp.events.add('closeCircleMenu', () => {
  circleMenuStatus = false;
  mp.gui.cursor.visible = false;
  circleMenuPlayerTarget = null;
  circleMenuTargetVehicle = null;
});
mp.events.add('GangwarReanimate', () => {
  if (circleMenuPlayerTarget.remoteId == mp.players.local.remoteId) {
    return;
  }

  if (circleMenuPlayerTarget == null || !mp.players.exists(circleMenuPlayerTarget)) {
    return HudMenuCEF.execute(`${'fastemsg(\'Игрок слишком далеко/вышел с сервера\');'}`);
  }

  const _0xd256x5 = localplayer.position;
  const _0xd256x58 = circleMenuPlayerTarget.position;

  let _0xd256x45 = mp.game.system.vdist(_0xd256x5.x, _0xd256x5.y, _0xd256x5.z, _0xd256x58.x, _0xd256x58.y, _0xd256x58.z);

  if (_0xd256x45 >= 5) {
    return HudMenuCEF.execute(`${'fastemsg(\'Игрок слишком далеко.\');'}`);
  }

  if (circleMenuPlayerTarget.getVariable('FractionID') != localplayer.getVariable('FractionID')) {
    return HudMenuCEF.execute(`${'fastemsg(\'Игрок не из вашей фракции.\');'}`);
  }

  mp.events.callRemote('GangwarReanimateStart', circleMenuPlayerTarget.remoteId);
});
mp.events.add('GangwarBreakingLock', () => {
  if (circleMenuTargetVehicle == null || !mp.vehicles.exists(circleMenuTargetVehicle)) {
    return HudMenuCEF.execute(`${'fastemsg(\'Игрок слишком далеко/вышел с сервера\');'}`);
  }

  const _0xd256x5 = localplayer.position;
  const _0xd256x58 = circleMenuTargetVehicle.position;

  let _0xd256x45 = mp.game.system.vdist(_0xd256x5.x, _0xd256x5.y, _0xd256x5.z, _0xd256x58.x, _0xd256x58.y, _0xd256x58.z);

  if (_0xd256x45 >= 5) {
    return HudMenuCEF.execute(`${'fastemsg(\'Игрок слишком далеко.\');'}`);
  }

  mp.events.callRemote('GangwarBreakingLock', circleMenuTargetVehicle.remoteId);
});
mp.events.add('startGangwarReanimateProccess', _0xd256x59 => {
  setTimeout(() => {
    mp.events.callRemote('successGangwarReanimateProccess', _0xd256x59);
  }, 3500);
});
mp.events.add('unsetReanimateStatus', () => {
  HudMenuCEF.execute(`${'fastemsg(\'У нас нет адреналина.\');'}`);
});
mp.events.add('ChangeHealthsParams', _0xd256x5a => {
  playerHealths.Health = parseInt(_0xd256x5a);
});

function pointingAtCircleTarget(_0xd256x41) {
  const _0xd256x5c = mp.cameras.new('gameplay');

  let _0xd256x5d = _0xd256x5c.getCoord();

  let _0xd256x5e = _0xd256x5c.getDirection();

  let _0xd256x5f = new mp.Vector3(_0xd256x5e.x * _0xd256x41 + _0xd256x5d.x, _0xd256x5e.y * _0xd256x41 + _0xd256x5d.y, _0xd256x5e.z * _0xd256x41 + _0xd256x5d.z);

  return mp.raycasting.testPointToPoint(_0xd256x5d, _0xd256x5f, [1, 16]);
}

mp.game.interior.enableInteriorProp(258561, 'bunker_style_a');
mp.game.interior.enableInteriorProp(258561, 'standard_bunker_set');
mp.game.interior.refreshInterior(255233);
mp.events.add('hangarCaptureStartGrab', () => {
  setTimeout(() => {
    mp.events.callRemote('hangarCaptureSuccessGrab');
  }, 5000);
});
global.miniMenuStatus = 0;
mp.events.add('ChangeMiniMenuStatus', _0xd256x55 => {
  miniMenuStatus = parseInt(_0xd256x55);
});
mp.keys.bind(0x4D, true, function () {
  if (ChatActive) {
    return;
  }

  switch (miniMenuStatus) {
    case 0:
      if (mp.gui.cursor.visible) {
        return;
      }

      HudMenuCEF.execute(`${'MainMenuBlock.MiniMenu = 1'}`);
      miniMenuStatus = 1;
      mp.gui.cursor.visible = true;
      break;

    default:
      if (miniMenuStatus == 0) {
        return;
      }

      miniMenuStatus = 0;
      HudMenuCEF.execute(`${'MainMenuBlock.MiniMenu = 0'}`);
      mp.gui.cursor.visible = false;
      break;
  }
});
mp.events.add('loadVehiclePassengers', () => {
  if (!localplayer.vehicle) {
    return mp.events.call('emsghud', `${'Вы должны находиться в машине'}`);
  }

  if (localplayer.vehicle.getPedInSeat(-1) !== localplayer.handle) {
    return mp.events.call('emsghud', `${'Вы должны быть на водительском месте'}`);
  }

  HudMenuCEF.execute(`${'MainMenuBlock.Passengers = []'}`);

  for (let _0xd256x1f = -1; _0xd256x1f < parseInt(mp.game.vehicle.getVehicleModelMaxNumberOfPassengers(localplayer.vehicle.model)) - 1; _0xd256x1f++) {
    const _0xd256x4 = mp.players.atHandle(localplayer.vehicle.getPedInSeat(_0xd256x1f));

    if (_0xd256x4) {
      HudMenuCEF.execute(`${'MainMenuBlock.addPassenger(\''}${_0xd256x4.name}${'\',\''}${_0xd256x4.getVariable('StaticID')}${'\',\''}${_0xd256x4.remoteId}${'\')'}`);
    }
  }

  HudMenuCEF.execute(`${'MainMenuBlock.MiniMenu = 2'}`);
});
mp.events.add('kickTargetFromVeh', _0xd256x61 => {
  if (!localplayer.vehicle) {
    return mp.events.call('emsghud', `${'Вы должны находиться в машине'}`);
  }

  if (localplayer.vehicle.getPedInSeat(-1) !== localplayer.handle) {
    return mp.events.call('emsghud', `${'Вы должны быть на водительском месте'}`);
  }

  if (localplayer.remoteId == parseInt(_0xd256x61)) {
    return mp.events.call('emsghud', `${'Невозможно выкинуть из машины самого себя.'}`);
  }

  mp.events.callRemote('kickTargetFromVeh', _0xd256x61);
});
mp.events.add('copyInClipText', _0xd256x62 => {
  HudMenuCEF.execute(`${'copyInClip(\''}${_0xd256x62}${'\')'}`);
});
mp.events.add('playerCommand', _0xd256x63 => {
  const _0xd256x64 = _0xd256x63.split(/[ ]+/);

  const _0xd256x65 = _0xd256x64[0];

  _0xd256x64.shift();

  if (_0xd256x65 === 'loadshop') {
    try {
      if (parseInt(_0xd256x64[0]) == 1) {
        HudMenuCEF.execute(`${'addItemsIngangwarShops()'}`);
        mp.gui.chat.push(`${'24/7 load'}`);
      }

      if (parseInt(_0xd256x64[0]) == 2) {
        HudMenuCEF.execute(`${'addItemsIngangwarShop()'}`);
        mp.gui.chat.push(`${'donate load'}`);
      }
    } catch (e) {
      mp.gui.chat.push(`${'e: '}${e}${''}`);
    }
  }
});