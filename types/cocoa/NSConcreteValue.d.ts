/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteValue<T = any> extends cocoa.NSValue {
    _value<R = void>(): R;
    objCType<R = string>(): R;
  }
  namespace classes {
    export interface NSConcreteValue<T = any> extends cocoa.classes.NSValue {
      alloc<R = NSConcreteValue>(): R;
      new: <R = NSConcreteValue>() => R;
    }
  }
}

declare const NSConcreteValue: cocoa.classes.NSConcreteValue;
