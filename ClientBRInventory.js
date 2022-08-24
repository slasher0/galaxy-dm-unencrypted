var _$_8df4 = ["local", "players", "Status", "dimension", "GameDimension", "visible", "cursor", "gui", "activate", "chat", "show", "execute", "getHealth", "getArmour", "name", "StaticID", "getVariable", "hide", "open", "push", "bind", "keys", "SetArmour", "BRSetArmour", "callRemote", "events", "add", "AttachObject", "removeLocal", "attachmentMngr", "addLocal", "Бронежилет (1)", "/armor1.svg", "false", "Бронежилет (2)", "/armor2.svg", "Бронежилет (3)", "/armor3.svg", "Revolver", "/HeavyRevolver.png", "true", "Sniper Rifle", "/SniperRifle.png", "SniperRifle", "Combat MG", "/CombatMG.png", "CombatMG", "Assault Rifle", "/AssaultRifle.png", "AssaultRifle", "Carbine Rifle", "/CarbineRifle.png", "CarbineRifle", "Heavy Shotgun", "/HeavyShotgun.png", "HeavyShotgun", "Advanced Rifle", "/AdvancedRifle.png", "AdvancedRifle", "Special Carbine", "/SpecialCarbine.png", "SpecialCarbine", "SMG", "/SMG.png", "Gusenberg Sweeper", "/GusenbergSweeper.png", "GusenbergSweeper", "Pump Shotgun", "/PumpShotgun.png", "PumpShotgun", "Micro SMG", "/MicroSMG.png", "MicroSMG", "Assault SMG", "/AssaultSMG.png", "AssaultSMG", "Combat PDW", "/CombatPDW.png", "CombatPDW", "SNS Pistol", "/SNSPistol.png", "SNSPistol", "Vintage Pistol", "/VintagePistol.png", "VintagePistol", "Musket", "/Musket.png", "Bullpup Shotgun", "/BullpupShotgun.png", "BullpupShotgun", "Аптечка", "/firstaidkit.svg", "Обезболивающее", "/pills.svg", "Патроны 7.62", "/ammo_box1.svg", "Патроны 11.43", "/ammo_box2.svg", "Патроны .410", "/ammo_box3.svg", "ItemID", "find", "hash", "BRFastSlotsData", "weapon", "Carbine", "health", "Health", "armour", "Armour", "holster", "Holster", "clearBRInventoryBeforeStart", "SlotNumber", "ActiveWeaponID", "7.62", "11.43", ".410", "BRActiveFastSlot", "AmmoType", "BRInventory_AddAmmoCount", "count", "BRInventory_MinusAmmoCount", "BRSetWeaponFastSlot", "ItemHash", "ammoCount", "giveWeapon", "ammoID", "maxAmmo", "0xADF692B254977C0C", "handle", "invoke", "game", "0xDCD2A934D65CB497", "0x14E56BC5B5DB6A19", "ClearFastSlot", "FastSlot1", "FastSlot2", "FastSlot3", "FastSlot4", "ArmourFastSlot", "length", "filter", "removeWeapon", "ItemSerial", "WeaponID", "isFalling", "getTime", "position", "BRLootItemID", "undefined", "x", "y", "z", "vdist", "system", "remoteId", "forEach", "objects", "BRInventoryFindDropAround", "BRInventory_AddNewItem", "playerWeaponShot", "taskSwapWeapon", "BRHealthInteraction", "BRInventoryItemIntercation", "using", "BRDropItemOnGround", "drop", "BRClearPlayerArmour", "BRdropOnGroundDeathItem", "BRInventoryItemIntercationByDeath", "playerDeath", "dropOnGroundAllItems()"];
var BrinvOpen = 0;
const localplayer = mp.players.local;
mp.keys.bind(0x49, true, function () {
  try {
    if (BRAll.Status == 0 || localplayer.dimension < 500000) {
      return;
    }

    if (BRAll.Status < 4 || BRAll.GameDimension == null) {
      return;
    }

    if (BRAll.GameDimension != localplayer.dimension) {
      return;
    }

    if (BRInventoryCEF == null || BRInventoryCEF == undefined) {
      return;
    }

    switch (BrinvOpen) {
      case 0:
        if (mp.gui.cursor.visible || ChatActive) {
          return;
        }

        mp.gui.chat.activate(false);
        mp.gui.chat.show(false);
        mp.gui.cursor.visible = true;
        BrinvOpen = 1;
        BRInventoryCEF.execute(`InventoryOpacity('${BrinvOpen}');`);
        BRInventoryCEF.execute(`SetPlayerHealth(${localplayer.getHealth()})`);
        BRInventoryCEF.execute(`SetPlayerArmour(${localplayer.getArmour()})`);
        BRInventoryCEF.execute(`SetPlayerLoginAndStatic('${localplayer.name} [#${localplayer.getVariable('StaticID')}]')`);
        ChangeHUDKeysDisplay('hide');
        ChangeHUDKillFeedDisplay('hide');
        ChangeHUDFreeCaseDisplay('hide');
        ChangeHUDRaitingDisplay('hide');
        break;

      case 1:
        ChangeHUDKeysDisplay('open');
        ChangeHUDKillFeedDisplay('open');
        ChangeHUDFreeCaseDisplay('open');
        ShowChat();
        mp.gui.cursor.visible = false;
        BrinvOpen = 0;
        BRInventoryCEF.execute(`InventoryOpacity('${BrinvOpen}');`);
        break;

      default:
        break;
    }
  } catch (e) {
    mp.gui.chat.push(`${e}`);
  }
});
mp.events.add('SetArmour', _0x1413A => {
  mp.events.callRemote('BRSetArmour', _0x1413A);
});
var FirstFastSlotName = null;
var SecondFastSlotName = null;
var ThirdFastSlotName = null;
var FourthFastSlotName = null;
var FirstFastSlotItem = null;
var SecondFastSlotItem = null;
var ThirdFastSlotItem = null;
var FourthFastSlotItem = null;
mp.events.add('AttachObject', (_0x132E2, _0x141A6, _0x12A2A) => {
  var _0x141CA = parseInt(_0x141A6);

  if (_0x141CA == 1) {
    if (FirstFastSlotName != null) {
      mp.attachmentMngr.removeLocal(`${FirstFastSlotName}`);
    }

    FirstFastSlotName = `${_0x132E2}${_0x141A6}`;
    FirstFastSlotItem = `${_0x12A2A}`;
    mp.attachmentMngr.addLocal(`${FirstFastSlotName}`);
  } else {
    if (_0x141CA == 2) {
      if (SecondFastSlotName != null) {
        mp.attachmentMngr.removeLocal(`${SecondFastSlotName}`);
      }

      SecondFastSlotName = `${_0x132E2}${_0x141A6}`;
      SecondFastSlotItem = `${_0x12A2A}`;
      mp.attachmentMngr.addLocal(`${SecondFastSlotName}`);
    } else {
      if (_0x141CA == 3) {
        if (ThirdFastSlotName != null) {
          mp.attachmentMngr.removeLocal(`${ThirdFastSlotName}`);
        }

        ThirdFastSlotName = `${_0x132E2}${_0x141A6}`;
        ThirdFastSlotItem = `${_0x12A2A}`;
        mp.attachmentMngr.addLocal(`${ThirdFastSlotName}`);
      } else {
        if (_0x141CA == 4) {
          FourthFastSlotName = `${_0x132E2}${_0x141A6}`;
          FourthFastSlotItem = `${_0x12A2A}`;
        }
      }
    }
  }
});
var BRInventoryItemsList = [{
  ItemID: 0,
  ItemName: 'Бронежилет (1)',
  ItemIMG: '/armor1.svg',
  Count: 1,
  isWeap: 'false',
  ishealth: 'false',
  hash: null,
  attname: null
}, {
  ItemID: 1,
  ItemName: 'Бронежилет (2)',
  ItemIMG: '/armor2.svg',
  Count: 1,
  isWeap: 'false',
  ishealth: 'false',
  hash: null,
  attname: null
}, {
  ItemID: 2,
  ItemName: 'Бронежилет (3)',
  ItemIMG: '/armor3.svg',
  Count: 1,
  isWeap: 'false',
  ishealth: 'false',
  hash: null,
  attname: null
}, {
  ItemID: 3,
  ItemName: 'Revolver',
  ItemIMG: '/HeavyRevolver.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0xC1B3C3D1,
  attname: 'Revolver',
  maxAmmo: 6,
  AmmoType: 2
}, {
  ItemID: 5,
  ItemName: 'Sniper Rifle',
  ItemIMG: '/SniperRifle.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0x05FC3C11,
  attname: 'SniperRifle',
  maxAmmo: 10,
  AmmoType: 1
}, {
  ItemID: 19,
  ItemName: 'Combat MG',
  ItemIMG: '/CombatMG.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0x7FD62962,
  attname: 'CombatMG',
  maxAmmo: 100,
  AmmoType: 1
}, {
  ItemID: 7,
  ItemName: 'Assault Rifle',
  ItemIMG: '/AssaultRifle.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0xBFEFFF6D,
  attname: 'AssaultRifle',
  maxAmmo: 30,
  AmmoType: 1
}, {
  ItemID: 4,
  ItemName: 'Carbine Rifle',
  ItemIMG: '/CarbineRifle.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0x83BF0278,
  attname: 'CarbineRifle',
  maxAmmo: 30,
  AmmoType: 1
}, {
  ItemID: 6,
  ItemName: 'Heavy Shotgun',
  ItemIMG: '/HeavyShotgun.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0x3AABBBAA,
  attname: 'HeavyShotgun',
  maxAmmo: 6,
  AmmoType: 3
}, {
  ItemID: 8,
  ItemName: 'Advanced Rifle',
  ItemIMG: '/AdvancedRifle.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0xAF113F99,
  attname: 'AdvancedRifle',
  maxAmmo: 30,
  AmmoType: 1
}, {
  ItemID: 9,
  ItemName: 'Special Carbine',
  ItemIMG: '/SpecialCarbine.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0xC0A3098D,
  attname: 'SpecialCarbine',
  maxAmmo: 30,
  AmmoType: 1
}, {
  ItemID: 10,
  ItemName: 'SMG',
  ItemIMG: '/SMG.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0x2BE6766B,
  attname: 'SMG',
  maxAmmo: 30,
  AmmoType: 1
}, {
  ItemID: 11,
  ItemName: 'Gusenberg Sweeper',
  ItemIMG: '/GusenbergSweeper.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0x61012683,
  attname: 'GusenbergSweeper',
  maxAmmo: 30,
  AmmoType: 1
}, {
  ItemID: 12,
  ItemName: 'Pump Shotgun',
  ItemIMG: '/PumpShotgun.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0x1D073A89,
  attname: 'PumpShotgun',
  maxAmmo: 8,
  AmmoType: 3
}, {
  ItemID: 13,
  ItemName: 'Micro SMG',
  ItemIMG: '/MicroSMG.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0x13532244,
  attname: 'MicroSMG',
  maxAmmo: 16,
  AmmoType: 1
}, {
  ItemID: 14,
  ItemName: 'Assault SMG',
  ItemIMG: '/AssaultSMG.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0xEFE7E2DF,
  attname: 'AssaultSMG',
  maxAmmo: 30,
  AmmoType: 1
}, {
  ItemID: 15,
  ItemName: 'Combat PDW',
  ItemIMG: '/CombatPDW.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0x0A3D4D34,
  attname: 'CombatPDW',
  maxAmmo: 30,
  AmmoType: 1
}, {
  ItemID: 16,
  ItemName: 'SNS Pistol',
  ItemIMG: '/SNSPistol.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0xBFD21232,
  attname: 'SNSPistol',
  maxAmmo: 6,
  AmmoType: 1
}, {
  ItemID: 17,
  ItemName: 'Vintage Pistol',
  ItemIMG: '/VintagePistol.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0x83839C4,
  attname: 'VintagePistol',
  maxAmmo: 7,
  AmmoType: 2
}, {
  ItemID: 18,
  ItemName: 'Musket',
  ItemIMG: '/Musket.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0xA89CB99E,
  attname: 'Musket',
  maxAmmo: 1,
  AmmoType: 3
}, {
  ItemID: 20,
  ItemName: 'Bullpup Shotgun',
  ItemIMG: '/BullpupShotgun.png',
  Count: 1,
  isWeap: 'true',
  ishealth: 'false',
  hash: 0x9D61E50F,
  attname: 'BullpupShotgun',
  maxAmmo: 14,
  AmmoType: 3
}, {
  ItemID: 21,
  ItemName: 'Аптечка',
  ItemIMG: '/firstaidkit.svg',
  Count: 1,
  isWeap: 'false',
  ishealth: 'true',
  hash: null,
  attname: null
}, {
  ItemID: 22,
  ItemName: 'Обезболивающее',
  ItemIMG: '/pills.svg',
  Count: 1,
  isWeap: 'false',
  ishealth: 'true',
  hash: null,
  attname: null
}, {
  ItemID: 23,
  ItemName: 'Патроны 7.62',
  ItemIMG: '/ammo_box1.svg',
  Count: 60,
  isWeap: 'false',
  ishealth: 'false',
  hash: null,
  attname: null
}, {
  ItemID: 24,
  ItemName: 'Патроны 11.43',
  ItemIMG: '/ammo_box2.svg',
  Count: 60,
  isWeap: 'false',
  ishealth: 'false',
  hash: null,
  attname: null
}, {
  ItemID: 25,
  ItemName: 'Патроны .410',
  ItemIMG: '/ammo_box3.svg',
  Count: 60,
  isWeap: 'false',
  ishealth: 'false',
  hash: null,
  attname: null
}];

