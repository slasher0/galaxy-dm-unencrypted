var _$_968b = ["local", "players", "LoadInventoryItems", "parse", "add", "events", "Inventory_AddNewItem", "execute", "getTime", "dimension", "isDead", "visible", "cursor", "gui", "transitionToBlurred", "graphics", "game", "getHealth", "getArmour", "changeInventoryDisplay('open');", "activate", "chat", "show", "hide", "transitionFromBlurred", "changeInventoryDisplay('close');", "open", "bind", "keys", "CloseInventoryWithClick", "ArmourSwipeTimeOut", "InventoryItemIntercation", "vehicle", "callRemote", "using", "drop", "InventoryItemRemove", "Inventory_UpdateItemsLength", "GangwarAttachments", "Health", "GangwarPlaySyncSounds", "UsingHealthItem", "call", "MedicPack", "addLocal", "attachmentMngr", "removeLocal", "StopUsingItemWithAnim", "Bandage", "Alko"];
const localplayer = mp.players.local;
mp.events.add('LoadInventoryItems', _0x253DF => {
  let _0x2541B = JSON.parse(_0x253DF);
});
mp.events.add('Inventory_AddNewItem', (_0x2550B, _0x25547, _0x25583, _0x254CF, _0x255BF, _0x25493, _0x25457) => {
  InventoryCEF.execute(`addItemInInventory('${_0x2550B}','${_0x25547}','${_0x25583}','${_0x254CF}','${_0x255BF}','${_0x25493}','${_0x25457}')`);
  HudMenuCEF.execute(`addItemInInv('${_0x2550B}','${_0x25547}')`);
  InventoryCEF.execute(`addItemInWareHousePlayerInventory('${_0x2550B}','${_0x25547}','${_0x25583}','${_0x254CF}','${_0x255BF}','${_0x25493}','${_0x25457}')`);
});
var inventoryDisplay = false;
var InventoryKey = new Date().getTime();
mp.keys.bind(0x49, true, function () {
  if (new Date().getTime() - InventoryKey < 500) {
    return;
  }

  InventoryKey = new Date().getTime();

  if (player.dimension != 7 && player.dimension != 8 && player.dimension != 12 && inGangwar != true && inventoryDisplay == false) {
    return;
  }

  if (player.isDead() == true && inventoryDisplay == false) {
    return HudMenuCEF.execute(`emsg('Невозможно открыть инвентарь, когда вы мертвы');`);
  }

  switch (inventoryDisplay) {
    case false:
      if (mp.gui.cursor.visible || ChatActive) {
        return;
      }

      inventoryDisplay = true;
      mp.game.graphics.transitionToBlurred(50);
      InventoryCEF.execute(`changeHealthStatus('${localplayer.getHealth()}','${localplayer.getArmour()}')`);
      InventoryCEF.execute('changeInventoryDisplay(\'open\');');
      mp.gui.chat.activate(false);
      mp.gui.chat.show(false);
      mp.gui.cursor.visible = true;
      ChangeHUDKeysDisplay('hide');
      ChangeHUDKillFeedDisplay('hide');
      ChangeHUDFreeCaseDisplay('hide');
      ChangeHUDRaitingDisplay('hide');
      break;

    case true:
      inventoryDisplay = false;
      mp.game.graphics.transitionFromBlurred(50);
      InventoryCEF.execute('changeInventoryDisplay(\'close\');');
      mp.gui.cursor.visible = false;
      ChangeHUDKeysDisplay('open');
      ChangeHUDKillFeedDisplay('open');
      ChangeHUDFreeCaseDisplay('open');
      ShowChat();
      break;

    default:
      break;
  }
});
mp.events.add('CloseInventoryWithClick', () => {
  inventoryDisplay = false;
  mp.game.graphics.transitionFromBlurred(200);
  InventoryCEF.execute('changeInventoryDisplay(\'close\');');
  mp.gui.cursor.visible = false;
  ChangeHUDKeysDisplay('open');
  ChangeHUDKillFeedDisplay('open');
  ChangeHUDFreeCaseDisplay('open');
  ShowChat();
});
global.ArmourSwipeTimeOut = false;
var lastItemDrop = new Date().getTime();
mp.events.add('InventoryItemIntercation', (_0x25727, _0x2550B, _0x256EB) => {
  if (localplayer.isDead() == true) {
    return HudMenuCEF.execute(`emsg('Невозможно выбросить предмет, когда вы мертвы');`);
  }

  switch (_0x25727) {
    case 'using':
      if (localplayer.vehicle && _0x2550B != 0 && _0x2550B != 1 && _0x2550B != 2 && _0x2550B != 3 && _0x2550B != 4 && _0x2550B != 5 && _0x2550B != 14 && _0x2550B != 25 && _0x2550B != 26) {
        return HudMenuCEF.execute(`fastemsg('Невозможно использовать этот предмет находясь в машине');`);
      }

      if ((_0x2550B == 0 || _0x2550B == 1 || _0x2550B == 2) && localplayer.getHealth() == 100) {
        return HudMenuCEF.execute(`fastemsg('Невозможно использовать аптеку, когда вы полностью здоровы.');`);
      }

      if (_0x2550B == 25 && !localplayer.vehicle) {
        return HudMenuCEF.execute(`fastemsg('Вы должны находиться в машине')`);
      }

      mp.events.callRemote('InventoryItemIntercation', _0x25727, _0x2550B, _0x256EB);
      break;

    case 'drop':
      if (new Date().getTime() - lastItemDrop < 600) {
        return HudMenuCEF.execute(`fastemsg('Не так быстро');`);
      }

      lastItemDrop = new Date().getTime();

      if (localplayer.vehicle) {
        return HudMenuCEF.execute(`fastemsg('Невозможно выбросить предмет находясь в машине');`);
      }

      if (_0x2550B == 4) {
        return HudMenuCEF.execute(`fastemsg('Невозможно выбросить 100% бронежилет');`);
      }

      if (_0x2550B == 14) {
        return HudMenuCEF.execute(`fastemsg('Невозможно выбросить кобуру');`);
      }

      if (localplayer.isDead() == true) {
        return HudMenuCEF.execute(`emsg('Невозможно выбросить предмет, когда вы мертвы');`);
      }

      mp.events.callRemote('InventoryItemIntercation', _0x25727, _0x2550B, _0x256EB);
      break;
  }
});
mp.events.add('InventoryItemRemove', (_0x2550B, _0x256EB, _0x25457) => {
  InventoryCEF.execute(`removeItemInInventory('${_0x2550B}','${_0x256EB}','${_0x25457}')`);
  HudMenuCEF.execute(`removeItemFromInv('${_0x2550B}','${_0x256EB}')`);
  InventoryCEF.execute(`removeItemInPlayerWareHouseInventory('${_0x2550B}','${_0x256EB}','${_0x25457}')`);
});
mp.events.add('Inventory_UpdateItemsLength', _0x25457 => {
  InventoryCEF.execute(`UpdateItemsLength('${_0x25457}')`);
});

