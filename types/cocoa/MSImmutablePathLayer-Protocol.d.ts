/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutablePathLayerProtocol<T = any> extends cocoa.MSLayerProtocol {
    decoratedPathInBoundsInDocument_asSubpath<R = cocoa.MSPath, P0 = cocoa.MSImmutableDocumentData, P1 = boolean>(_decoratedPathInBoundsInDocument: P0, _asSubpath: P1): R;
    style<R = cocoa.MSImmutableStyle>(): R;
    hasMarkers<R = boolean>(): R;
  }
  namespace classes {
    export interface MSImmutablePathLayerProtocol<T = any> extends cocoa.classes.MSLayerProtocol {  }
  }
}

declare const MSImmutablePathLayerProtocol: cocoa.classes.MSImmutablePathLayerProtocol;
