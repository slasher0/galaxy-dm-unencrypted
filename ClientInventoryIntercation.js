var _0x504b = ["local", "players", "Revolver", "Mini SMG", "Heavy Shotgun", "Gusenberg Sweeper", "Carbine Rifle", "Combat PDW", "Assault Rifle", "Revolver MK2", "Combat MG", "Assault SMG", "SMG", "SMG MK2", "Assault Shotgun", "Advanced Rifle", "Special Carbine", "Military Rifle", "Sniper Rifle", "Compact Rifle", "Combat MG MK2", "Perico Pistol", "Navy Revolver", "Marksman Rifle", "GALAXY Glock", "GALAXY USP", "Up-n-Atomizer", "Heavy Sniper", "weapon", "find", "Hash", "ID", "FastSlotsData", "Carbine", "health", "Health", "armour", "Armour", "holster", "Holster", "ItemHash", "giveWeapon", "0xADF692B254977C0C", "handle", "invoke", "game", "forEach", "SlotNumber", "Hand", "ReloadAllWeaponsAmmoAfterDeath", "length", "Ammo", "add", "events", "GangwarActiveFastSlot", "SetItemInFastSlot", "ItemID", "imsghud", "Невозжно использовать GALAXY Glock и GALAXY USP одновременно, одно из оружий не будет доставаться.", "call", "ItemSerial", "ItemName", "", "WeaponID", "0x14E56BC5B5DB6A19", "0xDCD2A934D65CB497", "getTime", "visible", "cursor", "gui", "bind", "keys", "isFalling", "ReloadAllWeaponsAmmo", "dimension", "ActiveWeaponID", "isDead", "adminlvl", "getVariable", "getHealth", "fastemsghud", "Невозможно использовать аптеку, когда вы полностью здоровы.", "nullifyFastSlot(", ",'Self')", "execute", "InventoryItemIntercation", "using", "e: ", "push", "chat", "InventoryNullifyFastSlotVariable", "filter", "removeWeapon", "NullifyGangwarClothes", "callRemote", "inventorySellCheck", "nullifyFastSlot('", "','Death')", "AlcoholSettings", "GGInventoryUsingAlcohol", "Active", "Time", "HPTime", "Interval", "setHealth", "gameplay", "new", "cameras", "getCoord", "testPointToPoint", "raycasting", "playerWeaponShot", "trin", "rev", "frstTR", "lastTR", "ACWSTr", "ACWS", "per", "mk", "ny", "cmpctrfl", "spclcrbn", "sgmk2", "smg", "asltrfl", "cmbtpdw", "crbnrfl", "hvyshtgub", "exists", "entity", "undefined", "type", "player", "vehicle", "GGAlcoholTicks", "client.start.particle.fx.lopped.at.coord", "GiveHit", "scr_rcbarry2", "muz_clown", "x", "position", "y", "z", "client.stop.particle.fx.lopped", "getDirection", "playerDeath", "setFadeOutAfterDeath", "InventoryItemDeathDrop", "setInvincible", "ScreenFlash", "WastedSounds", "playSoundFrontend", "audio"];
const localplayer = mp.players.local;
var weaponsHashes = [{
  ID: 0,
  weapon: 'Revolver',
  Hash: 0xC1B3C3D1
}, {
  ID: 1,
  weapon: 'Mini SMG',
  Hash: 0xBD248B55
}, {
  ID: 2,
  weapon: 'Heavy Shotgun',
  Hash: 0x3AABBBAA
}, {
  ID: 3,
  weapon: 'Gusenberg Sweeper',
  Hash: 0x61012683
}, {
  ID: 4,
  weapon: 'Carbine Rifle',
  Hash: 0x83BF0278
}, {
  ID: 5,
  weapon: 'Combat PDW',
  Hash: 0x0A3D4D34
}, {
  ID: 6,
  weapon: 'Assault Rifle',
  Hash: 0xBFEFFF6D
}, {
  ID: 7,
  weapon: 'Revolver MK2',
  Hash: 0xCB96392F
}, {
  ID: 8,
  weapon: 'Combat MG',
  Hash: 0x7FD62962
}, {
  ID: 9,
  weapon: 'Assault SMG',
  Hash: 0xEFE7E2DF
}, {
  ID: 10,
  weapon: 'SMG',
  Hash: 0x2BE6766B
}, {
  ID: 11,
  weapon: 'SMG MK2',
  Hash: 0x78A97CD0
}, {
  ID: 12,
  weapon: 'Assault Shotgun',
  Hash: 0xE284C527
}, {
  ID: 13,
  weapon: 'Advanced Rifle',
  Hash: 0xAF113F99
}, {
  ID: 14,
  weapon: 'Special Carbine',
  Hash: 0xC0A3098D
}, {
  ID: 15,
  weapon: 'Military Rifle',
  Hash: 0x9D1F17E6
}, {
  ID: 16,
  weapon: 'Sniper Rifle',
  Hash: 0x05FC3C11
}, {
  ID: 17,
  weapon: 'Compact Rifle',
  Hash: 0x624FE830
}, {
  ID: 18,
  weapon: 'Combat MG MK2',
  Hash: 0xDBBD7280
}, {
  ID: 19,
  weapon: 'Perico Pistol',
  Hash: 0x57A4368C
}, {
  ID: 20,
  weapon: 'Navy Revolver',
  Hash: 0x917F6C8C
}, {
  ID: 21,
  weapon: 'Marksman Rifle',
  Hash: 0xC734385A
}, {
  ID: 22,
  weapon: 'GALAXY Glock',
  Hash: 2644157415
}, {
  ID: 23,
  weapon: 'GALAXY USP',
  Hash: 2141740633
}, {
  ID: 24,
  weapon: 'Up-n-Atomizer',
  Hash: 2939590305
}, {
  ID: 25,
  weapon: 'Heavy Sniper',
  Hash: 0x0C472FE2
}];

