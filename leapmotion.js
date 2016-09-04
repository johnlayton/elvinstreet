//var Cylon = require('cylon');
//
//Cylon.robot({
//  connections: {
//    leapmotion: { adaptor: 'leapmotion' }
//  },
//
//  devices: {
//    leapmotion: { driver: 'leapmotion' }
//  },
//
//  work: function(my) {
//    my.leapmotion.on('hand', function(payload) {
//      console.log( payload );
//      //Logger.info(payload.toString());
//    });
//  }
//}).start();

"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    keyboard: { adaptor: "keyboard" }
  },

  devices: {
    keyboard: { driver: "keyboard" }
  },

  work: function(my) {
    my.keyboard.on("a", function() {
      console.log("a pressed!");
    });
  }
}).start();