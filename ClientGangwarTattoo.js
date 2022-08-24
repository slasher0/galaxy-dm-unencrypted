const localplayer = mp.players.local;
global.inTattooShop = 0;
mp.events.add('changeInTattooShop', _0x12B26 => {
  inTattooShop = parseInt(_0x12B26);
});
mp.events.add('GangwarTattooShopStart', () => {
  mp.gui.chat.activate(false);
  mp.gui.chat.show(false);
  mp.gui.cursor.visible = true;
  ChangeHUDKeysDisplay('hide');
  ChangeHUDKillFeedDisplay('hide');
  ChangeHUDFreeCaseDisplay('hide');
  mp.game.ui.displayRadar(false);
  TattooCamera = mp.cameras.new('TattooShop', new mp.Vector3(1321.9349365234375, -1651.9871826171875, 52.22500915527344), new mp.Vector3(90, 90, 90), 60);
  TattooCamera.pointAtCoord(1321.703125, -1656.8448486328125, 52.47805480957031);
  mp.game.cam.renderScriptCams(true, false, 0, true, false);
  TattooCamera.setActive(true);
  localplayer.freezePosition(true);
  localplayer.setComponentVariation(1, 0, 0, 0);
  localplayer.setComponentVariation(4, 21, 0, 0);
  localplayer.setComponentVariation(8, 15, 0, 0);
  localplayer.setComponentVariation(11, 15, 0, 0);
  localplayer.setComponentVariation(3, 15, 0, 0);
  localplayer.setComponentVariation(1, 0, 0, 0);
  localplayer.setComponentVariation(6, 34, 0, 0);
  HudMenuCEF.execute(`changeTattooShopDisplay('open');`);
});
mp.events.add('GangwarTattooShopExit', () => {
  localplayer.clearDecorations();
  localplayer.freezePosition(false);
  mp.game.ui.displayRadar(true);
  localplayer.setInvincible(false);
  mp.gui.cursor.visible = false;
  mp.game.cam.renderScriptCams(false, false, 0, false, false);
  ChangeHUDKeysDisplay('open');
  ChangeHUDKillFeedDisplay('open');
  ChangeHUDFreeCaseDisplay('open');
  ChangeHUDRaitingDisplay('hide');
  ShowChat();
  HudMenuCEF.execute(`changeTattooShopDisplay('close');`);
  mp.events.callRemote('TattooShopStop');
});
mp.events.add('setTattooInShop', (_0x17302, _0x132E2) => {
  localplayer.clearDecorations();

  if (GangwarTattooList.length > 0) {
    for (let i = 0; i < GangwarTattooList.length; i++) {
      localplayer.setDecoration(mp.game.joaat(`${GangwarTattooList[i].Col}`), mp.game.joaat(`${GangwarTattooList[i].OvM}`));
    }
  }

  localplayer.setDecoration(mp.game.joaat(`${_0x17302}`), mp.game.joaat(`${_0x132E2}`));
});
mp.events.add('SetTattooData', _0x1734A => {
  if (_0x1734A == [] || _0x1734A == null || _0x1734A == undefined) {
    GangwarTattooList = [];
  } else {
    let _0x17326 = JSON.parse(_0x1734A);

    GangwarTattooList = _0x17326;
  }
});
global.GangwarTattooList = [];
mp.events.add('buyTattooInShop', (_0x17302, _0x132E2, _0x12C8E) => {
  mp.events.callRemote('buyTattooInShop', _0x17302, _0x132E2, _0x12C8E);
});
mp.events.add('GangwarTattooAddNew', (_0x1736E, _0x173DA, _0x173B6, _0x17392) => {
  GangwarTattooList.push({
    Col: `${_0x1736E}`,
    OvM: `${_0x173DA}`,
    OvFM: `${_0x173B6}`,
    Name: `${_0x17392}`
  });
});