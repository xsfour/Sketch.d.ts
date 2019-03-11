/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPathControlItem<T = any> extends cocoa.NSObject {
    setURL<R = void, P0 = unknown>(_setURL: P0): R;
    pathComponentCell<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithPathComponentCell<R = unknown, P0 = unknown>(_initWithPathComponentCell: P0): R;
    URL<R = cocoa.NSURL>(): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    attributedTitle<R = cocoa.NSAttributedString>(): R;
    setAttributedTitle<R = void, P0 = cocoa.NSAttributedString>(_v: P0): R;
    title<R = cocoa.NSString>(): R;
    setTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSPathControlItem<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSPathControlItem>(): R;
      new: <R = NSPathControlItem>() => R;
      itemWithCell<R = unknown, P0 = unknown>(_itemWithCell: P0): R;
    }
  }
}

declare const NSPathControlItem: cocoa.classes.NSPathControlItem;
