/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptSynonymDescription<T = any> extends NSObject {
    dealloc<R = void>(): R;
    initWithName_appleEventCode_isHidden_appleEventClassCode<R = unknown, P0 = unknown, P1 = number, P2 = boolean, P3 = number>(_initWithName: P0, _appleEventCode: P1, _isHidden: P2, _appleEventClassCode: P3): R;
  }
  namespace classes {
    export interface NSScriptSynonymDescription<T = any> extends NSObject {
      alloc<R = NSScriptSynonymDescription>(): R;
      new: <R = NSScriptSynonymDescription>() => R;
    }
  }
}

declare const NSScriptSynonymDescription: cocoa.classes.NSScriptSynonymDescription;
