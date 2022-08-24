mp.events.add('DropInventoryItemInWareHouse', (_0x12A2A, _0x12A4E) => {
	if (FamilyWareHouseData.warehouseOpen == true) {
	  mp.events.callRemote('DropInventoryItemInFamilyWareHouse', _0x12A2A, _0x12A4E);
	} else {
	  mp.events.callRemote('DropInventoryItemInWareHouse', _0x12A2A, _0x12A4E);
	}
  });
  mp.events.add('DropInventoryItemFromWareHouse', (_0x12A2A, _0x12A4E) => {
	if (FamilyWareHouseData.warehouseOpen == true) {
	  mp.events.callRemote('DropInventoryItemFromFamilyWareHouse', _0x12A2A, _0x12A4E);
	} else {
	  mp.events.callRemote('DropInventoryItemFromWareHouse', _0x12A2A, _0x12A4E);
	}
  });
  mp.events.add('loadWareHouseList', (_0x12A72, _0x12A96) => {
	try {
	  hideChat();
  
	  if (houseInteraction.enterWareHouseShape != true) {
		return mp.gui.chat.push(`2`);
	  }
  
	  houseInteraction.wareHouseOpen = true;
  
	  let _0x12ABA = JSON.parse(_0x12A72);
  
	  InventoryCEF.execute(`clearWareHouseOwnInventory()`);
  
	  if (_0x12ABA != null && _0x12ABA != undefined) {
		InventoryCEF.execute(`changeHouseOwnInventoryLength('own','${_0x12ABA.length}')`);
		InventoryCEF.execute(`changeHouseOwnInventoryLength('max','${_0x12A96}')`);
  
		for (let i = 0; i < _0x12ABA.length; i++) {
		  InventoryCEF.execute(`addItemInWareHouseOwnInventory('${_0x12ABA[i].ID}','${_0x12ABA[i].ISrl}','0','1','0','0','${_0x12ABA.length}')`);
		}
	  } else {
		InventoryCEF.execute(`changeHouseOwnInventoryLength('own','0')`);
		InventoryCEF.execute(`changeHouseOwnInventoryLength('max','${_0x12A96}')`);
	  }
  
	  InventoryCEF.execute(`WareHouse.Active = 1`);
	  mp.gui.cursor.visible = true;
	  ChangeHUDKeysDisplay('hide');
	  ChangeHUDKillFeedDisplay('hide');
	  ChangeHUDFreeCaseDisplay('hide');
	  ChangeHUDRaitingDisplay('hide');
	  mp.game.ui.displayRadar(false);
	  mp.game.graphics.transitionToBlurred(50);
	} catch (e) {
	  mp.gui.chat.push(`${e}`);
	}
  });
  mp.events.add('WareHouseInventory_AddNewItem', (_0x12B92, _0x12BB6, _0x12B6E) => {
	InventoryCEF.execute(`addItemInWareHouseOwnInventory('${_0x12B92}','${_0x12BB6}','0','1','0','0','${_0x12B6E}')`);
  });
  mp.events.add('WareHouseOwnItemRemove', (_0x12B92, _0x12BB6, _0x12BDA, _0x12BFE) => {
	InventoryCEF.execute(`removeItemInOwnWareHouseInventory('${_0x12B92}','${_0x12BB6}','${_0x12BDA}','${_0x12BFE}')`);
  });
  mp.events.add('CloseWareHouseInventory', () => {
	if (houseInteraction.wareHouseOpen == true) {
	  houseInteraction.wareHouseOpen = false;
	  InventoryCEF.execute(`WareHouse.Active = 0`);
	  mp.game.graphics.transitionFromBlurred(200);
	  mp.gui.cursor.visible = false;
	  ChangeHUDKeysDisplay('open');
	  ChangeHUDKillFeedDisplay('open');
	  ChangeHUDFreeCaseDisplay('open');
	  mp.game.ui.displayRadar(true);
	  ShowChat();
	}
  
	if (FamilyWareHouseData.warehouseOpen == true) {
	  FamilyWareHouseData.warehouseOpen = false;
	  InventoryCEF.execute(`WareHouse.Active = 0`);
	  mp.game.graphics.transitionFromBlurred(200);
	  mp.gui.cursor.visible = false;
	  ChangeHUDKeysDisplay('open');
	  ChangeHUDKillFeedDisplay('open');
	  ChangeHUDFreeCaseDisplay('open');
	  mp.game.ui.displayRadar(true);
	  ShowChat();
	}
  });
  mp.events.add('Client:loadFamilyWareHouseList', (_0x12A72, _0x12A96) => {
	try {
	  if (FamilyWareHouseData.warehouseOpen == true) {
		return;
	  }
  
	  hideChat();
	  FamilyWareHouseData.warehouseOpen = true;
  
	  let _0x12ABA = JSON.parse(_0x12A72);
  
	  InventoryCEF.execute(`clearWareHouseOwnInventory()`);
  
	  if (_0x12ABA != null && _0x12ABA != undefined) {
		InventoryCEF.execute(`changeHouseOwnInventoryLength('own','${_0x12ABA.length}')`);
		InventoryCEF.execute(`changeHouseOwnInventoryLength('max','${_0x12A96}')`);
  
		for (let i = 0; i < _0x12ABA.length; i++) {
		  InventoryCEF.execute(`addItemInWareHouseOwnInventory('${_0x12ABA[i].ID}','${_0x12ABA[i].ISrl}','0','1','0','0','${_0x12ABA.length}')`);
		}
	  } else {
		InventoryCEF.execute(`changeHouseOwnInventoryLength('own','0')`);
		InventoryCEF.execute(`changeHouseOwnInventoryLength('max','${_0x12A96}')`);
	  }
  
	  InventoryCEF.execute(`WareHouse.Active = 1`);
	  mp.gui.cursor.visible = true;
	  ChangeHUDKeysDisplay('hide');
	  ChangeHUDKillFeedDisplay('hide');
	  ChangeHUDFreeCaseDisplay('hide');
	  ChangeHUDRaitingDisplay('hide');
	  mp.game.ui.displayRadar(false);
	  mp.game.graphics.transitionToBlurred(50);
	} catch (e) {
	  mp.gui.chat.push(`${e}`);
	}
  });