var _0xec58 = ["local", "players", "EMSData", "changeRNKAddiction", "RNKAddiction", "RNKInit", "unRNK.RNKAddiction = '", "'", "execute", "add", "events", "medicines-shop", "Медикаменты (E)", "different-shop", "Магазин EMS", "length", "TattooReduction", "x", "y", "newCircle", "colshapes", "isgangwarshop", "shoptype", "", "shopType", "EMSRent", "EMSunRNK", "playerEnterColshape", "inTattooReductionShape", "inEMSRentShapeZone", "inUnRNKShape", "playerExitColshape", "TattooReductionActive", "visible", "cursor", "gui", "EMSTattoo.Active = 0", "EMSRentActive", "autoRent.Active = 0", "unRNKActive", "unRNK.Active = 0", "activate", "chat", "show", "EMSTattoo.Active = 1", "unRNK.Active = 1", "autoRent.rentModal = 0", "autoRent.FIB = 1", "autoRent.Active = 1", "autoRent.FIB = 0", "bind", "keys", "EMSCancelReductionTattoo", "EMSReductionAllTattoo", "Server:EMSReductionAllTattoo", "callRemote", "buyParamedicLic", "Server:buyParamedicLic", "EMSCancelUnRNK", "EMSstartClearRNK", "Server:EMSstartClearRNK"];
const localplayer = mp.players.local;
global.EMSData = {
  inTattooReductionShape: false,
  TattooReductionActive: false,
  inEMSRentShapeZone: false,
  EMSRentActive: false,
  inUnRNKShape: false,
  unRNKActive: false,
  RNKAddiction: 0,
  RNKInit: 0
};
mp.events.add('changeRNKAddiction', _0x4e4bx2 => {
  EMSData.RNKAddiction = parseInt(_0x4e4bx2) / 200 * 100;
  changeRNKHealCount();

  if (EMSData.RNKInit == 0) {
    setTimeout(() => {
      HudMenuCEF.execute(`${'unRNK.RNKAddiction = \''}${EMSData.RNKAddiction}${'\''}`);
      EMSData.RNKInit = 1;
    }, 5000);
  } else {
    HudMenuCEF.execute(`${'unRNK.RNKAddiction = \''}${EMSData.RNKAddiction}${'\''}`);
  }
});
let EMSColshapesList = [{
  x: 349.3782043457031,
  y: -1401.4906005859375,
  z: 32.37092590332031,
  shopType: 'medicines-shop',
  shopName: 'Медикаменты (E)'
}, {
  x: 351.1126403808594,
  y: -1377.6328125,
  z: 32.42925262451172,
  shopType: 'different-shop',
  shopName: 'Магазин EMS'
}];
let OtherEMSColshapesList = [{
  x: 339.49468994140625,
  y: -1414.3968505859375,
  z: 32.42926025390625,
  TattooReduction: true
}, {
  x: 330.4800109863281,
  y: -1400.243896484375,
  z: 32.5093994140625,
  EMSRent: true
}, {
  x: 337.70184326171875,
  y: -1416.41064453125,
  z: 32.42924118041992,
  EMSunRNK: true
}];

function loadEMSColshapes(_0x4e4bx6) {
  for (let _0x4e4bx7 = 0; _0x4e4bx7 < EMSColshapesList.length; _0x4e4bx7++) {
    if (EMSColshapesList[_0x4e4bx7].TattooReduction != true) {
      var _0x4e4bx8 = mp.colshapes.newCircle(EMSColshapesList[_0x4e4bx7].x, EMSColshapesList[_0x4e4bx7].y, 2, _0x4e4bx6);

      _0x4e4bx8.isgangwarshop = 1;
      _0x4e4bx8.shoptype = `${''}${EMSColshapesList[_0x4e4bx7].shopType}${''}`;
    } else {
      var _0x4e4bx8 = mp.colshapes.newCircle(EMSColshapesList[_0x4e4bx7].x, EMSColshapesList[_0x4e4bx7].y, 2, _0x4e4bx6);

      _0x4e4bx8.TattooReduction = true;
    }
  }
}

loadEMSColshapes(8);

function loadEMSOtherShapes(_0x4e4bx6) {
  for (let _0x4e4bx7 = 0; _0x4e4bx7 < OtherEMSColshapesList.length; _0x4e4bx7++) {
    if (OtherEMSColshapesList[_0x4e4bx7].TattooReduction == true) {
      let _0x4e4bx8 = mp.colshapes.newCircle(OtherEMSColshapesList[_0x4e4bx7].x, OtherEMSColshapesList[_0x4e4bx7].y, 2, _0x4e4bx6);

      _0x4e4bx8.TattooReduction = true;
    }

    if (OtherEMSColshapesList[_0x4e4bx7].EMSRent == true) {
      let _0x4e4bx8 = mp.colshapes.newCircle(OtherEMSColshapesList[_0x4e4bx7].x, OtherEMSColshapesList[_0x4e4bx7].y, 2, _0x4e4bx6);

      _0x4e4bx8.EMSRent = true;
    }

    if (OtherEMSColshapesList[_0x4e4bx7].EMSunRNK == true) {
      let _0x4e4bx8 = mp.colshapes.newCircle(OtherEMSColshapesList[_0x4e4bx7].x, OtherEMSColshapesList[_0x4e4bx7].y, 2, _0x4e4bx6);

      _0x4e4bx8.EMSunRNK = true;
    }
  }
}

