/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptRecordTypeDescription<T = any> extends cocoa.NSScriptTypeDescription {
    fieldDescriptionForKey<R = unknown, P0 = unknown>(_fieldDescriptionForKey: P0): R;
    fieldDescriptionForAppleEventCode<R = unknown, P0 = number>(_fieldDescriptionForAppleEventCode: P0): R;
  }
  namespace classes {
    export interface NSScriptRecordTypeDescription<T = any> extends cocoa.classes.NSScriptTypeDescription {
      alloc<R = NSScriptRecordTypeDescription>(): R;
      new: <R = NSScriptRecordTypeDescription>() => R;
    }
  }
}

declare const NSScriptRecordTypeDescription: cocoa.classes.NSScriptRecordTypeDescription;
