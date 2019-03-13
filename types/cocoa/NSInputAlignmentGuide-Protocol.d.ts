/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputAlignmentGuideProtocol<T = any> extends NSObjectProtocol {
    referenceValues<R = NSArray>(): R;
    guideType<R = number>(): R;
  }
  namespace classes {
    export interface NSInputAlignmentGuideProtocol<T = any> extends NSObjectProtocol {  }
  }
}
