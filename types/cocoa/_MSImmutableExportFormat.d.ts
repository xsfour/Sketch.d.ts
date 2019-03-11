/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableExportFormat<T = any> extends cocoa.MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    visibleScaleType<R = number>(): R;
    setVisibleScaleType<R = void, P0 = number>(_v: P0): R;
    scale<R = number>(): R;
    setScale<R = void, P0 = number>(_v: P0): R;
    namingScheme<R = number>(): R;
    setNamingScheme<R = void, P0 = number>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    fileFormat<R = cocoa.NSString>(): R;
    setFileFormat<R = void, P0 = cocoa.NSString>(_v: P0): R;
    absoluteSize<R = number>(): R;
    setAbsoluteSize<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableExportFormat<T = any> extends cocoa.classes.MSImmutableModelObject {
      alloc<R = _MSImmutableExportFormat>(): R;
      new: <R = _MSImmutableExportFormat>() => R;
    }
  }
}
