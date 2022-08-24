mp.events.add('MaterialStartDelivery', () => {
	mp.events.callRemote('MaterialStartDelivery');
  });
  const localplayer = mp.players.local;
  let dlvryMtrlsNPCDialogParams = {
	Entered: false,
	NPCType: null,
	DialogOpen: false,
	NPCCamera: null,
	dlvryMtrlsNPCName: null,
	indlvryMtrlsTakeShape: false,
	inFamilyMaterialUnloadShape: false,
	'Entered': true,
	'indlvryMtrlsTakeShape': true,
	'inFamilyMaterialUnloadShape': true,
	'NPCType': null,
	'DialogOpen': false,
	'NPCCamera': null
  };
  let dlvryMtrlsPeds = [{
	x: 120.52949523925781,
	y: -3213.082275390625,
	z: 6.0135817527771,
	heading: 275.8292236328125,
	model: 'g_m_y_famdnf_01',
	NPCName: 'Dwight',
	NPCNum: 0
  }, {
	x: -941.0804443359375,
	y: -3015.029296875,
	z: 20.241600036621094,
	heading: 235.00531005859375,
	model: 'a_m_y_beachvesp_02',
	NPCName: 'Carl',
	NPCNum: 1
  }, {
	x: 457.858154296875,
	y: -3078.251220703125,
	z: 6.169289588928223,
	heading: 45.041683197021484,
	model: 'a_m_y_stbla_01',
	NPCName: 'Arnold',
	NPCNum: 2
  }];
  
  function loaddlvryMtrlsPeds() {
	for (let i = 0; i < dlvryMtrlsPeds.length; i++) {
	  let _0x17A9A = mp.peds.new(mp.game.joaat(`${dlvryMtrlsPeds[i].model}`), new mp.Vector3(dlvryMtrlsPeds[i].x, dlvryMtrlsPeds[i].y, dlvryMtrlsPeds[i].z), dlvryMtrlsPeds[i].heading, 8);
  
	  _0x17A9A.freezePosition(true);
  
	  let shape = mp.colshapes.newCircle(dlvryMtrlsPeds[i].x, dlvryMtrlsPeds[i].y, 2, 8);
	  shape.dlvryMtrlsShape = true;
	  shape.dlvryMtrlsNPCNumber = parseInt(dlvryMtrlsPeds[i].NPCNum);
	  shape.dlvryMtrlsNPCName = dlvryMtrlsPeds[i].NPCName;
  
	  if (dlvryMtrlsPeds[i].NPCName != null) {
		mp.labels.new(`${dlvryMtrlsPeds[i].NPCName}`, new mp.Vector3(dlvryMtrlsPeds[i].x, dlvryMtrlsPeds[i].y, dlvryMtrlsPeds[i].z + 1.3), {
		  font: 4,
		  drawDistance: 5,
		  color: [255, 255, 255, 255],
		  dimension: 8
		});
	  }
	}
  }
  
  loaddlvryMtrlsPeds();
  mp.events.add('playerEnterColshape', shape => {
	if (shape.dlvryMtrlsShape == true) {
	  dlvryMtrlsNPCDialogParams.NPCType = parseInt(shape.dlvryMtrlsNPCNumber);
	  dlvryMtrlsNPCDialogParams.dlvryMtrlsNPCName = shape.dlvryMtrlsNPCName;
	}
  
	if (shape.dlvryMtrlsTakeShape == true) {}
  
	if (shape.FamilyMaterialUnloadShape == true) {}
  });
  mp.events.add('playerExitColshape', shape => {
	if (shape.dlvryMtrlsShape == true) {
	  dlvryMtrlsNPCDialogParams.Entered = false;
	}
  
	if (shape.dlvryMtrlsTakeShape == true) {
	  dlvryMtrlsNPCDialogParams.indlvryMtrlsTakeShape = false;
	}
  
	if (shape.FamilyMaterialUnloadShape == true) {
	  dlvryMtrlsNPCDialogParams.inFamilyMaterialUnloadShape = false;
	}
  });
  mp.events.add('dealerNrkBuy', _0x14452 => {
	mp.events.callRemote('dealerNrkBuy', _0x14452);
  });
  mp.keys.bind(0x45, false, function () {
	if (localplayer.dimension != 8) {
	  return;
	}
  
	if (mp.gui.cursor.visible || ChatActive) {
	  return;
	}
  
	{
	  return;
	}
  
	if (dlvryMtrlsNPCDialogParams.NPCType == null) {
	  return;
	}
  
	if (dlvryMtrlsNPCDialogParams.DialogOpen == true) {
	  return;
	}
  
	CreateDlvryMtrlsNPCCamera(dlvryMtrlsNPCDialogParams.NPCType);
  });
  var dlvryMtrlsPedsCams = [{
	"PosX": 121.81940460205078,
	"PosY": -3213.063720703125,
	"PosZ": 6.620758056640625,
	"PointX": 120.77625274658203,
	"PointY": -3213.0419921875,
	"PointZ": 6.5401787757873535,
	Type: 0
  }, {
	"PosX": -939.886474609375,
	"PosY": -3015.693115234375,
	"PosZ": 20.868839263916016,
	"PointX": -940.8649291992188,
	"PointY": -3015.156005859375,
	"PointZ": 20.773622512817383,
	Type: 1
  }, {
	"PosX": 457.05413818359375,
	"PosY": -3077.48046875,
	"PosZ": 6.778910160064697,
	"PointX": 457.6796569824219,
	"PointY": -3078.076171875,
	"PointZ": 6.69917106628418,
	Type: 2
  }];
  
  function CreateDlvryMtrlsNPCCamera(_0x176F2) {
	try {
	  let _0x139EA = dlvryMtrlsPedsCams.find(_0x1773A => {
		return _0x1773A.Type == _0x176F2;
	  });
  
	  if (_0x139EA == null || _0x139EA == undefined) {
		return mp.events.call('emsghud', 'NPC UNDEFINED');
	  }
  
	  HudMenuCEF.execute(`NPCDialog.NPCName = '${dlvryMtrlsNPCDialogParams.dlvryMtrlsNPCName}'`);
	  HudMenuCEF.execute(`NPCDialog.localName = '${localplayer.name}'`);
	  HudMenuCEF.execute(`NPCDialog.startNPCMaterialDeliveryTakeDialog('Default')`);
	  mp.events.call('changeIteractionWithDlvryMtrlsNPC', 'start');
  
	  if (dlvryMtrlsNPCDialogParams.NPCCamera != null) {
		dlvryMtrlsNPCDialogParams.NPCCamera.destroy();
	  }
  
	  CameraDirection = global.gameplayCam.getDirection();
	  const _0x176CE = localplayer.position;
	  _0x176CE.x -= CameraDirection.x * 2;
	  _0x176CE.y -= CameraDirection.y * 2;
  
	  var _0x13642 = mp.cameras.new('default', new mp.Vector3(_0x176CE.x, _0x176CE.y, localplayer.position.z + 1), new mp.Vector3(0, 0, 0), 40);
  
	  let _0x17716 = getPointingAtGPCamera();
  
	  _0x13642.pointAtCoord(_0x17716.x, _0x17716.y, _0x17716.z);
  
	  dlvryMtrlsNPCDialogParams.NPCCamera = mp.cameras.new('default', new mp.Vector3(_0x139EA.PosX, _0x139EA.PosY, _0x139EA.PosZ), new mp.Vector3(90, 90, 90), 70);
	  dlvryMtrlsNPCDialogParams.NPCCamera.pointAtCoord(_0x139EA.PointX, _0x139EA.PointY, _0x139EA.PointZ);
	  mp.game.cam.renderScriptCams(true, false, 0, true, false);
	  dlvryMtrlsNPCDialogParams.NPCCamera.setActiveWithInterp(_0x13642.handle, 500, 0, 0);
	  dlvryMtrlsNPCDialogParams.NPCCamera.setActive(true);
	} catch (e) {
	  mp.gui.chat.push(`e: ${e}`);
	}
  }
  
  mp.events.add('changeIteractionWithDlvryMtrlsNPC', _0x12B26 => {
	switch (_0x12B26) {
	  case 'start':
		HudMenuCEF.execute(`changeRPHudDisplay('close');`);
		dlvryMtrlsNPCDialogParams.DialogOpen = true;
		mp.gui.chat.activate(false);
		mp.gui.chat.show(false);
		mp.game.ui.displayRadar(false);
		mp.gui.cursor.visible = true;
		localplayer.freezePosition(true);
		localplayer.setVisible(false, true);
		ChangeHUDKeysDisplay('hide');
		ChangeHUDKillFeedDisplay('hide');
		ChangeHUDFreeCaseDisplay('hide');
		ChangeHUDRaitingDisplay('hide');
		break;
  
	  default:
		dlvryMtrlsNPCDialogParams.DialogOpen = false;
		mp.game.ui.displayRadar(true);
		mp.gui.cursor.visible = false;
		localplayer.freezePosition(false);
		localplayer.setVisible(true, true);
		ChangeHUDKeysDisplay('show');
		ChangeHUDKillFeedDisplay('show');
		ChangeHUDFreeCaseDisplay('show');
		ChangeHUDRaitingDisplay('show');
		ShowChat();
		mp.game.cam.renderScriptCams(false, false, 0, false, false);
  
		if (dlvryMtrlsNPCDialogParams.NPCCamera != null) {
		  dlvryMtrlsNPCDialogParams.NPCCamera.setActive(false);
		  dlvryMtrlsNPCDialogParams.NPCCamera.destroy();
		}
  
		break;
	}
  });
  mp.events.add('MaterialDeliveryTake', () => {
	if (dlvryMtrlsNPCDialogParams.NPCType == null) {
	  return mp.events.call('emsghud', [`Ошибка при определении точки, попробуйте ещё раз.`]);
	}
  
	mp.events.callRemote('MaterialDeliverySpawnMaterials', dlvryMtrlsNPCDialogParams.NPCType);
  });
  mp.events.add('materialBoxInteraction', _0x12B26 => {
	switch (_0x12B26) {
	  case 'take':
		mp.attachmentMngr.addLocal('MaterialBox');
		break;
  
	  default:
		mp.attachmentMngr.removeLocal('MaterialBox');
		break;
	}
  });
  mp.events.add('mtrlBoxUnLoadInVeh', () => {
	{
	  return mp.events.call('emsghud', `У вас нет материалов.`);
	}
  
	if (circleMenuTargetVehicle == null || !mp.vehicles.exists(circleMenuTargetVehicle)) {
	  return mp.events.call('emsghud', `Машина не существует.`);
	}
  
	const _0x148F6 = localplayer.position;
	const _0x16C8A = circleMenuTargetVehicle.position;
  
	let _0x1488A = mp.game.system.vdist(_0x148F6.x, _0x148F6.y, _0x148F6.z, _0x16C8A.x, _0x16C8A.y, _0x16C8A.z);
  
	if (_0x1488A >= 3) {
	  return mp.events.call('emsghud', `Машина слишком далеко.`);
	}
  
	mp.events.callRemote('mtrlBoxUnLoadInVeh', circleMenuTargetVehicle.remoteId);
  });
  let DlvryMtrlsTakeShapes = [{
	x: 133.23800659179688,
	y: -3215.510986328125,
	z: 5.857588291168213
  }, {
	x: -936.5665893554688,
	y: -3016.01220703125,
	z: 19.840381622314453
  }, {
	x: 462.244873046875,
	y: -3084.443115234375,
	z: 6.070052623748779
  }];
  
  for (let i = 0; i < DlvryMtrlsTakeShapes.length; i++) {
	let shape = mp.colshapes.newCircle(DlvryMtrlsTakeShapes[i].x, DlvryMtrlsTakeShapes[i].y, 1, 8);
	shape.dlvryMtrlsTakeShape = true;
  }
  
  mp.keys.bind(0x45, false, function () {
	if (localplayer.dimension != 8) {
	  return;
	}
  });
  mp.events.add('setMaterialLoadWaypoint', (_0x143E6, _0x1440A) => {
	mp.game.ui.setNewWaypoint(parseFloat(_0x143E6), parseFloat(_0x1440A));
  });
  let garageUnLoad = [{
	x: -146.22218322753906,
	y: -584.9903564453125,
	z: 32.42451477050781
  }];
  
  function initInLoadShape() {
	let shape = mp.colshapes.newCircle(garageUnLoad[0].x, garageUnLoad[0].y, 4, 8);
	shape.FamilyMaterialUnloadShape = true;
  }
  
  initInLoadShape();