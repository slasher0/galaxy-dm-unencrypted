const localplayer = mp.players.local;
var NrkNPCDialogParams = {
  Entered: false,
  NPCType: null,
  DialogOpen: false,
  NPCCamera: null,
  NrkNPCName: null,
  'Entered': true,
  'NPCType': null,
  'DialogOpen': false,
  'NPCCamera': null
};
let NrkPeds = [{
  x: -27.08885383605957,
  y: -1490.288818359375,
  z: 30.36211395263672,
  heading: 174.3338165283203,
  model: 's_m_y_dealer_01',
  NPCName: 'Luffy',
  NPCNum: 1
}, {
  x: 948.854736328125,
  y: -1490.670166015625,
  z: 30.692092895507812,
  heading: 137.8199920654297,
  model: 'csb_g',
  NPCName: 'Mazzy',
  NPCNum: 2
}, {
  x: 199.5363006591797,
  y: -2003.6414794921875,
  z: 18.8615665435791,
  heading: 266.400146484375,
  model: 'ig_car3guy1',
  NPCName: 'Timur',
  NPCNum: 3
}];

function loadANrkPeds() {
  for (let _0x6C38 = 0; _0x6C38 < NrkPeds.length; _0x6C38++) {
    let _0x630A = mp.colshapes.newCircle(NrkPeds[_0x6C38].x, NrkPeds[_0x6C38].y, 2, 8);

    _0x630A.NrkShape = true;
    _0x630A.NrkNPCNumber = parseInt(NrkPeds[_0x6C38].NPCNum);
    _0x630A.NrkNPCName = NrkPeds[_0x6C38].NPCName;

    if (NrkPeds[_0x6C38].NPCName != null) {
      mp.labels.new(`${NrkPeds[_0x6C38].NPCName}`, new mp.Vector3(NrkPeds[_0x6C38].x, NrkPeds[_0x6C38].y, NrkPeds[_0x6C38].z + 1.3), {
        font: 4,
        drawDistance: 5,
        color: [255, 255, 255, 255],
        dimension: 8
      });
    }
  }
}

