const localplayer = mp.players.local;
var LobbySettings = {
  Active: 0,
  Dimension: null,
  FirstAK: 0,
  'Active': 1,
  'FirstAK': 3,
  'Dimension': null
};
setInterval(() => {
  if (LobbySettings.Active == 1) {
    mp.game.controls.disableAllControlActions(0);
    mp.game.controls.disableAllControlActions(1);
    mp.game.controls.disableAllControlActions(2);
  }
}, 0);
mp.events.add('LobbyCreateNewLobby', () => {
  let _0x26A5F = CheckLoginCorrect();

  if (_0x26A5F != 0) {
    return;
  }

  mp.game.graphics.transitionToBlurred(200);
  HudMenuCEF.execute(`showLobby('show')`);
  mp.events.callRemote('LobbyCreateCaptureLobby');
  clearIntervalPlayerBRZone();
  clearAllLocationTrainingInterval();
  StopPedTimer();
  BRAll.GameDimension = null;
  BRAll.Status = 0;
  HudMenuCEF.execute(`changeAmmoDisplay('open');`);
  mp.events.call('clearCaptureTerritories', null, null, null, null);
  HudMenuCEF.execute(`changeCaptureTimerDisplay('close')`);
  mp.discord.update(`Играет на Galaxy DM`, `Capture Lobby (${localplayer.remoteId})`);
  mp.gui.cursor.visible = false;
  mp.game.cam.renderScriptCams(false, false, 0, false, false);
  UpdateAmmo(6, 9999);
  mp.gui.chat.activate(false);
  mp.gui.chat.show(false);
  mp.gui.cursor.visible = true;
  HudMenuCEF.execute(`ChangeMenuDisplay('Close');`);
  ChangeHUDKeysDisplay('hide');
  ChangeHUDKillFeedDisplay('hide');
  ChangeHUDFreeCaseDisplay('hide');
  ChangeHUDRaitingDisplay('hide');
  mp.game.ui.displayRadar(false);
  HudMenuCEF.execute(`ChangeGangwarHud('close');`);
  HudMenuCEF.execute(`changeBRHudKillsAlives('close')`);
  localplayer.freezePosition(true);
  localplayer.setArmour(0);
});
mp.events.add('ClearLobbyInterface', () => {
  HudMenuCEF.execute(`lobbyTeamsPlayersClear()`);
  HudMenuCEF.execute(`lobbyChatClear()`);
  HudMenuCEF.execute(`lobbyChangeSettings('b-position1','-')`);
  HudMenuCEF.execute(`lobbyChangeSettings('b-position2','-')`);
  HudMenuCEF.execute(`lobbyChangeSettings('b-weapon','-')`);
  HudMenuCEF.execute(`lobbyChatPushMsgJoin('${localplayer.name}',1)`);
  HudMenuCEF.execute(`lobbyAddUser(1,'${localplayer.name}','${localplayer.getVariable('StaticID')}','${localplayer.remoteId}')`);
});
mp.events.add('LobbyInviteTarget', (_0x26A9B, _0x26AD7) => {
  if (parseInt(_0x26AD7) != _0x26AD7) {
    return HudMenuCEF.execute(`emsg('Ошибка определения Invite Team, повторите попытку снова.');`);
  }

  if (parseInt(_0x26A9B) == parseInt(localplayer.remoteId)) {
    return HudMenuCEF.execute(`emsg('Вы не можете пригласить в лобби самого себя.');`);
  }

  mp.events.callRemote('LobbyInviteTarget', parseInt(_0x26A9B), parseInt(_0x26AD7));
});
mp.events.add('LobbyShowInviteForm', _0x26B13 => {
  HudMenuCEF.execute(`lobbyInviteTargetForm('${_0x26B13}')`);
});
mp.events.add('LobbyCancelInvite', () => {
  mp.gui.cursor.visible = false;
});
mp.events.add('lobbyAcceptInvite', () => {
  if (localplayer.dimension > 7) {
    return HudMenuCEF.execute(`emsg('Чтобы принять приглашение, вы должны находиться в DM режиме.');`);
  }

  mp.gui.cursor.visible = false;
  HudMenuCEF.execute(`lobbyAcceptInviteSuccess()`);
  mp.events.callRemote('LobbyAcceptInvite');
  mp.game.graphics.transitionToBlurred(200);
  HudMenuCEF.execute(`showLobby('show')`);
  LobbySettings.Active = 1;
  clearIntervalPlayerBRZone();
  clearAllLocationTrainingInterval();
  StopPedTimer();
  BRAll.GameDimension = null;
  BRAll.Status = 0;
  HudMenuCEF.execute(`changeAmmoDisplay('open');`);
  mp.events.call('clearCaptureTerritories', null, null, null, null);
  HudMenuCEF.execute(`changeCaptureTimerDisplay('close')`);
  mp.discord.update(`Играет на Galaxy DM`, `Capture Lobby (${localplayer.remoteId})`);
  mp.gui.cursor.visible = false;
  mp.game.cam.renderScriptCams(false, false, 0, false, false);
  UpdateAmmo(6, 9999);
  mp.gui.chat.activate(false);
  mp.gui.chat.show(false);
  mp.gui.cursor.visible = true;
  HudMenuCEF.execute(`ChangeMenuDisplay('Close');`);
  ChangeHUDKeysDisplay('hide');
  ChangeHUDKillFeedDisplay('hide');
  ChangeHUDFreeCaseDisplay('hide');
  ChangeHUDRaitingDisplay('hide');
  mp.game.ui.displayRadar(false);
  HudMenuCEF.execute(`ChangeGangwarHud('close');`);
  HudMenuCEF.execute(`changeBRHudKillsAlives('close')`);
  localplayer.freezePosition(true);
  localplayer.setArmour(0);
});
mp.events.add('LobbyAcceptInviteClear', _0x26AD7 => {
  HudMenuCEF.execute(`lobbyTeamsPlayersClear()`);
  HudMenuCEF.execute(`lobbyChatClear()`);
  HudMenuCEF.execute(`lobbyChangeSettings('b-position1','-')`);
  HudMenuCEF.execute(`lobbyChangeSettings('b-position2','-')`);
  HudMenuCEF.execute(`lobbyChangeSettings('b-weapon','-')`);
  HudMenuCEF.execute(`lobbyChatPushMsgJoin('${localplayer.name}','${_0x26AD7}')`);
});
mp.events.add('LobbyAddUserInLobby', (_0x26AD7, _0x26B8B, _0x26BC7, _0x26B4F) => {
  HudMenuCEF.execute(`lobbyAddUser(${_0x26AD7},'${_0x26B8B}','${_0x26BC7}','${_0x26B4F}')`);
});
mp.events.add('LobbyRemoveUserInLobby', _0x26B13 => {
  HudMenuCEF.execute(`lobbyRemoveUser('${_0x26B13}')`);
});
mp.events.add('LobbySetNewSetting', (_0x26C03, _0x26C3F) => {
  HudMenuCEF.execute(`lobbyChangeSettings('${_0x26C03}','${_0x26C3F}')`);
});
mp.events.add('lobbyTryChangeSettings', () => {
  mp.events.callRemote('LobbyTryChangeSettings');
});
mp.events.add('lobbySuccessChangeSettings', () => {
  HudMenuCEF.execute(`showLobby('settings')`);
  LobbySettings.Active = 2;
  mp.game.graphics.transitionFromBlurred(200);
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1569615261, true);
  CaptureLobbyfly.flying = true;
  mp.gui.cursor.visible = false;
});
mp.events.add('LobbySetTeamPosition', _0x26AD7 => {
  const _0x26C7B = mp.players.local.position;
  _0x26C7B.z = mp.game.gameplay.getGroundZFor3dCoord(_0x26C7B.x, _0x26C7B.y, _0x26C7B.z, 0.0, false);
  mp.players.local.setCoordsNoOffset(_0x26C7B.x, _0x26C7B.y, _0x26C7B.z + 1, false, false, false);
  setTimeout(() => {
    mp.events.callRemote('LobbySetTeamPosition', parseInt(_0x26AD7));
    HudMenuCEF.execute(`smsg('Вы установили позицию для команды #${_0x26AD7}');`);
  }, 100);
});
mp.events.add('LobbySetWeaponSetting', _0x26E5B => {
  if (_0x26E5B == undefined || _0x26E5B == null) {
    return HudMenuCEF.execute(`smsg('Ошибка при установке оружия, попробуйте ещё раз.');`);
  }

  mp.events.callRemote('LobbySetWeaponSetting', _0x26E5B);
});
mp.events.add('LobbyCaptureStartGame', () => {
  mp.events.callRemote('LobbyCaptureStartGame');
});
mp.events.add('lobbyStartGameHideAll', () => {
  mp.game.graphics.transitionFromBlurred(200);
  HudMenuCEF.execute(`lobbyStartGameHideAll();`);
  mp.gui.cursor.visible = false;
  ChangeHUDKeysDisplay('open');
  ChangeHUDKillFeedDisplay('open');
  ChangeHUDFreeCaseDisplay('open');
  ShowChat();
  mp.game.ui.displayRadar(true);
  ChangeHUDRaitingDisplay('hide');
  CaptureLobbyfly.flying = false;
  localplayer.freezePosition(false);
  LobbySettings.Active = 3;
  mp.game.invoke('0x14E56BC5B5DB6A19', mp.players.local.handle, mp.players.local.weapon >> 0, 9999);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, mp.players.local.weapon >> 0, 9999);
});
mp.keys.bind(0x33, false, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (localplayer.isFalling()) {
    return;
  }

  if (localplayer.dimension < 300000) {
    return;
  }

  if (LobbySettings.Dimension != localplayer.dimension) {
    return;
  }

  if (LobbySettings.FirstAK <= 0) {
    return HudMenuCEF.execute(`fastemsg('У вас нет аптек.');`);
  }

  if (localplayer.getHealth() >= 100) {
    return HudMenuCEF.execute(`fastemsg('Невозможно использовать аптеку, когда вы полностью здоровы.');`);
  }

  LobbySettings.FirstAK--;
  mp.attachmentMngr.addLocal('MedicPack');
  mp.events.callRemote('AutoCaptureMedicPack', 'using');
  setTimeout(() => {
    mp.attachmentMngr.removeLocal('MedicPack');
    mp.events.callRemote('AutoCaptureMedicPack', 'stop');
  }, 3000);
});
mp.events.add('lobbySetNewLobbyDimension', _0x263CF => {
  LobbySettings.Dimension = parseInt(_0x263CF);
});
mp.events.add('playerDeath', (player, _0x26573, _0x2604B) => {
  if (localplayer.dimension < 300000) {
    return;
  }

  {
    if (localplayer.dimension != LobbySettings.Dimension) {
      return;
    }

    mp.events.callRemote('LobbyPlayerDeath', 3);
    localplayer.setHealth(-100);
  }
});
mp.events.add('LobbyDeathInGamingLobbyCef', _0x2712B => {
  HudMenuCEF.execute(`OpenLobbyDeathDiv(${_0x2712B});`);
  mp.gui.cursor.visible = true;
});
mp.events.add('LobbyGamingLobbyPressDeath', () => {
  mp.events.callRemote('LobbyGamingLobbyPressDeath');
});
mp.events.add('lobbyReturnAllPlayersInLobby', () => {
  mp.gui.cursor.visible = true;
  mp.game.graphics.transitionToBlurred(200);
  HudMenuCEF.execute(`showLobby('show')`);
  ChangeHUDKeysDisplay('hide');
  ChangeHUDKillFeedDisplay('hide');
  ChangeHUDFreeCaseDisplay('hide');
  ChangeHUDRaitingDisplay('hide');
  mp.gui.chat.activate(false);
  mp.gui.chat.show(false);
  mp.gui.cursor.visible = true;
});
mp.events.add('lobbyLeaveFromLobbyClearAll', () => {
  clearAllLobbyParams();
  mp.game.graphics.transitionFromBlurred(200);
  CaptureLobbyfly.flying = false;
  mp.gui.cursor.visible = true;
  localplayer.freezePosition(false);
  HudMenuCEF.execute(`showLobby('close');`);
  UpdatePlayersCount();
  mp.gui.chat.activate(false);
  mp.gui.chat.show(false);
  ChangeHUDKeysDisplay('hide');
  ChangeHUDKillFeedDisplay('hide');
  ChangeHUDFreeCaseDisplay('hide');
  ChangeHUDRaitingDisplay('hide');
});
mp.events.add('lobbyKickTargetFromLobby', (_0x27167, _0x271A3) => {
  if (parseInt(_0x27167) == parseInt(localplayer.remoteId)) {
    return HudMenuCEF.execute(`emsg('Вы не можете кикнуть самого себя. Удалите лобби, либо покиньте его.');`);
  }

  mp.events.callRemote('LobbyKickTarget', parseInt(_0x27167), parseInt(_0x271A3));
});
mp.events.add('lobbyPlayerLeaveSelf', () => {
  mp.events.callRemote('LobbyPlayerLeaveSelf');
});
mp.events.add('lobbyPlayerLeaveSelfSeccess', () => {
  HudMenuCEF.execute(`showLobby('close')`);
});
mp.events.add('lobbyLeaderDeleteLobby', () => {
  mp.events.callRemote('LobbyLeaderDeleteLobby');
});
mp.events.add('lobbyMessagePush', _0x271DF => {
  if (localplayer.dimension < 300000) {
    return;
  }

  if (LobbySettings.Dimension != localplayer.dimension) {
    return;
  }

  mp.events.callRemote('LobbyMessagePush', `${_0x271DF}`);
});
mp.events.add('lobbyChatPushNewMsg', (_0x2721B, _0x27257, _0x271DF) => {
  HudMenuCEF.execute(`lobbyChatPushMsg('${_0x2721B}','  ${_0x27257}','${_0x271DF}')`);
});
mp.events.add('lobbyChatClearChatInput', () => {
  HudMenuCEF.execute(`lobbyChatClearChatInput()`);
});
mp.events.add('lobbyNewUserJoinPushChat', (_0x2721B, _0x26AD7) => {
  HudMenuCEF.execute(`lobbyChatPushMsgJoin('${_0x2721B}','${_0x26AD7}')`);
});
mp.events.add('lobbyChatPushMsgKick', (_0x2721B, _0x26B8B) => {
  HudMenuCEF.execute(`lobbyChatPushMsgKick('${_0x2721B}','${_0x26B8B}')`);
});
mp.events.add('lobbyChatPushMsgLeave', _0x2721B => {
  HudMenuCEF.execute(`lobbyChatPushMsgLeave('${_0x2721B}')`);
});

