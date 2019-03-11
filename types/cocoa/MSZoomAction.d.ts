/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    zoomValueString<R = unknown>(): R;
    zoomValueDidChange<R = void>(): R;
    zoomTo400Action<R = void, P0 = unknown>(_zoomTo400Action: P0): R;
    zoomTo200Action<R = void, P0 = unknown>(_zoomTo200Action: P0): R;
    zoomTo50Action<R = void, P0 = unknown>(_zoomTo50Action: P0): R;
    zoomTo25Action<R = void, P0 = unknown>(_zoomTo25Action: P0): R;
    findZoomPopupButton<R = unknown>(): R;
    validate<R = boolean>(): R;
    hasSubMenu<R = boolean>(): R;
    zoomPopupButtonWithFrame<R = unknown, P0 = cocoa.CGRect>(_zoomPopupButtonWithFrame: P0): R;
    zoomButtonWithAction_imageNamed<R = unknown, P0 = unknown, P1 = unknown>(_zoomButtonWithAction: P0, _imageNamed: P1): R;
  }
  namespace classes {
    export interface MSZoomAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSZoomAction>(): R;
      new: <R = MSZoomAction>() => R;
    }
  }
}

declare const MSZoomAction: cocoa.classes.MSZoomAction;
