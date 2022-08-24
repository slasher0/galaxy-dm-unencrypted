var BRZonesBlips = [];
var BRCheckPlayerZoneInterval = null;
var DynamicBlip = null;
var StaticBlip = null;
var zonemarker = null;
var staticzone = {
  x: 22,
  y: 11,
  radius: 1300.8,
  'radius': 1300.8
};

function checkZoneDistanceHUDInfo() {
  let _0x15DA2 = mp.players.local.position;

  let _0x1488A = mp.game.system.vdist(_0x15DA2.x, _0x15DA2.y, _0x15DA2.z, staticzone.x, staticzone.y, _0x15DA2.z);

  let _0x176AA = _0x1488A - staticzone.radius;

  if (_0x176AA < 0) {
    _0x176AA = 0;
  }

  HudMenuCEF.execute(`BRSetLeftDistantZone('${0}');`);
}

var dynamiczone = {
  x: 22,
  y: 11,
  radius: 1800.8,
  'radius': 1800.8
};

function setstaticzone(_0x13A32, _0x12B4A) {
  switch (_0x13A32) {
    case 'x':
      staticzone.x = parseFloat(_0x12B4A);
      break;

    case 'y':
      staticzone.y = parseFloat(_0x12B4A);
      break;

    case 'radius':
      staticzone.radius = parseInt(_0x12B4A) + 0.8;
      break;

    default:
      break;
  }
}

function setdynamiczone(_0x13A32, _0x12B4A) {
  switch (_0x13A32) {
    case 'x':
      dynamiczone.x = parseFloat(_0x12B4A);
      break;

    case 'y':
      dynamiczone.y = parseFloat(_0x12B4A);
      break;

    case 'radius':
      dynamiczone.radius = parseInt(_0x12B4A) + 0.8;
      break;

    default:
      break;
  }
}

function CheckPlayerZone() {
  let _0x12FA6 = mp.players.local.position;
  let _0x1758A = dynamiczone.x;
  let _0x175AE = dynamiczone.y;

  let _0x17566 = parseInt(dynamiczone.radius);

  let _0x143E6 = parseFloat(_0x12FA6.x);

  let _0x1440A = parseFloat(_0x12FA6.y);

  if ((_0x143E6 - _0x1758A) * (_0x143E6 - _0x1758A) + (_0x1440A - _0x175AE) * (_0x1440A - _0x175AE) < _0x17566 * _0x17566) {} else {
    if ((_0x143E6 - _0x1758A) * (_0x143E6 - _0x1758A) + (_0x1440A - _0x175AE) * (_0x1440A - _0x175AE) == _0x17566 * _0x17566) {} else {
      let localplayer = mp.players.local;

      let _0x17542 = localplayer.getHealth() + 100;

      localplayer.setHealth(parseFloat(_0x17542) - 0.25);
    }
  }
}

function checkrad(_0x175F6, _0x1761A, _0x175D2) {
  let _0x143E6 = parseFloat(dynamiczone.x);

  let _0x1440A = parseFloat(dynamiczone.y);

  let _0x17566 = parseInt(dynamiczone.radius) + 0.8;

  let _0x17662 = _0x175F6;
  let _0x17686 = _0x1761A;
  let _0x1763E = _0x175D2;

  if (Math.pow(_0x143E6 - _0x17662, 2) + Math.pow(_0x1440A - _0x17686, 2) < Math.pow(_0x17566 - _0x1763E, 2)) {
    return 'true';
  } else {
    return 'false';
  }
}

