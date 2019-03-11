/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewDrawOperation<T = any> extends cocoa.NSOperation {
    view<R = unknown>(): R;
    initWithView_rect_rectSet_windowRegion_options_owningDisplayOperation<R = unknown, P0 = unknown, P1 = cocoa.CGRect, P2 = unknown, P3 = unknown, P4 = number, P5 = unknown>(_initWithView: P0, _rect: P1, _rectSet: P2, _windowRegion: P3, _options: P4, _owningDisplayOperation: P5): R;
  }
  namespace classes {
    export interface _NSViewDrawOperation<T = any> extends cocoa.classes.NSOperation {
      alloc<R = _NSViewDrawOperation>(): R;
      new: <R = _NSViewDrawOperation>() => R;
    }
  }
}