function BRfindWeaponHash(_0x17446) {
  let _0x13B2E = BRInventoryItemsList.find(_0x13B2E => {
    return _0x13B2E.ItemID == parseInt(_0x17446);
  });

  if (_0x13B2E.hash == null || _0x13B2E.hash == undefined) {
    return;
  }

  return _0x13B2E.hash;
}

global.BRFastSlotsData = [{
  ItemID: null,
  ItemSerial: null,
  ItemType: null,
  ItemHash: null,
  ItemName: null,
  WeaponID: 0
}, {
  SlotNum: 1,
  ItemID: null,
  ItemSerial: null,
  slotType: 'weapon',
  ItemHash: null,
  ItemName: 'Carbine',
  WeaponID: 0,
  ammoCount: 0
}, {
  SlotNum: 2,
  ItemID: null,
  ItemSerial: null,
  slotType: 'weapon',
  ItemHash: null,
  ItemName: 'Carbine',
  WeaponID: 0,
  ammoCount: 0
}, {
  SlotNum: 3,
  ItemID: null,
  ItemSerial: null,
  slotType: 'weapon',
  ItemHash: null,
  ItemName: 'Carbine',
  WeaponID: 0,
  ammoCount: 0
}, {
  SlotNum: 4,
  ItemID: null,
  ItemSerial: null,
  slotType: 'health',
  ItemHash: null,
  ItemName: 'Health',
  WeaponID: 0,
  ammoCount: 0
}, {
  SlotNum: 5,
  ItemID: null,
  ItemSerial: null,
  slotType: 'health',
  ItemHash: null,
  ItemName: 'Health',
  WeaponID: 0,
  ammoCount: 0
}, {
  SlotNum: 6,
  ItemID: null,
  ItemSerial: null,
  slotType: 'armour',
  ItemHash: null,
  ItemName: 'Armour',
  WeaponID: 0,
  ammoCount: 0
}, {
  SlotNum: 7,
  ItemID: null,
  ItemSerial: null,
  slotType: 'holster',
  ItemHash: null,
  ItemName: 'Holster',
  WeaponID: 0,
  ammoCount: 0
}];
mp.events.add('clearBRInventoryBeforeStart', () => {
  BRFastSlotsData = [{
    ItemID: null,
    ItemSerial: null,
    ItemType: null,
    ItemHash: null,
    ItemName: null,
    WeaponID: 0
  }, {
    SlotNum: 1,
    ItemID: null,
    ItemSerial: null,
    slotType: 'weapon',
    ItemHash: null,
    ItemName: 'Carbine',
    WeaponID: 0,
    ammoCount: 0
  }, {
    SlotNum: 2,
    ItemID: null,
    ItemSerial: null,
    slotType: 'weapon',
    ItemHash: null,
    ItemName: 'Carbine',
    WeaponID: 0,
    ammoCount: 0
  }, {
    SlotNum: 3,
    ItemID: null,
    ItemSerial: null,
    slotType: 'weapon',
    ItemHash: null,
    ItemName: 'Carbine',
    WeaponID: 0,
    ammoCount: 0
  }, {
    SlotNum: 4,
    ItemID: null,
    ItemSerial: null,
    slotType: 'health',
    ItemHash: null,
    ItemName: 'Health',
    WeaponID: 0,
    ammoCount: 0
  }, {
    SlotNum: 5,
    ItemID: null,
    ItemSerial: null,
    slotType: 'health',
    ItemHash: null,
    ItemName: 'Health',
    WeaponID: 0,
    ammoCount: 0
  }, {
    SlotNum: 6,
    ItemID: null,
    ItemSerial: null,
    slotType: 'armour',
    ItemHash: null,
    ItemName: 'Armour',
    WeaponID: 0,
    ammoCount: 0
  }, {
    SlotNum: 7,
    ItemID: null,
    ItemSerial: null,
    slotType: 'holster',
    ItemHash: null,
    ItemName: 'Holster',
    WeaponID: 0,
    ammoCount: 0
  }];
  BRActiveFastSlot.SlotNumber = 1;
  BRActiveFastSlot.ActiveWeaponID = null;
  AmmoItemsCount = [{
    ammoID: 1,
    ammoName: '7.62',
    count: 0
  }, {
    ammoID: 2,
    ammoName: '11.43',
    count: 0
  }, {
    ammoID: 3,
    ammoName: '.410',
    count: 0
  }];
});
global.BRActiveFastSlot = {
  SlotNumber: 1,
  ActiveWeaponID: null
};
var GhettoSwapTimeout = 0;

