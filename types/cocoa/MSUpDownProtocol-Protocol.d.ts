/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownProtocolProtocol<T = any> extends cocoa.NSObjectProtocol {
    maximum<R = cocoa.NSNumber>(): R;
    minimum<R = cocoa.NSNumber>(): R;
    incrementValue<R = number>(): R;
    minimumIncrementValue<R = number>(): R;
    setMinimumIncrementValue<R = void, P0 = number>(_v: P0): R;
    upDownController<R = cocoa.MSUpDownController>(): R;
  }
  namespace classes {
    export interface MSUpDownProtocolProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSUpDownProtocolProtocol: cocoa.classes.MSUpDownProtocolProtocol;
