let spectateTarget = null;
let spectateTargetPitch = 0;
let lastRecievedPitchDate = null;
mp.events.add('client:getSpectatedView', _0x27B7B => {
  {}
  lastRecievedPitchDate = new Date();
  spectateTargetPitch = _0x27B7B;
});
mp.events.add('client:startBeingSpected', () => {
  createRenderEvent();
});
mp.events.add('client:stopBeingSpected', () => {
  removeRenderEvent();
});
mp.events.add('client:spectatePlayer', player => {
  createRenderEvent();
  mp.players.local.freezePosition(true);
  mp.players.local.setInvincible(true);
  mp.players.local.setVisible(false, false);
  mp.players.local.setCollision(false, false);
  spectateTarget = player;
  mp.events.add('render', renderEventHandlerForSpectator);
});
mp.events.add('client:stopSpectate', () => {
  removeRenderEvent();
  mp.players.local.freezePosition(false);
  mp.players.local.setInvincible(false);
  mp.players.local.setVisible(true, false);
  mp.players.local.setCollision(true, false);
  mp.events.remove('render', renderEventHandlerForSpectator);
});
let stickInterval = null;

function renderEventHandler() {
  if (false && mp.game.player.isFreeAiming()) {
    mp.events.callRemoteUnreliable('server:sendViewToClients', mp.game.invoke('0x3A6867B4845BEDA2'));
  }
}

function renderEventHandlerForSpectator() {
  if (false && spectateTarget) {
    mp.game.invoke('0x8BBACBF51DA047A8', spectateTarget.handle);
  }
}

function createRenderEvent() {
  stickInterval = setInterval(() => {
    renderEventHandler();
  }, 10);
}

function removeRenderEvent() {
  if (stickInterval != null) {
    clearInterval(stickInterval), stickInterval = null;
  }
}