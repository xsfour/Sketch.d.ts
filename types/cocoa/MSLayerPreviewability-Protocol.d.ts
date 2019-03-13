/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerPreviewabilityProtocol<T = any> {
    contextualMenuPreviewTemplateImage<R = NSImage>(): R;
    unselectedPreviewTemplateImage<R = NSImage>(): R;
    selectedPreviewTemplateImage<R = NSImage>(): R;
    badgeType<R = number>(): R;
  }
  namespace classes {
    export interface MSLayerPreviewabilityProtocol<T = any> {  }
  }
}
