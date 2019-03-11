/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONArchiverAlternativeFileReferenceProtocol<T = any> extends cocoa.NSObjectProtocol {
    encodeReferenceInJSONZipArchive<R = void, P0 = cocoa.BCJSONZippedEncoder>(_encodeReferenceInJSONZipArchive: P0): R;
    archiveReferenceIdentifier_bc<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSJSONArchiverAlternativeFileReferenceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {
      decodeReferenceFromJSONZipArchive_withReference<R = unknown, P0 = cocoa.BCJSONZippedDecoder, P1 = cocoa.NSString>(_decodeReferenceFromJSONZipArchive: P0, _withReference: P1): R;
    }
  }
}

declare const MSJSONArchiverAlternativeFileReferenceProtocol: cocoa.classes.MSJSONArchiverAlternativeFileReferenceProtocol;
