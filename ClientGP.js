var _$_5fd0 = ["changeGP", "execute", "add", "events", "ChangeSnowflakes", "GPBuyItem", "callRemote"];
let authed = false;
mp.events.add('changeGP', _0x171E2 => {
  if (authed == false) {
    authed = true;
    setTimeout(() => {
      HudMenuCEF.execute(`GPShop.setBalance('${_0x171E2}')`);
    }, 5000);
  } else {
    HudMenuCEF.execute(`GPShop.setBalance('${_0x171E2}')`);
  }
});
let authedsf = false;
mp.events.add('ChangeSnowflakes', _0x17206 => {
  if (authedsf == false) {
    authedsf = true;
    setTimeout(() => {
      HudMenuCEF.execute(`newyearShop.Balance = '${_0x17206}'`);
    }, 5000);
  } else {
    HudMenuCEF.execute(`newyearShop.Balance = '${_0x17206}'`);
  }
});
mp.events.add('GPBuyItem', _0x155E6 => {
  mp.events.callRemote('GPBuyItem', _0x155E6);
});
var _0x8b32 = ["SnowFlakesBuyItem", "callRemote", "events", "add"];
mp.events.add('SnowFlakesBuyItem', _0x88f0x1 => {
  mp.events.callRemote('SnowFlakesBuyItem', _0x88f0x1);
});