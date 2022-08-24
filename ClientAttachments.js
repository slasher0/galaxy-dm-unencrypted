var _$_50c9 = ["attachmentMngr", "hasOwnProperty", "attachments", "__attachmentObjects", "model", "position", "dimension", "local", "players", "new", "objects", "handle", "boneName", "string", "getBoneIndexByName", "getBoneIndex", "x", "offset", "y", "z", "rotation", "attachTo", "toString", "notify", "graphics", "game", "exists", "destroy", "__attachments", "addFor", "removeFor", "joaat", "isModelInCdimage", "streaming", "Static Attachments Error: ~r~Duplicate Entry", "indexOf", "staticAttachments.Add", "callRemote", "events", "push", "chat", "gui", "staticAttachments.Remove", "assign", "entityStreamIn", "initFor", "add", "entityStreamOut", "shutdownFor", "attachmentsData", "length", "map", "|", "split", "addDataHandler", "getVariable", "forEach", "nativeui", "Menu", "UIMenuItem", "UIMenuListItem", "UIMenuCheckboxItem", "UIMenuSliderItem", "BadgeStyle", "Point", "ItemsCollection", "Color", "ListItem", "mining", "prop_tool_jackham", "Vector3", "register", "drinking_1", "prop_ld_can_01", "drinking_2", "prop_ecola_can", "drinking_3", "prop_ld_flow_bottle", "char_creator_1", "prop_beggers_sign_04", "MedicPack", "prop_ld_health_pack", "Alko", "prop_tequila_bottle", "Bandage", "prop_gaffer_arm_bind", "CardBox", "prop_cardbordbox_02a", "Sniper", "carkey", "mobilephone", "p_cs_cam_phone", "HandCuffs", "p_cs_cuffs_02_s", "graffitiSpray", "prop_spraygun_01", "MaterialBox", "prop_box_ammo03a", "GrabItemHouse1", "ex_prop_monitor_01_ex", "GrabItemHouse2", "prop_toilet_01", "GrabItemHouse3", "hei_prop_drug_statue_box_big", "GrabItemHouse4", "hei_prop_hei_skid_chair", "cuffson", "addLocal", "Pistol", "VintagePistol", "APPistol", "CombatPistol", "Revolver", "SNSPistol", "HeavyPistol", "Pistol50", "CombatPDW", "MicroSMG", "SMG", "MiniSMG", "MachinePistol", "AssaultSMG", "PumpShotgun", "HeavyShotgun", "AssaultShotgun", "BullpupShotgun", "CarbineRifle", "AssaultRifle", "SpecialCarbine", "MarksmanRifle", "HeavySniper", "getAttachments", "values", "id", "Checked", "MenuItems", "Attachments", "", "AddItem", "Visible", "removeLocal", "on", "CheckboxChange", "SnipeWithMe"];
mp.attachmentMngr = {
  attachments: {},
  addFor: function (_0x12C22, _0x12E1A) {
    if (this.attachments.hasOwnProperty(_0x12E1A)) {
      if (!_0x12C22.__attachmentObjects) {
        _0x12C22.__attachmentObjects = {};
      }

      if (!_0x12C22.__attachmentObjects.hasOwnProperty(_0x12E1A)) {
        let _0x1371A = this.attachments[_0x12E1A];

        let _0x1373E = mp.objects.new(_0x1371A.model, _0x12C22.position, {
          dimension: mp.players.local.dimension
        });

        _0x1373E.attachTo(_0x12C22.handle, typeof _0x1371A.boneName === 'string' ? _0x12C22.getBoneIndexByName(_0x1371A.boneName) : _0x12C22.getBoneIndex(_0x1371A.boneName), _0x1371A.offset.x, _0x1371A.offset.y, _0x1371A.offset.z, _0x1371A.rotation.x, _0x1371A.rotation.y, _0x1371A.rotation.z, false, false, false, false, 2, true);

        _0x12C22.__attachmentObjects[_0x12E1A] = _0x1373E;
      }
    } else {
      mp.game.graphics.notify(`Static Attachments Error: ~r~Unknown Attachment Used: ~w~0x${_0x12E1A.toString(16)}`);
    }
  },
  removeFor: function (_0x12C22, _0x12E1A) {
    if (_0x12C22.__attachmentObjects.hasOwnProperty(_0x12E1A)) {
      let _0x136AE = _0x12C22.__attachmentObjects[_0x12E1A];
      delete _0x12C22.__attachmentObjects[_0x12E1A];

      if (mp.objects.exists(_0x136AE)) {
        _0x136AE.destroy();
      }
    }
  },
  initFor: function (_0x12C22) {
    for (let _0x137AA of _0x12C22.__attachments) {
      mp.attachmentMngr.addFor(_0x12C22, _0x137AA);
    }
  },
  shutdownFor: function (_0x12C22) {
    for (let _0x137AA in _0x12C22.__attachmentObjects) {
      mp.attachmentMngr.removeFor(_0x12C22, _0x137AA);
    }
  },
  register: function (_0x12E1A, _0x137F2, _0x137CE, _0x13816, _0x1383A) {
    if (typeof _0x12E1A === 'string') {
      _0x12E1A = mp.game.joaat(_0x12E1A);
    }

    if (typeof _0x137F2 === 'string') {
      _0x137F2 = mp.game.joaat(_0x137F2);
    }

    if (!this.attachments.hasOwnProperty(_0x12E1A)) {
      if (mp.game.streaming.isModelInCdimage(_0x137F2)) {
        this.attachments[_0x12E1A] = {
          id: _0x12E1A,
          model: _0x137F2,
          offset: _0x13816,
          rotation: _0x1383A,
          boneName: _0x137CE
        };
      } else {
        mp.game.graphics.notify(`Static Attachments Error: ~r~Invalid Model (0x${_0x137F2.toString(16)})`);
      }
    } else {
      mp.game.graphics.notify('Static Attachments Error: ~r~Duplicate Entry');
    }
  },
  unregister: function (_0x12E1A) {
    if (typeof _0x12E1A === 'string') {
      _0x12E1A = mp.game.joaat(_0x12E1A);
    }

    if (this.attachments.hasOwnProperty(_0x12E1A)) {
      this.attachments[_0x12E1A] = undefined;
    }
  },
  addLocal: function (_0x1385E) {
    try {
      if (typeof _0x1385E === 'string') {
        _0x1385E = mp.game.joaat(_0x1385E);
      }

      let _0x12C22 = mp.players.local;

      if (!_0x12C22.__attachments || _0x12C22.__attachments.indexOf(_0x1385E) === -1) {
        mp.events.callRemote('staticAttachments.Add', _0x1385E.toString(36));
      }
    } catch (e) {
      mp.gui.chat.push(e);
    }
  },
  removeLocal: function (_0x1385E) {
    if (typeof _0x1385E === 'string') {
      _0x1385E = mp.game.joaat(_0x1385E);
    }

    let _0x12C22 = mp.players.local;

    if (_0x12C22.__attachments && _0x12C22.__attachments.indexOf(_0x1385E) !== -1) {
      mp.events.callRemote('staticAttachments.Remove', _0x1385E.toString(36));
    }
  },
  getAttachments: function () {
    return Object.assign({}, this.attachments);
  }
};
mp.events.add('entityStreamIn', _0x12C22 => {
  if (_0x12C22.__attachments) {
    mp.attachmentMngr.initFor(_0x12C22);
  }
});
mp.events.add('entityStreamOut', _0x12C22 => {
  if (_0x12C22.__attachmentObjects) {
    mp.attachmentMngr.shutdownFor(_0x12C22);
  }
});
mp.events.addDataHandler('attachmentsData', (_0x12C22, _0x1395A) => {
  let _0x1397E = _0x1395A.length > 0 ? _0x1395A.split('|').map(_0x139C6 => {
    return parseInt(_0x139C6, 36);
  }) : [];

  if (_0x12C22.handle !== 0) {
    let _0x139A2 = _0x12C22.__attachments;

    if (!_0x139A2) {
      _0x139A2 = [];
      _0x12C22.__attachmentObjects = {};
    }

    for (let _0x137AA of _0x139A2) {
      if (_0x1397E.indexOf(_0x137AA) === -1) {
        mp.attachmentMngr.removeFor(_0x12C22, _0x137AA);
      }
    }

    for (let _0x137AA of _0x1397E) {
      if (_0x139A2.indexOf(_0x137AA) === -1) {
        mp.attachmentMngr.addFor(_0x12C22, _0x137AA);
      }
    }
  }

  _0x12C22.__attachments = _0x1397E;
});

