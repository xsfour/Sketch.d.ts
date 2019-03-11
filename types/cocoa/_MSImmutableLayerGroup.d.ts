/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableLayerGroup<T = any> extends cocoa.MSImmutableStyledLayer {
    layers<R = cocoa.NSArray>(): R;
    setLayers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    sharedObjectID<R = cocoa.NSString>(): R;
    setSharedObjectID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    hasClickThrough<R = boolean>(): R;
    setHasClickThrough<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableLayerGroup<T = any> extends cocoa.classes.MSImmutableStyledLayer {
      alloc<R = _MSImmutableLayerGroup>(): R;
      new: <R = _MSImmutableLayerGroup>() => R;
    }
  }
}
