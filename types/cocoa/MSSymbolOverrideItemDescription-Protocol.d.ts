/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolOverrideItemDescriptionProtocol<T = any> {
    overrideRepresentation<R = MSOverrideRepresentation>(): R;
    placeholderIdentifier<R = NSNumber>(): R;
  }
  namespace classes {
    export interface MSSymbolOverrideItemDescriptionProtocol<T = any> {  }
  }
}
