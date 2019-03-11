/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemOverlayOptions<T = any> extends cocoa.NSObject, cocoa.NSSecureCodingProtocol, cocoa.NSCopyingProtocol {
    description<R = unknown>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    initWithType_point_edge<R = unknown, P0 = number, P1 = cocoa.CGPoint, P2 = number>(_initWithType: P0, _point: P1, _edge: P2): R;
    edge<R = number>(): R;
    point<R = cocoa.CGPoint>(): R;
    type<R = number>(): R;
  }
  namespace classes {
    export interface NSTouchBarItemOverlayOptions<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSecureCodingProtocol, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSTouchBarItemOverlayOptions>(): R;
      new: <R = NSTouchBarItemOverlayOptions>() => R;
      popoverOptionsWithPoint_edge<R = unknown, P0 = cocoa.CGPoint, P1 = number>(_popoverOptionsWithPoint: P0, _edge: P1): R;
      overlayOptionsWithPoint_edge<R = unknown, P0 = cocoa.CGPoint, P1 = number>(_overlayOptionsWithPoint: P0, _edge: P1): R;
      standardOptions<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarItemOverlayOptions: cocoa.classes.NSTouchBarItemOverlayOptions;
