global.isMuted = 0;
mp.events.add('ChangeisMuted', _0x25637 => {
  isMuted = parseInt(_0x25637);
});
mp.keys.bind(78, true, function () {
  if (ChatActive) {
    return;
  }

  if (mp.players.local.dimension == 0) {
    return;
  }

  if (isMuted != false) {
    return;
  }

  mp.voiceChat.muted = false;
  mp.players.local.playFacialAnim('mic_chatter', 'mp_facial');
  mp.events.callRemote('setvoiceon');

  if (inGangwar == true) {
    HudMenuCEF.execute(`ChangeMicrophone(1);`);
  }
});
mp.keys.bind(78, false, function () {
  if (ChatActive) {
    return;
  }

  if (mp.players.local.dimension == 0) {
    return;
  }

  mp.voiceChat.muted = true;
  mp.players.local.playFacialAnim('mood_normal_1', 'facials@gen_male@variations@normal');
  mp.events.callRemote('setvoiceoff');

  if (inGangwar == true) {
    HudMenuCEF.execute(`ChangeMicrophone(0);`);
  }
});
let g_voiceMgr = {
  listeners: [],
  add: function (player) {
    this.listeners.push(player);
    mp.events.callRemote('add_voice_listener', player);
    player.isListening = true;
    player.isWalkieTalking = 0;
    player.voiceVolume = 0;
    {
      player.voice3d = true;
    }
  },
  remove: function (player, _0x2811B) {
    let _0x280DF = this.listeners.indexOf(player);

    if (_0x280DF !== -1) {
      this.listeners.splice(_0x280DF, 1);
    }

    player.isListening = false;

    if (_0x2811B) {
      mp.events.callRemote('remove_voice_listener', player);
    }
  }
};
mp.events.add('playerQuit', player => {
  if (player.isListening) {
    g_voiceMgr.remove(player, false);
  }
});
setInterval(() => {
  let localPlayer = mp.players.local;
  let _0x28193 = localPlayer.position;
  mp.players.forEachInStreamRange(_0x28283 => {
    if (_0x28283 != localPlayer) {
      if (!_0x28283.isListening) {
        let _0x282BF = _0x28283.getVariable('walkieWave');

        let _0x2820B = _0x28283.getVariable('FamilyID');

        if (_0x282BF === localPlayer.getVariable('walkieWave') && _0x2820B === localPlayer.getVariable('FamilyID') && localPlayer.getVariable('FamilyID') != null && localPlayer.getVariable('FamilyID') != undefined && localPlayer.getVariable('walkieWave') != null && localPlayer.getVariable('walkieWave') != undefined) {
          g_voiceMgr.add(_0x28283);
          return;
        }

        if (_0x28283.handle === 0) {
          return;
        }

        const _0x28247 = _0x28283.position;

        let _0x281CF = mp.game.system.vdist(_0x28247.x, _0x28247.y, _0x28247.z, _0x28193.x, _0x28193.y, _0x28193.z);

        if (_0x281CF <= 30.0) {
          g_voiceMgr.add(_0x28283);
        }
      }
    }
  });
  g_voiceMgr.listeners.forEach(_0x28283 => {
    if (_0x28283.handle !== 0) {
      const _0x28247 = _0x28283.position;

      let _0x281CF = mp.game.system.vdist(_0x28247.x, _0x28247.y, _0x28247.z, _0x28193.x, _0x28193.y, _0x28193.z);

      if (_0x281CF > 60) {
        let _0x282BF = _0x28283.getVariable('walkieWave');

        let _0x2820B = _0x28283.getVariable('FamilyID');

        if (_0x282BF === mp.players.local.getVariable('walkieWave') && _0x2820B === localPlayer.getVariable('FamilyID') && localPlayer.getVariable('FamilyID') != null && localPlayer.getVariable('FamilyID') != undefined && localPlayer.getVariable('walkieWave') != null) {
          return;
        }

        g_voiceMgr.remove(_0x28283, true);
      } else {
        if (_0x281CF > 30.0) {
          _0x28283.voiceVolume = 0;
        } else {
          if (_0x28283.isWalkieTalking) {
            _0x28283.voiceVolume = 1;
            return;
          }

          _0x28283.voiceVolume = getVolume(_0x281CF);
        }
      }
    } else {
      try {
        let _0x282BF = _0x28283.getVariable('walkieWave');

        let _0x2820B = _0x28283.getVariable('FamilyID');

        if (_0x282BF === localPlayer.getVariable('walkieWave') && _0x2820B === localPlayer.getVariable('FamilyID') && localPlayer.getVariable('FamilyID') != null && localPlayer.getVariable('FamilyID') != undefined && localPlayer.getVariable('walkieWave') != null) {
          if (!_0x28283.isWalkieTalking) {
            _0x28283.voiceVolume = 0;
          }

          return;
        }

        g_voiceMgr.remove(_0x28283, true);
      } catch (e) {
        g_voiceMgr.remove(_0x28283, true);
      }
    }
  });
}, 500);
mp.events.add('playerStartTalking', player => {
  if (PlayerGameSettings.VoiceChatEnabled != true) {
    player.voiceVolume = 0;
  }
});

