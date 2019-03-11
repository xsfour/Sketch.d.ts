/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCalendar<T = any> {
    // + NSCalendar(NSCalendar):
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
  }
  namespace classes {
    export interface NSCalendar<T = any> {
      // + NSCalendar(NSCalendar):
      
    }
  }
}

declare const NSCalendar: cocoa.classes.NSCalendar;
