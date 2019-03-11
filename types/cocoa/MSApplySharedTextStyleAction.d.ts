/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplySharedTextStyleAction<T = any> extends cocoa.MSApplySharedStyleAction {
    applySharedTextStyle<R = void, P0 = unknown>(_applySharedTextStyle: P0): R;
  }
  namespace classes {
    export interface MSApplySharedTextStyleAction<T = any> extends cocoa.classes.MSApplySharedStyleAction {
      alloc<R = MSApplySharedTextStyleAction>(): R;
      new: <R = MSApplySharedTextStyleAction>() => R;
    }
  }
}

declare const MSApplySharedTextStyleAction: cocoa.classes.MSApplySharedTextStyleAction;
