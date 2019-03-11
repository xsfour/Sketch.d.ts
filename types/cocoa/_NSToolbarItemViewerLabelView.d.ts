/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarItemViewerLabelView<T = any> extends cocoa.NSControl {
    _doHackForFS<R = boolean>(): R;
    _isSelected<R = boolean>(): R;
    _containingToolbarItemViewer<R = unknown>(): R;
    initWithFrame_text<R = unknown, P0 = cocoa.CGRect, P1 = unknown>(_initWithFrame: P0, _text: P1): R;
  }
  namespace classes {
    export interface _NSToolbarItemViewerLabelView<T = any> extends cocoa.classes.NSControl {
      alloc<R = _NSToolbarItemViewerLabelView>(): R;
      new: <R = _NSToolbarItemViewerLabelView>() => R;
    }
  }
}
