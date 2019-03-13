/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBridgedTextTouchBarController<T = any> extends NSObject, NSTouchBarDelegateProtocol, NSCandidateListTouchBarItemDelegateProtocol {
    cxx_destruct<R = void>(): R;
    removeTextTouchBar<R = void>(): R;
    displayTextTouchBar<R = void>(): R;
    _quickTypeDidChange<R = void, P0 = unknown>(__quickTypeDidChange: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    insertCandidateTextCheckingResult<R = void, P0 = unknown>(_insertCandidateTextCheckingResult: P0): R;
    insertCandidateString_replacementRange_fromTextCheckingResult<R = void, P0 = unknown, P1 = _NSRange, P2 = boolean>(_insertCandidateString: P0, _replacementRange: P1, _fromTextCheckingResult: P2): R;
    _rangeForUserCompletion<R = _NSRange>(): R;
    handleCandidates_sequenceNumber<R = void, P0 = unknown, P1 = number>(_handleCandidates: P0, _sequenceNumber: P1): R;
    updateCandidates<R = void>(): R;
    _setupCandidateListTouchBarItem<R = unknown>(): R;
    _configureTouchBar_withIdentifiers<R = void, P0 = unknown, P1 = unknown>(__configureTouchBar: P0, _withIdentifiers: P1): R;
    _touchBarItemIdentifiers<R = unknown>(): R;
    updateTextCheckingTypes_forInputTraits<R = number, P0 = number, P1 = unknown>(_updateTextCheckingTypes: P0, _forInputTraits: P1): R;
    textCheckingTypesForCurrentPreferences<R = number>(): R;
    currentStringFromTextInputContext<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithTextInputContext<R = unknown, P0 = unknown>(_initWithTextInputContext: P0): R;
    lastCandidateString<R = NSString>(): R;
    setLastCandidateString<R = void, P0 = NSString>(_v: P0): R;
    candidateSequenceNumber<R = number>(): R;
    setCandidateSequenceNumber<R = void, P0 = number>(_v: P0): R;
    pendingCandidateUpdate<R = boolean>(): R;
    setPendingCandidateUpdate<R = void, P0 = boolean>(_v: P0): R;
    spellCheckerDocumentTag<R = number>(): R;
    setSpellCheckerDocumentTag<R = void, P0 = number>(_v: P0): R;
    candidateListItem<R = NSCandidateListTouchBarItem>(): R;
    setCandidateListItem<R = void, P0 = NSCandidateListTouchBarItem>(_v: P0): R;
    touchBar<R = NSTouchBar>(): R;
    setTouchBar<R = void, P0 = NSTouchBar>(_v: P0): R;
    inputView<R = NSTextInputClient>(): R;
    setInputView<R = void, P0 = NSTextInputClient>(_v: P0): R;
    textInputContext<R = NSTextInputContext>(): R;
    setTextInputContext<R = void, P0 = NSTextInputContext>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSBridgedTextTouchBarController<T = any> extends NSObject, NSTouchBarDelegateProtocol, NSCandidateListTouchBarItemDelegateProtocol {
      alloc<R = NSBridgedTextTouchBarController>(): R;
      new: <R = NSBridgedTextTouchBarController>() => R;
    }
  }
}

declare const NSBridgedTextTouchBarController: cocoa.classes.NSBridgedTextTouchBarController;
