var TrainingGroundMode = 'free';
mp.events.add('TrainingGroundMode', mode => {
  TrainingGroundMode = mode;
});
global.playerInTrainingGround = false;
global.TrainingGroundTypePicked = 1;
mp.events.add('TrainingGroundStart', () => {
  mp.events.call('clearCaptureTerritories', null, null);
  clearAllLocationTrainingInterval();
  TrainingGroundBrowsers();
  clearAllDuelParams();
  pedskilled = 0;
  pedsnonkill = 0;

  switch (TrainingGroundMode) {
    case 'free':
      break;

    case 'medium':
      break;

    case 'hard':
      break;

    default:
      break;
  }

  if (pedtimer != null) {
    clearInterval(pedtimer);
    pedtimer = null;
  }

  pedtimer = setInterval(() => {
    let _0x27C6B = RandomCoord(16);

    let _0x27C2F = mp.peds.new(mp.game.joaat('MP_M_Freemode_01'), new mp.Vector3(-2496.904052734375 + _0x27C6B.x, 3140.989990234375 + _0x27C6B.y, 32), 270.0, 90000 + parseInt(mp.players.local.remoteId));

    _0x27C2F.freezePosition(false);

    _0x27C2F.setInvincible(false);

    _0x27C2F.setProofs(false, false, false, false, false, false, false, false);

    _0x27C2F.setHealth(101);

    _0x27C2F.taskCombat(mp.players.local.handle, 0, 16);

    mp.game.audio.playSoundFromCoord(1, 'CONFIRM_BEEP', -2496.904052734375 + _0x27C6B.x, 3140.989990234375 + _0x27C6B.y, 32, 'HUD_MINI_GAME_SOUNDSET', false, 0, false);

    _0x27C2F.setComponentVariation(1, 129, 1, 0);

    _0x27C2F.setComponentVariation(11, 348, 0, 0);

    _0x27C2F.setComponentVariation(8, 15, 0, 0);

    _0x27C2F.setComponentVariation(4, 78, 2, 0);

    _0x27C2F.setComponentVariation(6, 77, 16, 0);

    _0x27C2F.setComponentVariation(3, 4, 0, 0);

    setTimeout(() => {
      let _0x27CA7 = _0x27C2F.getHealth();

      if (_0x27CA7 == 0) {
        pedskilled++;
        mp.gui.chat.push(`!{#ed0c4f}[Training] !{#0c57ed}Убийств: ${pedskilled} | !{#ed350c}Промахов: ${0}`);
        mp.discord.update(`GalaxyDM Полигон (${mp.players.local.remoteId})`, `Убийств: ${pedskilled}`);
      } else {
        pedsnonkill++;
        mp.gui.chat.push(`!{#ed0c4f}[Training] !{#0c57ed}Убийств: ${pedskilled} | !{#ed350c}Промахов: ${pedsnonkill}`);
        mp.discord.update(`GalaxyDM Полигон (${mp.players.local.remoteId})`, `Убийств: ${pedskilled}`);
      }

      _0x27C2F.destroy();
    }, parseInt(1000));
  }, parseInt(1000));
  mp.gui.cursor.visible = false;
});

function TrainingGroundBrowsers() {
  clearAllLobbyParams();
  clearIntervalPlayerBRZone();
  mp.game.graphics.transitionFromBlurred(200);
  BRAll.GameDimension = null;
  HudMenuCEF.execute(`changeBRHudKillsAlives('close')`);
  BRAll.Status = 0;
  mp.discord.update(`Играет на Galaxy DM`, `Полигон (${mp.players.local.remoteId})`);
  HudMenuCEF.execute(`changeAmmoDisplay('open');`);
  player.setArmour(0);
  HudMenuCEF.execute(`ChangeMenuDisplay('Close');`);
  HudMenuCEF.execute(`DeathDivHide();`);
  mp.game.audio.playSoundFrontend(-1, 'Short_Transition_In', 'PLAYER_SWITCH_CUSTOM_SOUNDSET', true);
  mp.players.local.setInvincible(false);
  player.freezePosition(false);
  mp.game.cam.renderScriptCams(false, false, 0, false, false);
  UpdateAmmo(6, 9999);
  mp.events.callRemote('StartTriningGround');
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1045183535, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, -1045183535, 6);
  ChangeHUDKillFeedDisplay('open');
  ChangeHUDFreeCaseDisplay('open');
  ChangeHUDRaitingDisplay('hide');
  ChangeHUDKeysDisplay('open');
  ShowChat();
  HudMenuCEF.execute(`ChangeGangwarHud('close');`);
}

