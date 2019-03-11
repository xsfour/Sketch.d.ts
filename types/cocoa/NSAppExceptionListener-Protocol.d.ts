/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAppExceptionListenerProtocol<T = any> extends cocoa.NSObjectProtocol {
    application_willReportException_willCrash_willShow<R = void, P0 = cocoa.NSApplication, P1 = cocoa.NSException, P2 = boolean, P3 = boolean>(_application: P0, _willReportException: P1, _willCrash: P2, _willShow: P3): R;
  }
  namespace classes {
    export interface NSAppExceptionListenerProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSAppExceptionListenerProtocol: cocoa.classes.NSAppExceptionListenerProtocol;
