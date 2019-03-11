/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutablePage<T = any> extends cocoa.MSImmutableLayerGroup {
    verticalRulerData<R = cocoa.MSImmutableRulerData>(): R;
    setVerticalRulerData<R = void, P0 = cocoa.MSImmutableRulerData>(_v: P0): R;
    layout<R = cocoa.MSImmutableLayoutGrid>(): R;
    setLayout<R = void, P0 = cocoa.MSImmutableLayoutGrid>(_v: P0): R;
    horizontalRulerData<R = cocoa.MSImmutableRulerData>(): R;
    setHorizontalRulerData<R = void, P0 = cocoa.MSImmutableRulerData>(_v: P0): R;
    grid<R = cocoa.MSImmutableSimpleGrid>(): R;
    setGrid<R = void, P0 = cocoa.MSImmutableSimpleGrid>(_v: P0): R;
    includeInCloudUpload<R = boolean>(): R;
    setIncludeInCloudUpload<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutablePage<T = any> extends cocoa.classes.MSImmutableLayerGroup {
      alloc<R = _MSImmutablePage>(): R;
      new: <R = _MSImmutablePage>() => R;
    }
  }
}