function clearAllLobbyParams() {
  CaptureLobbyfly.flying = false;
  LobbySettings.Active = 0;
}

mp.events.add('playerWeaponShot', (_0x264FB, _0x264BF) => {
  {
    return;
  }

  if (localplayer.dimension < 300000) {
    return;
  }

  if (LobbySettings.Dimension != localplayer.dimension) {
    return;
  }

  let _0x26483 = pointingAtCaptureLobby(250);

  if (_0x26483 === undefined || _0x26483.entity === undefined || _0x26483 === 'undefined' || _0x26483.entity === 'undefined') {
    return;
  }

  if (_0x26483.entity.type === 'player') {
    if (_0x26483.entity == player) {
      return;
    }

    let _0x27293 = WeaponDamage(localplayer.weapon);

    if (_0x27293 <= 0) {
      return;
    }

    mp.events.callRemote('LobbyWeaponDamage', _0x26483.entity, _0x27293, `${localplayer.weapon}`);
  }
});

function pointingAtCaptureLobby(_0x266DB) {
  const _0x28AF3 = mp.cameras.new('gameplay');

  let _0x26C7B = _0x28AF3.getCoord();

  let direction = _0x28AF3.getDirection();

  let _0x28A7B = new mp.Vector3(direction.x * _0x266DB + _0x26C7B.x, direction.y * _0x266DB + _0x26C7B.y, direction.z * _0x266DB + _0x26C7B.z);

  return mp.raycasting.testPointToPoint(_0x26C7B, _0x28A7B, [1, 16, 256], 13);
}

function WeaponDamage(_0x28553) {
  switch (_0x28553) {
    case 3249783761:
      return 53;
      break;

    case 2210333304:
      return 7;
      break;

    case 171789620:
      return 8;
      break;

    case 984333226:
      return 32;
      break;

    case 736523883:
      return 6;
      break;

    case 2725352035:
      return 10;
      break;

    case 4024951519:
      return 5;
      break;

    case 3220176749:
      return 10;
      break;

    case 2937143193:
      return 10;
      break;

    case 2144741730:
      return 16;
      break;

    case 2634544996:
      return 19;
      break;

    case 1627465347:
      return 7;
      break;

    case 2132975508:
      return 5;
      break;

    case 3696079510:
      return 74;
      break;

    case 3173288789:
      return 5;
      break;

    case 2828843422:
      return 68;
      break;

    case 205991906:
      return 78;
      break;

    case 3231910285:
      return 8;
      break;

    case 2441047180:
      return 53;
      break;

    default:
      return 0;
      break;
  }
}