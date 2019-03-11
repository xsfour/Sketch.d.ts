/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsStackItem<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    applyParameters<R = void, P0 = unknown>(_applyParameters: P0): R;
    _setupLayerAsPlaceholder<R = void, P0 = boolean>(__setupLayerAsPlaceholder: P0): R;
    documentFailedToLoad<R = boolean>(): R;
    setDocumentFailedToLoad<R = void, P0 = boolean>(_v: P0): R;
    hasWindowVisible<R = boolean>(): R;
    setHasWindowVisible<R = void, P0 = boolean>(_v: P0): R;
    hasValidSnapshot<R = boolean>(): R;
    setHasValidSnapshot<R = void, P0 = boolean>(_v: P0): R;
    layer<R = cocoa.NSDocumentRevisionsStackLayer>(): R;
    setLayer<R = void, P0 = cocoa.NSDocumentRevisionsStackLayer>(_v: P0): R;
    hasLocalData<R = boolean>(): R;
    setHasLocalData<R = void, P0 = boolean>(_v: P0): R;
    version<R = cocoa.NSFileVersion>(): R;
    setVersion<R = void, P0 = cocoa.NSFileVersion>(_v: P0): R;
    placeholderView<R = cocoa.NSDocumentRevisionsPlaceholderView>(): R;
    setPlaceholderView<R = void, P0 = cocoa.NSDocumentRevisionsPlaceholderView>(_v: P0): R;
  }
  namespace classes {
    export interface NSDocumentRevisionsStackItem<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDocumentRevisionsStackItem>(): R;
      new: <R = NSDocumentRevisionsStackItem>() => R;
      itemWithVersion<R = unknown, P0 = unknown>(_itemWithVersion: P0): R;
    }
  }
}

declare const NSDocumentRevisionsStackItem: cocoa.classes.NSDocumentRevisionsStackItem;
