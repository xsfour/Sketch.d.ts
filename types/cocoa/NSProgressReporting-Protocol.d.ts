/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressReportingProtocol<T = any> extends NSObjectProtocol {
    progress<R = NSProgress>(): R;
  }
  namespace classes {
    export interface NSProgressReportingProtocol<T = any> extends NSObjectProtocol {  }
  }
}
