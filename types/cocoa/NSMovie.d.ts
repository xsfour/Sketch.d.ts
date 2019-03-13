/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMovie<T = any> extends NSObject, NSCodingProtocol {
    QTMovie<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithMovie<R = unknown, P0 = unknown>(_initWithMovie: P0): R;
  }
  namespace classes {
    export interface NSMovie<T = any> extends NSObject, NSCodingProtocol {
      alloc<R = NSMovie>(): R;
      new: <R = NSMovie>() => R;
      _QTMovieClass<R = unknown>(): R;
      _loadQTKit<R = void>(): R;
    }
  }
}

declare const NSMovie: cocoa.classes.NSMovie;
