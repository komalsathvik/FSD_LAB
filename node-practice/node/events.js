const EventEmitter = require('events');

const schoolBell = new EventEmitter();

schoolBell.on('ring', (period) => {
  console.log(`Bell rang for ${period}`);
});

schoolBell.emit('ring', 'lunch break');
