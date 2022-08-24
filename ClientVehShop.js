const localplayer = mp.players.local;
let shoptype = 1;
global.inACarShop = 0;
mp.events.add('changeinACarShop', _0x25637 => {
  inACarShop = parseInt(_0x25637);
});
mp.events.add('StartVehSelect', _0x255FB => {
  shoptype = parseInt(_0x255FB);

  switch (parseInt(_0x255FB)) {
    case 1:
      vehicleShopCEF.execute(`VehShop.setShopActive(1);`);
      vehicleShopCEF.execute(`VehShop.setVehSelected(0);`);
      global.CarShopCamera = mp.cameras.new('default', new mp.Vector3(-40.09138488769531, -1101.3636474609375, 28.064502716064453), new mp.Vector3(90, 90, 90), 70);
      CarShopCamera.pointAtCoord(-47.04696273803711, -1097.9906005859375, 25.422344207763672);
      break;

    case 2:
      vehicleShopCEF.execute(`HeliShop.setHeliShopActive(1);`);
      vehicleShopCEF.execute(`HeliShop.setHeliSelected(0);`);
      global.CarShopCamera = mp.cameras.new('default', new mp.Vector3(-247.04995727539062, -1181.2913818359375, 28.83165740966797), new mp.Vector3(90, 90, 90), 70);
      CarShopCamera.pointAtCoord(-231.4176025390625, -1172.8922119140625, 23.969528198242188);
      break;
  }

  mp.game.cam.renderScriptCams(true, false, 0, true, false);
  CarShopCamera.setActive(true);
  mp.gui.chat.activate(false);
  mp.game.ui.displayRadar(false);
  mp.gui.chat.show(false);
  mp.gui.cursor.visible = true;
  mp.events.callRemote('StartVehSelect');
  ChangeHUDKeysDisplay('hide');
  ChangeHUDKillFeedDisplay('hide');
  ChangeHUDFreeCaseDisplay('hide');
  ChangeHUDRaitingDisplay('hide');
});
mp.events.add('StopVehSelect', () => {
  switch (parseInt(shoptype)) {
    case 1:
      vehicleShopCEF.execute(`VehShop.setShopActive(0);`);
      vehicleShopCEF.execute(`VehShop.setVehSelected(0);`);
      break;

    case 2:
      vehicleShopCEF.execute(`HeliShop.setHeliShopActive(0);`);
      vehicleShopCEF.execute(`HeliShop.setHeliSelected(0);`);
      break;
  }

  CarShopCamera.setActive(false);
  mp.game.cam.renderScriptCams(false, false, 0, false, false);
  mp.events.callRemote('StopVehSelect');
  mp.gui.cursor.visible = false;

  if (spawnedveh != null) {
    spawnedveh.destroy();
  }

  spawnedveh = null;
  ChangeHUDKeysDisplay('open');
  ChangeHUDKillFeedDisplay('open');
  ChangeHUDFreeCaseDisplay('open');
  ShowChat();
  mp.game.ui.displayRadar(true);
});
global.spawnedveh = null;
global.vehspawned = null;
var lastspawnedveh = '';
mp.events.add('VehShopSpawn', _0x258CB => {
  if (spawnedveh != null) {
    if (!mp.vehicles.exists(spawnedveh)) {
      return;
    }

    spawnedveh.destroy();
  }

  lastspawnedveh = _0x258CB;

  switch (parseInt(shoptype)) {
    case 1:
      spawnedveh = mp.vehicles.new(mp.game.joaat(`${_0x258CB}`), new mp.Vector3(-45.418785095214844, -1099.0333251953125, 25.75510025024414), {
        numberPlate: 'GALAXYDM',
        color: [70, 70],
        dimension: mp.players.local.dimension
      });
      spawnedveh.setHeading(283.1188049316406);
      break;

    case 2:
      spawnedveh = mp.vehicles.new(mp.game.joaat(`${_0x258CB}`), new mp.Vector3(-232.66259765625, -1172.2076416015625, 22.8483943939209), {
        numberPlate: 'GALAXYDM',
        color: [70, 70],
        dimension: mp.players.local.dimension
      });
      spawnedveh.setHeading(65.85758209228516);
      break;
  }

  spawnedveh.setEngineOn(true, true, true);
  spawnedveh.setDirtLevel(0);
  spawnedveh.setMod(11, 3);
  spawnedveh.setMod(12, 2);
  spawnedveh.setMod(13, 1);
  spawnedveh.setMod(18, 0);
  spawnedveh.setMod(40, 3);

  switch (parseInt(shoptype)) {
    case 1:
      vehicleShopCEF.execute(`VehShop.setVehicleInfo('${parseInt(mp.game.vehicle.getVehicleModelMaxSpeed(mp.game.joaat(`${_0x258CB}`)) * 4.4)}','${spawnedveh.getMaxTraction().toFixed(2)}','${spawnedveh.getMaxBraking().toFixed(2)}','${spawnedveh.getAcceleration().toFixed(2)}');`);
      vehicleShopCEF.execute(`VehShop.setVehSelected(1);`);
      break;

    case 2:
      vehicleShopCEF.execute(`HeliShop.setHeliInfo('${parseInt(mp.game.vehicle.getVehicleModelMaxSpeed(mp.game.joaat(`${_0x258CB}`)) * 4.4)}','${spawnedveh.getMaxTraction().toFixed(2)}','${spawnedveh.getMaxBraking().toFixed(2)}','${spawnedveh.getAcceleration().toFixed(2)}');`);
      vehicleShopCEF.execute(`HeliShop.setHeliSelected(1);`);
      break;
  }
});
mp.events.add('playerSpawn', () => {
  mp.players.local.setConfigFlag(429, true);
  mp.players.local.setConfigFlag(35, false);
  mp.players.local.setConfigFlag(241, true);
});
mp.events.add('VehShopTestDrive', () => {
  if (spawnedveh == null) {
    return;
  }

  mp.game.invoke('F75B0D629E1C063D', mp.players.local.handle, spawnedveh.handle, -1);
  spawnedveh.setEngineOn(true, true, true);

  switch (parseInt(shoptype)) {
    case 1:
      vehicleShopCEF.execute(`VehShop.setShopActive(0);`);
      break;

    case 2:
      vehicleShopCEF.execute(`HeliShop.setHeliShopActive(0);`);
      break;
  }

  CarShopCamera.setActive(false);
  mp.game.cam.renderScriptCams(false, false, 0, false, false);
  mp.gui.chat.activate(true);
  mp.game.ui.displayRadar(true);
  mp.gui.chat.show(true);
  mp.gui.cursor.visible = false;

  if (shoptype == 1) {
    spawnedveh.setCoordsNoOffset(-58.69493103027344, -1108.7562255859375, 26.435821533203125, false, false, false);
    spawnedveh.setHeading(73.7591323852539);
  }

  localplayer.setConfigFlag(32, false);
});
mp.events.add('playerLeaveVehicle', (_0x2795F, _0x27923) => {
  if (inACarShop == 1) {
    mp.events.call('VehShopSpawn', lastspawnedveh);

    switch (parseInt(shoptype)) {
      case 1:
        mp.players.local.setCoordsNoOffset(-39.915985107421875, -1106.4716796875, 26.422372817993164, false, false, false);
        vehicleShopCEF.execute(`VehShop.setShopActive(1);`);
        global.CarShopCamera = mp.cameras.new('default', new mp.Vector3(-40.09138488769531, -1101.3636474609375, 28.064502716064453), new mp.Vector3(90, 90, 90), 70);
        CarShopCamera.pointAtCoord(-47.04696273803711, -1097.9906005859375, 25.422344207763672);
        break;

      case 2:
        mp.players.local.setCoordsNoOffset(-177.1175537109375, -1158.581298828125, 23.81365966796875, false, false, false);
        vehicleShopCEF.execute(`HeliShop.setHeliShopActive(1);`);
        global.CarShopCamera = mp.cameras.new('default', new mp.Vector3(-247.04995727539062, -1181.2913818359375, 28.83165740966797), new mp.Vector3(90, 90, 90), 70);
        CarShopCamera.pointAtCoord(-231.4176025390625, -1172.8922119140625, 23.969528198242188);
        break;
    }

    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    CarShopCamera.setActive(true);
    mp.gui.chat.activate(false);
    mp.game.ui.displayRadar(false);
    mp.gui.chat.show(false);
    mp.gui.cursor.visible = true;
  }
});
mp.events.add('playerDeathInCarTestDrive', () => {
  if (inACarShop == 1) {
    mp.events.call('VehShopSpawn', lastspawnedveh);

    switch (parseInt(shoptype)) {
      case 1:
        mp.players.local.setCoordsNoOffset(-39.915985107421875, -1106.4716796875, 26.422372817993164, false, false, false);
        vehicleShopCEF.execute(`VehShop.setShopActive(1);`);
        global.CarShopCamera = mp.cameras.new('default', new mp.Vector3(-40.09138488769531, -1101.3636474609375, 28.064502716064453), new mp.Vector3(90, 90, 90), 70);
        CarShopCamera.pointAtCoord(-47.04696273803711, -1097.9906005859375, 25.422344207763672);
        break;

      case 2:
        mp.players.local.setCoordsNoOffset(-177.1175537109375, -1158.581298828125, 23.81365966796875, false, false, false);
        vehicleShopCEF.execute(`HeliShop.setHeliShopActive(1);`);
        global.CarShopCamera = mp.cameras.new('default', new mp.Vector3(-247.04995727539062, -1181.2913818359375, 28.83165740966797), new mp.Vector3(90, 90, 90), 70);
        CarShopCamera.pointAtCoord(-231.4176025390625, -1172.8922119140625, 23.969528198242188);
        break;
    }

    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    CarShopCamera.setActive(true);
    mp.gui.chat.activate(false);
    mp.game.ui.displayRadar(false);
    mp.gui.chat.show(false);
    mp.gui.cursor.visible = true;
  }
});
mp.events.add('buyTransportGangwar', _0x2799B => {
  mp.events.callRemote('buyTransportGangwar', _0x2799B);
});
mp.events.add('UnlockVehBuyLock', () => {
  vehicleShopCEF.execute(`UnlockbuyLock();`);
});
mp.events.add('OpenShopCEFVehSell', _0x279D7 => {
  mp.gui.cursor.visible = true;
});
mp.events.add('PlayerSellOwnVeh', () => {
  mp.events.callRemote('PlayerSellOwnVeh');
});
mp.events.add('CloseOwnVeh', () => {
  mp.gui.cursor.visible = false;
});
global.inDonateVehTest = 0;
mp.events.add('changeinDonateVehTest', _0x255FB => {
  inDonateVehTest = parseInt(_0x255FB);
});
mp.events.add('playerLeaveVehicle', (_0x2795F, _0x27923) => {
  if (inDonateVehTest == 1) {
    if (spawnedveh != null) {
      spawnedveh.destroy();
      spawnedveh = null;
    }

    mp.players.local.setCoordsNoOffset(DonateVehTestDrivePos.x, DonateVehTestDrivePos.y, DonateVehTestDrivePos.z, false, false, false);
    mp.events.callRemote('StopDonateVehicleTestDrive');
  }
});
mp.events.add('playerDeathInDonateVehicleTestDrive', () => {
  if (spawnedveh != null) {
    spawnedveh.destroy();
    spawnedveh = null;
  }

  mp.players.local.setCoordsNoOffset(DonateVehTestDrivePos.x, DonateVehTestDrivePos.y, DonateVehTestDrivePos.z, false, false, false);
  mp.events.callRemote('StopDonateVehicleTestDrive');
});