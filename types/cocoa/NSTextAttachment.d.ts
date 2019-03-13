/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextAttachment<T = any> {
    // + NSTextAttachment(NSTextAttachmentAdditions,NSTextView_ForceEvents):
    _processAttachmentWithNewContentsOfItem_hanlder<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__processAttachmentWithNewContentsOfItem: P0, _hanlder: P1): R;
    allowsEditingContents<R = boolean>(): R;
    setAllowsEditingContents<R = void, P0 = boolean>(_setAllowsEditingContents: P0): R;
    _immediateActionAnimationControllerForCharacterAtIndex_inTextView<R = unknown, P0 = number, P1 = unknown>(__immediateActionAnimationControllerForCharacterAtIndex: P0, _inTextView: P1): R;
  }
  namespace classes {
    export interface NSTextAttachment<T = any> {
      // + NSTextAttachment(NSTextAttachmentAdditions,NSTextView_ForceEvents):
      _usesRollover<R = boolean>(): R;
      _QTMovieViewClass<R = unknown>(): R;
      _QTMovieClass<R = unknown>(): R;
      _QTDataReferenceClass<R = unknown>(): R;
      _loadQTKit<R = void>(): R;
    }
  }
}

declare const NSTextAttachment: cocoa.classes.NSTextAttachment;
