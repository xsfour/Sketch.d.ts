/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInterfaceImageOwnerProtocol<T = any> {
    cacheOwner<R = unknown>(): R;
    interfaceImageIdentifier<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSInterfaceImageOwnerProtocol<T = any> {  }
  }
}

declare const MSInterfaceImageOwnerProtocol: cocoa.classes.MSInterfaceImageOwnerProtocol;
