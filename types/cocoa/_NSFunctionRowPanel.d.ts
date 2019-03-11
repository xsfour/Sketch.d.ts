/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowPanel<T = any> extends cocoa.NSPanel {
    initWithFunctionRow<R = unknown, P0 = unknown>(_initWithFunctionRow: P0): R;
    _isFunctionRowWindow<R = boolean>(): R;
    backingScaleFactor<R = number>(): R;
    colorSpace<R = unknown>(): R;
    isVisible<R = boolean>(): R;
    worksWhenModal<R = boolean>(): R;
    functionRow<R = cocoa.NSFunctionRow>(): R;
  }
  namespace classes {
    export interface _NSFunctionRowPanel<T = any> extends cocoa.classes.NSPanel {
      alloc<R = _NSFunctionRowPanel>(): R;
      new: <R = _NSFunctionRowPanel>() => R;
    }
  }
}
