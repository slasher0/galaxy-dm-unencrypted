mp.events.add('blipsquit', () => {
	allblips.forEach(_0x13762 => {
	  mp.game.invoke('0x45FF974EEE1C8734', _0x13762, 0);
	});
	GhettoBlip.forEach(_0x13786 => {
	  mp.game.invoke('0x45FF974EEE1C8734', _0x13786, 0);
	});
	allblips = [];
	GhettoBlip = [];
  });