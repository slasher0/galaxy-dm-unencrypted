let ArcadiusPeds = [{
	x: -114.89356994628906,
	y: -599.3767700195312,
	z: 36.28425598144531,
	heading: 192.498291015625,
	model: 'a_m_m_business_01',
	NPCName: 'Джордж\nПокупка семьи'
  }];
  
  function loadArcadiusPeds(_0x15F0A) {
	for (let i = 0; i < ArcadiusPeds.length; i++) {
	  mp.peds.new(mp.game.joaat(`${ArcadiusPeds[i].model}`), new mp.Vector3(ArcadiusPeds[i].x, ArcadiusPeds[i].y, ArcadiusPeds[i].z), ArcadiusPeds[i].heading, _0x15F0A);
  
	  if (ArcadiusPeds[i].NPCName != null) {
		mp.labels.new(`${ArcadiusPeds[i].NPCName}`, new mp.Vector3(ArcadiusPeds[i].x, ArcadiusPeds[i].y, ArcadiusPeds[i].z + 1.3), {
		  font: 4,
		  drawDistance: 5,
		  color: [255, 255, 255, 255],
		  dimension: _0x15F0A
		});
	  }
	}
  }
  
  loadArcadiusPeds(8);
  loadArcadiusPeds(12);
  let FamylyShapesPos = [{
	x: -114.73887634277344,
	y: -599.9907836914062,
	z: 36.28306579589844,
	familyInterfaceType: 'familyBuy',
	labelText: null
  }, {
	x: -117.01862335205078,
	y: -604.5897216796875,
	z: 36.28076934814453,
	familyInterfaceType: 'EnterArcadius',
	labelText: 'Офис семьи'
  }];
  
  function loadFamilyColshapes() {
	for (let i = 0; i < FamylyShapesPos.length; i++) {
	  var _0x17A52 = mp.colshapes.newCircle(FamylyShapesPos[i].x, FamylyShapesPos[i].y, 1, 8);
  
	  _0x17A52.familyInterfaceType = `${FamylyShapesPos[i].familyInterfaceType}`;
  
	  if (FamylyShapesPos[i].labelText != null) {
		mp.labels.new(`${FamylyShapesPos[i].labelText}`, new mp.Vector3(FamylyShapesPos[i].x, FamylyShapesPos[i].y, FamylyShapesPos[i].z), {
		  font: 4,
		  drawDistance: 5,
		  color: [255, 255, 255, 255],
		  dimension: 8
		});
	  }
	}
  }
  
  loadFamilyColshapes();
  let FamilyCraftData = {
	inShape: false,
	CraftOpen: false,
	'inShape': true,
	'CraftOpen': false
  };
  let FamilyNRKCraftData = {
	inShape: false,
	NRKCraftOpen: false,
	'inShape': true,
	'NRKCraftOpen': true
  };
  global.FamilyWareHouseData = {
	inShape: false,
	warehouseOpen: false,
	CurrentWareHouseID: null
  };
  mp.events.add('playerEnterColshape', shape => {
	if (shape.familyInterfaceType == 'familyBuy') {}
  
	if (shape.familyInterfaceType == 'EnterArcadius') {}
  
	if (shape.familyInterfaceType == 'ExitArcadius') {}
  
	if (shape.familyInterfaceType == 'bizwarWrite') {}
  
	if (shape.familyInterfaceType == 'EnterBizwarDim') {}
  
	if (shape.familyInterfaceType == 'FamilyCraft') {}
  
	if (shape.familyInterfaceType == 'FamilyNrkCraft') {}
  
	if (shape.familyInterfaceType == 'FamilyWareHouse') {
	  FamilyWareHouseData.inShape = true;
	  FamilyWareHouseData.CurrentWareHouseID = parseInt(shape.familyWareHouseID);
	}
  });
  mp.events.add('playerExitColshape', shape => {
	if (shape.familyInterfaceType == 'familyBuy') {}
  
	if (shape.familyInterfaceType == 'EnterArcadius') {}
  
	if (shape.familyInterfaceType == 'ExitArcadius') {}
  
	if (shape.familyInterfaceType == 'bizwarWrite') {}
  
	if (shape.familyInterfaceType == 'EnterBizwarDim') {}
  
	if (shape.familyInterfaceType == 'FamilyCraft') {
	  FamilyCraftData.inShape = false;
  
	  if (FamilyCraftData.CraftOpen == true) {
		HudMenuCEF.execute(`FamilyCraft.Active = 0`);
		mp.game.ui.displayRadar(true);
		ChangeHUDKeysDisplay('open');
		ChangeHUDKillFeedDisplay('open');
		ChangeHUDFreeCaseDisplay('open');
		ShowChat();
		mp.gui.cursor.visible = false;
	  }
	}
  
	if (shape.familyInterfaceType == 'FamilyNrkCraft') {
	  FamilyNRKCraftData.inShape = false;
	}
  
	if (shape.familyInterfaceType == 'FamilyWareHouse') {
	  FamilyWareHouseData.inShape = false;
	  mp.events.call('CloseWareHouseInventory');
	  FamilyWareHouseData.CurrentWareHouseID = null;
	}
  });
  mp.events.add('closeFamilyCraftInterface', () => {
	if (FamilyCraftData.CraftOpen == true) {
	  FamilyCraftData.CraftOpen = false;
	  HudMenuCEF.execute(`FamilyCraft.Active = 0`);
	  mp.game.ui.displayRadar(true);
	  ChangeHUDKeysDisplay('open');
	  ChangeHUDKillFeedDisplay('open');
	  ChangeHUDFreeCaseDisplay('open');
	  ShowChat();
	  mp.gui.cursor.visible = false;
	}
  });
  mp.keys.bind(0x45, false, function () {
	if (mp.gui.cursor.visible || ChatActive) {
	  return;
	}
  
	if (FamilyWareHouseData.inShape == true) {
	  if (FamilyWareHouseData.warehouseOpen == true) {
		return;
	  }
  
	  mp.events.callRemote('loadFamilyWareHouseList', FamilyWareHouseData.CurrentWareHouseID);
	}
  });
  mp.events.add('Client:startNRKCraft', () => {
	mp.gui.chat.activate(false);
	mp.gui.chat.show(false);
	mp.gui.cursor.visible = true;
	ChangeHUDKeysDisplay('hide');
	ChangeHUDKillFeedDisplay('hide');
	ChangeHUDFreeCaseDisplay('hide');
	HudMenuCEF.execute(`nrkMiniGame.startCircleGame()`);
  });
  mp.events.add('stopNRKCraft', _0x12B26 => {
	mp.events.callRemote('stopNRKCraft', _0x12B26);
	FamilyNRKCraftData.NRKCraftOpen = false;
	ChangeHUDKeysDisplay('open');
	ChangeHUDKillFeedDisplay('open');
	ChangeHUDFreeCaseDisplay('open');
	ShowChat();
	mp.gui.cursor.visible = false;
  });
  mp.events.add('BizwarFamilyWriteOpen', () => {});
  mp.events.add('BizwarFamilyaddActiveFamily', (_0x15E32, _0x15E56, _0x15E0E) => {});
  mp.events.add('closeFamilyBuy', () => {
	HudMenuCEF.execute(`changeFamilyBuy('close')`);
	ChangeHUDKeysDisplay('open');
	ChangeHUDKillFeedDisplay('open');
	ChangeHUDFreeCaseDisplay('open');
	ShowChat();
	mp.gui.cursor.visible = false;
  });
  mp.events.add('Client:BuyFamily', (_0x12B26, _0x15E9E, _0x15EC2) => {
	mp.events.callRemote('Server:BuyFamily', _0x12B26, _0x15E9E, _0x15EC2);
  });
  mp.events.add('loadFamilyInterriorShapes', (_0x15EC2, _0x15F0A, _0x15F2E, _0x15F52, _0x12E86, _0x15F76, _0x15FBE, _0x15FE2, _0x15F9A, _0x15EE6) => {
	loadFamilyInterrior(_0x15EC2, _0x15F0A);
	loadArcadiusOfficePeds(_0x15F0A);
	HudMenuCEF.execute(`FamilyMenu.FamilyName = '${_0x15F2E}'`);
	HudMenuCEF.execute(`FamilyMenu.Location = '${_0x15F52}'`);
	HudMenuCEF.execute(`FamilyMenu.Interrior = ${_0x15EC2}`);
	HudMenuCEF.execute(`FamilyMenu.Balance = '${parseInt(_0x12E86).toDivideNum()}'`);
	HudMenuCEF.execute(`FamilyMenu.Materials = '${parseInt(_0x15F76).toDivideNum()}'`);
	HudMenuCEF.execute(`FamilyCraft.Materials = '${parseInt(_0x15F76).toDivideNum()}'`);
	HudMenuCEF.execute(`FamilyMenu.RankPoints = '${parseInt(_0x15FBE).toDivideNum()}'`);
	HudMenuCEF.execute(`FamilyMenu.CreateData = '${_0x15FE2}'`);
	HudMenuCEF.execute(`FamilyMenu.PlayerRank = ${parseInt(_0x15F9A)}`);
	HudMenuCEF.execute(`BIZWARWrite.loadBizwarHistory('${_0x15EE6}')`);
  });
  mp.events.add('addNewBizwarHistory', _0x1602A => {
	HudMenuCEF.execute(`BIZWARWrite.addNewBizwarHistory('${_0x1602A}')`);
  });
  mp.events.add('changeBizwarHistoryLog', (_0x12E1A, res, _0x16096) => {
	HudMenuCEF.execute(`BIZWARWrite.changeBizwarHistoryLog('${_0x12E1A}','${res}','${_0x16096}')`);
  });
  mp.events.add('FamilyWithdrawMoney', _0x14452 => {
	mp.events.callRemote('Server:FamilyWithdrawMoney', _0x14452);
  });
  
  Number.prototype.toDivideNum = function () {
	var _0x160BA = String(Math.trunc(this));
  
	if (_0x160BA.length <= 3) {
	  return _0x160BA;
	}
  
	var _0x16102 = 0;
	var _0x160DE = '';
  
	for (var i = _0x160BA.length - 1; i >= 0; i--) {
	  _0x160DE = _0x160BA.charAt(i) + _0x160DE;
	  _0x16102++;
	}
  
	return _0x160DE;
  };
  
  global.officeInfo = {
	includes: false,
	dimension: null
  };
  let FamylyOfficeShapesPos = [{
	x: -126.02709197998047,
	y: -641.6588134765625,
	z: 168.82054138183594,
	familyInterfaceType: 'bizwarWrite',
	labelText: 'BIZWAR забив'
  }, {
	x: -139.77040100097656,
	y: -617.446044921875,
	z: 168.820556640625,
	familyInterfaceType: 'ExitArcadius',
	labelText: 'Выход из офиса'
  }, {
	x: -142.14968872070312,
	y: -645.8712768554688,
	z: 168.820556640625,
	familyInterfaceType: 'EnterBizwarDim',
	labelText: 'Телепорт в BIZWAR дименшн'
  }, {
	x: -126.73373413085938,
	y: -636.239013671875,
	z: 168.82032775878906,
	familyInterfaceType: 'FamilyCraft',
	labelText: 'Крафт'
  }, {
	x: -129.11585998535156,
	y: -638.6082153320312,
	z: 168.820556640625,
	familyInterfaceType: 'FamilyNrkCraft',
	labelText: 'NRK Крафт'
  }, {
	x: -132.1781005859375,
	y: -634.7915649414062,
	z: 168.82032775878906,
	familyInterfaceType: 'FamilyWareHouse',
	labelText: 'Склад'
  }];
  
  function loadFamilyInterrior(_0x12B26, _0x15F0A) {
	officeInfo.includes = true;
	officeInfo.dimension = parseInt(_0x15F0A);
	mp.game.invoke('0xEE6C5AD3ECE0A82D', 'ex_dt1_02_office_01a');
	mp.game.invoke('0xEE6C5AD3ECE0A82D', 'ex_dt1_02_office_02b');
	mp.game.invoke('0xEE6C5AD3ECE0A82D', 'ex_dt1_02_office_03a');
  
	switch (parseInt(_0x12B26)) {
	  case 2:
		mp.game.invoke('0x41B4893843BBDB74', 'ex_dt1_02_office_02b');
		break;
  
	  case 1:
		mp.game.invoke('0x41B4893843BBDB74', 'ex_dt1_02_office_01a');
		break;
  
	  case 3:
		mp.game.invoke('0x41B4893843BBDB74', 'ex_dt1_02_office_03a');
		break;
	}
  
	for (let i = 0; i < FamylyOfficeShapesPos.length; i++) {
	  var _0x17A52 = mp.colshapes.newCircle(FamylyOfficeShapesPos[i].x, FamylyOfficeShapesPos[i].y, 1, parseInt(_0x15F0A));
  
	  _0x17A52.familyInterfaceType = `${FamylyOfficeShapesPos[i].familyInterfaceType}`;
  
	  if (FamylyOfficeShapesPos[i].familyInterfaceType == 'FamilyWareHouse') {
		_0x17A52.familyWareHouseID = parseInt(_0x15F0A) - 1000000;
	  }
  
	  if (FamylyOfficeShapesPos[i].labelText != null) {
		mp.labels.new(`${FamylyOfficeShapesPos[i].labelText}`, new mp.Vector3(FamylyOfficeShapesPos[i].x, FamylyOfficeShapesPos[i].y, FamylyOfficeShapesPos[i].z), {
		  font: 4,
		  drawDistance: 5,
		  color: [255, 255, 255, 255],
		  dimension: parseInt(_0x15F0A)
		});
	  }
	}
  }
  
  mp.events.add('loadFamilyUsers', (_0x16462, _0x1643E) => {
	if (_0x16462 == null || _0x16462 == undefined) {
	  return;
	}
  
	let _0x1641A = JSON.parse(_0x16462);
  
	if (_0x1641A.length == 0) {
	  return;
	}
  
	for (let i = 0; i < _0x1641A.length; i++) {
	  HudMenuCEF.execute(`FamilyMenu.addUser('${_0x1641A[i].StaticID}','${_0x1641A[i].Login}','${_0x1641A[i].Rank}','${_0x1641A[i].Leader}','${_0x1641A[i].Tag}')`);
	}
  
	HudMenuCEF.execute(`FamilyMenu.setRankManagement('${_0x1643E}')`);
  });
  mp.events.add('saveRankManagement', (_0x164AA, _0x164CE) => {
	mp.events.callRemote('Server:saveRankManagement', _0x164AA, _0x164CE);
  });
  mp.events.add('openFamilyMenu', () => {
	if (officeInfo.includes != true) {
	  return HudMenuCEF.execute(`pushNotify('error', 'top-mid', 'Вы не состоите в семье.', 3000);`);
	}
  
	HudMenuCEF.execute(`MainMenuBlock.MiniMenu = 0`);
	HudMenuCEF.execute(`FamilyMenu.Active = 1`);
	mp.game.ui.displayRadar(false);
	mp.gui.chat.activate(false);
	mp.gui.chat.show(false);
	mp.gui.cursor.visible = true;
	ChangeHUDKeysDisplay('hide');
	ChangeHUDKillFeedDisplay('hide');
	ChangeHUDFreeCaseDisplay('hide');
  });
  mp.events.add('CloseFamilyMenu', () => {
	mp.game.ui.displayRadar(true);
	ChangeHUDKeysDisplay('open');
	ChangeHUDKillFeedDisplay('open');
	ChangeHUDFreeCaseDisplay('open');
	ShowChat();
	mp.gui.cursor.visible = false;
  });
  mp.events.add('CloseBIZWARWriteMenu', () => {
	mp.game.ui.displayRadar(true);
	ChangeHUDKeysDisplay('open');
	ChangeHUDKillFeedDisplay('open');
	ChangeHUDFreeCaseDisplay('open');
	ShowChat();
	mp.gui.cursor.visible = false;
  });
  var FamilyStreetPeds = [{
	x: -119.47176361083984,
	y: -610.2274780273438,
	z: 36.2807731628418,
	heading: 292.90020751953125,
	model: 'a_f_y_business_01',
	NPCName: 'Аренда транспорта'
  }];
  
  function loadFamilyOfficePeds(_0x15F0A) {
	if (_0x15F0A == 8 || _0x15F0A == 12) {
	  for (let i = 0; i < FamilyStreetPeds.length; i++) {
		mp.peds.new(mp.game.joaat(`${FamilyStreetPeds[i].model}`), new mp.Vector3(FamilyStreetPeds[i].x, FamilyStreetPeds[i].y, FamilyStreetPeds[i].z), FamilyStreetPeds[i].heading, _0x15F0A);
  
		if (FamilyStreetPeds[i].NPCName != null) {
		  mp.labels.new(`${FamilyStreetPeds[i].NPCName}`, new mp.Vector3(FamilyStreetPeds[i].x, FamilyStreetPeds[i].y, FamilyStreetPeds[i].z + 1.3), {
			font: 4,
			drawDistance: 5,
			color: [255, 255, 255, 255],
			dimension: _0x15F0A
		  });
		}
	  }
	}
  }
  
  loadFamilyOfficePeds(8);
  loadFamilyOfficePeds(12);
  var officeRentVehicleShape = [{
	x: -118.98455810546875,
	y: -610.09814453125,
	z: 36.28076934814453
  }];
  
  function loadOfficeVehicleRentShape(_0x15F0A) {
	if (_0x15F0A == 8 || _0x15F0A == 12) {
	  for (let i = 0; i < officeRentVehicleShape.length; i++) {
		var _0x17A52 = mp.colshapes.newCircle(officeRentVehicleShape[i].x, officeRentVehicleShape[i].y, 1, parseInt(_0x15F0A));
  
		_0x17A52.OfficeVehRent = true;
	  }
	}
  }
  
  loadOfficeVehicleRentShape(8);
  loadOfficeVehicleRentShape(12);
  global.inOfficeRentShapeZone = false;
  mp.events.add('playerEnterColshape', shape => {
	if (shape.OfficeVehRent == true) {}
  
	if (shape.OfficeBigRentZone == true) {}
  });
  mp.events.add('playerExitColshape', shape => {
	if (shape.OfficeVehRent == true) {
	  if (OfficeRentActive = true) {
		ShowChat();
		mp.gui.cursor.visible = false;
		HudMenuCEF.execute(`autoRent.Active = 0`);
	  }
	}
  
	if (shape.OfficeBigRentZone == true) {}
  });
  mp.keys.bind(0x45, false, function () {
	if (player.dimension != 8 && player.dimension != 12) {
	  return;
	}
  
	if (mp.gui.cursor.visible || ChatActive) {
	  return;
	}
  });
  mp.events.add('unlockOfficeVehRent', () => {
	mp.game.ui.displayRadar(true);
	ChangeHUDKeysDisplay('open');
	ChangeHUDKillFeedDisplay('open');
	ChangeHUDFreeCaseDisplay('open');
	ShowChat();
	mp.gui.cursor.visible = false;
  });
  let OfficeBigRentZone = [{
	x: -116.03668975830078,
	y: -604.9052734375,
	z: 36.2807731628418,
	radius: 50,
	fraction: null
  }];
  
  function loadOfficeRentGreenZone(_0x15F0A) {
	for (let i = 0; i < OfficeBigRentZone.length; i++) {
	  var _0x17A52 = mp.colshapes.newCircle(OfficeBigRentZone[i].x, OfficeBigRentZone[i].y, OfficeBigRentZone[i].radius, _0x15F0A);
  
	  _0x17A52.OfficeBigRentZone = true;
  
	  if (_0x15F0A == 12) {
		_0x17A52.gangwarGreenZone = true;
	  }
	}
  }
  
  loadOfficeRentGreenZone(8);
  loadOfficeRentGreenZone(12);
  mp.events.add('familyChangeRankSave', (_0x16636, _0x16612) => {
	mp.events.callRemote('Server:familyChangeRankSave', _0x16636, _0x16612);
  });
  mp.events.add('FamilySetTargetNewRank', (_0x1665A, _0x16612) => {
	HudMenuCEF.execute(`FamilyMenu.FamilySetTargetNewRank('${_0x1665A}','${_0x16612}')`);
  });
  mp.events.add('FamilySetOwnRank', _0x1667E => {
	HudMenuCEF.execute(`FamilyMenu.PlayerRank = ${parseInt(_0x1667E)}`);
  });
  mp.events.add('kickTargetFromFamily', (_0x1665A, _0x1667E) => {
	mp.events.callRemote('Server:kickTargetFromFamily', _0x1665A, _0x1667E);
  });
  mp.events.add('FamilyKickTarget', _0x166A2 => {
	HudMenuCEF.execute(`FamilyMenu.FamilyKickTarget('${_0x166A2}')`);
  });
  mp.events.add('intivePlayerInFamily', _0x12E1A => {
	mp.events.callRemote('Server:intivePlayerInFamily', _0x12E1A);
  });
  mp.events.add('familyInviteTarget', (_0x16732, _0x1670E, _0x166EA, _0x166C6) => {
	HudMenuCEF.execute(`familyInviteTargetBlock('${_0x16732}','${_0x1670E}','${_0x166EA}','${_0x166C6}')`);
  });
  mp.events.add('FamilyInviteTargetInteraction', (_0x12B26, _0x16756) => {
	mp.events.callRemote('Server:FamilyInviteTargetInteraction', _0x12B26, _0x16756);
  });
  mp.events.add('FamilyAddNewUser', (_0x1665A, _0x14086, _0x1667E, _0x1677A, _0x1679E) => {
	HudMenuCEF.execute(`FamilyMenu.addUser('${_0x1665A}','${_0x14086}','${_0x1667E}','${_0x1677A}','${_0x1679E}')`);
  });
  mp.events.add('localPlayerKickFromFamily', () => {
	officeInfo.includes = false;
	officeInfo.dimension = null;
	HudMenuCEF.execute(`FamilyMenu.PlayerRank = 0`);
	HudMenuCEF.execute(`FamilyMenu.Users = []`);
  });
  mp.events.add('FamilyBuyAnnouncement', _0x12B26 => {
	mp.events.callRemote('Server:FamilyBuyAnnouncement', _0x12B26);
  });
  mp.events.add('CraftFamilyItem', _0x12B92 => {
	mp.events.callRemote('CraftFamilyItem', _0x12B92);
  });
  mp.events.add('FamilySetNewParam', (_0x12B26, _0x12B4A) => {
	switch (_0x12B26) {
	  case 'NewBalance':
		HudMenuCEF.execute(`FamilyMenu.Balance = '${parseInt(_0x12B4A).toDivideNum()}'`);
		break;
  
	  case 'Materials':
		HudMenuCEF.execute(`FamilyMenu.Materials = '${parseInt(_0x12B4A).toDivideNum()}'`);
		HudMenuCEF.execute(`FamilyCraft.Materials = '${parseInt(_0x12B4A).toDivideNum()}'`);
		break;
  
	  case 'RankPoints':
		HudMenuCEF.execute(`FamilyMenu.RankPoints = '${parseInt(_0x12B4A).toDivideNum()}'`);
		break;
  
	  default:
		break;
	}
  });