function getAmmoType(_0x12B92) {
  let _0x14572 = BRInventoryItemsList.find(_0x13372 => {
    return _0x13372.ItemID == parseInt(_0x12B92);
  });

  if (_0x14572 == null || _0x14572 == undefined) {
    return 0;
  }

  if (_0x14572.AmmoType == null || _0x14572.AmmoType == undefined) {
    return 0;
  }

  return _0x14572.AmmoType;
}

var AmmoItemsCount = [{
  ammoID: 1,
  ammoName: '7.62',
  count: 0
}, {
  ammoID: 2,
  ammoName: '11.43',
  count: 0
}, {
  ammoID: 3,
  ammoName: '.410',
  count: 0
}];
mp.events.add('BRInventory_AddAmmoCount', (_0x14476, _0x14452) => {
  switch (_0x14476) {
    case 23:
      AmmoItemsCount[0].count = AmmoItemsCount[0].count + parseInt(_0x14452);
      break;

    case 24:
      AmmoItemsCount[1].count = AmmoItemsCount[1].count + parseInt(_0x14452);
      break;

    case 25:
      AmmoItemsCount[2].count = AmmoItemsCount[2].count + parseInt(_0x14452);
      break;
  }
});
mp.events.add('BRInventory_MinusAmmoCount', (_0x14476, _0x14452) => {
  switch (_0x14476) {
    case 23:
      AmmoItemsCount[0].count = AmmoItemsCount[0].count - parseInt(_0x14452);

      if (AmmoItemsCount[0].count < 0) {
        AmmoItemsCount[0].count = 0;
      }

      break;

    case 24:
      AmmoItemsCount[1].count = AmmoItemsCount[1].count - parseInt(_0x14452);

      if (AmmoItemsCount[1].count < 0) {
        AmmoItemsCount[1].count = 0;
      }

      break;

    case 25:
      AmmoItemsCount[2].count = AmmoItemsCount[2].count - parseInt(_0x14452);

      if (AmmoItemsCount[2].count < 0) {
        AmmoItemsCount[2].count = 0;
      }

      break;
  }
});
mp.events.add('BRSetWeaponFastSlot', (_0x1454E, _0x12B92) => {
  BRFastSlotsData[parseInt(_0x1454E)].ItemID = parseInt(_0x12B92);
  BRFastSlotsData[parseInt(_0x1454E)].ItemHash = BRfindWeaponHash(_0x12B92);
  BRFastSlotsData[parseInt(_0x1454E)].ammoCount = BRfindWeaponHash(_0x12B92);

  if (BRActiveFastSlot.SlotNumber != parseInt(_0x1454E)) {
    localplayer.giveWeapon(BRfindWeaponHash(_0x12B92), 9999, false);
  } else {
    let _0x1452A = getAmmoType(_0x12B92);

    let _0x144BE = AmmoItemsCount.find(_0x14572 => {
      return _0x14572.ammoID == parseInt(_0x1452A);
    });

    let _0x1449A = _0x144BE.count;
    let _0x144E2 = 0;

    let _0x14506 = BRInventoryItemsList.find(_0x13372 => {
      return _0x13372.ItemID == parseInt(_0x12B92);
    });

    if (_0x14506 != null && _0x14506 != undefined) {
      _0x144E2 = parseInt(_0x14506.maxAmmo);
    }

    BRCurrentWeaponAmmo = _0x144E2;

    if (_0x1449A <= 0) {
      UpdateAmmo(0, 0);
      mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, BRfindWeaponHash(_0x12B92) >> 0, true);
      mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, BRfindWeaponHash(_0x12B92) >> 0, 0);
      setTimeout(() => {
        mp.game.invoke('0x14E56BC5B5DB6A19', mp.players.local.handle, BRfindWeaponHash(_0x12B92) >> 0, 0);
      }, 500);
    } else {
      if (_0x1449A < BRCurrentWeaponAmmo) {
        BRCurrentWeaponAmmo = _0x1449A;
        UpdateAmmo(BRCurrentWeaponAmmo, 0);
        mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, BRfindWeaponHash(_0x12B92) >> 0, true);
        mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, BRfindWeaponHash(_0x12B92) >> 0, BRCurrentWeaponAmmo);
        setTimeout(() => {
          mp.game.invoke('0x14E56BC5B5DB6A19', mp.players.local.handle, BRfindWeaponHash(_0x12B92) >> 0, 0);
        }, 500);
      } else {
        BRCurrentWeaponAmmo = _0x144E2;
        UpdateAmmo(BRCurrentWeaponAmmo, _0x1449A - BRCurrentWeaponAmmo);
        mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, BRfindWeaponHash(_0x12B92) >> 0, true);
        mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, BRfindWeaponHash(_0x12B92) >> 0, BRCurrentWeaponAmmo);
        setTimeout(() => {
          mp.game.invoke('0x14E56BC5B5DB6A19', mp.players.local.handle, BRfindWeaponHash(_0x12B92) >> 0, _0x1449A - BRCurrentWeaponAmmo);
        }, 500);
      }
    }
  }
});
mp.events.add('ClearFastSlot', _0x146FE => {
  let _0x14722 = null;

  switch (_0x146FE) {
    case 'FastSlot1':
      _0x14722 = 1;
      break;

    case 'FastSlot2':
      _0x14722 = 2;
      break;

    case 'FastSlot3':
      _0x14722 = 3;
      break;

    case 'FastSlot4':
      _0x14722 = 4;
      break;

    case 'ArmourFastSlot':
      _0x14722 = 5;
      break;
  }

  if (BRActiveFastSlot.SlotNumber == parseInt(_0x14722)) {
    let _0x146DA = BRFastSlotsData[parseInt(_0x14722)].ItemHash;

    if (_0x146DA != null) {
      if (BRFastSlotsData.filter(_0x13372 => {
        return _0x13372.ItemHash == _0x146DA;
      }).length <= 1) {
        localplayer.removeWeapon(BRFastSlotsData[parseInt(_0x14722)].ItemHash);
      }
    }

    if (BRActiveFastSlot.SlotNumber == parseInt(_0x14722)) {
      setWeaponInHand(null, 0);
    }

    BRFastSlotsData[parseInt(_0x14722)].ItemID = null;
    BRFastSlotsData[parseInt(_0x14722)].ItemSerial = null;
    BRFastSlotsData[parseInt(_0x14722)].ItemHash = null;
    BRFastSlotsData[parseInt(_0x14722)].WeaponID = null;
  }
});

