/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpacityKeyboardShortcutRecognizer<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    discardAccumulatedEvents<R = void>(): R;
    opacityFromCharacters<R = number, P0 = unknown>(_opacityFromCharacters: P0): R;
    keyDown<R = void, P0 = unknown>(_keyDown: P0): R;
    initWithTarget_action<R = unknown, P0 = unknown, P1 = string>(_initWithTarget: P0, _action: P1): R;
    opacity<R = number>(): R;
    concatenationDuration<R = number>(): R;
    setConcatenationDuration<R = void, P0 = number>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface MSOpacityKeyboardShortcutRecognizer<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSOpacityKeyboardShortcutRecognizer>(): R;
      new: <R = MSOpacityKeyboardShortcutRecognizer>() => R;
    }
  }
}

declare const MSOpacityKeyboardShortcutRecognizer: cocoa.classes.MSOpacityKeyboardShortcutRecognizer;
