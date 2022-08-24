mp.events.add('RoulCefSetBalance', (_0x272CF, _0x257DB) => {
	RouletteBwsr.execute(`SetBalance('${_0x272CF}', '${_0x257DB}');`);
  });
  mp.events.add('DonateCaseDoOpen', (_0x2730B, _0x27347) => {
	mp.events.callRemote('DonateCaseDoOpen', _0x2730B, _0x27347);
  });
  mp.events.add('DonateCaseDoRoll', (_0x2730B, _0x27347, _0x27383) => {
	HudMenuCEF.execute(`casesDoRoll('${_0x2730B}',${_0x27347},${_0x27383})`);
  });
  mp.events.add('CasePrizeInteraction', _0x255FB => {
	mp.events.callRemote('CasePrizeInteraction', _0x255FB);
  });
  mp.events.add('unlockCaseRoll', () => {
	HudMenuCEF.execute(`unlockCaseRoll();`);
  });
  mp.events.add('freeCaseDoOpen', () => {
	mp.events.callRemote('DoRollFreeCase');
  });