/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolOverrideItemDescriptionProtocol<T = any> {
    overrideRepresentation<R = cocoa.MSOverrideRepresentation>(): R;
    placeholderIdentifier<R = cocoa.NSNumber>(): R;
  }
  namespace classes {
    export interface MSSymbolOverrideItemDescriptionProtocol<T = any> {  }
  }
}

declare const MSSymbolOverrideItemDescriptionProtocol: cocoa.classes.MSSymbolOverrideItemDescriptionProtocol;
