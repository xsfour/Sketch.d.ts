/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCreateCommand<T = any> extends NSScriptCommand {
    _newObjectForContainer_inValueForKey_withClassDescription<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__newObjectForContainer: P0, _inValueForKey: P1, _withClassDescription: P2): R;
    resolvedKeyDictionary<R = NSDictionary>(): R;
    createClassDescription<R = NSScriptClassDescription>(): R;
  }
  namespace classes {
    export interface NSCreateCommand<T = any> extends NSScriptCommand {
      alloc<R = NSCreateCommand>(): R;
      new: <R = NSCreateCommand>() => R;
    }
  }
}

declare const NSCreateCommand: cocoa.classes.NSCreateCommand;
