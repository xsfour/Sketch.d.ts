/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PDFOperatorInfo<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    methodName<R = cocoa.NSString>(): R;
    setMethodName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    operatorName<R = cocoa.NSString>(): R;
    setOperatorName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    callback<R = cocoa.CDUnknownFunctionPointerType>(): R;
    setCallback<R = void, P0 = cocoa.CDUnknownFunctionPointerType>(_v: P0): R;
    selector<R = string>(): R;
    setSelector<R = void, P0 = string>(_v: P0): R;
  }
  namespace classes {
    export interface PDFOperatorInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = PDFOperatorInfo>(): R;
      new: <R = PDFOperatorInfo>() => R;
    }
  }
}

declare const PDFOperatorInfo: cocoa.classes.PDFOperatorInfo;
