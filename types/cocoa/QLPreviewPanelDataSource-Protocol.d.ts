/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface QLPreviewPanelDataSourceProtocol<T = any> {
    previewPanel_previewItemAtIndex<R = QLPreviewItem, P0 = QLPreviewPanel, P1 = number>(_previewPanel: P0, _previewItemAtIndex: P1): R;
    numberOfPreviewItemsInPreviewPanel<R = number, P0 = QLPreviewPanel>(_numberOfPreviewItemsInPreviewPanel: P0): R;
  }
  namespace classes {
    export interface QLPreviewPanelDataSourceProtocol<T = any> {  }
  }
}
