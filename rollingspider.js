//var noble = require( 'noble' );
//var spider = require( "rolling-spider" );
//var temporal = require( 'temporal' );
//
//var rollingSpider = new spider();
//
//// NEW CODE BELOW HERE
//
//rollingSpider.connect( function () {
//
//  console.log( "connected ... " )
//
//  rollingSpider.setup( function () {
//
//    console.log( "setup ... " )
//
//    rollingSpider.startPing();
//
//    //rollingSpider.startPing();
//    rollingSpider.flatTrim();
//
//    temporal.queue( [
//      {
//        delay : 1000,
//        task  : function () {
//          console.log( "takeoff..." );
//          rollingSpider.takeOff();
//          rollingSpider.flatTrim();
//        }
//      },
//      {
//        delay : 1000,
//        task  : function () {
//          rollingSpider.right();
//        }
//      },
//      {
//        delay : 2000,
//        task  : function () {
//          rollingSpider.flatTrim();
//          console.log( "land..." );
//          rollingSpider.land();
//        }
//      }
//      //{
//      //  delay : 5000,
//      //  task  : function () {
//      //    temporal.clear();
//      //    process.exit( 0 );
//      //  }
//      //}
//    ] );
//
//  } );
//} );

var Cylon = require('cylon');

Cylon.robot({

  connections: {
    'rolling-spider': { adaptor: 'rolling-spider' }
  },

  devices: {
    drone: { driver: 'rolling-spider' }
  },

  work: function (my) {

    my.drone.wheelOff();

    my.drone.flatTrim();

    my.drone.takeOff();

    after(2500, function () {

      my.drone.land();

      after(1500, function () {

        Cylon.halt();

      });

    });

  }

}).start();