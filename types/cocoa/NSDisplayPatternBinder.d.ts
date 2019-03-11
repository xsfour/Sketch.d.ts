/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDisplayPatternBinder<T = any> extends cocoa.NSBinder {
    _adjustObject_mode_triggerRedisplay<R = void, P0 = unknown, P1 = cocoa.__NSKeyValueCodingControllerModeType, P2 = boolean>(__adjustObject: P0, _mode: P1, _triggerRedisplay: P2): R;
    _setDisplayValue_object_triggerRedisplay<R = void, P0 = unknown, P1 = unknown, P2 = boolean>(__setDisplayValue: P0, _object: P1, _triggerRedisplay: P2): R;
    _patternForBinding<R = unknown, P0 = unknown>(__patternForBinding: P0): R;
    displayPattern<R = unknown>(): R;
    setDisplayPattern<R = void, P0 = unknown>(_setDisplayPattern: P0): R;
  }
  namespace classes {
    export interface NSDisplayPatternBinder<T = any> extends cocoa.classes.NSBinder {
      alloc<R = NSDisplayPatternBinder>(): R;
      new: <R = NSDisplayPatternBinder>() => R;
      _cellOrControlForObject<R = unknown, P0 = unknown>(__cellOrControlForObject: P0): R;
      _enumeratedDisplayPatternTitleBindings<R = unknown, P0 = number>(__enumeratedDisplayPatternTitleBindings: P0): R;
    }
  }
}

declare const NSDisplayPatternBinder: cocoa.classes.NSDisplayPatternBinder;
