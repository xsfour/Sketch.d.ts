/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextCheckingKeyEvent<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSSecureCodingProtocol {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    initWithKeyboardLayoutType_keyboardType_identifier_primaryLanguage_flags_timestamp_characters_charactersIgnoringModifiers<R = unknown, P0 = number, P1 = number, P2 = unknown, P3 = unknown, P4 = number, P5 = number, P6 = unknown, P7 = unknown>(_initWithKeyboardLayoutType: P0, _keyboardType: P1, _identifier: P2, _primaryLanguage: P3, _flags: P4, _timestamp: P5, _characters: P6, _charactersIgnoringModifiers: P7): R;
    charactersIgnoringModifiers<R = cocoa.NSString>(): R;
    characters<R = cocoa.NSString>(): R;
    timestamp<R = number>(): R;
    flags<R = number>(): R;
    primaryLanguage<R = cocoa.NSString>(): R;
    keyboardLayoutIdentifier<R = cocoa.NSString>(): R;
    keyboardType<R = number>(): R;
    keyboardLayoutType<R = number>(): R;
  }
  namespace classes {
    export interface NSTextCheckingKeyEvent<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSTextCheckingKeyEvent>(): R;
      new: <R = NSTextCheckingKeyEvent>() => R;
    }
  }
}

declare const NSTextCheckingKeyEvent: cocoa.classes.NSTextCheckingKeyEvent;
