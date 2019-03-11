/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPreviewGenerationProtocol<T = any> extends cocoa.NSObjectProtocol {
    generatePreviewWithImageSize_previewSize_colorSpace_backingScale_completionBlock<R = void, P0 = cocoa.CGSize, P1 = cocoa.CGSize, P2 = cocoa.NSColorSpace, P3 = number, P4 = cocoa.CDUnknownBlockType>(_generatePreviewWithImageSize: P0, _previewSize: P1, _colorSpace: P2, _backingScale: P3, _completionBlock: P4): R;
  }
  namespace classes {
    export interface MSPreviewGenerationProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSPreviewGenerationProtocol: cocoa.classes.MSPreviewGenerationProtocol;
