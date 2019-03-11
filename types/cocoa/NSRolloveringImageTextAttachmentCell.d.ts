/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRolloveringImageTextAttachmentCell<T = any> extends cocoa.NSViewTextAttachmentCell, cocoa.NSServicesRolloverViewDelegateProtocol, cocoa.NSSharingServiceDelegateProtocol, cocoa.NSSharingServicePickerDelegateProtocol {
    sharingService_containerFrameOnScreenForShareItem<R = cocoa.CGRect, P0 = unknown, P1 = unknown>(_sharingService: P0, _containerFrameOnScreenForShareItem: P1): R;
    sharingServicePicker_shouldShowForView<R = boolean, P0 = unknown, P1 = unknown>(_sharingServicePicker: P0, _shouldShowForView: P1): R;
    sharingServicePicker_sharingServicesForItems_mask_proposedSharingServices<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_sharingServicePicker: P0, _sharingServicesForItems: P1, _mask: P2, _proposedSharingServices: P3): R;
    picker<R = unknown>(): R;
    itemsForSharingServices<R = unknown>(): R;
    triggerRelayoutOfTextView<R = void>(): R;
    menu<R = cocoa.NSMenu>(): R;
    setMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    textView<R = cocoa.NSTextView>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSRolloveringImageTextAttachmentCell<T = any> extends cocoa.classes.NSViewTextAttachmentCell, cocoa.classes.NSServicesRolloverViewDelegateProtocol, cocoa.classes.NSSharingServiceDelegateProtocol, cocoa.classes.NSSharingServicePickerDelegateProtocol {
      alloc<R = NSRolloveringImageTextAttachmentCell>(): R;
      new: <R = NSRolloveringImageTextAttachmentCell>() => R;
    }
  }
}

declare const NSRolloveringImageTextAttachmentCell: cocoa.classes.NSRolloveringImageTextAttachmentCell;