function InitAttachmentsOnJoin() {
  mp.players.forEach(_0x179E6 => {
    let _0x1395A = _0x179E6.getVariable('attachmentsData');

    if (_0x1395A && _0x1395A.length > 0) {
      let _0x17A0A = _0x1395A.split('|').map(_0x139C6 => {
        return parseInt(_0x139C6, 36);
      });

      _0x179E6.__attachments = _0x17A0A;
      _0x179E6.__attachmentObjects = {};
    }
  });
}

InitAttachmentsOnJoin();

const NativeUI = require('nativeui');

const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const UIMenuListItem = NativeUI.UIMenuListItem;
const UIMenuCheckboxItem = NativeUI.UIMenuCheckboxItem;
const UIMenuSliderItem = NativeUI.UIMenuSliderItem;
const BadgeStyle = NativeUI.BadgeStyle;
const Point = NativeUI.Point;
const ItemsCollection = NativeUI.ItemsCollection;
const Color = NativeUI.Color;
const ListItem = NativeUI.ListItem;

function addMisc() {
  mp.attachmentMngr.register('mining', 'prop_tool_jackham', 60309, new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0));
  mp.attachmentMngr.register('drinking_1', 'prop_ld_can_01', 28422, new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0));
  mp.attachmentMngr.register('drinking_2', 'prop_ecola_can', 28422, new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0));
  mp.attachmentMngr.register('drinking_3', 'prop_ld_flow_bottle', 28422, new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0));
  mp.attachmentMngr.register('char_creator_1', 'prop_beggers_sign_04', 28422, new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0));
  mp.attachmentMngr.register('MedicPack', 'prop_ld_health_pack', 36029, new mp.Vector3(0.03, 0.01, 0.12), new mp.Vector3(180, -10, 90));
  mp.attachmentMngr.register('Alko', 'prop_tequila_bottle', 28422, new mp.Vector3(0.013, 0.01, -0.16), new mp.Vector3(5, 0, 0));
  mp.attachmentMngr.register('Bandage', 'prop_gaffer_arm_bind', 36029, new mp.Vector3(-0.04, -0, -0.01), new mp.Vector3(160, 0, 90));
  mp.attachmentMngr.register('CardBox', 'prop_cardbordbox_02a', 28422, new mp.Vector3(0.0, -0.18, -0.18), new mp.Vector3(0, 0, 0));
  mp.attachmentMngr.register('Sniper', -746966080, 24818, new mp.Vector3(-0.1, -0.15, -0.13), new mp.Vector3(0.0, 0.0, 3.5));
  mp.attachmentMngr.register('carkey', -1341933582, 6286, new mp.Vector3(0.1, 0.05, -0.025), new mp.Vector3(0.0, -90.0, -45.0));
  mp.attachmentMngr.register('mobilephone', 'p_cs_cam_phone', 57005, new mp.Vector3(0.1700, 0.0400, -0.0300), new mp.Vector3(125.0000, 77.0000, 31.0000));
  mp.attachmentMngr.register('HandCuffs', 'p_cs_cuffs_02_s', 60309, new mp.Vector3(-0.0300, 0.0600, 0.0300), new mp.Vector3(-111.0000, 60.0000, 133.0000));
  mp.attachmentMngr.register('graffitiSpray', 'prop_spraygun_01', 28422, new mp.Vector3(0.01, -0.11, -0.08), new mp.Vector3(-35, 0, 2));
  mp.attachmentMngr.register('MaterialBox', 'prop_box_ammo03a', 28422, new mp.Vector3(0.0, -0.17, -0.2), new mp.Vector3(45, 0, 0));
  mp.attachmentMngr.register('GrabItemHouse1', 'ex_prop_monitor_01_ex', 28422, new mp.Vector3(0.0900, 0.0200, 0.2500), new mp.Vector3(168.0000, -104.0000, -59.0000));
  mp.attachmentMngr.register('GrabItemHouse2', 'prop_toilet_01', 28422, new mp.Vector3(0.3800, -0.2400, 0.1300), new mp.Vector3(-75.0000, -35.0000, 0.0000));
  mp.attachmentMngr.register('GrabItemHouse3', 'hei_prop_drug_statue_box_big', 28422, new mp.Vector3(0.2100, 0.3600, 0.3400), new mp.Vector3(-77.0000, -29.0000, 11.0000));
  mp.attachmentMngr.register('GrabItemHouse4', 'hei_prop_hei_skid_chair', 28422, new mp.Vector3(0.1700, 0.1400, 0.3100), new mp.Vector3(-170.0000, -103.0000, -54.0000));
}

