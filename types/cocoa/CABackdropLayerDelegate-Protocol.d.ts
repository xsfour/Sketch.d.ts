/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CABackdropLayerDelegateProtocol<T = any> extends CALayerDelegateProtocol {
    backdropLayerStatisticsDidChange<R = void, P0 = CABackdropLayer>(_backdropLayerStatisticsDidChange: P0): R;
  }
  namespace classes {
    export interface CABackdropLayerDelegateProtocol<T = any> extends CALayerDelegateProtocol {  }
  }
}
