/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHapticFeedbackPerformerProtocol<T = any> extends NSObjectProtocol {
    performFeedbackPattern_performanceTime<R = void, P0 = number, P1 = number>(_performFeedbackPattern: P0, _performanceTime: P1): R;
  }
  namespace classes {
    export interface NSHapticFeedbackPerformerProtocol<T = any> extends NSObjectProtocol {  }
  }
}