mp.events.add('cuffson', () => {
  mp.attachmentMngr.addLocal('HandCuffs');
});

function addWeapons() {
  let _0x17422 = [['Pistol', 1467525553, 0], ['VintagePistol', -1124046276, 0], ['APPistol', 905830540, 0], ['CombatPistol', 403140669, 0], ['Revolver', 914615883, 0], ['SNSPistol', 339962010, 0], ['HeavyPistol', 1927398017, 0], ['Pistol50', -178484015, 0], ['CombatPDW', -1393014804, 1], ['MicroSMG', -1056713654, 1], ['SMG', -500057996, 1], ['MiniSMG', -972823051, 1], ['MachinePistol', -331545829, 1], ['AssaultSMG', -473574177, 1], ['PumpShotgun', 689760839, 2], ['HeavyShotgun', -1209868881, 2], ['AssaultShotgun', 1255410010, 2], ['BullpupShotgun', -1598212834, 2], ['CarbineRifle', 1026431720, 3], ['AssaultRifle', 273925117, 3], ['SpecialCarbine', -1745643757, 3], ['MarksmanRifle', -1711248638, 3], ['HeavySniper', -746966080, 3]];

  let _0x13816 = new mp.Vector3(0.0, 0.0, 0.0);

  let _0x1383A = new mp.Vector3(0.0, 0.0, 0.0);

  for (let _0x1584A of _0x17422) {
    let _0x173FE = 0;

    switch (_0x1584A[2]) {
      case 0:
        _0x173FE = 51826;
        _0x13816 = new mp.Vector3(0.02, 0.06, 0.1);
        _0x1383A = new mp.Vector3(-100.0, 0.0, 0.0);
        break;

      case 1:
        _0x173FE = 58271;
        _0x13816 = new mp.Vector3(0.08, 0.03, -0.1);
        _0x1383A = new mp.Vector3(-80.77, 0.0, 0.0);
        break;

      case 2:
        _0x173FE = 24818;
        _0x13816 = new mp.Vector3(-0.1, -0.15, 0.11);
        _0x1383A = new mp.Vector3(-180.0, 0.0, 0.0);
        break;

      case 3:
        _0x173FE = 24818;
        _0x13816 = new mp.Vector3(-0.1, -0.15, -0.13);
        _0x1383A = new mp.Vector3(0.0, 0.0, 3.5);
        break;
    }

    mp.attachmentMngr.register(_0x1584A[0], _0x1584A[1], _0x173FE, _0x13816, _0x1383A);
  }
}

