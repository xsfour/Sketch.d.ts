/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityRulerMarker<T = any> extends NSAccessibilityMockUIElement {
    accessibilitySetValueAttribute<R = void, P0 = unknown>(_accessibilitySetValueAttribute: P0): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
    accessibilityIsMarkerTypeDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityMarkerTypeDescriptionAttribute<R = unknown>(): R;
    accessibilityIsMarkerTypeAttributeSettable<R = boolean>(): R;
    accessibilityMarkerTypeAttribute<R = unknown>(): R;
    marker<R = unknown>(): R;
    initWithRulerMarker_parent<R = unknown, P0 = unknown, P1 = unknown>(_initWithRulerMarker: P0, _parent: P1): R;
  }
  namespace classes {
    export interface NSAccessibilityRulerMarker<T = any> extends NSAccessibilityMockUIElement {
      alloc<R = NSAccessibilityRulerMarker>(): R;
      new: <R = NSAccessibilityRulerMarker>() => R;
      markerWithRulerMarker_parent<R = unknown, P0 = unknown, P1 = unknown>(_markerWithRulerMarker: P0, _parent: P1): R;
    }
  }
}

declare const NSAccessibilityRulerMarker: cocoa.classes.NSAccessibilityRulerMarker;
