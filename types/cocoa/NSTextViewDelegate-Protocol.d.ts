/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextViewDelegateProtocol<T = any> {
    textView_draggedCell_inRect_event<R = void, P0 = cocoa.NSTextView, P1 = cocoa.NSTextAttachmentCell, P2 = cocoa.CGRect, P3 = cocoa.NSEvent>(_textView: P0, _draggedCell: P1, _inRect: P2, _event: P3): R;
    textView_doubleClickedOnCell_inRect<R = void, P0 = cocoa.NSTextView, P1 = cocoa.NSTextAttachmentCell, P2 = cocoa.CGRect>(_textView: P0, _doubleClickedOnCell: P1, _inRect: P2): R;
    textView_clickedOnCell_inRect<R = void, P0 = cocoa.NSTextView, P1 = cocoa.NSTextAttachmentCell, P2 = cocoa.CGRect>(_textView: P0, _clickedOnCell: P1, _inRect: P2): R;
    textView_clickedOnLink<R = boolean, P0 = cocoa.NSTextView, P1 = unknown>(_textView: P0, _clickedOnLink: P1): R;
    textView_shouldSelectCandidateAtIndex<R = boolean, P0 = cocoa.NSTextView, P1 = number>(_textView: P0, _shouldSelectCandidateAtIndex: P1): R;
    textView_candidates_forSelectedRange<R = cocoa.NSArray, P0 = cocoa.NSTextView, P1 = cocoa.NSArray, P2 = cocoa._NSRange>(_textView: P0, _candidates: P1, _forSelectedRange: P2): R;
    textView_candidatesForSelectedRange<R = cocoa.NSArray, P0 = cocoa.NSTextView, P1 = cocoa._NSRange>(_textView: P0, _candidatesForSelectedRange: P1): R;
    textView_shouldUpdateTouchBarItemIdentifiers<R = cocoa.NSArray, P0 = cocoa.NSTextView, P1 = cocoa.NSArray>(_textView: P0, _shouldUpdateTouchBarItemIdentifiers: P1): R;
    undoManagerForTextView<R = cocoa.NSUndoManager, P0 = cocoa.NSTextView>(_undoManagerForTextView: P0): R;
    textView_willShowSharingServicePicker_forItems<R = cocoa.NSSharingServicePicker, P0 = cocoa.NSTextView, P1 = cocoa.NSSharingServicePicker, P2 = cocoa.NSArray>(_textView: P0, _willShowSharingServicePicker: P1, _forItems: P2): R;
    textView_URLForContentsOfTextAttachment_atIndex<R = cocoa.NSURL, P0 = cocoa.NSTextView, P1 = cocoa.NSTextAttachment, P2 = number>(_textView: P0, _URLForContentsOfTextAttachment: P1, _atIndex: P2): R;
    textView_didCheckTextInRange_types_options_results_orthography_wordCount<R = cocoa.NSArray, P0 = cocoa.NSTextView, P1 = cocoa._NSRange, P2 = number, P3 = cocoa.NSDictionary, P4 = cocoa.NSArray, P5 = cocoa.NSOrthography, P6 = number>(_textView: P0, _didCheckTextInRange: P1, _types: P2, _options: P3, _results: P4, _orthography: P5, _wordCount: P6): R;
    textView_willCheckTextInRange_options_types<R = cocoa.NSDictionary, P0 = cocoa.NSTextView, P1 = cocoa._NSRange, P2 = cocoa.NSDictionary, P3 = number>(_textView: P0, _willCheckTextInRange: P1, _options: P2, _types: P3): R;
    textView_menu_forEvent_atIndex<R = cocoa.NSMenu, P0 = cocoa.NSTextView, P1 = cocoa.NSMenu, P2 = cocoa.NSEvent, P3 = number>(_textView: P0, _menu: P1, _forEvent: P2, _atIndex: P3): R;
    textView_shouldSetSpellingState_range<R = number, P0 = cocoa.NSTextView, P1 = number, P2 = cocoa._NSRange>(_textView: P0, _shouldSetSpellingState: P1, _range: P2): R;
    textView_doCommandBySelector<R = boolean, P0 = cocoa.NSTextView, P1 = string>(_textView: P0, _doCommandBySelector: P1): R;
    textView_shouldChangeTextInRange_replacementString<R = boolean, P0 = cocoa.NSTextView, P1 = cocoa._NSRange, P2 = cocoa.NSString>(_textView: P0, _shouldChangeTextInRange: P1, _replacementString: P2): R;
    textView_completions_forPartialWordRange_indexOfSelectedItem<R = cocoa.NSArray, P0 = cocoa.NSTextView, P1 = cocoa.NSArray, P2 = cocoa._NSRange, P3 = number>(_textView: P0, _completions: P1, _forPartialWordRange: P2, _indexOfSelectedItem: P3): R;
    textView_willDisplayToolTip_forCharacterAtIndex<R = cocoa.NSString, P0 = cocoa.NSTextView, P1 = cocoa.NSString, P2 = number>(_textView: P0, _willDisplayToolTip: P1, _forCharacterAtIndex: P2): R;
    textViewDidChangeTypingAttributes<R = void, P0 = cocoa.NSNotification>(_textViewDidChangeTypingAttributes: P0): R;
    textViewDidChangeSelection<R = void, P0 = cocoa.NSNotification>(_textViewDidChangeSelection: P0): R;
    textView_shouldChangeTypingAttributes_toAttributes<R = cocoa.NSDictionary, P0 = cocoa.NSTextView, P1 = cocoa.NSDictionary, P2 = cocoa.NSDictionary>(_textView: P0, _shouldChangeTypingAttributes: P1, _toAttributes: P2): R;
    textView_shouldChangeTextInRanges_replacementStrings<R = boolean, P0 = cocoa.NSTextView, P1 = cocoa.NSArray, P2 = cocoa.NSArray>(_textView: P0, _shouldChangeTextInRanges: P1, _replacementStrings: P2): R;
    textView_willChangeSelectionFromCharacterRanges_toCharacterRanges<R = cocoa.NSArray, P0 = cocoa.NSTextView, P1 = cocoa.NSArray, P2 = cocoa.NSArray>(_textView: P0, _willChangeSelectionFromCharacterRanges: P1, _toCharacterRanges: P2): R;
    textView_willChangeSelectionFromCharacterRange_toCharacterRange<R = cocoa._NSRange, P0 = cocoa.NSTextView, P1 = cocoa._NSRange, P2 = cocoa._NSRange>(_textView: P0, _willChangeSelectionFromCharacterRange: P1, _toCharacterRange: P2): R;
    textView_writeCell_atIndex_toPasteboard_type<R = boolean, P0 = cocoa.NSTextView, P1 = cocoa.NSTextAttachmentCell, P2 = number, P3 = cocoa.NSPasteboard, P4 = cocoa.NSString>(_textView: P0, _writeCell: P1, _atIndex: P2, _toPasteboard: P3, _type: P4): R;
    textView_writablePasteboardTypesForCell_atIndex<R = cocoa.NSArray, P0 = cocoa.NSTextView, P1 = cocoa.NSTextAttachmentCell, P2 = number>(_textView: P0, _writablePasteboardTypesForCell: P1, _atIndex: P2): R;
    textView_draggedCell_inRect_event_atIndex<R = void, P0 = cocoa.NSTextView, P1 = cocoa.NSTextAttachmentCell, P2 = cocoa.CGRect, P3 = cocoa.NSEvent, P4 = number>(_textView: P0, _draggedCell: P1, _inRect: P2, _event: P3, _atIndex: P4): R;
    textView_doubleClickedOnCell_inRect_atIndex<R = void, P0 = cocoa.NSTextView, P1 = cocoa.NSTextAttachmentCell, P2 = cocoa.CGRect, P3 = number>(_textView: P0, _doubleClickedOnCell: P1, _inRect: P2, _atIndex: P3): R;
    textView_clickedOnCell_inRect_atIndex<R = void, P0 = cocoa.NSTextView, P1 = cocoa.NSTextAttachmentCell, P2 = cocoa.CGRect, P3 = number>(_textView: P0, _clickedOnCell: P1, _inRect: P2, _atIndex: P3): R;
    textView_clickedOnLink_atIndex<R = boolean, P0 = cocoa.NSTextView, P1 = unknown, P2 = number>(_textView: P0, _clickedOnLink: P1, _atIndex: P2): R;
  }
  namespace classes {
    export interface NSTextViewDelegateProtocol<T = any> {  }
  }
}

declare const NSTextViewDelegateProtocol: cocoa.classes.NSTextViewDelegateProtocol;
