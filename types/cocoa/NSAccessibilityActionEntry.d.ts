/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityActionEntry<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithName_description_handler<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_initWithName: P0, _description: P1, _handler: P2): R;
    accessibilityDescription<R = cocoa.NSString>(): R;
    handler<R = cocoa.CDUnknownBlockType>(): R;
    action<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSAccessibilityActionEntry<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSAccessibilityActionEntry>(): R;
      new: <R = NSAccessibilityActionEntry>() => R;
      entryWithName_description_handler<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_entryWithName: P0, _description: P1, _handler: P2): R;
    }
  }
}

declare const NSAccessibilityActionEntry: cocoa.classes.NSAccessibilityActionEntry;
