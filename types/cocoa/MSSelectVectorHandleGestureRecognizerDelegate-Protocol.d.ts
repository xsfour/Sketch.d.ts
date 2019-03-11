/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSelectVectorHandleGestureRecognizerDelegateProtocol<T = any> extends cocoa.MSGestureRecognizerDelegateProtocol {
    gestureRecognizerShouldDelaySelectionUntilMouseUp<R = boolean, P0 = cocoa.MSSelectVectorHandleGestureRecognizer>(_gestureRecognizerShouldDelaySelectionUntilMouseUp: P0): R;
  }
  namespace classes {
    export interface MSSelectVectorHandleGestureRecognizerDelegateProtocol<T = any> extends cocoa.classes.MSGestureRecognizerDelegateProtocol {  }
  }
}

declare const MSSelectVectorHandleGestureRecognizerDelegateProtocol: cocoa.classes.MSSelectVectorHandleGestureRecognizerDelegateProtocol;
