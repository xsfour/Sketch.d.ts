/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersonNameComponents<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSSecureCodingProtocol {
    hash<R = number>(): R;
    isEqualToComponents<R = boolean, P0 = unknown>(_isEqualToComponents: P0): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    _isEmpty<R = boolean>(): R;
    _scriptDeterminingStringRepresentationWithPhoneticDesired<R = unknown, P0 = boolean>(__scriptDeterminingStringRepresentationWithPhoneticDesired: P0): R;
    phoneticRepresentation<R = cocoa.NSPersonNameComponents>(): R;
    setPhoneticRepresentation<R = void, P0 = cocoa.NSPersonNameComponents>(_v: P0): R;
    nickname<R = cocoa.NSString>(): R;
    setNickname<R = void, P0 = cocoa.NSString>(_v: P0): R;
    nameSuffix<R = cocoa.NSString>(): R;
    setNameSuffix<R = void, P0 = cocoa.NSString>(_v: P0): R;
    namePrefix<R = cocoa.NSString>(): R;
    setNamePrefix<R = void, P0 = cocoa.NSString>(_v: P0): R;
    middleName<R = cocoa.NSString>(): R;
    setMiddleName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    familyName<R = cocoa.NSString>(): R;
    setFamilyName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    givenName<R = cocoa.NSString>(): R;
    setGivenName<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSPersonNameComponents<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSPersonNameComponents>(): R;
      new: <R = NSPersonNameComponents>() => R;
      __componentsRequiredForScriptDetectionWithPhoneticDesired<R = unknown, P0 = boolean>(___componentsRequiredForScriptDetectionWithPhoneticDesired: P0): R;
      _allProperties<R = unknown>(): R;
      _allComponents<R = unknown>(): R;
    }
  }
}

declare const NSPersonNameComponents: cocoa.classes.NSPersonNameComponents;
