/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCCoder<T = any> extends cocoa.NSCoder {
    dealloc<R = void>(): R;
    decodeXPCObjectOfType_forKey<R = unknown, P0 = cocoa._xpc_type_s, P1 = unknown>(_decodeXPCObjectOfType: P0, _forKey: P1): R;
    decodeXPCObjectForKey<R = unknown, P0 = unknown>(_decodeXPCObjectForKey: P0): R;
    encodeXPCObject_forKey<R = void, P0 = unknown, P1 = unknown>(_encodeXPCObject: P0, _forKey: P1): R;
    userInfo<R = cocoa.NSObject>(): R;
    setUserInfo<R = void, P0 = cocoa.NSObject>(_v: P0): R;
    connection<R = cocoa.NSXPCConnection>(): R;
  }
  namespace classes {
    export interface NSXPCCoder<T = any> extends cocoa.classes.NSCoder {
      alloc<R = NSXPCCoder>(): R;
      new: <R = NSXPCCoder>() => R;
      _testEncodeAndDecodeInvocation_interface<R = unknown, P0 = unknown, P1 = unknown>(__testEncodeAndDecodeInvocation: P0, _interface: P1): R;
      _testEncodeAndDecodeObject_allowedClass<R = unknown, P0 = unknown, P1 = unknown>(__testEncodeAndDecodeObject: P0, _allowedClass: P1): R;
      _testEncodeAndDecodeObject_allowedClasses<R = unknown, P0 = unknown, P1 = unknown>(__testEncodeAndDecodeObject: P0, _allowedClasses: P1): R;
    }
  }
}

declare const NSXPCCoder: cocoa.classes.NSXPCCoder;
