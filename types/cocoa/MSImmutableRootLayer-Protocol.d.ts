/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableRootLayerProtocol<T = any> extends MSLayerTraitsProtocol {
    contentBoundsForDocument<R = CGRect, P0 = MSImmutableDocumentData>(_contentBoundsForDocument: P0): R;
    verticalRulerData<R = MSImmutableRulerData>(): R;
    horizontalRulerData<R = MSImmutableRulerData>(): R;
    layout<R = MSImmutableLayoutGrid>(): R;
    grid<R = MSImmutableSimpleGrid>(): R;
  }
  namespace classes {
    export interface MSImmutableRootLayerProtocol<T = any> extends MSLayerTraitsProtocol {  }
  }
}
