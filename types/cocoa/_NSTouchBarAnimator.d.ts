/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarAnimator<T = any> extends cocoa._NSObjectAnimator {
    setItemIdentifiers<R = void, P0 = unknown>(_setItemIdentifiers: P0): R;
  }
  namespace classes {
    export interface _NSTouchBarAnimator<T = any> extends cocoa.classes._NSObjectAnimator {  }
  }
}
