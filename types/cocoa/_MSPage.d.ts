/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSPage<T = any> extends cocoa.MSLayerGroup {
    verticalRulerData<R = cocoa.MSRulerData>(): R;
    setVerticalRulerData<R = void, P0 = cocoa.MSRulerData>(_v: P0): R;
    layout<R = cocoa.MSLayoutGrid>(): R;
    setLayout<R = void, P0 = cocoa.MSLayoutGrid>(_v: P0): R;
    horizontalRulerData<R = cocoa.MSRulerData>(): R;
    setHorizontalRulerData<R = void, P0 = cocoa.MSRulerData>(_v: P0): R;
    grid<R = cocoa.MSSimpleGrid>(): R;
    setGrid<R = void, P0 = cocoa.MSSimpleGrid>(_v: P0): R;
    includeInCloudUpload<R = boolean>(): R;
    setIncludeInCloudUpload<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSPage<T = any> extends cocoa.classes.MSLayerGroup {
      alloc<R = _MSPage>(): R;
      new: <R = _MSPage>() => R;
    }
  }
}
