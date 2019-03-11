/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAltButtonTargetProtocol<T = any> extends cocoa.NSObjectProtocol {
    altButtonCanShowAltImage<R = boolean, P0 = cocoa.MSAltButton>(_altButtonCanShowAltImage: P0): R;
  }
  namespace classes {
    export interface MSAltButtonTargetProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSAltButtonTargetProtocol: cocoa.classes.MSAltButtonTargetProtocol;
