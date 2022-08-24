var res = mp.game.graphics.getScreenActiveResolution(0, 0);
let selObj = null;
let oldPos;
let oldRot;
let mode = 'Move';
let curBtn;
let oldcursorPos = [0, 0];
let xbox;
let ybox;
let zbox;
let switchbox;
let groundbox;
let cancelbox;
let savebox;
mp.events.add('objecteditor1:start', _0x268F7 => {
  mp.gui.cursor.show(true, true);
  selObj = mp.objects.at(_0x268F7);
  selObj.setCollision(false, false);
  oldPos = selObj.position;
  oldRot = selObj.rotation;
});
mp.events.add('render', () => {
  if (selObj) {
    mp.game.graphics.drawLine(selObj.position.x - 1.0, selObj.position.y, selObj.position.z, selObj.position.x + 1.0, selObj.position.y, selObj.position.z, 0, 0, 255, 255);
    mp.game.graphics.drawLine(selObj.position.x, selObj.position.y - 1.0, selObj.position.z, selObj.position.x, selObj.position.y + 1.0, selObj.position.z, 255, 0, 0, 255);
    mp.game.graphics.drawLine(selObj.position.x, selObj.position.y, selObj.position.z - 1.0, selObj.position.x, selObj.position.y, selObj.position.z + 1.0, 0, 255, 0, 255);
    xbox = mp.game.graphics.world3dToScreen2d(selObj.position.x + 1.5, selObj.position.y, selObj.position.z);
    ybox = mp.game.graphics.world3dToScreen2d(selObj.position.x, selObj.position.y + 1.5, selObj.position.z);
    zbox = mp.game.graphics.world3dToScreen2d(selObj.position.x, selObj.position.y, selObj.position.z + 1.5);
    switchbox = mp.game.graphics.world3dToScreen2d(selObj.position.x - 0.8, selObj.position.y - 0.8, selObj.position.z);

    if (switchbox != undefined) {
      groundbox = {
        x: switchbox.x + 0.065,
        y: switchbox.y
      };
      cancelbox = {
        x: switchbox.x + 0.13,
        y: switchbox.y
      };
      savebox = {
        x: switchbox.x + 0.195,
        y: switchbox.y
      };
    } else {
      cancelbox = undefined, savebox = undefined;
    }

    if (xbox != undefined) {
      mp.game.graphics.drawRect(xbox.x, xbox.y, 0.015, 0.026, 0, 0, 255, 255);
      mp.game.graphics.drawText('X', [xbox.x, xbox.y - 0.015], {
        font: 2,
        color: [255, 255, 255, 255],
        scale: [0.5, 0.5],
        outline: false
      });
    }

    if (ybox != undefined) {
      mp.game.graphics.drawRect(ybox.x, ybox.y, 0.015, 0.026, 255, 0, 0, 255);
      mp.game.graphics.drawText('Y', [ybox.x, ybox.y - 0.016], {
        font: 2,
        color: [255, 255, 255, 255],
        scale: [0.5, 0.5],
        outline: false
      });
    }

    if (zbox != undefined) {
      mp.game.graphics.drawRect(zbox.x, zbox.y, 0.015, 0.026, 0, 255, 0, 255);
      mp.game.graphics.drawText('Z', [zbox.x, zbox.y - 0.016], {
        font: 2,
        color: [255, 255, 255, 255],
        scale: [0.5, 0.5],
        outline: false
      });
    }

    if (switchbox != undefined) {
      mp.game.graphics.drawRect(switchbox.x, switchbox.y, 0.06, 0.026, 255, 255, 255, 255);
      mp.game.graphics.drawRect(groundbox.x, groundbox.y, 0.06, 0.026, 255, 255, 255, 255);
      mp.game.graphics.drawRect(cancelbox.x, cancelbox.y, 0.06, 0.026, 255, 255, 255, 255);
      mp.game.graphics.drawRect(savebox.x, savebox.y, 0.06, 0.026, 255, 255, 255, 255);
      mp.game.graphics.drawText('Rotate', [switchbox.x, switchbox.y - 0.016], {
        font: 0,
        color: [0, 0, 0, 255],
        scale: [0.4, 0.4],
        outline: false
      });
      mp.game.graphics.drawText('Ground', [groundbox.x, groundbox.y - 0.016], {
        font: 0,
        color: [0, 0, 0, 255],
        scale: [0.4, 0.4],
        outline: false
      });
      mp.game.graphics.drawText('Cancel', [cancelbox.x, cancelbox.y - 0.016], {
        font: 0,
        color: [0, 0, 0, 255],
        scale: [0.4, 0.4],
        outline: false
      });
      mp.game.graphics.drawText('Save', [savebox.x, savebox.y - 0.016], {
        font: 0,
        color: [0, 0, 0, 255],
        scale: [0.4, 0.4],
        outline: false
      });
    }

    let _0x2631B = mp.gui.cursor.position;
    let _0x26933 = {
      x: _0x2631B[0] - 0,
      y: _0x2631B[1] - 0
    };
    _0x26933.x /= res.x;
    _0x26933.y /= res.y;

    if (curBtn == 'x') {
      let _0x269AB = mp.game.graphics.world3dToScreen2d(selObj.position.x, selObj.position.y, selObj.position.z);

      let _0x269E7;

      {
        _0x269E7 = mp.game.graphics.world3dToScreen2d(selObj.position.x + 1, selObj.position.y, selObj.position.z);
      }

      if (_0x269AB == undefined || _0x269E7 == undefined) {
        return;
      }

      var _0x26A23 = {
        x: _0x269E7.x - _0x269AB.x,
        y: _0x269E7.y - _0x269AB.y
      };

      var _0x2696F = _0x26933.x * _0x26A23.x + _0x26933.y * _0x26A23.y;

      {
        selObj.position = new mp.Vector3(selObj.position.x + _0x2696F * 50, selObj.position.y, selObj.position.z);
      }
    } else {
      if (curBtn == 'y') {
        let _0x269AB = mp.game.graphics.world3dToScreen2d(selObj.position.x, selObj.position.y, selObj.position.z);

        let _0x269E7;

        {
          _0x269E7 = mp.game.graphics.world3dToScreen2d(selObj.position.x, selObj.position.y + 1, selObj.position.z);
        }

        if (_0x269AB == undefined || _0x269E7 == undefined) {
          return;
        }

        var _0x26A23 = {
          x: _0x269E7.x - _0x269AB.x,
          y: _0x269E7.y - _0x269AB.y
        };

        var _0x2696F = _0x26933.x * _0x26A23.x + _0x26933.y * _0x26A23.y;

        {
          selObj.position = new mp.Vector3(selObj.position.x, selObj.position.y + _0x2696F * 50, selObj.position.z);
        }
      } else {
        if (curBtn == 'z') {
          let _0x269AB = mp.game.graphics.world3dToScreen2d(selObj.position.x, selObj.position.y, selObj.position.z);

          let _0x269E7 = mp.game.graphics.world3dToScreen2d(selObj.position.x, selObj.position.y, selObj.position.z + 1);

          if (_0x269AB == undefined || _0x269E7 == undefined) {
            return;
          }

          var _0x26A23 = {
            x: _0x269E7.x - _0x269AB.x,
            y: _0x269E7.y - _0x269AB.y
          };

          var _0x2696F = _0x26933.x * _0x26A23.x + _0x26933.y * _0x26A23.y;

          {
            selObj.position = new mp.Vector3(selObj.position.x, selObj.position.y, selObj.position.z + _0x2696F * 50);
          }
        }
      }
    }

    oldcursorPos = _0x2631B;
  }
});
mp.events.add('click', (_0x25AE7, _0x25B23, _0x26DE3, _0x26CF3, _0x26D6B, _0x26DA7, _0x26E1F, _0x26CB7) => {
  if (!selObj) {
    return;
  }

  let _0x26D2F = {
    x: _0x25AE7 / res.x,
    y: _0x25B23 / res.y
  };

  if (_0x26DE3 == 'up') {
    curBtn = '';
  } else {
    if (_0x26DE3 == 'down') {
      if (xbox != undefined && _0x26D2F.x >= xbox.x - 0.01 && _0x26D2F.x <= xbox.x + 0.009 && _0x26D2F.y >= xbox.y - 0.015 && _0x26D2F.y <= xbox.y + 0.009) {
        curBtn = 'x';
      } else {
        if (ybox != undefined && _0x26D2F.x >= ybox.x - 0.01 && _0x26D2F.x <= ybox.x + 0.009 && _0x26D2F.y >= ybox.y - 0.015 && _0x26D2F.y <= ybox.y + 0.009) {
          curBtn = 'y';
        } else {
          if (zbox != undefined && _0x26D2F.x >= zbox.x - 0.01 && _0x26D2F.x <= zbox.x + 0.009 && _0x26D2F.y >= zbox.y - 0.015 && _0x26D2F.y <= zbox.y + 0.009) {
            curBtn = 'z';
          } else {
            if (switchbox != undefined && _0x26D2F.x >= switchbox.x - 0.03 && _0x26D2F.x <= switchbox.x + 0.03 && _0x26D2F.y >= switchbox.y - 0.015 && _0x26D2F.y <= switchbox.y + 0.009) {
              switchMode();
            } else {
              if (groundbox != undefined && _0x26D2F.x >= groundbox.x - 0.03 && _0x26D2F.x <= groundbox.x + 0.03 && _0x26D2F.y >= groundbox.y - 0.015 && _0x26D2F.y <= groundbox.y + 0.009) {
                groundObject();
              } else {
                if (undefined != undefined && _0x26D2F.x >= cancelbox.x - 0.03 && _0x26D2F.x <= cancelbox.x + 0.03 && _0x26D2F.y >= cancelbox.y - 0.015 && _0x26D2F.y <= cancelbox.y + 0.009) {
                  cancel();
                } else {
                  if (undefined != undefined && _0x26D2F.x >= savebox.x - 0.03 && _0x26D2F.x <= savebox.x + 0.03 && _0x26D2F.y >= savebox.y - 0.015 && _0x26D2F.y <= savebox.y + 0.009) {
                    saveChanges();
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

function switchMode() {
  mode = mode == 'Move' ? 'Rotation' : 'Move';
}

function groundObject() {
  selObj.placeOnGroundProperly();

  let _0x2631B = selObj.getCoords(true);

  let _0x270EF = selObj.getRotation(2);

  selObj.position = new mp.Vector3(_0x2631B.x, _0x2631B.y, _0x2631B.z);
  selObj.rotation = new mp.Vector3(_0x270EF.x, _0x270EF.y, _0x270EF.z);
}

function cancel() {
  selObj.position = oldPos;
  selObj.rotation = oldRot;
  selObj.setCollision(true, true);
  selObj = null;
  mp.gui.cursor.show(false, false);
}

function saveChanges() {
  let _0x2631B = selObj.getCoords(true);

  let _0x270EF = selObj.getRotation(2);

  mp.events.call('objecteditor:finish', selObj.id, JSON.stringify(_0x2631B), JSON.stringify(_0x270EF));
  selObj.setCollision(true, true);
  selObj = null;
  mp.gui.cursor.show(false, false);
}

mp.events.add('objecteditor:finish', (_0x268F7, _0x2631B, _0x270EF) => {
  mp.events.callRemote('objInfo', _0x268F7, _0x2631B, _0x270EF);
});