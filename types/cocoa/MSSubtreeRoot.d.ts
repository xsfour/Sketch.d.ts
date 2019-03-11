/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSubtreeRoot<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    page<R = unknown>(): R;
    overlayDirtyDiffRectForPage<R = cocoa.CGRect, P0 = unknown>(_overlayDirtyDiffRectForPage: P0): R;
    contentDirtyDiffRectForPage<R = cocoa.CGRect, P0 = unknown>(_contentDirtyDiffRectForPage: P0): R;
    document<R = cocoa.MSImmutableDocumentData>(): R;
    setDocument<R = void, P0 = cocoa.MSImmutableDocumentData>(_v: P0): R;
    ancestorsOfObject<R = cocoa.NSArray>(): R;
    setAncestorsOfObject<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    object<R = cocoa.MSImmutableModelObject>(): R;
    setObject<R = void, P0 = cocoa.MSImmutableModelObject>(_v: P0): R;
    webExportableRootLayer<R = cocoa.MSWebExportableRootLayer>(): R;
  }
  namespace classes {
    export interface MSSubtreeRoot<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSSubtreeRoot>(): R;
      new: <R = MSSubtreeRoot>() => R;
    }
  }
}

declare const MSSubtreeRoot: cocoa.classes.MSSubtreeRoot;
