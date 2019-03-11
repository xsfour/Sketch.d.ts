/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberArrowButtonCell<T = any> extends cocoa.NSButtonCell {
    _coreUIBackgroundDrawOptionsInView<R = cocoa.__CFDictionary, P0 = unknown>(__coreUIBackgroundDrawOptionsInView: P0): R;
  }
  namespace classes {
    export interface NSScrubberArrowButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = NSScrubberArrowButtonCell>(): R;
      new: <R = NSScrubberArrowButtonCell>() => R;
    }
  }
}

declare const NSScrubberArrowButtonCell: cocoa.classes.NSScrubberArrowButtonCell;
