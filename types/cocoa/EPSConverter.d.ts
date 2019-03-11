/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface EPSConverter<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    converterReleased<R = void>(): R;
    converterMessage<R = void, P0 = unknown>(_converterMessage: P0): R;
    converterProgress<R = void>(): R;
    endPageNumber_info<R = void, P0 = number, P1 = unknown>(_endPageNumber: P0, _info: P1): R;
    beginPageNumber_info<R = void, P0 = number, P1 = unknown>(_beginPageNumber: P0, _info: P1): R;
    endDocumentSucceeded<R = void, P0 = boolean>(_endDocumentSucceeded: P0): R;
    beginDocument<R = void>(): R;
    convertEPSWithProvider_consumer<R = boolean, P0 = cocoa.CGDataProvider, P1 = cocoa.CGDataConsumer>(_convertEPSWithProvider: P0, _consumer: P1): R;
    convertEPSAtURL_progressBlock<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_convertEPSAtURL: P0, _progressBlock: P1): R;
    convertEPSData_progressBlock<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_convertEPSData: P0, _progressBlock: P1): R;
    convertEPSAtURL_toURL_progressBlock<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_convertEPSAtURL: P0, _toURL: P1, _progressBlock: P2): R;
    progressBlock<R = cocoa.CDUnknownBlockType>(): R;
    setProgressBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface EPSConverter<T = any> extends cocoa.classes.NSObject {
      alloc<R = EPSConverter>(): R;
      new: <R = EPSConverter>() => R;
    }
  }
}

declare const EPSConverter: cocoa.classes.EPSConverter;
