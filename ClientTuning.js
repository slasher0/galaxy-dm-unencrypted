var _$_77af = ["local", "players", "Тюнинг (E)", "length", "x", "y", "newCircle", "colshapes", "GangwarVehTuning", "z", "Vector3", "new", "markers", "LabelText", "labels", "dimension", "visible", "cursor", "gui", "vehicle", "execute", "getPedInSeat", "handle", "gangwarVehicleTuning", "callRemote", "events", "bind", "keys", "playerEnterColshape", "add", "playerExitColshape", "TuningVehSpawned", "TuningCameraSet", "freezePosition", "activate", "chat", "show", "hide", "displayRadar", "ui", "game", "default", "PosX", "PosY", "PosZ", "cameras", "PointX", "PointY", "PointZ", "pointAtCoord", "renderScriptCams", "cam", "setActive", "VehicleTuning", "SetVehicleTuning", "changeTuningPriceData", "exitTuningVehicle", "open", "gfdgfd", "setWheelType", "tuningBuyUpdate"];
const localplayer = mp.players.local;
var TuningShopPos = [{
  x: -211.96817016601562,
  y: -1324.966064453125,
  z: 30.890403747558594,
  LabelText: 'Тюнинг (E)',
  TuningNumber: 1
}];

function loadGangwarTuningColshapes() {
  for (let _0x25367 = 0; _0x25367 < TuningShopPos.length; _0x25367++) {
    var _0x2898B = mp.colshapes.newCircle(TuningShopPos[_0x25367].x, TuningShopPos[_0x25367].y, 5, 8);

    _0x2898B.GangwarVehTuning = true;

    var _0x2894F = mp.markers.new(1, new mp.Vector3(TuningShopPos[_0x25367].x, TuningShopPos[_0x25367].y, TuningShopPos[_0x25367].z - 4), 5, {
      direction: 0,
      rotation: 0,
      color: [0, 72, 255, 40],
      visible: true,
      dimension: 8
    });

    let _0x28913 = mp.labels.new(`${TuningShopPos[_0x25367].LabelText}`, new mp.Vector3(TuningShopPos[_0x25367].x, TuningShopPos[_0x25367].y, TuningShopPos[_0x25367].z), {
      font: 4,
      drawDistance: 5,
      color: [255, 255, 255, 255],
      dimension: 8
    });
  }
}

loadGangwarTuningColshapes();
let GangwarVehTuningInteraction = false;
mp.keys.bind(0x45, false, function () {
  if (localplayer.dimension != 8) {
    return;
  }

  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (GangwarVehTuningInteraction == true) {
    if (!localplayer.vehicle) {
      return HudMenuCEF.execute(`fastemsg('Вы должны находиться в своём автомобиле');`);
    }

    if (localplayer.vehicle.getPedInSeat(-1) !== localplayer.handle) {
      return;
    }

    mp.events.callRemote('gangwarVehicleTuning');
  }
});
mp.events.add('playerEnterColshape', _0x273BF => {
  if (_0x273BF.GangwarVehTuning == true) {
    GangwarVehTuningInteraction = true;
  }
});
mp.events.add('playerExitColshape', _0x273BF => {
  if (_0x273BF.GangwarVehTuning == true) {
    GangwarVehTuningInteraction = false;
  }
});
let TuningCameraData = [{
  "PosX": -216.6758270263672,
  "PosY": -1329.50634765625,
  "PosZ": 32.42536926269531,
  "PointX": -210.6422882080078,
  "PointY": -1324.002685546875,
  "PointZ": 29.89039421081543
}];
global.TuningVehSpawned = null;
mp.events.add('TuningCameraSet', _0x25BD7 => {
  if (localplayer.vehicle) {
    localplayer.vehicle.freezePosition(true);
  }

  setTimeout(() => {
    localplayer.vehicle.freezePosition(false);
  }, 500);
  mp.gui.chat.activate(false);
  mp.gui.chat.show(false);
  mp.gui.cursor.visible = true;
  ChangeHUDKeysDisplay('hide');
  ChangeHUDKillFeedDisplay('hide');
  ChangeHUDFreeCaseDisplay('hide');
  ChangeHUDRaitingDisplay('hide');
  mp.game.ui.displayRadar(false);
  TuningVehSpawned = localplayer.vehicle;
  let _0x27CE3 = TuningCameraData[0];
  GangwarTuningCam = mp.cameras.new('default', new mp.Vector3(_0x27CE3.PosX, _0x27CE3.PosY, _0x27CE3.PosZ), new mp.Vector3(90, 90, 90), 70);
  GangwarTuningCam.pointAtCoord(_0x27CE3.PointX, _0x27CE3.PointY, _0x27CE3.PointZ);
  mp.game.cam.renderScriptCams(true, false, 0, true, false);
  GangwarTuningCam.setActive(true);
  HudMenuCEF.execute(`changeVehTuningDisplay('open')`);
  cefopened = true;
});
mp.events.add('VehicleTuning', (_0x27D1F, _0x27D5B) => {
  mp.events.callRemote('SetVehicleTuning', _0x27D1F, _0x27D5B);
});
mp.events.add('changeTuningPriceData', (_0x27DD3, _0x27D97) => {
  HudMenuCEF.execute(`changeTuningPriceData('${_0x27DD3}','${_0x27D97}')`);
});
mp.events.add('exitTuningVehicle', () => {
  mp.game.cam.renderScriptCams(false, false, 0, false, false);
  ChangeHUDKeysDisplay('open');
  ChangeHUDKillFeedDisplay('open');
  ChangeHUDFreeCaseDisplay('open');
  ShowChat();
  mp.game.ui.displayRadar(true);
  mp.gui.cursor.visible = false;
  HudMenuCEF.execute(`changeVehTuningDisplay('close')`);
  cefopened = false;
  TuningVehSpawned = null;

  if (localplayer.vehicle) {
    localplayer.vehicle.freezePosition(false);
  }

  mp.events.callRemote('exitTuningVehicle');
});
mp.events.add('gfdgfd', _0x27E4B => {
  let _0x27E0F = parseInt(_0x27E4B);

  let localPlayer = mp.players.local;
  localPlayer.vehicle.setWheelType(_0x27E0F);
});
mp.events.add('tuningBuyUpdate', () => {
  mp.events.callRemote('tuningBuyUpdate');
});