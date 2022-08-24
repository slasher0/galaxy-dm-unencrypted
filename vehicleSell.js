const localplayer = mp.players.local;
mp.events.add('sellPlayerVehForTarget', (_0x6714, _0x66B6) => {
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

  mp.events.callRemote('sellPlayerVehForTarget', _0x6714, _0x66B6, circleMenuPlayerTarget.remoteId);
});
mp.events.add('Client:vehBuyBuyInteraction', _0x6134 => {
  mp.events.callRemote('vehBuyStartBuy', _0x6134);

  if (cancelBuyVehTimeout != null) {
    clearTimeout(cancelBuyVehTimeout);
    cancelBuyVehTimeout = null;
  }
});
mp.events.add('closeVehSellBuyModal', _0x6134 => {
  switch (_0x6134) {
    case 'Sell':
      HudMenuCEF.execute(`GANGWARVehSell.Active = 0`);
      break;

    default:
      HudMenuCEF.execute(`GANGWARVehBuy.Active = 0`);
      break;
  }
});
let cancelBuyVehTimeout = null;
mp.events.add('TARGETopenVehBuy', (_0x6772, _0x67D0, _0x66B6) => {
  cancelBuyVehTimeout = setTimeout(() => {
    mp.events.callRemote('vehBuyStartBuy', 'cancel');
  }, 20000);
  HudMenuCEF.execute(`GANGWARVehBuy.setVehForBuy('${_0x6772}','${_0x67D0}','${_0x66B6}')`);
});