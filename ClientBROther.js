const localplayer = mp.players.local;
var BRVehEngineKeyPress;
mp.keys.bind(0x42, true, function () {
  if (mp.gui.cursor.visible || ChatActive) {
    return;
  }

  if (new Date().getTime() - BRVehEngineKeyPress < 500) {
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

  let player = mp.players.local;

  if (!player.vehicle) {
    return;
  }

  BRVehEngineKeyPress = new Date().getTime();

  if (player.vehicle.getPedInSeat(-1) === player.handle) {
    mp.events.callRemote('SetVehEngine', player.vehicle.remoteId);
  }
});