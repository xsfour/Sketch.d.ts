/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportFormatContainerProtocol<T = any> {
    removeExportFormat<R = void, P0 = MSExportFormat>(_removeExportFormat: P0): R;
    exportFormats<R = NSArray>(): R;
    containingLayer<R = MSLayer>(): R;
  }
  namespace classes {
    export interface MSExportFormatContainerProtocol<T = any> {  }
  }
}
