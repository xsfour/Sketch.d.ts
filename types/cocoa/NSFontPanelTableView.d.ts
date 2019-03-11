/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFontPanelTableView<T = any> extends cocoa.NSTableView {
    _wantsUserCancelledOperation<R = boolean>(): R;
  }
  namespace classes {
    export interface NSFontPanelTableView<T = any> extends cocoa.classes.NSTableView {
      alloc<R = NSFontPanelTableView>(): R;
      new: <R = NSFontPanelTableView>() => R;
    }
  }
}

declare const NSFontPanelTableView: cocoa.classes.NSFontPanelTableView;
