/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMirrorPopUpButtonCell<T = any> extends NSPopUpButtonCell {
    shouldDrawImage<R = boolean>(): R;
  }
  namespace classes {
    export interface MSMirrorPopUpButtonCell<T = any> extends NSPopUpButtonCell {
      alloc<R = MSMirrorPopUpButtonCell>(): R;
      new: <R = MSMirrorPopUpButtonCell>() => R;
    }
  }
}

declare const MSMirrorPopUpButtonCell: cocoa.classes.MSMirrorPopUpButtonCell;
