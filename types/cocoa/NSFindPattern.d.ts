/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindPattern<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol, cocoa.NSCopyingProtocol {
    backreferenceExpression<R = unknown>(): R;
    replaceExpression<R = unknown>(): R;
    initWithPropertyListRepresentation<R = unknown, P0 = unknown>(_initWithPropertyListRepresentation: P0): R;
    propertyListRepresentation<R = unknown>(): R;
    writableTypesForPasteboard<R = unknown, P0 = unknown>(_writableTypesForPasteboard: P0): R;
    generateNewUniqueID<R = void>(): R;
    _setUniqueID<R = void, P0 = unknown>(__setUniqueID: P0): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    replacementString<R = cocoa.NSString>(): R;
    setReplacementString<R = void, P0 = cocoa.NSString>(_v: P0): R;
    repeatedPatternID<R = number>(): R;
    setRepeatedPatternID<R = void, P0 = number>(_v: P0): R;
    uniqueID<R = cocoa.NSString>(): R;
    captureGroupID<R = number>(): R;
    setCaptureGroupID<R = void, P0 = number>(_v: P0): R;
    allowsBackreferences<R = boolean>(): R;
    setAllowsBackreferences<R = void, P0 = boolean>(_v: P0): R;
    groupID<R = number>(): R;
    setGroupID<R = void, P0 = number>(_v: P0): R;
    tokenString<R = cocoa.NSString>(): R;
    setTokenString<R = void, P0 = cocoa.NSString>(_v: P0): R;
    displayString<R = cocoa.NSString>(): R;
    setDisplayString<R = void, P0 = cocoa.NSString>(_v: P0): R;
    regularExpression<R = cocoa.NSString>(): R;
    setRegularExpression<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSFindPattern<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSFindPattern>(): R;
      new: <R = NSFindPattern>() => R;
      placeholderFindPattern<R = unknown>(): R;
      readingOptionsForType_pasteboard<R = number, P0 = unknown, P1 = unknown>(_readingOptionsForType: P0, _pasteboard: P1): R;
      readableTypesForPasteboard<R = unknown, P0 = unknown>(_readableTypesForPasteboard: P0): R;
    }
  }
}

declare const NSFindPattern: cocoa.classes.NSFindPattern;
