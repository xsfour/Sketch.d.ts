/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKAdvertisement<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSSecureCodingProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    initWithDictionary<R = unknown, P0 = unknown>(_initWithDictionary: P0): R;
    modelName<R = cocoa.NSString>(): R;
    setModelName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    identifier<R = cocoa.NSUUID>(): R;
    setIdentifier<R = void, P0 = cocoa.NSUUID>(_v: P0): R;
    dictionaryRepresentation<R = cocoa.NSDictionary>(): R;
  }
  namespace classes {
    export interface SMKAdvertisement<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = SMKAdvertisement>(): R;
      new: <R = SMKAdvertisement>() => R;
    }
  }
}

declare const SMKAdvertisement: cocoa.classes.SMKAdvertisement;
