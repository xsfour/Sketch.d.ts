/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLayoutRectObservable<T = any> extends cocoa.NSObservationSource {
    _reflectUpdatedRect<R = void, P0 = unknown>(__reflectUpdatedRect: P0): R;
    initWithRect_inLayoutItem<R = unknown, P0 = unknown, P1 = unknown>(_initWithRect: P0, _inLayoutItem: P1): R;
  }
  namespace classes {
    export interface _NSLayoutRectObservable<T = any> extends cocoa.classes.NSObservationSource {
      alloc<R = _NSLayoutRectObservable>(): R;
      new: <R = _NSLayoutRectObservable>() => R;
      observableForRect_inItem<R = unknown, P0 = unknown, P1 = unknown>(_observableForRect: P0, _inItem: P1): R;
    }
  }
}
