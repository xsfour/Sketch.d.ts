/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageKitViewTextAttachmentCellHelper<T = any> extends NSViewTextAttachmentCellHelper {
    viewFrameChanged<R = void, P0 = unknown>(_viewFrameChanged: P0): R;
    setCharacterIndex<R = void, P0 = number>(_setCharacterIndex: P0): R;
    characterIndex<R = number>(): R;
  }
  namespace classes {
    export interface NSImageKitViewTextAttachmentCellHelper<T = any> extends NSViewTextAttachmentCellHelper {
      alloc<R = NSImageKitViewTextAttachmentCellHelper>(): R;
      new: <R = NSImageKitViewTextAttachmentCellHelper>() => R;
    }
  }
}

declare const NSImageKitViewTextAttachmentCellHelper: cocoa.classes.NSImageKitViewTextAttachmentCellHelper;
