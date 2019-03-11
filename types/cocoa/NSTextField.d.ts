/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextField<T = any> extends cocoa.NSControl, cocoa.NSTextViewDelegateProtocol, cocoa.NSUserInterfaceValidationsProtocol, cocoa.NSAccessibilityNavigableStaticTextProtocol {
    textView_prepareMenu_forCharacterAtIndex_withEvent<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_textView: P0, _prepareMenu: P1, _forCharacterAtIndex: P2, _withEvent: P3): R;
    _baselineOffsets<R = cocoa.__NSBaselineOffsets>(): R;
    setAttributedStringValue<R = void, P0 = unknown>(_setAttributedStringValue: P0): R;
    _deriveLineBreakModeFromAttributedString<R = void, P0 = unknown>(__deriveLineBreakModeFromAttributedString: P0): R;
    _resetUpdateConstraintsPassCounter<R = void>(): R;
    _performMultiPassIntrinsicSize<R = boolean>(): R;
    _hasLayoutEngine<R = boolean>(): R;
    _intrinsicSizeWithinSize<R = cocoa.CGSize, P0 = cocoa.CGSize>(__intrinsicSizeWithinSize: P0): R;
    textDidChange<R = void, P0 = unknown>(_textDidChange: P0): R;
    textDidBeginEditing<R = void, P0 = unknown>(_textDidBeginEditing: P0): R;
    textShouldBeginEditing<R = boolean, P0 = unknown>(_textShouldBeginEditing: P0): R;
    textDidEndEditing<R = void, P0 = unknown>(_textDidEndEditing: P0): R;
    textShouldEndEditing<R = boolean, P0 = unknown>(_textShouldEndEditing: P0): R;
    stopSpeaking<R = void, P0 = unknown>(_stopSpeaking: P0): R;
    startSpeaking<R = void, P0 = unknown>(_startSpeaking: P0): R;
    selectText<R = void, P0 = unknown>(_selectText: P0): R;
    setTitleWithMnemonic<R = void, P0 = unknown>(_setTitleWithMnemonic: P0): R;
    setAutomaticTextCompletionEnabled<R = void, P0 = boolean>(_setAutomaticTextCompletionEnabled: P0): R;
    isAutomaticTextCompletionEnabled<R = boolean>(): R;
    setAllowsCharacterPickerTouchBarItem<R = void, P0 = boolean>(_setAllowsCharacterPickerTouchBarItem: P0): R;
    allowsCharacterPickerTouchBarItem<R = boolean>(): R;
    setImportsGraphics<R = void, P0 = boolean>(_setImportsGraphics: P0): R;
    importsGraphics<R = boolean>(): R;
    setAllowsEditingTextAttributes<R = void, P0 = boolean>(_setAllowsEditingTextAttributes: P0): R;
    allowsEditingTextAttributes<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    boundsOutsetsForTextLayer<R = cocoa.NSEdgeInsets, P0 = unknown>(_boundsOutsetsForTextLayer: P0): R;
    _languageAwareOutsetsWithFont<R = cocoa.NSEdgeInsets, P0 = unknown>(__languageAwareOutsetsWithFont: P0): R;
    _invalidateCachedLanguageAwareOutsets<R = void>(): R;
    _shouldUseBoundsOutsetsForCurrentConfig<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    displayTextLayer<R = void, P0 = unknown>(_displayTextLayer: P0): R;
    _queueForDeferredTextLayerFrameUpdate<R = void>(): R;
    _shouldDeferUpdateTextLayerSize_toNewSize<R = boolean, P0 = cocoa.CGSize, P1 = cocoa.CGSize>(__shouldDeferUpdateTextLayerSize: P0, _toNewSize: P1): R;
    _preferredAppearance<R = unknown>(): R;
    setErrorAction<R = void, P0 = string>(_setErrorAction: P0): R;
    errorAction<R = string>(): R;
    maximumNumberOfLines<R = number>(): R;
    setMaximumNumberOfLines<R = void, P0 = number>(_v: P0): R;
    preferredMaxLayoutWidth<R = number>(): R;
    setPreferredMaxLayoutWidth<R = void, P0 = number>(_v: P0): R;
    acceptsFirstResponder<R = boolean>(): R;
    delegate<R = cocoa.NSTextFieldDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSTextFieldDelegate>(_v: P0): R;
    textAlignmentPolicy<R = number>(): R;
    setTextAlignmentPolicy<R = void, P0 = number>(_v: P0): R;
    allowsDefaultTighteningForTruncation<R = boolean>(): R;
    setAllowsDefaultTighteningForTruncation<R = void, P0 = boolean>(_v: P0): R;
    styleEffectConfiguration<R = cocoa.CUIStyleEffectConfiguration>(): R;
    setStyleEffectConfiguration<R = void, P0 = cocoa.CUIStyleEffectConfiguration>(_v: P0): R;
    bezelStyle<R = number>(): R;
    setBezelStyle<R = void, P0 = number>(_v: P0): R;
    selectable<R = boolean>(): R;
    setSelectable<R = void, P0 = boolean>(_v: P0): R;
    editable<R = boolean>(): R;
    setEditable<R = void, P0 = boolean>(_v: P0): R;
    bezeled<R = boolean>(): R;
    setBezeled<R = void, P0 = boolean>(_v: P0): R;
    bordered<R = boolean>(): R;
    setBordered<R = void, P0 = boolean>(_v: P0): R;
    textColor<R = cocoa.NSColor>(): R;
    setTextColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    drawsBackground<R = boolean>(): R;
    setDrawsBackground<R = void, P0 = boolean>(_v: P0): R;
    backgroundColor<R = cocoa.NSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    placeholderAttributedString<R = cocoa.NSAttributedString>(): R;
    setPlaceholderAttributedString<R = void, P0 = cocoa.NSAttributedString>(_v: P0): R;
    placeholderString<R = cocoa.NSString>(): R;
    setPlaceholderString<R = void, P0 = cocoa.NSString>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + NSTextField(Chocolat,NextKeyViewSupport,PopoverDismissal):
    canBeKeyView<R = boolean>(): R;
    clickShouldDismissPopover<R = boolean, P0 = unknown>(_clickShouldDismissPopover: P0): R;
    isEditingText<R = boolean>(): R;
  }
  namespace classes {
    export interface NSTextField<T = any> extends cocoa.classes.NSControl, cocoa.classes.NSTextViewDelegateProtocol, cocoa.classes.NSUserInterfaceValidationsProtocol, cocoa.classes.NSAccessibilityNavigableStaticTextProtocol {
      alloc<R = NSTextField>(): R;
      new: <R = NSTextField>() => R;
      _fieldsContainingString<R = unknown, P0 = unknown>(__fieldsContainingString: P0): R;
      _shouldUseBoundsOutsetsForString<R = boolean, P0 = unknown>(__shouldUseBoundsOutsetsForString: P0): R;
      _tooBigChars<R = cocoa.__CFCharacterSet>(): R;
      _serviceDeferredTextLayerUpdateQueue_forWindow<R = boolean, P0 = boolean, P1 = unknown>(__serviceDeferredTextLayerUpdateQueue: P0, _forWindow: P1): R;
      _checkLastQueuedWindowFrameForChange<R = boolean, P0 = unknown>(__checkLastQueuedWindowFrameForChange: P0): R;
      _deferredFrameUpdateQueue<R = unknown, P0 = boolean>(__deferredFrameUpdateQueue: P0): R;
      textFieldWithString<R = unknown, P0 = unknown>(_textFieldWithString: P0): R;
      labelWithAttributedString<R = unknown, P0 = unknown>(_labelWithAttributedString: P0): R;
      wrappingLabelWithString<R = unknown, P0 = unknown>(_wrappingLabelWithString: P0): R;
      labelWithString<R = unknown, P0 = unknown>(_labelWithString: P0): R;
      _newBaseLabelWithoutTitle<R = unknown>(): R;
      editableTextFieldWithString<R = unknown, P0 = unknown>(_editableTextFieldWithString: P0): R;
      textFieldWithAttributedString<R = unknown, P0 = unknown>(_textFieldWithAttributedString: P0): R;
      wrappingTextFieldWithString_preferredMaxLayoutWidth<R = unknown, P0 = unknown, P1 = number>(_wrappingTextFieldWithString: P0, _preferredMaxLayoutWidth: P1): R;
      // + NSTextField(Chocolat,NextKeyViewSupport,PopoverDismissal):
      
    }
  }
}

declare const NSTextField: cocoa.classes.NSTextField;
