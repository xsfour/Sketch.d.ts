/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBezierPathEnumerator<T = any> extends NSObject, NSFastEnumerationProtocol {
    cxx_destruct<R = void>(): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    pathItems<R = NSArray>(): R;
    setPathItems<R = void, P0 = NSArray>(_v: P0): R;
    reverse<R = boolean>(): R;
    setReverse<R = void, P0 = boolean>(_v: P0): R;
    bezierPath<R = NSBezierPath>(): R;
    setBezierPath<R = void, P0 = NSBezierPath>(_v: P0): R;
  }
  namespace classes {
    export interface NSBezierPathEnumerator<T = any> extends NSObject, NSFastEnumerationProtocol {
      alloc<R = NSBezierPathEnumerator>(): R;
      new: <R = NSBezierPathEnumerator>() => R;
    }
  }
}

declare const NSBezierPathEnumerator: cocoa.classes.NSBezierPathEnumerator;
