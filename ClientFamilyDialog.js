const localplayer = mp.players.local;
let ArcadiusOfficePeds = [{
  x: -139.04702758789062,
  y: -633.9445190429688,
  z: 168.8204345703125,
  heading: 2.879554033279419,
  model: 'a_m_y_business_03',
  NPCName: 'Алекс',
  type: 'OfficeDefaultTasks'
}, {
  x: -149.89035034179688,
  y: -644.0950317382812,
  z: 168.82054138183594,
  heading: 281.9497985839844,
  model: 'a_m_y_business_03',
  NPCName: 'Arthur\nЗаказ материалов',
  type: 'OfficeMaterialDelivery'
}];

function loadArcadiusOfficePeds(_0x15F0A) {
  for (let i = 0; i < ArcadiusOfficePeds.length; i++) {
    var _0x17A52 = mp.colshapes.newCircle(ArcadiusOfficePeds[i].x, ArcadiusOfficePeds[i].y, 2, _0x15F0A);

    _0x17A52.OfficeTasksNPC = true;
    _0x17A52.TasksType = ArcadiusOfficePeds[i].type;
    mp.peds.new(mp.game.joaat(`${ArcadiusOfficePeds[i].model}`), new mp.Vector3(ArcadiusOfficePeds[i].x, ArcadiusOfficePeds[i].y, ArcadiusOfficePeds[i].z), ArcadiusOfficePeds[i].heading, _0x15F0A);

    if (ArcadiusOfficePeds[i].NPCName != null) {
      mp.labels.new(`${ArcadiusOfficePeds[i].NPCName}`, new mp.Vector3(ArcadiusOfficePeds[i].x, ArcadiusOfficePeds[i].y, ArcadiusOfficePeds[i].z + 1.3), {
        font: 4,
        drawDistance: 5,
        color: [255, 255, 255, 255],
        dimension: _0x15F0A
      });
    }
  }
}

var NPCDialogParams = {
  Entered: false,
  NPCType: null,
  DialogOpen: false,
  NPCCamera: null,
  'Entered': true,
  'NPCType': null,
  'DialogOpen': true,
  'NPCCamera': null
};
mp.events.add('playerEnterColshape', shape => {
  if (shape.OfficeTasksNPC == true) {
    NPCDialogParams.NPCType = shape.TasksType;
  }
});
mp.events.add('playerExitColshape', shape => {
  if (shape.OfficeTasksNPC == true) {
    NPCDialogParams.Entered = false;
  }
});
mp.keys.bind(0x45, false, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  {
    return;
  }

  if (NPCDialogParams.NPCType == null) {
    return;
  }

  if (NPCDialogParams.DialogOpen == true) {
    return;
  }

  CreateNPCCamera(NPCDialogParams.NPCType);
});
var OfficePedsCams = [{
  PosX: -139.14732360839844,
  PosY: -633.3008422851562,
  PosZ: 169.43728637695312,
  PointX: -139.07867431640625,
  PointY: -633.69921875,
  PointZ: 169.42681884765625,
  Type: 'OfficeDefaultTasks'
}, {
  "PosX": -148.927734375,
  "PosY": -643.8216552734375,
  "PosZ": 169.38729858398438,
  "PointX": -149.6539764404297,
  "PointY": -644.0136108398438,
  "PointZ": 169.33084106445312,
  Type: 'OfficeMaterialDelivery'
}];

function CreateNPCCamera(_0x176F2) {
  try {
    let _0x139EA = OfficePedsCams.find(_0x1773A => {
      return _0x1773A.Type == _0x176F2;
    });

    if (_0x139EA == null || _0x139EA == undefined) {
      return mp.events.call('emsghud', 'NPC UNDEFINED');
    }

    HudMenuCEF.execute(`NPCDialog.localName = '${localplayer.name}'`);

    switch (_0x176F2) {
      case 'OfficeDefaultTasks':
        HudMenuCEF.execute(`NPCDialog.startNPCDialog('${_0x176F2}')`);
        break;

      case 'OfficeMaterialDelivery':
        HudMenuCEF.execute(`NPCDialog.startNPCMaterialDeliveryDialog('Default')`);
        break;

      default:
        break;
    }

    mp.events.call('changeIteractionWithNPC', 'start');

    if (NPCDialogParams.NPCCamera != null) {
      NPCDialogParams.NPCCamera.destroy();
    }

    CameraDirection = global.gameplayCam.getDirection();
    const _0x176CE = localplayer.position;
    _0x176CE.x -= CameraDirection.x * 2;
    _0x176CE.y -= CameraDirection.y * 2;

    var _0x13642 = mp.cameras.new('default', new mp.Vector3(_0x176CE.x, _0x176CE.y, localplayer.position.z + 1), new mp.Vector3(0, 0, 0), 40);

    let _0x17716 = getPointingAtGPCamera();

    _0x13642.pointAtCoord(_0x17716.x, _0x17716.y, _0x17716.z);

    NPCDialogParams.NPCCamera = mp.cameras.new('default', new mp.Vector3(_0x139EA.PosX, _0x139EA.PosY, _0x139EA.PosZ), new mp.Vector3(90, 90, 90), 70);
    NPCDialogParams.NPCCamera.pointAtCoord(_0x139EA.PointX, _0x139EA.PointY, _0x139EA.PointZ);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    NPCDialogParams.NPCCamera.setActiveWithInterp(_0x13642.handle, 500, 0, 0);
    NPCDialogParams.NPCCamera.setActive(true);
  } catch (e) {
    mp.gui.chat.push(`e: ${e}`);
  }
}

function getPointingAtGPCamera() {
  direction = global.gameplayCam.getDirection();
  coords = global.gameplayCam.getCoord();

  const _0x17956 = new mp.Vector3(direction.x * 1000 + coords.x, direction.y * 1000 + coords.y, direction.z * 1000 + coords.z);

  return _0x17956;
}

mp.events.add('changeIteractionWithNPC', _0x12B26 => {
  switch (_0x12B26) {
    case 'start':
      HudMenuCEF.execute(`changeRPHudDisplay('close');`);
      mp.gui.chat.activate(false);
      mp.gui.chat.show(false);
      mp.game.ui.displayRadar(false);
      mp.gui.cursor.visible = true;
      localplayer.freezePosition(true);
      localplayer.setVisible(false, true);
      ChangeHUDKeysDisplay('hide');
      ChangeHUDKillFeedDisplay('hide');
      ChangeHUDFreeCaseDisplay('hide');
      ChangeHUDRaitingDisplay('hide');
      break;

    default:
      NPCDialogParams.DialogOpen = false;
      mp.game.ui.displayRadar(true);
      mp.gui.cursor.visible = false;
      localplayer.freezePosition(false);
      localplayer.setVisible(true, true);
      ChangeHUDKeysDisplay('show');
      ChangeHUDKillFeedDisplay('show');
      ChangeHUDFreeCaseDisplay('show');
      ChangeHUDRaitingDisplay('show');
      ShowChat();
      mp.game.cam.renderScriptCams(false, false, 0, false, false);

      if (NPCDialogParams.NPCCamera != null) {
        NPCDialogParams.NPCCamera.setActive(false);
        NPCDialogParams.NPCCamera.destroy();
      }

      break;
  }
});