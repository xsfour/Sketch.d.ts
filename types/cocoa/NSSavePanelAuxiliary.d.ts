/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSavePanelAuxiliary<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
  }
  namespace classes {
    export interface NSSavePanelAuxiliary<T = any> extends NSObject {
      alloc<R = NSSavePanelAuxiliary>(): R;
      new: <R = NSSavePanelAuxiliary>() => R;
    }
  }
}

declare const NSSavePanelAuxiliary: cocoa.classes.NSSavePanelAuxiliary;