function findWeaponHash(_0xf916x4) {
  let _0xf916x5 = weaponsHashes.find(_0xf916x5 => {
    return _0xf916x5.weapon == _0xf916x4;
  });

  if (_0xf916x5.Hash == null || _0xf916x5.Hash == undefined) {
    return null;
  }

  return [_0xf916x5.Hash, _0xf916x5.ID];
}

global.FastSlotsData = [{
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
  WeaponID: 0
}, {
  SlotNum: 2,
  ItemID: null,
  ItemSerial: null,
  slotType: 'weapon',
  ItemHash: null,
  ItemName: 'Carbine',
  WeaponID: 0
}, {
  SlotNum: 3,
  ItemID: null,
  ItemSerial: null,
  slotType: 'weapon',
  ItemHash: null,
  ItemName: 'Carbine',
  WeaponID: 0
}, {
  SlotNum: 4,
  ItemID: null,
  ItemSerial: null,
  slotType: 'health',
  ItemHash: null,
  ItemName: 'Health',
  WeaponID: 0
}, {
  SlotNum: 5,
  ItemID: null,
  ItemSerial: null,
  slotType: 'health',
  ItemHash: null,
  ItemName: 'Health',
  WeaponID: 0
}, {
  SlotNum: 6,
  ItemID: null,
  ItemSerial: null,
  slotType: 'armour',
  ItemHash: null,
  ItemName: 'Armour',
  WeaponID: 0
}, {
  SlotNum: 7,
  ItemID: null,
  ItemSerial: null,
  slotType: 'holster',
  ItemHash: null,
  ItemName: 'Holster',
  WeaponID: 0
}];

function gangwarGiveAllWeapons() {
  try {
    setTimeout(() => {
      FastSlotsData.forEach(_0xf916x7 => {
        if (_0xf916x7.ItemHash != null) {
          localplayer.giveWeapon(_0xf916x7.ItemHash, -1, true);
          mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1569615261, true);
          UpdateAmmo(0, 9999);
        }
      });
    }, 1000);
    GangwarActiveFastSlot.SlotNumber = 1;
  } catch (e) {}
}

