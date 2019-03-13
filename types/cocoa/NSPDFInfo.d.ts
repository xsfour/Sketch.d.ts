/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPDFInfo<T = any> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
    dealloc<R = void>(): R;
    attributes<R = NSMutableDictionary>(): R;
    paperSize<R = CGSize>(): R;
    setPaperSize<R = void, P0 = CGSize>(_v: P0): R;
    orientation<R = number>(): R;
    setOrientation<R = void, P0 = number>(_v: P0): R;
    tagNames<R = NSArray>(): R;
    setTagNames<R = void, P0 = NSArray>(_v: P0): R;
    URL<R = NSURL>(): R;
    setURL<R = void, P0 = NSURL>(_v: P0): R;
    fileExtensionHidden<R = boolean>(): R;
    setFileExtensionHidden<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSPDFInfo<T = any> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
      alloc<R = NSPDFInfo>(): R;
      new: <R = NSPDFInfo>() => R;
    }
  }
}

declare const NSPDFInfo: cocoa.classes.NSPDFInfo;
