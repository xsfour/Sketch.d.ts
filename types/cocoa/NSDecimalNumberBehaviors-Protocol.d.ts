/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDecimalNumberBehaviorsProtocol<T = any> {
    exceptionDuringOperation_error_leftOperand_rightOperand<R = cocoa.NSDecimalNumber, P0 = string, P1 = number, P2 = cocoa.NSDecimalNumber, P3 = cocoa.NSDecimalNumber>(_exceptionDuringOperation: P0, _error: P1, _leftOperand: P2, _rightOperand: P3): R;
    scale<R = number>(): R;
    roundingMode<R = number>(): R;
  }
  namespace classes {
    export interface NSDecimalNumberBehaviorsProtocol<T = any> {  }
  }
}

declare const NSDecimalNumberBehaviorsProtocol: cocoa.classes.NSDecimalNumberBehaviorsProtocol;
