mp.events.add('Client:loadFreeHouses', _0xf9fex1 => {
    HudMenuCEF.execute(`${'EstateAgency.Active = 1'}`);
  
    let _0xf9fex2 = JSON.parse(_0xf9fex1);
  
    if (_0xf9fex2.length == 0) {
      return;
    }
  
    HudMenuCEF.execute(`${'EstateAgency.housesG = []'}`);
    HudMenuCEF.execute(`${'EstateAgency.housesE = []'}`);
    HudMenuCEF.execute(`${'EstateAgency.housesC = []'}`);
    HudMenuCEF.execute(`${'EstateAgency.housesB = []'}`);
  
    for (let _0xf9fex3 = 0; _0xf9fex3 < _0xf9fex2.length; _0xf9fex3++) {
      HudMenuCEF.execute(`${'EstateAgency.AddHouseFor(\''}${_0xf9fex2[_0xf9fex3].ID}${'\',\''}${_0xf9fex2[_0xf9fex3].Cl}${'\',\''}${_0xf9fex2[_0xf9fex3].Pr}${'\',\''}${_0xf9fex2[_0xf9fex3].Tax}${'\')'}`);
    }
  
    ChangeHUDKeysDisplay('hide');
    ChangeHUDKillFeedDisplay('hide');
    ChangeHUDFreeCaseDisplay('hide');
    ChangeHUDRaitingDisplay('hide');
    mp.gui.cursor.visible = true;
    hideChat();
  });
  let EstateAgencyPeds = [{
    x: 109.8684310913086,
    y: -877.779541015625,
    z: 30.67151222229004,
    heading: 263.6696472167969,
    model: 'cs_andreas',
    NPCName: null
  }, {
    x: 111.88760375976562,
    y: -872.1092529296875,
    z: 30.671537017822266,
    heading: 261.4422302246094,
    model: 'cs_andreas',
    NPCName: null
  }, {
    x: 114.0279769897461,
    y: -866.4292602539062,
    z: 30.67151222229004,
    heading: 256.2005310058594,
    model: 'cs_andreas',
    NPCName: null
  }, {
    x: 107.90371704101562,
    y: -882.6925048828125,
    z: 30.671514129638672,
    heading: 251.99952697753906,
    model: 'cs_andreas',
    NPCName: null
  }];
  mp.events.add('entityStreamIn', _0xf9fex6 => {});
  
  function loadEstateAgencyPeds() {
    try {
      for (let _0xf9fex3 = 0; _0xf9fex3 < EstateAgencyPeds.length; _0xf9fex3++) {
        let _0xf9fex8 = mp.colshapes.newCircle(EstateAgencyPeds[_0xf9fex3].x, EstateAgencyPeds[_0xf9fex3].y, 4, 8);
  
        _0xf9fex8.estateAgencyShape = true;
  
        if (EstateAgencyPeds[_0xf9fex3].NPCName != null) {
          mp.labels.new(`${''}${EstateAgencyPeds[_0xf9fex3].NPCName}${''}`, new mp.Vector3(EstateAgencyPeds[_0xf9fex3].x, EstateAgencyPeds[_0xf9fex3].y, EstateAgencyPeds[_0xf9fex3].z + 1.3), {
            font: 4,
            drawDistance: 5,
            color: [255, 255, 255, 255],
            dimension: 8
          });
        }
      }
    } catch (e) {
      mp.gui.chat.push(`${'e1: '}${e}${''}`);
    }
  }
  
  loadEstateAgencyPeds();
  let estateAgencyData = {
    inShape: false,
    interfaceOpen: false,
    'interfaceOpen': true,
    'inShape': true
  };
  mp.events.add('playerEnterColshape', _0xf9fexa => {
    if (_0xf9fexa.estateAgencyShape == true) {}
  });
  mp.events.add('playerExitColshape', _0xf9fexa => {
    if (_0xf9fexa.estateAgencyShape == true) {
      estateAgencyData.inShape = false;
  
      if (estateAgencyData.interfaceOpen == true) {
        estateAgencyData.interfaceOpen = false;
        HudMenuCEF.execute(`${'EstateAgency.Active = 0'}`);
        mp.gui.cursor.visible = false;
        ChangeHUDKeysDisplay('show');
        ChangeHUDKillFeedDisplay('show');
        ChangeHUDFreeCaseDisplay('show');
        ChangeHUDRaitingDisplay('show');
        ShowChat();
      }
    }
  });
  mp.keys.bind(0x45, false, function () {
    if (mp.gui.cursor.visible || ChatActive) {
      return;
    }
  });
  mp.events.add('closeEstateAgency', () => {
    estateAgencyData.interfaceOpen = false;
    HudMenuCEF.execute(`${'EstateAgency.Active = 0'}`);
    mp.gui.cursor.visible = false;
    ChangeHUDKeysDisplay('show');
    ChangeHUDKillFeedDisplay('show');
    ChangeHUDFreeCaseDisplay('show');
    ChangeHUDRaitingDisplay('show');
    ShowChat();
  });
  mp.events.add('EstateAgencyBuyAContract', _0xf9fexb => {
    mp.events.callRemote('EstateAgencyBuyAContract', _0xf9fexb);
  });
  mp.events.add('EstateAgencySetWaypoint', (_0xf9fexc, _0xf9fexd) => {
    mp.game.ui.setNewWaypoint(parseFloat(_0xf9fexc), parseFloat(_0xf9fexd));
  });