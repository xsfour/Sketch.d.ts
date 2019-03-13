/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThemeZoomWidget<T = any> extends _NSThemeWidget {}
  namespace classes {
    export interface _NSThemeZoomWidget<T = any> extends _NSThemeWidget {
      alloc<R = _NSThemeZoomWidget>(): R;
      new: <R = _NSThemeZoomWidget>() => R;
      zoomWidgetInView_withButtonID_action<R = unknown, P0 = unknown, P1 = number, P2 = string>(_zoomWidgetInView: P0, _withButtonID: P1, _action: P2): R;
    }
  }
}
