const localplayer = mp.players.local;
mp.events.add('crosshairSave', _0x15706 => {
  mp.events.callRemote('crosshairSave', _0x15706);
});
mp.events.add('setCrosshairInAuth', _0x15706 => {
  setTimeout(() => {
    HudMenuCEF.execute(`initCross('${_0x15706}')`);
  }, 3000);
});
mp.events.add('initCustomCrosshair', (_0x12B26, _0x1572A, _0x1574E) => {
  switch (_0x12B26) {
    case 'Default':
      if (customCrosshair.interval != null) {
        clearInterval(customCrosshair.interval);
        customCrosshair.interval = null;
      }

      break;

    case 'Crosshair':
      if (customCrosshair.interval != null) {
        clearInterval(customCrosshair.interval);
        customCrosshair.interval = null;
      }

      customCrosshair.interval = setInterval(() => {
        renderCustomCrosshair();
      }, 150);
      customCrosshair.defaultColor = _0x1572A;
      customCrosshair.atTargetColor = _0x1574E;
      break;
  }
});
global.customCrosshair = {
  active: false,
  atTarget: false,
  defaultColor: '#000',
  atTargetColor: '#fff',
  interval: null
};

function renderCustomCrosshair() {
  if ((mp.game.controls.isControlPressed(0, 25) || mp.game.controls.isControlPressed(0, 24)) && mp.game.weapon.getWeapontypeGroup(localplayer.weapon) != 2685387236) {
    if (customCrosshair.active != true) {
      customCrosshair.active = true;
      HudMenuCEF.execute(`changeCrossHairDisplay(true)`);
    }

    if (mp.game.player.getEntityIsFreeAimingAt() != undefined && mp.game.player.getEntityIsFreeAimingAt().type === 'player') {
      if (customCrosshair.atTarget != true) {
        customCrosshair.atTarget = true;
        HudMenuCEF.execute(`changeCrosshair('DefaultColor', '${customCrosshair.atTargetColor}')`);
      }
    } else {
      if (customCrosshair.atTarget == true) {
        customCrosshair.atTarget = false;
        HudMenuCEF.execute(`changeCrosshair('DefaultColor', '${customCrosshair.defaultColor}')`);
      }
    }
  } else {
    if (customCrosshair.active == true) {
      customCrosshair.active = false;
      HudMenuCEF.execute(`changeCrossHairDisplay(false)`);
    }
  }
}