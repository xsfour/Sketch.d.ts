/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReorderingView<T = any> extends cocoa.NSView, cocoa.NSDraggingSourceProtocol {
    cxx_destruct<R = void>(): R;
    wantsSeparator<R = boolean>(): R;
    startDragWithEvent<R = void, P0 = unknown>(_startDragWithEvent: P0): R;
    reorderingTag<R = number>(): R;
    setReorderingTag<R = void, P0 = number>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    duplicateAction<R = string>(): R;
    setDuplicateAction<R = void, P0 = string>(_v: P0): R;
    deleteAction<R = string>(): R;
    setDeleteAction<R = void, P0 = string>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSReorderingView<T = any> extends cocoa.classes.NSView, cocoa.classes.NSDraggingSourceProtocol {
      alloc<R = MSReorderingView>(): R;
      new: <R = MSReorderingView>() => R;
    }
  }
}

declare const MSReorderingView: cocoa.classes.MSReorderingView;
