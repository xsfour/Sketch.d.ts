/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMenuBuilderDelegateProtocol<T = any> {
    previewColorSpaceForItem<R = cocoa.NSColorSpace, P0 = cocoa.NSMenuItem>(_previewColorSpaceForItem: P0): R;
  }
  namespace classes {
    export interface MSMenuBuilderDelegateProtocol<T = any> {  }
  }
}

declare const MSMenuBuilderDelegateProtocol: cocoa.classes.MSMenuBuilderDelegateProtocol;
