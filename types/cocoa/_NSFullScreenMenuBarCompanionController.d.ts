/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenMenuBarCompanionController<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    contentController<R = unknown>(): R;
    setContentController<R = void, P0 = unknown>(_setContentController: P0): R;
    updateContentViewForMenuBarReveal<R = void>(): R;
    dispose<R = void>(): R;
    menuBarReveal<R = number>(): R;
    setMenuBarReveal<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFullScreenMenuBarCompanionController<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSFullScreenMenuBarCompanionController>(): R;
      new: <R = _NSFullScreenMenuBarCompanionController>() => R;
    }
  }
}
