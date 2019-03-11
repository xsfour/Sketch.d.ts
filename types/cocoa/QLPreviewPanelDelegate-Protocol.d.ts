/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface QLPreviewPanelDelegateProtocol<T = any> {
    previewPanel_transitionImageForPreviewItem_contentRect<R = unknown, P0 = cocoa.QLPreviewPanel, P1 = cocoa.QLPreviewItem, P2 = cocoa.CGRect>(_previewPanel: P0, _transitionImageForPreviewItem: P1, _contentRect: P2): R;
    previewPanel_sourceFrameOnScreenForPreviewItem<R = cocoa.CGRect, P0 = cocoa.QLPreviewPanel, P1 = cocoa.QLPreviewItem>(_previewPanel: P0, _sourceFrameOnScreenForPreviewItem: P1): R;
    previewPanel_handleEvent<R = boolean, P0 = cocoa.QLPreviewPanel, P1 = cocoa.NSEvent>(_previewPanel: P0, _handleEvent: P1): R;
  }
  namespace classes {
    export interface QLPreviewPanelDelegateProtocol<T = any> {  }
  }
}

declare const QLPreviewPanelDelegateProtocol: cocoa.classes.QLPreviewPanelDelegateProtocol;
