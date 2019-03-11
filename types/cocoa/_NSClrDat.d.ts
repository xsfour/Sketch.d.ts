/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSClrDat<T = any> extends cocoa.NSConcreteData {
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    _allowsDirectEncoding<R = boolean>(): R;
    _canReplaceWithDispatchDataForXPCCoder<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSClrDat<T = any> extends cocoa.classes.NSConcreteData {  }
  }
}
