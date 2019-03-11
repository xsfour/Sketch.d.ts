/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCustomChooser<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithName_itemSearchBlock<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_initWithName: P0, _itemSearchBlock: P1): R;
    itemSearchBlock<R = cocoa.CDUnknownBlockType>(): R;
    setItemSearchBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSAccessibilityCustomChooser<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSAccessibilityCustomChooser>(): R;
      new: <R = NSAccessibilityCustomChooser>() => R;
    }
  }
}

declare const NSAccessibilityCustomChooser: cocoa.classes.NSAccessibilityCustomChooser;
