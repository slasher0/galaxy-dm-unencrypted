const localplayer = mp.players.local;
var GGCameraPositions = [{
  "PosX": 332.96343994140625,
  "PosY": -1597.4681396484375,
  "PosZ": 93.181884765625,
  "PointX": 319.90655517578125,
  "PointY": -1463.2611083984375,
  "PointZ": 45.50950622558594
}, {
  "PosX": 914.9219970703125,
  "PosY": -1776.2684326171875,
  "PosZ": 44.91114044189453,
  "PointX": 955.4796142578125,
  "PointY": -1747.357666015625,
  "PointZ": 30.206085205078125
}, {
  "PosX": 1166.57763671875,
  "PosY": -1698.5435791015625,
  "PosZ": 50.103431701660156,
  "PointX": 1105.70458984375,
  "PointY": -1735.13525390625,
  "PointZ": 34.71215057373047
}, {
  "PosX": 160.96275329589844,
  "PosY": -1745.1663818359375,
  "PosZ": 43.257564544677734,
  "PointX": 71.9554443359375,
  "PointY": -1762.80322265625,
  "PointZ": 36.1923942565918
}, {
  "PosX": 205.50057983398438,
  "PosY": -1557.990478515625,
  "PosZ": 46.63262939453125,
  "PointX": 289.9403991699219,
  "PointY": -1603.5382080078125,
  "PointZ": 30.264638900756836
}, {
  "PosX": 813.6069946289062,
  "PosY": -2149.6279296875,
  "PosZ": 31.353036880493164,
  "PointX": 808.4329833984375,
  "PointY": -2159.021240234375,
  "PointZ": 29.61554527282715
}, {
  "PosX": 23.132009506225586,
  "PosY": -1500.91357421875,
  "PosZ": 48.849544525146484,
  "PointX": 95.22766876220703,
  "PointY": -1455.957763671875,
  "PointZ": 28.328706741333008
}, {
  "PosX": 371.4656677246094,
  "PosY": -1637.875244140625,
  "PosZ": 96.55990600585938,
  "PointX": 375.5809631347656,
  "PointY": -1680.8323974609375,
  "PointZ": 42.0487174987793
}];
global.GangwarCameraMonitorLastPos = {
  x: 0,
  y: 0,
  z: 0
};
global.GangwarMonitorCamera = null;
mp.events.add('startViewCams', _0x27E87 => {
  if (GhettoGangwarlvl < 6) {
    return HudMenuCEF.execute(`fastemsg('Смотреть камеры можно только с 6го лвла');`);
  }

  HudMenuCEF.execute(`changeBtnCloseCameraDisplay('open')`);
  GangwarCameraMonitorLastPos.x = localplayer.position.x;
  GangwarCameraMonitorLastPos.y = localplayer.position.y;
  GangwarCameraMonitorLastPos.z = localplayer.position.z;
  let _0x27CE3 = GGCameraPositions[parseInt(_0x27E87)];
  GangwarMonitorCamera = mp.cameras.new('default', new mp.Vector3(_0x27CE3.PosX, _0x27CE3.PosY, _0x27CE3.PosZ), new mp.Vector3(90, 90, 90), 70);
  GangwarMonitorCamera.pointAtCoord(_0x27CE3.PointX, _0x27CE3.PointY, _0x27CE3.PointZ);
  mp.game.cam.renderScriptCams(true, false, 0, true, false);
  GangwarMonitorCamera.setActive(true);
  setTimeout(() => {
    mp.game.ui.displayRadar(false);
    mp.gui.chat.activate(false);
    mp.gui.chat.show(false);
    ChangeHUDKeysDisplay('hide');
    ChangeHUDKillFeedDisplay('hide');
    ChangeHUDFreeCaseDisplay('hide');
    mp.gui.cursor.visible = true;
  }, 300);
  setTimeout(() => {
    if (parseInt(_0x27E87) == 5) {
      localplayer.setCoordsNoOffset(_0x27CE3.PosX, _0x27CE3.PosY, _0x27CE3.PosZ - 50, false, false, false);
    } else {
      localplayer.setCoordsNoOffset(_0x27CE3.PosX, _0x27CE3.PosY, _0x27CE3.PosZ + 150, false, false, false);
    }

    localplayer.freezePosition(true);
  }, 100);
  mp.game.graphics.setTimecycleModifier('CAMERA_secuirity');
  mp.game.graphics.setTimecycleModifierStrength(0.60);
});
mp.events.add('stopViewCams', () => {
  mp.game.invoke('0x0F07E7745A236711');

  if (localplayer.dimension != 8) {
    return;
  }

  HudMenuCEF.execute(`changeBtnCloseCameraDisplay('close')`);
  GangwarMonitorCamera.setActive(false);
  mp.game.cam.renderScriptCams(false, false, 0, false, false);
  ChangeHUDKeysDisplay('open');
  ChangeHUDKillFeedDisplay('open');
  ChangeHUDFreeCaseDisplay('open');
  ShowChat();
  mp.game.ui.displayRadar(true);
  mp.gui.cursor.visible = false;
  setTimeout(() => {
    localplayer.setCoordsNoOffset(GangwarCameraMonitorLastPos.x, GangwarCameraMonitorLastPos.y, GangwarCameraMonitorLastPos.z, false, false, false);
    localplayer.freezePosition(false);
  }, 100);
});