/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportFormatContainerProtocol<T = any> {
    removeExportFormat<R = void, P0 = cocoa.MSExportFormat>(_removeExportFormat: P0): R;
    exportFormats<R = cocoa.NSArray>(): R;
    containingLayer<R = cocoa.MSLayer>(): R;
  }
  namespace classes {
    export interface MSExportFormatContainerProtocol<T = any> {  }
  }
}

declare const MSExportFormatContainerProtocol: cocoa.classes.MSExportFormatContainerProtocol;
