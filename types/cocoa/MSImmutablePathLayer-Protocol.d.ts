/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutablePathLayerProtocol<T = any> extends MSLayerProtocol {
    decoratedPathInBoundsInDocument_asSubpath<R = MSPath, P0 = MSImmutableDocumentData, P1 = boolean>(_decoratedPathInBoundsInDocument: P0, _asSubpath: P1): R;
    style<R = MSImmutableStyle>(): R;
    hasMarkers<R = boolean>(): R;
  }
  namespace classes {
    export interface MSImmutablePathLayerProtocol<T = any> extends MSLayerProtocol {  }
  }
}
