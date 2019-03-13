/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SCKAPIEnvironment<T = any> {
    // + SCKAPIEnvironment(Representable):
    suffixRepresentation<R = NSString>(): R;
  }
  namespace classes {
    export interface SCKAPIEnvironment<T = any> {
      // + SCKAPIEnvironment(Representable):
      
    }
  }
}

declare const SCKAPIEnvironment: cocoa.classes.SCKAPIEnvironment;
