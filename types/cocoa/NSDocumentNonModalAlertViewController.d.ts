/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentNonModalAlertViewController<T = any> extends cocoa.NSViewController {
    awakeFromNib<R = void>(): R;
    layout<R = void>(): R;
    errorToDisplay<R = cocoa.NSError>(): R;
    setErrorToDisplay<R = void, P0 = cocoa.NSError>(_v: P0): R;
    menu<R = cocoa.NSMenu>(): R;
    setMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
  }
  namespace classes {
    export interface NSDocumentNonModalAlertViewController<T = any> extends cocoa.classes.NSViewController {
      alloc<R = NSDocumentNonModalAlertViewController>(): R;
      new: <R = NSDocumentNonModalAlertViewController>() => R;
    }
  }
}

declare const NSDocumentNonModalAlertViewController: cocoa.classes.NSDocumentNonModalAlertViewController;