function BRsetWeaponInHand(_0x174B2, _0x1748E) {
  if (_0x174B2 != null) {
    mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, _0x174B2 >> 0, true);
    mp.game.invoke('0x14E56BC5B5DB6A19', mp.players.local.handle, _0x174B2 >> 0, 9999);
    mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, _0x174B2 >> 0, _0x1748E);
  } else {
    mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1569615261, true);
    UpdateAmmo(0, 0);
  }
}

mp.keys.bind(0x31, true, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  BRsetActiveFastSlotBind(1);
});
mp.keys.bind(0x32, true, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  BRsetActiveFastSlotBind(2);
});
mp.keys.bind(0x33, true, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  BRsetActiveFastSlotBind(3);
});
mp.keys.bind(0x34, true, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (localplayer.isFalling()) {
    return;
  }

  BRsetActiveFastSlotBind(4);
});
var itemSwapTimeOut = new Date().getTime();

function BRsetActiveFastSlotBind(i) {
  try {
    if (BRAll.Status == 0 || localplayer.dimension < 500000) {
      return;
    }

    if (BRAll.Status < 4 || BRAll.GameDimension == null) {
      return;
    }

    if (BRAll.GameDimension != localplayer.dimension) {
      return;
    }

    if (mp.gui.cursor.visible || ChatActive) {
      return;
    }

    if (new Date().getTime() - itemSwapTimeOut < 1700) {
      return;
    }

    if (parseInt(BRActiveFastSlot.SlotNumber) != i) {
      itemSwapTimeOut = new Date().getTime();
    }

    BRActiveFastSlot.SlotNumber = parseInt(i);

    if (BRFastSlotsData[parseInt(i)].ItemHash != null) {
      let _0x1746A = BRFastSlotsData[parseInt(i)].ItemID;
      let _0x144E2 = 0;

      let _0x14506 = BRInventoryItemsList.find(_0x13372 => {
        return _0x13372.ItemID == parseInt(_0x1746A);
      });

      if (_0x14506 != null && _0x14506 != undefined) {
        _0x144E2 = parseInt(_0x14506.maxAmmo);
      }

      let _0x1452A = getAmmoType(_0x1746A);

      let _0x144BE = AmmoItemsCount.find(_0x14572 => {
        return _0x14572.ammoID == parseInt(_0x1452A);
      });

      let _0x1449A = _0x144BE.count;

      if (_0x1449A <= 0) {
        UpdateAmmo(0, 0);
        mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, BRFastSlotsData[parseInt(i)].ItemHash >> 0, true);
        mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, BRFastSlotsData[parseInt(i)].ItemHash >> 0, 0);
        setTimeout(() => {
          mp.game.invoke('0x14E56BC5B5DB6A19', mp.players.local.handle, BRFastSlotsData[parseInt(i)].ItemHash >> 0, 0);
          mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, BRFastSlotsData[parseInt(i)].ItemHash >> 0, 0);
        }, 500);
      } else {
        if (_0x1449A < BRCurrentWeaponAmmo) {
          BRCurrentWeaponAmmo = _0x1449A;
          UpdateAmmo(BRCurrentWeaponAmmo, 0);
          mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, BRFastSlotsData[parseInt(i)].ItemHash >> 0, true);
          mp.game.invoke('0x14E56BC5B5DB6A19', mp.players.local.handle, BRFastSlotsData[parseInt(i)].ItemHash >> 0, 0);
          setTimeout(() => {
            mp.game.invoke('0x14E56BC5B5DB6A19', mp.players.local.handle, localplayer.weapon >> 0, 999);
            setTimeout(() => {
              mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, localplayer.weapon >> 0, parseInt(_0x1449A));
            }, 100);
          }, 500);
        } else {
          BRCurrentWeaponAmmo = _0x144E2;
          UpdateAmmo(BRCurrentWeaponAmmo, _0x1449A - BRCurrentWeaponAmmo);
          mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, BRFastSlotsData[parseInt(i)].ItemHash >> 0, true);
          setTimeout(() => {
            mp.game.invoke('0x14E56BC5B5DB6A19', mp.players.local.handle, BRFastSlotsData[parseInt(i)].ItemHash >> 0, _0x1449A - BRCurrentWeaponAmmo);
            mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, BRFastSlotsData[parseInt(i)].ItemHash >> 0, BRCurrentWeaponAmmo);
          }, 500);
        }
      }
    } else {
      BRsetWeaponInHand(BRFastSlotsData[parseInt(i)].ItemHash, 0);
    }
  } catch (e) {
    mp.gui.chat.push(`${e}`);
  }
}

