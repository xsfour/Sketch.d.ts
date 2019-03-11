/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPDFInfo<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSCodingProtocol {
    dealloc<R = void>(): R;
    attributes<R = cocoa.NSMutableDictionary>(): R;
    paperSize<R = cocoa.CGSize>(): R;
    setPaperSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    orientation<R = number>(): R;
    setOrientation<R = void, P0 = number>(_v: P0): R;
    tagNames<R = cocoa.NSArray>(): R;
    setTagNames<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    URL<R = cocoa.NSURL>(): R;
    setURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    fileExtensionHidden<R = boolean>(): R;
    setFileExtensionHidden<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSPDFInfo<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSCodingProtocol {
      alloc<R = NSPDFInfo>(): R;
      new: <R = NSPDFInfo>() => R;
    }
  }
}

declare const NSPDFInfo: cocoa.classes.NSPDFInfo;
