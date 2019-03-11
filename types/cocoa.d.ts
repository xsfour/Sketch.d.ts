/// <reference path="./cocoa/index.d.ts" />

declare namespace cocoa {
  export interface CGPoint {
    /** `float` */
    x: number;
    /** `float` */
    y: number;
  }

  export interface CGSize {
    /** `float` */
    width: number;
    /** `float` */
    height: number;
  }

  export interface CGRect {
    origin: CGPoint;
    size: CGSize;
  }

  export interface NSArray<T> extends Array<T> {}

  export interface MSDocument {
    pages(): NSArray<cocoa.MSPage>;
  }
}

declare const NSUTF8StringEncoding: number;
declare const NSViewWidthSizable: number;
declare const NSViewHeightSizable: number;
declare const NSTitledWindowMask: number;
declare const NSWindowStyleMaskClosable: number;
declare const NSResizableWindowMask: number;
declare const NSBackingStoreBuffered: number;
declare const NSLayoutAttributeHeight: number;
declare const NSLayoutRelationEqual: number;
declare const NSLayoutAttributeTop: any;
declare const NSPasteboardTypeString: unique symbol;
