/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFontPanelTableView<T = any> extends NSTableView {
    _wantsUserCancelledOperation<R = boolean>(): R;
  }
  namespace classes {
    export interface NSFontPanelTableView<T = any> extends NSTableView {
      alloc<R = NSFontPanelTableView>(): R;
      new: <R = NSFontPanelTableView>() => R;
    }
  }
}

declare const NSFontPanelTableView: cocoa.classes.NSFontPanelTableView;
