const EventEmitter = require('events');

class Logger extends EventEmitter {
    log() {
        // Send an HTTP request    
        //console.log(message);
    
        // we raised an event
        this.emit('messageLogged', { id:1, url:'http://site.com'});
    }
}



module.exports = Logger;