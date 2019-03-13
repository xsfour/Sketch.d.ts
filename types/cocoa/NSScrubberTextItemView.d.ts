/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberTextItemView<T = any> extends NSScrubberItemView {
    isFlipped<R = boolean>(): R;
    textField<R = NSTextField>(): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrubberTextItemView<T = any> extends NSScrubberItemView {
      alloc<R = NSScrubberTextItemView>(): R;
      new: <R = NSScrubberTextItemView>() => R;
      keyPathsForValuesAffectingTitle<R = unknown>(): R;
    }
  }
}

declare const NSScrubberTextItemView: cocoa.classes.NSScrubberTextItemView;
