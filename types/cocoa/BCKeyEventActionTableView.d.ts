/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCKeyEventActionTableView<T = any> extends NSTableView {
    setTarget_action_forKeyDownEventWithCharacters<R = void, P0 = unknown, P1 = string, P2 = unknown>(_setTarget: P0, _action: P1, _forKeyDownEventWithCharacters: P2): R;
    keyEvents<R = NSMutableDictionary>(): R;
    setKeyEvents<R = void, P0 = NSMutableDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface BCKeyEventActionTableView<T = any> extends NSTableView {
      alloc<R = BCKeyEventActionTableView>(): R;
      new: <R = BCKeyEventActionTableView>() => R;
    }
  }
}

declare const BCKeyEventActionTableView: cocoa.classes.BCKeyEventActionTableView;
