#!/usr/bin/env bash
ffi-generate -f /usr/local/Cellar/gdal/1.11.2_2/include/gdal.h \
-l libgdal \
-L /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib >> ./lib/gdal.js

#export LD_LIBRARY_PATH=/usr/local/Cellar/netcdf/4.3.3.1/lib
#export DEBUG_FD=3
#export DEBUG=netcdf
#node watsonstreet-test.js 3>&1 # debug.log
#ncdump -h new.nc
