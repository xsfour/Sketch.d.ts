/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberTextItemView<T = any> extends cocoa.NSScrubberItemView {
    isFlipped<R = boolean>(): R;
    textField<R = cocoa.NSTextField>(): R;
    title<R = cocoa.NSString>(): R;
    setTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrubberTextItemView<T = any> extends cocoa.classes.NSScrubberItemView {
      alloc<R = NSScrubberTextItemView>(): R;
      new: <R = NSScrubberTextItemView>() => R;
      keyPathsForValuesAffectingTitle<R = unknown>(): R;
    }
  }
}

declare const NSScrubberTextItemView: cocoa.classes.NSScrubberTextItemView;
