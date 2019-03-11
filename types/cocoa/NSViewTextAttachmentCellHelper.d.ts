/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewTextAttachmentCellHelper<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    removeView<R = void>(): R;
    setView<R = void, P0 = unknown>(_setView: P0): R;
    view<R = unknown>(): R;
    initWithView_layoutManager_characterIndex_attachmentCell<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_initWithView: P0, _layoutManager: P1, _characterIndex: P2, _attachmentCell: P3): R;
  }
  namespace classes {
    export interface NSViewTextAttachmentCellHelper<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSViewTextAttachmentCellHelper>(): R;
      new: <R = NSViewTextAttachmentCellHelper>() => R;
    }
  }
}

declare const NSViewTextAttachmentCellHelper: cocoa.classes.NSViewTextAttachmentCellHelper;
