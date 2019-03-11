/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCloudSharingParticipantDetails<T = any> extends cocoa.NSObject, cocoa.NSSecureCodingProtocol {
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    dealloc<R = void>(): R;
    initWithParticipant_detailText<R = unknown, P0 = unknown, P1 = unknown>(_initWithParticipant: P0, _detailText: P1): R;
    participantColor<R = cocoa.NSColor>(): R;
    setParticipantColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    detailText<R = cocoa.NSString>(): R;
    participant<R = cocoa.CKShareParticipant>(): R;
  }
  namespace classes {
    export interface _NSCloudSharingParticipantDetails<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = _NSCloudSharingParticipantDetails>(): R;
      new: <R = _NSCloudSharingParticipantDetails>() => R;
    }
  }
}
