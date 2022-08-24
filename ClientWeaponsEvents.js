mp.events.add('givepar', () => {
  mp.game.invoke('0xD0D7B1E680ED4A1A', mp.players.local.handle, -72657034, true);
  mp.game.invoke('0xD0D7B1E680ED4A1A', mp.players.local.handle, 4222310262, true);
});
mp.events.add('revchange', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1045183535, true);
});
mp.events.add('revammo', () => {
  UpdateAmmo(6, 9999);
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1045183535, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, -1045183535, 6);
});
mp.events.add('pdwammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, 171789620, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, 171789620, 30);
});
mp.events.add('carammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -2084633992, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, -2084633992, 30);
});
mp.events.add('setzeroweap', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1569615261, true);
});
mp.events.add('unarmedhand', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1569615261, true);
});
mp.events.add('assmgammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -270015777, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, -270015777, 30);
});
mp.events.add('specialammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1063057011, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, -1063057011, 30);
});
mp.events.add('navyammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1853920116, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, -1853920116, 30);
});
mp.events.add('combatmgammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, 2144741730, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, 2144741730, 100);
});
mp.events.add('HeavyShotgungammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, 984333226, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, 984333226, 6);
});
mp.events.add('assaultrifleammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1074790547, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, -1074790547, 30);
});
mp.events.add('Marksmanammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -598887786, true);
});
mp.events.add('smgmkammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, 2024373456, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, 2024373456, 30);
});
mp.events.add('Bullpuprifleammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, 2132975508, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, 2132975508, 30);
});
mp.events.add('MiniSMGammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1121678507, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, -1121678507, 20);
});
mp.events.add('Gusenbergammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, 1627465347, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, 1627465347, 30);
});
mp.events.add('MGammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1660422300, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, -1660422300, 54);
});
mp.events.add('advancedrifleammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1357824103, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, -1357824103, 30);
});
mp.events.add('bitaammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1786099057, true);
});
mp.events.add('smgammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, 736523883, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, 736523883, 30);
});
mp.events.add('specialcarammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1063057011, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, -1063057011, 30);
});
mp.events.add('assaultrifleammo', () => {
  mp.game.invoke('0xADF692B254977C0C', mp.players.local.handle, -1074790547, true);
  mp.game.invoke('0xDCD2A934D65CB497', mp.players.local.handle, -1074790547, 30);
});

async function requestNamedPtfxAssetAsync(_0x28BE3) {
  mp.game.streaming.requestNamedPtfxAsset(_0x28BE3);

  while (!mp.game.streaming.hasNamedPtfxAssetLoaded(_0x28BE3)) {
    await mp.game.waitAsync();
  }
}

Object.defineProperty(mp.game.graphics, 'bloodVfxMode', {
  get: function () {
    return this._vfxMode || 0;
  },
  set: async function (_0x26C3F) {
    switch (_0x26C3F) {
      case 1:
        await requestNamedPtfxAssetAsync('scr_rcbarry1');
        mp.game.graphics.enableClownBloodVfx(false);
        mp.game.graphics.enableAlienBloodVfx(true);
        break;

      case 2:
        await requestNamedPtfxAssetAsync('scr_rcbarry2');
        mp.game.graphics.enableAlienBloodVfx(false);
        mp.game.graphics.enableClownBloodVfx(true);
        break;

      default:
        _0x26C3F = 0;
        -mp.game.graphics.enableAlienBloodVfx(false);
        mp.game.graphics.enableClownBloodVfx(false);
        break;
    }

    this._vfxMode = 0;
  }
});