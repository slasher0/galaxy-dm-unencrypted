let WalkieKeyPress = new Date().getTime();
const localplayer = mp.players.local;
let WalkieData = {
  Active: false,
  ActiveWave: null,
  PickedWave: 1,
  'ActiveWave': null
};
mp.keys.bind(0x28, true, function () {
  if (mp.game.ui.isPauseMenuActive()) {
    return;
  }

  if (ChatActive) {
    return;
  }

  if (localplayer.getVariable('FamilyID') == null || localplayer.getVariable('FamilyID') == undefined) {
    return;
  }

  if (mp.players.local.dimension != 8 && inGangwar != true && true) {
    return;
  }

  if (new Date().getTime() - WalkieKeyPress < 1000) {
    return;
  }

  WalkieKeyPress = new Date().getTime();
  {
    HudMenuCEF.execute(`document.getElementById('WaveActivePlayers').innerText = '${mp.players.toArray().filter(_0x172BA => {
      return _0x172BA.getVariable('walkieWave') == parseInt(WalkieData.PickedWave);
    }).length}'`);
    HudMenuCEF.execute(`changeWalkieDisplay('open');`);
    mp.gui.cursor.visible = true;
  }
});
mp.events.add('WalkieEnterWave', _0x172DE => {
  if (WalkieData.ActiveWave == parseInt(_0x172DE)) {
    return HudMenuCEF.execute(`pushNotify('error', 'top-mid', 'Вы уже подключены к этой волне.', 2000);`);
  }

  WalkieData.ActiveWave = parseInt(_0x172DE);
  mp.events.callRemote('Server:WalkieEnterWave', parseInt(_0x172DE));
});
mp.events.add('updateWalkieWaveCount', () => {
  if (WalkieData.ActiveWave == null) {
    return;
  }

  HudMenuCEF.execute(`changeWalkieConnect('connect','${WalkieData.ActiveWave}')`);
  HudMenuCEF.execute(`document.getElementById('WaveActivePlayers').innerText = '${mp.players.toArray().filter(_0x172BA => {
    return _0x172BA.getVariable('walkieWave') == parseInt(WalkieData.ActiveWave);
  }).length}'`);
});
mp.events.add('WalkieExitWave', () => {
  if (WalkieData.ActiveWave == null) {
    return HudMenuCEF.execute(`pushNotify('error', 'top-mid', 'Вы не подключены к волне.', 2000);`);
  }

  HudMenuCEF.execute(`changeWalkieConnect('disconnect','1')`);
  mp.events.callRemote('Server:WalkieExitWave', parseInt(WalkieData.ActiveWave));
});
mp.events.add('WalkiechangePickedWave', _0x172DE => {
  WalkieData.PickedWave = parseInt(_0x172DE);
  HudMenuCEF.execute(`document.getElementById('WaveActivePlayers').innerText = '${mp.players.toArray().filter(_0x172BA => {
    return _0x172BA.getVariable('walkieWave') == parseInt(WalkieData.PickedWave);
  }).length}'`);
});