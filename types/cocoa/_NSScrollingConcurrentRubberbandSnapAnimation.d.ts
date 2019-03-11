/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentRubberbandSnapAnimation<T = any> extends cocoa._NSScrollingConcurrentVBLPreprocessFilter {
    dealloc<R = void>(): R;
    initWithInitialOrigin_velocity_stretch<R = unknown, P0 = cocoa.CGPoint, P1 = cocoa.CGPoint, P2 = cocoa.CGSize>(_initWithInitialOrigin: P0, _velocity: P1, _stretch: P2): R;
  }
  namespace classes {
    export interface _NSScrollingConcurrentRubberbandSnapAnimation<T = any> extends cocoa.classes._NSScrollingConcurrentVBLPreprocessFilter {
      alloc<R = _NSScrollingConcurrentRubberbandSnapAnimation>(): R;
      new: <R = _NSScrollingConcurrentRubberbandSnapAnimation>() => R;
    }
  }
}
