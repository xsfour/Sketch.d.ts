/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewAnimator_NSScrollView<T = any> extends cocoa._NSViewAnimator {
    setMagnification_centeredAtPoint<R = void, P0 = number, P1 = cocoa.CGPoint>(_setMagnification: P0, _centeredAtPoint: P1): R;
    magnifyToFitRect<R = void, P0 = cocoa.CGRect>(_magnifyToFitRect: P0): R;
  }
  namespace classes {
    export interface _NSViewAnimator_NSScrollView<T = any> extends cocoa.classes._NSViewAnimator {  }
  }
}
