var _$_5e4d = [
	'WelcomeCef',
	'WelcomePageInteraction',
	'package://cefs/WelcomePage/index.html',
	'new',
	'browsers',
	'length',
	'players',
	'execute',
	'Open',
	'destroy',
	'Close',
	'Ban',
	'Success',
	'LoadingStages',
	'add',
	'events',
	'WelcomePageSetTop',
	'exists',
	'SetMenuRegDate',
	'HudMenuCEF',
	'vehicleShopCEF',
	'ClothesShopCef',
	'browserCreated',
	'active',
	'browserDomReady',
	'OpenDefaultCefs',
	'package://cefs/GGclothesShop/index.html',
	'package://cefs/MenuHud/index.html',
	'PhoneCEF',
	'package://cefs/phone/index.html',
	'InventoryCEF',
	'package://cefs/inventory/index.html',
	'RouletteBwsr',
	'package://cefs/MenuHud/libs/index.html',
	'BRMainCEF',
	'package://cefs/brmain/index.html',
	'package://cefs/vehshop/index.html',
	'visible',
	'cursor',
	'gui',
	'SetTattooData',
	'call',
	'remoteId',
	'local',
	'StaticID',
	'getVariable',
	'name',
	'parse',
	'isArray',
	'Inventory_AddNewItem',
	'ID',
	'ISrl',
	'Srl',
	'ChangeInterfaceHBDay',
	'updateBRStatsCef',
	'SetHUDDateYear',
	'0',
	':',
	'00:',
	'RegistrationCef',
	'authbwsr',
	'package://cefs/cefauth/index.html',
	'AdministratorAuth',
	'adminpanel',
	'package://cefs/cefadmin/index.html',
	'systemcptstatus',
	'callRemote',
	'AdministratorLoginSuccess',
	'REMOTE_PLYR_CASH_COUNTER_COMPLETE',
	'DLC_HEISTS_GENERAL_FRONTEND_SOUNDS',
	'playSoundFrontend',
	'audio',
	'game',
	'RegisterSuccess',
	'CEFAuthToServer',
	'AdminLogin',
	'ChangeCaseTime',
	'ChangeGPBonus',
	'ChangeFreeVehTime',
	'ChangeHBPrizeTime',
	'setsclginfo',
	'loginToClient',
	'LoginToServer',
	'waitdude',
	'waitpls',
	'RegToClient',
	'RegisterToServer',
	'closewelcome',
	'setplayerlogin',
	'setnewyeartype',
	'closewelcomesuccess',
	'transitionFromBlurred',
	'graphics',
	'dmplinfo',
	'playedtimeplus',
	'random',
	'floor',
	'LoginCamera',
	'0x0F07E7745A236711',
	'invoke',
	'transitionToBlurred',
	'setClockTime',
	'time',
	'default',
	'PosX',
	'PosY',
	'PosZ',
	'Vector3',
	'cameras',
	'PointX',
	'PointY',
	'PointZ',
	'pointAtCoord',
	'renderScriptCams',
	'cam',
	'setActive',
	'activate',
	'chat',
	'show',
	'displayRadar',
	'ui',
	'setCoordsNoOffset',
	'freezePosition',
	'setVisible',
	'x',
	'y',
	'z',
	'testPointToPoint',
	'raycasting',
	'undefined',
	'0x41B4893843BBDB74',
	'vw_casino_main',
	'0x9A9D1BA639675CF1',
	'HeistIsland',
	'SP0_SHOOTING_ABILITY',
	'joaat',
	'statSetInt',
	'stats',
	'SP0_STRENGTH',
	'SP0_STEALTH_ABILITY',
	'SP0_FLYING_ABILITY',
	'SP0_WHEELIE_ABILITY',
	'SP0_LUNG_CAPACITY',
	'prop_storagetank_02b',
	'createModelHide',
	'entity',
	'prop_gas_tank_04a',
	'prop_gas_tank_02b',
	'prop_gas_tank_02a',
	'prop_gas_tank_01a',
	'v_ilev_bl_shutter2',
	'v_ilev_ch_glassdoor',
	'prop_gate_cult_01_l',
	'prop_gate_cult_01_r',
	'prop_tree_lficus_05',
	'prop_tree_lficus_06',
	'prop_elecbox_05a',
	'h4_prop_h4_gate_l_03a',
	'h4_prop_h4_gate_r_03a',
	'v_ilev_bl_door_l',
	'v_ilev_bl_door_r',
	'v_ilev_bl_doorsl_l',
	'v_ilev_bl_doorsl_r',
	'v_ilev_cs_door01',
	'v_ilev_cs_door01_r',
	'setConfigFlag',
	'doorControl',
	'object',
	'0xB98236CAAECEF897',
	'0x1BEDE233E6CD2A1F',
	'0xA6DB27D19ECBB7DA',
	'removeBlip',
	'0x14F96AA50D6FBEA7',
  ]
  global.WelcomeCef = null
  mp.events.add('WelcomePageInteraction', (_0x13B76, _0x1320A) => {
	switch (_0x13B76) {
	  case 'Open':
		WelcomeCef = mp.browsers.new('package://cefs/WelcomePage/index.html')
		setTimeout(() => {
		  if (WelcomeCef != null) {
			WelcomeCef.execute(
			  `loadAccountStages('SetOnline','${mp.players.length}');`
			)
		  }
		}, 500)
		break
	  case 'Close':
		WelcomeCef.destroy()
		WelcomeCef = null
		break
	  case 'Ban':
		WelcomeCef.execute(
		  `loadAccountStages('SetOnline','${mp.players.length}');`
		)
		WelcomeCef.execute(`loadAccountStages('Ban','${_0x1320A}');`)
		break
	  case 'Success':
		WelcomeCef.execute(
		  `loadAccountStages('SetOnline','${mp.players.length}');`
		)
		WelcomeCef.execute(`loadAccountStages('Success',0);`)
		break
	  case 'LoadingStages':
		WelcomeCef.execute(
		  `loadAccountStages('SetOnline','${mp.players.length}');`
		)
		WelcomeCef.execute(`loadAccountStages('LoadingStages','${_0x1320A}');`)
		break
	}
  })
  mp.events.add('WelcomePageSetTop', (_0x13B9A) => {
	setTimeout(() => {
	  if (!mp.browsers.exists(WelcomeCef)) {
		return
	  }
	  WelcomeCef.execute(`setPlayersTop('${_0x13B9A}');`)
	}, 1500)
  })
  mp.events.add('SetMenuRegDate', (_0x130C6) => {
	setTimeout(() => {
	  HudMenuCEF.execute(`setRegistrationDate('${_0x130C6}');`)
	}, 3000)
  })
  global.HudMenuCEF = null
  global.vehicleShopCEF = null
  global.ClothesShopCef = null
  mp.events.add('browserCreated', (_0x13BBE) => {
	if (_0x13BBE == HudMenuCEF) {
	  HudMenuCEF.active = false
	}
	if (_0x13BBE == vehicleShopCEF) {
	  vehicleShopCEF.active = false
	}
	if (_0x13BBE == ClothesShopCef) {
	  ClothesShopCef.active = false
	}
  })
  mp.events.add('browserDomReady', (_0x13BBE) => {
	if (_0x13BBE == HudMenuCEF) {
	  HudMenuCEF.active = true
	}
	if (_0x13BBE == vehicleShopCEF) {
	  vehicleShopCEF.active = true
	}
	if (_0x13BBE == ClothesShopCef) {
	  ClothesShopCef.active = true
	}
  })
  mp.events.add(
	'OpenDefaultCefs',
	(
	  _0x13E8E,
	  _0x130C6,
	  _0x13C96,
	  _0x13CDE,
	  _0x13DB6,
	  _0x13D6E,
	  _0x13D26,
	  _0x13D4A,
	  _0x13DDA,
	  _0x13E46,
	  _0x13E22,
	  _0x13DFE,
	  _0x13CBA,
	  _0x13EB2,
	  _0x13E6A,
	  _0x13C2A,
	  _0x13C06,
	  _0x13C72,
	  _0x13C4E,
	  _0x13BE2,
	  _0x13D02,
	  _0x13D92
	) => {
	  ClothesShopCef = mp.browsers.new('package://cefs/GGclothesShop/index.html')
	  HudMenuCEF = mp.browsers.new('package://cefs/MenuHud/index.html')
	  global.PhoneCEF = mp.browsers.new('package://cefs/phone/index.html')
	  global.InventoryCEF = mp.browsers.new('package://cefs/inventory/index.html')
	  global.RouletteBwsr = mp.browsers.new(
		'package://cefs/MenuHud/libs/index.html'
	  )
	  global.BRMainCEF = mp.browsers.new('package://cefs/brmain/index.html')
	  vehicleShopCEF = mp.browsers.new('package://cefs/vehshop/index.html')
	  setTimeout(() => {
		HudPositionInterval()
	  }, 3000)
	  mp.gui.cursor.visible = true
	  setTimeout(() => {
		UpdatePlayersCount()
		mp.events.call('SetTattooData', _0x13E8E)
		HudMenuCEF.execute(`SetHUDDate('${_0x130C6}');`)
		HudMenuCEF.execute(
		  `SetHUDParams('${mp.players.length}','${
			mp.players.local.remoteId
		  }','${player.getVariable('StaticID')}');`
		)
		HudMenuCEF.execute(`MenuTabSetFraction('${_0x13CDE}');`)
		HudMenuCEF.execute(
		  `setKillsStats('${_0x13DDA}','${_0x13E46}','${_0x13E22}','${_0x13DFE}','${_0x13CBA}','${_0x13EB2}','${_0x13E6A}')`
		)
		if (parseInt(_0x13C96) <= 0) {
		  HudMenuCEF.execute(`ChangeBonusCaseTime('finish','0');`)
		} else {
		  let _0x13ED6 = GetCaseTime(_0x13C96)
		  HudMenuCEF.execute(`ChangeBonusCaseTime('change','${_0x13ED6}');`)
		}
		if (parseInt(_0x13D02) <= 0) {
		  HudMenuCEF.execute(`ChangeFreeVehTime('finish','0');`)
		} else {
		  let _0x13EFA = GetCaseTime(_0x13D02)
		  HudMenuCEF.execute(`ChangeFreeVehTime('change','${_0x13EFA}');`)
		}
		if (parseInt(_0x13D92) <= 0) {
		  HudMenuCEF.execute(`changeHBPrizeTime('finish','0');`)
		} else {
		  HudMenuCEF.execute(`changeHBPrizeTime('change','${_0x13D92}');`)
		}
		setInterval(() => {
		  HudMenuCEF.execute(
			`SetHUDParams('${mp.players.length}','${
			  mp.players.local.remoteId
			}','${player.getVariable('StaticID')}','${mp.players.local.name}');`
		  )
		}, 5000)
	  }, 1000)
	  setTimeout(() => {
		InventoryCEF.execute(
		  `setGGDefaultLvlStats('${_0x13D6E}','${_0x13D26}','${_0x13D4A}')`
		)
		let _0x13F1E = JSON.parse(_0x13DB6)
		if (_0x13F1E.length <= 0) {
		  return
		}
		if (Array.isArray(_0x13F1E) != true) {
		  return
		}
		for (let i = 0; i < _0x13F1E.length; i++) {
		  mp.events.call(
			'Inventory_AddNewItem',
			_0x13F1E[i].ID,
			_0x13F1E[i].ISrl,
			_0x13F1E[i].Srl,
			0,
			null,
			100,
			_0x13F1E.length
		  )
		}
	  }, 2000)
	}
  )
  mp.events.add('ChangeInterfaceHBDay', (_0x13F42) => {
	setTimeout(() => {
	  HudMenuCEF.execute(`changeGLXYHBDay(${parseInt(_0x13F42)})`)
	}, 3000)
  })
  mp.events.add('updateBRStatsCef', (_0x13C2A, _0x13C06, _0x13C72, _0x13BE2) => {
	BRMainCEF.execute(`changeBRkills('${_0x13C2A}')`)
	BRMainCEF.execute(`changeBRdeaths('${_0x13C06}')`)
	BRMainCEF.execute(`changeBRstatsRating('${_0x13C72}')`)
	BRMainCEF.execute(`changeBRPlayersRatingIndex('999+')`)
	BRMainCEF.execute(`changeBRCoins('${_0x13BE2}')`)
  })
  mp.events.add('SetHUDDateYear', (_0x130C6) => {
	HudMenuCEF.execute(`SetHUDDate('${_0x130C6}');`)
  })
  function GetCaseTime(_0x14182) {
	let _0x178EA = '0'
	let _0x1790E = `${_0x14182}`
	let _0x178A2
	let _0x178C6
	let _0x1785A = (_0x1790E / 60) | 0
	let _0x1787E = _0x1790E % 60
	if (_0x1790E >= 60) {
	  _0x178A2 = _0x1785A
	  if (_0x178A2 <= 9) {
		_0x178A2 = `0${_0x178A2}`
	  }
	  if (_0x1787E <= 9) {
		_0x178C6 = '0' + _0x1787E
	  } else {
		_0x178C6 = _0x1787E
	  }
	  _0x178EA = _0x178A2 + ':' + _0x178C6
	} else {
	  if (_0x1787E <= 9) {
		_0x178C6 = '0' + _0x1787E
	  } else {
		_0x178C6 = _0x1787E
	  }
	  _0x178EA = '00:' + _0x178C6
	}
	return _0x178EA
  }
  function GetHBPrizeTime(_0x14182) {
	let _0x178EA = '0'
	let _0x17932 = '0'
	let _0x1790E = `${_0x14182}`
	let _0x178A2
	let _0x178C6
	let _0x1785A = (_0x1790E / 60) | 0
	let _0x1787E = _0x1790E % 60
	if (_0x1790E >= 60) {
	  _0x178A2 = _0x1785A
	  if (_0x1787E <= 9) {
		_0x178C6 = '0' + _0x1787E
	  } else {
		_0x178C6 = _0x1787E
	  }
	  _0x178EA = _0x178A2
	  _0x17932 = _0x178C6
	} else {
	  if (_0x1787E <= 9) {
		_0x178C6 = '0' + _0x1787E
	  } else {
		_0x178C6 = _0x1787E
	  }
	  _0x178EA = '0'
	  _0x17932 = _0x178C6
	}
	return [parseInt(_0x178EA), parseInt(_0x17932)]
  }
  mp.events.add('RegistrationCef', () => {
	WelcomeCef.active = false
	global.authbwsr = mp.browsers.new('package://cefs/cefauth/index.html')
	authbwsr.execute(
	  `pushNotify('info', 'top-mid', 'На данный SocialClub не зарегистрирован ни один аккаунт. Зарегистрируйтесь.', 5000);`
	)
  })
  mp.events.add('AdministratorAuth', (_0x14086) => {
	global.adminpanel = mp.browsers.new('package://cefs/cefadmin/index.html')
	mp.gui.cursor.visible = true
	adminpanel.active = true
	mp.events.callRemote('systemcptstatus')
	global.authbwsr = mp.browsers.new('package://cefs/cefauth/index.html')
	authbwsr.execute(`plinfo('${_0x14086}')`)
	WelcomeCef.active = false
  })
  mp.events.add('AdministratorLoginSuccess', () => {
	mp.game.audio.playSoundFrontend(
	  -1,
	  'REMOTE_PLYR_CASH_COUNTER_COMPLETE',
	  'DLC_HEISTS_GENERAL_FRONTEND_SOUNDS',
	  true
	)
	authbwsr.destroy()
	WelcomeCef.active = true
  })
  mp.events.add(
	'RegisterSuccess',
	(_0x132E2, _0x140CE, _0x140AA, _0x14116, _0x140F2) => {
	  mp.game.audio.playSoundFrontend(
		-1,
		'REMOTE_PLYR_CASH_COUNTER_COMPLETE',
		'DLC_HEISTS_GENERAL_FRONTEND_SOUNDS',
		true
	  )
	  authbwsr.destroy()
	  WelcomeCef.active = true
	}
  )
  mp.events.add('CEFAuthToServer', (_0x14086, _0x1415E) => {
	mp.events.callRemote('AdminLogin', _0x14086, _0x1415E)
  })
  mp.events.add('ChangeCaseTime', (_0x14182) => {
	if (_0x14182 <= 0) {
	  HudMenuCEF.execute(`ChangeBonusCaseTime('finish','0');`)
	} else {
	  let _0x13ED6 = GetCaseTime(_0x14182)
	  HudMenuCEF.execute(`ChangeBonusCaseTime('change','${_0x13ED6}');`)
	}
  })
  mp.events.add('ChangeGPBonus', (_0x14182) => {
	if (_0x14182 <= 0) {
	  HudMenuCEF.execute(`ChangeChangeGPBonus('finish','0');`)
	} else {
	  let _0x13ED6 = GetCaseTime(_0x14182)
	  HudMenuCEF.execute(`ChangeChangeGPBonus('change','${_0x13ED6}');`)
	}
  })
  mp.events.add('ChangeFreeVehTime', (_0x13D02) => {
	if (parseInt(_0x13D02) <= 0) {
	  HudMenuCEF.execute(`ChangeFreeVehTime('finish','0');`)
	} else {
	  let _0x13EFA = GetCaseTime(_0x13D02)
	  HudMenuCEF.execute(`ChangeFreeVehTime('change','${_0x13EFA}');`)
	}
  })
  mp.events.add('ChangeHBPrizeTime', (_0x13D92) => {
	if (parseInt(_0x13D92) <= 0) {
	  HudMenuCEF.execute(`changeHBPrizeTime('finish','0');`)
	} else {
	  HudMenuCEF.execute(`changeHBPrizeTime('change','${_0x13D92}');`)
	}
  })
  mp.events.add('setsclginfo', (_0x14236, _0x1425A) => {
	authbwsr.execute(`plinfo('${_0x14236}','${_0x1425A}')`)
  })
  mp.events.add('loginToClient', (_0x14086, _0x1415E) => {
	mp.events.callRemote('LoginToServer', _0x14086, _0x1415E)
  })
  mp.events.add('waitdude', () => {
	mp.events.callRemote('waitpls')
  })
  mp.events.add('RegToClient', (_0x14086, _0x1415E, _0x142A2, _0x1427E) => {
	if (_0x14086.length < 3 || _0x1415E.length < 3) {
	  return authbwsr.execute(
		`pushNotify('error', 'top-mid', 'Длина логина и пароля должна быть не меньше 3 символов!', 5000);`
	  )
	}
	if (_0x1415E != _0x142A2) {
	  return authbwsr.execute(
		`pushNotify('error', 'top-mid', 'Пароли не совпадают!', 5000);`
	  )
	}
	mp.events.callRemote('RegisterToServer', _0x14086, _0x1415E, _0x1427E)
  })
  var timerclicked = null
  mp.events.add('closewelcome', () => {
	mp.events.callRemote('setplayerlogin')
  })
  mp.events.add('setnewyeartype', (_0x12B26) => {
	switch (parseInt(_0x12B26)) {
	  case 1:
		HudMenuCEF.execute(`mainMenuTabCont.ShopX2 = 1`)
		HudMenuCEF.execute(`PrivilegeShopListBlock.showny = 1`)
		HudMenuCEF.execute(`newyearcase.showny = 1`)
		HudMenuCEF.execute(
		  `document.getElementById('FreeVehFullBlockTimerDiv').style.display = 'flex'`
		)
		break
	  default:
		HudMenuCEF.execute(`mainMenuTabCont.ShopX2 = 0`)
		HudMenuCEF.execute(`PrivilegeShopListBlock.showny = 0`)
		HudMenuCEF.execute(`newyearcase.showny = 0`)
		HudMenuCEF.execute(
		  `document.getElementById('FreeVehFullBlockTimerDiv').style.display = 'none'`
		)
		break
	}
  })
  mp.events.add('closewelcomesuccess', () => {
	mp.game.graphics.transitionFromBlurred(1000)
	WelcomeCef.destroy()
	LoginCamera.destroy()
	HudMenuCEF.execute(`ChangeMenuDisplay('Open');`)
	mp.events.callRemote('dmplinfo')
	if (timerclicked == null) {
	  timerclicked = setInterval(() => {
		mp.events.callRemote('playedtimeplus')
	  }, 60000)
	}
  })
  function getRandomInRange(_0x179C2, _0x1799E) {
	return Math.floor(Math.random() * (_0x1799E - _0x179C2 + 1)) + _0x179C2
  }
  var CameraPositions = [
	{
	  PosX: 94.12850189208984,
	  PosY: -1377.9632568359375,
	  PosZ: 30.450916290283203,
	  PointX: 82.38890075683594,
	  PointY: -1399.7286376953125,
	  PointZ: 30.212121963500977,
	},
	{
	  PosX: -33.85000991821289,
	  PosY: -1395.970703125,
	  PosZ: 42.68822479248047,
	  PointX: 10.306869506835938,
	  PointY: -1388.266357421875,
	  PointZ: 33.971046447753906,
	},
	{
	  PosX: 101.24903869628906,
	  PosY: -1339.0999755859375,
	  PosZ: 36.05850601196289,
	  PointX: 128.07398986816406,
	  PointY: -1299.786376953125,
	  PointZ: 31.162303924560547,
	},
	{
	  PosX: -167.8213348388672,
	  PosY: -820.9825439453125,
	  PosZ: 38.53635025024414,
	  PointX: -207.0653076171875,
	  PointY: -773.658203125,
	  PointZ: 32.048789978027344,
	},
	{
	  PosX: 814.4313354492188,
	  PosY: 15.279138565063477,
	  PosZ: 120.09619903564453,
	  PointX: 905.6116943359375,
	  PointY: 28.98599624633789,
	  PointZ: 103.41157531738281,
	},
	{
	  PosX: 946.2401733398438,
	  PosY: 90.18343353271484,
	  PosZ: 122.91432189941406,
	  PointX: 954.872314453125,
	  PointY: 46.40719985961914,
	  PointZ: 112.74771118164062,
	},
	{
	  PosX: -1410.9991455078125,
	  PosY: -572.4501953125,
	  PosZ: 34.4676513671875,
	  PointX: -1386.4324951171875,
	  PointY: -581.7796020507812,
	  PointZ: 35.12894058227539,
	},
	{
	  PosX: -67.94436645507812,
	  PosY: -598.02197265625,
	  PosZ: 39.32447052001953,
	  PointX: -114.77318572998047,
	  PointY: -624.534912109375,
	  PointZ: 45.0988883972168,
	},
	{
	  PosX: 339.9188232421875,
	  PosY: -1509.372314453125,
	  PosZ: 55.791385650634766,
	  PointX: 333.6217041015625,
	  PointY: -1457.4326171875,
	  PointZ: 40.31926345825195,
	},
	{
	  PosX: -24.885013580322266,
	  PosY: -1758.1820068359375,
	  PosZ: 34.72515106201172,
	  PointX: 42.0694580078125,
	  PointY: -1755.68505859375,
	  PointZ: 42.29639434814453,
	},
	{
	  PosX: 410.30938720703125,
	  PosY: -2008.61962890625,
	  PosZ: 33.41434097290039,
	  PointX: 351.14105224609375,
	  PointY: -2014.435302734375,
	  PointZ: 21.231021881103516,
	},
	{
	  PosX: -635.9732055664062,
	  PosY: -2065.923095703125,
	  PosZ: 46.516807556152344,
	  PointX: -560.32421875,
	  PointY: -2243.157470703125,
	  PointZ: 87.51140594482422,
	},
	{
	  PosX: 2593.18798828125,
	  PosY: -458.3739929199219,
	  PosZ: 113.7676010131836,
	  PointX: 2513.460205078125,
	  PointY: -378.91851806640625,
	  PointZ: 92.25236511230469,
	},
	{
	  PosX: 2489.112060546875,
	  PosY: 1712.1326904296875,
	  PosZ: 138.59429931640625,
	  PointX: 2295.94384765625,
	  PointY: 1920.10205078125,
	  PointZ: 124.41340637207031,
	},
	{
	  PosX: -2204.282470703125,
	  PosY: 4325.01513671875,
	  PosZ: 53.76295852661133,
	  PointX: -2188.0517578125,
	  PointY: 4294.06884765625,
	  PointZ: 53.27873611450195,
	},
	{
	  PosX: -2292.635009765625,
	  PosY: 508.1358947753906,
	  PosZ: 231.75552368164062,
	  PointX: -2281.41748046875,
	  PointY: 369.041259765625,
	  PointZ: 187.6023406982422,
	},
  ]
  global.LoginCamera = null
  function SetAuthCamera() {
	mp.game.invoke('0x0F07E7745A236711')
	mp.game.graphics.transitionToBlurred(1000)
	mp.game.time.setClockTime(21, 0, 0)
	let _0x17B06 = getRandomInRange(0, CameraPositions.length - 1)
	let _0x139EA = CameraPositions[parseInt(_0x17B06)]
	LoginCamera = mp.cameras.new(
	  'default',
	  new mp.Vector3(_0x139EA.PosX, _0x139EA.PosY, _0x139EA.PosZ),
	  new mp.Vector3(90, 90, 90),
	  70
	)
	LoginCamera.pointAtCoord(_0x139EA.PointX, _0x139EA.PointY, _0x139EA.PointZ)
	mp.game.cam.renderScriptCams(true, false, 0, true, false)
	LoginCamera.setActive(true)
	mp.gui.chat.activate(false)
	mp.gui.chat.show(false)
	mp.game.ui.displayRadar(false)
	setTimeout(() => {
	  mp.players.local.setCoordsNoOffset(
		_0x139EA.PosX,
		_0x139EA.PosY,
		_0x139EA.PosZ - 10,
		false,
		false,
		false
	  )
	  mp.players.local.freezePosition(true)
	}, 1000)
	setTimeout(() => {
	  mp.players.local.setCoordsNoOffset(
		_0x139EA.PosX,
		_0x139EA.PosY,
		_0x139EA.PosZ - 10,
		false,
		false,
		false
	  )
	}, 2000)
	setTimeout(() => {
	  mp.players.local.setCoordsNoOffset(
		_0x139EA.PosX,
		_0x139EA.PosY,
		_0x139EA.PosZ - 10,
		false,
		false,
		false
	  )
	}, 3000)
  }
  setTimeout(() => {
	SetAuthCamera()
  }, 300)
  setTimeout(() => {
	mp.players.local.setVisible(true, true)
  }, 3000)
  let direction = null
  let coords = null
  function pointingAt() {
	const _0x17956 = new mp.Vector3(
	  direction.x * 1000 + coords.x,
	  direction.y * 1000 + coords.y,
	  direction.z * 1000 + coords.z
	)
	const _0x1797A = mp.raycasting.testPointToPoint(coords, _0x17956, [1, 16])
	if (_0x1797A === undefined) {
	  return 'undefined'
	}
	return _0x1797A
  }
  function loadModelHides() {
	mp.game.invoke('0x41B4893843BBDB74', 'vw_casino_main')
	mp.game.invoke('0x9A9D1BA639675CF1', 'HeistIsland', false)
	mp.game.stats.statSetInt(mp.game.joaat('SP0_SHOOTING_ABILITY'), 100, true)
	mp.game.stats.statSetInt(mp.game.joaat('SP0_STRENGTH'), 100, true)
	mp.game.stats.statSetInt(mp.game.joaat('SP0_STEALTH_ABILITY'), 100, true)
	mp.game.stats.statSetInt(mp.game.joaat('SP0_FLYING_ABILITY'), 100, true)
	mp.game.stats.statSetInt(mp.game.joaat('SP0_WHEELIE_ABILITY'), 100, true)
	mp.game.stats.statSetInt(mp.game.joaat('SP0_LUNG_CAPACITY'), 100, true)
	mp.game.entity.createModelHide(
	  1720.6507568359375,
	  -1639.8646240234375,
	  112.54142761230469,
	  130,
	  mp.game.joaat('prop_storagetank_02b'),
	  true
	)
	mp.game.entity.createModelHide(
	  1876.622314453125,
	  3819.4755859375,
	  32.3050651550293,
	  110,
	  mp.game.joaat('prop_storagetank_02b'),
	  true
	)
	mp.game.entity.createModelHide(
	  1876.622314453125,
	  3819.4755859375,
	  32.3050651550293,
	  110,
	  mp.game.joaat('prop_gas_tank_04a'),
	  true
	)
	mp.game.entity.createModelHide(
	  1876.622314453125,
	  3819.4755859375,
	  32.3050651550293,
	  110,
	  mp.game.joaat('prop_gas_tank_02b'),
	  true
	)
	mp.game.entity.createModelHide(
	  1876.622314453125,
	  3819.4755859375,
	  32.3050651550293,
	  110,
	  mp.game.joaat('prop_gas_tank_02a'),
	  true
	)
	mp.game.entity.createModelHide(
	  1876.622314453125,
	  3819.4755859375,
	  32.3050651550293,
	  110,
	  mp.game.joaat('prop_gas_tank_01a'),
	  true
	)
	mp.game.entity.createModelHide(
	  1049.8070068359375,
	  2388.758544921875,
	  50.90039825439453,
	  120,
	  mp.game.joaat('prop_storagetank_02b'),
	  true
	)
	mp.game.entity.createModelHide(
	  1049.8070068359375,
	  2388.758544921875,
	  50.90039825439453,
	  120,
	  mp.game.joaat('prop_gas_tank_04a'),
	  true
	)
	mp.game.entity.createModelHide(
	  1049.8070068359375,
	  2388.758544921875,
	  50.90039825439453,
	  120,
	  mp.game.joaat('prop_gas_tank_02b'),
	  true
	)
	mp.game.entity.createModelHide(
	  1049.8070068359375,
	  2388.758544921875,
	  50.90039825439453,
	  120,
	  mp.game.joaat('prop_gas_tank_02a'),
	  true
	)
	mp.game.entity.createModelHide(
	  1049.8070068359375,
	  2388.758544921875,
	  50.90039825439453,
	  120,
	  mp.game.joaat('prop_gas_tank_01a'),
	  true
	)
	mp.game.entity.createModelHide(
	  3621.85546875,
	  3752.322998046875,
	  28.596250534057617,
	  120,
	  mp.game.joaat('v_ilev_bl_shutter2'),
	  true
	)
	mp.game.entity.createModelHide(
	  -156.90350341796875,
	  -305.1948547363281,
	  39.73332977294922,
	  120,
	  mp.game.joaat('v_ilev_ch_glassdoor'),
	  true
	)
	mp.game.entity.createModelHide(
	  -1042.3604736328125,
	  4907.94775390625,
	  208.42062377929688,
	  120,
	  mp.game.joaat('prop_gate_cult_01_l'),
	  true
	)
	mp.game.entity.createModelHide(
	  -1044.48876953125,
	  4912.6923828125,
	  208.54197692871094,
	  120,
	  mp.game.joaat('prop_gate_cult_01_r'),
	  true
	)
	mp.game.entity.createModelHide(
	  413.8214,
	  -997.8983,
	  28.27607,
	  50,
	  mp.game.joaat('prop_tree_lficus_05'),
	  true
	)
	mp.game.entity.createModelHide(
	  408.497,
	  -971.0121,
	  27.65955,
	  50,
	  mp.game.joaat('prop_tree_lficus_06'),
	  true
	)
	mp.game.entity.createModelHide(
	  406.9413,
	  -968.04,
	  28.46596,
	  1,
	  mp.game.joaat('prop_elecbox_05a'),
	  true
	)
	mp.game.entity.createModelHide(
	  4987.587,
	  -5718.635,
	  20.78103,
	  20,
	  mp.game.joaat('h4_prop_h4_gate_l_03a'),
	  true
	)
	mp.game.entity.createModelHide(
	  4987.587,
	  -5718.635,
	  20.78103,
	  20,
	  mp.game.joaat('h4_prop_h4_gate_r_03a'),
	  true
	)
	mp.game.entity.createModelHide(
	  3544.78076171875,
	  3645.0927734375,
	  28.121864318847656,
	  5,
	  mp.game.joaat('v_ilev_bl_door_l'),
	  true
	)
	mp.game.entity.createModelHide(
	  3544.78076171875,
	  3645.0927734375,
	  28.121864318847656,
	  5,
	  mp.game.joaat('v_ilev_bl_door_r'),
	  true
	)
	mp.game.entity.createModelHide(
	  3565.074,
	  3684.74,
	  27.1214,
	  1,
	  mp.game.joaat('v_ilev_bl_doorsl_l'),
	  true
	)
	mp.game.entity.createModelHide(
	  3567.635,
	  3684.289,
	  27.1214,
	  1,
	  mp.game.joaat('v_ilev_bl_doorsl_r'),
	  true
	)
	mp.game.entity.createModelHide(
	  3555.746,
	  3681.54,
	  27.1214,
	  1,
	  mp.game.joaat('v_ilev_bl_doorsl_l'),
	  true
	)
	mp.game.entity.createModelHide(
	  3558.307,
	  3681.088,
	  27.1214,
	  1,
	  mp.game.joaat('v_ilev_bl_doorsl_r'),
	  true
	)
	mp.game.entity.createModelHide(
	  418.5713,
	  -806.3979,
	  29.64108,
	  5,
	  mp.game.joaat('v_ilev_cs_door01'),
	  true
	)
	mp.game.entity.createModelHide(
	  418.5713,
	  -806.3979,
	  29.64108,
	  5,
	  mp.game.joaat('v_ilev_cs_door01_r'),
	  true
	)
	mp.players.local.setConfigFlag(32, false)
	mp.game.object.doorControl(
	  -8873588,
	  810.5769,
	  -2148.27,
	  29.76892,
	  false,
	  0,
	  50,
	  0
	)
	mp.game.object.doorControl(
	  97297972,
	  813.1779,
	  -2148.27,
	  29.76892,
	  false,
	  0,
	  50,
	  0
	)
	mp.game.object.doorControl(
	  -8873588,
	  18.572,
	  -1115.495,
	  29.94694,
	  false,
	  0,
	  50,
	  0
	)
	mp.game.object.doorControl(
	  97297972,
	  16.12787,
	  -1114.606,
	  29.94694,
	  false,
	  0,
	  50,
	  0
	)
  }
  setTimeout(() => {
	loadModelHides()
  }, 5000)
  mp.game.invoke('0xB98236CAAECEF897', true)
  for (
	let i = mp.game.invoke('0x1BEDE233E6CD2A1F', 5);
	mp.game.invoke('0xA6DB27D19ECBB7DA', i);
  
  ) {
	mp.game.ui.removeBlip(i)
	i = mp.game.invoke('0x14F96AA50D6FBEA7', 5)
  }
  for (
	let i = mp.game.invoke('0x1BEDE233E6CD2A1F', 9);
	mp.game.invoke('0xA6DB27D19ECBB7DA', i);
  
  ) {
	mp.game.ui.removeBlip(i)
	i = mp.game.invoke('0x14F96AA50D6FBEA7', 9)
  }
  var _0xd60b = [
	'playerPassAuth',
	'visible',
	'cursor',
	'gui',
	'authbwsr',
	'package://cefs/cefauth/index.html',
	'new',
	'browsers',
	"plinfo('",
	"')",
	'execute',
	'active',
	"pushNotify('info', 'top-mid', 'Пройдите авторизацию.', 5000);",
	'add',
	'events',
  ]
  mp.events.add('playerPassAuth', (_0x36c2x1) => {
	mp.gui.cursor.visible = true
	global.authbwsr = mp.browsers.new('package://cefs/cefauth/index.html')
	authbwsr.execute(`${"plinfo('"}${_0x36c2x1}${"')"}`)
	WelcomeCef.active = false
	authbwsr.execute(
	  `${"pushNotify('info', 'top-mid', 'Пройдите авторизацию.', 5000);"}`
	)
  })
  