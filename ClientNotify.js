mp.events.add('welcomebackname', _0x26E97 => {
	WelcomeCef.execute(`pushNotify('error', 'top-mid', '${missmsg}', 5000);`);
  });
  mp.events.add('activevip', _0x26ED3 => {
	WelcomeCef.execute(`pushNotify('error', 'top-mid', '${missmsg}', 5000);`);
  });
  mp.events.add('emsgr', _0x26F0F => {
	authbwsr.execute(`pushNotify('error', 'top-mid', '${_0x26F0F}', 5000);`);
  });
  mp.events.add('smsgr', _0x26F4B => {
	authbwsr.execute(`pushNotify('true', 'top-mid', '${_0x26F4B}', 5000);`);
  });
  mp.events.add('smsghud', _0x2703B => {
	HudMenuCEF.execute(`pushNotify('true', 'top-mid', '${_0x2703B}', 5000);`);
  });
  mp.events.add('imsghud', _0x27077 => {
	HudMenuCEF.execute(`pushNotify('info', 'top-mid', '${_0x27077}', 5000);`);
	InventoryCEF.execute(`GangwarPlayLocalSounds('infomsg')`);
  });
  mp.events.add('vehimsghud', _0x27077 => {
	HudMenuCEF.execute(`pushNotify('info', 'bottom-mid', '${_0x27077}', 500);`);
  });
  mp.events.add('emsghud', _0x270B3 => {
	HudMenuCEF.execute(`pushNotify('error', 'top-mid', '${_0x270B3}', 5000);`);
  });
  mp.events.add('fastemsghud', _0x270B3 => {
	HudMenuCEF.execute(`pushNotify('error', 'top-mid', '${_0x270B3}', 1000);`);
  });
  mp.events.add('fastimsghud', _0x27077 => {
	HudMenuCEF.execute(`pushNotify('info', 'top-mid', '${_0x27077}', 1000);`);
  });
  mp.events.add('fastsmsghud', _0x27077 => {
	HudMenuCEF.execute(`pushNotify('true', 'top-mid', '${_0x27077}', 1000);`);
  });
  mp.events.add('smsghudfast', _0x26F4B => {
	HudMenuCEF.execute(`pushNotify('true', 'top-mid', '${_0x26F4B}', 1000);`);
  });
  mp.events.add('smsgbuyhud', _0x2703B => {
	HudMenuCEF.execute(`pushNotify('true', 'top-mid', '${_0x2703B}', 1000);`);
  });
  mp.events.add('smsglobby', _0x2703B => {
	HudMenuCEF.execute(`pushNotify('true', 'top-mid', '${_0x2703B}', 5000);`);
  });
  mp.events.add('imsglobby', _0x27077 => {
	HudMenuCEF.execute(`pushNotify('info', 'top-mid', '${_0x27077}', 5000);`);
  });
  mp.events.add('emsglobby', _0x270B3 => {
	HudMenuCEF.execute(`pushNotify('error', 'top-mid', '${_0x270B3}', 5000);`);
  });