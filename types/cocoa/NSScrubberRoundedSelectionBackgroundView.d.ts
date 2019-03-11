/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberRoundedSelectionBackgroundView<T = any> extends cocoa.NSScrubberSelectionView {
    wantsUpdateLayer<R = boolean>(): R;
    _roundedBackgroundCommonInit<R = void>(): R;
    tintColor<R = cocoa.NSColor>(): R;
    setTintColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrubberRoundedSelectionBackgroundView<T = any> extends cocoa.classes.NSScrubberSelectionView {
      alloc<R = NSScrubberRoundedSelectionBackgroundView>(): R;
      new: <R = NSScrubberRoundedSelectionBackgroundView>() => R;
    }
  }
}

declare const NSScrubberRoundedSelectionBackgroundView: cocoa.classes.NSScrubberRoundedSelectionBackgroundView;
