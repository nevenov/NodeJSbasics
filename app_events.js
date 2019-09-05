const EventEmitter = require('events');

const emmiter = new EventEmitter();

// register a listener (same as emmiter.addListener)
emmiter.on('messageLogged', function() {
    console.log('Listener called');
});

// emmit means: Making a noise, i.e signalling that an event has happened
// we raised an event
emmiter.emit('messageLogged');