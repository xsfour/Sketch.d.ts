/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableLayerAncestry<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    absoluteRect<R = cocoa.CGRect>(): R;
    ancestorsForLayerInGroup_array<R = boolean, P0 = unknown, P1 = unknown>(_ancestorsForLayerInGroup: P0, _array: P1): R;
    findAncestors<R = unknown>(): R;
    initWithMSLayer<R = unknown, P0 = unknown>(_initWithMSLayer: P0): R;
    initWithLayer_ancestors_document<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithLayer: P0, _ancestors: P1, _document: P2): R;
    initWithLayer_document<R = unknown, P0 = unknown, P1 = unknown>(_initWithLayer: P0, _document: P1): R;
    ancestors<R = cocoa.NSArray>(): R;
    setAncestors<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    page<R = cocoa.MSImmutablePage>(): R;
    document<R = cocoa.MSImmutableDocumentData>(): R;
    layer<R = cocoa.MSImmutableLayer>(): R;
    artboard<R = cocoa.MSImmutableArtboardGroup>(): R;
    parentGroup<R = cocoa.MSImmutableLayerGroup>(): R;
    ancestorsAndSelf<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MSImmutableLayerAncestry<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSImmutableLayerAncestry>(): R;
      new: <R = MSImmutableLayerAncestry>() => R;
      ancestryWithMSLayer<R = unknown, P0 = unknown>(_ancestryWithMSLayer: P0): R;
    }
  }
}

declare const MSImmutableLayerAncestry: cocoa.classes.MSImmutableLayerAncestry;
