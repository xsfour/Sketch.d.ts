/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentNonModalAlertViewController<T = any> extends NSViewController {
    awakeFromNib<R = void>(): R;
    layout<R = void>(): R;
    errorToDisplay<R = NSError>(): R;
    setErrorToDisplay<R = void, P0 = NSError>(_v: P0): R;
    menu<R = NSMenu>(): R;
    setMenu<R = void, P0 = NSMenu>(_v: P0): R;
  }
  namespace classes {
    export interface NSDocumentNonModalAlertViewController<T = any> extends NSViewController {
      alloc<R = NSDocumentNonModalAlertViewController>(): R;
      new: <R = NSDocumentNonModalAlertViewController>() => R;
    }
  }
}

declare const NSDocumentNonModalAlertViewController: cocoa.classes.NSDocumentNonModalAlertViewController;
