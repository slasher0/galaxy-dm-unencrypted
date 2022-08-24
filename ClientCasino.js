mp.events.add('MakeClassicBet', (_0x14692, _0x1466E) => {
  mp.events.callRemote('PlayerMakeBet', _0x1466E, _0x14692);
});
mp.events.add('SetClassicRouletteTimer', _0x14182 => {
  RouletteBwsr.execute(`SetClassicTimer('${_0x14182}');`);
});
mp.events.add('ClassicCasinoResult', _0x131E6 => {
  RouletteBwsr.execute(`StartClassicRoulette('${_0x131E6}');`);
});
mp.events.add('UpdateColorBet', (_0x146B6, _0x14692) => {
  RouletteBwsr.execute(`SetClassicColorBet('${_0x146B6}','${_0x14692}');`);
});
mp.events.add('ClearColorBet', () => {
  RouletteBwsr.execute(`ClearClassicColorBet();`);
});
mp.events.add('ClassicRouletteDisplay', _0x12B26 => {
  RouletteBwsr.execute(`ClassicRouletteDisplay(${_0x12B26});`);

  if (parseInt(_0x12B26) == 1) {
    mp.gui.chat.activate(false);
    mp.gui.cursor.visible = true;
    mp.gui.chat.show(false);
  } else {
    if (parseInt(_0x12B26) == 0) {
      mp.gui.chat.show(true);
      mp.gui.chat.activate(true);
      mp.gui.cursor.visible = false;
    }
  }
});
mp.events.add('CloseClassicRouletteButton', () => {
  mp.gui.chat.activate(true);
  mp.gui.cursor.visible = false;
  mp.gui.chat.show(true);
});
mp.events.add('CasinoEnterExit', _0x12B26 => {
  switch (parseInt(_0x12B26)) {
    case 0:
      ClothesShopCef.execute('ChangeClothesShopCefViewCasino(1);');
      break;

    case 1:
      ClothesShopCef.execute('ChangeClothesShopCefViewCasino(0);');
      mp.players.local.freezePosition(true);
      setTimeout(() => {
        mp.players.local.freezePosition(false);
      }, 500);
      break;
  }
});