function getVolume(_0x281CF) {
  if (PlayerGameSettings.VoiceChatEnabled == true) {
    let _0x287AB = 1 - _0x281CF / 30.0;

    return _0x287AB;
  } else {
    return 0;
  }
}

var radioPress = new Date().getTime();
mp.keys.bind(0x58, true, function () {
  if (mp.players.local.dimension == 0) {
    return;
  }

  if (ChatActive) {
    return;
  }

  if (inGangwar != true) {
    return;
  }

  if (mp.players.local.getVariable('walkieWave') == null || mp.players.local.getVariable('walkieWave') == undefined) {
    return;
  }

  if (mp.players.local.getVariable('FamilyID') == null || mp.players.local.getVariable('FamilyID') == undefined) {
    return;
  }

  if (new Date().getTime() - radioPress < 500) {
    return HudMenuCEF.execute(`pushNotify('error', 'top-mid', 'Не флуди', 300);`);
  }

  radioPress = new Date().getTime();
  mp.voiceChat.muted = false;
  HudMenuCEF.execute(`playRadio();`);
  mp.events.callRemote('setRadioOn', 1);

  if (inGangwar == true) {
    HudMenuCEF.execute(`ChangeMicrophone(1);`);
  }
});
mp.keys.bind(0x58, false, function () {
  if (mp.players.local.dimension == 0) {
    return;
  }

  if (ChatActive) {
    return;
  }

  if (inGangwar != true) {
    return;
  }

  if (mp.players.local.getVariable('walkieWave') == null || mp.players.local.getVariable('walkieWave') == undefined) {
    return;
  }

  if (mp.players.local.getVariable('FamilyID') == null || mp.players.local.getVariable('FamilyID') == undefined) {
    return;
  }

  mp.voiceChat.muted = true;

  if (inGangwar == true) {
    HudMenuCEF.execute(`ChangeMicrophone(0);`);
  }

  mp.events.callRemote('setRadioOn', 0);
});
mp.events.add('setRadioActive', (_0x26A9B, _0x255FB) => {
  const _0x26483 = mp.players.atRemoteId(parseInt(_0x26A9B));

  if (mp.players.local.getVariable('walkieWave') == null || mp.players.local.getVariable('walkieWave') == undefined) {
    return startPlayRadio(_0x26483, parseInt(_0x255FB));
  }

  if (mp.players.local.getVariable('FamilyID') == null || mp.players.local.getVariable('FamilyID') == undefined) {
    return startPlayRadio(_0x26483, parseInt(_0x255FB));
  }

  startPlayRadio(_0x26483, parseInt(_0x255FB));

  if (_0x255FB == 1) {
    HudMenuCEF.execute(`MainMenuBlock.addActivePlayer('[#${_0x26483.getVariable('StaticID')}] ${_0x26483.name} (${_0x26483.remoteId})','${_0x26483.getVariable('StaticID')}')`);
  } else {
    HudMenuCEF.execute(`MainMenuBlock.removeActivePlayer('${_0x26483.getVariable('StaticID')}')`);
  }

  let _0x28337 = mp.players.local;

  if (_0x28337.remoteId == _0x26483.remoteId) {
    return;
  }

  if (parseInt(_0x255FB) == 1) {
    let _0x280DF = g_voiceMgr.listeners.indexOf(_0x26483);

    if (_0x280DF == -1) {
      g_voiceMgr.add(_0x26483);
    }
  }

  let _0x2820B = _0x26483.getVariable('FamilyID');

  if (_0x26483 && mp.players.exists(_0x26483) && _0x26483.getVariable('walkieWave') == _0x28337.getVariable('walkieWave') && _0x2820B === _0x28337.getVariable('FamilyID') && _0x28337.getVariable('FamilyID') != null && _0x28337.getVariable('FamilyID') != undefined) {
    _0x26483.isWalkieTalking = parseInt(_0x255FB);

    if (parseInt(_0x255FB) == 1) {
      _0x26483.voiceVolume = 1;
    } else {
      _0x26483.voiceVolume = 0;
    }
  }
});

function startPlayRadio(_0x28373, _0x255FB) {
  switch (_0x255FB) {
    case 1:
      mp.game.streaming.requestAnimDict('random@arrests');

      _0x28373.taskPlayAnim('random@arrests', 'generic_radio_chatter', 4.0, 1.0, -1, 49, 1.0, false, false, false);

      break;

    default:
      _0x28373.stopAnimTask('random@arrests', 'generic_radio_chatter', 3.0);

      break;
  }
}

mp.events.addDataHandler('voiceon', function (_0x28373, _0x26C3F, _0x283AF) {
  if (_0x28373.type === 'player') {
    switch (parseInt(_0x26C3F)) {
      case 1:
        _0x28373.playFacialAnim('mic_chatter', 'mp_facial');

        break;

      default:
        _0x28373.playFacialAnim('mood_normal_1', 'facials@gen_male@variations@normal');

        break;
    }
  }
});

function loadAnimDictRadio(_0x26357, _0x2889B) {
  if (mp.game.streaming.hasAnimDictLoaded(_0x26357)) {
    return void _0x2889B();
  }

  mp.game.streaming.requestAnimDict(_0x26357);

  let _0x288D7 = setInterval(function () {
    mp.game.streaming.hasAnimDictLoaded(_0x26357) && (clearInterval(_0x288D7), _0x2889B());
  }, 100);
}