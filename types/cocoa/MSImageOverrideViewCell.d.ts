/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageOverrideViewCell<T = any> extends NSImageCell {}
  namespace classes {
    export interface MSImageOverrideViewCell<T = any> extends NSImageCell {
      alloc<R = MSImageOverrideViewCell>(): R;
      new: <R = MSImageOverrideViewCell>() => R;
    }
  }
}

declare const MSImageOverrideViewCell: cocoa.classes.MSImageOverrideViewCell;
