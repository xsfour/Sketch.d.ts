/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineBlendModeButtonCell<T = any> extends cocoa.MSInspectorToggleImageButtonCell {}
  namespace classes {
    export interface MSInlineBlendModeButtonCell<T = any> extends cocoa.classes.MSInspectorToggleImageButtonCell {
      alloc<R = MSInlineBlendModeButtonCell>(): R;
      new: <R = MSInlineBlendModeButtonCell>() => R;
    }
  }
}

declare const MSInlineBlendModeButtonCell: cocoa.classes.MSInlineBlendModeButtonCell;