mp.events.add('BRSetWeaponFastSlot', (_0x1454E, _0x12B92) => {
  BRFastSlotsData[parseInt(_0x1454E)].ItemID = parseInt(_0x12B92);
  BRFastSlotsData[parseInt(_0x1454E)].ItemHash = BRfindWeaponHash(_0x12B92);
  BRFastSlotsData[parseInt(_0x1454E)].ammoCount = BRfindWeaponHash(_0x12B92);

  if (BRActiveFastSlot.SlotNumber != parseInt(_0x1454E)) {
    localplayer.giveWeapon(BRfindWeaponHash(_0x12B92), 9999, false);
  } else {
    let _0x1452A = getAmmoType(_0x12B92);

    let _0x144BE = AmmoItemsCount.find(_0x14572 => {
      return _0x14572.ammoID == parseInt(_0x1452A);
    });

    let _0x1449A = _0x144BE.count;
    let _0x144E2 = 0;

    let _0x14506 = BRInventoryItemsList.find(_0x13372 => {
      return _0x13372.ItemID == parseInt(_0x12B92);
    });

    if (_0x14506 != null && _0x14506 != undefined) {
      _0x144E2 = parseInt(_0x14506.maxAmmo);
    }

    BRCurrentWeaponAmmo = _0x144E2;
    localplayer.giveWeapon(BRfindWeaponHash(_0x12B92), 9999, true);

    let _0x14842 = _0x1449A - _0x144E2;

    if (_0x14842 <= 0) {
      _0x14842 = 0;
    }

    UpdateAmmo(_0x144E2, _0x14842);
    setTimeout(() => {
      mp.game.invoke('0x14E56BC5B5DB6A19', mp.players.local.handle, BRfindWeaponHash(_0x12B92) >> 0, _0x1449A);
      mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, BRfindWeaponHash(_0x12B92) >> 0, _0x144E2);
    }, 500);
  }
});
mp.keys.bind(0x45, false, function () {
  if (BRAll.Status == 0 || localplayer.dimension < 500000) {
    return;
  }

  if (BRAll.Status < 4 || BRAll.GameDimension == null) {
    return;
  }

  if (BRAll.GameDimension != localplayer.dimension) {
    return;
  }

  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  let _0x14866 = 2.1;
  let _0x13F66 = null;
  mp.objects.forEach(_0x1373E => {
    if (_0x1373E.dimension == localplayer.dimension) {
      const _0x148AE = _0x1373E.position;

      let _0x148D2 = _0x1373E.getVariable('BRLootItemID');

      if (_0x148D2 === undefined || _0x148D2 == undefined || _0x148D2 == null || _0x148D2 == 'undefined') {
        return;
      }

      const _0x148F6 = localplayer.position;

      let _0x1488A = mp.game.system.vdist(_0x148F6.x, _0x148F6.y, _0x148F6.z, _0x148AE.x, _0x148AE.y, _0x148AE.z);

      if (_0x1488A < _0x14866) {
        _0x13F66 = _0x1373E.remoteId;
      }
    }
  });

  if (_0x13F66 == null) {
    return;
  }

  mp.events.callRemote('BRInventoryFindDropAround', _0x13F66);
});
mp.events.add('BRInventory_AddNewItem', (_0x12B92, _0x14452) => {
  BRInventoryCEF.execute(`AddItem(${_0x12B92},${_0x14452})`);
});
var BRCurrentWeaponAmmo = 0;
mp.events.add('playerWeaponShot', (_0x1478E, _0x1476A) => {
  if (BRAll.Status == 0 || localplayer.dimension < 500000) {
    return;
  }

  if (BRAll.Status < 4 || BRAll.GameDimension == null) {
    return;
  }

  if (BRAll.GameDimension != localplayer.dimension) {
    return;
  }

  let _0x14986 = BRActiveFastSlot.SlotNumber;
  let _0x14962 = BRFastSlotsData[parseInt(_0x14986)].ItemID;

  let _0x1452A = getAmmoType(_0x14962);

  let _0x144BE = AmmoItemsCount.find(_0x14572 => {
    return _0x14572.ammoID == parseInt(_0x1452A);
  });

  let _0x1449A = _0x144BE.count;
  BRInventoryCEF.execute(`deleteAmmoCount(${_0x1452A})`);
  let _0x144E2 = 0;

  let _0x14506 = BRInventoryItemsList.find(_0x13372 => {
    return _0x13372.ItemID == parseInt(_0x14962);
  });

  if (_0x14506 != null && _0x14506 != undefined) {
    _0x144E2 = parseInt(_0x14506.maxAmmo);
  }

  if (_0x144BE.count >= 1) {
    if (_0x144E2 >= 1) {
      BRCurrentWeaponAmmo--;
      _0x144BE.count--;

      if (BRCurrentWeaponAmmo <= 0) {
        localplayer.taskSwapWeapon(false);
        mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, localplayer.weapon >> 0, 0);
        let _0x14986 = BRActiveFastSlot.SlotNumber;

        if (_0x14986 >= 4) {
          return;
        }

        let _0x14962 = BRFastSlotsData[parseInt(_0x14986)].ItemID;

        let _0x1452A = getAmmoType(_0x14962);

        let _0x144BE = AmmoItemsCount.find(_0x14572 => {
          return _0x14572.ammoID == parseInt(_0x1452A);
        });

        let _0x1449A = _0x144BE.count;
        let _0x144E2 = 0;

        let _0x14506 = BRInventoryItemsList.find(_0x13372 => {
          return _0x13372.ItemID == parseInt(_0x14962);
        });

        if (_0x14506 != null && _0x14506 != undefined) {
          _0x144E2 = parseInt(_0x14506.maxAmmo);
          BRCurrentWeaponAmmo = _0x144E2;
        }

        let _0x1493E = _0x144BE.count - _0x144E2;

        if (_0x1493E <= 0) {
          _0x1493E = 0;
        }

        UpdateAmmo(BRCurrentWeaponAmmo, _0x1493E);
      } else {
        UpdateAmmoInClip(BRCurrentWeaponAmmo);
      }
    } else {
      mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, localplayer.weapon >> 0, BRCurrentWeaponAmmo);
      UpdateAmmo(0, _0x144BE.count);
    }
  } else {
    mp.game.invoke('0x14E56BC5B5DB6A19', mp.players.local.handle, localplayer.weapon >> 0, _0x144BE.count - _0x144E2);
    mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, localplayer.weapon >> 0, 0);
    localplayer.taskSwapWeapon(false);
    UpdateAmmoInClip(BRCurrentWeaponAmmo);
  }
});
var AmmoItemsCount = [{
  ammoID: 1,
  ammoName: '7.62',
  count: 0
}, {
  ammoID: 2,
  ammoName: '11.43',
  count: 0
}, {
  ammoID: 3,
  ammoName: '.410',
  count: 0
}];
mp.keys.bind(0x52, false, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (BRAll.Status == 0 || localplayer.dimension < 500000) {
    return;
  }

  if (BRAll.Status < 4 || BRAll.GameDimension == null) {
    return;
  }

  if (BRAll.GameDimension != localplayer.dimension) {
    return;
  }

  let _0x14986 = BRActiveFastSlot.SlotNumber;

  if (_0x14986 >= 4) {
    return;
  }

  let _0x14962 = BRFastSlotsData[parseInt(_0x14986)].ItemID;

  let _0x1452A = getAmmoType(_0x14962);

  let _0x144BE = AmmoItemsCount.find(_0x14572 => {
    return _0x14572.ammoID == parseInt(_0x1452A);
  });

  let _0x1449A = _0x144BE.count;
  let _0x144E2 = 0;

  let _0x14506 = BRInventoryItemsList.find(_0x13372 => {
    return _0x13372.ItemID == parseInt(_0x14962);
  });

  if (_0x14506 != null && _0x14506 != undefined) {
    _0x144E2 = parseInt(_0x14506.maxAmmo);
    BRCurrentWeaponAmmo = _0x144E2;
  }

  let _0x1493E = _0x144BE.count - _0x144E2;

  if (_0x1493E <= 0) {
    _0x1493E = 0;
  }

  UpdateAmmo(BRCurrentWeaponAmmo, _0x1493E);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, localplayer.weapon >> 0, 0);
  localplayer.taskSwapWeapon(false);
});
mp.events.add('BRHealthInteraction', _0x12A2A => {
  mp.events.callRemote('BRInventoryItemIntercation', 'using', parseInt(_0x12A2A));
});
mp.events.add('BRDropItemOnGround', (_0x13372, _0x14452) => {
  mp.events.callRemote('BRInventoryItemIntercation', 'drop', parseInt(_0x13372), parseInt(_0x14452));
});
mp.events.add('BRClearPlayerArmour', () => {
  mp.events.callRemote('BRClearPlayerArmour');
});
mp.events.add('BRdropOnGroundDeathItem', (_0x12A2A, _0x149F2) => {
  mp.events.callRemote('BRInventoryItemIntercationByDeath', 'drop', parseInt(_0x12A2A), parseInt(_0x149F2));
});
mp.events.add('playerDeath', (player, _0x130EA, _0x14A16) => {
  if (BRAll.Status == 0 || localplayer.dimension < 500000) {
    return;
  }

  if (BRAll.Status < 4 || BRAll.GameDimension == null) {
    return;
  }

  if (BRAll.GameDimension != localplayer.dimension) {
    return;
  }

  BRInventoryCEF.execute('dropOnGroundAllItems()');
});