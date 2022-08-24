const localplayer = mp.players.local;
let GALAXYGAMESPos = [{
  x: 126.18180084228516,
  y: -1304.4793701171875,
  z: 29.232751846313477,
  shapeType: 'Enter',
  radius: 2,
  labelText: 'Вход в GALAXY GAMES (e)'
}, {
  x: 1089.9832763671875,
  y: 208.16842651367188,
  z: -48.99995803833008,
  shapeType: 'Exit',
  radius: 1.8,
  labelText: 'Выход'
}, {
  x: 1108.58349609375,
  y: 217.15330505371094,
  z: -80.44013214111328,
  shapeType: 'GALAXYGAMES',
  radius: 17,
  labelText: 'GALAXY GAMES (e)'
}];

function loadGGAMESColshapes() {
  for (let _0x25367 = 0; _0x25367 < GALAXYGAMESPos.length; _0x25367++) {
    var _0x2898B = mp.colshapes.newCircle(GALAXYGAMESPos[_0x25367].x, GALAXYGAMESPos[_0x25367].y, GALAXYGAMESPos[_0x25367].radius, 8);

    _0x2898B.GGAMESshapeType = `${GALAXYGAMESPos[_0x25367].shapeType}`;

    if (GALAXYGAMESPos[_0x25367].labelText != null) {
      mp.labels.new(`${GALAXYGAMESPos[_0x25367].labelText}`, new mp.Vector3(GALAXYGAMESPos[_0x25367].x, GALAXYGAMESPos[_0x25367].y, GALAXYGAMESPos[_0x25367].z), {
        font: 4,
        drawDistance: 15,
        color: [255, 255, 255, 255],
        dimension: 8
      });
    }
  }
}

