/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableLayerGroup<T = any> extends MSImmutableStyledLayer {
    layers<R = NSArray>(): R;
    setLayers<R = void, P0 = NSArray>(_v: P0): R;
    sharedObjectID<R = NSString>(): R;
    setSharedObjectID<R = void, P0 = NSString>(_v: P0): R;
    hasClickThrough<R = boolean>(): R;
    setHasClickThrough<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableLayerGroup<T = any> extends MSImmutableStyledLayer {
      alloc<R = _MSImmutableLayerGroup>(): R;
      new: <R = _MSImmutableLayerGroup>() => R;
    }
  }
}
