/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSnappingAccumulator<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    hash<R = number>(): R;
    removeAllSpacingSnaps<R = void>(): R;
    addDistanceMeasurement<R = void, P0 = unknown>(_addDistanceMeasurement: P0): R;
    removeAllDimensionSnaps<R = void>(): R;
    addDimensionMeasurement<R = void, P0 = unknown>(_addDimensionMeasurement: P0): R;
    removeAllEdgeSnaps<R = void>(): R;
    addLineRelationship<R = void, P0 = unknown>(_addLineRelationship: P0): R;
    initWithAxis<R = unknown, P0 = number>(_initWithAxis: P0): R;
    spacingSnaps<R = cocoa.NSArray>(): R;
    dimensionSnaps<R = cocoa.NSArray>(): R;
    edgeSnaps<R = cocoa.NSArray>(): R;
    axis<R = number>(): R;
  }
  namespace classes {
    export interface MSSnappingAccumulator<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSSnappingAccumulator>(): R;
      new: <R = MSSnappingAccumulator>() => R;
    }
  }
}

declare const MSSnappingAccumulator: cocoa.classes.MSSnappingAccumulator;
