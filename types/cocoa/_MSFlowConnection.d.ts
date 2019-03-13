/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSFlowConnection<T = any> extends MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    destinationArtboardID<R = NSString>(): R;
    setDestinationArtboardID<R = void, P0 = NSString>(_v: P0): R;
    animationType<R = number>(): R;
    setAnimationType<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSFlowConnection<T = any> extends MSModelObject {
      alloc<R = _MSFlowConnection>(): R;
      new: <R = _MSFlowConnection>() => R;
    }
  }
}
