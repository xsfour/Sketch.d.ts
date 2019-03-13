/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentRubberbandSnapAnimation<T = any> extends _NSScrollingConcurrentVBLPreprocessFilter {
    dealloc<R = void>(): R;
    initWithInitialOrigin_velocity_stretch<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGSize>(_initWithInitialOrigin: P0, _velocity: P1, _stretch: P2): R;
  }
  namespace classes {
    export interface _NSScrollingConcurrentRubberbandSnapAnimation<T = any> extends _NSScrollingConcurrentVBLPreprocessFilter {
      alloc<R = _NSScrollingConcurrentRubberbandSnapAnimation>(): R;
      new: <R = _NSScrollingConcurrentRubberbandSnapAnimation>() => R;
    }
  }
}
