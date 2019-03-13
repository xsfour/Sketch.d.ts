/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCloudSharingParticipantDetails<T = any> extends NSObject, NSSecureCodingProtocol {
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    dealloc<R = void>(): R;
    initWithParticipant_detailText<R = unknown, P0 = unknown, P1 = unknown>(_initWithParticipant: P0, _detailText: P1): R;
    participantColor<R = NSColor>(): R;
    setParticipantColor<R = void, P0 = NSColor>(_v: P0): R;
    detailText<R = NSString>(): R;
    participant<R = CKShareParticipant>(): R;
  }
  namespace classes {
    export interface _NSCloudSharingParticipantDetails<T = any> extends NSObject, NSSecureCodingProtocol {
      alloc<R = _NSCloudSharingParticipantDetails>(): R;
      new: <R = _NSCloudSharingParticipantDetails>() => R;
    }
  }
}
