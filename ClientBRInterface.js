var _$_3105 = ["local", "players", "BRAll", "startPlayerBattleRoyale", "Status", "freezePosition", "BRsetDeafultWaitPos", "callRemote", "events", "default", "PosX", "PosY", "PosZ", "Vector3", "new", "cameras", "PointX", "PointY", "PointZ", "pointAtCoord", "renderScriptCams", "cam", "game", "setActive", "clearCaptureTerritories", "call", "execute", "setArmour", "remoteId", "update", "discord", "activate", "chat", "gui", "show", "visible", "cursor", "hide", "displayRadar", "ui", "name", "StaticID", "getVariable", "add", "LeaveFromBRCEF", "SetBRALLParams", "WaitGameDimension", "PlayeJoinToBRWait", "JoinToWaitBR", "FullClearBRInventory()", "setInvincible", "open", "disableAllControlActions", "controls", "BRAttachToTitan", "clearBRInventoryBeforeStart", "setVisible", "forEachInStreamRange", "at", "objects", "GameDimension", "HaveParashute", "setCollision", "exists", "gadget_parachute", "joaat", "giveWeapon", "x", "position", "y", "z", "setCoordsNoOffset", "bind", "keys", "length", "dimension", "filter", "toArray", "showBRKillNotify"];
const localplayer = mp.players.local;
global.BRAll = {
  Status: 0,
  WaitGameDimension: 11,
  HaveParashute: false,
  GameDimension: null
};
var BRCamPos = [{
  "PosX": 5078.3095703125,
  "PosY": -4682.3984375,
  "PosZ": 3.49184250831604,
  "PointX": 5083.89111328125,
  "PointY": -4678.0771484375,
  "PointZ": 1.391768455505371
}];
mp.events.add('startPlayerBattleRoyale', () => {
  BRAll.Status = 1;
  localplayer.freezePosition(false);
  mp.events.callRemote('BRsetDeafultWaitPos');
  let _0x139EA = BRCamPos[0];
  BRCamera = mp.cameras.new('default', new mp.Vector3(_0x139EA.PosX, _0x139EA.PosY, _0x139EA.PosZ), new mp.Vector3(90, 90, 90), 70);
  BRCamera.pointAtCoord(_0x139EA.PointX, _0x139EA.PointY, _0x139EA.PointZ);
  mp.game.cam.renderScriptCams(true, false, 0, true, false);
  BRCamera.setActive(true);
  menuDisplay = false;
  AutoCaptureFreeze = false;
  mp.events.call('clearCaptureTerritories', null, null, null, null);
  HudMenuCEF.execute(`changeCaptureTimerDisplay('close')`);
  GunGameControlsLock = false;
  clearAllLocationTrainingInterval();

  let _0x13A0E = CheckLoginCorrect();

  if (_0x13A0E != 0) {
    return;
  }

  HumanLabsLock = 0;
  localplayer.setArmour(0);
  mp.discord.update(`Играет на Galaxy DM`, `Battle Royale (${localplayer.remoteId})`);
  StopPedTimer();
  mp.gui.chat.activate(false);
  mp.gui.chat.show(false);
  mp.gui.cursor.visible = true;
  HudMenuCEF.execute(`ChangeMenuDisplay('Close');`);
  ChangeHUDKeysDisplay('hide');
  ChangeHUDKillFeedDisplay('hide');
  ChangeHUDFreeCaseDisplay('hide');
  ChangeHUDRaitingDisplay('hide');
  mp.game.ui.displayRadar(false);
  HudMenuCEF.execute(`changeAmmoDisplay('close');`);
  setTimeout(() => {
    localplayer.freezePosition(true);
  }, 1000);
  BRMainCEF.execute(`changeBRCEFDisplay('open')`);
  BRMainCEF.execute(`changeBRCEFPlayerName('${localplayer.name} [#${localplayer.getVariable('StaticID')}]')`);
  HudMenuCEF.execute(`ChangeGangwarHud('close');`);
});
mp.events.add('LeaveFromBRCEF', () => {
  BRMainCEF.execute(`changeBRCEFDisplay('close')`);
  menuDisplay = true;
  UpdatePlayersCount();
  mp.gui.chat.activate(false);
  mp.gui.chat.show(false);
  mp.gui.cursor.visible = true;
  HudMenuCEF.execute(`ChangeMenuDisplay('Open');`);
  ChangeHUDKeysDisplay('hide');
  ChangeHUDKillFeedDisplay('hide');
  ChangeHUDFreeCaseDisplay('hide');
  ChangeHUDRaitingDisplay('hide');
  mp.game.ui.displayRadar(false);
});
mp.events.add('SetBRALLParams', (_0x13A32, _0x12B4A) => {
  switch (_0x13A32) {
    case 'WaitGameDimension':
      BRAll.WaitGameDimension = parseInt(_0x12B4A);
      break;
  }
});
mp.events.add('PlayeJoinToBRWait', () => {
  mp.events.callRemote('JoinToWaitBR');
});
mp.events.add('JoinToWaitBR', () => {
  BRInventoryCEF.execute('FullClearBRInventory()');
  BRAll.Status = 2;
  localplayer.freezePosition(false);
  HudMenuCEF.execute(`changeAmmoDisplay('open');`);
  menuDisplay = false;
  HudMenuCEF.execute(`ChangeMenuDisplay('Close');`);
  AutoCaptureFreeze = false;
  HudMenuCEF.execute(`changeCaptureTimerDisplay('close')`);
  GunGameControlsLock = false;
  clearAllLocationTrainingInterval();
  HumanLabsLock = 0;
  localplayer.setArmour(0);
  mp.discord.update(`Ждёт Battle Royale`, `На GALAXY DM (${localplayer.remoteId})`);
  StopPedTimer();
  localplayer.freezePosition(false);
  mp.game.ui.displayRadar(true);
  localplayer.setInvincible(false);
  mp.gui.cursor.visible = false;
  mp.game.cam.renderScriptCams(false, false, 0, false, false);
  UpdateAmmo(0, 9999);
  ChangeHUDKeysDisplay('open');
  ChangeHUDKillFeedDisplay('open');
  ChangeHUDFreeCaseDisplay('open');
  ChangeHUDRaitingDisplay('hide');
  ShowChat();
  HudMenuCEF.execute(`ChangeGangwarHud('close');`);
  HudMenuCEF.execute(`changeBRHudKillsCount('0')`);
  HudMenuCEF.execute(`changeBRHudAlivesCount('0')`);
  HudMenuCEF.execute(`changeBRHudKillsAlives('open')`);
  BRMainCEF.execute(`changeBRCEFDisplay('close')`);
});
setInterval(() => {
  if (BRAll.Status == 1) {
    mp.game.controls.disableAllControlActions(0);
    mp.game.controls.disableAllControlActions(1);
    mp.game.controls.disableAllControlActions(2);
  }
}, 0);
var Flyinterval = null;
mp.events.add('BRAttachToTitan', (_0x13AE6, _0x13A9E) => {
  mp.events.call('clearBRInventoryBeforeStart');
  mp.discord.update(`Летит в самолёте Battle Royale`, `На GALAXY DM (${localplayer.remoteId})`);
  mp.players.forEachInStreamRange(player => {
    player.setVisible(false, true);
  });

  let _0x13AC2 = mp.objects.at(parseInt(_0x13AE6));

  setTimeout(() => {
    BRAll.Status = 3;
    BRAll.GameDimension = parseInt(_0x13A9E);
    BRAll.HaveParashute = true;
    localplayer.setVisible(false, true);
    localplayer.setCollision(false, false);
    Flyinterval = setInterval(() => {
      if (_0x13AC2 == null || _0x13AC2 == undefined || !mp.objects.exists(_0x13AC2)) {
        mp.players.forEachInStreamRange(player => {
          player.setVisible(true, true);
        });
        clearInterval(Flyinterval);
        Flyinterval = null;
        BRAll.Status = 4;
        BRAll.HaveParashute = false;
        localplayer.giveWeapon(mp.game.joaat('gadget_parachute'), -1, true);
        localplayer.freezePosition(false);
        localplayer.setVisible(true, true);
        localplayer.setCollision(true, false);
        mp.discord.update(`Играет в Battle Royale`, `На GALAXY DM (${localplayer.remoteId})`);
      } else {
        if (mp.objects.exists(_0x13AC2)) {
          localplayer.setCoordsNoOffset(_0x13AC2.position.x, _0x13AC2.position.y, _0x13AC2.position.z + 15, false, false, false);
        } else {
          mp.players.forEachInStreamRange(player => {
            player.setVisible(true, true);
          });
          clearInterval(Flyinterval);
          Flyinterval = null;
          BRAll.Status = 4;
          BRAll.HaveParashute = false;
          localplayer.giveWeapon(mp.game.joaat('gadget_parachute'), -1, true);
          localplayer.freezePosition(false);
          localplayer.setVisible(true, true);
          localplayer.setCollision(true, false);
          mp.discord.update(`Играет в Battle Royale`, `На GALAXY DM (${localplayer.remoteId})`);
        }
      }
    }, 0);
  }, 1000);
});
mp.keys.bind(0x46, true, function () {
  if (BRAll.HaveParashute == true && Flyinterval != null) {
    BRAll.HaveParashute = false;

    if (Flyinterval != null) {
      clearInterval(Flyinterval);
      Flyinterval = null;
    }

    mp.discord.update(`Играет в Battle Royale`, `На GALAXY DM (${localplayer.remoteId})`);
    BRAll.Status = 4;
    localplayer.setCoordsNoOffset(localplayer.position.x, localplayer.position.y, localplayer.position.z - 20, false, false, false);
    localplayer.giveWeapon(mp.game.joaat('gadget_parachute'), -1, true);
    localplayer.freezePosition(false);
    localplayer.setVisible(true, true);
    localplayer.setCollision(true, false);
    mp.players.forEachInStreamRange(player => {
      player.setVisible(true, true);
    });
  }
});
setInterval(() => {
  if (BRAll.Status == 1) {
    brwaitcount = mp.players.toArray().filter(player => {
      return player.dimension == 11;
    }).length;
    BRMainCEF.execute(`changeBRPlayersWaitGame('${brwaitcount}')`);
  } else {
    if (BRAll.Status >= 2) {
      if (localplayer.dimension < 500000) {
        return;
      }

      if (BRAll.GameDimension == null) {
        return;
      }

      if (BRAll.GameDimension != localplayer.dimension) {
        return;
      }

      braliveplayer = mp.players.toArray().filter(player => {
        return player.dimension == localplayer.dimension;
      }).length;
      HudMenuCEF.execute(`changeBRHudAlivesCount('${braliveplayer}')`);
    }
  }
}, 5000);
setInterval(() => {
  if (BRAll.Status >= 3) {
    checkZoneDistanceHUDInfo();
  }
}, 1000);

function clearBRIntervals() {
  if (Flyinterval != null) {
    clearInterval(Flyinterval);
    Flyinterval = null;
  }
}

function BRZoneNotify(_0x12B26) {
  HudMenuCEF.execute(`BRZoneNotifyImg('${_0x12B26}')`);
}

mp.events.add('showBRKillNotify', (_0x132E2, _0x13B2E, _0x13B0A) => {
  HudMenuCEF.execute(`showBRKillNotify('${_0x132E2}','${_0x13B2E}','${_0x13B0A}')`);
});