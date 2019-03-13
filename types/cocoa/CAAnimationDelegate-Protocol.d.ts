/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CAAnimationDelegateProtocol<T = any> {
    animationDidStop_finished<R = void, P0 = CAAnimation, P1 = boolean>(_animationDidStop: P0, _finished: P1): R;
    animationDidStart<R = void, P0 = CAAnimation>(_animationDidStart: P0): R;
  }
  namespace classes {
    export interface CAAnimationDelegateProtocol<T = any> {  }
  }
}
