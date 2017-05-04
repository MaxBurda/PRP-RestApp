const app = require('app');
const sessionMW = require('storage').sessionMW;

module.exports = function (io) {

	module.exports = io;

	app.emit('restapp_wssready');

	io.use((socket, next) => {
		sessionMW(socket.handshake, {}, next);
	});

	// io routes
	require('routes_io/heartbeat');
	require('routes_io/rooms');

	//io custom methods
	io.sendToUid = function(uid,data) {
		if ( /^uid_.+/.test(uid) )
		io.to(uid).emit('restapp_roomMessage',data);
	}

}