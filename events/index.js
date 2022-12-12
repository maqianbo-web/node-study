const EventEmitter = require('events')

const events = new EventEmitter();


events.on('play',() => {
    console.log('我被触发了')
})

events.emit('play');