function StartRunFirstDynamicZone() {
  let _0x17BDE = parseInt(dynamiczone.radius) + 0.8;

  let _0x17C26 = parseInt(staticzone.radius) + 0.8;

  let _0x17C6E = parseFloat(staticzone.x);

  let _0x17C92 = parseFloat(staticzone.y);

  let _0x14182 = 0;

  let _0x17C4A;

  let _0x17CB6 = parseFloat(dynamiczone.x);

  let _0x17CDA = parseFloat(dynamiczone.y);

  let _0x17BBA = (parseFloat(_0x17BDE) - parseFloat(_0x17C26)) / 1200;

  let _0x17B72 = (parseFloat(_0x17C6E) - parseFloat(_0x17CB6)) / 1200;

  let _0x17B96 = (parseFloat(_0x17C92) - parseFloat(_0x17CDA)) / 1200;

  _0x17C4A = setInterval(() => {
    let _0x17CFE = checkrad(parseFloat(staticzone.x), parseFloat(staticzone.y), parseFloat(staticzone.radius));

    if (_0x17CFE == 'true') {
      _0x17CB6 = parseFloat(_0x17CB6) + parseFloat(_0x17B72);
      _0x17CDA = parseFloat(_0x17CDA) + parseFloat(_0x17B96);
      mp.game.invoke('0xAE2AF67E9D9AF65D', null, _0x17CB6, _0x17CDA, 0);
      dynamiczone.x = parseFloat(_0x17CB6);
      dynamiczone.y = parseFloat(_0x17CDA);
    } else {}

    _0x17BDE = parseFloat(_0x17BDE) - parseFloat(_0x17BBA);
    dynamiczone.radius = parseInt(_0x17BDE) + 0.8;
    mp.game.invoke('0xD38744167B2FA257', null, parseFloat(_0x17BDE));
    mp.game.invoke('0x03D7FB09E75D6B7E', null, 3);
    mp.game.invoke('0x45FF974EEE1C8734', null, 80);
    zonemarker.scale = parseFloat(_0x17BDE) * 1.963460684140382;
    zonemarker.position = new mp.Vector3(parseFloat(_0x17CB6), parseFloat(_0x17CDA), -11);
    _0x14182 = parseInt(_0x14182) + 100;

    if (_0x14182 >= 120000 || _0x17BDE <= _0x17C26) {
      mp.game.invoke('0xAE2AF67E9D9AF65D', null, _0x17C6E, _0x17C92, 0);

      let _0x17D22 = parseInt(_0x17C26) + 0.8;

      mp.game.invoke('0xD38744167B2FA257', null, parseFloat(_0x17D22));
      mp.game.invoke('0x03D7FB09E75D6B7E', null, 3);
      mp.game.invoke('0x45FF974EEE1C8734', null, 80);
      clearInterval(_0x17C4A);
    }
  }, 100);
}

function StartRunDynamicZone() {
  let _0x17BDE = parseInt(dynamiczone.radius) + 0.8;

  let _0x17C26 = parseInt(staticzone.radius) + 0.8;

  let _0x17C6E = parseFloat(staticzone.x);

  let _0x17C92 = parseFloat(staticzone.y);

  let _0x14182 = 0;

  let _0x17C4A;

  let _0x17CB6 = parseFloat(dynamiczone.x);

  let _0x17CDA = parseFloat(dynamiczone.y);

  let _0x17BBA = (parseFloat(_0x17BDE) - parseFloat(_0x17C26)) / 300;

  let _0x17B72 = (parseFloat(_0x17C6E) - parseFloat(_0x17CB6)) / 300;

  let _0x17B96 = (parseFloat(_0x17C92) - parseFloat(_0x17CDA)) / 300;

  _0x17C4A = setInterval(() => {
    let _0x17CFE = checkrad(parseFloat(staticzone.x), parseFloat(staticzone.y), parseFloat(staticzone.radius));

    if (_0x17CFE == 'true') {
      _0x17CB6 = parseFloat(_0x17CB6) + parseFloat(_0x17B72);
      _0x17CDA = parseFloat(_0x17CDA) + parseFloat(_0x17B96);
      mp.game.invoke('0xAE2AF67E9D9AF65D', null, _0x17CB6, _0x17CDA, 0);
      dynamiczone.x = parseFloat(_0x17CB6);
      dynamiczone.y = parseFloat(_0x17CDA);
    } else {}

    _0x17BDE = parseFloat(_0x17BDE) - parseFloat(_0x17BBA);
    dynamiczone.radius = parseInt(_0x17BDE) + 0.8;
    mp.game.invoke('0xD38744167B2FA257', null, parseFloat(_0x17BDE));
    mp.game.invoke('0x03D7FB09E75D6B7E', null, 3);
    mp.game.invoke('0x45FF974EEE1C8734', null, 80);
    zonemarker.scale = parseFloat(_0x17BDE) * 1.963460684140382;
    zonemarker.position = new mp.Vector3(parseFloat(_0x17CB6), parseFloat(_0x17CDA), -11);
    _0x14182 = parseInt(_0x14182) + 100;

    if (_0x14182 >= 30000 || _0x17BDE <= _0x17C26) {
      mp.game.invoke('0xAE2AF67E9D9AF65D', null, _0x17C6E, _0x17C92, 0);

      let _0x17D22 = parseInt(_0x17C26) + 0.8;

      mp.game.invoke('0xD38744167B2FA257', null, parseFloat(_0x17D22));
      mp.game.invoke('0x03D7FB09E75D6B7E', null, 3);
      mp.game.invoke('0x45FF974EEE1C8734', null, 80);
      clearInterval(_0x17C4A);
    }
  }, 100);
}

