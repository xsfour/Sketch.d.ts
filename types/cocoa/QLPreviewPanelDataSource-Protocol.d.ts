/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface QLPreviewPanelDataSourceProtocol<T = any> {
    previewPanel_previewItemAtIndex<R = cocoa.QLPreviewItem, P0 = cocoa.QLPreviewPanel, P1 = number>(_previewPanel: P0, _previewItemAtIndex: P1): R;
    numberOfPreviewItemsInPreviewPanel<R = number, P0 = cocoa.QLPreviewPanel>(_numberOfPreviewItemsInPreviewPanel: P0): R;
  }
  namespace classes {
    export interface QLPreviewPanelDataSourceProtocol<T = any> {  }
  }
}

declare const QLPreviewPanelDataSourceProtocol: cocoa.classes.QLPreviewPanelDataSourceProtocol;
