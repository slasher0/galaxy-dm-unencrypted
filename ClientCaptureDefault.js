const localplayer = mp.players.local;
let CaptureDefaultColshapes = [{
  x: 102.71735382080078,
  y: -1959.28125,
  z: 20.607443618774414,
  labelText: 'Телепорт в Capture Dimension',
  Fraction: 1
}, {
  x: 487.6287841796875,
  y: -1527.167236328125,
  z: 29.283859252929688,
  labelText: 'Телепорт в Capture Dimension',
  Fraction: 2
}, {
  x: -137.6913299560547,
  y: -1418.8095703125,
  z: 30.49199867248535,
  labelText: 'Телепорт в Capture Dimension',
  Fraction: 3
}, {
  x: 936.740966796875,
  y: -2188.080078125,
  z: 30.515472412109375,
  labelText: 'Телепорт в Capture Dimension',
  Fraction: 4
}, {
  x: 1368.1798095703125,
  y: -1521.9486083984375,
  z: 57.39617919921875,
  labelText: 'Телепорт в Capture Dimension',
  Fraction: 5
}];
let CaptureDefaultCaptureColshapes = [{
  x: 102.71735382080078,
  y: -1959.28125,
  z: 20.607443618774414,
  labelText: 'Телепорт в GANGWAR',
  Fraction: 1
}, {
  x: 483.46246337890625,
  y: -1338.99658203125,
  z: 29.2840633392334,
  labelText: 'Телепорт в GANGWAR',
  Fraction: 2
}, {
  x: -161.09518432617188,
  y: -1623.010498046875,
  z: 33.65013885498047,
  labelText: 'Телепорт в GANGWAR',
  Fraction: 3
}, {
  x: 859.5260009765625,
  y: -2039.4742431640625,
  z: 30.961137771606445,
  labelText: 'Телепорт в GANGWAR',
  Fraction: 4
}, {
  x: 811.6890869140625,
  y: -1627.0142822265625,
  z: 31.247028350830078,
  labelText: 'Телепорт в GANGWAR',
  Fraction: 5
}];

function loadCaptureDefaultColshapes() {
  for (let i = 0; i < CaptureDefaultColshapes.length; i++) {
    var _0x17A52 = mp.colshapes.newCircle(CaptureDefaultColshapes[i].x, CaptureDefaultColshapes[i].y, 1, 8);

    _0x17A52.CaptureTeleportShape = true;
    _0x17A52.CaptureShapeFraction = CaptureDefaultColshapes[i].Fraction;
    _0x17A52.CaptureType = 'enter';

    var _0x17A76 = mp.markers.new(1, new mp.Vector3(CaptureDefaultColshapes[i].x, CaptureDefaultColshapes[i].y, CaptureDefaultColshapes[i].z - 1), 0.5, {
      direction: 0,
      rotation: 0,
      color: [247, 15, 15, 220],
      visible: true,
      dimension: 8
    });

    if (CaptureDefaultColshapes[i].labelText != null) {
      mp.labels.new(`${CaptureDefaultColshapes[i].labelText}`, new mp.Vector3(CaptureDefaultColshapes[i].x, CaptureDefaultColshapes[i].y, CaptureDefaultColshapes[i].z), {
        font: 4,
        drawDistance: 5,
        color: [255, 255, 255, 255],
        dimension: 8
      });
    }
  }

  for (let i = 0; i < CaptureDefaultCaptureColshapes.length; i++) {
    var _0x17A52 = mp.colshapes.newCircle(CaptureDefaultCaptureColshapes[i].x, CaptureDefaultCaptureColshapes[i].y, 1, 7);

    _0x17A52.CaptureTeleportShape = true;
    _0x17A52.CaptureShapeFraction = CaptureDefaultCaptureColshapes[i].Fraction;
    _0x17A52.CaptureType = 'exit';

    var _0x17A76 = mp.markers.new(1, new mp.Vector3(CaptureDefaultCaptureColshapes[i].x, CaptureDefaultCaptureColshapes[i].y, CaptureDefaultCaptureColshapes[i].z - 1), 0.5, {
      direction: 0,
      rotation: 0,
      color: [247, 15, 15, 220],
      visible: true,
      dimension: 7
    });

    if (CaptureDefaultCaptureColshapes[i].labelText != null) {
      mp.labels.new(`Телепорт в GANGWAR`, new mp.Vector3(CaptureDefaultCaptureColshapes[i].x, CaptureDefaultCaptureColshapes[i].y, CaptureDefaultCaptureColshapes[i].z), {
        font: 4,
        drawDistance: 5,
        color: [255, 255, 255, 255],
        dimension: 7
      });
    }
  }
}

loadCaptureDefaultColshapes();
let CaptureShapeType = null;
mp.events.add('playerEnterColshape', shape => {
  if (shape.CaptureTeleportShape == true) {
    if (shape.CaptureShapeFraction != localplayer.getVariable('FractionID')) {
      return;
    }

    CaptureShapeType = shape.CaptureType;
  }
});
mp.events.add('playerExitColshape', shape => {
  if (shape.CaptureTeleportShape == true && true) {
    CaptureShapeType = null;
  }
});
mp.keys.bind(0x45, false, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }
});
mp.events.add('gangwarCapturePoints', (_0x14626, _0x1464A) => {
  HudMenuCEF.execute(`setCaptureTimerPoints('${_0x14626}','${_0x1464A}')`);
});