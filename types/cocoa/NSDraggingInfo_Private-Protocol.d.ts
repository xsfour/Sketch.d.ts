/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDraggingInfo_PrivateProtocol<T = any> extends cocoa.NSObjectProtocol {
    _draggingStage<R = number>(): R;
    _draggingForce<R = number>(): R;
    _enableSpringLoading_options<R = void, P0 = boolean, P1 = number>(__enableSpringLoading: P0, _options: P1): R;
    _isOnDemandSpringLoadingHoverArmed<R = boolean>(): R;
    _isOnDemandSpringLoadingArmed<R = boolean>(): R;
    _setOnDemandSpringLoadingEnabled<R = void, P0 = boolean>(__setOnDemandSpringLoadingEnabled: P0): R;
    _isOnDemandSpringLoadingActivated<R = boolean>(): R;
  }
  namespace classes {
    export interface NSDraggingInfo_PrivateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSDraggingInfo_PrivateProtocol: cocoa.classes.NSDraggingInfo_PrivateProtocol;
