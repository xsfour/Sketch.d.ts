/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibAuxiliaryActionConnector<T = any> extends cocoa.NSNibConnector {
    trigger<R = cocoa.NSString>(): R;
    setTrigger<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSNibAuxiliaryActionConnector<T = any> extends cocoa.classes.NSNibConnector {
      alloc<R = NSNibAuxiliaryActionConnector>(): R;
      new: <R = NSNibAuxiliaryActionConnector>() => R;
      classFallbacksForKeyedArchiver<R = unknown>(): R;
    }
  }
}

declare const NSNibAuxiliaryActionConnector: cocoa.classes.NSNibAuxiliaryActionConnector;
