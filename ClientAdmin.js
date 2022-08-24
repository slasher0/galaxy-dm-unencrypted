var _$_a16f = ['worldsetday', 'worldtimeday', 'callRemote', 'events', 'add', 'worldsetnight', 'worldtimenight', 'worldsetclear', 'worldclear', 'worldsetcloud', 'worldcloud', 'worldvehengon', 'worldvehengison', 'worldvehengoff', 'worldvehengisoff', 'worldvehdooron', 'worldvehdoorison', 'worldvehdooroff', 'worldvehdoorisoff', 'worldtimesever', 'worldservetime', 'BlueWinner', 'bluewinadmcpt', 'PinkWinner', 'pinkwinadmcpt', 'getinfoabout', 'getinfobysc', 'changepassabout', 'changepassbysc', 'givevip', 'setvipforplayer', 'outputinfobysc', 'execute', 'systemcptoff', 'OffSystemCapt', 'systemcpton', 'OnSystemCapt', 'systemcptrev', 'captweaprev', 'systemcptpdw', 'captweappdw', 'systemcptcar', 'captweapcar', 'systemcptspec', 'captweapspec', 'spon', 'handle', 'attachTo', 'freezePosition', 'spoff', 'detach', 'OffGM', 'setInvincible', 'local', 'players', 'SetLenghtAllLogs', 'ClearLogsTable', 'PushLogs', 'getlogsofstaticid', 'admincptatk', 'admincptrev1attackpos', 'admincptdef', 'admincptrev1defpos', 'calladmincptwrite', 'adminlvl', 'getVariable', '', 'notify', 'graphics', 'game', 'admincptrev1write', 'calladmincptbegin', 'admincptrev1begin', 'PushNewReport', 'AdminTakeReport', 'ChangeTakeReport', 'ChangeTakeReportOnConnect', 'SuccesTakeReport', 'ReportAnsToTarget', 'ClearReport', 'TeleportAnsToTarget', 'showadminpanel', 'visible', 'cursor', 'gui', 'activate', 'chat', 'closeadmbybutton', 'TargetInventoryHide', 'OpenTargetInventory', 'x', 'y', 'z', 'Vector3', 'testPointToPoint', 'raycasting', 'undefined', 'getDirection', 'gameplayCam', 'getCoord', 'undefined1', 'playerCommand', 'split', 'shift', 'setcam1', 'FirstCamPos', 'position', 'FirstCamDirection', 'Позиция,направление стартовой камеры установлена', 'push', 'setcam2', 'SecondCamPos', 'SecondCamDirection', 'Позиция,направление финальной камеры установлена', 'setcamtime', '/setcamtime [secs]', 'camSecsMove', 'setcamfov', '/setcamfov [fov]', 'CameraFov', 'startcam', 'Позиция стартовой камеры не установлена', 'Направление стартовой камеры не установлено', 'Позиция финальной камеры не установлена', 'Направление финальной камеры не установлено', 'destroy', 'default', 'new', 'cameras', 'pointAtCoord', 'renderScriptCams', 'cam', 'setActiveWithInterp', 'setActive', 'startobj', 'joaat', 'rotation', 'dimension', 'objects', 'objecteditor1:start', 'id', 'call'];
mp.events.add('worldsetday', () => {
  mp.events.callRemote('worldtimeday');
});
mp.events.add('worldsetnight', () => {
  mp.events.callRemote('worldtimenight');
});
mp.events.add('worldsetclear', () => {
  mp.events.callRemote('worldclear');
});
mp.events.add('worldsetcloud', () => {
  mp.events.callRemote('worldcloud');
});
mp.events.add('worldvehengon', () => {
  mp.events.callRemote('worldvehengison');
});
mp.events.add('worldvehengoff', () => {
  mp.events.callRemote('worldvehengisoff');
});
mp.events.add('worldvehdooron', () => {
  mp.events.callRemote('worldvehdoorison');
});
mp.events.add('worldvehdooroff', () => {
  mp.events.callRemote('worldvehdoorisoff');
});
mp.events.add('worldtimesever', () => {
  mp.events.callRemote('worldservetime');
});
mp.events.add('BlueWinner', () => {
  mp.events.callRemote('bluewinadmcpt');
});
mp.events.add('PinkWinner', () => {
  mp.events.callRemote('pinkwinadmcpt');
});
mp.events.add('getinfoabout', _0x12CB2 => {
  mp.events.callRemote('getinfobysc', _0x12CB2);
});
mp.events.add('changepassabout', _0x12CB2 => {
  mp.events.callRemote('changepassbysc', _0x12CB2);
});
mp.events.add('givevip', _0x12CB2 => {
  mp.events.callRemote('setvipforplayer', _0x12CB2);
});
mp.events.add('outputinfobysc', (_0x12D42, _0x12DD2, _0x12CD6, _0x12DF6, _0x12D66, _0x12DAE, _0x12D1E, _0x12D8A, _0x12CFA) => {
  adminpanel.execute(`outputinfoforchange('${_0x12D42}', '${_0x12DD2}', '${_0x12CD6}','${_0x12DF6}','${_0x12D66}','${_0x12DAE}','${_0x12D1E}','${_0x12D8A}','${_0x12CFA}');`);
});
mp.events.add('systemcptoff', () => {
  mp.events.callRemote('OffSystemCapt');
});
mp.events.add('systemcpton', () => {
  mp.events.callRemote('OnSystemCapt');
});
mp.events.add('systemcptrev', () => {
  mp.events.callRemote('captweaprev');
});
mp.events.add('systemcptpdw', () => {
  mp.events.callRemote('captweappdw');
});
mp.events.add('systemcptcar', () => {
  mp.events.callRemote('captweapcar');
});
mp.events.add('systemcptspec', () => {
  mp.events.callRemote('captweapspec');
});
mp.events.add('spon', _0x12C22 => {
  player.attachTo(_0x12C22.handle, -1, 0, 0, -3, 0, 0, 0, true, false, false, false, 0, false);
  player.freezePosition(true);
});
mp.events.add('spoff', () => {
  player.detach(true, true);
  player.freezePosition(false);
});
mp.events.add('OffGM', () => {
  mp.players.local.setInvincible(false);
});
mp.events.add('SetLenghtAllLogs', (_0x13012, _0x13036) => {
  adminpanel.execute(`SetLogNameLenght('${_0x13012}', '${_0x13036}');`);
});
mp.events.add('ClearLogsTable', () => {
  adminpanel.execute(`ClearLogsTable();`);
});
mp.events.add('PushLogs', (_0x1310E, _0x12B26, _0x130C6, _0x1305A, _0x130EA, _0x130A2, _0x1307E) => {
  adminpanel.execute(`PushLogs('${_0x1310E}','${_0x12B26}','${_0x130C6}','${_0x1305A}','${_0x130EA}','${_0x130A2}','${_0x1307E}');`);
});
mp.events.add('getlogsofstaticid', _0x13132 => {
  mp.events.callRemote('getlogsofstaticid', _0x13132);
});
mp.events.add('admincptatk', () => {
  mp.events.callRemote('admincptrev1attackpos');
});
mp.events.add('admincptdef', () => {
  mp.events.callRemote('admincptrev1defpos');
});
mp.events.add('calladmincptwrite', _0x1317A => {
  let _0x13156 = player.getVariable('adminlvl');

  if (_0x13156 <= 0 || _0x13156 == undefined || _0x13156 == null) {
    return;
  }

  if (_0x1317A == '') {
    return mp.game.graphics.notify(`~r~Введите кол-во участников.`);
  }

  if (_0x1317A & 1) {
    return mp.game.graphics.notify(`~r~Введите четное кол-во участников.`);
  }

  mp.events.callRemote('admincptrev1write', _0x1317A);
});
mp.events.add('calladmincptbegin', _0x1317A => {
  let _0x13156 = player.getVariable('adminlvl');

  if (_0x13156 <= 0 || _0x13156 == undefined || _0x13156 == null) {
    return;
  }

  mp.events.callRemote('admincptrev1begin', _0x1317A);
});
mp.events.add('PushNewReport', (_0x13276, _0x13252, _0x1329A, _0x1322E, _0x1320A, _0x12E1A) => {
  let _0x13156 = player.getVariable('adminlvl');

  if (_0x13156 <= 0 || _0x13156 == undefined || _0x13156 == null) {
    return;
  }

  adminpanel.execute(`PushNewReport('${_0x13276}','${_0x13252}','${_0x1329A}','${_0x1322E}','${_0x1320A}','${_0x12E1A}');`);
});
mp.events.add('AdminTakeReport', (_0x12E1A, _0x132BE) => {
  let _0x13156 = player.getVariable('adminlvl');

  if (_0x13156 <= 0 || _0x13156 == undefined || _0x13156 == null) {
    return;
  }

  mp.events.callRemote('AdminTakeReport', _0x12E1A, _0x132BE);
});
mp.events.add('ChangeTakeReport', (_0x132E2, _0x12E1A) => {
  let _0x13156 = player.getVariable('adminlvl');

  if (_0x13156 <= 0 || _0x13156 == undefined || _0x13156 == null) {
    return;
  }

  adminpanel.execute(`ReplaceTakeName('${_0x132E2}','${_0x12E1A}');`);
});
mp.events.add('ChangeTakeReportOnConnect', (_0x132E2, _0x12E1A) => {
  let _0x13156 = player.getVariable('adminlvl');

  if (_0x13156 <= 0 || _0x13156 == undefined || _0x13156 == null) {
    return;
  }

  setTimeout(() => {
    adminpanel.execute(`ReplaceTakeName('${_0x132E2}','${_0x12E1A}');`);
  }, 2000);
});
mp.events.add('SuccesTakeReport', (_0x12E1A, _0x132BE) => {
  let _0x13156 = player.getVariable('adminlvl');

  if (_0x13156 <= 0 || _0x13156 == undefined || _0x13156 == null) {
    return;
  }

  adminpanel.execute(`TakedReportSucces('${_0x12E1A}','${_0x132BE}');`);
});
mp.events.add('ReportAnsToTarget', (_0x1322E, _0x12E1A) => {
  let _0x13156 = player.getVariable('adminlvl');

  if (_0x13156 <= 0 || _0x13156 == undefined || _0x13156 == null) {
    return;
  }

  mp.events.callRemote('ReportAnsToTarget', _0x12E1A, _0x1322E);
});
mp.events.add('ClearReport', _0x12E1A => {
  let _0x13156 = player.getVariable('adminlvl');

  if (_0x13156 <= 0 || _0x13156 == undefined || _0x13156 == null) {
    return;
  }

  adminpanel.execute(`DeleteReportFromList('${_0x12E1A}');`);
});
mp.events.add('TeleportAnsToTarget', _0x12E1A => {
  let _0x13156 = player.getVariable('adminlvl');

  if (_0x13156 <= 0 || _0x13156 == undefined || _0x13156 == null) {
    return;
  }

  mp.events.callRemote('TeleportAnsToTarget', _0x12E1A);
});
var adminpanelstatus = 0;
mp.events.add('showadminpanel', _0x133DE => {
  let _0x13156 = player.getVariable('adminlvl');

  if (_0x13156 <= 0 || _0x13156 == undefined || _0x13156 == null) {
    return;
  }

  switch (adminpanelstatus) {
    case 0:
      adminpanelstatus = 1;
      mp.gui.cursor.visible = true;
      mp.gui.chat.activate(false);

      switch (parseInt(_0x133DE)) {
        case 1:
          adminpanel.execute(`MenuActive(1);`);
          break;

        case 2:
          adminpanel.execute(`MenuActive(2);`);
          break;
      }

      break;

    case 1:
      adminpanelstatus = 0;
      mp.gui.cursor.visible = false;
      mp.gui.chat.activate(true);
      adminpanel.execute(`MenuActive(0);`);
      break;

    default:
      break;
  }
});
mp.events.add('closeadmbybutton', () => {
  let _0x13156 = player.getVariable('adminlvl');

  if (_0x13156 <= 0 || _0x13156 == undefined || _0x13156 == null) {
    return;
  }

  adminpanelstatus = 0;
  mp.gui.cursor.visible = false;
  mp.gui.chat.activate(true);
  adminpanel.execute(`MenuActive(0);`);
});
mp.events.add('TargetInventoryHide', () => {
  mp.gui.cursor.visible = false;
});
mp.events.add('OpenTargetInventory', (_0x132E2, _0x13546, _0x134B6, _0x1346E, _0x13426, _0x1344A, _0x134DA, _0x135B2, _0x1358E, _0x13522, _0x13492, _0x1356A, _0x134FE, _0x135D6) => {
  mp.gui.cursor.visible = true;
  ClothesShopCef.execute(`CheckIDForm('show')`);
  ClothesShopCef.execute(`SetTargetInventoryName('${_0x132E2}')`);

  for (let i = 0; i < _0x1358E; i++) {
    ClothesShopCef.execute(`addTargetItem(10)`);
  }

  for (let i = 0; i < _0x135B2; i++) {
    ClothesShopCef.execute(`addTargetItem(9)`);
  }

  for (let i = 0; i < _0x13492; i++) {
    ClothesShopCef.execute(`addTargetItem(12)`);
  }

  for (let i = 0; i < _0x134DA; i++) {
    ClothesShopCef.execute(`addTargetItem(8)`);
  }

  for (let i = 0; i < _0x13522; i++) {
    ClothesShopCef.execute(`addTargetItem(11)`);
  }

  for (let i = 0; i < _0x13546; i++) {
    ClothesShopCef.execute(`addTargetItem(1)`);
  }

  for (let i = 0; i < _0x134B6; i++) {
    ClothesShopCef.execute(`addTargetItem(2)`);
  }

  for (let i = 0; i < _0x1346E; i++) {
    ClothesShopCef.execute(`addTargetItem(3)`);
  }

  for (let i = 0; i < _0x13426; i++) {
    ClothesShopCef.execute(`addTargetItem(4)`);
  }

  for (let i = 0; i < _0x1344A; i++) {
    ClothesShopCef.execute(`addTargetItem(7)`);
  }

  for (let i = 0; i < _0x1356A; i++) {
    ClothesShopCef.execute(`addTargetItem(13)`);
  }

  for (let i = 0; i < _0x134FE; i++) {
    ClothesShopCef.execute(`addTargetItem(14)`);
  }

  for (let i = 0; i < _0x135D6; i++) {
    ClothesShopCef.execute(`addTargetItem(15)`);
  }
});
const localplayer = mp.players.local;
let cameraMoveFinish = null;
let camSecsMove = 15000;
let camMoveSettings = {
  camSecsMove: 15000,
  FirstCamPos: null,
  FirstCamDirection: null,
  SecondCamPos: null,
  SecondCamDirection: null,
  CameraFov: 40
};

