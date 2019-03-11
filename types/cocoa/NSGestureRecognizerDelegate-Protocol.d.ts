/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGestureRecognizerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    gestureRecognizer_shouldReceiveTouch<R = boolean, P0 = cocoa.NSGestureRecognizer, P1 = cocoa.NSTouch>(_gestureRecognizer: P0, _shouldReceiveTouch: P1): R;
    gestureRecognizer_shouldBeRequiredToFailByGestureRecognizer<R = boolean, P0 = cocoa.NSGestureRecognizer, P1 = cocoa.NSGestureRecognizer>(_gestureRecognizer: P0, _shouldBeRequiredToFailByGestureRecognizer: P1): R;
    gestureRecognizer_shouldRequireFailureOfGestureRecognizer<R = boolean, P0 = cocoa.NSGestureRecognizer, P1 = cocoa.NSGestureRecognizer>(_gestureRecognizer: P0, _shouldRequireFailureOfGestureRecognizer: P1): R;
    gestureRecognizer_shouldRecognizeSimultaneouslyWithGestureRecognizer<R = boolean, P0 = cocoa.NSGestureRecognizer, P1 = cocoa.NSGestureRecognizer>(_gestureRecognizer: P0, _shouldRecognizeSimultaneouslyWithGestureRecognizer: P1): R;
    gestureRecognizerShouldBegin<R = boolean, P0 = cocoa.NSGestureRecognizer>(_gestureRecognizerShouldBegin: P0): R;
    gestureRecognizer_shouldAttemptToRecognizeWithEvent<R = boolean, P0 = cocoa.NSGestureRecognizer, P1 = cocoa.NSEvent>(_gestureRecognizer: P0, _shouldAttemptToRecognizeWithEvent: P1): R;
  }
  namespace classes {
    export interface NSGestureRecognizerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSGestureRecognizerDelegateProtocol: cocoa.classes.NSGestureRecognizerDelegateProtocol;
