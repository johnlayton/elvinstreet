#!/usr/bin/env node
"use strict";

var util = require( 'util' );
var repl = require( 'repl' );
var netcdf = require( 'watsonstreet' );


var gdal = require( "gdal" );

//console.log( gdal.GDALDrivers() );
var cpus = require( 'os' ).cpus().length;

var warp_cache_max = 750; //MB
var gdal_cache_max = warp_cache_max * 3;

gdal.config.set( 'GDAL_CACHEMAX', gdal_cache_max.toString() );



var input = gdal.open( "/Users/john/Development/fisg/rapidfire/content/Temp/3cc5e242-1cd7-4e37-befe-ceb27ad5e9f1/input.png",
                       "r" );


var options = {
  src: input,
  s_srs: input.srs,
  t_srs: gdal.SpatialReference.fromEPSG(3857),
  memoryLimit: warp_cache_max * 1024 * 1024,
  multi: true,
  options: ['NUM_THREADS=' + cpus.toString()]
};

var info = gdal.suggestedWarpOutput(options);

var creationOptions = [
  'TILED=YES',
  'BLOCKXSIZE=512',
  'BLOCKYSIZE=512'
];



var bandCount = input.bands.count();
var dataType = input.bands.get( 1 ).dataType;

var output = gdal.open( "/Users/john/Development/fisg/rapidfire/content/Temp/3cc5e242-1cd7-4e37-befe-ceb27ad5e9f1/output.tif",
                        "w", 'GTiff', info.rasterSize.x, info.rasterSize.y,
                        bandCount,
                        dataType,
                        creationOptions
);

options.dst = output;
options.dst.geoTransform = info.geoTransform;
options.dst.srs = options.t_srs;

gdal.reprojectImage(options);

//var dataset = gdal.open("/Users/john/Development/home/watsonstreet/data.nc");

//console.log( util.inspect( input ) );
//console.log( util.inspect( output ) );
//
//console.log( "number of bands: " + input.bands.count() );
//console.log( "width: " + input.rasterSize.x );
//console.log( "height: " + input.rasterSize.y );
//console.log( "geotransform: " + input.geoTransform );
//console.log( "srs: " + (input.srs ? input.srs.toWKT() : 'null') );
//console.log( "files: " + (input.getFileList()) );

var GDA94 = 'PROJCS["GDA94 / Vicgrid94",' +
            '  GEOGCS["GDA94",' +
            '    DATUM["Geocentric_Datum_of_Australia_1994",' +
            '      SPHEROID["GRS 1980",6378137,298.257222101,' +
            '        AUTHORITY["EPSG","7019"]],' +
            '      TOWGS84[0,0,0,0,0,0,0],' +
            '      AUTHORITY["EPSG","6283"]],' +
            '    PRIMEM["Greenwich",0,' +
            '      AUTHORITY["EPSG","8901"]],' +
            '    UNIT["degree",0.01745329251994328,' +
            '      AUTHORITY["EPSG","9122"]],' +
            '    AUTHORITY["EPSG","4283"]],' +
            '  UNIT["metre",1,' +
            '    AUTHORITY["EPSG","9001"]],' +
            '  PROJECTION["Lambert_Conformal_Conic_2SP"],' +
            '  PARAMETER["standard_parallel_1",-36],' +
            '  PARAMETER["standard_parallel_2",-38],' +
            '  PARAMETER["latitude_of_origin",-37],' +
            '  PARAMETER["central_meridian",145],' +
            '  PARAMETER["false_easting",2500000],' +
            '  PARAMETER["false_northing",2500000],' +
            '  AUTHORITY["EPSG","3111"],' +
            '  AXIS["Easting",EAST],' +
            '  AXIS["Northing",NORTH]]';

var WSG84 = 'GEOGCS["WGS 84",' +
            '  DATUM["WGS_1984",' +
            '    SPHEROID["WGS 84",6378137,298.257223563,' +
            '      AUTHORITY["EPSG","7030"]],' +
            '    AUTHORITY["EPSG","6326"]],' +
            '  PRIMEM["Greenwich",0,' +
            '    AUTHORITY["EPSG","8901"]],' +
            '  UNIT["degree",0.01745329251994328,' +
            '    AUTHORITY["EPSG","9122"]],' +
            '  AUTHORITY["EPSG","4326"]]';


//gdal.reprojectImage( {
//  src         : input,
//  s_srs       : new gdal.SpatialReference( GDA94 ),
//  dst         : output,
//  t_srs       : new gdal.SpatialReference( WSG84 ),
//  resampling  : gdal.GRA_Average,
//  memoryLimit : warp_cache_max * 1024 * 1024,
//  multi       : true,
//  options     : ['NUM_THREADS=' + cpus.toString()]
//} );