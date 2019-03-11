/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptObjectTypeDescription<T = any> extends cocoa.NSScriptTypeDescription {
    dealloc<R = void>(): R;
    initWithClassDescription<R = unknown, P0 = unknown>(_initWithClassDescription: P0): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
  }
  namespace classes {
    export interface NSScriptObjectTypeDescription<T = any> extends cocoa.classes.NSScriptTypeDescription {
      alloc<R = NSScriptObjectTypeDescription>(): R;
      new: <R = NSScriptObjectTypeDescription>() => R;
    }
  }
}

declare const NSScriptObjectTypeDescription: cocoa.classes.NSScriptObjectTypeDescription;
