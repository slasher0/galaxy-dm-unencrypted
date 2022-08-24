const controlsIds = {
	F5: 327,
	W: 32,
	S: 33,
	A: 34,
	D: 35,
	Space: 321,
	LCtrl: 326
  };
  global.CaptureLobbyfly = {
	flying: false,
	f: 2.0,
	w: 2.0,
	h: 2.0,
	point_distance: 1000
  };
  global.gameplayCam = mp.cameras.new('gameplay');
  let direction = null;
  let coords = null;
  
  function pointingAt(_0x266DB) {
	const _0x28A7B = new mp.Vector3(direction.x * _0x266DB + coords.x, direction.y * _0x266DB + coords.y, direction.z * _0x266DB + coords.z);
  
	const _0x28AB7 = mp.raycasting.testPointToPoint(null, _0x28A7B, [1, 16]);
  
	if (_0x28AB7 === undefined) {
	  return 'undefined';
	}
  
	return _0x28AB7;
  }
  
  mp.events.add('render', () => {
	const _0x26F87 = mp.game.controls;
	const _0x26FC3 = global.CaptureLobbyfly;
	direction = global.gameplayCam.getDirection();
	coords = global.gameplayCam.getCoord();
  
	if (CaptureLobbyfly.flying) {
	  const _0x26C7B = mp.players.local.position;
  
	  if (_0x26F87.isControlPressed(0, controlsIds.W)) {
		if (_0x26FC3.f < 8.0) {
		  _0x26FC3.f *= 1.025;
		}
  
		_0x26C7B.x += direction.x * _0x26FC3.f;
		_0x26C7B.y += direction.y * _0x26FC3.f;
		_0x26C7B.z += direction.z * _0x26FC3.f;
	  } else {
		if (_0x26F87.isControlPressed(0, controlsIds.S)) {
		  if (_0x26FC3.f < 8.0) {
			_0x26FC3.f *= 1.025;
		  }
  
		  _0x26C7B.x -= direction.x * _0x26FC3.f;
		  _0x26C7B.y -= direction.y * _0x26FC3.f;
		  _0x26C7B.z -= direction.z * _0x26FC3.f;
		} else {
		  _0x26FC3.f = 2.0;
		}
	  }
  
	  if (_0x26F87.isControlPressed(0, controlsIds.A)) {
		if (_0x26FC3.l < 8.0) {
		  _0x26FC3.l *= 1.025;
		}
  
		_0x26C7B.x += -direction.y * _0x26FC3.l;
		_0x26C7B.y += direction.x * _0x26FC3.l;
	  } else {
		if (_0x26F87.isControlPressed(0, controlsIds.D)) {
		  if (_0x26FC3.l < 8.0) {
			_0x26FC3.l *= 1.05;
		  }
  
		  _0x26C7B.x -= -direction.y * _0x26FC3.l;
		  _0x26C7B.y -= direction.x * _0x26FC3.l;
		} else {
		  _0x26FC3.l = 2.0;
		}
	  }
  
	  if (_0x26F87.isControlPressed(0, controlsIds.Space)) {
		if (_0x26FC3.h < 8.0) {
		  _0x26FC3.h *= 1.025;
		}
  
		_0x26C7B.z += _0x26FC3.h;
	  } else {
		if (_0x26F87.isControlPressed(0, controlsIds.LCtrl)) {
		  if (_0x26FC3.h < 8.0) {
			_0x26FC3.h *= 1.05;
		  }
  
		  _0x26C7B.z -= _0x26FC3.h;
		} else {
		  _0x26FC3.h = 2.0;
		}
	  }
  
	  {
		mp.players.local.setCoordsNoOffset(_0x26C7B.x, _0x26C7B.y, _0x26C7B.z, false, false, false);
	  }
	}
  });