let FamylyBizwarShapesPos = [{
	x: -117.01862335205078,
	y: -604.5897216796875,
	z: 36.28076934814453,
	familyInterfaceType: 'ExitBizwarDimension',
	labelText: 'Телепорт в GANGWAR дименшн'
  }];
  
  function loadFamilyBizwarColshapes() {
	for (let i = 0; i < FamylyBizwarShapesPos.length; i++) {
	  var _0x17A52 = mp.colshapes.newCircle(FamylyBizwarShapesPos[i].x, FamylyBizwarShapesPos[i].y, 1, 12);
  
	  _0x17A52.familyInterfaceType = `${FamylyBizwarShapesPos[i].familyInterfaceType}`;
  
	  if (FamylyBizwarShapesPos[i].labelText != null) {
		mp.labels.new(`${FamylyBizwarShapesPos[i].labelText}`, new mp.Vector3(FamylyBizwarShapesPos[i].x, FamylyBizwarShapesPos[i].y, FamylyBizwarShapesPos[i].z), {
		  font: 4,
		  drawDistance: 5,
		  color: [255, 255, 255, 255],
		  dimension: 12
		});
	  }
	}
  }
  
  loadFamilyBizwarColshapes();
  mp.events.add('playerEnterColshape', shape => {
	if (shape.familyInterfaceType == 'ExitBizwarDimension') {}
  });
  mp.events.add('playerExitColshape', shape => {
	if (shape.familyInterfaceType == 'ExitBizwarDimension') {}
  });
  mp.keys.bind(0x45, false, function () {
	if (mp.gui.cursor.visible || ChatActive) {
	  return;
	}
  });
  let ActiveBlipsBizwar = null;
  let bizwarLocations = [{
	x: 1032.7247314453125,
	y: 2344.352294921875,
	z: 65.8512191772461,
	radius: 160,
	locationName: 'Стройка'
  }, {
	x: -531.0704956054688,
	y: 5315.1416015625,
	z: 99.26721954345703,
	radius: 140,
	locationName: 'Лесопилка'
  }, {
	x: 1710.8819580078125,
	y: -1608.2454833984375,
	z: 126.66773223876953,
	radius: 145,
	locationName: 'Завод'
  }, {
	x: 512.2433471679688,
	y: -3153.738037109375,
	z: 47.603515625,
	radius: 160,
	locationName: 'Порт'
  }, {
	x: 2385.02197265625,
	y: 3091.400390625,
	z: 64.30389404296875,
	radius: 110,
	locationName: 'Свалка самолётов'
  }];
  mp.events.add('setActiveBizwarBlip', (_0x143E6, _0x1440A, _0x15B1A, _0x15AF6) => {
	try {
	  let _0x15AD2 = mp.game.ui.addBlipForRadius(parseFloat(_0x143E6), parseFloat(_0x1440A), parseFloat(_0x15B1A), parseInt(_0x15AF6));
  
	  mp.game.invoke('0xDF735600A4696DAF', _0x15AD2, 9);
	  mp.game.invoke('0x03D7FB09E75D6B7E', _0x15AD2, 1);
	  mp.game.invoke('0x45FF974EEE1C8734', _0x15AD2, 70);
	  ActiveBlipsBizwar = _0x15AD2;
	} catch (e) {
	  mp.gui.chat.push(`e: ${e}`);
	}
  });
  mp.events.add('render', () => {
	if (ActiveBlipsBizwar != null) {
	  mp.game.invoke('0xF87683CDF73C3F6E', ActiveBlipsBizwar, 0);
	}
  });
  mp.events.add('activateBizwarTimer', (_0x15B86, _0x15B3E) => {
	try {
	  let _0x15B62 = bizwarLocations[parseInt(_0x15B3E)];
	  HudMenuCEF.execute(`setCaptureTimeInterval('${_0x15B86}')`);
	  HudMenuCEF.execute(`changeCaptureTimerDisplay('open')`);
  
	  if (ActiveBlipsBizwar != null) {
		mp.game.invoke('0x45FF974EEE1C8734', ActiveBlipsBizwar, 0);
	  }
  
	  let _0x15AD2 = mp.game.ui.addBlipForRadius(parseFloat(_0x15B62.x), parseFloat(_0x15B62.y), parseFloat(_0x15B62.z), parseInt(_0x15B62.radius));
  
	  mp.game.invoke('0xDF735600A4696DAF', _0x15AD2, 9);
	  mp.game.invoke('0x03D7FB09E75D6B7E', _0x15AD2, 1);
	  mp.game.invoke('0x45FF974EEE1C8734', _0x15AD2, 70);
	  ActiveBlipsBizwar = _0x15AD2;
	} catch (e) {
	  mp.gui.chat.push(`e: ${e}`);
	}
  });
  mp.events.add('familyBizwarImages', (_0x15BAA, _0x15BCE, _0x14626, _0x1464A) => {
	HudMenuCEF.execute(`setBizwarTimerImagePints('${_0x15BAA}','${_0x15BCE}','${_0x14626}','${_0x1464A}')`);
  });
  mp.events.add('showBIZWARNotify', (_0x15BF2, _0x15C16, _0x15C5E, _0x15C82, _0x15C3A) => {
	try {
	  if (_0x15C3A == 'Attack') {
		HudMenuCEF.execute(`document.getElementById('BIZWARNotifyText').innerText = 'Ваша семья назначила бизвар семье ${_0x15C16} в ${_0x15C5E}. Оружие: ${_0x15C82}'`);
		HudMenuCEF.execute(`changeBizwarActiveStatus('open')`);
	  } else {
		HudMenuCEF.execute(`document.getElementById('BIZWARNotifyText').innerText = 'Семья ${_0x15BF2} назначила бизвар вашей семье в ${_0x15C5E}. Оружие: ${_0x15C82}'`);
		HudMenuCEF.execute(`changeBizwarActiveStatus('open')`);
	  }
	} catch (e) {
	  mp.gui.chat.push(`${e}`);
	}
  });
  mp.events.add('hideBIZWARNotify', () => {
	HudMenuCEF.execute(`changeBizwarActiveStatus('close')`);
  });
  mp.events.add('SetBIZWARWrite', (_0x15CA6, _0x13B2E, _0x12BDA) => {
	mp.events.callRemote('WriteBizwar', _0x15CA6, _0x13B2E, _0x12BDA);
  });