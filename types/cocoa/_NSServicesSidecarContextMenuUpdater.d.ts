/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSServicesSidecarContextMenuUpdater<T = any> extends cocoa._NSServicesContextMenuUpdater {}
  namespace classes {
    export interface _NSServicesSidecarContextMenuUpdater<T = any> extends cocoa.classes._NSServicesContextMenuUpdater {
      alloc<R = _NSServicesSidecarContextMenuUpdater>(): R;
      new: <R = _NSServicesSidecarContextMenuUpdater>() => R;
    }
  }
}