function setArmourTimeOut() {
  ArmourSwipeTimeOut = true;
  setTimeout(() => {
    ArmourSwipeTimeOut = false;
  }, 8000);
}

mp.events.add('GangwarAttachments', _0x2588F => {
  let _0x25853 = playerHealths.Health;
  let _0x25817 = 50;

  switch (_0x2588F) {
    case 0:
      mp.events.call('GangwarPlaySyncSounds', 'UsingHealthItem');
      mp.attachmentMngr.addLocal('MedicPack');
      InHealthAnimation = true;
      setTimeout(() => {
        mp.attachmentMngr.removeLocal('MedicPack');
        InHealthAnimation = false;

        if (playerHealths.Health >= 50) {
          _0x25817 = 100;
          playerHealths.Health = 100;
        } else {
          _0x25817 = playerHealths.Health + 50;
          playerHealths.Health = _0x25817;
        }

        mp.events.callRemote('StopUsingItemWithAnim', _0x25817);
      }, 3000);
      break;

    case 1:
      mp.events.call('GangwarPlaySyncSounds', 'UsingHealthItem');
      mp.attachmentMngr.addLocal('Bandage');
      InHealthAnimation = true;
      setTimeout(() => {
        mp.attachmentMngr.removeLocal('Bandage');
        InHealthAnimation = false;

        if (playerHealths.Health >= 70) {
          _0x25817 = 100;
          playerHealths.Health = 100;
        } else {
          _0x25817 = playerHealths.Health + 30;
          playerHealths.Health = _0x25817;
        }

        mp.events.callRemote('StopUsingItemWithAnim', _0x25817);
      }, 2000);
      break;

    case 2:
      mp.events.call('GangwarPlaySyncSounds', 'UsingHealthItem');
      mp.attachmentMngr.addLocal('MedicPack');
      InHealthAnimation = true;
      setTimeout(() => {
        mp.attachmentMngr.removeLocal('MedicPack');
        mp.events.callRemote('StopUsingItemWithAnim', 100);
        InHealthAnimation = false;
      }, 3000);
      break;

    case 3:
      mp.attachmentMngr.addLocal('Alko');
      setTimeout(() => {
        mp.attachmentMngr.removeLocal('Alko');
        mp.events.callRemote('StopUsingItemWithAnim', null);
      }, 5000);
      break;

    default:
      break;
  }
});