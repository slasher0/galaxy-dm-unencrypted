var _$_702f = ["show", "position", "width", "fov", "followGameplayCam", "ticksBetweenCardinals", "tickColour", "tickSize", "textSize", "cardinal", "textOffset", "textColour", "tickShow", "intercardinal", "textShow", "x", "height", "color", "0 ", "40 ", "90 ", "140 ", "180 ", "220 ", "270 ", "310 ", "centered", "render", "getRot", "gameplay", "new", "cameras", "z", "getHeading", "local", "players", "y", "r", "g", "b", "a", "drawRect", "graphics", "game", "w", "h", "drawText", "add", "events"];
const compass = {
  cardinal: {},
  intercardinal: {},
  'show': true,
  'width': 0.3,
  'fov': 180,
  'followGameplayCam': true,
  'ticksBetweenCardinals': 9.0
};
compass.position = {
  x: 0.5,
  y: 0.02,
  centered: true
};
compass.tickColour = {
  r: 255,
  g: 255,
  b: 255,
  a: 255
};
compass.tickSize = {
  w: 0.001,
  h: 0.003
};
compass.cardinal.textSize = 0.25;
compass.cardinal.textOffset = 0.015;
compass.cardinal.textColour = [255, 255, 255, 185];
compass.cardinal.tickShow = true;
compass.cardinal.tickSize = {
  w: 0.001,
  h: 0.012
};
compass.cardinal.tickColour = {
  r: 255,
  g: 255,
  b: 255,
  a: 255
};
compass.intercardinal.show = false;
compass.intercardinal.textShow = true;
compass.intercardinal.textSize = 0.01;
compass.intercardinal.textOffset = 0.015;
compass.intercardinal.textColour = [255, 255, 255, 185];
compass.intercardinal.tickShow = true;
compass.intercardinal.tickSize = {
  w: 0.001,
  h: 0.006
};
compass.intercardinal.tickColour = {
  r: 255,
  g: 255,
  b: 255,
  a: 255
};
let bg = {
  'x': 0.125,
  'width': 0.26,
  'height': 0.025
};
bg.color = {
  r: 0,
  g: 0,
  b: 0,
  a: 0
};

function degreesToIntercardinalDirection(_0x1775E) {
  _0x1775E %= 360.0;

  if (_0x1775E >= 0.0 && _0x1775E < 22.5 || _0x1775E >= 337.5) {
    return '0 ';
  }

  if (_0x1775E >= 22.5 && _0x1775E < 67.5) {
    return '40 ';
  }

  if (_0x1775E >= 67.5 && _0x1775E < 112.5) {
    return '90 ';
  }

  if (_0x1775E >= 157.5 && _0x1775E < 202.5) {
    return '140 ';
  }

  if (_0x1775E >= 112.5 && _0x1775E < 157.5) {
    return '180 ';
  }

  if (_0x1775E >= 202.5 && _0x1775E < 247.5 || _0x1775E > -112.5 && _0x1775E <= -65.7) {
    return '220 ';
  }

  if (_0x1775E >= 247.5 && _0x1775E <= 292.5 || _0x1775E > -65.7 && _0x1775E <= -22.5) {
    return '270 ';
  }

  if (_0x1775E >= 292.5 && _0x1775E < 337.5 || _0x1775E > -22.5 && _0x1775E <= 0) {
    return '310 ';
  }
}

if (compass.position.centered) {
  compass.position.x = compass.position.x - compass.width / 2;
}

mp.events.add('render', () => {
  if (compass.show) {
    const _0x138CA = compass.width / compass.fov;

    let _0x138A6 = 0;

    if (compass.followGameplayCam) {
      const _0x13882 = mp.cameras.new('gameplay').getRot(2);

      _0x138A6 = 360.0 - (_0x13882.z + 360.0) % 360.0;
    } else {
      _0x138A6 = 360.0 - mp.players.local.getHeading();
    }

    let _0x138EE = _0x138A6 - compass.fov / 2;

    const _0x13912 = compass.ticksBetweenCardinals - _0x138EE % compass.ticksBetweenCardinals;

    let _0x13936 = compass.position.x + _0x13912 * _0x138CA;

    _0x138EE += _0x13912;
    mp.game.graphics.drawRect(compass.position.x + bg.x, compass.position.y, bg.width, bg.height, bg.color.r, bg.color.g, bg.color.b, bg.color.a);

    while (_0x13936 < compass.position.x + compass.width) {
      if (_0x138EE % 90.0 === 0) {
        if (compass.cardinal.tickShow) {
          mp.game.graphics.drawRect(_0x13936, compass.position.y, compass.cardinal.tickSize.w, compass.cardinal.tickSize.h, compass.cardinal.tickColour.r, compass.cardinal.tickColour.g, compass.cardinal.tickColour.b, compass.cardinal.tickColour.a);
        }

        mp.game.graphics.drawText(degreesToIntercardinalDirection(_0x138EE), [_0x13936, compass.position.y + compass.cardinal.textOffset], {
          font: 2,
          color: compass.cardinal.textColour,
          scale: [0.4, 0.4],
          outline: true
        });
      } else {
        if (_0x138EE % 45.0 === 0 || compass.intercardinal.show) {
          if (compass.intercardinal.tickShow) {
            mp.game.graphics.drawRect(_0x13936, compass.position.y, compass.intercardinal.tickSize.w, compass.intercardinal.tickSize.h, compass.intercardinal.tickColour.r, compass.intercardinal.tickColour.g, compass.intercardinal.tickColour.b, compass.intercardinal.tickColour.a);
          }

          if (compass.intercardinal.textShow) {
            mp.game.graphics.drawText(degreesToIntercardinalDirection(_0x138EE), [_0x13936, compass.position.y + compass.intercardinal.textOffset], {
              font: 2,
              color: compass.intercardinal.textColour,
              scale: [0.3, 0.3],
              outline: true
            });
          }
        } else {
          mp.game.graphics.drawRect(_0x13936, compass.position.y, compass.tickSize.w, compass.tickSize.h, compass.tickColour.r, compass.tickColour.g, compass.tickColour.b, compass.tickColour.a);
        }
      }

      _0x138EE += compass.ticksBetweenCardinals;
      _0x13936 += _0x138CA * compass.ticksBetweenCardinals;
    }
  }
});