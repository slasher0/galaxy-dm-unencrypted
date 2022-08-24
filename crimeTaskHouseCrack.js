const localplayer = mp.players.local;
let houseGrabItems = [{
  type: 1,
  x: 151.93014526367188,
  y: -1001.3965454101562,
  z: -98.99990844726562,
  x2: 151.5159454345703,
  y2: -1004.5933227539062,
  z2: -98.99990844726562,
  x3: null,
  y3: null,
  z3: null,
  x4: null,
  y4: null,
  z4: null
}, {
  type: 2,
  x: 257.35345458984375,
  y: -996.0176391601562,
  z: -99.008544921875,
  x2: 255.48805236816406,
  y2: -1000.7359619140625,
  z2: -99.00985717773438,
  x3: 262.71136474609375,
  y3: -1002.9512939453125,
  z3: -99.00865936279297,
  x4: null,
  y4: null,
  z4: null
}, {
  type: 3,
  x: 347.47613525390625,
  y: -993.7382202148438,
  z: -99.19623565673828,
  x2: 351.7702331542969,
  y2: -998.7484741210938,
  z2: -99.19615936279297,
  x3: 338.3549499511719,
  y3: -1000.5463256835938,
  z3: -99.19618225097656,
  x4: 344.1853332519531,
  y4: -994.451171875,
  z4: -99.1961669921875
}, {
  type: 4
}, {
  type: 5
}, {
  type: 6
}, {
  type: 7,
  x: -1467.7891845703125,
  y: -544.3551025390625,
  z: 55.526405334472656,
  x2: -1460.2857666015625,
  y2: -530.6927490234375,
  z2: 50.730567932128906,
  x3: -1468.3924560546875,
  y3: -539.2220458984375,
  z3: 50.7216796875,
  x4: -1460.7181396484375,
  y4: -539.4995727539062,
  z4: 55.526405334472656
}];
let activeGrabItems = [];
mp.events.add('changeHouseGrabShapes', (_0x8e89x4, _0x8e89x5, _0x8e89x6) => {
  switch (_0x8e89x4) {
    case 'init':
      let _0x8e89x7 = houseGrabItems.find(_0x8e89x8 => {
        return _0x8e89x8.type == parseInt(_0x8e89x5);
      });

      if (!_0x8e89x7) {
        return;
      }

      crateGrabShapeMarker(_0x8e89x7.x, _0x8e89x7.y, _0x8e89x7.z, _0x8e89x6, 1);
      crateGrabShapeMarker(_0x8e89x7.x2, _0x8e89x7.y2, _0x8e89x7.z2, _0x8e89x6, 2);

      if (_0x8e89x7.x3 != null) {
        crateGrabShapeMarker(_0x8e89x7.x3, _0x8e89x7.y3, _0x8e89x7.z3, _0x8e89x6, 3);
      }

      if (_0x8e89x7.x4 != null) {
        crateGrabShapeMarker(_0x8e89x7.x4, _0x8e89x7.y4, _0x8e89x7.z4, _0x8e89x6, 4);
      }

      break;

    default:
      activeGrabItems.forEach(_0x8e89x9 => {
        if (mp.colshapes.exists(_0x8e89x9.shape)) {
          _0x8e89x9.shape.destroy();
        }

        if (mp.markers.exists(_0x8e89x9.marker)) {
          _0x8e89x9.marker.destroy();
        }

        if (mp.labels.exists(_0x8e89x9.label)) {
          _0x8e89x9.label.destroy();
        }
      });
      break;
  }
});
mp.events.add('removeHouseGrabShape', _0x8e89xa => {
  activeGrabItems.forEach(_0x8e89x9 => {
    if (parseInt(_0x8e89x9.grabItem) == parseInt(_0x8e89xa)) {
      if (mp.colshapes.exists(_0x8e89x9.shape)) {
        _0x8e89x9.shape.destroy();
      }

      if (mp.markers.exists(_0x8e89x9.marker)) {
        _0x8e89x9.marker.destroy();
      }

      if (mp.labels.exists(_0x8e89x9.label)) {
        _0x8e89x9.label.destroy();
      }
    }
  });
});

