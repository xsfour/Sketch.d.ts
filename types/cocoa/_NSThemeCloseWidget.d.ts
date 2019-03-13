/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThemeCloseWidget<T = any> extends _NSThemeWidget {
    setDocumentEdited<R = void, P0 = boolean>(_setDocumentEdited: P0): R;
  }
  namespace classes {
    export interface _NSThemeCloseWidget<T = any> extends _NSThemeWidget {
      alloc<R = _NSThemeCloseWidget>(): R;
      new: <R = _NSThemeCloseWidget>() => R;
      closeWidgetInView_withButtonID_action<R = unknown, P0 = unknown, P1 = number, P2 = string>(_closeWidgetInView: P0, _withButtonID: P1, _action: P2): R;
    }
  }
}
