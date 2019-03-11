/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverridePoint<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    distanceToOverridePoint<R = number, P0 = unknown>(_distanceToOverridePoint: P0): R;
    comparisonScoreAgainst<R = number, P0 = unknown>(_comparisonScoreAgainst: P0): R;
    description<R = unknown>(): R;
    initWithLayer_property_parent<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithLayer: P0, _property: P1, _parent: P2): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    layerName<R = cocoa.NSString>(): R;
    parent<R = cocoa.MSOverridePoint>(): R;
    property<R = cocoa.NSString>(): R;
    layerID<R = cocoa.NSString>(): R;
    isStyleOverride<R = boolean>(): R;
    isSymbolOverride<R = boolean>(): R;
    pathComponents<R = cocoa.NSArray>(): R;
    path<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSOverridePoint<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSOverridePoint>(): R;
      new: <R = MSOverridePoint>() => R;
    }
  }
}

declare const MSOverridePoint: cocoa.classes.MSOverridePoint;
