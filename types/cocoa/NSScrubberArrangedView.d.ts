/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberArrangedView<T = any> extends NSView {
    _preferredAppearance<R = unknown>(): R;
    applyLayoutAttributes<R = void, P0 = unknown>(_applyLayoutAttributes: P0): R;
    _arrangedViewCommonInit<R = void>(): R;
    highlighted<R = boolean>(): R;
    setHighlighted<R = void, P0 = boolean>(_v: P0): R;
    selected<R = boolean>(): R;
    setSelected<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrubberArrangedView<T = any> extends NSView {
      alloc<R = NSScrubberArrangedView>(): R;
      new: <R = NSScrubberArrangedView>() => R;
    }
  }
}

declare const NSScrubberArrangedView: cocoa.classes.NSScrubberArrangedView;
