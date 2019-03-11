/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTokenFieldCell<T = any> extends cocoa.NSTextFieldCell {
    cxx_destruct<R = void>(): R;
    mouseMoved<R = void, P0 = unknown>(_mouseMoved: P0): R;
    draggingEntered<R = number, P0 = unknown>(_draggingEntered: P0): R;
    acceptableDragTypes<R = unknown>(): R;
    _concludeTracking<R = void>(): R;
    _setPerformingDrop<R = void, P0 = boolean>(__setPerformingDrop: P0): R;
    _performingDrop<R = boolean>(): R;
    textView_completions_forPartialWordRange_indexOfSelectedItem<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa._NSRange, P3 = number>(_textView: P0, _completions: P1, _forPartialWordRange: P2, _indexOfSelectedItem: P3): R;
    rangeForUserCompletion<R = cocoa._NSRange>(): R;
    tokenTextView_readSelectionFromPasteboard_type<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_tokenTextView: P0, _readSelectionFromPasteboard: P1, _type: P2): R;
    tokenTextView_writeSelectionToPasteboard_type<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_tokenTextView: P0, _writeSelectionToPasteboard: P1, _type: P2): R;
    tokenTextView_shouldUseReadablePasteboardTypes<R = unknown, P0 = unknown, P1 = unknown>(_tokenTextView: P0, _shouldUseReadablePasteboardTypes: P1): R;
    tokenTextView_shouldUseWritablePasteboardTypes<R = unknown, P0 = unknown, P1 = unknown>(_tokenTextView: P0, _shouldUseWritablePasteboardTypes: P1): R;
    tokenTextView_shouldUseDraggingPasteboardTypes<R = unknown, P0 = unknown, P1 = unknown>(_tokenTextView: P0, _shouldUseDraggingPasteboardTypes: P1): R;
    _characterAtIndex_shouldTerminateString<R = boolean, P0 = number, P1 = unknown>(__characterAtIndex: P0, _shouldTerminateString: P1): R;
    textView_willChangeSelectionFromCharacterRange_toCharacterRange<R = cocoa._NSRange, P0 = unknown, P1 = cocoa._NSRange, P2 = cocoa._NSRange>(_textView: P0, _willChangeSelectionFromCharacterRange: P1, _toCharacterRange: P2): R;
    autoValidationDisabled<R = boolean>(): R;
    setAutoValidationDisabled<R = void, P0 = boolean>(_setAutoValidationDisabled: P0): R;
    textView_shouldChangeTypingAttributes_toAttributes<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_textView: P0, _shouldChangeTypingAttributes: P1, _toAttributes: P2): R;
    layoutManager_shouldUseSelectedTextAttributes_atCharacterIndex_effectiveRange<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = cocoa._NSRange>(_layoutManager: P0, _shouldUseSelectedTextAttributes: P1, _atCharacterIndex: P2, _effectiveRange: P3): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    tokenAttachment__immediateActionAnimationControllerForRepresentedObject_inTextView<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_tokenAttachment: P0, __immediateActionAnimationControllerForRepresentedObject: P1, _inTextView: P2): R;
    menuForTokenAttachment<R = unknown, P0 = unknown>(_menuForTokenAttachment: P0): R;
    hasMenuForTokenAttachment<R = boolean, P0 = unknown>(_hasMenuForTokenAttachment: P0): R;
    tokenAttachment_doubleClickedInRect_ofView_atCharacterIndex<R = boolean, P0 = unknown, P1 = cocoa.CGRect, P2 = unknown, P3 = number>(_tokenAttachment: P0, _doubleClickedInRect: P1, _ofView: P2, _atCharacterIndex: P3): R;
    tokenAttachment_shouldUseTokenAttachmentCell<R = unknown, P0 = unknown, P1 = unknown>(_tokenAttachment: P0, _shouldUseTokenAttachmentCell: P1): R;
    setUpTokenAttachmentCell_forRepresentedObject<R = unknown, P0 = unknown, P1 = unknown>(_setUpTokenAttachmentCell: P0, _forRepresentedObject: P1): R;
    setTextColor<R = void, P0 = unknown>(_setTextColor: P0): R;
    setLineBreakMode<R = void, P0 = number>(_setLineBreakMode: P0): R;
    setBaseWritingDirection<R = void, P0 = number>(_setBaseWritingDirection: P0): R;
    setControlSize<R = void, P0 = number>(_setControlSize: P0): R;
    setWraps<R = void, P0 = boolean>(_setWraps: P0): R;
    setAlignment<R = void, P0 = number>(_setAlignment: P0): R;
    setScrollable<R = void, P0 = boolean>(_setScrollable: P0): R;
    _tokenizeCharactersAdjacentToSelectionForTextView_terminatorsNeeded<R = boolean, P0 = unknown, P1 = boolean>(__tokenizeCharactersAdjacentToSelectionForTextView: P0, _terminatorsNeeded: P1): R;
    _representedObjectsForString_andAttributedString_range<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa._NSRange>(__representedObjectsForString: P0, _andAttributedString: P1, _range: P2): R;
    _stringForRepresentedObjects<R = unknown, P0 = unknown>(__stringForRepresentedObjects: P0): R;
    _attributedStringForRepresentedObjects<R = unknown, P0 = unknown>(__attributedStringForRepresentedObjects: P0): R;
    _defaultTokenizingCharacter<R = unknown>(): R;
    tokenStyle<R = number>(): R;
    setTokenStyle<R = void, P0 = number>(_v: P0): R;
    delegate<R = cocoa.NSTokenFieldCellDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSTokenFieldCellDelegate>(_v: P0): R;
    completionDelay<R = number>(): R;
    setCompletionDelay<R = void, P0 = number>(_v: P0): R;
    tokenizingCharacterSet<R = cocoa.NSCharacterSet>(): R;
    setTokenizingCharacterSet<R = void, P0 = cocoa.NSCharacterSet>(_v: P0): R;
  }
  namespace classes {
    export interface NSTokenFieldCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = NSTokenFieldCell>(): R;
      new: <R = NSTokenFieldCell>() => R;
      defaultCompletionDelay<R = number>(): R;
      defaultTokenizingCharacterSet<R = unknown>(): R;
    }
  }
}

declare const NSTokenFieldCell: cocoa.classes.NSTokenFieldCell;
