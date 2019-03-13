/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownProtocolProtocol<T = any> extends NSObjectProtocol {
    maximum<R = NSNumber>(): R;
    minimum<R = NSNumber>(): R;
    incrementValue<R = number>(): R;
    minimumIncrementValue<R = number>(): R;
    setMinimumIncrementValue<R = void, P0 = number>(_v: P0): R;
    upDownController<R = MSUpDownController>(): R;
  }
  namespace classes {
    export interface MSUpDownProtocolProtocol<T = any> extends NSObjectProtocol {  }
  }
}
