mp.events.add('saveclothes', () => {
	let _0x1518A = mp.players.local.getDrawableVariation(1);
  
	let _0x151AE = mp.players.local.getTextureVariation(1);
  
	let _0x152AA = mp.players.local.getDrawableVariation(11);
  
	let _0x152CE = mp.players.local.getTextureVariation(11);
  
	let _0x1521A = mp.players.local.getDrawableVariation(8);
  
	let _0x1523E = mp.players.local.getTextureVariation(8);
  
	let _0x15142 = mp.players.local.getDrawableVariation(4);
  
	let _0x15166 = mp.players.local.getTextureVariation(4);
  
	let _0x15262 = mp.players.local.getDrawableVariation(6);
  
	let _0x15286 = mp.players.local.getTextureVariation(6);
  
	let _0x152F2 = mp.players.local.getDrawableVariation(3);
  
	let _0x15316 = mp.players.local.getTextureVariation(3);
  
	let _0x151D2 = mp.players.local.getPropIndex(0);
  
	let _0x151F6 = mp.players.local.getPropTextureIndex(0);
  
	mp.events.callRemote('saveclothes', _0x1518A, _0x151AE, _0x152AA, _0x152CE, _0x1521A, _0x1523E, _0x15142, _0x15166, _0x15262, _0x15286, _0x152F2, _0x15316, _0x151D2, _0x151F6);
  });
  mp.events.add('loaddefclothes', () => {
	if (player.dimension >= 90000) {
	  return mp.events.call('emsghud', [`Надеть сохранённую одежду можно только в ДМ режимах.`]);
	}
  
	if (player.dimension == 400) {
	  return mp.events.call('emsghud', [`Надеть сохранённую одежду можно только в ДМ режимах.`]);
	}
  
	if (player.dimension == 6000) {
	  return mp.events.call('emsghud', [`Надеть сохранённую одежду можно только в ДМ режимах.`]);
	}
  
	if (player.dimension == 8) {
	  return mp.events.call('emsghud', [`Надеть сохранённую одежду можно только в ДМ режимах.`]);
	}
  
	if (player.dimension == 9) {
	  return mp.events.call('emsghud', [`Надеть сохранённую одежду можно только в ДМ режимах.`]);
	}
  
	if (player.dimension > 6) {
	  return mp.events.call('emsghud', [`Надеть сохранённую одежду можно только в ДМ режимах.`]);
	}
  
	mp.events.callRemote('onclothes');
	mp.events.call('smsghud', [`Вы успешно переоделись в стандартные вещи!`]);
  });
  mp.events.add('openClothesSets', () => {
	if (player.dimension == 8) {
	  return mp.events.call('emsghud', [`Сначала выйдите из Ghetto режима.`]);
	}
  
	if (player.dimension == 9) {
	  return mp.events.call('emsghud', [`Сначала выйдите из Ghetto режима.`]);
	}
  
	if (inACarShop == 1) {
	  return mp.events.call('emsghud', [`Сначала выйдите из Ghetto режима.`]);
	}
  
	if (playerInTrainingGround == true) {
	  return mp.events.call('emsghud', [`Сначала выйдите из тренировочного режима.`]);
	}
  
	mp.game.cam.renderScriptCams(true, false, 0, true, false);
	ClothesCamera = mp.cameras.new('ClothesSetsCamera', new mp.Vector3(-1.4267226457595825, -688.6790771484375, 251.11358947753906), new mp.Vector3(0, 0, 0), 45);
	ClothesCamera.pointAtCoord(-3.863402843475342, -690.0529174804688, 250.41358947753906);
	ClothesCamera.setActive(true);
	mp.game.cam.renderScriptCams(true, false, 0, true, false);
	global.clothessets = mp.browsers.new('package://cefs/cefclothes/index.html');
	mp.game.ui.displayRadar(false);
	mp.gui.chat.show(false);
	mp.gui.cursor.visible = true;
	mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1569615261, true);
	player.freezePosition(true);
	mp.events.callRemote('ClothesSetsMenu');
	mp.events.callRemote('setnotmenuvariable');
	HudMenuCEF.execute(`ChangeMenuDisplay('Close');`);
  });
  mp.events.add('femaleclothes', _0x1533A => {
	mp.events.callRemote(`femclothes${_0x1533A}`);
  });
  mp.events.add('maleclothes', _0x1535E => {
	mp.events.callRemote(`mclothes${_0x1535E}`);
  });
  mp.events.add('clothescamerasetcord', (_0x14ACA, _0x14AA6) => {
	ClothesCamera.setCoord(-1.4267226457595825, -688.6790771484375 + parseFloat(_0x14ACA), 250.41358947753906 + parseFloat(_0x14AA6));
  });
  mp.events.add('clothescamerahg', _0x14AEE => {
	ClothesCamera.setCoord(-1.4267226457595825, -688.6790771484375, 250.41358947753906 + parseFloat(_0x14AEE));
  });
  mp.events.add('clothescameratime', () => {
	mp.game.time.setClockTime(21, 0, 0);
  });
  mp.events.add('clothessetexit', () => {
	mp.events.callRemote('clothessetsexit');
	clothessets.destroy();
	mp.game.cam.renderScriptCams(false, false, 0, false, false);
	mp.game.ui.displayRadar(true);
	mp.gui.cursor.visible = false;
	player.freezePosition(false);
  });