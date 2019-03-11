/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowBorderOptionsAction<T = any> extends cocoa.MSBaseStyleAction {
    showBorderOptions<R = void, P0 = unknown>(_showBorderOptions: P0): R;
  }
  namespace classes {
    export interface MSShowBorderOptionsAction<T = any> extends cocoa.classes.MSBaseStyleAction {
      alloc<R = MSShowBorderOptionsAction>(): R;
      new: <R = MSShowBorderOptionsAction>() => R;
    }
  }
}

declare const MSShowBorderOptionsAction: cocoa.classes.MSShowBorderOptionsAction;
