global.HLisCarrying = false;
const controlsToDisable = [12, 13, 14, 15, 16, 17, 22, 23, 24, 25, 37, 44, 45, 47, 55, 58, 69, 70, 92, 114, 140, 141, 142, 143, 257, 263, 264, 331];
const controlsLength = controlsToDisable.length;
mp.events.add('HumanLabsPickupBox', () => {
  mp.attachmentMngr.addLocal('CardBox');
  mp.events.callRemote('LoadPickBoxAnimation');
  HLisCarrying = true;
});
mp.events.add('HumanLabsBoxUnLoad', () => {
  mp.attachmentMngr.removeLocal('CardBox');
  HLisCarrying = false;
  mp.events.callRemote('LoadPickBoxAnimationStop');
});
mp.events.add('HumanLabsBoxUnAttach', () => {
  mp.attachmentMngr.removeLocal('CardBox');
  HLisCarrying = false;
  mp.events.callRemote('LoadPickBoxAnimationStop');
});
setInterval(() => {
  if (HLisCarrying) {
    for (let _0x25367 = 0; _0x25367 < controlsLength; _0x25367++) {
      mp.game.controls.disableControlAction(2, controlsToDisable[_0x25367], true);
    }

    mp.game.controls.disableControlAction(0, 22, true);
    mp.game.controls.disableControlAction(0, 21, true);
  }
}, 0);
mp.events.add('CEFHumanLabsPush', () => {
  let _0x253A3 = mp.players.local.getVariable('FractionID');

  menuBrowser.execute(`PushHumanLabs(${_0x253A3});`);
  mp.game.ui.setNewWaypoint(3627.321044921875, 3753.27880859375);
});