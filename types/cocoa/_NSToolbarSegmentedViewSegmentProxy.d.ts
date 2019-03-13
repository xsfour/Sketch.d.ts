/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarSegmentedViewSegmentProxy<T = any> extends NSAccessibilityReparentingProxy {
    accessibilitySizeAttribute<R = unknown>(): R;
    accessibilityPositionAttribute<R = unknown>(): R;
    accessibilityIsDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityDescriptionAttribute<R = unknown>(): R;
    accessibilityTitleAttribute<R = unknown>(): R;
    index<R = number>(): R;
  }
  namespace classes {
    export interface _NSToolbarSegmentedViewSegmentProxy<T = any> extends NSAccessibilityReparentingProxy {
      alloc<R = _NSToolbarSegmentedViewSegmentProxy>(): R;
      new: <R = _NSToolbarSegmentedViewSegmentProxy>() => R;
      segmentProxyFor_parent<R = unknown, P0 = unknown, P1 = unknown>(_segmentProxyFor: P0, _parent: P1): R;
    }
  }
}
