/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCodingProtocol<T = any> {
    initWithUnarchiver<R = unknown, P0 = cocoa.MSBaseUnarchiver>(_initWithUnarchiver: P0): R;
    encodeWithArchiver<R = void, P0 = cocoa.MSBaseArchiver>(_encodeWithArchiver: P0): R;
    initWithUnarchiver_migratingFrom_toVersion<R = unknown, P0 = cocoa.MSBaseUnarchiver, P1 = number, P2 = number>(_initWithUnarchiver: P0, _migratingFrom: P1, _toVersion: P2): R;
    archiveReferenceIdentifier_bc<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSCodingProtocol<T = any> {  }
  }
}

declare const MSCodingProtocol: cocoa.classes.MSCodingProtocol;
