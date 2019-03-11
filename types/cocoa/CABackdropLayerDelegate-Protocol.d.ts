/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CABackdropLayerDelegateProtocol<T = any> extends cocoa.CALayerDelegateProtocol {
    backdropLayerStatisticsDidChange<R = void, P0 = cocoa.CABackdropLayer>(_backdropLayerStatisticsDidChange: P0): R;
  }
  namespace classes {
    export interface CABackdropLayerDelegateProtocol<T = any> extends cocoa.classes.CALayerDelegateProtocol {  }
  }
}

declare const CABackdropLayerDelegateProtocol: cocoa.classes.CABackdropLayerDelegateProtocol;
