mp.events.add('ChangeMenuDisplay', _0x255FB => {
	HudMenuCEF.execute(`ChangeMenuDisplay('${_0x255FB}');`);
  });
  global.GameChatVisible = true;
  mp.events.add('ChangeChatDisplay', _0x25637 => {
	switch (_0x25637) {
	  case 'Hide':
		GameChatVisible = false;
		break;
  
	  case 'Show':
		GameChatVisible = true;
		break;
	}
  });
  
  function ShowChat() {
	if (GameChatVisible == true) {
	  mp.gui.chat.show(true);
	  mp.gui.chat.activate(true);
	}
  }
  
  function UpdatePlayersCount() {
	revplayers = mp.players.toArray().filter(player => {
	  return player.dimension == 1;
	}).length;
	revplayers2 = mp.players.toArray().filter(player => {
	  return player.dimension == 2;
	}).length;
	revplayers3 = mp.players.toArray().filter(player => {
	  return player.dimension == 3;
	}).length;
	pdwplayers = mp.players.toArray().filter(player => {
	  return player.dimension == 4;
	}).length;
	carplayers = mp.players.toArray().filter(player => {
	  return player.dimension == 5;
	}).length;
	tdmplayers = mp.players.toArray().filter(player => {
	  return player.dimension == 13 || player.dimension == 15;
	}).length;
	gungameplayer = mp.players.toArray().filter(player => {
	  return player.dimension == 500;
	}).length;
	ghettowarplayer = mp.players.toArray().filter(player => {
	  return player.dimension == 8;
	}).length;
	afkzoneplayer = mp.players.toArray().filter(player => {
	  return player.dimension == 99;
	}).length;
	brplayer = mp.players.toArray().filter(player => {
	  return player.dimension == 11;
	}).length;
	HudMenuCEF.execute(`SetNumberOfPlayersInModes('${revplayers}','${revplayers2}','${revplayers3}','${pdwplayers}','${carplayers}','${tdmplayers}','${gungameplayer}','${ghettowarplayer}','${afkzoneplayer}','${brplayer}');`);
  }
  
  global.MenuDisplay = true;
  global.HUDKeysDisplay = 'Display';
  global.HUDKillFeedDisplay = 'Display';
  global.HUDFreeCaseDisplay = 'Display';
  mp.events.add('ChangeHUDComponentDisplay', (_0x256AF, _0x25637) => {
	switch (_0x256AF) {
	  case 'HUDKeysDivDisplay':
		HUDKeysDisplay = _0x25637;
		break;
  
	  case 'HUDKillFeedDivDisplay':
		HUDKillFeedDisplay = _0x25637;
		break;
  
	  case 'HUDFreeCaseDivDisplay':
		HUDFreeCaseDisplay = _0x25637;
		break;
	}
  });
  
  function ChangeHUDKeysDisplay(_0x25637) {
	switch (_0x25637) {
	  case 'open':
		if (HUDKeysDisplay == 'Display') {
		  HudMenuCEF.execute(`ChangeHUDKeysDivDisplay('open');`);
		}
  
		break;
  
	  case 'hide':
		HudMenuCEF.execute(`ChangeHUDKeysDivDisplay('hide');`);
		break;
	}
  }
  
  function ChangeHUDRaitingDisplay(_0x25637) {
	HudMenuCEF.execute(`ChangeHUDRaitingDisplay('${_0x25637}');`);
  }
  
  function ChangeHUDKillFeedDisplay(_0x25637) {
	switch (_0x25637) {
	  case 'open':
		if (HUDKillFeedDisplay == 'Display') {
		  HudMenuCEF.execute(`ChangeHUDKillFeedDivDisplay('open');`);
		}
  
		break;
  
	  case 'hide':
		HudMenuCEF.execute(`ChangeHUDKillFeedDivDisplay('hide');`);
		break;
	}
  }
  
  function ChangeHUDFreeCaseDisplay(_0x25637) {
	switch (_0x25637) {
	  case 'open':
		if (HUDFreeCaseDisplay == 'Display') {
		  HudMenuCEF.execute(`ChangeHUDFreeCaseDivDisplay('open');`);
		}
  
		break;
  
	  case 'hide':
		HudMenuCEF.execute(`ChangeHUDFreeCaseDivDisplay('hide');`);
		break;
	}
  }
  
  mp.events.add('MenuSetFraction', _0x253A3 => {
	HudMenuCEF.execute(`MenuTabSetFraction('${_0x253A3}');`);
  });
  global.GangwarFraction = 0;
  mp.events.add('changeGangwarFraction', _0x25763 => {
	GangwarFraction = parseInt(_0x25763);
  });
  let changeFracDaysLeft = 5;
  mp.events.add('changeFracDaysLeft', _0x2579F => {
	changeFracDaysLeft = parseInt(_0x2579F);
  });
  mp.events.add('GangwarNewFraction', _0x253A3 => {
	if (GangwarFraction != 0 && changeFracDaysLeft > 0) {
	  return HudMenuCEF.execute(`UnlockChangeFracBtn();`), HudMenuCEF.execute(`pushNotify('error', 'top-mid', 'Вы сможете сменить фракцию только через ${changeFracDaysLeft} дней', 1500);`);
	}
  
	if (player.dimension == 7 || player.dimension == 8 || player.dimension == 9 || player.dimension == 12 || inGangwar == true) {
	  return HudMenuCEF.execute(`UnlockChangeFracBtn();`), HudMenuCEF.execute(`pushNotify('error', 'top-mid', 'Необходимо выйти из Gangwar режима', 1500);`);
	}
  
	mp.events.callRemote('GangwarNewFraction', _0x253A3);
  });
  mp.events.add('UpdateDonateBalance', _0x257DB => {
	HudMenuCEF.execute(`SetGDCBalance('${_0x257DB}');`);
	BRMainCEF.execute(`changeBRCEFDonateBalance('${_0x257DB}')`);
  });
  mp.events.add('UnlockChangeFracBtn', () => {
	HudMenuCEF.execute(`UnlockChangeFracBtn();`);
  });
  global.DonateVehTestDrivePos = {
	x: 0,
	y: 0,
	z: 0
  };
  mp.events.add('DonateVehicleTestDrive', _0x258CB => {
	let player = mp.players.local;
  
	if (player.dimension != 8) {
	  return HudMenuCEF.execute(`pushNotify('error', 'top-mid', 'Вы должны находиться в Ghetto GANGWARE.', 5000);`);
	}
  
	if (inGreenZone == false) {
	  return HudMenuCEF.execute(`pushNotify('error', 'top-mid', 'Вы должны находиться в зелёной зоне.', 5000);`);
	}
  
	if (fractionRespawnZone != player.getVariable('FractionID')) {
	  return HudMenuCEF.execute(`pushNotify('error', 'top-mid', 'Вы должны находиться на территории респавна своей фракции.', 5000);`);
	}
  
	mp.game.ui.displayRadar(true);
	mp.players.local.setInvincible(false);
	mp.gui.cursor.visible = false;
	mp.game.cam.renderScriptCams(false, false, 0, false, false);
	UpdateAmmo(6, 9999);
	ChangeHUDKeysDisplay('open');
	ChangeHUDKillFeedDisplay('open');
	ChangeHUDFreeCaseDisplay('open');
	ChangeHUDRaitingDisplay('close');
	ShowChat();
	HudMenuCEF.execute(`ChangeMenuDisplay('Close');`);
	mp.events.callRemote('StartDonateVehicleTestDrive');
  
	if (spawnedveh != null) {
	  spawnedveh.destroy();
	}
  
	DonateVehTestDrivePos.x = player.position.x;
	DonateVehTestDrivePos.y = player.position.y;
	DonateVehTestDrivePos.z = player.position.z;
	lastspawnedveh = _0x258CB;
	spawnedveh = mp.vehicles.new(mp.game.joaat(`${_0x258CB}`), new mp.Vector3(player.position.x, player.position.y, player.position.z), {
	  numberPlate: 'GALAXYDM',
	  color: [12, 12],
	  dimension: 90000 + parseInt(player.remoteId)
	});
	spawnedveh.setHeading(167.4571533203125);
	spawnedveh.setEngineOn(true, true, true);
	spawnedveh.setDirtLevel(0);
	spawnedveh.setMod(11, 3);
	spawnedveh.setMod(12, 2);
	spawnedveh.setMod(13, 1);
	spawnedveh.setMod(18, 0);
	spawnedveh.setMod(40, 3);
	mp.game.invoke('F75B0D629E1C063D', mp.players.local.handle, spawnedveh.handle, -1);
  });
  global.ChatActive = false;
  mp.events.add('setchatactive', _0x25637 => {
	ChatActive = _0x25637;
  });
  
  function hideChat() {
	mp.gui.chat.activate(false);
	mp.gui.chat.show(false);
  }
  
  mp.events.add('PhoneSpawnOwnVehicle', (_0x258CB, _0x25C13, _0x25BD7, _0x25B9B, _0x25C4F) => {
	if (false && player.getVariable('adminlvl') != 10) {
	  return HudMenuCEF.execute(`pushNotify('error', 'top-mid', 'Нельзя спавнить машину так часто.', 5000);`);
	}
  
	if (inOfficeRentShapeZone != false) {
	  setTimeout(() => {}, 10000);
	  mp.game.audio.playSoundFromCoord(1, 'Enter_1st', player.position.x, player.position.y, player.position.z, 'GTAO_FM_Events_Soundset', false, 0, false);
	  mp.events.callRemote('PhoneOfficeSpawnOwnVehicle', _0x258CB, _0x25C13, _0x25BD7, _0x25B9B, _0x25C4F);
	}
  
	if (EMSData.inEMSRentShapeZone != false) {
	  setTimeout(() => {}, 10000);
	  mp.game.audio.playSoundFromCoord(1, 'Enter_1st', player.position.x, player.position.y, player.position.z, 'GTAO_FM_Events_Soundset', false, 0, false);
	  mp.events.callRemote('EMSPhoneOfficeSpawnOwnVehicle', _0x258CB, _0x25C13, _0x25BD7, _0x25B9B, _0x25C4F);
	}
  
	if (houseInteraction.inOwnHouseShape == true) {
	  setTimeout(() => {}, 10000);
	  mp.game.audio.playSoundFromCoord(1, 'Enter_1st', player.position.x, player.position.y, player.position.z, 'GTAO_FM_Events_Soundset', false, 0, false);
	  mp.events.callRemote('HouseSpawnOwnVehicle', _0x258CB, _0x25C13, _0x25BD7, _0x25B9B, _0x25C4F);
	}
  
	if (inOfficeRentShapeZone == false && EMSData.inEMSRentShapeZone == false && houseInteraction.inOwnHouseShape == false) {
	  if (fractionRespawnZone != player.getVariable('FractionID')) {
		return HudMenuCEF.execute(`pushNotify('error', 'top-mid', 'Вы должны находиться на территории респавна своей фракции.', 5000);`);
	  }
  
	  setTimeout(() => {}, 10000);
	  mp.game.audio.playSoundFromCoord(1, 'Enter_1st', player.position.x, player.position.y, player.position.z, 'GTAO_FM_Events_Soundset', false, 0, false);
	  mp.events.callRemote('PhoneSpawnOwnVehicle', _0x258CB, _0x25C13, _0x25BD7, _0x25B9B, _0x25C4F);
	}
  });
  mp.events.add('VehicleSpawnedSound', (_0x25AE7, _0x25B23, _0x25B5F) => {
	mp.game.audio.playSoundFromCoord(1, 'Enter_Area', parseFloat(_0x25AE7), parseFloat(_0x25B23), parseFloat(_0x25B5F), 'DLC_Lowrider_Relay_Race_Sounds', false, 0, false);
  });
  mp.events.add('removeVehicleInList', _0x25BD7 => {
	PhoneCEF.execute(`removeVehicleInList('${_0x25BD7}');`);
	HudMenuCEF.execute(`GANGWARVehSell.removeVehicleForSell('${_0x25BD7}');`);
  });
  let seatsData = {
	event: 0,
	checked: 0
  };
  mp.events.add('enterVehSS', () => {
	seatsData.event++;
  });
  
  function checkVehAC() {
	setTimeout(() => {
	  if (seatsData.checked > seatsData.event) {}
	}, 2500);
  }
  
  setInterval(() => {
	if (player.vehicle && player.vehicle.getPedInSeat(-1) === player.handle && (player.dimension == 7 || player.dimension == 8 || player.dimension == 12 || inGangwar == true || inACarShop == 1 || inDonateVehTest == 1)) {
	  {
		mp.players.local.setConfigFlag(32, false);
		HudMenuCEF.execute('ChangeVehHud(1);');
	  }
  
	  let _0x25DF3 = mp.players.local.vehicle.getDoorLockStatus();
  
	  let _0x25E2F = player.vehicle.getSpeed() * 3.6;
  
	  HudMenuCEF.execute(`ChangeVehSpeed('${_0x25E2F}','1','${_0x25DF3}');`);
	} else {
	  HudMenuCEF.execute('ChangeVehHud(0);');
	  mp.players.local.setConfigFlag(32, false);
	}
  }, 500);
  mp.events.add('UpdateGhettoMoney', _0x25E6B => {
	HudMenuCEF.execute(`UpdateBalance(${_0x25E6B});`);
	RouletteBwsr.execute(`SetClassicBalance(${_0x25E6B});`);
	HudMenuCEF.execute(`GALAXYGames.GhettoMoneyBalance = '${parseInt(_0x25E6B).toDivide()}';`);
  });
  
  Number.prototype.toDivide = function () {
	var _0x25EA7 = String(Math.trunc(this));
  
	if (_0x25EA7.length <= 3) {
	  return _0x25EA7;
	}
  
	var _0x25F1F = 0;
	var _0x25EE3 = '';
  
	for (var _0x25367 = _0x25EA7.length - 1; _0x25367 >= 0; _0x25367--) {
	  _0x25EE3 = _0x25EA7.charAt(_0x25367) + _0x25EE3;
	  _0x25F1F++;
	}
  
	return _0x25EE3;
  };
  
  mp.events.add('UpdateGhettoMoneyAuth', _0x25E6B => {
	setTimeout(() => {
	  HudMenuCEF.execute(`UpdateBalance(${_0x25E6B});`);
	  RouletteBwsr.execute(`SetClassicBalance(${_0x25E6B});`);
	  HudMenuCEF.execute(`GALAXYGames.GhettoMoneyBalance = '${parseInt(_0x25E6B).toDivide()}';`);
	}, 5000);
  });
  mp.events.add('KillFeedPushNew', (_0x2600F, _0x25F97, _0x26087, _0x25FD3, _0x260C3) => {
	let _0x2604B = mp.players.atRemoteId(parseInt(_0x26087));
  
	let _0x25F5B = mp.players.atRemoteId(parseInt(_0x25FD3));
  
	if (!mp.players.exists(_0x2604B) || !mp.players.exists(_0x25F5B)) {
	  return;
	}
  
	HudMenuCEF.execute(`KillFeedPush('${_0x2600F}','${_0x25F97}','${_0x2604B.name}','${_0x25F5B.name}','${_0x260C3}')`);
  });
  
  function UpdateAmmo(_0x28FDF, _0x28FA3) {
	HudMenuCEF.execute(`UpdateAmmo('${_0x28FDF}','${_0x28FA3}');`);
  }
  
  function UpdateAmmoInClip(_0x28FDF) {
	HudMenuCEF.execute(`UpdateAmmoInClip('${_0x28FDF}');`);
  }
  
  mp.events.add('CustomChatSettingsSet', (_0x260FF, _0x2613B) => {
	mp.events.callRemote('ChatSettingsSetNew', parseInt(_0x260FF), parseFloat(_0x2613B));
  });
  mp.events.add('showHumanLabsAttentionBlock', () => {
	HudMenuCEF.execute('showHumanLabsAttentionBlock()');
  });
  mp.events.add('CEFShowShopRobbery', _0x26177 => {
	let _0x261B3 = parseInt(_0x26177);
  
	switch (_0x261B3) {
	  case 1:
		mp.game.ui.setNewWaypoint(22.414146423339844, -1107.059814453125);
		break;
  
	  case 2:
		mp.game.ui.setNewWaypoint(-161.45555114746094, -303.1899108886719);
		break;
  
	  case 8:
		mp.game.ui.setNewWaypoint(809.9359130859375, -2157.3798828125);
		break;
	}
  
	HudMenuCEF.execute(`showShopsRobberyAttentionBlock(${_0x26177});`);
  });
  mp.events.add('showGameWinnerAttentionBlock', _0x2622B => {
	HudMenuCEF.execute(`showGameWinnerAttentionBlock('${_0x2622B}')`);
  });
  mp.events.add('CEFShowHangarCapture', _0x26177 => {
	mp.game.ui.setNewWaypoint(-442.0998840332031, -1673.0345458984375);
	HudMenuCEF.execute(`hangarCaptureAttentionBlock(${_0x26177});`);
  });
  mp.events.add('CEFShowBunkerPush', () => {
	HudMenuCEF.execute(`bunkerPushAttentionBlock();`);
  });
  mp.events.add('setNewFreeCasesCountAuth', _0x254CF => {
	setTimeout(() => {
	  HudMenuCEF.execute(`setNewFreeCasesCount('${_0x254CF}')`);
	}, 5000);
  });
  mp.events.add('setNewFreeCasesCount', _0x254CF => {
	HudMenuCEF.execute(`setNewFreeCasesCount('${_0x254CF}')`);
  });
  mp.events.add('tryWriteBonusCode', _0x26267 => {
	mp.events.callRemote('tryWriteBonusCode', _0x26267);
  });