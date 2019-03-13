/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentActivity<T = any> extends _NSDocumentSerializationObject {
    cancelAndFinishAsynchronously<R = void, P0 = string>(_cancelAndFinishAsynchronously: P0): R;
    cancelled<R = boolean>(): R;
    setCancelled<R = void, P0 = boolean>(_v: P0): R;
    cancellationHandler<R = CDUnknownBlockType>(): R;
    setCancellationHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface _NSDocumentActivity<T = any> extends _NSDocumentSerializationObject {
      alloc<R = _NSDocumentActivity>(): R;
      new: <R = _NSDocumentActivity>() => R;
    }
  }
}
