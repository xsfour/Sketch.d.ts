/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemPositionAnimationDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    runPositionAnimation<R = void>(): R;
  }
  namespace classes {
    export interface NSTouchBarItemPositionAnimationDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTouchBarItemPositionAnimationDelegateProtocol: cocoa.classes.NSTouchBarItemPositionAnimationDelegateProtocol;
