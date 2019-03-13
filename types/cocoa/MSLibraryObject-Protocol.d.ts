/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLibraryObjectProtocol<T = any> extends NSObjectProtocol {
    document<R = MSDocumentData>(): R;
    libraryID<R = NSString>(): R;
    name<R = NSString>(): R;
  }
  namespace classes {
    export interface MSLibraryObjectProtocol<T = any> extends NSObjectProtocol {  }
  }
}
