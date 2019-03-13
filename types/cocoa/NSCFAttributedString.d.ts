/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCFAttributedString<T = any> extends NSMutableAttributedString {
    string<R = unknown>(): R;
    _isDeallocating<R = boolean>(): R;
    _tryRetain<R = boolean>(): R;
  }
  namespace classes {
    export interface NSCFAttributedString<T = any> extends NSMutableAttributedString {
      alloc<R = NSCFAttributedString>(): R;
      new: <R = NSCFAttributedString>() => R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}

declare const NSCFAttributedString: cocoa.classes.NSCFAttributedString;
