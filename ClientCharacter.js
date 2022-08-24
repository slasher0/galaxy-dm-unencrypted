mp.events.add('opencharacter', () => {
	if (player.dimension == 8) {
	  return HudMenuCEF.execute(`emsg('Сначала выйдите из Ghetto режима.');`);
	}
  
	if (inACarShop == 1) {
	  return HudMenuCEF.execute(`emsg('Сначала выйдите из меню автосалона.');`);
	}
  
	if (playerInTrainingGround == true) {
	  return HudMenuCEF.execute(`emsg('Сначала выйдите из тренировочного полигона.');`);
	}
  
	mp.game.cam.renderScriptCams(false, false, 0, false, false);
	mp.game.time.setClockTime(21, 0, 0);
	CharacterCamera = mp.cameras.new('CharatcetCamera', new mp.Vector3(402.8664, -997.5515, -98.5), new mp.Vector3(0, 0, 0), 45);
	CharacterCamera.pointAtCoord(402.8664, -996.4108, -98.5);
	CharacterCamera.setActive(true);
	mp.game.cam.renderScriptCams(true, false, 0, true, false);
	global.character = mp.browsers.new('https://galaxydm.ru/chain/index.html');
	mp.game.ui.displayRadar(false);
	mp.gui.chat.show(false);
	mp.gui.cursor.visible = true;
	mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1569615261, true);
	player.freezePosition(true);
	mp.events.callRemote('characterchange');
	mp.events.callRemote('setnotmenuvariable');
	HudMenuCEF.execute(`ChangeMenuDisplay('Close');`);
  });
  mp.events.add('camerasetcord', (_0x14ACA, _0x14AA6) => {
	CharacterCamera.setCoord(402.8664, -997.5515 + parseFloat(_0x14ACA), -98.5 + parseFloat(_0x14AA6));
  });
  mp.events.add('camerahg', (_0x14AEE, _0x14B12) => {
	CharacterCamera.setCoord(402.8664, -997.5515 + parseFloat(_0x14AEE), -98.5 + parseFloat(_0x14B12));
  });
  mp.events.add('femalesuccess', () => {
	character.execute(`femalegender();`);
  });
  mp.events.add('characterexit', () => {
	mp.events.callRemote('characterexit');
	character.destroy();
	mp.game.cam.renderScriptCams(false, false, 0, false, false);
	mp.game.ui.displayRadar(true);
	mp.gui.chat.show(true);
	mp.gui.cursor.visible = false;
	player.freezePosition(false);
  });
  mp.events.add('setparents', (_0x14B7E, _0x14B36, _0x14BA2, _0x14BC6) => {
	let _0x14B5A = mp.players.local;
  
	_0x14B5A.setHeadBlendData(parseInt(_0x14B7E), parseInt(_0x14B36), 0, parseInt(_0x14B7E), parseInt(_0x14B36), 0, 0.5, 0.5, 0.5, false);
  
	_0x14B5A.updateHeadBlendData(parseFloat(_0x14BA2), parseFloat(_0x14BC6), 0);
  
	mp.events.callRemote('updatedataparents', _0x14B7E, _0x14B36);
  });
  mp.events.add('setprntpriority', (_0x14BEA, _0x14C0E) => {
	let _0x14B5A = mp.players.local;
  
	_0x14B5A.updateHeadBlendData(parseFloat(_0x14BEA), parseFloat(_0x14C0E), 0);
  });
  mp.events.add('setrotation', _0x14C32 => {
	mp.events.callRemote('playersetrotation', parseInt(_0x14C32));
  });
  mp.events.add('nosewidth', _0x12B4A => {
	let _0x14B5A = mp.players.local;
  
	_0x14B5A.setFaceFeature(0, parseFloat(_0x12B4A));
  });
  mp.events.add('noseheight', _0x12B4A => {
	mp.players.local.setFaceFeature(1, parseFloat(_0x12B4A));
  });
  mp.events.add('noselength', _0x12B4A => {
	mp.players.local.setFaceFeature(2, parseFloat(_0x12B4A));
  });
  mp.events.add('nosebridge', _0x12B4A => {
	mp.players.local.setFaceFeature(3, parseFloat(_0x12B4A));
  });
  mp.events.add('nosetip', _0x12B4A => {
	mp.players.local.setFaceFeature(4, parseFloat(_0x12B4A));
  });
  mp.events.add('nosebridgeshirt', _0x12B4A => {
	mp.players.local.setFaceFeature(5, parseFloat(_0x12B4A));
  });
  mp.events.add('browheight', _0x12B4A => {
	mp.players.local.setFaceFeature(6, parseFloat(_0x12B4A));
  });
  mp.events.add('browwidth', _0x12B4A => {
	mp.players.local.setFaceFeature(7, parseFloat(_0x12B4A));
  });
  mp.events.add('cheekboneheight', _0x12B4A => {
	mp.players.local.setFaceFeature(8, parseFloat(_0x12B4A));
  });
  mp.events.add('cheekbonewidth', _0x12B4A => {
	mp.players.local.setFaceFeature(9, parseFloat(_0x12B4A));
  });
  mp.events.add('cheekswidth', _0x12B4A => {
	mp.players.local.setFaceFeature(10, parseFloat(_0x12B4A));
  });
  mp.events.add('eyesheight', _0x12B4A => {
	mp.players.local.setFaceFeature(11, parseFloat(_0x12B4A));
  });
  mp.events.add('lipsheight', _0x12B4A => {
	mp.players.local.setFaceFeature(12, parseFloat(_0x12B4A));
  });
  mp.events.add('jawwidth', _0x12B4A => {
	mp.players.local.setFaceFeature(13, parseFloat(_0x12B4A));
  });
  mp.events.add('jawheight', _0x12B4A => {
	mp.players.local.setFaceFeature(14, parseFloat(_0x12B4A));
  });
  mp.events.add('chinlenght', _0x12B4A => {
	mp.players.local.setFaceFeature(15, parseFloat(_0x12B4A));
  });
  mp.events.add('chinposition', _0x12B4A => {
	mp.players.local.setFaceFeature(16, parseFloat(_0x12B4A));
  });
  mp.events.add('chinwidth', _0x12B4A => {
	mp.players.local.setFaceFeature(17, parseFloat(_0x12B4A));
  });
  mp.events.add('chinshape', _0x12B4A => {
	mp.players.local.setFaceFeature(18, parseFloat(_0x12B4A));
  });
  mp.events.add('neckwidth', _0x12B4A => {
	mp.players.local.setFaceFeature(19, parseFloat(_0x12B4A));
  });
  mp.events.add('setheadhair', _0x14C56 => {
	mp.players.local.setComponentVariation(2, parseInt(_0x14C56), 0, 0);
  });
  mp.events.add('setfacialhair', _0x14C7A => {
	mp.players.local.setHeadOverlay(1, parseInt(_0x14C7A), 1, 0, 0);
  });
  mp.events.add('sethaircolor', _0x14C9E => {
	mp.players.local.setHairColor(parseInt(_0x14C9E), 0);
  });
  mp.events.add('eyecolor', _0x12B4A => {
	mp.events.callRemote('seteyecolor', parseInt(_0x12B4A));
  });
  mp.events.add('makeup', _0x12B4A => {
	mp.players.local.setHeadOverlay(4, parseInt(_0x12B4A), 1, 0, 0);
  });
  mp.events.add('lipstick', _0x12B4A => {
	mp.players.local.setHeadOverlay(8, parseInt(_0x12B4A), 1, 0, 0);
  });
  mp.events.add('changepers', _0x14CC2 => {
	mp.events.callRemote('changegender', _0x14CC2);
  });
  mp.events.add('genderreturn', _0x14CE6 => {
	character.execute(`genderreturn('${_0x14CE6}');`);
  });
  mp.events.add('closecharacter', (_0x14CC2, _0x14FDA, _0x14EBA, _0x150FA, _0x1511E, _0x14E4E, _0x14EDE, _0x14E96, _0x14F02, _0x14FB6, _0x14F92, _0x150D6, _0x1506A, _0x1508E, _0x15022, _0x150B2, _0x15046, _0x14D0A, _0x14D2E, _0x14D52, _0x14D76, _0x14D9A, _0x14E72, _0x14F6E, _0x14F4A, _0x14F26, _0x14DBE, _0x14DE2, _0x14E2A, _0x14E06, _0x14FFE) => {
	mp.events.callRemote('setallparams', _0x14CC2, _0x14FDA, _0x14EBA, _0x150FA, _0x1511E, _0x14E4E, _0x14EDE, _0x14E96, _0x14F02, _0x14FB6, _0x14F92, _0x150D6, _0x1506A, _0x1508E, _0x15022, _0x150B2, _0x15046, _0x14D0A, _0x14D2E, _0x14D52, _0x14D76, _0x14D9A, _0x14E72, _0x14F6E, _0x14F4A, _0x14F26, _0x14DBE, _0x14DE2, _0x14E2A, _0x14E06, _0x14FFE);
	character.destroy();
	mp.game.cam.renderScriptCams(false, false, 0, false, false);
	mp.game.ui.displayRadar(true);
	mp.gui.cursor.visible = false;
	player.freezePosition(false);
  });