loadGGAMESColshapes();
global.RouletteGames = {
  inShape: false,
  GameActive: false,
  lockInterval: null
};
mp.events.add('playerEnterColshape', _0x273BF => {
  if (_0x273BF.GGAMESshapeType == 'Enter') {}

  if (_0x273BF.GGAMESshapeType == 'Exit') {}

  if (_0x273BF.GGAMESshapeType == 'GALAXYGAMES') {
    if (localplayer.position.z > -40.955867767333984) {
      return;
    }

    RouletteGames.inShape = true;
  }
});
mp.events.add('playerExitColshape', _0x273BF => {
  if (_0x273BF.GGAMESshapeType == 'Enter' || _0x273BF.GGAMESshapeType == 'Exit') {}

  if (_0x273BF.GGAMESshapeType == 'GALAXYGAMES') {
    RouletteGames.inShape = false;

    if (RouletteGames.GameActive != true) {
      return;
    }

    mp.game.graphics.transitionFromBlurred(1);
    RouletteGames.GameActive = false;
    HudMenuCEF.execute(`GALAXYGames.changeActive(0)`);
    HudMenuCEF.execute(`ChangeMainBlockHUD('open')`);
    HudMenuCEF.execute(`ChangeGangwarHud('open')`);
    ChangeHUDKeysDisplay('open');
    ChangeHUDKillFeedDisplay('open');
    ChangeHUDFreeCaseDisplay('open');
    ShowChat();
    mp.game.ui.displayRadar(true);
  }
});
mp.keys.bind(0x45, false, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (RouletteGames.inShape == true) {
    if (RouletteGames.GameActive != false) {
      return;
    }

    mp.events.callRemote('RouletteTryE');
  }
});
mp.events.add('RouletteOpenInterface', (_0x273FB, _0x27437, _0x27563, _0x274AF, _0x27473, _0x27527) => {
  RouletteGames.GameActive = true;
  mp.game.graphics.transitionToBlurred(1);
  HudMenuCEF.execute(`GALAXYGames.setStaticID('${localplayer.getVariable('StaticID')}')`);
  HudMenuCEF.execute(`GALAXYGames.setLogin('${localplayer.name}')`);
  HudMenuCEF.execute(`GALAXYGames.changeActive(1)`);
  HudMenuCEF.execute(`ChangeMainBlockHUD('close')`);
  HudMenuCEF.execute(`ChangeGangwarHud('close')`);
  HudMenuCEF.execute(`GALAXYGames.CurrentWinnerShow = 0`);
  mp.gui.chat.activate(false);
  mp.gui.chat.show(false);
  mp.gui.cursor.visible = true;
  ChangeHUDKeysDisplay('hide');
  ChangeHUDKillFeedDisplay('hide');
  ChangeHUDFreeCaseDisplay('hide');
  ChangeHUDRaitingDisplay('hide');
  mp.game.ui.displayRadar(false);

  if (RouletteGames.lockInterval != null) {
    clearInterval(RouletteGames.lockInterval);
  }

  RouletteGames.lockInterval = setInterval(() => {
    mp.game.controls.disableAllControlActions(0);
    mp.game.controls.disableAllControlActions(1);
    mp.game.controls.disableAllControlActions(2);
    mp.game.controls.disableAllControlActions(3);
  }, 0);

  if (_0x27527 == true) {
    HudMenuCEF.execute(`GALAXYGames.playerBets = []`);
    HudMenuCEF.execute(`GALAXYGames.playersChance = []`);
    HudMenuCEF.execute(`GALAXYGames.Bank = 0`);
    HudMenuCEF.execute(`GALAXYGames.BankString = '0'`);
    HudMenuCEF.execute(`GALAXYGames.GameTimerStopInterval()`);
    HudMenuCEF.execute(`clearRouletteResultUsers()`);
  }

  if (_0x27563 != null) {
    HudMenuCEF.execute(`GALAXYGames.changeGamesTop('lastWinner','${_0x27563}')`);
  }

  if (_0x274AF != null) {
    HudMenuCEF.execute(`GALAXYGames.changeGamesTop('bestWinner','${_0x274AF}')`);
  }

  HudMenuCEF.execute(`GALAXYGames.setCurrentBank('${_0x27473}')`);

  let _0x274EB = JSON.parse(_0x273FB);

  let _0x2759F = JSON.parse(_0x27437);

  if (_0x274EB.length >= 1) {
    for (let _0x25367 = 0; _0x25367 < _0x274EB.length; _0x25367++) {
      HudMenuCEF.execute(`GALAXYGames.addBet('${JSON.stringify(_0x274EB[_0x25367])}')`);
    }
  } else {}

  if (_0x2759F.length >= 1) {
    for (let _0x25367 = 0; _0x25367 < _0x2759F.length; _0x25367++) {
      HudMenuCEF.execute(`GALAXYGames.addUser('${JSON.stringify(_0x2759F[_0x25367])}')`);
    }
  } else {}
});
mp.events.add('GAMESRouletteExit', () => {
  mp.game.graphics.transitionFromBlurred(1);
  RouletteGames.GameActive = false;
  HudMenuCEF.execute(`GALAXYGames.changeActive(0)`);
  HudMenuCEF.execute(`ChangeMainBlockHUD('open')`);
  HudMenuCEF.execute(`ChangeGangwarHud('open')`);

  if (RouletteGames.lockInterval != null) {
    clearInterval(RouletteGames.lockInterval);
    RouletteGames.lockInterval = null;
  }

  ChangeHUDKeysDisplay('open');
  ChangeHUDKillFeedDisplay('open');
  ChangeHUDFreeCaseDisplay('open');
  ShowChat();
  mp.game.ui.displayRadar(true);
  mp.gui.cursor.visible = false;
});
mp.events.add('ClearAllInGalaxyGames', () => {
  HudMenuCEF.execute(`GALAXYGames.playerBets = []`);
  HudMenuCEF.execute(`GALAXYGames.playersChance = []`);
  HudMenuCEF.execute(`GALAXYGames.Bank = 0`);
  HudMenuCEF.execute(`GALAXYGames.BankString = '0'`);
  HudMenuCEF.execute(`GALAXYGames.GameTimerStopInterval()`);
  HudMenuCEF.execute(`clearRouletteResultUsers()`);
});
mp.events.add('GLXYGAMESTimerInteraction', (_0x255FB, _0x27257) => {
  switch (_0x255FB) {
    case 'clearInterval':
      HudMenuCEF.execute(`GALAXYGames.GameTimerStopInterval()`);
      break;

    case 'FreezeTimer':
      HudMenuCEF.execute(`GALAXYGames.GameTimerSetFreeze()`);
      HudMenuCEF.execute(`GALAXYGames.GameStatus = 'wait'`);
      break;

    case 'startTimer':
      HudMenuCEF.execute(`GALAXYGames.GameTimerStartTimer('${parseInt(_0x27257)}')`);
      HudMenuCEF.execute(`GALAXYGames.GameStatus = 'wait'`);
      break;
  }
});
mp.events.add('makeBetGALAXYGAMES', (_0x276CB, _0x27707) => {
  mp.events.callRemote('Server:makeBetGALAXYGAMES', _0x276CB, _0x27707);
});
mp.events.add('GLXYGAMESClearItemsForBet', () => {
  HudMenuCEF.execute(`ClearItemsForBet()`);
});
mp.events.add('GLXYGamesChangeParam', (_0x255FB, _0x26C3F) => {
  switch (_0x255FB) {
    case 'GameNumber':
      HudMenuCEF.execute(`GALAXYGames.GameNumber = '${_0x26C3F}'`);
      break;

    case 'GameBank':
      HudMenuCEF.execute(`GALAXYGames.setCurrentBank('${_0x26C3F}')`);
      break;

    case 'lastWinner':
      HudMenuCEF.execute(`GALAXYGames.changeGamesTop('lastWinner','${_0x26C3F}')`);
      break;

    case 'bestWinner':
      HudMenuCEF.execute(`GALAXYGames.changeGamesTop('bestWinner','${_0x26C3F}')`);
      break;
  }
});
mp.events.add('GALAXYGAMESAddNewBet', _0x27743 => {
  HudMenuCEF.execute(`GALAXYGames.addBet('${_0x27743}')`);
});
mp.events.add('GALAXYGAMESAddNewUser', _0x2777F => {
  HudMenuCEF.execute(`GALAXYGames.addUser('${_0x2777F}')`);
});
mp.events.add('GALAXYGAMESShowResult', (_0x2786F, _0x27833, _0x277F7, _0x277BB) => {
  HudMenuCEF.execute(`GALAXYGames.CurrentWinner = ['${_0x277BB.substring(0, 15)}','${_0x277F7}']`);
  HudMenuCEF.execute(`GALAXYGames.winTicketFinal = '${_0x2786F}'`);
  HudMenuCEF.execute(`$('.SlotsWindow.roulet-main_SlotsWindow').css("transition", 'all 100ms cubic-bezier(0.32, 0.64, 0.45, 1) 0ms')`);
  HudMenuCEF.execute(`$('.SlotsWindow.roulet-main_SlotsWindow').css("transform", 'translate3d(0px, 0px, 0px)')`);
  setTimeout(() => {
    HudMenuCEF.execute(`StartRouletteMain('${_0x27833}')`);
  }, 2000);
});
mp.events.add('GALAXYGAMES_AddNewWinItem', (_0x2550B, _0x25547) => {
  HudMenuCEF.execute(`GGamesAddWinItem('${_0x2550B}','${_0x25547}')`);
});
mp.events.add('initWinItemsInv', _0x278E7 => {
  let _0x278AB = JSON.parse(_0x278E7);

  if (Array.isArray(_0x278AB) != true) {
    return;
  }

  if (_0x278AB.length <= 0) {
    return;
  }

  setTimeout(() => {
    for (let _0x25367 = 0; _0x25367 < _0x278AB.length; _0x25367++) {
      mp.events.call('GALAXYGAMES_AddNewWinItem', _0x278AB[_0x25367].ID, _0x278AB[_0x25367].ISrl);
    }
  }, 5000);
});
mp.events.add('GALAXYGAMES_RemoveWinItem', (_0x2550B, _0x25547) => {
  HudMenuCEF.execute(`GGamesRemoveWinItem('${_0x2550B}','${_0x25547}')`);
});
mp.events.add('GALAXYGAMESWinItemIntercation', (_0x255FB, _0x2550B, _0x256EB) => {
  mp.events.callRemote('Server:GALAXYGAMESWinItemIntercation', _0x255FB, _0x2550B, _0x256EB);
});