function pointingAtFreeCam() {
  const _0x17956 = new mp.Vector3(noclipcamdir.x * 1000 + noclipcamcoords.x, noclipcamdir.y * 1000 + noclipcamcoords.y, noclipcamdir.z * 1000 + noclipcamcoords.z);

  const _0x1797A = mp.raycasting.testPointToPoint(noclipcamcoords, _0x17956, [1, 16]);

  if (_0x1797A === undefined) {
    return 'undefined';
  }

  return _0x1797A;
}

function getPointingAtGPCameraMove() {
  direction = global.gameplayCam.getDirection();
  coords = global.gameplayCam.getCoord();

  const _0x17956 = new mp.Vector3(direction.x * 1000 + coords.x, direction.y * 1000 + coords.y, direction.z * 1000 + coords.z);

  const _0x1797A = mp.raycasting.testPointToPoint(coords, _0x17956, [1, 16]);

  if (_0x1797A === undefined) {
    return 'undefined1';
  }

  return _0x1797A;
}

mp.events.add('playerCommand', _0x13666 => {
  const _0x1361E = _0x13666.split(/[ ]+/);

  const _0x1368A = _0x1361E[0];

  _0x1361E.shift();

  if (_0x1368A === 'setcam1') {
    try {
      camMoveSettings.FirstCamPos = localplayer.position;

      let _0x136D2 = getPointingAtGPCameraMove();

      camMoveSettings.FirstCamDirection = _0x136D2.position;
      mp.gui.chat.push('Позиция,направление стартовой камеры установлена');
    } catch (e) {
      mp.gui.chat.push(`e: ${e}`);
    }
  }

  if (_0x1368A === 'setcam2') {
    camMoveSettings.SecondCamPos = localplayer.position;

    let _0x136F6 = getPointingAtGPCameraMove();

    camMoveSettings.SecondCamDirection = _0x136F6.position;
    mp.gui.chat.push('Позиция,направление финальной камеры установлена');
  }

  if (_0x1368A === 'setcamtime') {
    if (_0x1361E[0] == null || _0x1361E[0] == undefined || isNaN(parseInt(_0x1361E[0]))) {
      return mp.gui.chat.push('/setcamtime [secs]');
    }

    camMoveSettings.camSecsMove = parseInt(_0x1361E[0]) * 1000;
    mp.gui.chat.push(`Время перехода камер установлено: ${_0x1361E[0]} секунд.`);
  }

  if (_0x1368A === 'setcamfov') {
    if (_0x1361E[0] == null || _0x1361E[0] == undefined || isNaN(parseInt(_0x1361E[0]))) {
      return mp.gui.chat.push('/setcamfov [fov]');
    }

    camMoveSettings.CameraFov = parseInt(_0x1361E[0]);
    mp.gui.chat.push(`FOV камеры установлен: ${_0x1361E[0]}.`);
  }

  if (_0x1368A === 'startcam') {
    if (camMoveSettings.FirstCamPos == null) {
      return mp.gui.chat.push('Позиция стартовой камеры не установлена');
    }

    if (camMoveSettings.FirstCamDirection == null) {
      return mp.gui.chat.push('Направление стартовой камеры не установлено');
    }

    if (camMoveSettings.SecondCamPos == null) {
      return mp.gui.chat.push('Позиция финальной камеры не установлена');
    }

    if (camMoveSettings.SecondCamDirection == null) {
      return mp.gui.chat.push('Направление финальной камеры не установлено');
    }

    try {
      if (cameraMoveFinish != null) {
        cameraMoveFinish.destroy();
      }

      var _0x13642 = mp.cameras.new('default', new mp.Vector3(camMoveSettings.FirstCamPos.x, camMoveSettings.FirstCamPos.y, camMoveSettings.FirstCamPos.z), new mp.Vector3(0, 0, 0), camMoveSettings.CameraFov);

      _0x13642.pointAtCoord(camMoveSettings.FirstCamDirection.x, camMoveSettings.FirstCamDirection.y, camMoveSettings.FirstCamDirection.z);

      cameraMoveFinish = mp.cameras.new('default', new mp.Vector3(camMoveSettings.SecondCamPos.x, camMoveSettings.SecondCamPos.y, camMoveSettings.SecondCamPos.z), new mp.Vector3(90, 90, 90), camMoveSettings.CameraFov);
      cameraMoveFinish.pointAtCoord(camMoveSettings.SecondCamDirection.x, camMoveSettings.SecondCamDirection.y, camMoveSettings.SecondCamDirection.z);
      mp.game.cam.renderScriptCams(true, false, 0, true, false);
      cameraMoveFinish.setActiveWithInterp(_0x13642.handle, camMoveSettings.camSecsMove, 0, 0);
      cameraMoveFinish.setActive(true);
    } catch (e) {
      mp.gui.chat.push(`e: ${e}`);
    }
  }

  if (_0x1368A === 'startobj') {
    let _0x12FA6 = localplayer.position;

    let _0x136AE = mp.objects.new(mp.game.joaat(_0x1361E[0]), localplayer.position, {
      rotation: localplayer.rotation,
      alpha: 250,
      dimension: localplayer.dimension
    });

    mp.events.call('objecteditor1:start', _0x136AE.id);
  }
});