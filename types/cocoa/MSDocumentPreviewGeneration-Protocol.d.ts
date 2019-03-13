/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentPreviewGenerationProtocol<T = any> extends NSObjectProtocol {
    generatePreviewsForDocument<R = NSDictionary, P0 = MSImmutableDocumentData>(_generatePreviewsForDocument: P0): R;
  }
  namespace classes {
    export interface MSDocumentPreviewGenerationProtocol<T = any> extends NSObjectProtocol {  }
  }
}
