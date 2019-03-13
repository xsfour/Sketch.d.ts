/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSTextListTouchBarViewController<T = any> extends NSViewController {
    cxx_destruct<R = void>(): R;
    _selectList<R = void, P0 = unknown>(__selectList: P0): R;
    _updateSelections<R = void>(): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    textList<R = NSTextList>(): R;
    setTextList<R = void, P0 = NSTextList>(_v: P0): R;
  }
  namespace classes {
    export interface __NSTextListTouchBarViewController<T = any> extends NSViewController {
      alloc<R = __NSTextListTouchBarViewController>(): R;
      new: <R = __NSTextListTouchBarViewController>() => R;
      textListFormats<R = unknown>(): R;
    }
  }
}
