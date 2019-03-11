/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptPropertiesRecordTypeDescription<T = any> extends cocoa.NSScriptRecordTypeDescription {
    dealloc<R = void>(): R;
    initWithContainerClassDescription<R = unknown, P0 = unknown>(_initWithContainerClassDescription: P0): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
  }
  namespace classes {
    export interface NSScriptPropertiesRecordTypeDescription<T = any> extends cocoa.classes.NSScriptRecordTypeDescription {
      alloc<R = NSScriptPropertiesRecordTypeDescription>(): R;
      new: <R = NSScriptPropertiesRecordTypeDescription>() => R;
    }
  }
}

declare const NSScriptPropertiesRecordTypeDescription: cocoa.classes.NSScriptPropertiesRecordTypeDescription;
