mp.events.add('moveSkyCamera', moveFromToAir);

function moveFromToAir(player, _0x289C7, _0x28A3F, _0x28A03) {
  switch (_0x289C7) {
    case 'up':
      if (_0x28A03 == false) {
        mp.gui.chat.show(_0x28A03);
      }

      ;
      mp.game.invoke('0xAAB3200ED59016BC', player.handle, 0, parseInt(_0x28A3F));
      break;

    case 'down':
      {
        checkCamInAir();
      }
      ;
      mp.game.invoke('0xD8295AF639FD9CB8', player.handle, 0, 0);
      break;

    default:
      break;
  }
}

function checkCamInAir() {
  if (mp.game.invoke('0xD9D2CFFF49FAB35F')) {
    setTimeout(() => {
      checkCamInAir();
    }, 400);
  } else {
    mp.gui.chat.show(true);
    mp.game.cam.renderScriptCams(false, false, 0, false, false);
  }
}

if (mp.game.invoke('0xD9D2CFFF49FAB35F')) {
  mp.game.invoke('0xD8295AF639FD9CB8', player.handle);
}