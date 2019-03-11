/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLibraryObjectProtocol<T = any> extends cocoa.NSObjectProtocol {
    document<R = cocoa.MSDocumentData>(): R;
    libraryID<R = cocoa.NSString>(): R;
    name<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSLibraryObjectProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSLibraryObjectProtocol: cocoa.classes.MSLibraryObjectProtocol;
