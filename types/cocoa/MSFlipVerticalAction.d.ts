/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlipVerticalAction<T = any> extends cocoa.MSBaseFlipAction {
    label<R = unknown>(): R;
    isActive<R = boolean>(): R;
    areAllSelectedLayersFlippedVertically<R = boolean>(): R;
    flipVertical<R = void, P0 = unknown>(_flipVertical: P0): R;
    historyMomentTitle<R = unknown>(): R;
  }
  namespace classes {
    export interface MSFlipVerticalAction<T = any> extends cocoa.classes.MSBaseFlipAction {
      alloc<R = MSFlipVerticalAction>(): R;
      new: <R = MSFlipVerticalAction>() => R;
      flipVerticalHistoryTitle<R = unknown>(): R;
    }
  }
}

declare const MSFlipVerticalAction: cocoa.classes.MSFlipVerticalAction;