mp.events.add('DrawFirstZones', (_0x141EE, _0x14212) => {
  BRZoneNotify('FirstZoneDraw');
  setTimeout(() => {
    BRZoneNotify('ZonePush150s');
  }, 7000);
  zonemarker = mp.markers.new(1, new mp.Vector3(parseFloat(_0x141EE), parseFloat(_0x14212), -11), 3535.8, {
    direction: 0,
    rotation: 0,
    color: [0, 72, 255, 50],
    visible: true,
    dimension: mp.players.local.dimension
  });
  BRZonesBlips = [];
  DynamicBlip = mp.game.ui.addBlipForRadius(parseFloat(_0x141EE), parseFloat(_0x14212), 0, 1800.8);
  mp.game.invoke('0xDF735600A4696DAF', DynamicBlip, 9);
  mp.game.invoke('0x03D7FB09E75D6B7E', DynamicBlip, 3);
  mp.game.invoke('0x45FF974EEE1C8734', DynamicBlip, 80);
  BRZonesBlips.push(DynamicBlip);
  StaticBlip = mp.game.ui.addBlipForRadius(parseFloat(_0x141EE), parseFloat(_0x14212), 0, 1300.8);
  mp.game.invoke('0xDF735600A4696DAF', StaticBlip, 10);
  mp.game.invoke('0x03D7FB09E75D6B7E', StaticBlip, 1);
  mp.game.invoke('0x45FF974EEE1C8734', StaticBlip, 100);
  BRZonesBlips.push(StaticBlip);
  dynamiczone.x = parseFloat(_0x141EE);
  dynamiczone.y = parseFloat(_0x14212);
  staticzone.x = parseFloat(_0x141EE);
  staticzone.y = parseFloat(_0x14212);
});
mp.events.add('StartPushZone', _0x12B26 => {
  switch (_0x12B26) {
    case 'First':
      StartRunFirstDynamicZone();
      break;

    case 'All':
      StartRunDynamicZone();
      break;
  }
});
mp.events.add('StartCheckPlayerInZone', () => {
  BRCheckPlayerZoneInterval = setInterval(() => {
    CheckPlayerZone();
  }, 250);
});

function clearIntervalPlayerBRZone() {
  if (BRCheckPlayerZoneInterval != null) {
    clearInterval(BRCheckPlayerZoneInterval);
    BRCheckPlayerZoneInterval = null;
  }
}

mp.events.add('ChangeStaticZone', (_0x141EE, _0x14212, _0x142C6) => {
  BRZoneNotify('ZonePush60s');
  staticzone.x = parseFloat(_0x141EE);
  staticzone.y = parseFloat(_0x14212);
  staticzone.radius = parseInt(_0x142C6) + 0.8;
  mp.game.invoke('0xAE2AF67E9D9AF65D', StaticBlip, staticzone.x, staticzone.y, 0);
  mp.game.invoke('0xD38744167B2FA257', StaticBlip, staticzone.radius);
  mp.game.invoke('0xDF735600A4696DAF', StaticBlip, 10);
  mp.game.invoke('0x03D7FB09E75D6B7E', StaticBlip, 1);
  mp.game.invoke('0x45FF974EEE1C8734', StaticBlip, 100);
});
mp.events.add('drawblip', (_0x143E6, _0x1440A, _0x1442E) => {
  let _0x13762 = mp.game.ui.addBlipForRadius(parseFloat(_0x143E6), parseFloat(_0x1440A), 100, parseInt(_0x1442E));

  mp.game.invoke('0xDF735600A4696DAF', _0x13762, 10);
  mp.game.invoke('0x03D7FB09E75D6B7E', _0x13762, 1);
  mp.game.invoke('0x45FF974EEE1C8734', _0x13762, 100);
  BRZonesBlips.push(_0x13762);
});
mp.events.add('render', () => {
  if (BRZonesBlips.length !== 0) {
    BRZonesBlips.forEach(_0x13762 => {
      mp.game.invoke('0xF87683CDF73C3F6E', _0x13762, 0);
    });
  }
});
mp.events.add('hideall', () => {
  if (BRZonesBlips.length !== 0) {
    BRZonesBlips.forEach(_0x13762 => {
      mp.game.invoke('0x45FF974EEE1C8734', _0x13762, 0);
    });
  }
});