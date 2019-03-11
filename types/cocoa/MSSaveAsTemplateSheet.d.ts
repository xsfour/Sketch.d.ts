/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSaveAsTemplateSheet<T = any> extends cocoa.CHSheetController {
    inputField<R = cocoa.NSTextField>(): R;
    setInputField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    inputCompletionBlock<R = cocoa.CDUnknownBlockType>(): R;
    setInputCompletionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface MSSaveAsTemplateSheet<T = any> extends cocoa.classes.CHSheetController {
      alloc<R = MSSaveAsTemplateSheet>(): R;
      new: <R = MSSaveAsTemplateSheet>() => R;
      runForDocument_completionBlock<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_runForDocument: P0, _completionBlock: P1): R;
    }
  }
}

declare const MSSaveAsTemplateSheet: cocoa.classes.MSSaveAsTemplateSheet;
