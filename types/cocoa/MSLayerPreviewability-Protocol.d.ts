/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerPreviewabilityProtocol<T = any> {
    contextualMenuPreviewTemplateImage<R = cocoa.NSImage>(): R;
    unselectedPreviewTemplateImage<R = cocoa.NSImage>(): R;
    selectedPreviewTemplateImage<R = cocoa.NSImage>(): R;
    badgeType<R = number>(): R;
  }
  namespace classes {
    export interface MSLayerPreviewabilityProtocol<T = any> {  }
  }
}

declare const MSLayerPreviewabilityProtocol: cocoa.classes.MSLayerPreviewabilityProtocol;