loadEMSOtherShapes(8);
mp.events.add('playerEnterColshape', _0x4e4bxa => {
  if (_0x4e4bxa.TattooReduction == true) {
    EMSData.inTattooReductionShape = true;
  }

  if (_0x4e4bxa.EMSRent == true) {
    EMSData.inEMSRentShapeZone = true;
  }

  if (_0x4e4bxa.EMSRent == true) {
    EMSData.inEMSRentShapeZone = true;
  }

  if (_0x4e4bxa.EMSunRNK == true) {
    EMSData.inUnRNKShape = true;
  }
});
mp.events.add('playerExitColshape', _0x4e4bxa => {
  if (_0x4e4bxa.TattooReduction == true) {
    EMSData.inTattooReductionShape = false;

    if (EMSData.TattooReductionActive == true) {
      EMSData.TattooReductionActive = false;
      ShowChat();
      mp.gui.cursor.visible = false;
      HudMenuCEF.execute(`${'EMSTattoo.Active = 0'}`);
    }
  }

  if (_0x4e4bxa.EMSRent == true) {
    EMSData.inEMSRentShapeZone = false;

    if (EMSData.EMSRentActive == true) {
      EMSData.EMSRentActive = false;
      ShowChat();
      mp.gui.cursor.visible = false;
      HudMenuCEF.execute(`${'autoRent.Active = 0'}`);
    }
  }

  if (_0x4e4bxa.EMSunRNK == true) {
    EMSData.inUnRNKShape = false;

    if (EMSData.unRNKActive == true) {
      EMSData.unRNKActive = false;
      ShowChat();
      mp.gui.cursor.visible = false;
      HudMenuCEF.execute(`${'unRNK.Active = 0'}`);
    }
  }
});
mp.keys.bind(0x45, false, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (EMSData.inTattooReductionShape == true) {
    if (EMSData.TattooReductionActive != true) {
      EMSData.TattooReductionActive = true;
      mp.gui.chat.activate(false);
      mp.gui.chat.show(false);
      mp.gui.cursor.visible = true;
      HudMenuCEF.execute(`${'EMSTattoo.Active = 1'}`);
    }
  }

  if (EMSData.inUnRNKShape == true) {
    if (EMSData.unRNKActive != true) {
      EMSData.unRNKActive = true;
      mp.gui.chat.activate(false);
      mp.gui.chat.show(false);
      mp.gui.cursor.visible = true;
      HudMenuCEF.execute(`${'unRNK.Active = 1'}`);
    }
  }

  if (EMSData.inEMSRentShapeZone == true) {
    if (EMSData.EMSRentActive != true) {
      EMSData.EMSRentActive = true;
      mp.gui.chat.activate(false);
      mp.gui.chat.show(false);
      mp.gui.cursor.visible = true;
      HudMenuCEF.execute(`${'autoRent.rentModal = 0'}`);

      switch (parseInt(FractionCarPickCurFrac)) {
        case 6:
          HudMenuCEF.execute(`${'autoRent.FIB = 1'}`);
          HudMenuCEF.execute(`${'autoRent.Active = 1'}`);
          break;

        default:
          HudMenuCEF.execute(`${'autoRent.FIB = 0'}`);
          HudMenuCEF.execute(`${'autoRent.Active = 1'}`);
          break;
      }
    }
  }
});
mp.events.add('EMSCancelReductionTattoo', () => {
  EMSData.TattooReductionActive = false;
  ShowChat();
  mp.gui.cursor.visible = false;
  HudMenuCEF.execute(`${'EMSTattoo.Active = 0'}`);
});
mp.events.add('EMSReductionAllTattoo', () => {
  mp.events.callRemote('Server:EMSReductionAllTattoo');
});
mp.events.add('buyParamedicLic', () => {
  mp.events.callRemote('Server:buyParamedicLic');
});
mp.events.add('EMSCancelUnRNK', () => {
  EMSData.unRNKActive = false;
  ShowChat();
  mp.gui.cursor.visible = false;
  HudMenuCEF.execute(`${'unRNK.Active = 0'}`);
});
mp.events.add('EMSstartClearRNK', () => {
  mp.events.callRemote('Server:EMSstartClearRNK');
});

class GreenZoneHospital {
  inGreenZoneActive = false;
  player = false;
  greenZonePolygons = [];

  isPointInPolygon(x, y, polygon) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return mp.gui.chat.push('Invalid latitude or longitude. Numbers are expected');
    } else if (!polygon || !Array.isArray(polygon)) {
      return mp.gui.chat.push('Invalid polygon. Array with locations expected');
    } else if (polygon.length === 0) {
      return mp.gui.chat.push('Invalid polygon. Non-empty Array expected');
    }

    let inside = false;

    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i][0];
      const yi = polygon[i][1];
      const xj = polygon[j][0];
      const yj = polygon[j][1];
      const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }

    return inside;
  }

  constructor() {
    this.player = mp.players.local;
    this.greenZonePolygons.push(new Array(374.71478271484375, -1452.0948486328125));
    this.greenZonePolygons.push(new Array(300.9867248535156, -1390.250244140625));
    this.greenZonePolygons.push(new Array(332.35186767578125, -1350.4166259765625));
    this.greenZonePolygons.push(new Array(409.04510498046875, -1414.0396728515625));
    setInterval(async () => {
      if (!this.player) return;
      const isWithinHospital = this.isPointInPolygon(this.player.position.x, this.player.position.y, this.greenZonePolygons);

      if (isWithinHospital && !this.inGreenZoneActive) {
        this.inGreenZoneActive = true;
        mp.events.call('changeGreenZoneStatus', true);
      } else if (!isWithinHospital && this.inGreenZoneActive) {
        this.inGreenZoneActive = false;
        mp.events.call('changeGreenZoneStatus', false);
      }
    }, 500);
  }

}

const update = new GreenZoneHospital();