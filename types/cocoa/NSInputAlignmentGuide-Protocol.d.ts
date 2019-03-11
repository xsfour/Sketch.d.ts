/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputAlignmentGuideProtocol<T = any> extends cocoa.NSObjectProtocol {
    referenceValues<R = cocoa.NSArray>(): R;
    guideType<R = number>(): R;
  }
  namespace classes {
    export interface NSInputAlignmentGuideProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSInputAlignmentGuideProtocol: cocoa.classes.NSInputAlignmentGuideProtocol;
