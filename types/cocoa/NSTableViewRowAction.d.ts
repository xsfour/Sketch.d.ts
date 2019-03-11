/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewRowAction<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    dealloc<R = void>(): R;
    _initWithStyle_title_handler<R = unknown, P0 = number, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(__initWithStyle: P0, _title: P1, _handler: P2): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    handler<R = cocoa.CDUnknownBlockType>(): R;
    title<R = cocoa.NSString>(): R;
    setTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    style<R = number>(): R;
    setStyle<R = void, P0 = number>(_v: P0): R;
    backgroundColor<R = cocoa.NSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface NSTableViewRowAction<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSTableViewRowAction>(): R;
      new: <R = NSTableViewRowAction>() => R;
      rowActionWithStyle_title_handler<R = unknown, P0 = number, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_rowActionWithStyle: P0, _title: P1, _handler: P2): R;
    }
  }
}

declare const NSTableViewRowAction: cocoa.classes.NSTableViewRowAction;
