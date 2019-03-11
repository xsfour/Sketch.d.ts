/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCloudSharingDescriptor<T = any> extends cocoa.NSObject, cocoa.NSSecureCodingProtocol {
    _variantSubstrings<R = unknown>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    dealloc<R = void>(): R;
    sharedContentType<R = cocoa.NSString>(): R;
    setSharedContentType<R = void, P0 = cocoa.NSString>(_v: P0): R;
    numberOfInvitations<R = number>(): R;
    setNumberOfInvitations<R = void, P0 = number>(_v: P0): R;
    publicShare<R = boolean>(): R;
    setPublicShare<R = void, P0 = boolean>(_v: P0): R;
    invitationsSentViaThirdPartyService<R = boolean>(): R;
    setInvitationsSentViaThirdPartyService<R = void, P0 = boolean>(_v: P0): R;
    operation<R = number>(): R;
    setOperation<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSCloudSharingDescriptor<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = _NSCloudSharingDescriptor>(): R;
      new: <R = _NSCloudSharingDescriptor>() => R;
    }
  }
}
