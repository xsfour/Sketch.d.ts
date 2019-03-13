/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAltButtonTargetProtocol<T = any> extends NSObjectProtocol {
    altButtonCanShowAltImage<R = boolean, P0 = MSAltButton>(_altButtonCanShowAltImage: P0): R;
  }
  namespace classes {
    export interface MSAltButtonTargetProtocol<T = any> extends NSObjectProtocol {  }
  }
}
