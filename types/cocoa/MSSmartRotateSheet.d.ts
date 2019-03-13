/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSmartRotateSheet<T = any> extends CHSheetController {
    doc<R = unknown>(): R;
    setNilValueForKey<R = void, P0 = unknown>(_setNilValueForKey: P0): R;
    awakeFromNib<R = void>(): R;
    numberOfCopies<R = number>(): R;
    setNumberOfCopies<R = void, P0 = number>(_v: P0): R;
    explanationLabel<R = NSTextField>(): R;
    setExplanationLabel<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace classes {
    export interface MSSmartRotateSheet<T = any> extends CHSheetController {
      alloc<R = MSSmartRotateSheet>(): R;
      new: <R = MSSmartRotateSheet>() => R;
    }
  }
}

declare const MSSmartRotateSheet: cocoa.classes.MSSmartRotateSheet;
