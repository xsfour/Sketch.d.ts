/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDuplicateDocumentAnimationProjectionWindow<T = any> extends cocoa._NSSlideAndCrossFadeAnimationProjectionWindow {
    initWithSourceWindow_targetWindow<R = unknown, P0 = unknown, P1 = unknown>(_initWithSourceWindow: P0, _targetWindow: P1): R;
  }
  namespace classes {
    export interface _NSDuplicateDocumentAnimationProjectionWindow<T = any> extends cocoa.classes._NSSlideAndCrossFadeAnimationProjectionWindow {
      alloc<R = _NSDuplicateDocumentAnimationProjectionWindow>(): R;
      new: <R = _NSDuplicateDocumentAnimationProjectionWindow>() => R;
    }
  }
}
