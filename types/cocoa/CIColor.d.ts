/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CIColor<T = any> {
    // + CIColor(NSAppKitAdditions):
    initWithColor<R = unknown, P0 = unknown>(_initWithColor: P0): R;
  }
  namespace classes {
    export interface CIColor<T = any> {
      // + CIColor(NSAppKitAdditions):
      
    }
  }
}

declare const CIColor: cocoa.classes.CIColor;
