/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextAttachmentCell<T = any> extends cocoa.NSCell, cocoa.NSTextAttachmentCellProtocol {
    wantsToTrackMouseForEvent<R = boolean, P0 = unknown>(_wantsToTrackMouseForEvent: P0): R;
    setCellBaselineOffset<R = void, P0 = cocoa.CGPoint>(_setCellBaselineOffset: P0): R;
    proxy<R = unknown>(): R;
    accessibilityIsURLAttributeSettable<R = boolean>(): R;
    accessibilityURLAttribute<R = unknown>(): R;
    accessibilityIsSubroleAttributeSettable<R = boolean>(): R;
    accessibilitySubroleAttribute<R = unknown>(): R;
    accessibilityDescriptionAttribute<R = unknown>(): R;
    attachment<R = cocoa.NSTextAttachment>(): R;
    setAttachment<R = void, P0 = cocoa.NSTextAttachment>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTextAttachmentCell<T = any> extends cocoa.classes.NSCell, cocoa.classes.NSTextAttachmentCellProtocol {
      alloc<R = NSTextAttachmentCell>(): R;
      new: <R = NSTextAttachmentCell>() => R;
    }
  }
}

declare const NSTextAttachmentCell: cocoa.classes.NSTextAttachmentCell;
