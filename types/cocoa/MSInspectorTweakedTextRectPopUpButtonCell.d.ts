/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorTweakedTextRectPopUpButtonCell<T = any> extends MSInspectorPopUpButtonCell {}
  namespace classes {
    export interface MSInspectorTweakedTextRectPopUpButtonCell<T = any> extends MSInspectorPopUpButtonCell {
      alloc<R = MSInspectorTweakedTextRectPopUpButtonCell>(): R;
      new: <R = MSInspectorTweakedTextRectPopUpButtonCell>() => R;
    }
  }
}

declare const MSInspectorTweakedTextRectPopUpButtonCell: cocoa.classes.MSInspectorTweakedTextRectPopUpButtonCell;
