/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCloudSharingPostShareViewController<T = any> extends cocoa.NSViewController, cocoa.NSRemoteViewDelegateProtocol {
    disconnectionHandler<R = cocoa.CDUnknownBlockType>(): R;
    setDisconnectionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    shouldRetainExportedObject<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSCloudSharingPostShareViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSRemoteViewDelegateProtocol {
      alloc<R = _NSCloudSharingPostShareViewController>(): R;
      new: <R = _NSCloudSharingPostShareViewController>() => R;
      requestViewControllerForPopover_withItem_options_sharingServiceParameters_connectionHandler<R = void, P0 = boolean, P1 = unknown, P2 = number, P3 = unknown, P4 = cocoa.CDUnknownBlockType>(_requestViewControllerForPopover: P0, _withItem: P1, _options: P2, _sharingServiceParameters: P3, _connectionHandler: P4): R;
    }
  }
}