var weaponsDataDefaultAmmoCount = [{
  ID: 0,
  weapon: 'Revolver',
  Ammo: 6
}, {
  ID: 1,
  weapon: 'Mini SMG',
  Ammo: 20
}, {
  ID: 2,
  weapon: 'Heavy Shotgun',
  Ammo: 6
}, {
  ID: 3,
  weapon: 'Gusenberg Sweeper',
  Ammo: 30
}, {
  ID: 4,
  weapon: 'Carbine Rifle',
  Ammo: 30
}, {
  ID: 5,
  weapon: 'Combat PDW',
  Ammo: 30
}, {
  ID: 6,
  weapon: 'Assault Rifle',
  Ammo: 30
}, {
  ID: 7,
  weapon: 'Revolver MK2',
  Ammo: 6
}, {
  ID: 8,
  weapon: 'Combat MG',
  Ammo: 100
}, {
  ID: 9,
  weapon: 'Assault SMG',
  Ammo: 30
}, {
  ID: 10,
  weapon: 'SMG',
  Ammo: 30
}, {
  ID: 11,
  weapon: 'SMG MK2',
  Ammo: 30
}, {
  ID: 12,
  weapon: 'Assault Shotgun',
  Ammo: 8
}, {
  ID: 13,
  weapon: 'Advanced Rifle',
  Ammo: 30
}, {
  ID: 14,
  weapon: 'Special Carbine',
  Ammo: 30
}, {
  ID: 15,
  weapon: 'Military Rifle',
  Ammo: 30
}, {
  ID: 16,
  weapon: 'Sniper Rifle',
  Ammo: 10
}, {
  ID: 17,
  weapon: 'Compact Rifle',
  Ammo: 30
}, {
  ID: 18,
  weapon: 'Combat MG MK2',
  Ammo: 100
}, {
  ID: 19,
  weapon: 'Perico Pistol',
  Ammo: 1
}, {
  ID: 20,
  weapon: 'Navy Revolver',
  Ammo: 6
}, {
  ID: 21,
  weapon: 'Marksman Rifle',
  Ammo: 8
}, {
  ID: 22,
  weapon: 'GALAXY Glock',
  Ammo: 6
}, {
  ID: 23,
  weapon: 'GALAXY USP',
  Ammo: 6
}, {
  ID: 24,
  weapon: 'Up-n-Atomizer',
  Ammo: 10
}, {
  ID: 25,
  weapon: 'Heavy Sniper',
  Ammo: 7
}];
var weaponsDataAmmo = [{
  ID: 0,
  weapon: 'Revolver',
  Ammo: 6
}, {
  ID: 1,
  weapon: 'Mini SMG',
  Ammo: 20
}, {
  ID: 2,
  weapon: 'Heavy Shotgun',
  Ammo: 6
}, {
  ID: 3,
  weapon: 'Gusenberg Sweeper',
  Ammo: 30
}, {
  ID: 4,
  weapon: 'Carbine Rifle',
  Ammo: 30
}, {
  ID: 5,
  weapon: 'Combat PDW',
  Ammo: 30
}, {
  ID: 6,
  weapon: 'Assault Rifle',
  Ammo: 30
}, {
  ID: 7,
  weapon: 'Revolver MK2',
  Ammo: 6
}, {
  ID: 8,
  weapon: 'Combat MG',
  Ammo: 100
}, {
  ID: 9,
  weapon: 'Assault SMG',
  Ammo: 30
}, {
  ID: 10,
  weapon: 'SMG',
  Ammo: 30
}, {
  ID: 11,
  weapon: 'SMG MK2',
  Ammo: 30
}, {
  ID: 12,
  weapon: 'Assault Shotgun',
  Ammo: 8
}, {
  ID: 13,
  weapon: 'Advanced Rifle',
  Ammo: 30
}, {
  ID: 14,
  weapon: 'Special Carbine',
  Ammo: 30
}, {
  ID: 15,
  weapon: 'Military Rifle',
  Ammo: 30
}, {
  ID: 16,
  weapon: 'Sniper Rifle',
  Ammo: 10
}, {
  ID: 17,
  weapon: 'Compact Rifle',
  Ammo: 30
}, {
  ID: 18,
  weapon: 'Combat MG MK2',
  Ammo: 100
}, {
  ID: 19,
  weapon: 'Perico Pistol',
  Ammo: 1
}, {
  ID: 20,
  weapon: 'Navy Revolver',
  Ammo: 6
}, {
  ID: 21,
  weapon: 'Marksman Rifle',
  Ammo: 8
}, {
  ID: 22,
  weapon: 'GALAXY Glock',
  Ammo: 6
}, {
  ID: 23,
  weapon: 'GALAXY USP',
  Ammo: 6
}, {
  ID: 24,
  weapon: 'Up-n-Atomizer',
  Ammo: 10
}, {
  ID: 25,
  weapon: 'Heavy Sniper',
  Ammo: 7
}, {
  ID: null,
  weapon: 'Hand',
  Ammo: 0
}];
mp.events.add('ReloadAllWeaponsAmmoAfterDeath', () => {
  for (let _0xf916xa = 0; _0xf916xa < weaponsDataAmmo.length - 1; _0xf916xa++) {
    weaponsDataAmmo[_0xf916xa].Ammo = weaponsDataDefaultAmmoCount[_0xf916xa].Ammo;
  }
});
global.GangwarActiveFastSlot = {
  SlotNumber: 1,
  ActiveWeaponID: null
};
var GhettoSwapTimeout = 0;
mp.events.add('SetItemInFastSlot', (_0xf916xc, _0xf916xd, _0xf916xe, _0xf916xf, _0xf916x10) => {
  let _0xf916x11 = true;

  if (_0xf916xf == 31 || _0xf916xf == 32 || _0xf916xf == 6) {
    switch (_0xf916xf) {
      case 31:
        FastSlotsData.forEach(_0xf916x7 => {
          if (_0xf916x7.ItemID == 32 || _0xf916x7.ItemID == 6) {
            _0xf916x11 = false;
            mp.events.call('imsghud', `Невозжно использовать GALAXY Glock и Revolver / GALAXY USP и Revolver одновременно, одно из оружий не будет доставаться.`);
          }
        });
        break;

      case 6:
        FastSlotsData.forEach(_0xf916x7 => {
          if (_0xf916x7.ItemID == 32 || _0xf916x7.ItemID == 6 || _0xf916x7.ItemID == 31) {
            _0xf916x11 = false;
            mp.events.call('imsghud', `Невозжно использовать GALAXY Glock и Revolver / GALAXY USP и Revolver одновременно, одно из оружий не будет доставаться.`);
          }
        });
        break;

      case 32:
        FastSlotsData.forEach(_0xf916x7 => {
          if (_0xf916x7.ItemID == 31 || _0xf916x7.ItemID == 6) {
            _0xf916x11 = false;
            mp.events.call('imsghud', `Невозжно использовать GALAXY Glock и Revolver / GALAXY USP и Revolver одновременно, одно из оружий не будет доставаться.`);
          }
        });
        break;
    }
  }

  FastSlotsData[parseInt(_0xf916xc)].ItemID = parseInt(_0xf916xf);
  FastSlotsData[parseInt(_0xf916xc)].ItemSerial = parseInt(_0xf916x10);
  FastSlotsData[parseInt(_0xf916xc)].ItemName = _0xf916xe;

  if (parseInt(_0xf916xc) <= 3) {
    FastSlotsData[parseInt(_0xf916xc)].ItemHash = findWeaponHash(`${''}${_0xf916xe}${''}`)[0];
    FastSlotsData[parseInt(_0xf916xc)].WeaponID = findWeaponHash(`${''}${_0xf916xe}${''}`)[1];

    if (GangwarActiveFastSlot.SlotNumber != parseInt(_0xf916xc) && GangwarActiveFastSlot.SlotNumber <= 3) {
      if (_0xf916x11 != false) {
        localplayer.giveWeapon(findWeaponHash(`${''}${_0xf916xe}${''}`)[0], -1, false);
      }
    } else {
      if (GangwarActiveFastSlot.SlotNumber <= 3) {
        if (_0xf916x11 != false) {
          localplayer.giveWeapon(findWeaponHash(`${''}${_0xf916xe}${''}`)[0], -1, true);
        }

        UpdateAmmo(weaponsDataAmmo[FastSlotsData[parseInt(GangwarActiveFastSlot.SlotNumber)].WeaponID].Ammo, 9999);
      }
    }
  }
});

function setWeaponInHand(_0xf916x13, _0xf916x14) {
  if (_0xf916x13 != null) {
    mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, _0xf916x13 >> 0, true);
    mp.game.invoke('0x14E56BC5B5DB6A19', mp.players.local.handle, _0xf916x13 >> 0, 9999);
    mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, _0xf916x13 >> 0, _0xf916x14);
    UpdateAmmo(_0xf916x14, 9999);
  } else {
    mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1569615261, true);
    UpdateAmmo(0, 9999);
  }
}