let attachmentStates = [];
let attachmentNames = [];

function initMenu() {
  addMisc();
  addWeapons();

  let _0x17A2E = mp.attachmentMngr.getAttachments();

  for (let i of Object.values(_0x17A2E)) {
    attachmentNames.push(i.id);
    attachmentStates.push(false);
  }
}

initMenu();
const UIMenu = NativeUI.Menu;

function UpdateAttMenu() {
  for (let i = 0; i <= attachmentNames.length; i++) {
    AttMenu.MenuItems[i].Checked = attachmentStates[i];
  }
}

const AttMenu = new UIMenu('Attachments', '', new Point(50, 50));

for (let i = 0; i <= attachmentNames.length; i++) {
  AttMenu.AddItem(new UIMenuCheckboxItem(`Attach Object ${i}`, attachmentStates[i], `Will attach object ID ${i}.`));
}

AttMenu.Visible = false;
AttMenu.CheckboxChange.on((_0x13372, _0x13A7A) => {
  let _0x13A56 = AttMenu.MenuItems.indexOf(_0x13372);

  if (_0x13A7A) {
    mp.attachmentMngr.addLocal(attachmentNames[_0x13A56]);
  } else {
    mp.attachmentMngr.removeLocal(attachmentNames[_0x13A56]);
  }

  attachmentStates[_0x13A56] = _0x13A7A;
});
mp.events.add('SnipeWithMe', _0x12B26 => {
  switch (parseInt(_0x12B26)) {
    case 1:
      mp.attachmentMngr.addLocal('carkey');
      break;

    case 0:
      mp.attachmentMngr.removeLocal('carkey');
      break;
  }
});