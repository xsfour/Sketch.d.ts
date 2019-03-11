/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSArtboardGroup<T = any> extends cocoa.MSLayerGroup {
    verticalRulerData<R = cocoa.MSRulerData>(): R;
    setVerticalRulerData<R = void, P0 = cocoa.MSRulerData>(_v: P0): R;
    layout<R = cocoa.MSLayoutGrid>(): R;
    setLayout<R = void, P0 = cocoa.MSLayoutGrid>(_v: P0): R;
    horizontalRulerData<R = cocoa.MSRulerData>(): R;
    setHorizontalRulerData<R = void, P0 = cocoa.MSRulerData>(_v: P0): R;
    grid<R = cocoa.MSSimpleGrid>(): R;
    setGrid<R = void, P0 = cocoa.MSSimpleGrid>(_v: P0): R;
    backgroundColor<R = cocoa.MSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.MSColor>(_v: P0): R;
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
    export interface _MSArtboardGroup<T = any> extends cocoa.classes.MSLayerGroup {
      alloc<R = _MSArtboardGroup>(): R;
      new: <R = _MSArtboardGroup>() => R;
    }
  }
}
