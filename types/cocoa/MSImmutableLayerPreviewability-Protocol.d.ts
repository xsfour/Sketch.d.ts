/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableLayerPreviewabilityProtocol<T = any> {
    refreshPreviewImagesWithDocumentData_forOwner<R = void, P0 = MSImmutableDocumentData, P1 = MSInterfaceImageOwner>(_refreshPreviewImagesWithDocumentData: P0, _forOwner: P1): R;
    previewImagesRequireRefreshWithDocumentData_forOwner<R = boolean, P0 = MSImmutableDocumentData, P1 = MSInterfaceImageOwner>(_previewImagesRequireRefreshWithDocumentData: P0, _forOwner: P1): R;
  }
  namespace classes {
    export interface MSImmutableLayerPreviewabilityProtocol<T = any> {  }
  }
}
