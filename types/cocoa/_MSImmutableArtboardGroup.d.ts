/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableArtboardGroup<T = any> extends cocoa.MSImmutableLayerGroup {
    verticalRulerData<R = cocoa.MSImmutableRulerData>(): R;
    setVerticalRulerData<R = void, P0 = cocoa.MSImmutableRulerData>(_v: P0): R;
    layout<R = cocoa.MSImmutableLayoutGrid>(): R;
    setLayout<R = void, P0 = cocoa.MSImmutableLayoutGrid>(_v: P0): R;
    horizontalRulerData<R = cocoa.MSImmutableRulerData>(): R;
    setHorizontalRulerData<R = void, P0 = cocoa.MSImmutableRulerData>(_v: P0): R;
    grid<R = cocoa.MSImmutableSimpleGrid>(): R;
    setGrid<R = void, P0 = cocoa.MSImmutableSimpleGrid>(_v: P0): R;
    backgroundColor<R = cocoa.MSImmutableColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.MSImmutableColor>(_v: P0): R;
    resizesContent<R = boolean>(): R;
    setResizesContent<R = void, P0 = boolean>(_v: P0): R;
    presetDictionary<R = cocoa.NSDictionary>(): R;
    setPresetDictionary<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    isFlowHome<R = boolean>(): R;
    setIsFlowHome<R = void, P0 = boolean>(_v: P0): R;
    includeInCloudUpload<R = boolean>(): R;
    setIncludeInCloudUpload<R = void, P0 = boolean>(_v: P0): R;
    includeBackgroundColorInExport<R = boolean>(): R;
    setIncludeBackgroundColorInExport<R = void, P0 = boolean>(_v: P0): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableArtboardGroup<T = any> extends cocoa.classes.MSImmutableLayerGroup {
      alloc<R = _MSImmutableArtboardGroup>(): R;
      new: <R = _MSImmutableArtboardGroup>() => R;
    }
  }
}
