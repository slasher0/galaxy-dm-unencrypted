mp.events.add('DonateBuyItem', (_0x1cb3x1, _0x1cb3x2, _0x1cb3x3) => {
    if (_0x1cb3x1 == undefined || _0x1cb3x1 == null || _0x1cb3x1 == 'null' || _0x1cb3x1 == '') {
      return;
    }
  
    if (_0x1cb3x2 == undefined || _0x1cb3x2 == null || _0x1cb3x2 == 'null' || _0x1cb3x2 == '') {
      return;
    }
  
    mp.events.callRemote('DonateBuyItem', _0x1cb3x1, _0x1cb3x2, _0x1cb3x3);
  });
  mp.events.add('DonateChangeGDCtoMoney', _0x1cb3x3 => {
    if (_0x1cb3x3 == undefined || _0x1cb3x3 == null || _0x1cb3x3 == 'null' || _0x1cb3x3 == '') {
      return HudMenuCEF.execute(`${'emsg(\'Введите количество GDC для обмена.\');'}`), HudMenuCEF.execute(`${'unlockDonate();'}`);
    }
  
    if (parseInt(_0x1cb3x3) == undefined || parseInt(_0x1cb3x3) == null || parseInt(_0x1cb3x3) == 'null' || parseInt(_0x1cb3x3) == '') {
      return HudMenuCEF.execute(`${'emsg(\'Введите количество GDC для обмена.\');'}`), HudMenuCEF.execute(`${'unlockDonate();'}`);
    }
  
    if (parseInt(_0x1cb3x3) == 0 || parseInt(_0x1cb3x3) <= 0 || isNaN(parseInt(_0x1cb3x3)) == true) {
      return HudMenuCEF.execute(`${'emsg(\'Введите количество GDC для обмена.\');'}`), HudMenuCEF.execute(`${'unlockDonate();'}`);
    }
  
    if (parseInt(_0x1cb3x3) !== _0x1cb3x3) {
      return HudMenuCEF.execute(`${'emsg(\'Введите количество GDC для обмена.\');'}`), HudMenuCEF.execute(`${'unlockDonate();'}`);
    }
  
    mp.events.callRemote('DonateChangeGDCtoMoney', parseInt(_0x1cb3x3));
  });
  mp.events.add('DonateBuyPromo', _0x1cb3x3 => {
    if (_0x1cb3x3 == undefined || _0x1cb3x3 == null || _0x1cb3x3.length <= 0 || _0x1cb3x3 == '') {
      return HudMenuCEF.execute(`${'emsg(\'Введите название промокода.\');'}`), HudMenuCEF.execute(`${'unlockDonate();'}`);
    }
  
    mp.events.callRemote('DonateBuyPromo', _0x1cb3x3);
  });
  mp.events.add('UnlockDonateButton', () => {
    HudMenuCEF.execute(`${'unlockDonate();'}`);
  });
  mp.events.add('PlayerPromocodeEnter', _0x1cb3x4 => {
    mp.events.callRemote('PlayerPromocodeEnter', _0x1cb3x4);
  });
  mp.events.add('PlayerChangeLoginDonate', _0x1cb3x5 => {
    mp.events.callRemote('ChangeLoginDonate', _0x1cb3x5);
  });
  mp.events.add('PlayerChangeLoginFree', _0x1cb3x5 => {
    mp.events.callRemote('ChangeLoginFree', _0x1cb3x5);
  });
  mp.events.add('PlayerChangePlateNumberDonate', _0x1cb3x6 => {
    mp.events.callRemote('ChangePlateNumberDonate', _0x1cb3x6);
  });
  mp.events.add('clientloginchange', _0x1cb3x5 => {
    if (_0x1cb3x5 == '') {
      return mp.game.graphics.notify(`${'~r~Заполните все поля.'}`);
    }
  
    if (_0x1cb3x5.length < 5) {
      return mp.game.graphics.notify(`${'~r~Длина нового логина должна быть больше 5 символов.'}`);
    }
  
    mp.events.callRemote('ChangeLogin', _0x1cb3x5);
  });
  mp.events.add('ShowClientlogin', () => {
    mp.events.callRemote('showplayerlogin');
  });
  mp.events.add('clientpasschange', (_0x1cb3x7, _0x1cb3x8, _0x1cb3x9) => {
    if (_0x1cb3x7 == '' || _0x1cb3x8 == '' || _0x1cb3x9 == '') {
      return mp.game.graphics.notify(`${'~r~Заполните все поля.'}`);
    }
  
    if (_0x1cb3x8 != _0x1cb3x9) {
      return mp.game.graphics.notify(`${'~r~Пароли не совпадают.'}`);
    }
  
    if (_0x1cb3x8.length < 5) {
      return mp.game.graphics.notify(`${'~r~Длина нового логина должна быть больше 5 символов.'}`);
    }
  
    mp.events.callRemote('ChangePass', _0x1cb3x7, _0x1cb3x8);
  });
  mp.events.add('changeGDCtoGHMoney', _0x1cb3xb => {
    if (_0x1cb3xb == null || _0x1cb3xb == undefined) {
      return HudMenuCEF.execute(`${'emsg(\'Введите сумму.\');'}`);
    }
  
    if (!_0x1cb3xb.match(/^\d+$/)) {
      return player.call('emsghud', ['Введите число.']);
    }
  
    mp.events.callRemote('ChangeDonToGhettoMoney', _0x1cb3xb);
    setTimeout(() => {}, 3000);
  });
  mp.events.add('BuyMaxGhettoLvl', () => {
    mp.events.callRemote('BuyMaxGhettoLvl');
  });
  mp.events.add('Buy5GhettoLvl', () => {
    mp.events.callRemote('Buy5GhettoLvl');
  });
  mp.events.add('BuyRezervFib', () => {
    mp.events.callRemote('BuyRezervFib');
  });
  mp.events.add('playerbuypromo', _0x1cb3x4 => {
    mp.events.callRemote('BuyPromo', _0x1cb3x4);
  });
  mp.events.add('updateGDCBalance', () => {
    mp.events.callRemote('updateGDCBalance');
  });
  mp.events.add('unlockUpdateGDCBalance', () => {
    HudMenuCEF.execute(`${'unlockUpdateGDCBalance()'}`);
  });
  global.donateCEF = null;
  global.donateCloseBtnCEF = null;
  mp.events.add('buyGDCBalance', () => {
    if (donateCEF != null) {
      if (mp.browsers.exists(donateCEF)) {
        donateCEF.destroy();
      }
  
      donateCEF = null;
    }
  
    if (donateCloseBtnCEF != null) {
      if (mp.browsers.exists(donateCloseBtnCEF)) {
        donateCloseBtnCEF.destroy();
      }
  
      donateCloseBtnCEF = null;
    }
  
    donateCEF = mp.browsers.new('https://galaxydm.ru/');
    donateCloseBtnCEF = mp.browsers.new('package://cefs/cefdonateclose/index.html');
    HudMenuCEF.active = false;
  });
  mp.events.add('donateBrowserClose', () => {
    if (donateCEF != null) {
      if (mp.browsers.exists(donateCEF)) {
        donateCEF.destroy();
      }
  
      donateCEF = null;
    }
  
    if (donateCloseBtnCEF != null) {
      if (mp.browsers.exists(donateCloseBtnCEF)) {
        donateCloseBtnCEF.destroy();
      }
  
      donateCloseBtnCEF = null;
    }
  
    HudMenuCEF.active = true;
  });