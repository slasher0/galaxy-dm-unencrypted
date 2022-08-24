var _$_4ba4 = ["enabled", "nametags", "local", "players", "streammode", "targetActive", "render", "dimension", "DisplayNameTags", "Status", "graphics", "game", "getScreenResolution", "getHealth", "getArmour", "infreecam", "getVariable", "infly", "HideLogins", "redname", "name", "remoteId", "StaticID", "drawText", "voiceon", "Mpleaderboard", "hasStreamedTextureDictLoaded", "requestStreamedTextureDict", "leaderboard_audio_3", "drawSprite", "isMuted", "leaderboard_audio_mute", "isDead", "commonmenutu", "deathmatch", "handle", "isFreeAimingAtEntity", "player", "drawRect", "forEach", "add", "events"];
const maxDistance = 400;
const width = 0.03;
const height = 0.0041;
const border = 0.001;
const color = [255, 255, 255, 255];
mp.nametags.enabled = false;
var player = mp.players.local;
global.streammode = 0;
global.targetActive = false;
mp.events.add('render', _0x26627 => {
  if (player.dimension != 0) {
    if (PlayerGameSettings.DisplayNameTags == true) {
      if (BRAll.Status != 3) {
        const _0x265EB = mp.game.graphics;

        const _0x26663 = _0x265EB.getScreenResolution(0, 0);

        _0x26627.forEach(_0x26717 => {
          let [player, _0x25AE7, _0x25B23, _0x266DB] = _0x26717;

          if (_0x266DB <= maxDistance) {
            let _0x26753 = _0x266DB / maxDistance;

            if (_0x26753 < 0.6) {
              _0x26753 = 0.6;
            }

            var _0x25853 = player.getHealth();

            _0x25853 = _0x25853 <= 100 ? _0x25853 / 100 : (_0x25853 - 100) / 100;

            var _0x2669F = player.getArmour();

            _0x2669F = _0x2669F <= 100 ? _0x2669F / 100 : (_0x2669F - 100) / 100;

            if (!player.getVariable('infreecam') == 1) {
              if (!player.getVariable('infly') == 1) {
                if (PlayerGameSettings.HideLogins == false) {
                  if (!player.getVariable('redname')) {
                    _0x265EB.drawText(`${player.name} (${player.remoteId})\n[#${player.getVariable('StaticID')}]`, [_0x25AE7, _0x25B23 - 0.045], {
                      font: 0,
                      color: [255, 255, 255, 235],
                      scale: [0.3, 0.3],
                      outline: true
                    });
                  } else {
                    _0x265EB.drawText(`[ADMIN] ${player.name} (${player.remoteId})\n[#${player.getVariable('StaticID')}]`, [_0x25AE7, _0x25B23 - 0.045], {
                      font: 0,
                      color: [255, 0, 0, 235],
                      scale: [0.3, 0.3],
                      outline: true
                    });
                  }
                } else {
                  if (!player.getVariable('redname')) {
                    _0x265EB.drawText(`(${player.remoteId})\n[#${player.getVariable('StaticID')}]`, [_0x25AE7, _0x25B23 - 0.045], {
                      font: 0,
                      color: [255, 255, 255, 235],
                      scale: [0.3, 0.3],
                      outline: true
                    });
                  } else {
                    _0x265EB.drawText(`[ADMIN] (${player.remoteId})\n[#${player.getVariable('StaticID')}]`, [_0x25AE7, _0x25B23 - 0.045], {
                      font: 0,
                      color: [255, 0, 0, 235],
                      scale: [0.3, 0.3],
                      outline: true
                    });
                  }
                }

                if (player.isVoiceActive) {
                  if (!mp.game.graphics.hasStreamedTextureDictLoaded('Mpleaderboard')) {
                    mp.game.graphics.requestStreamedTextureDict('Mpleaderboard', true);
                  }

                  if (mp.game.graphics.hasStreamedTextureDictLoaded('Mpleaderboard') && player.isVoiceActive) {
                    _0x265EB.drawSprite('Mpleaderboard', 'leaderboard_audio_3', _0x25AE7, _0x25B23 + 0.005, 0.022, 0.027, 0, 255, 0, 123, 255);
                  }
                }

                ;

                if (player.getVariable('isMuted') == 1) {
                  if (!mp.game.graphics.hasStreamedTextureDictLoaded('Mpleaderboard')) {
                    mp.game.graphics.requestStreamedTextureDict('Mpleaderboard', true);
                  }

                  if (mp.game.graphics.hasStreamedTextureDictLoaded('Mpleaderboard') && player.getVariable('isMuted') == 1) {
                    _0x265EB.drawSprite('Mpleaderboard', 'leaderboard_audio_mute', _0x25AE7, _0x25B23 + 0.005, 0.022, 0.022, 0, 255, 0, 0, 255);
                  }
                }

                if (player.isDead() == true) {
                  if (!mp.game.graphics.hasStreamedTextureDictLoaded('commonmenutu')) {
                    mp.game.graphics.requestStreamedTextureDict('commonmenutu', true);
                  }

                  if (mp.game.graphics.hasStreamedTextureDictLoaded('commonmenutu') && player.isDead() == true) {
                    _0x265EB.drawSprite('commonmenutu', 'deathmatch', _0x25AE7, _0x25B23 - 0.045, 0.025, 0.025, 0, 255, 0, 0, 255);
                  }
                }
              }
            }

            if (mp.game.player.isFreeAimingAtEntity(player.handle)) {
              if (targetActive != true) {
                targetActive = true;
              }

              let _0x267CB = _0x25B23 + 0.042;

              if (_0x2669F > 0) {
                let _0x2678F = _0x25AE7 - width / 2 - border / 2;

                _0x265EB.drawRect(_0x25AE7, _0x267CB, width + border * 2, 0.0085, 0, 0, 0, 0);

                _0x265EB.drawRect(_0x25AE7, _0x267CB, width, height, 150, 150, 150, 0);

                _0x265EB.drawRect(_0x25AE7 - width / 2 * (1 - _0x25853), _0x267CB, width * _0x25853, height, 255, 255, 255, 200);

                _0x265EB.drawRect(_0x25AE7, _0x267CB, width + border * 2, height + border * 2, 0, 0, 0, 0);

                _0x265EB.drawRect(_0x25AE7, _0x267CB, width, height, 41, 66, 78, 0);

                _0x265EB.drawRect(_0x25AE7 - width / 2 * (1 - _0x2669F), _0x267CB + 0.01, width * _0x2669F, height, 12, 138, 196, 200);
              } else {
                _0x265EB.drawRect(_0x25AE7, _0x267CB, width + border * 2, height + border * 2, 0, 0, 0, 0);

                _0x265EB.drawRect(_0x25AE7, _0x267CB, width, height, 150, 150, 150, 200);

                _0x265EB.drawRect(_0x25AE7 - width / 2 * (1 - _0x25853), _0x267CB, width * _0x25853, height, 255, 255, 255, 200);
              }
            } else {
              if (targetActive != false) {
                targetActive = false;
              }
            }
          }
        });
      }
    }
  }
});