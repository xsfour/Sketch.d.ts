/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBigMutableString<T = any> extends cocoa.NSMutableString {
    _newBigSubstringWithRange_wantsMutable_zone<R = unknown, P0 = cocoa._NSRange, P1 = boolean, P2 = cocoa._NSZone>(__newBigSubstringWithRange: P0, _wantsMutable: P1, _zone: P2): R;
    _newSmallImmutableSubstringWithRange_zone<R = unknown, P0 = cocoa._NSRange, P1 = cocoa._NSZone>(__newSmallImmutableSubstringWithRange: P0, _zone: P1): R;
    length<R = number>(): R;
    _copyDataFrom_range<R = boolean, P0 = unknown, P1 = cocoa._NSRange>(__copyDataFrom: P0, _range: P1): R;
    _setData_encoding<R = boolean, P0 = unknown, P1 = number>(__setData: P0, _encoding: P1): R;
    _setStorage_encoding<R = boolean, P0 = cocoa.__CFStorage, P1 = number>(__setStorage: P0, _encoding: P1): R;
    _copyStorage_encoding<R = boolean, P0 = cocoa.__CFStorage, P1 = number>(__copyStorage: P0, _encoding: P1): R;
    _getData_encoding<R = boolean, P0 = unknown, P1 = number>(__getData: P0, _encoding: P1): R;
    _isMarkedAsImmutable<R = boolean>(): R;
    _markAsImmutable<R = void>(): R;
    _checkForInvalidMutationWithSelector<R = void, P0 = string>(__checkForInvalidMutationWithSelector: P0): R;
    dealloc<R = void>(): R;
    initWithStorage_length_isUnicode<R = unknown, P0 = cocoa.__CFStorage, P1 = number, P2 = boolean>(_initWithStorage: P0, _length: P1, _isUnicode: P2): R;
  }
  namespace classes {
    export interface NSBigMutableString<T = any> extends cocoa.classes.NSMutableString {
      alloc<R = NSBigMutableString>(): R;
      new: <R = NSBigMutableString>() => R;
    }
  }
}

declare const NSBigMutableString: cocoa.classes.NSBigMutableString;