loadANrkPeds();
mp.events.add('playerEnterColshape', _0x630A => {
  if (_0x630A.NrkShape == true) {
    NrkNPCDialogParams.NPCType = parseInt(_0x630A.NrkNPCNumber);
    NrkNPCDialogParams.NrkNPCName = _0x630A.NrkNPCName;
  }
});
mp.events.add('playerExitColshape', _0x630A => {
  if (_0x630A.NrkShape == true) {
    NrkNPCDialogParams.Entered = false;
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

  if (NrkNPCDialogParams.NPCType == null) {
    return;
  }

  if (NrkNPCDialogParams.DialogOpen == true) {
    return;
  }

  CreateNrkNPCCamera(NrkNPCDialogParams.NPCType);
});
var NrkPedsCams = [{
  PosX: -27.246652603149414,
  PosY: -1491.4454345703125,
  PosZ: 30.989608764648438,
  PointX: -27.10135269165039,
  PointY: -1490.53857421875,
  PointZ: 30.899425506591797,
  Type: 1
}, {
  PosX: 948.1610107421875,
  PosY: -1491.372314453125,
  PosZ: 31.332077026367188,
  PointX: 948.683349609375,
  PointY: -1490.8521728515625,
  PointZ: 31.25565528869629,
  Type: 2
}, {
  PosX: 200.4176483154297,
  PosY: -2003.7098388671875,
  PosZ: 19.389726638793945,
  PointX: 199.78599548339844,
  PointY: -2003.6539306640625,
  PointZ: 19.387563705444336,
  Type: 3
}];

function CreateNrkNPCCamera(_0xB026) {
  try {
    let _0xAF0C = NrkPedsCams.find(_0xB0E2 => {
      return _0xB0E2.Type == _0xB026;
    });

    if (_0xAF0C == null || _0xAF0C == undefined) {
      return mp.events.call('emsghud', 'NPC UNDEFINED1');
    }

    HudMenuCEF.execute(`NPCDialog.NPCName = '${NrkNPCDialogParams.NrkNPCName}'`);
    HudMenuCEF.execute(`NPCDialog.localName = '${localplayer.name}'`);
    HudMenuCEF.execute(`NPCDialog.startNPCDealNrkDialog('Default')`);
    mp.events.call('changeIteractionWithNrkNPC', 'start');

    if (NrkNPCDialogParams.NPCCamera != null) {
      NrkNPCDialogParams.NPCCamera.destroy();
    }

    CameraDirection = global.gameplayCam.getDirection();
    const _0xAFC8 = localplayer.position;
    _0xAFC8.x -= CameraDirection.x * 2;
    _0xAFC8.y -= CameraDirection.y * 2;

    var _0xAF6A = mp.cameras.new('default', new mp.Vector3(_0xAFC8.x, _0xAFC8.y, localplayer.position.z + 1), new mp.Vector3(0, 0, 0), 40);

    let _0xB084 = getPointingAtGPCamera();

    _0xAF6A.pointAtCoord(_0xB084.x, _0xB084.y, _0xB084.z);

    NrkNPCDialogParams.NPCCamera = mp.cameras.new('default', new mp.Vector3(_0xAF0C.PosX, _0xAF0C.PosY, _0xAF0C.PosZ), new mp.Vector3(90, 90, 90), 70);
    NrkNPCDialogParams.NPCCamera.pointAtCoord(_0xAF0C.PointX, _0xAF0C.PointY, _0xAF0C.PointZ);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    NrkNPCDialogParams.NPCCamera.setActiveWithInterp(_0xAF6A.handle, 500, 0, 0);
    NrkNPCDialogParams.NPCCamera.setActive(true);
  } catch (e) {
    mp.gui.chat.push(`e: ${e}`);
  }
}

mp.events.add('changeIteractionWithNrkNPC', _0x6134 => {
  switch (_0x6134) {
    case 'start':
      HudMenuCEF.execute(`changeRPHudDisplay('close');`);
      NrkNPCDialogParams.DialogOpen = true;
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
      NrkNPCDialogParams.DialogOpen = false;
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

      if (NrkNPCDialogParams.NPCCamera != null) {
        NrkNPCDialogParams.NPCCamera.setActive(false);
        NrkNPCDialogParams.NPCCamera.destroy();
      }

      break;
  }
});
let nrkSystem = {
  Active: false,
  Time: 0,
  Interval: null,
  GGAlcoholTicks: 0,
  HPTime: 0,
  HealSteps: [55, 30, 10],
  'Time': 45,
  'Active': true,
  'Interval': null
};
mp.events.add('Client:NRKEffect', () => {
  setTimeout(() => {
    usingNRKPills();
    mp.events.callRemote('StopUsingNRKPills');
  }, 5000);
});

function changeRNKHealCount() {
  let _0xAD36 = (100 - parseFloat(EMSData.RNKAddiction)) / 100;

  nrkSystem.HealSteps = [55 * parseFloat(_0xAD36), 30 * parseFloat(_0xAD36), 10 * parseFloat(_0xAD36)];
}

function usingNRKPills() {
  if (nrkSystem.Active == true) {
    return;
  }

  if (nrkSystem.Interval != null) {
    clearInterval(nrkSystem.Interval);
  }

  nrkSystem.Interval = setInterval(() => {
    if (nrkSystem.Time <= 0) {
      clearInterval(nrkSystem.Interval);
      nrkSystem.Interval = null;
      nrkSystem.Active = false;
    } else {
      nrkSystem.Time--;

      if (nrkSystem.Time == 35) {
        if (localplayer.isDead() == true) {
          return;
        }

        if (parseInt(playerHealths.Health) + parseInt(nrkSystem.HealSteps[0]) >= 101) {
          playerHealths.Health = 100;
          localplayer.setHealth(200);
        } else {
          playerHealths.Health = parseInt(playerHealths.Health) + 55;
          localplayer.setHealth(100 + parseInt(playerHealths.Health));
        }
      }

      if (nrkSystem.Time == 20) {
        if (localplayer.isDead() == true) {
          return;
        }

        if (parseInt(playerHealths.Health) + parseInt(nrkSystem.HealSteps[1]) >= 101) {
          playerHealths.Health = 100;
          localplayer.setHealth(200);
        } else {
          playerHealths.Health = parseInt(playerHealths.Health) + 30;
          localplayer.setHealth(100 + parseInt(playerHealths.Health));
        }
      }

      if (nrkSystem.Time == 1) {
        if (localplayer.isDead() == true) {
          return;
        }

        if (parseInt(playerHealths.Health) + parseInt(nrkSystem.HealSteps[2]) >= 101) {
          playerHealths.Health = 100;
          localplayer.setHealth(200);
        } else {
          playerHealths.Health = parseInt(playerHealths.Health) + 10;
          localplayer.setHealth(100 + parseInt(playerHealths.Health));
        }
      }
    }
  }, 1000);
}