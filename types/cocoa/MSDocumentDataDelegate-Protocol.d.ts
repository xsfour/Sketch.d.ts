/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentDataDelegateProtocol<T = any> extends NSObjectProtocol {
    visibleCanvasRectForDocumentData<R = CGRect, P0 = MSDocumentData>(_visibleCanvasRectForDocumentData: P0): R;
    determineCurrentArtboard<R = void>(): R;
    refreshOverlay<R = void>(): R;
    refreshOverlayInRect<R = void, P0 = CGRect>(_refreshOverlayInRect: P0): R;
    layerTreeLayoutDidChange<R = void>(): R;
    documentData_metadataForKey_object<R = unknown, P0 = MSDocumentData, P1 = NSString, P2 = MSModelObject>(_documentData: P0, _metadataForKey: P1, _object: P2): R;
    documentData_storeMetadata_forKey_object<R = void, P0 = MSDocumentData, P1 = unknown, P2 = NSString, P3 = MSModelObject>(_documentData: P0, _storeMetadata: P1, _forKey: P2, _object: P3): R;
    documentDidChange<R = void, P0 = MSDocumentData>(_documentDidChange: P0): R;
    documentDataImmediatelyShowSelectionForAllLayers<R = void, P0 = MSDocumentData>(_documentDataImmediatelyShowSelectionForAllLayers: P0): R;
    documentData_temporarilyHideSelectionForLayers<R = void, P0 = MSDocumentData, P1 = NSArray>(_documentData: P0, _temporarilyHideSelectionForLayers: P1): R;
    documentData_didChangeToPage<R = void, P0 = MSDocumentData, P1 = MSPage>(_documentData: P0, _didChangeToPage: P1): R;
  }
  namespace classes {
    export interface MSDocumentDataDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