function crateGrabShapeMarker(_0x8e89xd, _0x8e89xe, _0x8e89xf, _0x8e89x6, _0x8e89x10) {
  try {
    let _0x8e89x11 = mp.markers.new(1, new mp.Vector3(parseFloat(_0x8e89xd), parseFloat(_0x8e89xe), parseFloat(_0x8e89xf) - 1), 0.4, {
      direction: 0,
      rotation: 0,
      color: [255, 136, 0, 120],
      visible: true,
      dimension: parseInt(_0x8e89x6)
    });

    let _0x8e89x12 = mp.labels.new('Предмет (E)', new mp.Vector3(parseFloat(_0x8e89xd), parseFloat(_0x8e89xe), parseFloat(_0x8e89xf)), {
      font: 4,
      drawDistance: 5,
      color: [255, 255, 255, 255],
      dimension: parseInt(_0x8e89x6)
    });

    let _0x8e89x13 = mp.colshapes.newCircle(_0x8e89xd, _0x8e89xe, 1, _0x8e89x6);

    _0x8e89x13.GrabHouseShape = true;
    _0x8e89x13.GrabItem = parseInt(_0x8e89x10);
    activeGrabItems.push({
      shape: _0x8e89x13,
      marker: _0x8e89x11,
      label: _0x8e89x12,
      grabItem: _0x8e89x10
    });
  } catch (e) {
    mp.gui.chat.push(`${''}${e}${''}`);
  }
}

let houseGrabData = {
  inShape: false,
  itemNum: null,
  'inShape': false,
  'itemNum': null
};
mp.events.add('playerEnterColshape', _0x8e89x15 => {
  if (_0x8e89x15.GrabHouseShape == true) {
    houseGrabData.inShape = true;
    houseGrabData.itemNum = _0x8e89x15.GrabItem;
  }
});
mp.events.add('playerExitColshape', _0x8e89x15 => {
  if (_0x8e89x15.GrabHouseShape == true) {
    houseGrabData.inShape = false;
    houseGrabData.itemNum = null;
  }
});
mp.keys.bind(0x45, false, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  {
    return;
  }
  {
    return;
  }
  mp.events.callRemote('grabHouseItem', null);
});
globalThis.grabItemInHnd = false;
mp.events.add('grabItemInteraction', (_0x8e89x4, _0x8e89x16) => {
  switch (_0x8e89x4) {
    case 'take':
      mp.attachmentMngr.addLocal(`${'CardBox'}`);
      break;

    default:
      grabItemInHnd = false;
      mp.attachmentMngr.removeLocal(`${'CardBox'}`);
      break;
  }
});
mp.events.add('grabItemUnLoadInVeh', () => {
  if (grabItemInHnd != true) {
    return mp.events.call('emsghud', `${'У вас нет коробки в руках.'}`);
  }

  if (circleMenuTargetVehicle == null || !mp.vehicles.exists(circleMenuTargetVehicle)) {
    return mp.events.call('emsghud', `${'Машина не существует.'}`);
  }

  const _0x8e89x17 = localplayer.position;
  const _0x8e89x18 = circleMenuTargetVehicle.position;

  let _0x8e89x19 = mp.game.system.vdist(_0x8e89x17.x, _0x8e89x17.y, _0x8e89x17.z, _0x8e89x18.x, _0x8e89x18.y, _0x8e89x18.z);

  if (_0x8e89x19 >= 3) {
    return mp.events.call('emsghud', `${'Машина слишком далеко.'}`);
  }

  mp.events.callRemote('grabItemUnLoadInVeh', circleMenuTargetVehicle.remoteId);
});
let houseStealBlip = null;
mp.events.add('Client:initHouseForSteal', _0x8e89x1b => {
  houseStealBlip = mp.blips.new(1, new mp.Vector3(_0x8e89x1b.x, _0x8e89x1b.y, _0x8e89x1b.z), {
    name: 'Авто для кражи',
    color: 3,
    shortRange: false,
    dimension: 8
  });
  houseStealBlip.setRoute(true);
  houseStealBlip.setRouteColour(1);
});
mp.events.add('stealHouseSuccessCracked', () => {
  if (houseStealBlip != null) {
    if (mp.blips.exists(houseStealBlip)) {
      houseStealBlip.destroy();
    }

    houseStealBlip = null;
  }
});
mp.events.add('playerEnterColshape', _0x8e89x15 => {
  if (localplayer.dimension != 8) {
    return;
  }

  if (_0x8e89x15.getVariable('unloadGrabVehMarker') == true) {
    if (!localplayer.vehicle) {
      return;
    }

    if (localplayer.vehicle.getPedInSeat(-1) !== localplayer.handle) {
      return;
    }

    mp.events.callRemote('unloadHouseGrabItemInShape');
  }
});
mp.events.add('setNewGrabWaypoint', _0x8e89x1c => {
  mp.game.ui.setNewWaypoint(parseFloat(_0x8e89x1c.x), parseFloat(_0x8e89x1c.y));
});
mp.events.add('setNewAirDropWaypoint', (_0x8e89x1d, _0x8e89x1e) => {
  mp.game.ui.setNewWaypoint(parseFloat(_0x8e89x1d), parseFloat(_0x8e89x1e));
});