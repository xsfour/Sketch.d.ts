/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputFeedbackPerformerProtocol<T = any> extends NSObjectProtocol {
    performFeedbackPattern_forTimestamp<R = void, P0 = number, P1 = number>(_performFeedbackPattern: P0, _forTimestamp: P1): R;
  }
  namespace classes {
    export interface NSInputFeedbackPerformerProtocol<T = any> extends NSObjectProtocol {  }
  }
}
