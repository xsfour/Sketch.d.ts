/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptFakeObjectTypeDescription<T = any> extends NSScriptObjectTypeDescription {
    initWithAppleEventCode<R = unknown, P0 = number>(_initWithAppleEventCode: P0): R;
  }
  namespace classes {
    export interface NSScriptFakeObjectTypeDescription<T = any> extends NSScriptObjectTypeDescription {
      alloc<R = NSScriptFakeObjectTypeDescription>(): R;
      new: <R = NSScriptFakeObjectTypeDescription>() => R;
    }
  }
}

declare const NSScriptFakeObjectTypeDescription: cocoa.classes.NSScriptFakeObjectTypeDescription;
