/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBridgedTextCorrectionController<T = any> extends NSResponder {
    cxx_destruct<R = void>(): R;
    _alternativesTimer<R = void>(): R;
    toggleAutomaticSpellingCorrection<R = void, P0 = unknown>(_toggleAutomaticSpellingCorrection: P0): R;
    isAutomaticSpellingCorrectionEnabled<R = boolean>(): R;
    setAutomaticSpellingCorrectionEnabled<R = void, P0 = boolean>(_setAutomaticSpellingCorrectionEnabled: P0): R;
    toggleGrammarChecking<R = void, P0 = unknown>(_toggleGrammarChecking: P0): R;
    isContinuousSpellCheckingEnabled<R = boolean>(): R;
    ignoreSpelling<R = void, P0 = unknown>(_ignoreSpelling: P0): R;
    changeSpelling<R = void, P0 = unknown>(_changeSpelling: P0): R;
    _changeSpellingToWord<R = void, P0 = unknown>(__changeSpellingToWord: P0): R;
    showGuessPanel<R = void, P0 = unknown>(_showGuessPanel: P0): R;
    checkSpelling<R = void, P0 = unknown>(_checkSpelling: P0): R;
    _checkSpelling<R = void, P0 = boolean>(__checkSpelling: P0): R;
    _modifiedGrammarRangeForRange_details<R = _NSRange, P0 = _NSRange, P1 = unknown>(__modifiedGrammarRangeForRange: P0, _details: P1): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    traitsChangedFrom_to<R = void, P0 = unknown, P1 = unknown>(_traitsChangedFrom: P0, _to: P1): R;
    selectedRangeChangedFrom_to<R = void, P0 = _NSRange, P1 = _NSRange>(_selectedRangeChangedFrom: P0, _to: P1): R;
    performActionsForSelectedRange<R = void, P0 = _NSRange>(_performActionsForSelectedRange: P0): R;
    checkTextWithSelectedRange<R = void, P0 = _NSRange>(_checkTextWithSelectedRange: P0): R;
    checkTextInRange_types<R = void, P0 = _NSRange, P1 = number>(_checkTextInRange: P0, _types: P1): R;
    handleTextCheckingResults_forRange_types_options_orthography_wordCount<R = void, P0 = unknown, P1 = _NSRange, P2 = number, P3 = unknown, P4 = unknown, P5 = number>(_handleTextCheckingResults: P0, _forRange: P1, _types: P2, _options: P3, _orthography: P4, _wordCount: P5): R;
    replaceCharactersInRange_withString<R = void, P0 = _NSRange, P1 = unknown>(_replaceCharactersInRange: P0, _withString: P1): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    validateUserInterfaceItem<R = boolean, P0 = unknown>(_validateUserInterfaceItem: P0): R;
    handlesMenuItem<R = boolean, P0 = unknown>(_handlesMenuItem: P0): R;
    hasMarkedText<R = boolean>(): R;
    setSelectedRange<R = void, P0 = _NSRange>(_setSelectedRange: P0): R;
    selectedRange<R = _NSRange>(): R;
    string<R = unknown>(): R;
    contextDidInsertText_replacementRange<R = void, P0 = unknown, P1 = _NSRange>(_contextDidInsertText: P0, _replacementRange: P1): R;
    attributedString<R = unknown>(): R;
    initWithTextInputContext<R = unknown, P0 = unknown>(_initWithTextInputContext: P0): R;
    alternativesString<R = NSMutableAttributedString>(): R;
    setAlternativesString<R = void, P0 = NSMutableAttributedString>(_v: P0): R;
    bubbleTimer<R = __CFRunLoopTimer>(): R;
    setBubbleTimer<R = void, P0 = __CFRunLoopTimer>(_v: P0): R;
    previousInsertionRange<R = _NSRange>(): R;
    setPreviousInsertionRange<R = void, P0 = _NSRange>(_v: P0): R;
    bubbleRange<R = _NSRange>(): R;
    setBubbleRange<R = void, P0 = _NSRange>(_v: P0): R;
    autocorrectionType<R = number>(): R;
    setAutocorrectionType<R = void, P0 = number>(_v: P0): R;
    spellCheckingType<R = number>(): R;
    setSpellCheckingType<R = void, P0 = number>(_v: P0): R;
    autocorrectionEnabledUserSetting<R = number>(): R;
    setAutocorrectionEnabledUserSetting<R = void, P0 = number>(_v: P0): R;
    grammarCheckingEnabledUserSetting<R = number>(): R;
    setGrammarCheckingEnabledUserSetting<R = void, P0 = number>(_v: P0): R;
    secureTextEntry<R = boolean>(): R;
    setSecureTextEntry<R = void, P0 = boolean>(_v: P0): R;
    previousString<R = NSString>(): R;
    setPreviousString<R = void, P0 = NSString>(_v: P0): R;
    prechangeCheckingSequenceNumber<R = number>(): R;
    setPrechangeCheckingSequenceNumber<R = void, P0 = number>(_v: P0): R;
    previousCheckingSequenceNumber<R = number>(): R;
    setPreviousCheckingSequenceNumber<R = void, P0 = number>(_v: P0): R;
    spellCheckerDocumentTag<R = number>(): R;
    setSpellCheckerDocumentTag<R = void, P0 = number>(_v: P0): R;
    textInputContext<R = NSTextInputContext>(): R;
    setTextInputContext<R = void, P0 = NSTextInputContext>(_v: P0): R;
    enabledTextCheckingTypes<R = number>(): R;
    grammarCheckingEnabled<R = boolean>(): R;
    setGrammarCheckingEnabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSBridgedTextCorrectionController<T = any> extends NSResponder {
      alloc<R = NSBridgedTextCorrectionController>(): R;
      new: <R = NSBridgedTextCorrectionController>() => R;
    }
  }
}

declare const NSBridgedTextCorrectionController: cocoa.classes.NSBridgedTextCorrectionController;
