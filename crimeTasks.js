const localplayer = mp.players.local;
var crimeNPCDialogParams = {
  Entered: false,
  NPCType: null,
  DialogOpen: false,
  NPCCamera: null,
  crimeTasksNPCName: null,
  'Entered': true,
  'NPCType': null,
  'DialogOpen': false,
  'NPCCamera': null
};
let CrimeTaskPeds = [{
  x: 1026.5389404296875,
  y: -1856.5225830078125,
  z: 30.889808654785156,
  heading: 140.87261962890625,
  model: 'a_m_y_stbla_01',
  NPCName: 'Arnold',
  NPCNum: 1
}];

function loadACrimeTaskPeds() {
  for (let _0x6C38 = 0; _0x6C38 < CrimeTaskPeds.length; _0x6C38++) {
    let _0x630A = mp.colshapes.newCircle(CrimeTaskPeds[_0x6C38].x, CrimeTaskPeds[_0x6C38].y, 3, 8);

    _0x630A.crimeTasksShape = true;
    _0x630A.crimeTasksNPCNumber = parseInt(CrimeTaskPeds[_0x6C38].NPCNum);
    _0x630A.crimeTasksNPCName = CrimeTaskPeds[_0x6C38].NPCName;

    if (CrimeTaskPeds[_0x6C38].NPCName != null) {
      mp.labels.new(`${CrimeTaskPeds[_0x6C38].NPCName}`, new mp.Vector3(CrimeTaskPeds[_0x6C38].x, CrimeTaskPeds[_0x6C38].y, CrimeTaskPeds[_0x6C38].z + 1.3), {
        font: 4,
        drawDistance: 5,
        color: [255, 255, 255, 255],
        dimension: 8
      });
    }
  }
}

loadACrimeTaskPeds();
mp.events.add('playerEnterColshape', _0x630A => {
  if (_0x630A.crimeTasksShape == true) {
    crimeNPCDialogParams.NPCType = parseInt(_0x630A.crimeTasksNPCNumber);
    crimeNPCDialogParams.crimeTasksNPCName = _0x630A.crimeTasksNPCName;
  }
});
mp.events.add('playerExitColshape', _0x630A => {
  if (_0x630A.crimeTasksShape == true) {
    crimeNPCDialogParams.Entered = false;
  }
});
mp.events.add('dealerNrkBuy', _0x682E => {
  mp.events.callRemote('dealerNrkBuy', _0x682E);
});
mp.keys.bind(0x45, false, function () {
  if (localplayer.dimension != 8) {
    return;
  }

  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  {
    return;
  }

  if (crimeNPCDialogParams.NPCType == null) {
    return;
  }

  if (crimeNPCDialogParams.DialogOpen == true) {
    return;
  }

  CreateCrimeTasksNPCCamera(crimeNPCDialogParams.NPCType);
});
var crimeTaskCams = [{
  "PosX": 1025.813720703125,
  "PosY": -1857.3907470703125,
  "PosZ": 31.5318546295166,
  "PointX": 1026.365966796875,
  "PointY": -1856.7030029296875,
  "PointZ": 31.4638614654541,
  Type: 1
}];

function CreateCrimeTasksNPCCamera(_0xB026) {
  try {
    let _0xAF0C = crimeTaskCams.find(_0xB0E2 => {
      return _0xB0E2.Type == _0xB026;
    });

    if (_0xAF0C == null || _0xAF0C == undefined) {
      return mp.events.call('emsghud', 'NPC UNDEFINED');
    }

    HudMenuCEF.execute(`NPCDialog.NPCName = '${crimeNPCDialogParams.crimeTasksNPCName}'`);
    HudMenuCEF.execute(`NPCDialog.localName = '${localplayer.name}'`);
    HudMenuCEF.execute(`NPCDialog.startNPCCrimeTasksDialog('Default')`);
    mp.events.call('changeIteractionWithCrimeTasksNPC', 'start');

    if (crimeNPCDialogParams.NPCCamera != null) {
      crimeNPCDialogParams.NPCCamera.destroy();
    }

    CameraDirection = global.gameplayCam.getDirection();
    const _0xAFC8 = localplayer.position;
    _0xAFC8.x -= CameraDirection.x * 2;
    _0xAFC8.y -= CameraDirection.y * 2;

    var _0xAF6A = mp.cameras.new('default', new mp.Vector3(_0xAFC8.x, _0xAFC8.y, localplayer.position.z + 1), new mp.Vector3(0, 0, 0), 40);

    let _0xB084 = getPointingAtGPCamera();

    _0xAF6A.pointAtCoord(_0xB084.x, _0xB084.y, _0xB084.z);

    crimeNPCDialogParams.NPCCamera = mp.cameras.new('default', new mp.Vector3(_0xAF0C.PosX, _0xAF0C.PosY, _0xAF0C.PosZ), new mp.Vector3(90, 90, 90), 70);
    crimeNPCDialogParams.NPCCamera.pointAtCoord(_0xAF0C.PointX, _0xAF0C.PointY, _0xAF0C.PointZ);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    crimeNPCDialogParams.NPCCamera.setActiveWithInterp(_0xAF6A.handle, 500, 0, 0);
    crimeNPCDialogParams.NPCCamera.setActive(true);
  } catch (e) {
    mp.gui.chat.push(`e: ${e}`);
  }
}

mp.events.add('changeIteractionWithCrimeTasksNPC', _0x6134 => {
  switch (_0x6134) {
    case 'start':
      HudMenuCEF.execute(`changeRPHudDisplay('close');`);
      crimeNPCDialogParams.DialogOpen = true;
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
      crimeNPCDialogParams.DialogOpen = false;
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

      if (crimeNPCDialogParams.NPCCamera != null) {
        crimeNPCDialogParams.NPCCamera.setActive(false);
        crimeNPCDialogParams.NPCCamera.destroy();
      }

      break;
  }
});
mp.events.add('startLockpickGame', _0x6134 => {
  HudMenuCEF.execute(`lockMinigame.startPlayInterval('${_0x6134}')`);

  if (_0x6134 == 'house') {
    houseInteraction.houseInfoOpen = false;
    HudMenuCEF.execute(`GANGWARHouse.Active = 0`);
  }
});
mp.events.add('Client:stopLockpick', (_0x6134, _0x7566) => {
  switch (_0x6134) {
    case 'house':
      mp.events.callRemote('stopLockpickHouse', _0x7566);
      break;

    case 'vehicle':
      mp.events.callRemote('stopLockpickVehicle', _0x7566);
      break;

    default:
      break;
  }

  mp.gui.cursor.visible = false;
});
mp.events.add('Client:CrimeTaskStart', _0x6134 => {
  mp.events.callRemote('CrimeTaskStart', _0x6134);
});
mp.events.add('GANGWARlockpickHouse', _0x75C4 => {
  mp.events.callRemote('GANGWARlockpickHouse', _0x75C4);
});
let stealBlip = null;
mp.events.add('Client:initVehForSteal', _0x64E0 => {
  stealBlip = mp.blips.new(1, new mp.Vector3(_0x64E0.x, _0x64E0.y, _0x64E0.z), {
    name: 'Авто для кражи',
    color: 3,
    shortRange: false,
    dimension: 8
  });
  stealBlip.setRoute(true);
  stealBlip.setRouteColour(1);
});
mp.events.add('stealVehSuccessCracked', () => {
  if (stealBlip != null) {
    if (mp.blips.exists(stealBlip)) {
      stealBlip.destroy();
    }

    stealBlip = null;
  }
});