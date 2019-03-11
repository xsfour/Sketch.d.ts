/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlipHorizontalAction<T = any> extends cocoa.MSBaseFlipAction {
    label<R = unknown>(): R;
    isActive<R = boolean>(): R;
    areAllSelectedLayersFlippedHorizontally<R = boolean>(): R;
    flipHorizontal<R = void, P0 = unknown>(_flipHorizontal: P0): R;
    historyMomentTitle<R = unknown>(): R;
  }
  namespace classes {
    export interface MSFlipHorizontalAction<T = any> extends cocoa.classes.MSBaseFlipAction {
      alloc<R = MSFlipHorizontalAction>(): R;
      new: <R = MSFlipHorizontalAction>() => R;
      flipHorizontalHistoryTitle<R = unknown>(): R;
    }
  }
}

declare const MSFlipHorizontalAction: cocoa.classes.MSFlipHorizontalAction;
