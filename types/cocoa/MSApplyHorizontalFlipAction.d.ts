/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplyHorizontalFlipAction<T = any> extends MSBaseFlipAction {
    label<R = unknown>(): R;
    applyHorizontalFlip<R = void, P0 = unknown>(_applyHorizontalFlip: P0): R;
    isActive<R = boolean>(): R;
    areAllLayersFlipped<R = boolean>(): R;
    historyMomentTitle<R = unknown>(): R;
  }
  namespace classes {
    export interface MSApplyHorizontalFlipAction<T = any> extends MSBaseFlipAction {
      alloc<R = MSApplyHorizontalFlipAction>(): R;
      new: <R = MSApplyHorizontalFlipAction>() => R;
    }
  }
}

declare const MSApplyHorizontalFlipAction: cocoa.classes.MSApplyHorizontalFlipAction;
