/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSplitViewSpringLoadingView<T = any> extends NSView {
    _unSpringLoad<R = void>(): R;
    _springLoad<R = void>(): R;
    springLoadingExited<R = void, P0 = unknown>(_springLoadingExited: P0): R;
    springLoadingHighlightChanged<R = void, P0 = unknown>(_springLoadingHighlightChanged: P0): R;
    springLoadingActivated_draggingInfo<R = void, P0 = boolean, P1 = unknown>(_springLoadingActivated: P0, _draggingInfo: P1): R;
    springLoadingEntered<R = number, P0 = unknown>(_springLoadingEntered: P0): R;
    _canSpringLoad<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    canSpringLoadHandler<R = CDUnknownBlockType>(): R;
    setCanSpringLoadHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    springLoadingHandler<R = CDUnknownBlockType>(): R;
    setSpringLoadingHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    orientation<R = number>(): R;
    setOrientation<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSSplitViewSpringLoadingView<T = any> extends NSView {
      alloc<R = _NSSplitViewSpringLoadingView>(): R;
      new: <R = _NSSplitViewSpringLoadingView>() => R;
    }
  }
}
