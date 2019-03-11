/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentPreviewGenerationProtocol<T = any> extends cocoa.NSObjectProtocol {
    generatePreviewsForDocument<R = cocoa.NSDictionary, P0 = cocoa.MSImmutableDocumentData>(_generatePreviewsForDocument: P0): R;
  }
  namespace classes {
    export interface MSDocumentPreviewGenerationProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSDocumentPreviewGenerationProtocol: cocoa.classes.MSDocumentPreviewGenerationProtocol;
