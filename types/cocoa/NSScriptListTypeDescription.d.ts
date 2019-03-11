/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptListTypeDescription<T = any> extends cocoa.NSScriptTypeDescription {
    elementTypeDescription<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithElementTypeDescription<R = unknown, P0 = unknown>(_initWithElementTypeDescription: P0): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
  }
  namespace classes {
    export interface NSScriptListTypeDescription<T = any> extends cocoa.classes.NSScriptTypeDescription {
      alloc<R = NSScriptListTypeDescription>(): R;
      new: <R = NSScriptListTypeDescription>() => R;
    }
  }
}

declare const NSScriptListTypeDescription: cocoa.classes.NSScriptListTypeDescription;
