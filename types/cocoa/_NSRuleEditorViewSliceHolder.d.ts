/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSRuleEditorViewSliceHolder<T = any> extends NSView {
    _preferredAppearance<R = unknown>(): R;
    _vibrantBlendingStyleForSubtree<R = number>(): R;
    isFlipped<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSRuleEditorViewSliceHolder<T = any> extends NSView {
      alloc<R = _NSRuleEditorViewSliceHolder>(): R;
      new: <R = _NSRuleEditorViewSliceHolder>() => R;
    }
  }
}
