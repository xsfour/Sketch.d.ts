/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCopyCSSAttributesAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    copyCSSAttributes<R = void, P0 = unknown>(_copyCSSAttributes: P0): R;
  }
  namespace classes {
    export interface MSCopyCSSAttributesAction<T = any> extends MSDocumentAction {
      alloc<R = MSCopyCSSAttributesAction>(): R;
      new: <R = MSCopyCSSAttributesAction>() => R;
    }
  }
}

declare const MSCopyCSSAttributesAction: cocoa.classes.MSCopyCSSAttributesAction;
