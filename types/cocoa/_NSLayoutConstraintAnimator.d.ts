/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLayoutConstraintAnimator<T = any> extends cocoa._NSObjectAnimator {
    setConstant<R = void, P0 = number>(_setConstant: P0): R;
  }
  namespace classes {
    export interface _NSLayoutConstraintAnimator<T = any> extends cocoa.classes._NSObjectAnimator {  }
  }
}
