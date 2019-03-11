/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabWell<T = any> extends cocoa.NSView {
    isEnabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    isOpaque<R = boolean>(): R;
    prototype<R = unknown>(): R;
    setPrototype<R = void, P0 = unknown>(_setPrototype: P0): R;
    initWithFrame_prototypeRulerMarker<R = unknown, P0 = cocoa.CGRect, P1 = unknown>(_initWithFrame: P0, _prototypeRulerMarker: P1): R;
    accessibilityIsMarkerTypeDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityMarkerTypeDescriptionAttribute<R = unknown>(): R;
    accessibilityIsMarkerTypeAttributeSettable<R = boolean>(): R;
    accessibilityMarkerTypeAttribute<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTabWell<T = any> extends cocoa.classes.NSView {
      alloc<R = NSTabWell>(): R;
      new: <R = NSTabWell>() => R;
    }
  }
}

declare const NSTabWell: cocoa.classes.NSTabWell;
