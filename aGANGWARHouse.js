global.houseInteraction = {
	enterHouseShape: false,
	currentHouseShape: null,
	houseInfoOpen: false,
	exitHouseShape: false,
	CurrentExitHouseShape: null,
	inOwnHouseShape: false,
	playerHouseBlip: null,
	playerHouseID: null,
	enterWareHouseShape: false,
	currentWareHouse: null,
	wareHouseOpen: false
  };
  mp.events.add('playerEnterColshape', shape => {
	if (shape.isPlayerHouse == true) {
	  houseInteraction.inOwnHouseShape = true;
	}
  });
  mp.events.add('changeHouseInteractionData', (_0x12B26, _0x12B4A) => {
	switch (_0x12B26) {
	  case 'enterHouseShape':
		if (_0x12B4A != false) {
		  houseInteraction.enterHouseShape = true;
		  houseInteraction.currentHouseShape = parseInt(_0x12B4A);
		} else {
		  houseInteraction.enterHouseShape = false;
		  houseInteraction.currentHouseShape = null;
  
		  if (houseInteraction.houseInfoOpen == true) {
			houseInteraction.houseInfoOpen = false;
			HudMenuCEF.execute(`GANGWARHouse.Active = 0`);
			mp.gui.cursor.visible = false;
			ShowChat();
		  }
		}
  
		break;
  
	  case 'exitHouseShape':
		if (_0x12B4A != false) {
		  houseInteraction.exitHouseShape = true;
		  houseInteraction.CurrentExitHouseShape = parseInt(_0x12B4A);
		} else {
		  houseInteraction.exitHouseShape = false;
		  houseInteraction.CurrentExitHouseShape = null;
		}
  
		break;
  
	  case 'enterWareHouseShape':
		if (_0x12B4A != false) {
		  houseInteraction.enterWareHouseShape = true;
		  houseInteraction.currentWareHouse = parseInt(_0x12B4A);
		} else {
		  houseInteraction.enterWareHouseShape = false;
		  houseInteraction.currentWareHouse = null;
  
		  if (houseInteraction.wareHouseOpen == true) {
			houseInteraction.wareHouseOpen = false;
			InventoryCEF.execute(`WareHouse.Active = 0`);
			mp.game.graphics.transitionFromBlurred(200);
			mp.gui.cursor.visible = false;
			ChangeHUDKeysDisplay('open');
			ChangeHUDKillFeedDisplay('open');
			ChangeHUDFreeCaseDisplay('open');
			ShowChat();
			mp.game.ui.displayRadar(true);
		  }
		}
  
		break;
	}
  });
  mp.events.add('playerExitColshape', shape => {
	if (shape.isPlayerHouse == true) {
	  houseInteraction.inOwnHouseShape = false;
	}
  });
  mp.keys.bind(0x45, false, function () {
	if (inGangwar != true) {
	  return;
	}
  
	if (mp.gui.cursor.visible || ChatActive) {
	  return;
	}
  
	if (houseInteraction.enterHouseShape == true) {
	  if (houseInteraction.houseInfoOpen == true) {
		return;
	  }
  
	  HudMenuCEF.execute(`GANGWARHouse.House = '${houseInteraction.currentHouseShape}'`);
	  mp.events.callRemote('loadHouseInfo', houseInteraction.currentHouseShape);
	}
  
	if (houseInteraction.exitHouseShape == true) {
	  mp.events.callRemote('exitGANGWARHouse', houseInteraction.CurrentExitHouseShape);
	}
  
	if (houseInteraction.enterWareHouseShape == true) {
	  if (houseInteraction.wareHouseOpen == true) {
		return;
	  }
  
	  mp.events.callRemote('loadWareHouseList', houseInteraction.currentWareHouse);
	}
  });
  mp.events.add('GANGWARCloseHouseInfo', () => {
	if (houseInteraction.houseInfoOpen == true) {
	  houseInteraction.houseInfoOpen = false;
	  HudMenuCEF.execute(`GANGWARHouse.Active = 0`);
	  ShowChat();
	  mp.gui.cursor.visible = false;
	}
  });
  mp.events.add('giveHouseInfo', (_0x12C6A, _0x12C8E, _0x12C46) => {
	if (houseInteraction.enterHouseShape != true) {
	  return;
	}
  
	houseInteraction.houseInfoOpen = true;
  
	if (_0x12C6A == null || _0x12C6A == undefined) {
	  HudMenuCEF.execute(`GANGWARHouse.Owner = 'Государство'`);
	} else {
	  HudMenuCEF.execute(`GANGWARHouse.Owner = '${_0x12C6A}'`);
	}
  
	hideChat();
	HudMenuCEF.execute(`GANGWARHouse.Price = '${_0x12C8E}'`);
	HudMenuCEF.execute(`GANGWARHouse.Class = ${parseInt(_0x12C46)}`);
	HudMenuCEF.execute(`GANGWARHouse.Active = 1`);
	mp.gui.cursor.visible = true;
  });
  mp.events.add('GANGWARHouseInteraction', _0x12B26 => {
	switch (_0x12B26) {
	  case 'Enter':
		mp.events.callRemote('enterGANGWARHouse', houseInteraction.currentHouseShape);
		break;
  
	  case 'Lock':
		mp.events.callRemote('lockGANGWARHouse', houseInteraction.currentHouseShape);
		break;
  
	  case 'Buy':
		mp.events.callRemote('GANGWARBuyHouse', houseInteraction.currentHouseShape);
		break;
  
	  case 'SellOwnHouse':
		mp.events.callRemote('GANGWARSellHouseInGos');
		break;
  
	  case 'phoneLock':
		mp.events.callRemote('GANGWARChangeHouseLock', 'house');
		break;
  
	  case 'phoneWarehouseLock':
		mp.events.callRemote('GANGWARChangeHouseLock', 'warehouse');
		break;
	}
  });
  mp.events.add('GANGWARHouseBalancePay', _0x12B26 => {
	mp.events.callRemote('playerPayTax', _0x12B26);
  });
  mp.events.add('Client:initPlayerHouse', (_0x12F5E, _0x12ECE, _0x12F3A, _0x12FEE, _0x12EF2, _0x12C46, _0x12EAA, _0x12FCA, _0x12E86, _0x12F82) => {
	let _0x12FA6 = JSON.parse(_0x12F5E);
  
	if (!_0x12FA6 || _0x12FA6 == undefined || _0x12FA6.length == 0) {
	  return mp.gui.chat.push(`Ошибка при инициализации дома. Обратитесь в /report`);
	}
  
	if (houseInteraction.playerHouseBlip != null) {
	  houseInteraction.playerHouseBlip.destroy();
	}
  
	houseInteraction.playerHouseBlip = mp.blips.new(40, new mp.Vector3(_0x12FA6.x, _0x12FA6.y, 0), {
	  name: 'Дом',
	  scale: 1,
	  color: 3,
	  shortRange: true,
	  dimension: 8
	});
  
	let _0x12F16 = mp.colshapes.newCircle(_0x12FA6.x, _0x12FA6.y, 10, 8);
  
	_0x12F16.isPlayerHouse = true;
  
	if (_0x12F3A == 1) {
	  _0x12F3A = 'Закрыт';
	} else {
	  _0x12F3A = 'Открыт';
	}
  
	if (_0x12FEE == 1) {
	  _0x12FEE = 'Закрыт';
	} else {
	  _0x12FEE = 'Открыт';
	}
  
	PhoneCEF.execute(`houseManagement.HouseNumber = '${_0x12ECE}'`);
	PhoneCEF.execute(`houseManagement.houseStatus = '${'Открыт'}'`);
	PhoneCEF.execute(`houseManagement.warehouseStatus = '${'Открыт'}'`);
	PhoneCEF.execute(`houseManagement.housePrice = '${_0x12EF2}'`);
	PhoneCEF.execute(`houseManagement.houseClass = '${_0x12C46}'`);
	PhoneCEF.execute(`houseManagement.houseClassString = '${_0x12EAA}'`);
	PhoneCEF.execute(`houseManagement.TaxPrice = '${_0x12FCA}'`);
	PhoneCEF.execute(`houseManagement.Balance = '${_0x12E86}'`);
	PhoneCEF.execute(`houseManagement.leftTax = '${parseFloat(_0x12F82).toFixed(2)}'`);
	PhoneCEF.execute(`houseManagement.hasHouse = 1`);
	HudMenuCEF.execute(`GANGWARHouseSell.AddHouseForSell('${_0x12ECE}','${_0x12C46}','${_0x12EF2}','${_0x12EAA}')`);
  });
  mp.events.add('changeHouseBalanceTax', (_0x12E86, _0x1319E) => {
	PhoneCEF.execute(`houseManagement.Balance = '${_0x12E86}'`);
	PhoneCEF.execute(`houseManagement.leftTax = '${parseFloat(_0x1319E).toFixed(2)}'`);
  });
  mp.events.add('Client:removePlayerHouse', () => {
	if (houseInteraction.playerHouseBlip != null) {
	  houseInteraction.playerHouseBlip.destroy();
	  houseInteraction.playerHouseBlip = null;
	}
  
	PhoneCEF.execute(`houseManagement.hasHouse = 0`);
	HudMenuCEF.execute(`GANGWARHouseSell.removeAllHouseForSell()`);
  });
  mp.events.add('changePlayerHouseData', (_0x12B26, _0x1319E) => {
	switch (_0x12B26) {
	  case 'houseStatus':
		PhoneCEF.execute(`houseManagement.houseStatus = '${_0x1319E}'`);
		break;
  
	  case 'warehouseStatus':
		PhoneCEF.execute(`houseManagement.warehouseStatus = '${_0x1319E}'`);
		break;
	}
  });