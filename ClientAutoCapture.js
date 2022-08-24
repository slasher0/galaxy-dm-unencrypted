var _$_2320 = ["local", "players", "AutoCaptureFreeze", "dimension", "PlayerWriteAutoCapture", "call", "events", "bind", "keys", "AutoCaptureWriteStart", "WriteActive", "PlayerWrite", "execute", "add", "AutoCaptureWriteSuccess", "callRemote", "AutoCapture5SecInfo", "freezePosition", "FirstAK", "Alcohol", "visible", "cursor", "gui", "isFalling", "getHealth", "MedicPack", "addLocal", "attachmentMngr", "AutoCaptureMedicPack", "using", "removeLocal", "stop", "AutoCaptureAlcohol", "Alko", "disableAllControlActions", "controls", "game", "captureDeathDiv", "spawnAfterDeathinAutoCapture", "playerSpawnInSkyAfterAutoCpt"];
const localplayer = mp.players.local;
var AutoCapture = {
  WriteActive: false,
  PlayerWrite: true,
  FirstAK: 3,
  Alcohol: 1,
  'WriteActive': true,
  'PlayerWrite': false,
  'FirstAK': 3,
  'Alcohol': 1
};
global.AutoCaptureFreeze = false;
mp.keys.bind(0x59, false, function () {
  if (localplayer.dimension >= 501) {
    return;
  }

  mp.events.call('PlayerWriteAutoCapture');
});
mp.events.add('AutoCaptureWriteStart', () => {
  HudMenuCEF.execute(`changeAutoCaptWriteDisplay('open')`);
  setTimeout(() => {
    AutoCapture.WriteActive = false;
    AutoCapture.PlayerWrite = true;
    HudMenuCEF.execute(`changeAutoCaptWriteDisplay('close')`);
  }, 10000);
});
mp.events.add('PlayerWriteAutoCapture', () => {
  if (AutoCapture.WriteActive == false) {
    return;
  }

  if (AutoCapture.PlayerWrite == true) {
    return;
  }

  if (ChatActive) {
    return;
  }

  AutoCapture.PlayerWrite = true;
  AutoCapture.WriteActive = false;
  HudMenuCEF.execute(`changeAutoCaptWriteDisplay('close')`);
  InventoryCEF.execute(`GangwarPlayLocalSounds('CaptureSuccess')`);
  mp.events.callRemote('AutoCaptureWriteSuccess');
});
mp.events.add('AutoCapture5SecInfo', () => {
  localplayer.freezePosition(true);
  HudMenuCEF.execute(`ChangeAutoCaptureAttentionDisplay('open')`);
  AutoCaptureFreeze = true;
  setTimeout(() => {
    AutoCaptureFreeze = false;
    localplayer.freezePosition(false);
  }, 5000);
});
mp.keys.bind(0x33, false, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (localplayer.isFalling()) {
    return;
  }

  if (localplayer.dimension != 6000) {
    return;
  }

  if (AutoCapture.FirstAK <= 0) {
    return HudMenuCEF.execute(`fastemsg('У вас нет аптек.');`);
  }

  if (localplayer.getHealth() == 100) {
    return HudMenuCEF.execute(`fastemsg('Невозможно использовать аптеку, когда вы полностью здоровы.');`);
  }

  AutoCapture.FirstAK--;
  mp.attachmentMngr.addLocal('MedicPack');
  mp.events.callRemote('AutoCaptureMedicPack', 'using');
  setTimeout(() => {
    mp.attachmentMngr.removeLocal('MedicPack');
    mp.events.callRemote('AutoCaptureMedicPack', 'stop');
  }, 3000);
});
mp.keys.bind(0x34, false, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (localplayer.isFalling()) {
    return;
  }

  if (localplayer.dimension != 6000) {
    return;
  }

  if (AutoCapture.Alcohol <= 0) {
    return HudMenuCEF.execute(`fastemsg('У вас нет алкоголя.');`);
  }

  AutoCapture.Alcohol--;
  mp.events.callRemote('AutoCaptureAlcohol', 'using');
  mp.attachmentMngr.addLocal('Alko');
  setTimeout(() => {
    mp.events.callRemote('AutoCaptureAlcohol', 'stop');
    mp.attachmentMngr.removeLocal('Alko');
  }, 5300);
});
setInterval(() => {
  if (AutoCaptureFreeze) {
    mp.game.controls.disableAllControlActions(0);
    mp.game.controls.disableAllControlActions(1);
    mp.game.controls.disableAllControlActions(2);
  }
}, 0);
mp.events.add('captureDeathDiv', () => {
  HudMenuCEF.execute(`OpenAutoCaptureDeathDiv();`);
});
mp.events.add('spawnAfterDeathinAutoCapture', () => {
  mp.events.callRemote('playerSpawnInSkyAfterAutoCpt');
});