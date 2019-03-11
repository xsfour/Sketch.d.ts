/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentController<T = any> extends cocoa.NSDocumentController {
    shoudNoteRecentDocumentForType<R = boolean, P0 = unknown>(_shoudNoteRecentDocumentForType: P0): R;
    openDocumentWithContentsOfURL_display_context_callback<R = void, P0 = unknown, P1 = boolean, P2 = unknown, P3 = unknown>(_openDocumentWithContentsOfURL: P0, _display: P1, _context: P2, _callback: P3): R;
  }
  namespace classes {
    export interface MSDocumentController<T = any> extends cocoa.classes.NSDocumentController {
      alloc<R = MSDocumentController>(): R;
      new: <R = MSDocumentController>() => R;
    }
  }
}

declare const MSDocumentController: cocoa.classes.MSDocumentController;
