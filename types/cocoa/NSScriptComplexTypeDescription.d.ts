/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptComplexTypeDescription<T = any> extends cocoa.NSScriptTypeDescription {
    alternativeTypeDescriptions<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithAppleEventCode_alernativeTypeDescriptions<R = unknown, P0 = number, P1 = unknown>(_initWithAppleEventCode: P0, _alernativeTypeDescriptions: P1): R;
    appendObjectClassDeclarationToAETEData<R = void, P0 = unknown>(_appendObjectClassDeclarationToAETEData: P0): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
  }
  namespace classes {
    export interface NSScriptComplexTypeDescription<T = any> extends cocoa.classes.NSScriptTypeDescription {
      alloc<R = NSScriptComplexTypeDescription>(): R;
      new: <R = NSScriptComplexTypeDescription>() => R;
    }
  }
}

declare const NSScriptComplexTypeDescription: cocoa.classes.NSScriptComplexTypeDescription;
