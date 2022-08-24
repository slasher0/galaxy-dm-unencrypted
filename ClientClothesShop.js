var _$_ab33 = ["cefopened", "ClothesShopStart", "0xADF692B254977C0C", "handle", "local", "players", "invoke", "game", "execute", "FIBClothesShopCamera", "ClothesFIB", "Vector3", "new", "cameras", "pointAtCoord", "renderScriptCams", "cam", "setActive", "activate", "chat", "gui", "displayRadar", "ui", "show", "visible", "cursor", "callRemote", "events", "freezePosition", "hide", "close", "add", "SetPlayerFraction", "FractionID", "getVariable", "SetPlayerGender", "SetPlayerGenderWardrobe", "SetInventoryClothesMassive", "parse", "ID", "IiD", "Fr", "forEach", "ClothesShopBuyCloth", "ClothesShopBuyNewClothes", "AddInFullInventoryMassive", "ClothesWardrobeItemPickProp", "ClothesWardrobeSetProp", "ClothesWardrobeItemPickMore", "ClothesWardrobeSetClothes", "ClothesWardrobeStart", "StopClothesShop", "ClothesShopStop", "open", "StopClothesWardrobe", "ChangeVehHud(0);", "ClothesWardrobeStop", "SetDefaultClothesMassive", "FinishDeafultClothesJson", "SetPlayerDeafultClothes", "FinishDeafultClothesJsonFemale", "SetPlayerDeafultClothesFemale", "FinishInventoryClothesJson", "SetPlayerInventoryClothes", "ClothesShopItemPickProp", "setPropIndex", "ClothesShopPickMore", "setComponentVariation", "null", "ClothesShopSetCamPoint", "PropShopPick", ",", "split", "entityStreamIn", "__componentSync", "addDataHandler", "type", "player", "hasOwnProperty", "drawable", "texture"];
global.cefopened = false;
mp.events.add('ClothesShopStart', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1569615261, true);
  cefopened = true;
  HudMenuCEF.execute(`ChangeGangwarHud('close')`);
  global.FIBClothesShopCamera = mp.cameras.new('ClothesFIB', new mp.Vector3(426.88671875, -800.1285400390625, 29.491147994995117), new mp.Vector3(90, 90, 90), 50);
  FIBClothesShopCamera.pointAtCoord(429.5664367675781, -800.0476684570312, 29.491147994995117);
  mp.game.cam.renderScriptCams(true, false, 0, true, false);
  FIBClothesShopCamera.setActive(true);
  mp.gui.chat.activate(false);
  mp.game.ui.displayRadar(false);
  mp.gui.chat.show(false);
  mp.gui.cursor.visible = true;
  mp.events.callRemote('ClothesShopStart');
  player.freezePosition(true);
  ChangeHUDKeysDisplay('hide');
  ChangeHUDKillFeedDisplay('hide');
  ChangeHUDFreeCaseDisplay('hide');
  ChangeHUDRaitingDisplay('close');
  ClothesShopCef.execute(`ClothesShop.ShopActive = 1`);
  ClothesShopCef.execute(`ClothesWardrobe.WardrobeActive = 0`);
});
mp.events.add('SetPlayerFraction', () => {
  let _0x153EE = player.getVariable('FractionID');

  ClothesShopCef.execute(`ClothesShop.Fraction = ${parseInt(_0x153EE)}`);
  ClothesShopCef.execute(`ClothesWardrobe.Fraction = ${parseInt(_0x153EE)}`);
});
mp.events.add('SetPlayerGender', _0x15412 => {
  let _0x14CC2;

  if (_0x15412 == 1885233650) {
    _0x14CC2 = 1;
  } else {
    if (_0x15412 == 2627665920) {
      _0x14CC2 = 2;
    }
  }

  ClothesShopCef.execute(`ClothesShop.SetPlayerGender(${_0x14CC2})`);
  ClothesShopCef.execute(`ClothesShop.setMassives()`);
});
mp.events.add('SetPlayerGenderWardrobe', _0x15412 => {
  let _0x14CC2;

  if (_0x15412 == 1885233650) {
    _0x14CC2 = 1;
  } else {
    if (_0x15412 == 2627665920) {
      _0x14CC2 = 2;
    }
  }

  ClothesShopCef.execute(`ClothesWardrobe.SetPlayerGender(${_0x14CC2})`);
  ClothesShopCef.execute(`ClothesWardrobe.setWardrobeMassives()`);
});
mp.events.add('SetInventoryClothesMassive', _0x1545A => {
  let _0x15436 = JSON.parse(_0x1545A);

  setTimeout(() => {
    _0x15436.forEach(_0x1547E => {
      ClothesShopCef.execute(`SetInventoryClothesMassive(${_0x1547E.ID},${_0x1547E.IiD},${_0x1547E.Fr});`);
    });
  }, 3000);
});
mp.events.add('ClothesShopBuyCloth', (_0x154C6, _0x154EA, _0x154A2) => {
  mp.events.callRemote('ClothesShopBuyNewClothes', _0x154C6, _0x154EA, _0x154A2);
});
mp.events.add('AddInFullInventoryMassive', (_0x1550E, _0x1559E, _0x155E6, _0x15556, _0x155C2, _0x1560A, _0x154A2, _0x15532, _0x1557A) => {
  ClothesShopCef.execute(`AddInFullInventoryMassive('${_0x1550E}','${_0x1559E}','${_0x155E6}','${_0x15556}','${_0x155C2}','${_0x1560A}','${_0x154A2}','${_0x15532}','${_0x1557A}');`);
});
mp.events.add('ClothesWardrobeItemPickProp', (_0x1562E, _0x12A2A, _0x15652, _0x15556, _0x15676) => {
  FIBClothesShopCamera.pointAtCoord(429.5664367675781, -800.0476684570312, 29.491147994995117);
  mp.events.callRemote('ClothesWardrobeSetProp', _0x1562E, _0x12A2A, _0x15652, _0x15556, _0x15676);
});
mp.events.add('ClothesWardrobeItemPickMore', (_0x1562E, _0x12A2A, _0x15652, _0x15556, _0x15676, _0x1569A) => {
  if (_0x15652 == 6) {
    FIBClothesShopCamera.pointAtCoord(429.5664367675781, -800.0476684570312, 28.491147994995117);
  } else {
    FIBClothesShopCamera.pointAtCoord(429.5664367675781, -800.0476684570312, 29.491147994995117);
  }

  mp.events.callRemote('ClothesWardrobeSetClothes', _0x1562E, _0x12A2A, _0x15652, _0x15556, _0x15676, _0x1569A);
});
mp.events.add('ClothesWardrobeStart', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1569615261, true);
  cefopened = true;
  HudMenuCEF.execute(`ChangeGangwarHud('close')`);
  global.FIBClothesShopCamera = mp.cameras.new('ClothesFIB', new mp.Vector3(426.88671875, -800.1285400390625, 29.491147994995117), new mp.Vector3(90, 90, 90), 50);
  FIBClothesShopCamera.pointAtCoord(429.5664367675781, -800.0476684570312, 29.491147994995117);
  mp.game.cam.renderScriptCams(true, false, 0, true, false);
  FIBClothesShopCamera.setActive(true);
  mp.gui.chat.activate(false);
  mp.game.ui.displayRadar(false);
  mp.gui.chat.show(false);
  mp.gui.cursor.visible = true;
  mp.events.callRemote('ClothesWardrobeStart');
  player.freezePosition(true);
  ChangeHUDKeysDisplay('hide');
  ChangeHUDKillFeedDisplay('hide');
  ChangeHUDFreeCaseDisplay('hide');
  ChangeHUDRaitingDisplay('close');
  ClothesShopCef.execute(`ClothesShop.ShopActive = 0`);
  ClothesShopCef.execute(`ClothesWardrobe.WardrobeActive = 1`);
});
mp.events.add('StopClothesShop', () => {
  HudMenuCEF.execute(`ChangeGangwarHud('open')`);
  cefopened = false;
  FIBClothesShopCamera.setActive(false);
  mp.game.cam.renderScriptCams(false, false, 0, false, false);
  mp.gui.chat.activate(true);
  mp.game.ui.displayRadar(true);
  mp.gui.chat.show(true);
  mp.gui.cursor.visible = false;
  mp.events.callRemote('ClothesShopStop');
  player.freezePosition(false);
  ChangeHUDKeysDisplay('open');
  ChangeHUDKillFeedDisplay('open');
  ChangeHUDFreeCaseDisplay('open');
  ChangeHUDRaitingDisplay('close');
  ClothesShopCef.execute(`ClothesShop.ShopActive = 0`);
  ClothesShopCef.execute(`ClothesWardrobe.WardrobeActive = 0`);
});
mp.events.add('StopClothesWardrobe', () => {
  HudMenuCEF.execute(`ChangeGangwarHud('open')`);
  cefopened = false;
  FIBClothesShopCamera.setActive(false);
  mp.game.cam.renderScriptCams(false, false, 0, false, false);
  mp.gui.chat.activate(true);
  mp.game.ui.displayRadar(true);
  mp.gui.chat.show(true);
  ClothesShopCef.execute('ChangeVehHud(0);');
  mp.gui.cursor.visible = false;
  mp.events.callRemote('ClothesWardrobeStop');
  player.freezePosition(false);
  ClothesShopCef.execute(`ClothesShop.ShopActive = 0`);
  ClothesShopCef.execute(`ClothesWardrobe.WardrobeActive = 0`);
});
mp.events.add('SetDefaultClothesMassive', (_0x1545A, _0x158FE) => {
  let _0x158DA = JSON.parse(_0x1545A);

  let _0x158B6 = JSON.parse(_0x158FE);

  setTimeout(() => {
    _0x158DA.forEach(_0x1547E => {
      ClothesShopCef.execute(`SetDefaultClothesMassive(${_0x1547E.ID},${_0x1547E.IiD},${_0x1547E.Fr});`);
    });

    _0x158B6.forEach(_0x1547E => {
      ClothesShopCef.execute(`SetDefaultClothesMassiveFemale(${_0x1547E.ID},${_0x1547E.IiD},${_0x1547E.Fr});`);
    });
  }, 3000);
});
mp.events.add('FinishDeafultClothesJson', _0x15946 => {
  mp.events.callRemote('SetPlayerDeafultClothes', _0x15946);
});
mp.events.add('FinishDeafultClothesJsonFemale', _0x15946 => {
  mp.events.callRemote('SetPlayerDeafultClothesFemale', _0x15946);
});
mp.events.add('FinishInventoryClothesJson', _0x1545A => {
  mp.events.callRemote('SetPlayerInventoryClothes', _0x1545A);
});
mp.events.add('ClothesShopItemPickProp', (_0x15652, _0x14A3A, _0x14A82, _0x1596A) => {
  FIBClothesShopCamera.pointAtCoord(429.5664367675781, -800.0476684570312, 29.491147994995117);
  player.setPropIndex(parseInt(_0x15652), parseInt(_0x14A3A), parseInt(_0x14A82), true);
});
mp.events.add('ClothesShopPickMore', (_0x15652, _0x14A3A, _0x14A82, _0x1596A) => {
  player.setComponentVariation(parseInt(_0x15652), parseInt(_0x14A3A), parseInt(_0x14A82), 0);

  if (_0x1596A != null && _0x1596A != 'null' && _0x1596A != undefined) {
    player.setComponentVariation(3, parseInt(_0x1596A), 0, 0);
  }

  if (_0x15652 == 6) {
    FIBClothesShopCamera.pointAtCoord(429.5664367675781, -800.0476684570312, 28.491147994995117);
  } else {
    FIBClothesShopCamera.pointAtCoord(429.5664367675781, -800.0476684570312, 29.491147994995117);
  }
});
mp.events.add('ClothesShopSetCamPoint', _0x15652 => {
  if (_0x15652 == 5) {
    FIBClothesShopCamera.pointAtCoord(429.5664367675781, -800.0476684570312, 28.491147994995117);
  } else {
    FIBClothesShopCamera.pointAtCoord(429.5664367675781, -800.0476684570312, 29.491147994995117);
  }
});
mp.events.add('PropShopPick', (_0x12E1A, _0x14A3A, _0x159D6) => {
  let _0x1598E;

  let _0x159B2 = _0x159D6.split(',');

  let _0x153EE = player.getVariable('FractionID');

  switch (parseInt(_0x153EE)) {
    case 1:
      _0x1598E = _0x159B2[0];
      break;

    case 2:
      _0x1598E = _0x159B2[1];
      break;

    case 3:
      _0x1598E = _0x159B2[2];
      break;

    case 4:
      _0x1598E = _0x159B2[3];
      break;

    case 5:
      _0x1598E = _0x159B2[4];
      break;

    case 6:
      _0x1598E = _0x159B2[5];
      break;
  }

  FIBClothesShopCamera.pointAtCoord(429.5664367675781, -800.0476684570312, 29.491147994995117);
  player.setPropIndex(parseInt(_0x12E1A), parseInt(_0x14A3A), parseInt(_0x1598E), true);
});
mp.events.add('setComponentVariation', (_0x15A66, _0x14A3A, _0x14A82) => {
  mp.players.local.setComponentVariation(_0x15A66, _0x14A3A, _0x14A82, 2);
});
mp.events.add('entityStreamIn', syncEntityComponents);
mp.events.addDataHandler('__componentSync', syncEntityComponents);

function syncEntityComponents(_0x12C22) {
  if (_0x12C22.type === 'player' && _0x12C22.handle !== 0) {
    if (!_0x12C22.getVariable('__componentSync')) {
      return;
    }

    if (_0x12C22.getVariable('__componentSync') === false || !JSON.parse(_0x12C22.getVariable('__componentSync'))) {
      return;
    }

    let _0x17D46 = JSON.parse(_0x12C22.getVariable('__componentSync'));

    for (let _0x15A66 in _0x17D46) {
      if (_0x17D46.hasOwnProperty(_0x15A66)) {
        _0x12C22.setComponentVariation(parseInt(_0x15A66), _0x17D46[_0x15A66].drawable, _0x17D46[_0x15A66].texture, 2);
      }
    }
  }
}