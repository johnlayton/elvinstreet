var noble = require( 'noble' );
/*
var spider = require("rolling-spider");
var temporal = require('temporal');

var rollingSpider = new spider();

// NEW CODE BELOW HERE

rollingSpider.connect(function() {
  rollingSpider.setup(function() {
    rollingSpider.startPing();

    rollingSpider.startPing();
    rollingSpider.flatTrim();

    temporal.queue([
      {
        delay: 5000,
        task: function () {
          rollingSpider.takeOff();
          rollingSpider.flatTrim();
        }
      },
      {
        delay: 1000,
        task: function () {
          rollingSpider.forward();
        }
      },
      {
        delay: 1000,
        task: function () {
          rollingSpider.land();
        }
      },
      {
        delay: 5000,
        task: function () {
          temporal.clear();
          process.exit(0);
        }
      }
    ]);

  });
});
*/

noble.on( 'stateChange', function ( state ) {
  if ( state === 'poweredOn' ) {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
} );

noble.on( 'discover', function ( peripheral ) {
  //console.log('\thello my local name is:');
  //console.log('\t\t' + peripheral.advertisement.localName);
  //console.log('\tcan I interest you in any of the following advertised services:');
  //console.log('\t\t' + JSON.stringify(peripheral.advertisement.serviceUuids));
  //
  //var serviceData = peripheral.advertisement.serviceData;
  //if (serviceData && serviceData.length) {
  //  console.log('\there is my service data:');
  //  for (var i in serviceData) {
  //    console.log('\t\t' + JSON.stringify(serviceData[i].uuid) + ': ' + JSON.stringify(serviceData[i].data.toString('hex')));
  //  }
  //}
  //if (peripheral.advertisement.manufacturerData) {
  //  console.log('\there is my manufacturer data:');
  //  console.log('\t\t' + JSON.stringify(peripheral.advertisement.manufacturerData.toString('hex')));
  //}
  //if (peripheral.advertisement.txPowerLevel !== undefined) {
  //  console.log('\tmy TX power level is:');
  //  console.log('\t\t' + peripheral.advertisement.txPowerLevel);
  //}
  peripheral.connect( function ( error ) {
    if ( error ) {
      console.log( "*****" );
      console.log( error );
    } else {

      //noble.on('discover', function(peripheral) {
      //  peripheral.connect(function(error) {
      console.log( "-------------------------------------------------" );
      console.log( 'connected to peripheral: ' + peripheral.uuid );
      console.log( '\t\t' + peripheral.advertisement.localName );
      peripheral.discoverServices( null, function ( error, services ) {
        //console.log( 'discovered the following services:' );
        for ( var i in services ) {
          //console.log( '  ' + i + ' name: ' + services[i].name + ' uuid: ' + services[i].uuid );
          //if ( services[i].uuid === '180f' ) {
          //if ( services[i].uuid === '180a' ) {
            services[i].discoverCharacteristics( [], function ( error, characteristics ) {
              //console.log( 'discovered the following characteristics:' );
              for ( var i in characteristics ) {
                //console.log( '  ' + i + ' name: ' + characteristics[i].name + ' uuid: ' + characteristics[i].uuid );
                //console.log( characteristics[i].properties );
                if ( characteristics[i].properties.indexOf( 'read' ) !== -1 ) {
                  characteristics[i].read( function ( err, data ) {
                    if ( err ) {
                      console.log( "*******" );
                      console.log( err );
                      console.log( "*******" );
                    }
                    if ( data ) {
                      //console.log( services[i].name + " -> " + characteristics[i].name + " = " + data.toString( 'hex' ) );
                      //console.log( data.toString( 'ascii' ) );
                      console.log( characteristics[i].name + " -> " + data.toString( 'hex' ) );
                      //characteristicInfo += '\n    value       ' + data.toString('hex') + ' | \'' + string + '\'';
                    }
                  } );
                } else {
                }
                characteristics[i].discoverDescriptors( function(err, descriptors) {
                  console.log( descriptors );

                } );
              }
            } );
          //}
        }

      } );
      //  });
      //});

      //peripheral.discoverServices([], function(error, services) {
      //  console.log('peripheral discovered (' + peripheral.uuid +
      //              ' with address <' + peripheral.address +  ', ' + peripheral.addressType + '>, RSSI ' + peripheral.rssi + ':');
      //  console.log( services );
      //});
    }
  } );
} );

noble.startScanning();