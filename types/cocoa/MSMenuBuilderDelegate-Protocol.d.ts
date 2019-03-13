/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMenuBuilderDelegateProtocol<T = any> {
    previewColorSpaceForItem<R = NSColorSpace, P0 = NSMenuItem>(_previewColorSpaceForItem: P0): R;
  }
  namespace classes {
    export interface MSMenuBuilderDelegateProtocol<T = any> {  }
  }
}