var itemSwapTimeOut = new Date().getTime();
mp.keys.bind(0x31, true, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  setActiveFastSlotBind(1);
});
mp.keys.bind(0x32, true, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  setActiveFastSlotBind(2);
});
mp.keys.bind(0x33, true, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  setActiveFastSlotBind(3);
});
mp.keys.bind(0x34, true, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (localplayer.isFalling()) {
    return;
  }

  setActiveFastSlotBind(4);
});
mp.keys.bind(0x35, true, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (localplayer.isFalling()) {
    return;
  }

  setActiveFastSlotBind(5);
});
mp.events.add('ReloadAllWeaponsAmmo', () => {
  for (let _0xf916xa = 0; _0xf916xa < weaponsDataAmmo.length; _0xf916xa++) {
    weaponsDataAmmo[_0xf916xa].Ammo = weaponsDataDefaultAmmoCount[_0xf916xa].Ammo;
  }
});
mp.keys.bind(0x52, false, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (player.dimension != 7 && player.dimension != 8 && player.dimension != 12 && inGangwar != true) {
    return;
  }

  let _0xf916xc = GangwarActiveFastSlot.SlotNumber;
  let _0xf916x16 = GangwarActiveFastSlot.ActiveWeaponID;

  if (_0xf916xc >= 4) {
    return;
  }

  weaponsDataAmmo[FastSlotsData[parseInt(_0xf916xc)].WeaponID].Ammo = weaponsDataDefaultAmmoCount[parseInt(_0xf916x16)].Ammo;
  UpdateAmmo(weaponsDataDefaultAmmoCount[parseInt(_0xf916x16)].Ammo, 9999);
});

function setActiveFastSlotBind(_0xf916xa) {
  try {
    if (localplayer.isDead() == true) {
      return;
    }

    if (localplayer.dimension != 7 && localplayer.dimension != 8 && localplayer.dimension != 12 && inGangwar != true) {
      return;
    }

    if (new Date().getTime() - itemSwapTimeOut < 1700 && localplayer.getVariable('adminlvl') != 10) {
      return;
    }

    if (_0xf916xa >= 4) {
      if (FastSlotsData[parseInt(_0xf916xa)].ItemID != null) {
        if (mp.players.local.getHealth() >= 100 && FastSlotsData[parseInt(_0xf916xa)].ItemID != 35) {
          return mp.events.call('fastemsghud', 'Невозможно использовать аптеку, когда вы полностью здоровы.');
        }

        InventoryCEF.execute(`${'nullifyFastSlot('}${_0xf916xa}${',\'Self\')'}`);
        mp.events.call('InventoryItemIntercation', 'using', FastSlotsData[parseInt(_0xf916xa)].ItemID, FastSlotsData[parseInt(_0xf916xa)].ItemSerial);
      }
    }

    if (parseInt(GangwarActiveFastSlot.SlotNumber) != _0xf916xa) {
      itemSwapTimeOut = new Date().getTime();
    }

    GangwarActiveFastSlot.SlotNumber = parseInt(_0xf916xa);
    GangwarActiveFastSlot.ActiveWeaponID = FastSlotsData[parseInt(_0xf916xa)].WeaponID;

    if (FastSlotsData[parseInt(_0xf916xa)].ItemHash != null) {
      if (FastSlotsData[parseInt(_0xf916xa)].ItemHash == localplayer.weapon) {
        return;
      }

      setWeaponInHand(FastSlotsData[parseInt(_0xf916xa)].ItemHash, weaponsDataAmmo[FastSlotsData[parseInt(_0xf916xa)].WeaponID].Ammo);
    } else {
      setWeaponInHand(FastSlotsData[parseInt(_0xf916xa)].ItemHash, 0);
    }
  } catch (e) {
    mp.gui.chat.push(`${'e: '}${e}${''}`);
  }
}

mp.events.add('InventoryNullifyFastSlotVariable', _0xf916x18 => {
  if (_0xf916x18 == 6) {
    playerHealths.Armour = 0;
  }

  let _0xf916x19 = FastSlotsData[parseInt(_0xf916x18)].ItemHash;

  if (_0xf916x19 != null) {
    if (FastSlotsData.filter(_0xf916x1a => {
      return _0xf916x1a.ItemHash == _0xf916x19;
    }).length <= 1) {
      localplayer.removeWeapon(FastSlotsData[parseInt(_0xf916x18)].ItemHash);
    }
  }

  if (GangwarActiveFastSlot.SlotNumber == parseInt(_0xf916x18)) {
    setWeaponInHand(null, 0);
  }

  FastSlotsData[parseInt(_0xf916x18)].ItemID = null;
  FastSlotsData[parseInt(_0xf916x18)].ItemSerial = null;
  FastSlotsData[parseInt(_0xf916x18)].ItemHash = null;
  FastSlotsData[parseInt(_0xf916x18)].WeaponID = null;
  FastSlotsData[parseInt(_0xf916x18)].ItemName = null;

  if (_0xf916x18 == 6 || _0xf916x18 == 7) {
    mp.events.callRemote('NullifyGangwarClothes', parseInt(_0xf916x18));
  }
});
mp.events.add('inventorySellCheck', _0xf916x1b => {
  for (let _0xf916xa = 0; _0xf916xa < FastSlotsData.length; _0xf916xa++) {
    if (FastSlotsData[_0xf916xa].ItemName == _0xf916x1b) {
      FastSlotsData[parseInt(_0xf916xa)].ItemID = null;
      FastSlotsData[parseInt(_0xf916xa)].ItemSerial = null;
      FastSlotsData[parseInt(_0xf916xa)].ItemHash = null;
      FastSlotsData[parseInt(_0xf916xa)].WeaponID = null;
      FastSlotsData[parseInt(_0xf916xa)].ItemName = null;
      InventoryCEF.execute(`${'nullifyFastSlot(\''}${_0xf916xa}${'\',\'Death\')'}`);

      if (GangwarActiveFastSlot.SlotNumber == parseInt(_0xf916xa)) {
        setWeaponInHand(null, 0);
      }
    }
  }
});
global.AlcoholSettings = {
  Active: false,
  Time: 0,
  Interval: null,
  GGAlcoholTicks: 0,
  HPTime: 0
};
mp.events.add('GGInventoryUsingAlcohol', () => {
  usingAlcohol();
});

