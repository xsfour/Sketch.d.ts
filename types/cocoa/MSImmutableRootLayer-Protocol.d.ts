/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableRootLayerProtocol<T = any> extends cocoa.MSLayerTraitsProtocol {
    contentBoundsForDocument<R = cocoa.CGRect, P0 = cocoa.MSImmutableDocumentData>(_contentBoundsForDocument: P0): R;
    verticalRulerData<R = cocoa.MSImmutableRulerData>(): R;
    horizontalRulerData<R = cocoa.MSImmutableRulerData>(): R;
    layout<R = cocoa.MSImmutableLayoutGrid>(): R;
    grid<R = cocoa.MSImmutableSimpleGrid>(): R;
  }
  namespace classes {
    export interface MSImmutableRootLayerProtocol<T = any> extends cocoa.classes.MSLayerTraitsProtocol {  }
  }
}

declare const MSImmutableRootLayerProtocol: cocoa.classes.MSImmutableRootLayerProtocol;
