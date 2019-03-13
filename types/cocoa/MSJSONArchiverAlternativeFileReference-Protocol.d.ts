/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONArchiverAlternativeFileReferenceProtocol<T = any> extends NSObjectProtocol {
    encodeReferenceInJSONZipArchive<R = void, P0 = BCJSONZippedEncoder>(_encodeReferenceInJSONZipArchive: P0): R;
    archiveReferenceIdentifier_bc<R = NSString>(): R;
  }
  namespace classes {
    export interface MSJSONArchiverAlternativeFileReferenceProtocol<T = any> extends NSObjectProtocol {
      decodeReferenceFromJSONZipArchive_withReference<R = unknown, P0 = BCJSONZippedDecoder, P1 = NSString>(_decodeReferenceFromJSONZipArchive: P0, _withReference: P1): R;
    }
  }
}
