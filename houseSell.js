const localplayer = mp.players.local;
mp.events.add('sellPlayerHouseForTarget', (_0x688C, _0x66B6) => {
  if (!inGreenZone) {
    return mp.events.call('emsghud', 'Вы должны находитья в зелёной зоне.');
  }

  if (!circleMenuPlayerTarget) {
    return mp.events.call('emsghud', 'Покупатель не определён.');
  }

  if (circleMenuPlayerTarget.remoteId == mp.players.local.remoteId) {
    return;
  }

  if (circleMenuPlayerTarget == null || !mp.players.exists(circleMenuPlayerTarget)) {
    return mp.events.call('emsghud', 'Игрок вышел с сервера.');
  }

  const _0x6424 = localplayer.position;
  const _0x6482 = circleMenuPlayerTarget.position;

  let _0x63C6 = mp.game.system.vdist(_0x6424.x, _0x6424.y, _0x6424.z, _0x6482.x, _0x6482.y, _0x6482.z);

  if (_0x63C6 >= 5) {
    return mp.events.call('emsghud', 'Игрок слишком далеко.');
  }

  mp.events.callRemote('sellPlayerHouseForTarget', _0x688C, _0x66B6, circleMenuPlayerTarget.remoteId);
});
mp.events.add('Client:houseBuyInteraction', _0x6134 => {
  mp.events.callRemote('houseBuyStartBuy', _0x6134);

  if (cancelBuyHouseTimeout != null) {
    clearTimeout(cancelBuyHouseTimeout);
    cancelBuyHouseTimeout = null;
  }
});
mp.events.add('closeHouseSellBuyModal', _0x6134 => {
  switch (_0x6134) {
    case 'Sell':
      HudMenuCEF.execute(`GANGWARHouseSell.Active = 0`);
      break;

    default:
      HudMenuCEF.execute(`GANGWARHouseBuy.Active = 0`);
      break;
  }

  mp.gui.cursor.visible = false;
});
let cancelBuyHouseTimeout = null;
mp.events.add('TargetOpenHouseBuy', (_0x6772, _0x6AC0, _0x6A04, _0x6A62, _0x66B6) => {
  cancelBuyHouseTimeout = setTimeout(() => {
    mp.events.callRemote('houseBuyStartBuy', 'cancel');
  }, 20000);
  HudMenuCEF.execute(`GANGWARHouseBuy.setHouseForBuy('${_0x6772}','${_0x6AC0}','${_0x6A04}','${_0x6A62}','${_0x66B6}')`);
});