function usingAlcohol() {
  if (AlcoholSettings.Active == true) {
    AlcoholSettings.Time = AlcoholSettings.Time + 90;
  } else {
    AlcoholSettings.Time = 90;
    AlcoholSettings.Active = true;
    AlcoholSettings.HPTime = 0;

    if (AlcoholSettings.Interval != null) {
      clearInterval(AlcoholSettings.Interval);
      AlcoholSettings.Interval = null;
    }

    AlcoholSettings.Interval = setInterval(() => {
      if (AlcoholSettings.Time <= 0) {
        clearInterval(AlcoholSettings.Interval);
        AlcoholSettings.Interval = null;
        AlcoholSettings.Active = false;
      } else {
        AlcoholSettings.Time--;
        AlcoholSettings.HPTime++;

        if (AlcoholSettings.HPTime >= 3) {
          AlcoholSettings.HPTime = 0;

          if (localplayer.isDead() == true) {
            return;
          }

          if (parseInt(playerHealths.Health) + 3 >= 101) {
            playerHealths.Health = 100;
            localplayer.setHealth(200);
          } else {
            playerHealths.Health = parseInt(playerHealths.Health) + 3;
            localplayer.setHealth(100 + parseInt(playerHealths.Health));
          }
        }
      }
    }, 1000);
  }
}

function pointingAtTestGG(_0xf916x1e) {
  const _0xf916x1f = mp.cameras.new('gameplay');

  let _0xf916x20 = _0xf916x1f.getCoord();

  return mp.raycasting.testPointToPoint(_0xf916x20, _0xf916x1e, mp.players.local, 31);
}

