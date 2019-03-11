/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplyVerticalFlipAction<T = any> extends cocoa.MSBaseFlipAction {
    label<R = unknown>(): R;
    applyVerticalFlip<R = void, P0 = unknown>(_applyVerticalFlip: P0): R;
    isActive<R = boolean>(): R;
    areAllLayersFlipped<R = boolean>(): R;
    historyMomentTitle<R = unknown>(): R;
  }
  namespace classes {
    export interface MSApplyVerticalFlipAction<T = any> extends cocoa.classes.MSBaseFlipAction {
      alloc<R = MSApplyVerticalFlipAction>(): R;
      new: <R = MSApplyVerticalFlipAction>() => R;
    }
  }
}

declare const MSApplyVerticalFlipAction: cocoa.classes.MSApplyVerticalFlipAction;
