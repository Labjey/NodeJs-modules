var util = require('util');
var EventEmitter =require('events');

 function Violin(){
     EventEmitter.call(this);
 }

 util.inherits(Violin,EventEmitter);

 var playVioline = new Violin();
 playVioline.on('note',function(){
                         console.log('violin is playing music');
                            });

 Violin.prototype.create=function(){this.emit('note');}
 
 setInterval(() => {playVioline.create();},1000);