let lastSh = {
  rev: new Date().getTime(),
  per: new Date().getTime(),
  mk: new Date().getTime(),
  ny: new Date().getTime(),
  frstTR: null,
  lastTR: new Date().getTime(),
  cmpctrfl: new Date().getTime(),
  spclcrbn: new Date().getTime(),
  sgmk2: new Date().getTime(),
  smg: new Date().getTime(),
  asltrfl: new Date().getTime(),
  cmbtpdw: new Date().getTime(),
  crbnrfl: new Date().getTime(),
  hvyshtgub: new Date().getTime()
};
let countGL = 0;
let countSA = 0;
mp.events.add('playerWeaponShot', (_0xf916x1e, _0xf916x24) => {
  if (mp.players.local.getVariable('trin') == 1) {
    return;
  }

  let _0xf916x25 = false;
  let _0xf916x26 = false;

  switch (localplayer.weapon) {
    case 0xC1B3C3D1:
      if (new Date().getTime() - lastSh.rev < 1700) {
        if (lastSh.frstTR == null) {
          lastSh.frstTR = new Date().getTime();
        }

        if (new Date().getTime() - lastSh.lastTR < 900) {
          countGL++;

          if (countGL >= 7) {
            if (new Date().getTime() - lastSh.frstTR < 15000) {
              _0xf916x26 = true;
              mp.events.callRemote('ACWSTr', 1, countGL, countSA, new Date().getTime() - lastSh.frstTR);
            } else {
              countGL = 0;
              lastSh.frstTR = new Date().getTime();
            }
          }
        }

        lastSh.lastTR = new Date().getTime();
        _0xf916x25 = true;
        countSA++;

        if (_0xf916x26 == false) {
          mp.events.callRemote('ACWS', 1, new Date().getTime() - lastSh.rev, countSA);
        }
      }

      lastSh.rev = new Date().getTime();
      break;

    case 0x57A4368C:
      if (new Date().getTime() - lastSh.per < 2100) {
        if (lastSh.frstTR == null) {
          lastSh.frstTR = new Date().getTime();
        }

        if (new Date().getTime() - lastSh.lastTR < 900) {
          countGL++;

          if (countGL >= 10) {
            if (new Date().getTime() - lastSh.frstTR < 15000) {
              _0xf916x26 = true;
              mp.events.callRemote('ACWSTr', 2, countGL, countSA, new Date().getTime() - lastSh.frstTR);
            } else {
              countGL = 0;
              lastSh.frstTR = new Date().getTime();
            }
          }
        }

        lastSh.lastTR = new Date().getTime();
        _0xf916x25 = true;
        countSA++;
        mp.events.callRemote('ACWS', 2, new Date().getTime() - lastSh.per, countSA);
      }

      lastSh.per = new Date().getTime();
      break;

    case 0xCB96392F:
      if (new Date().getTime() - lastSh.mk < 1350) {
        if (lastSh.frstTR == null) {
          lastSh.frstTR = new Date().getTime();
        }

        if (new Date().getTime() - lastSh.lastTR < 900) {
          countGL++;

          if (countGL >= 10) {
            if (new Date().getTime() - lastSh.frstTR < 15000) {
              _0xf916x26 = true;
              mp.events.callRemote('ACWSTr', 3, countGL, countSA, new Date().getTime() - lastSh.frstTR);
            } else {
              countGL = 0;
              lastSh.frstTR = new Date().getTime();
            }
          }
        }

        lastSh.lastTR = new Date().getTime();
        _0xf916x25 = true;
        countSA++;
        mp.events.callRemote('ACWS', 3, new Date().getTime() - lastSh.mk, countSA);
      }

      lastSh.mk = new Date().getTime();
      break;

    case 0x917F6C8C:
      if (new Date().getTime() - lastSh.ny < 1300) {
        if (lastSh.frstTR == null) {
          lastSh.frstTR = new Date().getTime();
        }

        if (new Date().getTime() - lastSh.lastTR < 900) {
          countGL++;

          if (countGL >= 10) {
            if (new Date().getTime() - lastSh.frstTR < 15000) {
              _0xf916x26 = true;
              mp.events.callRemote('ACWSTr', 4, countGL, countSA, new Date().getTime() - lastSh.frstTR);
            } else {
              countGL = 0;
              lastSh.frstTR = new Date().getTime();
            }
          }
        }

        lastSh.lastTR = new Date().getTime();
        _0xf916x25 = true;
        countSA++;
        mp.events.callRemote('ACWS', 4, new Date().getTime() - lastSh.ny, countSA);
      }

      lastSh.ny = new Date().getTime();
      break;

    case 0x624FE830:
      if (new Date().getTime() - lastSh.cmpctrfl < 100) {
        if (lastSh.frstTR == null) {
          lastSh.frstTR = new Date().getTime();
        }

        if (new Date().getTime() - lastSh.lastTR < 95) {
          countGL++;

          if (countGL >= 10) {
            if (new Date().getTime() - lastSh.frstTR < 15000) {
              _0xf916x26 = true;
              mp.events.callRemote('ACWSTr', 5, countGL, countSA, new Date().getTime() - lastSh.frstTR);
            } else {
              countGL = 0;
              lastSh.frstTR = new Date().getTime();
            }
          }
        }

        lastSh.lastTR = new Date().getTime();
        _0xf916x25 = true;
        countSA++;
        mp.events.callRemote('ACWS', 5, new Date().getTime() - lastSh.cmpctrfl, countSA);
      }

      lastSh.cmpctrfl = new Date().getTime();
      break;

    case 0xC0A3098D:
      if (new Date().getTime() - lastSh.spclcrbn < 70) {
        if (lastSh.frstTR == null) {
          lastSh.frstTR = new Date().getTime();
        }

        if (new Date().getTime() - lastSh.lastTR < 60) {
          countGL++;

          if (countGL >= 10) {
            if (new Date().getTime() - lastSh.frstTR < 15000) {
              _0xf916x26 = true;
              mp.events.callRemote('ACWSTr', 6, countGL, countSA, new Date().getTime() - lastSh.frstTR);
            } else {
              countGL = 0;
              lastSh.frstTR = new Date().getTime();
            }
          }
        }

        lastSh.lastTR = new Date().getTime();
        _0xf916x25 = true;
        countSA++;
        mp.events.callRemote('ACWS', 6, new Date().getTime() - lastSh.spclcrbn, countSA);
      }

      lastSh.spclcrbn = new Date().getTime();
      break;

    case 0x78A97CD0:
      if (new Date().getTime() - lastSh.sgmk2 < 95) {
        if (lastSh.frstTR == null) {
          lastSh.frstTR = new Date().getTime();
        }

        if (new Date().getTime() - lastSh.lastTR < 90) {
          countGL++;

          if (countGL >= 10) {
            if (new Date().getTime() - lastSh.frstTR < 15000) {
              _0xf916x26 = true;
              mp.events.callRemote('ACWSTr', 7, countGL, countSA, new Date().getTime() - lastSh.frstTR);
            } else {
              countGL = 0;
              lastSh.frstTR = new Date().getTime();
            }
          }
        }

        lastSh.lastTR = new Date().getTime();
        _0xf916x25 = true;
        countSA++;
        mp.events.callRemote('ACWS', 7, new Date().getTime() - lastSh.sgmk2, countSA);
      }

      lastSh.sgmk2 = new Date().getTime();
      break;

    case 0x2BE6766B:
      if (new Date().getTime() - lastSh.smg < 95) {
        if (lastSh.frstTR == null) {
          lastSh.frstTR = new Date().getTime();
        }

        if (new Date().getTime() - lastSh.lastTR < 90) {
          countGL++;

          if (countGL >= 10) {
            if (new Date().getTime() - lastSh.frstTR < 15000) {
              _0xf916x26 = true;
              mp.events.callRemote('ACWSTr', 8, countGL, countSA, new Date().getTime() - lastSh.frstTR);
            } else {
              countGL = 0;
              lastSh.frstTR = new Date().getTime();
            }
          }
        }

        lastSh.lastTR = new Date().getTime();
        _0xf916x25 = true;
        countSA++;
        mp.events.callRemote('ACWS', 8, new Date().getTime() - lastSh.smg, countSA);
      }

      lastSh.smg = new Date().getTime();
      break;

    case 0xBFEFFF6D:
      if (new Date().getTime() - lastSh.asltrfl < 130) {
        if (lastSh.frstTR == null) {
          lastSh.frstTR = new Date().getTime();
        }

        if (new Date().getTime() - lastSh.lastTR < 125) {
          countGL++;

          if (countGL >= 10) {
            if (new Date().getTime() - lastSh.frstTR < 15000) {
              _0xf916x26 = true;
              mp.events.callRemote('ACWSTr', 9, countGL, countSA, new Date().getTime() - lastSh.frstTR);
            } else {
              countGL = 0;
              lastSh.frstTR = new Date().getTime();
            }
          }
        }

        lastSh.lastTR = new Date().getTime();
        _0xf916x25 = true;
        countSA++;
        mp.events.callRemote('ACWS', 9, new Date().getTime() - lastSh.asltrfl, countSA);
      }

      lastSh.asltrfl = new Date().getTime();
      break;

    case 0x0A3D4D34:
      if (new Date().getTime() - lastSh.cmbtpdw < 99) {
        if (lastSh.frstTR == null) {
          lastSh.frstTR = new Date().getTime();
        }

        if (new Date().getTime() - lastSh.lastTR < 95) {
          countGL++;

          if (countGL >= 10) {
            if (new Date().getTime() - lastSh.frstTR < 15000) {
              _0xf916x26 = true;
              mp.events.callRemote('ACWSTr', 10, countGL, countSA, new Date().getTime() - lastSh.frstTR);
            } else {
              countGL = 0;
              lastSh.frstTR = new Date().getTime();
            }
          }
        }

        lastSh.lastTR = new Date().getTime();
        _0xf916x25 = true;
        countSA++;
        mp.events.callRemote('ACWS', 10, new Date().getTime() - lastSh.cmbtpdw, countSA);
      }

      lastSh.cmbtpdw = new Date().getTime();
      break;

    case 0x83BF0278:
      if (new Date().getTime() - lastSh.crbnrfl < 78) {
        if (lastSh.frstTR == null) {
          lastSh.frstTR = new Date().getTime();
        }

        if (new Date().getTime() - lastSh.lastTR < 75) {
          countGL++;

          if (countGL >= 10) {
            if (new Date().getTime() - lastSh.frstTR < 15000) {
              _0xf916x26 = true;
              mp.events.callRemote('ACWSTr', 11, countGL, countSA, new Date().getTime() - lastSh.frstTR);
            } else {
              countGL = 0;
              lastSh.frstTR = new Date().getTime();
            }
          }
        }

        lastSh.lastTR = new Date().getTime();
        _0xf916x25 = true;
        countSA++;
        mp.events.callRemote('ACWS', 11, new Date().getTime() - lastSh.crbnrfl, countSA);
      }

      lastSh.crbnrfl = new Date().getTime();
      break;

    case 0x3AABBBAA:
      if (new Date().getTime() - lastSh.hvyshtgub < 260) {
        if (lastSh.frstTR == null) {
          lastSh.frstTR = new Date().getTime();
        }

        if (new Date().getTime() - lastSh.lastTR < 259) {
          countGL++;

          if (countGL >= 10) {
            if (new Date().getTime() - lastSh.frstTR < 15000) {
              _0xf916x26 = true;
              mp.events.callRemote('ACWSTr', 12, countGL, countSA, new Date().getTime() - lastSh.frstTR);
            } else {
              countGL = 0;
              lastSh.frstTR = new Date().getTime();
            }
          }
        }

        lastSh.lastTR = new Date().getTime();
        _0xf916x25 = true;
        countSA++;
        mp.events.callRemote('ACWS', 12, new Date().getTime() - lastSh.hvyshtgub, countSA);
      }

      lastSh.hvyshtgub = new Date().getTime();
      break;
  }

  if (_0xf916x25 == true) {
    return;
  }

  if (localplayer.dimension == 7 || localplayer.dimension == 8 || localplayer.dimension == 12 || inGangwar == true) {
    if (inGreenZone == true) {
      return;
    }

    let _0xf916xc = GangwarActiveFastSlot.SlotNumber;

    if (FastSlotsData[parseInt(GangwarActiveFastSlot.SlotNumber)].WeaponID == null || FastSlotsData[parseInt(GangwarActiveFastSlot.SlotNumber)].WeaponID == undefined) {
      return GGsetFistInHand();
    }

    if (FastSlotsData[parseInt(GangwarActiveFastSlot.SlotNumber)].ItemHash != localplayer.weapon) {
      return GGsetFistInHand();
    }

    if (mp.players.exists(_0xf916x24)) {
      getHitBone(_0xf916x1e, _0xf916x24);
    } else {
      let _0xf916x27 = pointingAtTestGG(_0xf916x1e);

      if (_0xf916x27 === undefined || _0xf916x27.entity === undefined || _0xf916x27 === 'undefined' || _0xf916x27.entity === 'undefined') {} else {
        if (_0xf916x27.entity.type === 'player') {
          getHitBone(_0xf916x1e, _0xf916x27.entity);
        }
      }
    }

    weaponsDataAmmo[FastSlotsData[parseInt(GangwarActiveFastSlot.SlotNumber)].WeaponID].Ammo--;

    if (weaponsDataAmmo[FastSlotsData[parseInt(GangwarActiveFastSlot.SlotNumber)].WeaponID].Ammo == 0) {
      let _0xf916x16 = FastSlotsData[parseInt(GangwarActiveFastSlot.SlotNumber)].WeaponID;
      mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, localplayer.weapon >> 0, 0);
      weaponsDataAmmo[FastSlotsData[parseInt(_0xf916xc)].WeaponID].Ammo = weaponsDataDefaultAmmoCount[parseInt(_0xf916x16)].Ammo;
    }

    UpdateAmmo(weaponsDataAmmo[FastSlotsData[parseInt(_0xf916xc)].WeaponID].Ammo, 9999);
  }

  if (AlcoholSettings.Active == true) {
    let _0xf916x27 = pointingAtGGAlcohol(250);

    if (_0xf916x27 === undefined || _0xf916x27.entity === undefined || _0xf916x27 === 'undefined' || _0xf916x27.entity === 'undefined') {
      return;
    }

    if (_0xf916x27.entity.type === 'player' || _0xf916x27.entity.type === 'vehicle') {
      if (_0xf916x27.entity == player) {
        return;
      }

      AlcoholSettings.GGAlcoholTicks++;
      mp.events.call('client.start.particle.fx.lopped.at.coord', `${'GiveHit'}${AlcoholSettings.GGAlcoholTicks}${''}`, 'scr_rcbarry2', 'muz_clown', {
        x: _0xf916x27.position.x,
        y: _0xf916x27.position.y,
        z: _0xf916x27.position.z
      }, {
        x: 0,
        y: 0,
        z: 0
      }, 0.75, true, true, true);
      setTimeout(() => {
        mp.events.call('client.stop.particle.fx.lopped', `${'GiveHit'}${AlcoholSettings.GGAlcoholTicks}${''}`);
      }, 100);
    }
  }

  let _0xf916x28 = localplayer.dimension;

  if (_0xf916x28 == 1 || _0xf916x28 == 2 || _0xf916x28 == 4 || _0xf916x28 == 5 || _0xf916x28 == 500) {
    if ((_0xf916x28 == 1 || _0xf916x28 == 2) && localplayer.weapon != 3249783761) {
      return;
    }

    if (mp.players.exists(_0xf916x24)) {
      getHitBoneDM(_0xf916x1e, _0xf916x24);
    } else {
      let _0xf916x27 = pointingAtTestGG(_0xf916x1e);

      if (_0xf916x27 === undefined || _0xf916x27.entity === undefined || _0xf916x27 === 'undefined' || _0xf916x27.entity === 'undefined') {} else {
        if (_0xf916x27.entity.type === 'player') {
          getHitBoneDM(_0xf916x1e, _0xf916x27.entity);
        }
      }
    }
  }
});

