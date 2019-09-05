const EventEmitter = require('events');

const emmiter = new EventEmitter();

// register a listener (same as emmiter.addListener)
// emmiter.on('messageLogged', function(arg) { // by convention is arg, but could be e, or eventArg
//     console.log('Listener called', arg);
// });

// this is the same as above, but it uses the ES6 simple syntax
emmiter.on('messageLogged', (arg)=>{
    console.log('Listener called', arg);
});


// emmit means: Making a noise, i.e signalling that an event has happened
// we raised an event
emmiter.emit('messageLogged', { id:1, url:'http://site.com'});

// Raise: logging with (data:message)
emmiter.on('logging', (arg)=>{
    console.log(arg);
});

emmiter.emit('logging', {'message':'Successfully logged in'});