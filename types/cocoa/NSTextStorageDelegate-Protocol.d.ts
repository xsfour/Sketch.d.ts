/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextStorageDelegateProtocol<T = any> {
    textStorage_didProcessEditing_range_changeInLength<R = void, P0 = cocoa.NSTextStorage, P1 = number, P2 = cocoa._NSRange, P3 = number>(_textStorage: P0, _didProcessEditing: P1, _range: P2, _changeInLength: P3): R;
    textStorage_willProcessEditing_range_changeInLength<R = void, P0 = cocoa.NSTextStorage, P1 = number, P2 = cocoa._NSRange, P3 = number>(_textStorage: P0, _willProcessEditing: P1, _range: P2, _changeInLength: P3): R;
  }
  namespace classes {
    export interface NSTextStorageDelegateProtocol<T = any> {  }
  }
}

declare const NSTextStorageDelegateProtocol: cocoa.classes.NSTextStorageDelegateProtocol;