function GGsetFistInHand() {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1569615261, true);
  UpdateAmmo(0, 9999);
}

function pointingAtGGAlcohol(_0xf916x2b) {
  const _0xf916x1f = mp.cameras.new('gameplay');

  let _0xf916x20 = _0xf916x1f.getCoord();

  let _0xf916x2c = _0xf916x1f.getDirection();

  let _0xf916x2d = new mp.Vector3(_0xf916x2c.x * _0xf916x2b + _0xf916x20.x, _0xf916x2c.y * _0xf916x2b + _0xf916x20.y, _0xf916x2c.z * _0xf916x2b + _0xf916x20.z);

  return mp.raycasting.testPointToPoint(_0xf916x20, _0xf916x2d, [1, 16]);
}

mp.events.add('playerDeath', (_0xf916x2e, _0xf916x2f, _0xf916x30) => {
  if (_0xf916x2e.dimension == 7 || _0xf916x2e.dimension == 8 || _0xf916x2e.dimension == 12 || inGangwar == true) {
    mp.game.gameplay.setFadeOutAfterDeath(false);
    mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1569615261, true);

    if (GangwarActiveFastSlot.SlotNumber <= 3) {
      let _0xf916x31 = FastSlotsData[parseInt(GangwarActiveFastSlot.SlotNumber)].ItemID;

      if (_0xf916x31 != null && _0xf916x31 != 6 && _0xf916x31 != 7 && _0xf916x31 != 31 && _0xf916x31 != 32) {
        InventoryCEF.execute(`${'nullifyFastSlot(\''}${GangwarActiveFastSlot.SlotNumber}${'\',\'Death\')'}`);
        mp.events.callRemote('InventoryItemDeathDrop', FastSlotsData[parseInt(GangwarActiveFastSlot.SlotNumber)].ItemID, FastSlotsData[parseInt(GangwarActiveFastSlot.SlotNumber)].ItemSerial);
      }
    }
  }
});
mp.events.add('playerDeath', (_0xf916x2e, _0xf916x2f, _0xf916x30) => {
  mp.game.gameplay.setFadeOutAfterDeath(false);
  mp.players.local.setInvincible(false);
  mp.game.audio.playSoundFrontend(-1, 'ScreenFlash', 'WastedSounds', true);

  if (_0xf916x2e.dimension == 6000 || _0xf916x2e.dimension == 9) {
    mp.game.gameplay.setFadeOutAfterDeath(false);
  }

  if (_0xf916x2e.dimension == 100) {
    UpdateAmmo(6, 9999);
    magazine = 6;
  }

  if (_0xf916x2e.dimension == 101) {
    UpdateAmmo(30, 9999);
    ;
    magazine = 30;
  }

  if (_0xf916x2e.dimension == 200) {
    UpdateAmmo(30, 9999);
    magazine = 30;
  }

  if (_0xf916x2e.dimension == 300) {
    UpdateAmmo(30, 9999);
    magazine = 30;
  }

  if (_0xf916x2e.dimension == 400) {
    UpdateAmmo(6, 9999);
    magazine = 6;
  }

  if (_0xf916x2e.dimension == 500) {
    UpdateAmmo(30, 9999);
    magazine = 30;
  }

  if (_0xf916x2e.dimension == 6000) {
    UpdateAmmo(6, 9999);
    magazine = 6;
  }
});
var _0x59ac = ["inventoryRemoveFastSlotItem", "length", "ItemID", "ItemSerial", "ItemHash", "WeaponID", "ItemName", "nullifyFastSlot('", "','Death')", "execute", "SlotNumber", "add", "events"];
mp.events.add('inventoryRemoveFastSlotItem', (_0x96dex1, _0x96dex2) => {
  for (let _0x96dex3 = 0; _0x96dex3 < FastSlotsData.length; _0x96dex3++) {
    if (FastSlotsData[_0x96dex3].ItemID == parseInt(_0x96dex1) && FastSlotsData[_0x96dex3].ItemSerial == parseInt(_0x96dex2)) {
      FastSlotsData[parseInt(_0x96dex3)].ItemID = null;
      FastSlotsData[parseInt(_0x96dex3)].ItemSerial = null;
      FastSlotsData[parseInt(_0x96dex3)].ItemHash = null;
      FastSlotsData[parseInt(_0x96dex3)].WeaponID = null;
      FastSlotsData[parseInt(_0x96dex3)].ItemName = null;
      InventoryCEF.execute(`${'nullifyFastSlot(\''}${_0x96dex3}${'\',\'Death\')'}`);

      if (GangwarActiveFastSlot.SlotNumber == parseInt(_0x96dex3)) {
        setWeaponInHand(null, 0);
      }
    }
  }
});