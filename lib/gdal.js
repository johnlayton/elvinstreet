var FFI = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');

var voidPtr = ref.refType(ref.types.void);

exports.CONSTANTS = {
  '': {
      P_ALL: 0,
      P_PID: 1,
      P_PGID: 2,
      CE_None: 0,
      CE_Debug: 1,
      CE_Warning: 2,
      CE_Failure: 3,
      CE_Fatal: 4,
      VIRTUALMEM_READONLY: 0,
      VIRTUALMEM_READONLY_ENFORCED: 1,
      VIRTUALMEM_READWRITE: 2,
      GDT_Unknown: 0,
      GDT_Byte: 1,
      GDT_UInt16: 2,
      GDT_Int16: 3,
      GDT_UInt32: 4,
      GDT_Int32: 5,
      GDT_Float32: 6,
      GDT_Float64: 7,
      GDT_CInt16: 8,
      GDT_CInt32: 9,
      GDT_CFloat32: 10,
      GDT_CFloat64: 11,
      GDT_TypeCount: 12,
      GARIO_PENDING: 0,
      GARIO_UPDATE: 1,
      GARIO_ERROR: 2,
      GARIO_COMPLETE: 3,
      GARIO_TypeCount: 4,
      GCI_Undefined: 0,
      GCI_GrayIndex: 1,
      GCI_PaletteIndex: 2,
      GCI_RedBand: 3,
      GCI_GreenBand: 4,
      GCI_BlueBand: 5,
      GCI_AlphaBand: 6,
      GCI_HueBand: 7,
      GCI_SaturationBand: 8,
      GCI_LightnessBand: 9,
      GCI_CyanBand: 10,
      GCI_MagentaBand: 11,
      GCI_YellowBand: 12,
      GCI_BlackBand: 13,
      GCI_YCbCr_YBand: 14,
      GCI_YCbCr_CbBand: 15,
      GCI_YCbCr_CrBand: 16,
      GCI_Max: 16,
      GPI_Gray: 0,
      GPI_RGB: 1,
      GPI_CMYK: 2,
      GPI_HLS: 3,
      GA_ReadOnly: 0,
      GA_Update: 1,
      GF_Read: 0,
      GF_Write: 1,
      GFU_Generic: 0,
      GFU_PixelCount: 1,
      GFU_Name: 2,
      GFU_Min: 3,
      GFU_Max: 4,
      GFU_MinMax: 5,
      GFU_Red: 6,
      GFU_Green: 7,
      GFU_Blue: 8,
      GFU_Alpha: 9,
      GFU_RedMin: 10,
      GFU_GreenMin: 11,
      GFU_BlueMin: 12,
      GFU_AlphaMin: 13,
      GFU_RedMax: 14,
      GFU_GreenMax: 15,
      GFU_BlueMax: 16,
      GFU_AlphaMax: 17,
      GFU_MaxCount: 18,
      GFT_Integer: 0,
      GFT_Real: 1,
      GFT_String: 2,
      GTO_TIP: 0,
      GTO_BIT: 1,
      GTO_BSQ: 2,
      '0': 'P_ALL',
      '1': 'P_PID',
      '2': 'P_PGID',
      '0': 'CE_None',
      '1': 'CE_Debug',
      '2': 'CE_Warning',
      '3': 'CE_Failure',
      '4': 'CE_Fatal',
      '0': 'VIRTUALMEM_READONLY',
      '1': 'VIRTUALMEM_READONLY_ENFORCED',
      '2': 'VIRTUALMEM_READWRITE',
      '0': 'GDT_Unknown',
      '1': 'GDT_Byte',
      '2': 'GDT_UInt16',
      '3': 'GDT_Int16',
      '4': 'GDT_UInt32',
      '5': 'GDT_Int32',
      '6': 'GDT_Float32',
      '7': 'GDT_Float64',
      '8': 'GDT_CInt16',
      '9': 'GDT_CInt32',
      '10': 'GDT_CFloat32',
      '11': 'GDT_CFloat64',
      '12': 'GDT_TypeCount',
      '0': 'GARIO_PENDING',
      '1': 'GARIO_UPDATE',
      '2': 'GARIO_ERROR',
      '3': 'GARIO_COMPLETE',
      '4': 'GARIO_TypeCount',
      '0': 'GCI_Undefined',
      '1': 'GCI_GrayIndex',
      '2': 'GCI_PaletteIndex',
      '3': 'GCI_RedBand',
      '4': 'GCI_GreenBand',
      '5': 'GCI_BlueBand',
      '6': 'GCI_AlphaBand',
      '7': 'GCI_HueBand',
      '8': 'GCI_SaturationBand',
      '9': 'GCI_LightnessBand',
      '10': 'GCI_CyanBand',
      '11': 'GCI_MagentaBand',
      '12': 'GCI_YellowBand',
      '13': 'GCI_BlackBand',
      '14': 'GCI_YCbCr_YBand',
      '15': 'GCI_YCbCr_CbBand',
      '16': 'GCI_YCbCr_CrBand',
      '16': 'GCI_Max',
      '0': 'GPI_Gray',
      '1': 'GPI_RGB',
      '2': 'GPI_CMYK',
      '3': 'GPI_HLS',
      '0': 'GA_ReadOnly',
      '1': 'GA_Update',
      '0': 'GF_Read',
      '1': 'GF_Write',
      '0': 'GFU_Generic',
      '1': 'GFU_PixelCount',
      '2': 'GFU_Name',
      '3': 'GFU_Min',
      '4': 'GFU_Max',
      '5': 'GFU_MinMax',
      '6': 'GFU_Red',
      '7': 'GFU_Green',
      '8': 'GFU_Blue',
      '9': 'GFU_Alpha',
      '10': 'GFU_RedMin',
      '11': 'GFU_GreenMin',
      '12': 'GFU_BlueMin',
      '13': 'GFU_AlphaMin',
      '14': 'GFU_RedMax',
      '15': 'GFU_GreenMax',
      '16': 'GFU_BlueMax',
      '17': 'GFU_AlphaMax',
      '18': 'GFU_MaxCount',
      '0': 'GFT_Integer',
      '1': 'GFT_Real',
      '2': 'GFT_String',
      '0': 'GTO_TIP',
      '1': 'GTO_BIT',
      '2': 'GTO_BSQ',
  },
};

var FILE = exports.FILE = voidPtr;
var FILEPtr = exports.FILEPtr = ref.refType(FILE);
var fpos_t = exports.fpos_t = Struct({
  __darwin_off_t: ref.types.longlong,
});
var fpos_tPtr = exports.fpos_tPtr = ref.refType(fpos_t);
var __va_list_tag = exports.__va_list_tag = ArrayType(__va_list_tag, 1);
var __va_list_tagPtr = exports.__va_list_tagPtr = ref.refType(__va_list_tag);
var size_t = exports.size_t = Struct({
  __darwin_size_t: ref.types.ulong,
});
var size_tPtr = exports.size_tPtr = ref.refType(size_t);
var siginfo_t = exports.siginfo_t = voidPtr;
var siginfo_tPtr = exports.siginfo_tPtr = ref.refType(siginfo_t);
var div_t = exports.div_t = Struct({
  quot: ref.types.int32,
  rem: ref.types.int32,
});
var div_tPtr = exports.div_tPtr = ref.refType(div_t);
var ldiv_t = exports.ldiv_t = Struct({
  quot: ref.types.long,
  rem: ref.types.long,
});
var ldiv_tPtr = exports.ldiv_tPtr = ref.refType(ldiv_t);
var lldiv_t = exports.lldiv_t = Struct({
  quot: ref.types.longlong,
  rem: ref.types.longlong,
});
var lldiv_tPtr = exports.lldiv_tPtr = ref.refType(lldiv_t);
var wchar_t = exports.wchar_t = Struct({
  __darwin_wchar_t: ref.types.int32,
});
var wchar_tPtr = exports.wchar_tPtr = ref.refType(wchar_t);
var time_t = exports.time_t = Struct({
  __darwin_time_t: ref.types.long,
});
var time_tPtr = exports.time_tPtr = ref.refType(time_t);
var CPLErrorHandler = exports.CPLErrorHandler = FFI.Function(ref.types.void, [
  ref.types.uint32,
  ref.types.int32,
  ref.types.CString,
]);
var CPLErrorHandlerPtr = exports.CPLErrorHandlerPtr = ref.refType(CPLErrorHandler);
var GDALProgressFunc = exports.GDALProgressFunc = FFI.Function(ref.types.int32, [
  ref.types.double,
  ref.types.CString,
  voidPtr,
]);
var GDALProgressFuncPtr = exports.GDALProgressFuncPtr = ref.refType(GDALProgressFunc);
var fd_set = exports.fd_set = Struct({
  fds_bits: ArrayType(ref.types.int32, 32),
});
var fd_setPtr = exports.fd_setPtr = ref.refType(fd_set);
var sigset_t = exports.sigset_t = Struct({
  __darwin_sigset_t: ref.types.uint32,
});
var sigset_tPtr = exports.sigset_tPtr = ref.refType(sigset_t);
var uid_t = exports.uid_t = Struct({
  __darwin_uid_t: ref.types.uint32,
});
var uid_tPtr = exports.uid_tPtr = ref.refType(uid_t);
var gid_t = exports.gid_t = Struct({
  __darwin_gid_t: ref.types.uint32,
});
var gid_tPtr = exports.gid_tPtr = ref.refType(gid_t);
var filesec_t = exports.filesec_t = voidPtr;
var filesec_tPtr = exports.filesec_tPtr = ref.refType(filesec_t);
var VSIStatBuf = exports.VSIStatBuf = voidPtr;
var VSIStatBufPtr = exports.VSIStatBufPtr = ref.refType(VSIStatBuf);
var VSILFILE = exports.VSILFILE = Struct({
  FILE: FILE,
});
var VSILFILEPtr = exports.VSILFILEPtr = ref.refType(VSILFILE);
var vsi_l_offset = exports.vsi_l_offset = Struct({
  GUIntBig: ref.types.ulonglong,
});
var vsi_l_offsetPtr = exports.vsi_l_offsetPtr = ref.refType(vsi_l_offset);
var VSIStatBufL = exports.VSIStatBufL = voidPtr;
var VSIStatBufLPtr = exports.VSIStatBufLPtr = ref.refType(VSIStatBufL);
var GByte = exports.GByte = voidPtr;
var GBytePtr = exports.GBytePtr = ref.refType(GByte);
var CPLVirtualMem = exports.CPLVirtualMem = voidPtr;
var CPLVirtualMemPtr = exports.CPLVirtualMemPtr = ref.refType(CPLVirtualMem);
var CPLVirtualMemCachePageCbk = exports.CPLVirtualMemCachePageCbk = FFI.Function(ref.types.void, [
  voidPtr,
  ref.types.ulong,
  voidPtr,
  ref.types.ulong,
  voidPtr,
]);
var CPLVirtualMemCachePageCbkPtr = exports.CPLVirtualMemCachePageCbkPtr = ref.refType(CPLVirtualMemCachePageCbk);
var CPLVirtualMemUnCachePageCbk = exports.CPLVirtualMemUnCachePageCbk = FFI.Function(ref.types.void, [
  voidPtr,
  ref.types.ulong,
  voidPtr,
  ref.types.ulong,
  voidPtr,
]);
var CPLVirtualMemUnCachePageCbkPtr = exports.CPLVirtualMemUnCachePageCbkPtr = ref.refType(CPLVirtualMemUnCachePageCbk);
var CPLVirtualMemFreeUserData = exports.CPLVirtualMemFreeUserData = FFI.Function(ref.types.void, [
  voidPtr,
]);
var CPLVirtualMemFreeUserDataPtr = exports.CPLVirtualMemFreeUserDataPtr = ref.refType(CPLVirtualMemFreeUserData);
var GDALDatasetH = exports.GDALDatasetH = voidPtr;
var GDALDatasetHPtr = exports.GDALDatasetHPtr = ref.refType(GDALDatasetH);
var GDALDriverH = exports.GDALDriverH = voidPtr;
var GDALDriverHPtr = exports.GDALDriverHPtr = ref.refType(GDALDriverH);
var GDAL_GCP = exports.GDAL_GCP = Struct({
  pszId: ref.types.CString,
  pszInfo: ref.types.CString,
  dfGCPPixel: ref.types.double,
  dfGCPLine: ref.types.double,
  dfGCPX: ref.types.double,
  dfGCPY: ref.types.double,
  dfGCPZ: ref.types.double,
});
var GDAL_GCPPtr = exports.GDAL_GCPPtr = ref.refType(GDAL_GCP);
var GDALMajorObjectH = exports.GDALMajorObjectH = voidPtr;
var GDALMajorObjectHPtr = exports.GDALMajorObjectHPtr = ref.refType(GDALMajorObjectH);
var GDALRasterBandH = exports.GDALRasterBandH = voidPtr;
var GDALRasterBandHPtr = exports.GDALRasterBandHPtr = ref.refType(GDALRasterBandH);
var GDALAsyncReaderH = exports.GDALAsyncReaderH = voidPtr;
var GDALAsyncReaderHPtr = exports.GDALAsyncReaderHPtr = ref.refType(GDALAsyncReaderH);
var GDALColorTableH = exports.GDALColorTableH = voidPtr;
var GDALColorTableHPtr = exports.GDALColorTableHPtr = ref.refType(GDALColorTableH);
var GDALRasterAttributeTableH = exports.GDALRasterAttributeTableH = voidPtr;
var GDALRasterAttributeTableHPtr = exports.GDALRasterAttributeTableHPtr = ref.refType(GDALRasterAttributeTableH);
var GDALDerivedPixelFunc = exports.GDALDerivedPixelFunc = FFI.Function(ref.types.uint32, [
  voidPtr,
  ref.types.int32,
  voidPtr,
  ref.types.int32,
  ref.types.int32,
  ref.types.uint32,
  ref.types.uint32,
  ref.types.int32,
  ref.types.int32,
]);
var GDALDerivedPixelFuncPtr = exports.GDALDerivedPixelFuncPtr = ref.refType(GDALDerivedPixelFunc);
var GDALRPCInfo = exports.GDALRPCInfo = Struct({
  dfLINE_OFF: ref.types.double,
  dfSAMP_OFF: ref.types.double,
  dfLAT_OFF: ref.types.double,
  dfLONG_OFF: ref.types.double,
  dfHEIGHT_OFF: ref.types.double,
  dfLINE_SCALE: ref.types.double,
  dfSAMP_SCALE: ref.types.double,
  dfLAT_SCALE: ref.types.double,
  dfLONG_SCALE: ref.types.double,
  dfHEIGHT_SCALE: ref.types.double,
  adfLINE_NUM_COEFF: ArrayType(ref.types.double, 20),
  adfLINE_DEN_COEFF: ArrayType(ref.types.double, 20),
  adfSAMP_NUM_COEFF: ArrayType(ref.types.double, 20),
  adfSAMP_DEN_COEFF: ArrayType(ref.types.double, 20),
  dfMIN_LONG: ref.types.double,
  dfMIN_LAT: ref.types.double,
  dfMAX_LONG: ref.types.double,
  dfMAX_LAT: ref.types.double,
});
var GDALRPCInfoPtr = exports.GDALRPCInfoPtr = ref.refType(GDALRPCInfo);
var GDALColorEntry = exports.GDALColorEntry = Struct({
  c1: ref.types.short,
  c2: ref.types.short,
  c3: ref.types.short,
  c4: ref.types.short,
});
var GDALColorEntryPtr = exports.GDALColorEntryPtr = ref.refType(GDALColorEntry);
var GIntBig = exports.GIntBig = voidPtr;
var GIntBigPtr = exports.GIntBigPtr = ref.refType(GIntBig);

