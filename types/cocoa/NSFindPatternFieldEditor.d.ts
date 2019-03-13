/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindPatternFieldEditor<T = any> extends NSTextView {
    readablePasteboardTypes<R = unknown>(): R;
    writablePasteboardTypes<R = unknown>(): R;
    acceptableDragTypes<R = unknown>(): R;
    usesFontPanel<R = boolean>(): R;
    setUsesFontPanel<R = void, P0 = boolean>(_setUsesFontPanel: P0): R;
  }
  namespace classes {
    export interface NSFindPatternFieldEditor<T = any> extends NSTextView {
      alloc<R = NSFindPatternFieldEditor>(): R;
      new: <R = NSFindPatternFieldEditor>() => R;
      findPatternFieldEditorForWindow<R = unknown, P0 = unknown>(_findPatternFieldEditorForWindow: P0): R;
    }
  }
}

declare const NSFindPatternFieldEditor: cocoa.classes.NSFindPatternFieldEditor;