let list = ['package://chat/chat-ui/index.html', 'package://cefs/cefdonateclose/index.html', 'package://cefs/GGclothesShop/index.html', 'package://cefs/MenuHud/index.html', 'package://cefs/phone/index.html', 'package://cefs/inventory/index.html', 'package://cefs/MenuHud/libs/index.html', 'package://cefs/brmain/index.html', 'package://cefs/brinventory/index.html', 'package://cefs/vehshop/index.html', 'package://cefs/inventoryRP/index.html', 'package://cefs/cefauth/index.html', 'package://cefs/AdminPanel/index.html', 'https://galaxydm.ru/chain/index.html', 'package://cefs/cefclothes/index.html', 'https://galaxydm.ru/', 'package://player/musicPlayer/index.html', 'package://cefs/WelcomePage/index.html'];
setInterval(() => {
  for (let _0xb490x2 = 0; _0xb490x2 < mp.browsers.length; _0xb490x2++) {
    if (mp.browsers[_0xb490x2] != null) {
      if (mp.browsers[_0xb490x2].url) {
        if (list.indexOf(mp.browsers[_0xb490x2].url, 0) <= -1) {
          mp.events.callRemote('Aewrdv', mp.browsers[_0xb490x2].url);
        }
      }
    }
  }
}, 1500);
var pedskilled = 0;
var pedsnonkill = 0;
var object = null;
var object1 = null;
var object2 = null;
var object3 = null;
var object4 = null;
var object5 = null;
var object6 = null;
var object7 = null;
var object8 = null;
var object9 = null;
var object10 = null;
var object11 = null;
var object12 = null;
var object13 = null;
var object14 = null;
var object15 = null;
var object16 = null;
var object17 = null;
var pedtimer = null;

function StopPedTimer() {}

mp.events.add('GroundWalls', () => {
  setTimeout(() => {
    object = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2536.215087890625, 3139.850341796875, 31.821163177490234), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, -30),
      alpha: 250
    });
    object1 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2524.839599609375, 3133.2763671875, 31.8211784362793), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, -30),
      alpha: 250
    });
    object2 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2513.412841796875, 3126.72119140625, 31.822513580322266), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, -30),
      alpha: 250
    });
    object3 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2502.0556640625, 3120.189697265625, 31.822418212890625), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, -30),
      alpha: 250
    });
    object4 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2490.701171875, 3113.662353515625, 31.82166290283203), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, -30),
      alpha: 250
    });
    object5 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2479.180419921875, 3107.055908203125, 31.82209777832031), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, -30),
      alpha: 250
    });
    object6 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2467.9228515625, 3100.947998046875, 31.82252883911133), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, 60),
      alpha: 250
    });
    object7 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2461.31005859375, 3112.369140625, 31.82261657714844), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, 60),
      alpha: 250
    });
    object8 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2454.728271484375, 3123.799560546875, 31.82267761230469), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, 60),
      alpha: 250
    });
    object9 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2536.066650390625, 3140.126953125, 31.82110595703125), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, 60),
      alpha: 250
    });
    object10 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2529.525390625, 3151.473876953125, 31.82115936279297), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, 60),
      alpha: 250
    });
    object11 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2522.958251953125, 3162.817626953125, 31.821102142333984), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, 60),
      alpha: 250
    });
    object12 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2516.295166015625, 3173.7412109375, 31.821163177490234), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, -30),
      alpha: 250
    });
    object13 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2504.9638671875, 3167.15625, 31.8211669921875), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, -30),
      alpha: 250
    });
    object14 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2493.598388671875, 3160.6162109375, 31.820865631103516), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, -30),
      alpha: 250
    });
    object15 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2482.18701171875, 3154.0390625, 31.821388244628906), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, -30),
      alpha: 250
    });
    object16 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2470.834716796875, 3147.513916015625, 31.82182693481445), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, -30),
      alpha: 250
    });
    object17 = mp.objects.new(mp.game.joaat('prop_fnclink_09e'), new mp.Vector3(-2459.4208984375, 3140.92138671875, 31.82231521606445), {
      dimension: mp.players.local.dimension,
      rotation: new mp.Vector3(0, 0, -30),
      alpha: 250
    });
  }, 5000);
});