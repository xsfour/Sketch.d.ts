/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableAssetCollection<T = any> extends cocoa.MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    imageCollection<R = cocoa.MSImmutableImageCollection>(): R;
    setImageCollection<R = void, P0 = cocoa.MSImmutableImageCollection>(_v: P0): R;
    gradients<R = cocoa.NSArray>(): R;
    setGradients<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    exportPresets<R = cocoa.NSArray>(): R;
    setExportPresets<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    colors<R = cocoa.NSArray>(): R;
    setColors<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    images<R = cocoa.NSArray>(): R;
    setImages<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableAssetCollection<T = any> extends cocoa.classes.MSImmutableModelObject {
      alloc<R = _MSImmutableAssetCollection>(): R;
      new: <R = _MSImmutableAssetCollection>() => R;
    }
  }
}