exports.libgdal = new FFI.Library('libgdal', {
  renameat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
    ref.types.CString,
  ]],
  clearerr: [ref.types.void, [
    FILE,
  ]],
  fclose: [ref.types.int32, [
    FILEPtr,
  ]],
  feof: [ref.types.int32, [
    FILEPtr,
  ]],
  ferror: [ref.types.int32, [
    FILEPtr,
  ]],
  fflush: [ref.types.int32, [
    FILEPtr,
  ]],
  fgetc: [ref.types.int32, [
    FILEPtr,
  ]],
  fgetpos: [ref.types.int32, [
    FILEPtr,
    fpos_tPtr,
  ]],
  fgets: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
    FILEPtr,
  ]],
  fopen: [FILEPtr, [
    ref.types.CString,
    ref.types.CString,
  ]],
  fprintf: [ref.types.int32, [
    FILEPtr,
    ref.types.CString,
  ]],
  fputc: [ref.types.int32, [
    ref.types.int32,
    FILEPtr,
  ]],
  fputs: [ref.types.int32, [
    ref.types.CString,
    FILEPtr,
  ]],
  fread: [ref.types.ulong, [
    voidPtr,
    ref.types.ulong,
    ref.types.ulong,
    FILEPtr,
  ]],
  freopen: [FILEPtr, [
    ref.types.CString,
    ref.types.CString,
    FILEPtr,
  ]],
  fscanf: [ref.types.int32, [
    FILEPtr,
    ref.types.CString,
  ]],
  fseek: [ref.types.int32, [
    FILEPtr,
    ref.types.long,
    ref.types.int32,
  ]],
  fsetpos: [ref.types.int32, [
    FILEPtr,
    fpos_tPtr,
  ]],
  ftell: [ref.types.long, [
    FILEPtr,
  ]],
  fwrite: [ref.types.ulong, [
    voidPtr,
    ref.types.ulong,
    ref.types.ulong,
    FILEPtr,
  ]],
  getc: [ref.types.int32, [
    FILEPtr,
  ]],
  getchar: [ref.types.int32, [
  ]],
  gets: [ref.types.CString, [
    ref.types.CString,
  ]],
  perror: [ref.types.void, [
    ref.types.CString,
  ]],
  printf: [ref.types.int32, [
    ref.types.CString,
  ]],
  putc: [ref.types.int32, [
    ref.types.int32,
    FILEPtr,
  ]],
  putchar: [ref.types.int32, [
    ref.types.int32,
  ]],
  puts: [ref.types.int32, [
    ref.types.CString,
  ]],
  remove: [ref.types.int32, [
    ref.types.CString,
  ]],
  rename: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  rewind: [ref.types.void, [
    FILEPtr,
  ]],
  scanf: [ref.types.int32, [
    ref.types.CString,
  ]],
  setbuf: [ref.types.void, [
    FILEPtr,
    ref.types.CString,
  ]],
  setvbuf: [ref.types.int32, [
    FILEPtr,
    ref.types.CString,
    ref.types.int32,
    ref.types.ulong,
  ]],
  sprintf: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  sscanf: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  tmpfile: [FILEPtr, [
  ]],
  tmpnam: [ref.types.CString, [
    ref.types.CString,
  ]],
  ungetc: [ref.types.int32, [
    ref.types.int32,
    FILEPtr,
  ]],
  vfprintf: [ref.types.int32, [
    FILEPtr,
    ref.types.CString,
    __va_list_tag,
  ]],
  vprintf: [ref.types.int32, [
    ref.types.CString,
    __va_list_tag,
  ]],
  vsprintf: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    __va_list_tag,
  ]],
  ctermid: [ref.types.CString, [
    ref.types.CString,
  ]],
  fdopen: [FILEPtr, [
    ref.types.int32,
    ref.types.CString,
  ]],
  fileno: [ref.types.int32, [
    FILEPtr,
  ]],
  pclose: [ref.types.int32, [
    FILEPtr,
  ]],
  popen: [FILEPtr, [
    ref.types.CString,
    ref.types.CString,
  ]],
  __srget: [ref.types.int32, [
    FILEPtr,
  ]],
  __svfscanf: [ref.types.int32, [
    FILEPtr,
    ref.types.CString,
    __va_list_tag,
  ]],
  __swbuf: [ref.types.int32, [
    ref.types.int32,
    FILEPtr,
  ]],
  __sputc: [ref.types.int32, [
    ref.types.int32,
    FILEPtr,
  ]],
  flockfile: [ref.types.void, [
    FILEPtr,
  ]],
  ftrylockfile: [ref.types.int32, [
    FILEPtr,
  ]],
  funlockfile: [ref.types.void, [
    FILEPtr,
  ]],
  getc_unlocked: [ref.types.int32, [
    FILEPtr,
  ]],
  getchar_unlocked: [ref.types.int32, [
  ]],
  putc_unlocked: [ref.types.int32, [
    ref.types.int32,
    FILEPtr,
  ]],
  putchar_unlocked: [ref.types.int32, [
    ref.types.int32,
  ]],
  getw: [ref.types.int32, [
    FILEPtr,
  ]],
  putw: [ref.types.int32, [
    ref.types.int32,
    FILEPtr,
  ]],
  tempnam: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  fseeko: [ref.types.int32, [
    FILEPtr,
    ref.types.longlong,
    ref.types.int32,
  ]],
  ftello: [ref.types.longlong, [
    FILEPtr,
  ]],
  snprintf: [ref.types.int32, [
    ref.types.CString,
    ref.types.ulong,
    ref.types.CString,
  ]],
  vfscanf: [ref.types.int32, [
    FILEPtr,
    ref.types.CString,
    __va_list_tag,
  ]],
  vscanf: [ref.types.int32, [
    ref.types.CString,
    __va_list_tag,
  ]],
  vsnprintf: [ref.types.int32, [
    ref.types.CString,
    ref.types.ulong,
    ref.types.CString,
    __va_list_tag,
  ]],
  vsscanf: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    __va_list_tag,
  ]],
  dprintf: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
  ]],
  vdprintf: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    __va_list_tag,
  ]],
  getdelim: [ref.types.long, [
    voidPtr,
    size_tPtr,
    ref.types.int32,
    FILEPtr,
  ]],
  getline: [ref.types.long, [
    voidPtr,
    size_tPtr,
    FILEPtr,
  ]],
  asprintf: [ref.types.int32, [
    voidPtr,
    ref.types.CString,
  ]],
  ctermid_r: [ref.types.CString, [
    ref.types.CString,
  ]],
  fgetln: [ref.types.CString, [
    FILEPtr,
    size_tPtr,
  ]],
  fmtcheck: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  fpurge: [ref.types.int32, [
    FILEPtr,
  ]],
  setbuffer: [ref.types.void, [
    FILEPtr,
    ref.types.CString,
    ref.types.int32,
  ]],
  setlinebuf: [ref.types.int32, [
    FILEPtr,
  ]],
  vasprintf: [ref.types.int32, [
    voidPtr,
    ref.types.CString,
    __va_list_tag,
  ]],
  zopen: [FILEPtr, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  funopen: [FILEPtr, [
    voidPtr,
    voidPtr,
    voidPtr,
    voidPtr,
    voidPtr,
  ]],
  __sprintf_chk: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
    ref.types.ulong,
    ref.types.CString,
  ]],
  __snprintf_chk: [ref.types.int32, [
    ref.types.CString,
    ref.types.ulong,
    ref.types.int32,
    ref.types.ulong,
    ref.types.CString,
  ]],
  __vsprintf_chk: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
    ref.types.ulong,
    ref.types.CString,
    __va_list_tag,
  ]],
  __vsnprintf_chk: [ref.types.int32, [
    ref.types.CString,
    ref.types.ulong,
    ref.types.int32,
    ref.types.ulong,
    ref.types.CString,
    __va_list_tag,
  ]],
  signal: [voidPtr, [
    ref.types.int32,
    voidPtr,
  ]],
  getpriority: [ref.types.int32, [
    ref.types.int32,
    ref.types.uint32,
  ]],
  getiopolicy_np: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
  ]],
  getrlimit: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
  ]],
  getrusage: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
  ]],
  setpriority: [ref.types.int32, [
    ref.types.int32,
    ref.types.uint32,
    ref.types.int32,
  ]],
  setiopolicy_np: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
  ]],
  setrlimit: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
  ]],
  _OSSwapInt16: [ref.types.ushort, [
    ref.types.ushort,
  ]],
  _OSSwapInt32: [ref.types.uint32, [
    ref.types.uint32,
  ]],
  _OSSwapInt64: [ref.types.ulonglong, [
    ref.types.ulonglong,
  ]],
  wait: [ref.types.int32, [
    ref.refType(ref.types.int32),
  ]],
  waitpid: [ref.types.int32, [
    ref.types.int32,
    ref.refType(ref.types.int32),
    ref.types.int32,
  ]],
  waitid: [ref.types.int32, [
    ref.types.uint32,
    ref.types.uint32,
    siginfo_t,
    ref.types.int32,
  ]],
  wait3: [ref.types.int32, [
    ref.refType(ref.types.int32),
    ref.types.int32,
    voidPtr,
  ]],
  wait4: [ref.types.int32, [
    ref.types.int32,
    ref.refType(ref.types.int32),
    ref.types.int32,
    voidPtr,
  ]],
  alloca: [voidPtr, [
    ref.types.ulong,
  ]],
  abort: [ref.types.void, [
  ]],
  abs: [ref.types.int32, [
    ref.types.int32,
  ]],
  atexit: [ref.types.int32, [
    voidPtr,
  ]],
  atof: [ref.types.double, [
    ref.types.CString,
  ]],
  atoi: [ref.types.int32, [
    ref.types.CString,
  ]],
  atol: [ref.types.long, [
    ref.types.CString,
  ]],
  atoll: [ref.types.longlong, [
    ref.types.CString,
  ]],
  bsearch: [voidPtr, [
    voidPtr,
    voidPtr,
    ref.types.ulong,
    ref.types.ulong,
    voidPtr,
  ]],
  calloc: [voidPtr, [
    ref.types.ulong,
    ref.types.ulong,
  ]],
  div: [div_t, [
    ref.types.int32,
    ref.types.int32,
  ]],
  exit: [ref.types.void, [
    ref.types.int32,
  ]],
  free: [ref.types.void, [
    voidPtr,
  ]],
  getenv: [ref.types.CString, [
    ref.types.CString,
  ]],
  labs: [ref.types.long, [
    ref.types.long,
  ]],
  ldiv: [ldiv_t, [
    ref.types.long,
    ref.types.long,
  ]],
  llabs: [ref.types.longlong, [
    ref.types.longlong,
  ]],
  lldiv: [lldiv_t, [
    ref.types.longlong,
    ref.types.longlong,
  ]],
  malloc: [voidPtr, [
    ref.types.ulong,
  ]],
  mblen: [ref.types.int32, [
    ref.types.CString,
    ref.types.ulong,
  ]],
  mbstowcs: [ref.types.ulong, [
    wchar_tPtr,
    ref.types.CString,
    ref.types.ulong,
  ]],
  mbtowc: [ref.types.int32, [
    wchar_tPtr,
    ref.types.CString,
    ref.types.ulong,
  ]],
  posix_memalign: [ref.types.int32, [
    voidPtr,
    ref.types.ulong,
    ref.types.ulong,
  ]],
  qsort: [ref.types.void, [
    voidPtr,
    ref.types.ulong,
    ref.types.ulong,
    voidPtr,
  ]],
  rand: [ref.types.int32, [
  ]],
  realloc: [voidPtr, [
    voidPtr,
    ref.types.ulong,
  ]],
  srand: [ref.types.void, [
    ref.types.uint32,
  ]],
  strtod: [ref.types.double, [
    ref.types.CString,
    voidPtr,
  ]],
  strtof: [ref.types.float, [
    ref.types.CString,
    voidPtr,
  ]],
  strtol: [ref.types.long, [
    ref.types.CString,
    voidPtr,
    ref.types.int32,
  ]],
  strtoll: [ref.types.longlong, [
    ref.types.CString,
    voidPtr,
    ref.types.int32,
  ]],
  strtoul: [ref.types.ulong, [
    ref.types.CString,
    voidPtr,
    ref.types.int32,
  ]],
  strtoull: [ref.types.ulonglong, [
    ref.types.CString,
    voidPtr,
    ref.types.int32,
  ]],
  system: [ref.types.int32, [
    ref.types.CString,
  ]],
  wcstombs: [ref.types.ulong, [
    ref.types.CString,
    wchar_tPtr,
    ref.types.ulong,
  ]],
  wctomb: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  _Exit: [ref.types.void, [
    ref.types.int32,
  ]],
  a64l: [ref.types.long, [
    ref.types.CString,
  ]],
  drand48: [ref.types.double, [
  ]],
  ecvt: [ref.types.CString, [
    ref.types.double,
    ref.types.int32,
    ref.refType(ref.types.int32),
    ref.refType(ref.types.int32),
  ]],
  erand48: [ref.types.double, [
    ref.types.ushort,
  ]],
  fcvt: [ref.types.CString, [
    ref.types.double,
    ref.types.int32,
    ref.refType(ref.types.int32),
    ref.refType(ref.types.int32),
  ]],
  gcvt: [ref.types.CString, [
    ref.types.double,
    ref.types.int32,
    ref.types.CString,
  ]],
  getsubopt: [ref.types.int32, [
    voidPtr,
    voidPtr,
    voidPtr,
  ]],
  grantpt: [ref.types.int32, [
    ref.types.int32,
  ]],
  initstate: [ref.types.CString, [
    ref.types.uint32,
    ref.types.CString,
    ref.types.ulong,
  ]],
  jrand48: [ref.types.long, [
    ref.types.ushort,
  ]],
  l64a: [ref.types.CString, [
    ref.types.long,
  ]],
  lcong48: [ref.types.void, [
    ref.types.ushort,
  ]],
  lrand48: [ref.types.long, [
  ]],
  mktemp: [ref.types.CString, [
    ref.types.CString,
  ]],
  mkstemp: [ref.types.int32, [
    ref.types.CString,
  ]],
  mrand48: [ref.types.long, [
  ]],
  nrand48: [ref.types.long, [
    ref.types.ushort,
  ]],
  posix_openpt: [ref.types.int32, [
    ref.types.int32,
  ]],
  ptsname: [ref.types.CString, [
    ref.types.int32,
  ]],
  putenv: [ref.types.int32, [
    ref.types.CString,
  ]],
  random: [ref.types.long, [
  ]],
  rand_r: [ref.types.int32, [
    ref.refType(ref.types.uint32),
  ]],
  realpath: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  seed48: [ref.refType(ref.types.ushort), [
    ref.types.ushort,
  ]],
  setenv: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  setkey: [ref.types.void, [
    ref.types.CString,
  ]],
  setstate: [ref.types.CString, [
    ref.types.CString,
  ]],
  srand48: [ref.types.void, [
    ref.types.long,
  ]],
  srandom: [ref.types.void, [
    ref.types.uint32,
  ]],
  unlockpt: [ref.types.int32, [
    ref.types.int32,
  ]],
  unsetenv: [ref.types.int32, [
    ref.types.CString,
  ]],
  arc4random: [ref.types.uint32, [
  ]],
  arc4random_addrandom: [ref.types.void, [
    ref.refType(ref.types.uchar),
    ref.types.int32,
  ]],
  arc4random_buf: [ref.types.void, [
    voidPtr,
    ref.types.ulong,
  ]],
  arc4random_stir: [ref.types.void, [
  ]],
  arc4random_uniform: [ref.types.uint32, [
    ref.types.uint32,
  ]],
  cgetcap: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  cgetclose: [ref.types.int32, [
  ]],
  cgetent: [ref.types.int32, [
    voidPtr,
    voidPtr,
    ref.types.CString,
  ]],
  cgetfirst: [ref.types.int32, [
    voidPtr,
    voidPtr,
  ]],
  cgetmatch: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  cgetnext: [ref.types.int32, [
    voidPtr,
    voidPtr,
  ]],
  cgetnum: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.refType(ref.types.long),
  ]],
  cgetset: [ref.types.int32, [
    ref.types.CString,
  ]],
  cgetstr: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    voidPtr,
  ]],
  cgetustr: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    voidPtr,
  ]],
  daemon: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
  ]],
  devname: [ref.types.CString, [
    ref.types.int32,
    ref.types.ushort,
  ]],
  devname_r: [ref.types.CString, [
    ref.types.int32,
    ref.types.ushort,
    ref.types.CString,
    ref.types.int32,
  ]],
  getbsize: [ref.types.CString, [
    ref.refType(ref.types.int32),
    ref.refType(ref.types.long),
  ]],
  getprogname: [ref.types.CString, [
  ]],
  heapsort: [ref.types.int32, [
    voidPtr,
    ref.types.ulong,
    ref.types.ulong,
    voidPtr,
  ]],
  mergesort: [ref.types.int32, [
    voidPtr,
    ref.types.ulong,
    ref.types.ulong,
    voidPtr,
  ]],
  psort: [ref.types.void, [
    voidPtr,
    ref.types.ulong,
    ref.types.ulong,
    voidPtr,
  ]],
  psort_r: [ref.types.void, [
    voidPtr,
    ref.types.ulong,
    ref.types.ulong,
    voidPtr,
    voidPtr,
  ]],
  qsort_r: [ref.types.void, [
    voidPtr,
    ref.types.ulong,
    ref.types.ulong,
    voidPtr,
    voidPtr,
  ]],
  radixsort: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.refType(ref.types.uchar),
    ref.types.uint32,
  ]],
  setprogname: [ref.types.void, [
    ref.types.CString,
  ]],
  sradixsort: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.refType(ref.types.uchar),
    ref.types.uint32,
  ]],
  sranddev: [ref.types.void, [
  ]],
  srandomdev: [ref.types.void, [
  ]],
  reallocf: [voidPtr, [
    voidPtr,
    ref.types.ulong,
  ]],
  strtoq: [ref.types.longlong, [
    ref.types.CString,
    voidPtr,
    ref.types.int32,
  ]],
  strtouq: [ref.types.ulonglong, [
    ref.types.CString,
    voidPtr,
    ref.types.int32,
  ]],
  valloc: [voidPtr, [
    ref.types.ulong,
  ]],
  __math_errhandling: [ref.types.int32, [
  ]],
  __fpclassifyf: [ref.types.int32, [
    ref.types.float,
  ]],
  __fpclassifyd: [ref.types.int32, [
    ref.types.double,
  ]],
  __inline_isfinitef: [ref.types.int32, [
    ref.types.float,
  ]],
  __inline_isfinited: [ref.types.int32, [
    ref.types.double,
  ]],
  __inline_isinff: [ref.types.int32, [
    ref.types.float,
  ]],
  __inline_isinfd: [ref.types.int32, [
    ref.types.double,
  ]],
  __inline_isnanf: [ref.types.int32, [
    ref.types.float,
  ]],
  __inline_isnand: [ref.types.int32, [
    ref.types.double,
  ]],
  __inline_isnormalf: [ref.types.int32, [
    ref.types.float,
  ]],
  __inline_isnormald: [ref.types.int32, [
    ref.types.double,
  ]],
  __inline_signbitf: [ref.types.int32, [
    ref.types.float,
  ]],
  __inline_signbitd: [ref.types.int32, [
    ref.types.double,
  ]],
  __inline_isfinitef: [ref.types.int32, [
    ref.types.float,
  ]],
  __inline_isfinited: [ref.types.int32, [
    ref.types.double,
  ]],
  __inline_isinff: [ref.types.int32, [
    ref.types.float,
  ]],
  __inline_isinfd: [ref.types.int32, [
    ref.types.double,
  ]],
  __inline_isnanf: [ref.types.int32, [
    ref.types.float,
  ]],
  __inline_isnand: [ref.types.int32, [
    ref.types.double,
  ]],
  __inline_signbitf: [ref.types.int32, [
    ref.types.float,
  ]],
  __inline_signbitd: [ref.types.int32, [
    ref.types.double,
  ]],
  __inline_isnormalf: [ref.types.int32, [
    ref.types.float,
  ]],
  __inline_isnormald: [ref.types.int32, [
    ref.types.double,
  ]],
  acosf: [ref.types.float, [
    ref.types.float,
  ]],
  acos: [ref.types.double, [
    ref.types.double,
  ]],
  asinf: [ref.types.float, [
    ref.types.float,
  ]],
  asin: [ref.types.double, [
    ref.types.double,
  ]],
  atanf: [ref.types.float, [
    ref.types.float,
  ]],
  atan: [ref.types.double, [
    ref.types.double,
  ]],
  atan2f: [ref.types.float, [
    ref.types.float,
    ref.types.float,
  ]],
  atan2: [ref.types.double, [
    ref.types.double,
    ref.types.double,
  ]],
  cosf: [ref.types.float, [
    ref.types.float,
  ]],
  cos: [ref.types.double, [
    ref.types.double,
  ]],
  sinf: [ref.types.float, [
    ref.types.float,
  ]],
  sin: [ref.types.double, [
    ref.types.double,
  ]],
  tanf: [ref.types.float, [
    ref.types.float,
  ]],
  tan: [ref.types.double, [
    ref.types.double,
  ]],
  acoshf: [ref.types.float, [
    ref.types.float,
  ]],
  acosh: [ref.types.double, [
    ref.types.double,
  ]],
  asinhf: [ref.types.float, [
    ref.types.float,
  ]],
  asinh: [ref.types.double, [
    ref.types.double,
  ]],
  atanhf: [ref.types.float, [
    ref.types.float,
  ]],
  atanh: [ref.types.double, [
    ref.types.double,
  ]],
  coshf: [ref.types.float, [
    ref.types.float,
  ]],
  cosh: [ref.types.double, [
    ref.types.double,
  ]],
  sinhf: [ref.types.float, [
    ref.types.float,
  ]],
  sinh: [ref.types.double, [
    ref.types.double,
  ]],
  tanhf: [ref.types.float, [
    ref.types.float,
  ]],
  tanh: [ref.types.double, [
    ref.types.double,
  ]],
  expf: [ref.types.float, [
    ref.types.float,
  ]],
  exp: [ref.types.double, [
    ref.types.double,
  ]],
  exp2f: [ref.types.float, [
    ref.types.float,
  ]],
  exp2: [ref.types.double, [
    ref.types.double,
  ]],
  expm1f: [ref.types.float, [
    ref.types.float,
  ]],
  expm1: [ref.types.double, [
    ref.types.double,
  ]],
  logf: [ref.types.float, [
    ref.types.float,
  ]],
  log: [ref.types.double, [
    ref.types.double,
  ]],
  log10f: [ref.types.float, [
    ref.types.float,
  ]],
  log10: [ref.types.double, [
    ref.types.double,
  ]],
  log2f: [ref.types.float, [
    ref.types.float,
  ]],
  log2: [ref.types.double, [
    ref.types.double,
  ]],
  log1pf: [ref.types.float, [
    ref.types.float,
  ]],
  log1p: [ref.types.double, [
    ref.types.double,
  ]],
  logbf: [ref.types.float, [
    ref.types.float,
  ]],
  logb: [ref.types.double, [
    ref.types.double,
  ]],
  modff: [ref.types.float, [
    ref.types.float,
    ref.refType(ref.types.float),
  ]],
  modf: [ref.types.double, [
    ref.types.double,
    ref.refType(ref.types.double),
  ]],
  ldexpf: [ref.types.float, [
    ref.types.float,
    ref.types.int32,
  ]],
  ldexp: [ref.types.double, [
    ref.types.double,
    ref.types.int32,
  ]],
  frexpf: [ref.types.float, [
    ref.types.float,
    ref.refType(ref.types.int32),
  ]],
  frexp: [ref.types.double, [
    ref.types.double,
    ref.refType(ref.types.int32),
  ]],
  ilogbf: [ref.types.int32, [
    ref.types.float,
  ]],
  ilogb: [ref.types.int32, [
    ref.types.double,
  ]],
  scalbnf: [ref.types.float, [
    ref.types.float,
    ref.types.int32,
  ]],
  scalbn: [ref.types.double, [
    ref.types.double,
    ref.types.int32,
  ]],
  scalblnf: [ref.types.float, [
    ref.types.float,
    ref.types.long,
  ]],
  scalbln: [ref.types.double, [
    ref.types.double,
    ref.types.long,
  ]],
  fabsf: [ref.types.float, [
    ref.types.float,
  ]],
  fabs: [ref.types.double, [
    ref.types.double,
  ]],
  cbrtf: [ref.types.float, [
    ref.types.float,
  ]],
  cbrt: [ref.types.double, [
    ref.types.double,
  ]],
  hypotf: [ref.types.float, [
    ref.types.float,
    ref.types.float,
  ]],
  hypot: [ref.types.double, [
    ref.types.double,
    ref.types.double,
  ]],
  powf: [ref.types.float, [
    ref.types.float,
    ref.types.float,
  ]],
  pow: [ref.types.double, [
    ref.types.double,
    ref.types.double,
  ]],
  sqrtf: [ref.types.float, [
    ref.types.float,
  ]],
  sqrt: [ref.types.double, [
    ref.types.double,
  ]],
  erff: [ref.types.float, [
    ref.types.float,
  ]],
  erf: [ref.types.double, [
    ref.types.double,
  ]],
  erfcf: [ref.types.float, [
    ref.types.float,
  ]],
  erfc: [ref.types.double, [
    ref.types.double,
  ]],
  lgammaf: [ref.types.float, [
    ref.types.float,
  ]],
  lgamma: [ref.types.double, [
    ref.types.double,
  ]],
  tgammaf: [ref.types.float, [
    ref.types.float,
  ]],
  tgamma: [ref.types.double, [
    ref.types.double,
  ]],
  ceilf: [ref.types.float, [
    ref.types.float,
  ]],
  ceil: [ref.types.double, [
    ref.types.double,
  ]],
  floorf: [ref.types.float, [
    ref.types.float,
  ]],
  floor: [ref.types.double, [
    ref.types.double,
  ]],
  nearbyintf: [ref.types.float, [
    ref.types.float,
  ]],
  nearbyint: [ref.types.double, [
    ref.types.double,
  ]],
  rintf: [ref.types.float, [
    ref.types.float,
  ]],
  rint: [ref.types.double, [
    ref.types.double,
  ]],
  lrintf: [ref.types.long, [
    ref.types.float,
  ]],
  lrint: [ref.types.long, [
    ref.types.double,
  ]],
  roundf: [ref.types.float, [
    ref.types.float,
  ]],
  round: [ref.types.double, [
    ref.types.double,
  ]],
  lroundf: [ref.types.long, [
    ref.types.float,
  ]],
  lround: [ref.types.long, [
    ref.types.double,
  ]],
  llrintf: [ref.types.longlong, [
    ref.types.float,
  ]],
  llrint: [ref.types.longlong, [
    ref.types.double,
  ]],
  llroundf: [ref.types.longlong, [
    ref.types.float,
  ]],
  llround: [ref.types.longlong, [
    ref.types.double,
  ]],
  truncf: [ref.types.float, [
    ref.types.float,
  ]],
  trunc: [ref.types.double, [
    ref.types.double,
  ]],
  fmodf: [ref.types.float, [
    ref.types.float,
    ref.types.float,
  ]],
  fmod: [ref.types.double, [
    ref.types.double,
    ref.types.double,
  ]],
  remainderf: [ref.types.float, [
    ref.types.float,
    ref.types.float,
  ]],
  remainder: [ref.types.double, [
    ref.types.double,
    ref.types.double,
  ]],
  remquof: [ref.types.float, [
    ref.types.float,
    ref.types.float,
    ref.refType(ref.types.int32),
  ]],
  remquo: [ref.types.double, [
    ref.types.double,
    ref.types.double,
    ref.refType(ref.types.int32),
  ]],
  copysignf: [ref.types.float, [
    ref.types.float,
    ref.types.float,
  ]],
  copysign: [ref.types.double, [
    ref.types.double,
    ref.types.double,
  ]],
  nanf: [ref.types.float, [
    ref.types.CString,
  ]],
  nan: [ref.types.double, [
    ref.types.CString,
  ]],
  nextafterf: [ref.types.float, [
    ref.types.float,
    ref.types.float,
  ]],
  nextafter: [ref.types.double, [
    ref.types.double,
    ref.types.double,
  ]],
  fdimf: [ref.types.float, [
    ref.types.float,
    ref.types.float,
  ]],
  fdim: [ref.types.double, [
    ref.types.double,
    ref.types.double,
  ]],
  fmaxf: [ref.types.float, [
    ref.types.float,
    ref.types.float,
  ]],
  fmax: [ref.types.double, [
    ref.types.double,
    ref.types.double,
  ]],
  fminf: [ref.types.float, [
    ref.types.float,
    ref.types.float,
  ]],
  fmin: [ref.types.double, [
    ref.types.double,
    ref.types.double,
  ]],
  fmaf: [ref.types.float, [
    ref.types.float,
    ref.types.float,
    ref.types.float,
  ]],
  fma: [ref.types.double, [
    ref.types.double,
    ref.types.double,
    ref.types.double,
  ]],
  __inff: [ref.types.float, [
  ]],
  __inf: [ref.types.double, [
  ]],
  __nan: [ref.types.float, [
  ]],
  __exp10f: [ref.types.float, [
    ref.types.float,
  ]],
  __exp10: [ref.types.double, [
    ref.types.double,
  ]],
  __sincosf: [ref.types.void, [
    ref.types.float,
    ref.refType(ref.types.float),
    ref.refType(ref.types.float),
  ]],
  __sincos: [ref.types.void, [
    ref.types.double,
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
  ]],
  __cospif: [ref.types.float, [
    ref.types.float,
  ]],
  __cospi: [ref.types.double, [
    ref.types.double,
  ]],
  __sinpif: [ref.types.float, [
    ref.types.float,
  ]],
  __sinpi: [ref.types.double, [
    ref.types.double,
  ]],
  __tanpif: [ref.types.float, [
    ref.types.float,
  ]],
  __tanpi: [ref.types.double, [
    ref.types.double,
  ]],
  __sincospif: [ref.types.void, [
    ref.types.float,
    ref.refType(ref.types.float),
    ref.refType(ref.types.float),
  ]],
  __sincospi: [ref.types.void, [
    ref.types.double,
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
  ]],
  __sincosf: [ref.types.void, [
    ref.types.float,
    ref.refType(ref.types.float),
    ref.refType(ref.types.float),
  ]],
  __sincos: [ref.types.void, [
    ref.types.double,
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
  ]],
  __sincospif: [ref.types.void, [
    ref.types.float,
    ref.refType(ref.types.float),
    ref.refType(ref.types.float),
  ]],
  __sincospi: [ref.types.void, [
    ref.types.double,
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
  ]],
  j0: [ref.types.double, [
    ref.types.double,
  ]],
  j1: [ref.types.double, [
    ref.types.double,
  ]],
  jn: [ref.types.double, [
    ref.types.int32,
    ref.types.double,
  ]],
  y0: [ref.types.double, [
    ref.types.double,
  ]],
  y1: [ref.types.double, [
    ref.types.double,
  ]],
  yn: [ref.types.double, [
    ref.types.int32,
    ref.types.double,
  ]],
  scalb: [ref.types.double, [
    ref.types.double,
    ref.types.double,
  ]],
  rinttol: [ref.types.long, [
    ref.types.double,
  ]],
  roundtol: [ref.types.long, [
    ref.types.double,
  ]],
  drem: [ref.types.double, [
    ref.types.double,
    ref.types.double,
  ]],
  finite: [ref.types.int32, [
    ref.types.double,
  ]],
  gamma: [ref.types.double, [
    ref.types.double,
  ]],
  significand: [ref.types.double, [
    ref.types.double,
  ]],
  matherr: [ref.types.int32, [
    voidPtr,
  ]],
  memchr: [voidPtr, [
    voidPtr,
    ref.types.int32,
    ref.types.ulong,
  ]],
  memcmp: [ref.types.int32, [
    voidPtr,
    voidPtr,
    ref.types.ulong,
  ]],
  memcpy: [voidPtr, [
    voidPtr,
    voidPtr,
    ref.types.ulong,
  ]],
  memmove: [voidPtr, [
    voidPtr,
    voidPtr,
    ref.types.ulong,
  ]],
  memset: [voidPtr, [
    voidPtr,
    ref.types.int32,
    ref.types.ulong,
  ]],
  strcat: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strchr: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
  ]],
  strcmp: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strcoll: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strcpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strcspn: [ref.types.ulong, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strerror: [ref.types.CString, [
    ref.types.int32,
  ]],
  strlen: [ref.types.ulong, [
    ref.types.CString,
  ]],
  strncat: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  strncmp: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  strncpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  strpbrk: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strrchr: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
  ]],
  strspn: [ref.types.ulong, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strstr: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strtok: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strxfrm: [ref.types.ulong, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  strtok_r: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    voidPtr,
  ]],
  strerror_r: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.ulong,
  ]],
  strdup: [ref.types.CString, [
    ref.types.CString,
  ]],
  memccpy: [voidPtr, [
    voidPtr,
    voidPtr,
    ref.types.int32,
    ref.types.ulong,
  ]],
  stpcpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  stpncpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  strndup: [ref.types.CString, [
    ref.types.CString,
    ref.types.ulong,
  ]],
  strnlen: [ref.types.ulong, [
    ref.types.CString,
    ref.types.ulong,
  ]],
  strsignal: [ref.types.CString, [
    ref.types.int32,
  ]],
  memset_s: [ref.types.int32, [
    voidPtr,
    ref.types.ulong,
    ref.types.int32,
    ref.types.ulong,
  ]],
  memmem: [voidPtr, [
    voidPtr,
    ref.types.ulong,
    voidPtr,
    ref.types.ulong,
  ]],
  memset_pattern4: [ref.types.void, [
    voidPtr,
    voidPtr,
    ref.types.ulong,
  ]],
  memset_pattern8: [ref.types.void, [
    voidPtr,
    voidPtr,
    ref.types.ulong,
  ]],
  memset_pattern16: [ref.types.void, [
    voidPtr,
    voidPtr,
    ref.types.ulong,
  ]],
  strcasestr: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strnstr: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  strlcat: [ref.types.ulong, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  strlcpy: [ref.types.ulong, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  strmode: [ref.types.void, [
    ref.types.int32,
    ref.types.CString,
  ]],
  strsep: [ref.types.CString, [
    voidPtr,
    ref.types.CString,
  ]],
  swab: [ref.types.void, [
    voidPtr,
    voidPtr,
    ref.types.long,
  ]],
  bcmp: [ref.types.int32, [
    voidPtr,
    voidPtr,
    ref.types.ulong,
  ]],
  bcopy: [ref.types.void, [
    voidPtr,
    voidPtr,
    ref.types.ulong,
  ]],
  bzero: [ref.types.void, [
    voidPtr,
    ref.types.ulong,
  ]],
  index: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
  ]],
  rindex: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
  ]],
  ffs: [ref.types.int32, [
    ref.types.int32,
  ]],
  strcasecmp: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strncasecmp: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  ffsl: [ref.types.int32, [
    ref.types.long,
  ]],
  ffsll: [ref.types.int32, [
    ref.types.longlong,
  ]],
  fls: [ref.types.int32, [
    ref.types.int32,
  ]],
  flsl: [ref.types.int32, [
    ref.types.long,
  ]],
  flsll: [ref.types.int32, [
    ref.types.longlong,
  ]],
  ___runetype: [ref.types.ulong, [
    ref.types.int32,
  ]],
  ___tolower: [ref.types.int32, [
    ref.types.int32,
  ]],
  ___toupper: [ref.types.int32, [
    ref.types.int32,
  ]],
  isascii: [ref.types.int32, [
    ref.types.int32,
  ]],
  __maskrune: [ref.types.int32, [
    ref.types.int32,
    ref.types.ulong,
  ]],
  __istype: [ref.types.int32, [
    ref.types.int32,
    ref.types.ulong,
  ]],
  __isctype: [ref.types.int32, [
    ref.types.int32,
    ref.types.ulong,
  ]],
  __toupper: [ref.types.int32, [
    ref.types.int32,
  ]],
  __tolower: [ref.types.int32, [
    ref.types.int32,
  ]],
  __wcwidth: [ref.types.int32, [
    ref.types.int32,
  ]],
  isalnum: [ref.types.int32, [
    ref.types.int32,
  ]],
  isalpha: [ref.types.int32, [
    ref.types.int32,
  ]],
  isblank: [ref.types.int32, [
    ref.types.int32,
  ]],
  iscntrl: [ref.types.int32, [
    ref.types.int32,
  ]],
  isdigit: [ref.types.int32, [
    ref.types.int32,
  ]],
  isgraph: [ref.types.int32, [
    ref.types.int32,
  ]],
  islower: [ref.types.int32, [
    ref.types.int32,
  ]],
  isprint: [ref.types.int32, [
    ref.types.int32,
  ]],
  ispunct: [ref.types.int32, [
    ref.types.int32,
  ]],
  isspace: [ref.types.int32, [
    ref.types.int32,
  ]],
  isupper: [ref.types.int32, [
    ref.types.int32,
  ]],
  isxdigit: [ref.types.int32, [
    ref.types.int32,
  ]],
  toascii: [ref.types.int32, [
    ref.types.int32,
  ]],
  tolower: [ref.types.int32, [
    ref.types.int32,
  ]],
  toupper: [ref.types.int32, [
    ref.types.int32,
  ]],
  digittoint: [ref.types.int32, [
    ref.types.int32,
  ]],
  ishexnumber: [ref.types.int32, [
    ref.types.int32,
  ]],
  isideogram: [ref.types.int32, [
    ref.types.int32,
  ]],
  isnumber: [ref.types.int32, [
    ref.types.int32,
  ]],
  isphonogram: [ref.types.int32, [
    ref.types.int32,
  ]],
  isrune: [ref.types.int32, [
    ref.types.int32,
  ]],
  isspecial: [ref.types.int32, [
    ref.types.int32,
  ]],
  asctime: [ref.types.CString, [
    voidPtr,
  ]],
  clock: [ref.types.ulong, [
  ]],
  ctime: [ref.types.CString, [
    time_tPtr,
  ]],
  difftime: [ref.types.double, [
    ref.types.long,
    ref.types.long,
  ]],
  getdate: [voidPtr, [
    ref.types.CString,
  ]],
  gmtime: [voidPtr, [
    time_tPtr,
  ]],
  localtime: [voidPtr, [
    time_tPtr,
  ]],
  mktime: [ref.types.long, [
    voidPtr,
  ]],
  strftime: [ref.types.ulong, [
    ref.types.CString,
    ref.types.ulong,
    ref.types.CString,
    voidPtr,
  ]],
  strptime: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    voidPtr,
  ]],
  time: [ref.types.long, [
    time_tPtr,
  ]],
  tzset: [ref.types.void, [
  ]],
  asctime_r: [ref.types.CString, [
    voidPtr,
    ref.types.CString,
  ]],
  ctime_r: [ref.types.CString, [
    time_tPtr,
    ref.types.CString,
  ]],
  gmtime_r: [voidPtr, [
    time_tPtr,
    voidPtr,
  ]],
  localtime_r: [voidPtr, [
    time_tPtr,
    voidPtr,
  ]],
  posix2time: [ref.types.long, [
    ref.types.long,
  ]],
  tzsetwall: [ref.types.void, [
  ]],
  time2posix: [ref.types.long, [
    ref.types.long,
  ]],
  timelocal: [ref.types.long, [
    voidPtr,
  ]],
  timegm: [ref.types.long, [
    voidPtr,
  ]],
  nanosleep: [ref.types.int32, [
    voidPtr,
    voidPtr,
  ]],
  __error: [ref.refType(ref.types.int32), [
  ]],
  localeconv: [voidPtr, [
  ]],
  setlocale: [ref.types.CString, [
    ref.types.int32,
    ref.types.CString,
  ]],
  CPLError: [ref.types.void, [
    ref.types.uint32,
    ref.types.int32,
    ref.types.CString,
  ]],
  CPLErrorV: [ref.types.void, [
    ref.types.uint32,
    ref.types.int32,
    ref.types.CString,
    __va_list_tag,
  ]],
  CPLEmergencyError: [ref.types.void, [
    ref.types.CString,
  ]],
  CPLErrorReset: [ref.types.void, [
  ]],
  CPLGetLastErrorNo: [ref.types.int32, [
  ]],
  CPLGetLastErrorType: [ref.types.uint32, [
  ]],
  CPLGetLastErrorMsg: [ref.types.CString, [
  ]],
  CPLGetErrorHandlerUserData: [voidPtr, [
  ]],
  CPLCleanupErrorMutex: [ref.types.void, [
  ]],
  CPLLoggingErrorHandler: [ref.types.void, [
    ref.types.uint32,
    ref.types.int32,
    ref.types.CString,
  ]],
  CPLDefaultErrorHandler: [ref.types.void, [
    ref.types.uint32,
    ref.types.int32,
    ref.types.CString,
  ]],
  CPLQuietErrorHandler: [ref.types.void, [
    ref.types.uint32,
    ref.types.int32,
    ref.types.CString,
  ]],
  CPLTurnFailureIntoWarning: [ref.types.void, [
    ref.types.int32,
  ]],
  CPLSetErrorHandler: [CPLErrorHandler, [
    CPLErrorHandler,
  ]],
  CPLSetErrorHandlerEx: [CPLErrorHandler, [
    CPLErrorHandler,
    voidPtr,
  ]],
  CPLPushErrorHandler: [ref.types.void, [
    CPLErrorHandler,
  ]],
  CPLPushErrorHandlerEx: [ref.types.void, [
    CPLErrorHandler,
    voidPtr,
  ]],
  CPLPopErrorHandler: [ref.types.void, [
  ]],
  CPLDebug: [ref.types.void, [
    ref.types.CString,
    ref.types.CString,
  ]],
  _CPLAssert: [ref.types.void, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  GDALDummyProgress: [ref.types.int32, [
    ref.types.double,
    ref.types.CString,
    voidPtr,
  ]],
  GDALTermProgress: [ref.types.int32, [
    ref.types.double,
    ref.types.CString,
    voidPtr,
  ]],
  GDALScaledProgress: [ref.types.int32, [
    ref.types.double,
    ref.types.CString,
    voidPtr,
  ]],
  GDALCreateScaledProgress: [voidPtr, [
    ref.types.double,
    ref.types.double,
    GDALProgressFunc,
    voidPtr,
  ]],
  GDALDestroyScaledProgress: [ref.types.void, [
    voidPtr,
  ]],
  getattrlistbulk: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
    voidPtr,
    ref.types.ulong,
    ref.types.ulonglong,
  ]],
  faccessat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
    ref.types.int32,
  ]],
  fchownat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.uint32,
    ref.types.uint32,
    ref.types.int32,
  ]],
  linkat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
  ]],
  readlinkat: [ref.types.long, [
    ref.types.int32,
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  symlinkat: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
    ref.types.CString,
  ]],
  unlinkat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
  ]],
  getattrlistat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    voidPtr,
    voidPtr,
    ref.types.ulong,
    ref.types.ulong,
  ]],
  _exit: [ref.types.void, [
    ref.types.int32,
  ]],
  access: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  alarm: [ref.types.uint32, [
    ref.types.uint32,
  ]],
  chdir: [ref.types.int32, [
    ref.types.CString,
  ]],
  chown: [ref.types.int32, [
    ref.types.CString,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  close: [ref.types.int32, [
    ref.types.int32,
  ]],
  dup: [ref.types.int32, [
    ref.types.int32,
  ]],
  dup2: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
  ]],
  execl: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  execle: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  execlp: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  execv: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
  ]],
  execve: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
    voidPtr,
  ]],
  execvp: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
  ]],
  fork: [ref.types.int32, [
  ]],
  fpathconf: [ref.types.long, [
    ref.types.int32,
    ref.types.int32,
  ]],
  getcwd: [ref.types.CString, [
    ref.types.CString,
    ref.types.ulong,
  ]],
  getegid: [ref.types.uint32, [
  ]],
  geteuid: [ref.types.uint32, [
  ]],
  getgid: [ref.types.uint32, [
  ]],
  getlogin: [ref.types.CString, [
  ]],
  getpgrp: [ref.types.int32, [
  ]],
  getpid: [ref.types.int32, [
  ]],
  getppid: [ref.types.int32, [
  ]],
  getuid: [ref.types.uint32, [
  ]],
  isatty: [ref.types.int32, [
    ref.types.int32,
  ]],
  link: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  lseek: [ref.types.longlong, [
    ref.types.int32,
    ref.types.longlong,
    ref.types.int32,
  ]],
  pathconf: [ref.types.long, [
    ref.types.CString,
    ref.types.int32,
  ]],
  pause: [ref.types.int32, [
  ]],
  pipe: [ref.types.int32, [
    ref.types.int32,
  ]],
  read: [ref.types.long, [
    ref.types.int32,
    voidPtr,
    ref.types.ulong,
  ]],
  rmdir: [ref.types.int32, [
    ref.types.CString,
  ]],
  setgid: [ref.types.int32, [
    ref.types.uint32,
  ]],
  setpgid: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
  ]],
  setsid: [ref.types.int32, [
  ]],
  setuid: [ref.types.int32, [
    ref.types.uint32,
  ]],
  sleep: [ref.types.uint32, [
    ref.types.uint32,
  ]],
  sysconf: [ref.types.long, [
    ref.types.int32,
  ]],
  tcgetpgrp: [ref.types.int32, [
    ref.types.int32,
  ]],
  tcsetpgrp: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
  ]],
  ttyname: [ref.types.CString, [
    ref.types.int32,
  ]],
  ttyname_r: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.ulong,
  ]],
  unlink: [ref.types.int32, [
    ref.types.CString,
  ]],
  write: [ref.types.long, [
    ref.types.int32,
    voidPtr,
    ref.types.ulong,
  ]],
  confstr: [ref.types.ulong, [
    ref.types.int32,
    ref.types.CString,
    ref.types.ulong,
  ]],
  brk: [voidPtr, [
    voidPtr,
  ]],
  chroot: [ref.types.int32, [
    ref.types.CString,
  ]],
  crypt: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  encrypt: [ref.types.void, [
    ref.types.CString,
    ref.types.int32,
  ]],
  fchdir: [ref.types.int32, [
    ref.types.int32,
  ]],
  gethostid: [ref.types.long, [
  ]],
  getpgid: [ref.types.int32, [
    ref.types.int32,
  ]],
  getsid: [ref.types.int32, [
    ref.types.int32,
  ]],
  getdtablesize: [ref.types.int32, [
  ]],
  getpagesize: [ref.types.int32, [
  ]],
  getpass: [ref.types.CString, [
    ref.types.CString,
  ]],
  getwd: [ref.types.CString, [
    ref.types.CString,
  ]],
  lchown: [ref.types.int32, [
    ref.types.CString,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  lockf: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
    ref.types.longlong,
  ]],
  nice: [ref.types.int32, [
    ref.types.int32,
  ]],
  pread: [ref.types.long, [
    ref.types.int32,
    voidPtr,
    ref.types.ulong,
    ref.types.longlong,
  ]],
  pwrite: [ref.types.long, [
    ref.types.int32,
    voidPtr,
    ref.types.ulong,
    ref.types.longlong,
  ]],
  sbrk: [voidPtr, [
    ref.types.int32,
  ]],
  setpgrp: [ref.types.int32, [
  ]],
  setregid: [ref.types.int32, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  setreuid: [ref.types.int32, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  swab: [ref.types.void, [
    voidPtr,
    voidPtr,
    ref.types.long,
  ]],
  sync: [ref.types.void, [
  ]],
  truncate: [ref.types.int32, [
    ref.types.CString,
    ref.types.longlong,
  ]],
  ualarm: [ref.types.uint32, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  usleep: [ref.types.int32, [
    ref.types.uint32,
  ]],
  vfork: [ref.types.int32, [
  ]],
  fsync: [ref.types.int32, [
    ref.types.int32,
  ]],
  ftruncate: [ref.types.int32, [
    ref.types.int32,
    ref.types.longlong,
  ]],
  getlogin_r: [ref.types.int32, [
    ref.types.CString,
    ref.types.ulong,
  ]],
  fchown: [ref.types.int32, [
    ref.types.int32,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  gethostname: [ref.types.int32, [
    ref.types.CString,
    ref.types.ulong,
  ]],
  readlink: [ref.types.long, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  setegid: [ref.types.int32, [
    ref.types.uint32,
  ]],
  seteuid: [ref.types.int32, [
    ref.types.uint32,
  ]],
  symlink: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  __darwin_fd_isset: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
  ]],
  pselect: [ref.types.int32, [
    ref.types.int32,
    fd_setPtr,
    fd_setPtr,
    fd_setPtr,
    voidPtr,
    sigset_tPtr,
  ]],
  select: [ref.types.int32, [
    ref.types.int32,
    fd_setPtr,
    fd_setPtr,
    fd_setPtr,
    voidPtr,
  ]],
  _Exit: [ref.types.void, [
    ref.types.int32,
  ]],
  accessx_np: [ref.types.int32, [
    voidPtr,
    ref.types.ulong,
    ref.refType(ref.types.int32),
    ref.types.uint32,
  ]],
  acct: [ref.types.int32, [
    ref.types.CString,
  ]],
  add_profil: [ref.types.int32, [
    ref.types.CString,
    ref.types.ulong,
    ref.types.ulong,
    ref.types.uint32,
  ]],
  endusershell: [ref.types.void, [
  ]],
  execvP: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    voidPtr,
  ]],
  fflagstostr: [ref.types.CString, [
    ref.types.ulong,
  ]],
  getdomainname: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  getgrouplist: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
    ref.refType(ref.types.int32),
    ref.refType(ref.types.int32),
  ]],
  gethostuuid: [ref.types.int32, [
    ref.types.uchar,
    voidPtr,
  ]],
  getmode: [ref.types.ushort, [
    voidPtr,
    ref.types.ushort,
  ]],
  getpeereid: [ref.types.int32, [
    ref.types.int32,
    uid_tPtr,
    gid_tPtr,
  ]],
  getsgroups_np: [ref.types.int32, [
    ref.refType(ref.types.int32),
    ref.types.uchar,
  ]],
  getusershell: [ref.types.CString, [
  ]],
  getwgroups_np: [ref.types.int32, [
    ref.refType(ref.types.int32),
    ref.types.uchar,
  ]],
  initgroups: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  iruserok: [ref.types.int32, [
    ref.types.ulong,
    ref.types.int32,
    ref.types.CString,
    ref.types.CString,
  ]],
  iruserok_sa: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
    ref.types.CString,
    ref.types.CString,
  ]],
  issetugid: [ref.types.int32, [
  ]],
  mkdtemp: [ref.types.CString, [
    ref.types.CString,
  ]],
  mknod: [ref.types.int32, [
    ref.types.CString,
    ref.types.ushort,
    ref.types.int32,
  ]],
  mkpath_np: [ref.types.int32, [
    ref.types.CString,
    ref.types.ushort,
  ]],
  mkstemp: [ref.types.int32, [
    ref.types.CString,
  ]],
  mkstemps: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  mktemp: [ref.types.CString, [
    ref.types.CString,
  ]],
  nfssvc: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
  ]],
  profil: [ref.types.int32, [
    ref.types.CString,
    ref.types.ulong,
    ref.types.ulong,
    ref.types.uint32,
  ]],
  pthread_setugid_np: [ref.types.int32, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  pthread_getugid_np: [ref.types.int32, [
    uid_tPtr,
    gid_tPtr,
  ]],
  rcmd: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.types.CString,
    ref.types.CString,
    ref.types.CString,
    ref.refType(ref.types.int32),
  ]],
  rcmd_af: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.types.CString,
    ref.types.CString,
    ref.types.CString,
    ref.refType(ref.types.int32),
    ref.types.int32,
  ]],
  reboot: [ref.types.int32, [
    ref.types.int32,
  ]],
  revoke: [ref.types.int32, [
    ref.types.CString,
  ]],
  rresvport: [ref.types.int32, [
    ref.refType(ref.types.int32),
  ]],
  rresvport_af: [ref.types.int32, [
    ref.refType(ref.types.int32),
    ref.types.int32,
  ]],
  ruserok: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
    ref.types.CString,
    ref.types.CString,
  ]],
  setdomainname: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  setgroups: [ref.types.int32, [
    ref.types.int32,
    gid_tPtr,
  ]],
  sethostid: [ref.types.void, [
    ref.types.long,
  ]],
  sethostname: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  setkey: [ref.types.void, [
    ref.types.CString,
  ]],
  setlogin: [ref.types.int32, [
    ref.types.CString,
  ]],
  setmode: [voidPtr, [
    ref.types.CString,
  ]],
  setrgid: [ref.types.int32, [
    ref.types.uint32,
  ]],
  setruid: [ref.types.int32, [
    ref.types.uint32,
  ]],
  setsgroups_np: [ref.types.int32, [
    ref.types.int32,
    ref.types.uchar,
  ]],
  setusershell: [ref.types.void, [
  ]],
  setwgroups_np: [ref.types.int32, [
    ref.types.int32,
    ref.types.uchar,
  ]],
  strtofflags: [ref.types.int32, [
    voidPtr,
    ref.refType(ref.types.ulong),
    ref.refType(ref.types.ulong),
  ]],
  swapon: [ref.types.int32, [
    ref.types.CString,
  ]],
  syscall: [ref.types.int32, [
    ref.types.int32,
  ]],
  ttyslot: [ref.types.int32, [
  ]],
  undelete: [ref.types.int32, [
    ref.types.CString,
  ]],
  unwhiteout: [ref.types.int32, [
    ref.types.CString,
  ]],
  valloc: [voidPtr, [
    ref.types.ulong,
  ]],
  getsubopt: [ref.types.int32, [
    voidPtr,
    voidPtr,
    voidPtr,
  ]],
  fgetattrlist: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
    voidPtr,
    ref.types.ulong,
    ref.types.uint32,
  ]],
  fsetattrlist: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
    voidPtr,
    ref.types.ulong,
    ref.types.uint32,
  ]],
  getattrlist: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
    voidPtr,
    ref.types.ulong,
    ref.types.uint32,
  ]],
  setattrlist: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
    voidPtr,
    ref.types.ulong,
    ref.types.uint32,
  ]],
  exchangedata: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.uint32,
  ]],
  getdirentriesattr: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
    voidPtr,
    ref.types.ulong,
    ref.refType(ref.types.uint32),
    ref.refType(ref.types.uint32),
    ref.refType(ref.types.uint32),
    ref.types.uint32,
  ]],
  searchfs: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
    ref.refType(ref.types.ulong),
    ref.types.uint32,
    ref.types.uint32,
    voidPtr,
  ]],
  fsctl: [ref.types.int32, [
    ref.types.CString,
    ref.types.ulong,
    voidPtr,
    ref.types.uint32,
  ]],
  ffsctl: [ref.types.int32, [
    ref.types.int32,
    ref.types.ulong,
    voidPtr,
    ref.types.uint32,
  ]],
  fsync_volume_np: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
  ]],
  sync_volume_np: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  chmod: [ref.types.int32, [
    ref.types.CString,
    ref.types.ushort,
  ]],
  fchmod: [ref.types.int32, [
    ref.types.int32,
    ref.types.ushort,
  ]],
  fstat: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
  ]],
  lstat: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
  ]],
  mkdir: [ref.types.int32, [
    ref.types.CString,
    ref.types.ushort,
  ]],
  mkfifo: [ref.types.int32, [
    ref.types.CString,
    ref.types.ushort,
  ]],
  stat: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
  ]],
  mknod: [ref.types.int32, [
    ref.types.CString,
    ref.types.ushort,
    ref.types.int32,
  ]],
  umask: [ref.types.ushort, [
    ref.types.ushort,
  ]],
  fchmodat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.ushort,
    ref.types.int32,
  ]],
  fstatat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    voidPtr,
    ref.types.int32,
  ]],
  mkdirat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.ushort,
  ]],
  chflags: [ref.types.int32, [
    ref.types.CString,
    ref.types.uint32,
  ]],
  chmodx_np: [ref.types.int32, [
    ref.types.CString,
    filesec_t,
  ]],
  fchflags: [ref.types.int32, [
    ref.types.int32,
    ref.types.uint32,
  ]],
  fchmodx_np: [ref.types.int32, [
    ref.types.int32,
    filesec_t,
  ]],
  fstatx_np: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
    filesec_t,
  ]],
  lchflags: [ref.types.int32, [
    ref.types.CString,
    ref.types.uint32,
  ]],
  lchmod: [ref.types.int32, [
    ref.types.CString,
    ref.types.ushort,
  ]],
  lstatx_np: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
    filesec_t,
  ]],
  mkdirx_np: [ref.types.int32, [
    ref.types.CString,
    filesec_t,
  ]],
  mkfifox_np: [ref.types.int32, [
    ref.types.CString,
    filesec_t,
  ]],
  statx_np: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
    filesec_t,
  ]],
  umaskx_np: [ref.types.int32, [
    filesec_t,
  ]],
  fstatx64_np: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
    filesec_t,
  ]],
  lstatx64_np: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
    filesec_t,
  ]],
  statx64_np: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
    filesec_t,
  ]],
  fstat64: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
  ]],
  lstat64: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
  ]],
  stat64: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
  ]],
  VSIFOpen: [FILEPtr, [
    ref.types.CString,
    ref.types.CString,
  ]],
  VSIFClose: [ref.types.int32, [
    FILEPtr,
  ]],
  VSIFSeek: [ref.types.int32, [
    FILEPtr,
    ref.types.long,
    ref.types.int32,
  ]],
  VSIFTell: [ref.types.long, [
    FILEPtr,
  ]],
  VSIRewind: [ref.types.void, [
    FILEPtr,
  ]],
  VSIFFlush: [ref.types.void, [
    FILEPtr,
  ]],
  VSIFRead: [ref.types.ulong, [
    voidPtr,
    ref.types.ulong,
    ref.types.ulong,
    FILEPtr,
  ]],
  VSIFWrite: [ref.types.ulong, [
    voidPtr,
    ref.types.ulong,
    ref.types.ulong,
    FILEPtr,
  ]],
  VSIFGets: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
    FILEPtr,
  ]],
  VSIFPuts: [ref.types.int32, [
    ref.types.CString,
    FILEPtr,
  ]],
  VSIFPrintf: [ref.types.int32, [
    FILEPtr,
    ref.types.CString,
  ]],
  VSIFGetc: [ref.types.int32, [
    FILEPtr,
  ]],
  VSIFPutc: [ref.types.int32, [
    ref.types.int32,
    FILEPtr,
  ]],
  VSIUngetc: [ref.types.int32, [
    ref.types.int32,
    FILEPtr,
  ]],
  VSIFEof: [ref.types.int32, [
    FILEPtr,
  ]],
  VSIStat: [ref.types.int32, [
    ref.types.CString,
    VSIStatBuf,
  ]],
  VSIFOpenL: [VSILFILEPtr, [
    ref.types.CString,
    ref.types.CString,
  ]],
  VSIFCloseL: [ref.types.int32, [
    VSILFILEPtr,
  ]],
  VSIFSeekL: [ref.types.int32, [
    VSILFILEPtr,
    ref.types.ulonglong,
    ref.types.int32,
  ]],
  VSIFTellL: [ref.types.ulonglong, [
    VSILFILEPtr,
  ]],
  VSIRewindL: [ref.types.void, [
    VSILFILEPtr,
  ]],
  VSIFReadL: [ref.types.ulong, [
    voidPtr,
    ref.types.ulong,
    ref.types.ulong,
    VSILFILEPtr,
  ]],
  VSIFReadMultiRangeL: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
    vsi_l_offsetPtr,
    size_tPtr,
    VSILFILEPtr,
  ]],
  VSIFWriteL: [ref.types.ulong, [
    voidPtr,
    ref.types.ulong,
    ref.types.ulong,
    VSILFILEPtr,
  ]],
  VSIFEofL: [ref.types.int32, [
    VSILFILEPtr,
  ]],
  VSIFTruncateL: [ref.types.int32, [
    VSILFILEPtr,
    ref.types.ulonglong,
  ]],
  VSIFFlushL: [ref.types.int32, [
    VSILFILEPtr,
  ]],
  VSIFPrintfL: [ref.types.int32, [
    VSILFILEPtr,
    ref.types.CString,
  ]],
  VSIFPutcL: [ref.types.int32, [
    ref.types.int32,
    VSILFILEPtr,
  ]],
  VSIIngestFile: [ref.types.int32, [
    VSILFILEPtr,
    ref.types.CString,
    voidPtr,
    vsi_l_offsetPtr,
    ref.types.longlong,
  ]],
  VSIStatL: [ref.types.int32, [
    ref.types.CString,
    VSIStatBufL,
  ]],
  VSIStatExL: [ref.types.int32, [
    ref.types.CString,
    VSIStatBufLPtr,
    ref.types.int32,
  ]],
  VSIIsCaseSensitiveFS: [ref.types.int32, [
    ref.types.CString,
  ]],
  VSIFGetNativeFileDescriptorL: [voidPtr, [
    VSILFILEPtr,
  ]],
  VSICalloc: [voidPtr, [
    ref.types.ulong,
    ref.types.ulong,
  ]],
  VSIMalloc: [voidPtr, [
    ref.types.ulong,
  ]],
  VSIFree: [ref.types.void, [
    voidPtr,
  ]],
  VSIRealloc: [voidPtr, [
    voidPtr,
    ref.types.ulong,
  ]],
  VSIStrdup: [ref.types.CString, [
    ref.types.CString,
  ]],
  VSIMalloc2: [voidPtr, [
    ref.types.ulong,
    ref.types.ulong,
  ]],
  VSIMalloc3: [voidPtr, [
    ref.types.ulong,
    ref.types.ulong,
    ref.types.ulong,
  ]],
  VSIReadDir: [voidPtr, [
    ref.types.CString,
  ]],
  VSIReadDirRecursive: [voidPtr, [
    ref.types.CString,
  ]],
  VSIMkdir: [ref.types.int32, [
    ref.types.CString,
    ref.types.long,
  ]],
  VSIRmdir: [ref.types.int32, [
    ref.types.CString,
  ]],
  VSIUnlink: [ref.types.int32, [
    ref.types.CString,
  ]],
  VSIRename: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  VSIStrerror: [ref.types.CString, [
    ref.types.int32,
  ]],
  VSIInstallMemFileHandler: [ref.types.void, [
  ]],
  VSIInstallLargeFileHandler: [ref.types.void, [
  ]],
  VSIInstallSubFileHandler: [ref.types.void, [
  ]],
  VSIInstallCurlFileHandler: [ref.types.void, [
  ]],
  VSIInstallCurlStreamingFileHandler: [ref.types.void, [
  ]],
  VSIInstallGZipFileHandler: [ref.types.void, [
  ]],
  VSIInstallZipFileHandler: [ref.types.void, [
  ]],
  VSIInstallStdinHandler: [ref.types.void, [
  ]],
  VSIInstallStdoutHandler: [ref.types.void, [
  ]],
  VSIInstallSparseFileHandler: [ref.types.void, [
  ]],
  VSIInstallTarFileHandler: [ref.types.void, [
  ]],
  VSICleanupFileManager: [ref.types.void, [
  ]],
  VSIFileFromMemBuffer: [VSILFILEPtr, [
    ref.types.CString,
    GByte,
    ref.types.ulonglong,
    ref.types.int32,
  ]],
  VSIGetMemFileBuffer: [GBytePtr, [
    ref.types.CString,
    vsi_l_offsetPtr,
    ref.types.int32,
  ]],
  VSITime: [ref.types.ulong, [
    ref.refType(ref.types.ulong),
  ]],
  VSICTime: [ref.types.CString, [
    ref.types.ulong,
  ]],
  VSIGMTime: [voidPtr, [
    time_tPtr,
    voidPtr,
  ]],
  VSILocalTime: [voidPtr, [
    time_tPtr,
    voidPtr,
  ]],
  CPLGetPageSize: [ref.types.ulong, [
  ]],
  CPLVirtualMemNew: [CPLVirtualMem, [
    ref.types.ulong,
    ref.types.ulong,
    ref.types.ulong,
    ref.types.int32,
    ref.types.uint32,
    CPLVirtualMemCachePageCbk,
    CPLVirtualMemUnCachePageCbk,
    CPLVirtualMemFreeUserData,
    voidPtr,
  ]],
  CPLIsVirtualMemFileMapAvailable: [ref.types.int32, [
  ]],
  CPLVirtualMemFileMapNew: [CPLVirtualMemPtr, [
    VSILFILEPtr,
    ref.types.ulonglong,
    ref.types.ulonglong,
    ref.types.uint32,
    CPLVirtualMemFreeUserData,
    voidPtr,
  ]],
  CPLVirtualMemDerivedNew: [CPLVirtualMemPtr, [
    CPLVirtualMemPtr,
    ref.types.ulonglong,
    ref.types.ulonglong,
    CPLVirtualMemFreeUserData,
    voidPtr,
  ]],
  CPLVirtualMemFree: [ref.types.void, [
    CPLVirtualMemPtr,
  ]],
  CPLVirtualMemGetAddr: [voidPtr, [
    CPLVirtualMemPtr,
  ]],
  CPLVirtualMemGetSize: [ref.types.ulong, [
    CPLVirtualMemPtr,
  ]],
  CPLVirtualMemIsFileMapping: [ref.types.int32, [
    CPLVirtualMemPtr,
  ]],
  CPLVirtualMemGetAccessMode: [ref.types.uint32, [
    CPLVirtualMemPtr,
  ]],
  CPLVirtualMemGetPageSize: [ref.types.ulong, [
    CPLVirtualMemPtr,
  ]],
  CPLVirtualMemIsAccessThreadSafe: [ref.types.int32, [
    CPLVirtualMemPtr,
  ]],
  CPLVirtualMemDeclareThread: [ref.types.void, [
    CPLVirtualMemPtr,
  ]],
  CPLVirtualMemUnDeclareThread: [ref.types.void, [
    CPLVirtualMemPtr,
  ]],
  CPLVirtualMemPin: [ref.types.void, [
    CPLVirtualMemPtr,
    voidPtr,
    ref.types.ulong,
    ref.types.int32,
  ]],
  CPLVirtualMemManagerTerminate: [ref.types.void, [
  ]],
  GDALGetDataTypeSize: [ref.types.int32, [
    ref.types.uint32,
  ]],
  GDALDataTypeIsComplex: [ref.types.int32, [
    ref.types.uint32,
  ]],
  GDALGetDataTypeName: [ref.types.CString, [
    ref.types.uint32,
  ]],
  GDALGetDataTypeByName: [ref.types.uint32, [
    ref.types.CString,
  ]],
  GDALDataTypeUnion: [ref.types.uint32, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  GDALGetAsyncStatusTypeName: [ref.types.CString, [
    ref.types.uint32,
  ]],
  GDALGetAsyncStatusTypeByName: [ref.types.uint32, [
    ref.types.CString,
  ]],
  GDALGetColorInterpretationName: [ref.types.CString, [
    ref.types.uint32,
  ]],
  GDALGetColorInterpretationByName: [ref.types.uint32, [
    ref.types.CString,
  ]],
  GDALGetPaletteInterpretationName: [ref.types.CString, [
    ref.types.uint32,
  ]],
  GDALAllRegister: [ref.types.void, [
  ]],
  GDALCreate: [GDALDatasetH, [
    GDALDriverH,
    ref.types.CString,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.uint32,
    voidPtr,
  ]],
  GDALCreateCopy: [GDALDatasetH, [
    GDALDriverH,
    ref.types.CString,
    GDALDatasetH,
    ref.types.int32,
    voidPtr,
    GDALProgressFunc,
    voidPtr,
  ]],
  GDALIdentifyDriver: [GDALDriverH, [
    ref.types.CString,
    voidPtr,
  ]],
  GDALOpen: [GDALDatasetH, [
    ref.types.CString,
    ref.types.uint32,
  ]],
  GDALOpenShared: [GDALDatasetH, [
    ref.types.CString,
    ref.types.uint32,
  ]],
  GDALDumpOpenDatasets: [ref.types.int32, [
    FILEPtr,
  ]],
  GDALGetDriverByName: [GDALDriverH, [
    ref.types.CString,
  ]],
  GDALGetDriverCount: [ref.types.int32, [
  ]],
  GDALGetDriver: [GDALDriverH, [
    ref.types.int32,
  ]],
  GDALDestroyDriver: [ref.types.void, [
    GDALDriverH,
  ]],
  GDALRegisterDriver: [ref.types.int32, [
    GDALDriverH,
  ]],
  GDALDeregisterDriver: [ref.types.void, [
    GDALDriverH,
  ]],
  GDALDestroyDriverManager: [ref.types.void, [
  ]],
  GDALDeleteDataset: [ref.types.uint32, [
    GDALDriverH,
    ref.types.CString,
  ]],
  GDALRenameDataset: [ref.types.uint32, [
    GDALDriverH,
    ref.types.CString,
    ref.types.CString,
  ]],
  GDALCopyDatasetFiles: [ref.types.uint32, [
    GDALDriverH,
    ref.types.CString,
    ref.types.CString,
  ]],
  GDALValidateCreationOptions: [ref.types.int32, [
    GDALDriverH,
    voidPtr,
  ]],
  GDALGetDriverShortName: [ref.types.CString, [
    GDALDriverH,
  ]],
  GDALGetDriverLongName: [ref.types.CString, [
    GDALDriverH,
  ]],
  GDALGetDriverHelpTopic: [ref.types.CString, [
    GDALDriverH,
  ]],
  GDALGetDriverCreationOptionList: [ref.types.CString, [
    GDALDriverH,
  ]],
  GDALInitGCPs: [ref.types.void, [
    ref.types.int32,
    GDAL_GCPPtr,
  ]],
  GDALDeinitGCPs: [ref.types.void, [
    ref.types.int32,
    GDAL_GCPPtr,
  ]],
  GDALDuplicateGCPs: [GDAL_GCPPtr, [
    ref.types.int32,
    GDAL_GCPPtr,
  ]],
  GDALGCPsToGeoTransform: [ref.types.int32, [
    ref.types.int32,
    GDAL_GCPPtr,
    ref.refType(ref.types.double),
    ref.types.int32,
  ]],
  GDALInvGeoTransform: [ref.types.int32, [
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
  ]],
  GDALApplyGeoTransform: [ref.types.void, [
    ref.refType(ref.types.double),
    ref.types.double,
    ref.types.double,
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
  ]],
  GDALComposeGeoTransforms: [ref.types.void, [
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
  ]],
  GDALGetMetadataDomainList: [voidPtr, [
    GDALMajorObjectH,
  ]],
  GDALGetMetadata: [voidPtr, [
    GDALMajorObjectH,
    ref.types.CString,
  ]],
  GDALSetMetadata: [ref.types.uint32, [
    GDALMajorObjectH,
    voidPtr,
    ref.types.CString,
  ]],
  GDALGetMetadataItem: [ref.types.CString, [
    GDALMajorObjectH,
    ref.types.CString,
    ref.types.CString,
  ]],
  GDALSetMetadataItem: [ref.types.uint32, [
    GDALMajorObjectH,
    ref.types.CString,
    ref.types.CString,
    ref.types.CString,
  ]],
  GDALGetDescription: [ref.types.CString, [
    GDALMajorObjectH,
  ]],
  GDALSetDescription: [ref.types.void, [
    GDALMajorObjectH,
    ref.types.CString,
  ]],
  GDALGetDatasetDriver: [GDALDriverH, [
    GDALDatasetH,
  ]],
  GDALGetFileList: [voidPtr, [
    GDALDatasetH,
  ]],
  GDALClose: [ref.types.void, [
    GDALDatasetH,
  ]],
  GDALGetRasterXSize: [ref.types.int32, [
    GDALDatasetH,
  ]],
  GDALGetRasterYSize: [ref.types.int32, [
    GDALDatasetH,
  ]],
  GDALGetRasterCount: [ref.types.int32, [
    GDALDatasetH,
  ]],
  GDALGetRasterBand: [GDALRasterBandH, [
    GDALDatasetH,
    ref.types.int32,
  ]],
  GDALAddBand: [ref.types.uint32, [
    GDALDatasetH,
    ref.types.uint32,
    voidPtr,
  ]],
  GDALBeginAsyncReader: [GDALAsyncReaderH, [
    GDALDatasetH,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    voidPtr,
    ref.types.int32,
    ref.types.int32,
    ref.types.uint32,
    ref.types.int32,
    ref.refType(ref.types.int32),
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    voidPtr,
  ]],
  GDALEndAsyncReader: [ref.types.void, [
    GDALDatasetH,
    GDALAsyncReaderH,
  ]],
  GDALDatasetRasterIO: [ref.types.uint32, [
    GDALDatasetH,
    ref.types.uint32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    voidPtr,
    ref.types.int32,
    ref.types.int32,
    ref.types.uint32,
    ref.types.int32,
    ref.refType(ref.types.int32),
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
  ]],
  GDALDatasetAdviseRead: [ref.types.uint32, [
    GDALDatasetH,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.uint32,
    ref.types.int32,
    ref.refType(ref.types.int32),
    voidPtr,
  ]],
  GDALGetProjectionRef: [ref.types.CString, [
    GDALDatasetH,
  ]],
  GDALSetProjection: [ref.types.uint32, [
    GDALDatasetH,
    ref.types.CString,
  ]],
  GDALGetGeoTransform: [ref.types.uint32, [
    GDALDatasetH,
    ref.refType(ref.types.double),
  ]],
  GDALSetGeoTransform: [ref.types.uint32, [
    GDALDatasetH,
    ref.refType(ref.types.double),
  ]],
  GDALGetGCPCount: [ref.types.int32, [
    GDALDatasetH,
  ]],
  GDALGetGCPProjection: [ref.types.CString, [
    GDALDatasetH,
  ]],
  GDALGetGCPs: [GDAL_GCPPtr, [
    GDALDatasetH,
  ]],
  GDALSetGCPs: [ref.types.uint32, [
    GDALDatasetH,
    ref.types.int32,
    GDAL_GCPPtr,
    ref.types.CString,
  ]],
  GDALGetInternalHandle: [voidPtr, [
    GDALDatasetH,
    ref.types.CString,
  ]],
  GDALReferenceDataset: [ref.types.int32, [
    GDALDatasetH,
  ]],
  GDALDereferenceDataset: [ref.types.int32, [
    GDALDatasetH,
  ]],
  GDALBuildOverviews: [ref.types.uint32, [
    GDALDatasetH,
    ref.types.CString,
    ref.types.int32,
    ref.refType(ref.types.int32),
    ref.types.int32,
    ref.refType(ref.types.int32),
    GDALProgressFunc,
    voidPtr,
  ]],
  GDALGetOpenDatasets: [ref.types.void, [
    voidPtr,
    ref.refType(ref.types.int32),
  ]],
  GDALGetAccess: [ref.types.int32, [
    GDALDatasetH,
  ]],
  GDALFlushCache: [ref.types.void, [
    GDALDatasetH,
  ]],
  GDALCreateDatasetMaskBand: [ref.types.uint32, [
    GDALDatasetH,
    ref.types.int32,
  ]],
  GDALDatasetCopyWholeRaster: [ref.types.uint32, [
    GDALDatasetH,
    GDALDatasetH,
    voidPtr,
    GDALProgressFunc,
    voidPtr,
  ]],
  GDALRasterBandCopyWholeRaster: [ref.types.uint32, [
    GDALRasterBandH,
    GDALRasterBandH,
    voidPtr,
    GDALProgressFunc,
    voidPtr,
  ]],
  GDALRegenerateOverviews: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.int32,
    GDALRasterBandHPtr,
    ref.types.CString,
    GDALProgressFunc,
    voidPtr,
  ]],
  GDALGetRasterDataType: [ref.types.uint32, [
    GDALRasterBandH,
  ]],
  GDALGetBlockSize: [ref.types.void, [
    GDALRasterBandH,
    ref.refType(ref.types.int32),
    ref.refType(ref.types.int32),
  ]],
  GDALRasterAdviseRead: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.uint32,
    voidPtr,
  ]],
  GDALRasterIO: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.uint32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    voidPtr,
    ref.types.int32,
    ref.types.int32,
    ref.types.uint32,
    ref.types.int32,
    ref.types.int32,
  ]],
  GDALReadBlock: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.int32,
    ref.types.int32,
    voidPtr,
  ]],
  GDALWriteBlock: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.int32,
    ref.types.int32,
    voidPtr,
  ]],
  GDALGetRasterBandXSize: [ref.types.int32, [
    GDALRasterBandH,
  ]],
  GDALGetRasterBandYSize: [ref.types.int32, [
    GDALRasterBandH,
  ]],
  GDALGetRasterAccess: [ref.types.uint32, [
    GDALRasterBandH,
  ]],
  GDALGetBandNumber: [ref.types.int32, [
    GDALRasterBandH,
  ]],
  GDALGetBandDataset: [GDALDatasetH, [
    GDALRasterBandH,
  ]],
  GDALGetRasterColorInterpretation: [ref.types.uint32, [
    GDALRasterBandH,
  ]],
  GDALSetRasterColorInterpretation: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.uint32,
  ]],
  GDALGetRasterColorTable: [GDALColorTableH, [
    GDALRasterBandH,
  ]],
  GDALSetRasterColorTable: [ref.types.uint32, [
    GDALRasterBandH,
    GDALColorTableH,
  ]],
  GDALHasArbitraryOverviews: [ref.types.int32, [
    GDALRasterBandH,
  ]],
  GDALGetOverviewCount: [ref.types.int32, [
    GDALRasterBandH,
  ]],
  GDALGetOverview: [GDALRasterBandH, [
    GDALRasterBandH,
    ref.types.int32,
  ]],
  GDALGetRasterNoDataValue: [ref.types.double, [
    GDALRasterBandH,
    ref.refType(ref.types.int32),
  ]],
  GDALSetRasterNoDataValue: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.double,
  ]],
  GDALGetRasterCategoryNames: [voidPtr, [
    GDALRasterBandH,
  ]],
  GDALSetRasterCategoryNames: [ref.types.uint32, [
    GDALRasterBandH,
    voidPtr,
  ]],
  GDALGetRasterMinimum: [ref.types.double, [
    GDALRasterBandH,
    ref.refType(ref.types.int32),
  ]],
  GDALGetRasterMaximum: [ref.types.double, [
    GDALRasterBandH,
    ref.refType(ref.types.int32),
  ]],
  GDALGetRasterStatistics: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.int32,
    ref.types.int32,
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
  ]],
  GDALComputeRasterStatistics: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.int32,
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
    GDALProgressFunc,
    voidPtr,
  ]],
  GDALSetRasterStatistics: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.double,
    ref.types.double,
    ref.types.double,
    ref.types.double,
  ]],
  GDALGetRasterUnitType: [ref.types.CString, [
    GDALRasterBandH,
  ]],
  GDALSetRasterUnitType: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.CString,
  ]],
  GDALGetRasterOffset: [ref.types.double, [
    GDALRasterBandH,
    ref.refType(ref.types.int32),
  ]],
  GDALSetRasterOffset: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.double,
  ]],
  GDALGetRasterScale: [ref.types.double, [
    GDALRasterBandH,
    ref.refType(ref.types.int32),
  ]],
  GDALSetRasterScale: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.double,
  ]],
  GDALComputeRasterMinMax: [ref.types.void, [
    GDALRasterBandH,
    ref.types.int32,
    ref.types.double,
  ]],
  GDALFlushRasterCache: [ref.types.uint32, [
    GDALRasterBandH,
  ]],
  GDALGetRasterHistogram: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.double,
    ref.types.double,
    ref.types.int32,
    ref.refType(ref.types.int32),
    ref.types.int32,
    ref.types.int32,
    GDALProgressFunc,
    voidPtr,
  ]],
  GDALGetDefaultHistogram: [ref.types.uint32, [
    GDALRasterBandH,
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
    ref.refType(ref.types.int32),
    voidPtr,
    ref.types.int32,
    GDALProgressFunc,
    voidPtr,
  ]],
  GDALSetDefaultHistogram: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.double,
    ref.types.double,
    ref.types.int32,
    ref.refType(ref.types.int32),
  ]],
  GDALGetRandomRasterSample: [ref.types.int32, [
    GDALRasterBandH,
    ref.types.int32,
    ref.refType(ref.types.float),
  ]],
  GDALGetRasterSampleOverview: [GDALRasterBandH, [
    GDALRasterBandH,
    ref.types.int32,
  ]],
  GDALFillRaster: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.double,
    ref.types.double,
  ]],
  GDALComputeBandStats: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.int32,
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
    GDALProgressFunc,
    voidPtr,
  ]],
  GDALOverviewMagnitudeCorrection: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.int32,
    GDALRasterBandHPtr,
    GDALProgressFunc,
    voidPtr,
  ]],
  GDALGetDefaultRAT: [GDALRasterAttributeTableH, [
    GDALRasterBandH,
  ]],
  GDALSetDefaultRAT: [ref.types.uint32, [
    GDALRasterBandH,
    GDALRasterAttributeTableH,
  ]],
  GDALAddDerivedBandPixelFunc: [ref.types.uint32, [
    ref.types.CString,
    GDALDerivedPixelFunc,
  ]],
  GDALGetMaskBand: [GDALRasterBandH, [
    GDALRasterBandH,
  ]],
  GDALGetMaskFlags: [ref.types.int32, [
    GDALRasterBandH,
  ]],
  GDALCreateMaskBand: [ref.types.uint32, [
    GDALRasterBandH,
    ref.types.int32,
  ]],
  GDALARGetNextUpdatedRegion: [ref.types.uint32, [
    GDALAsyncReaderH,
    ref.types.double,
    ref.refType(ref.types.int32),
    ref.refType(ref.types.int32),
    ref.refType(ref.types.int32),
    ref.refType(ref.types.int32),
  ]],
  GDALARLockBuffer: [ref.types.int32, [
    GDALAsyncReaderH,
    ref.types.double,
  ]],
  GDALARUnlockBuffer: [ref.types.void, [
    GDALAsyncReaderH,
  ]],
  GDALGeneralCmdLineProcessor: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
    ref.types.int32,
  ]],
  GDALSwapWords: [ref.types.void, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
  ]],
  GDALCopyWords: [ref.types.void, [
    voidPtr,
    ref.types.uint32,
    ref.types.int32,
    voidPtr,
    ref.types.uint32,
    ref.types.int32,
    ref.types.int32,
  ]],
  GDALCopyBits: [ref.types.void, [
    GBytePtr,
    ref.types.int32,
    ref.types.int32,
    GBytePtr,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
  ]],
  GDALLoadWorldFile: [ref.types.int32, [
    ref.types.CString,
    ref.refType(ref.types.double),
  ]],
  GDALReadWorldFile: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.refType(ref.types.double),
  ]],
  GDALWriteWorldFile: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.refType(ref.types.double),
  ]],
  GDALLoadTabFile: [ref.types.int32, [
    ref.types.CString,
    ref.refType(ref.types.double),
    voidPtr,
    ref.refType(ref.types.int32),
    voidPtr,
  ]],
  GDALReadTabFile: [ref.types.int32, [
    ref.types.CString,
    ref.refType(ref.types.double),
    voidPtr,
    ref.refType(ref.types.int32),
    voidPtr,
  ]],
  GDALLoadOziMapFile: [ref.types.int32, [
    ref.types.CString,
    ref.refType(ref.types.double),
    voidPtr,
    ref.refType(ref.types.int32),
    voidPtr,
  ]],
  GDALReadOziMapFile: [ref.types.int32, [
    ref.types.CString,
    ref.refType(ref.types.double),
    voidPtr,
    ref.refType(ref.types.int32),
    voidPtr,
  ]],
  GDALLoadRPBFile: [voidPtr, [
    ref.types.CString,
    voidPtr,
  ]],
  GDALLoadRPCFile: [voidPtr, [
    ref.types.CString,
    voidPtr,
  ]],
  GDALWriteRPBFile: [ref.types.uint32, [
    ref.types.CString,
    voidPtr,
  ]],
  GDALLoadIMDFile: [voidPtr, [
    ref.types.CString,
    voidPtr,
  ]],
  GDALWriteIMDFile: [ref.types.uint32, [
    ref.types.CString,
    voidPtr,
  ]],
  GDALDecToDMS: [ref.types.CString, [
    ref.types.double,
    ref.types.CString,
    ref.types.int32,
  ]],
  GDALPackedDMSToDec: [ref.types.double, [
    ref.types.double,
  ]],
  GDALDecToPackedDMS: [ref.types.double, [
    ref.types.double,
  ]],
  GDALVersionInfo: [ref.types.CString, [
    ref.types.CString,
  ]],
  GDALCheckVersion: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
    ref.types.CString,
  ]],
  GDALExtractRPCInfo: [ref.types.int32, [
    voidPtr,
    GDALRPCInfoPtr,
  ]],
  GDALCreateColorTable: [GDALColorTableH, [
    ref.types.uint32,
  ]],
  GDALDestroyColorTable: [ref.types.void, [
    GDALColorTableH,
  ]],
  GDALCloneColorTable: [GDALColorTableH, [
    GDALColorTableH,
  ]],
  GDALGetPaletteInterpretation: [ref.types.uint32, [
    GDALColorTableH,
  ]],
  GDALGetColorEntryCount: [ref.types.int32, [
    GDALColorTableH,
  ]],
  GDALGetColorEntry: [GDALColorEntryPtr, [
    GDALColorTableH,
    ref.types.int32,
  ]],
  GDALGetColorEntryAsRGB: [ref.types.int32, [
    GDALColorTableH,
    ref.types.int32,
    GDALColorEntryPtr,
  ]],
  GDALSetColorEntry: [ref.types.void, [
    GDALColorTableH,
    ref.types.int32,
    GDALColorEntryPtr,
  ]],
  GDALCreateColorRamp: [ref.types.void, [
    GDALColorTableH,
    ref.types.int32,
    GDALColorEntryPtr,
    ref.types.int32,
    GDALColorEntryPtr,
  ]],
  GDALCreateRasterAttributeTable: [GDALRasterAttributeTableH, [
  ]],
  GDALDestroyRasterAttributeTable: [ref.types.void, [
    GDALRasterAttributeTableH,
  ]],
  GDALRATGetColumnCount: [ref.types.int32, [
    GDALRasterAttributeTableH,
  ]],
  GDALRATGetNameOfCol: [ref.types.CString, [
    GDALRasterAttributeTableH,
    ref.types.int32,
  ]],
  GDALRATGetUsageOfCol: [ref.types.uint32, [
    GDALRasterAttributeTableH,
    ref.types.int32,
  ]],
  GDALRATGetTypeOfCol: [ref.types.uint32, [
    GDALRasterAttributeTableH,
    ref.types.int32,
  ]],
  GDALRATGetColOfUsage: [ref.types.int32, [
    GDALRasterAttributeTableH,
    ref.types.uint32,
  ]],
  GDALRATGetRowCount: [ref.types.int32, [
    GDALRasterAttributeTableH,
  ]],
  GDALRATGetValueAsString: [ref.types.CString, [
    GDALRasterAttributeTableH,
    ref.types.int32,
    ref.types.int32,
  ]],
  GDALRATGetValueAsInt: [ref.types.int32, [
    GDALRasterAttributeTableH,
    ref.types.int32,
    ref.types.int32,
  ]],
  GDALRATGetValueAsDouble: [ref.types.double, [
    GDALRasterAttributeTableH,
    ref.types.int32,
    ref.types.int32,
  ]],
  GDALRATSetValueAsString: [ref.types.void, [
    GDALRasterAttributeTableH,
    ref.types.int32,
    ref.types.int32,
    ref.types.CString,
  ]],
  GDALRATSetValueAsInt: [ref.types.void, [
    GDALRasterAttributeTableH,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
  ]],
  GDALRATSetValueAsDouble: [ref.types.void, [
    GDALRasterAttributeTableH,
    ref.types.int32,
    ref.types.int32,
    ref.types.double,
  ]],
  GDALRATChangesAreWrittenToFile: [ref.types.int32, [
    GDALRasterAttributeTableH,
  ]],
  GDALRATValuesIOAsDouble: [ref.types.uint32, [
    GDALRasterAttributeTableH,
    ref.types.uint32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.refType(ref.types.double),
  ]],
  GDALRATValuesIOAsInteger: [ref.types.uint32, [
    GDALRasterAttributeTableH,
    ref.types.uint32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.refType(ref.types.int32),
  ]],
  GDALRATValuesIOAsString: [ref.types.uint32, [
    GDALRasterAttributeTableH,
    ref.types.uint32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    voidPtr,
  ]],
  GDALRATSetRowCount: [ref.types.void, [
    GDALRasterAttributeTableH,
    ref.types.int32,
  ]],
  GDALRATCreateColumn: [ref.types.uint32, [
    GDALRasterAttributeTableH,
    ref.types.CString,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  GDALRATSetLinearBinning: [ref.types.uint32, [
    GDALRasterAttributeTableH,
    ref.types.double,
    ref.types.double,
  ]],
  GDALRATGetLinearBinning: [ref.types.int32, [
    GDALRasterAttributeTableH,
    ref.refType(ref.types.double),
    ref.refType(ref.types.double),
  ]],
  GDALRATInitializeFromColorTable: [ref.types.uint32, [
    GDALRasterAttributeTableH,
    GDALColorTableH,
  ]],
  GDALRATTranslateToColorTable: [GDALColorTableH, [
    GDALRasterAttributeTableH,
    ref.types.int32,
  ]],
  GDALRATDumpReadable: [ref.types.void, [
    GDALRasterAttributeTableH,
    FILEPtr,
  ]],
  GDALRATClone: [GDALRasterAttributeTableH, [
    GDALRasterAttributeTableH,
  ]],
  GDALRATGetRowOfValue: [ref.types.int32, [
    GDALRasterAttributeTableH,
    ref.types.double,
  ]],
  GDALSetCacheMax: [ref.types.void, [
    ref.types.int32,
  ]],
  GDALGetCacheMax: [ref.types.int32, [
  ]],
  GDALGetCacheUsed: [ref.types.int32, [
  ]],
  GDALSetCacheMax64: [ref.types.void, [
    ref.types.longlong,
  ]],
  GDALGetCacheMax64: [ref.types.longlong, [
  ]],
  GDALGetCacheUsed64: [ref.types.longlong, [
  ]],
  GDALFlushCacheBlock: [ref.types.int32, [
  ]],
  GDALDatasetGetVirtualMem: [CPLVirtualMemPtr, [
    GDALDatasetH,
    ref.types.uint32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.uint32,
    ref.types.int32,
    ref.refType(ref.types.int32),
    ref.types.int32,
    ref.types.longlong,
    ref.types.longlong,
    ref.types.ulong,
    ref.types.ulong,
    ref.types.int32,
    voidPtr,
  ]],
  GDALRasterBandGetVirtualMem: [CPLVirtualMemPtr, [
    GDALRasterBandH,
    ref.types.uint32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.uint32,
    ref.types.int32,
    ref.types.longlong,
    ref.types.ulong,
    ref.types.ulong,
    ref.types.int32,
    voidPtr,
  ]],
  GDALGetVirtualMemAuto: [CPLVirtualMemPtr, [
    GDALRasterBandH,
    ref.types.uint32,
    ref.refType(ref.types.int32),
    GIntBig,
    voidPtr,
  ]],
  GDALDatasetGetTiledVirtualMem: [CPLVirtualMemPtr, [
    GDALDatasetH,
    ref.types.uint32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.uint32,
    ref.types.int32,
    ref.refType(ref.types.int32),
    ref.types.uint32,
    ref.types.ulong,
    ref.types.int32,
    voidPtr,
  ]],
  GDALRasterBandGetTiledVirtualMem: [CPLVirtualMemPtr, [
    GDALRasterBandH,
    ref.types.uint32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.uint32,
    ref.types.ulong,
    ref.types.int32,
    voidPtr,
  ]],
});

