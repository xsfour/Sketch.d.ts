/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAltButtonTargetProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    altButtonCanShowAltImage<R = boolean, P0 = MSAltButton>(_altButtonCanShowAltImage: P0): R;
  }
  namespace MSAltButtonTargetProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
