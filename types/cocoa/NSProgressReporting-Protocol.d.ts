/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressReportingProtocol<T = any> extends cocoa.NSObjectProtocol {
    progress<R = cocoa.NSProgress>(): R;
  }
  namespace classes {
    export interface NSProgressReportingProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSProgressReportingProtocol: cocoa.classes.NSProgressReportingProtocol;
