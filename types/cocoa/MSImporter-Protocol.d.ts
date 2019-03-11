/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImporterProtocol<T = any> extends cocoa.NSObjectProtocol {
    importAsLayer<R = cocoa.MSLayer>(): R;
    shouldCollapseSinglePage<R = boolean>(): R;
    shouldExpandPages<R = boolean>(): R;
    secondPhaseSubtitleForValue_maximum<R = cocoa.NSString, P0 = number, P1 = number>(_secondPhaseSubtitleForValue: P0, _maximum: P1): R;
    firstPhaseSubtitle<R = cocoa.NSString>(): R;
    finishImporting<R = void>(): R;
    importIntoPage_name_progress<R = void, P0 = cocoa.MSPage, P1 = cocoa.NSString, P2 = cocoa.CDUnknownBlockType>(_importIntoPage: P0, _name: P1, _progress: P2): R;
    prepareToImportFromURL<R = number, P0 = cocoa.NSURL>(_prepareToImportFromURL: P0): R;
    prepareToImportFromData<R = number, P0 = cocoa.NSData>(_prepareToImportFromData: P0): R;
  }
  namespace classes {
    export interface MSImporterProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSImporterProtocol: cocoa.classes.MSImporterProtocol;
