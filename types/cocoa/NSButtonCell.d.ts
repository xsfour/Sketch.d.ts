/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSButtonCell<T = any> extends NSActionCell {
    _setShouldNotHighlightOnPerformClick<R = void, P0 = boolean>(__setShouldNotHighlightOnPerformClick: P0): R;
    _endAcceleratorPeriodicActions<R = void>(): R;
    _beginAcceleratorPeriodicActionsUsingLegacyHW<R = void, P0 = boolean>(__beginAcceleratorPeriodicActionsUsingLegacyHW: P0): R;
    _acceleratorTimerFired<R = void>(): R;
    _trackingBoundsWithFrame_inView<R = CGRect, P0 = CGRect, P1 = unknown>(__trackingBoundsWithFrame: P0, _inView: P1): R;
    _startSound<R = unknown>(): R;
    _updateMouseInside<R = void, P0 = boolean>(__updateMouseInside: P0): R;
    _doUserDisclosureExpandOrCollapseInRect<R = void, P0 = CGRect>(__doUserDisclosureExpandOrCollapseInRect: P0): R;
    _setDestinationDisclosureState<R = void, P0 = number>(__setDestinationDisclosureState: P0): R;
    _destinationDisclosureState<R = number>(): R;
    _setIsDrawingDisclosure<R = void, P0 = boolean>(__setIsDrawingDisclosure: P0): R;
    _setNextDisclosureState<R = void, P0 = number>(__setNextDisclosureState: P0): R;
    _drawCustomFocusMaskWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(__drawCustomFocusMaskWithFrame: P0, _inView: P1): R;
    drawBezelWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(_drawBezelWithFrame: P0, _inView: P1): R;
    _shouldTweakRoundingBehaviorWithFrame_inView<R = boolean, P0 = CGRect, P1 = unknown>(__shouldTweakRoundingBehaviorWithFrame: P0, _inView: P1): R;
    drawTitle_withFrame_inView<R = CGRect, P0 = unknown, P1 = CGRect, P2 = unknown>(_drawTitle: P0, _withFrame: P1, _inView: P2): R;
    _hasCustomForegroundColor<R = boolean>(): R;
    _titleTextIsScrollable<R = boolean>(): R;
    drawImage_withFrame_inView<R = void, P0 = unknown, P1 = CGRect, P2 = unknown>(_drawImage: P0, _withFrame: P1, _inView: P2): R;
    _configureAndDrawTitleWithRect_cellFrame_controlView<R = void, P0 = CGRect, P1 = CGRect, P2 = unknown>(__configureAndDrawTitleWithRect: P0, _cellFrame: P1, _controlView: P2): R;
    _currentTitle<R = unknown>(): R;
    _configureAndDrawImageWithRect_cellFrame_controlView<R = void, P0 = CGRect, P1 = CGRect, P2 = unknown>(__configureAndDrawImageWithRect: P0, _cellFrame: P1, _controlView: P2): R;
    _imageVerticalAdjustmentForBezel<R = number>(): R;
    _roundCoordinate_upToDevicePixelForView<R = number, P0 = number, P1 = unknown>(__roundCoordinate: P0, _upToDevicePixelForView: P1): R;
    _isDrawingRedundantlyInView<R = boolean, P0 = unknown>(__isDrawingRedundantlyInView: P0): R;
    _hasAnySeparatedContentSubviewsInView<R = boolean, P0 = unknown>(__hasAnySeparatedContentSubviewsInView: P0): R;
    _wantsSeparatedContentSubviewsInView<R = boolean, P0 = unknown>(__wantsSeparatedContentSubviewsInView: P0): R;
    _eligibleForSeparatedContentSubviewsInView<R = boolean, P0 = unknown>(__eligibleForSeparatedContentSubviewsInView: P0): R;
    _updateImageViewWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(__updateImageViewWithFrame: P0, _inView: P1): R;
    _updateSubviewsInView_includeTitleTextField<R = void, P0 = unknown, P1 = boolean>(__updateSubviewsInView: P0, _includeTitleTextField: P1): R;
    _updateImageViewImageInView<R = void, P0 = unknown>(__updateImageViewImageInView: P0): R;
    _logImageState_andBGStyle_forLabel<R = void, P0 = number, P1 = number, P2 = unknown>(__logImageState: P0, _andBGStyle: P1, _forLabel: P2): R;
    _imageViewFrameWithFrame_inView<R = CGRect, P0 = CGRect, P1 = unknown>(__imageViewFrameWithFrame: P0, _inView: P1): R;
    _commonBaseRectWithFrame_inView<R = CGRect, P0 = CGRect, P1 = unknown>(__commonBaseRectWithFrame: P0, _inView: P1): R;
    _removeImageView<R = void>(): R;
    _setButtonImageView<R = void, P0 = unknown>(__setButtonImageView: P0): R;
    _buttonImageView<R = unknown>(): R;
    _internalImageView<R = unknown>(): R;
    _setUsesCachedImage<R = void, P0 = boolean>(__setUsesCachedImage: P0): R;
    _usesCachedImage<R = boolean>(): R;
    _updateTitleTextFieldValue<R = void>(): R;
    _updateTitleTextFieldWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(__updateTitleTextFieldWithFrame: P0, _inView: P1): R;
    setAlignment<R = void, P0 = number>(_setAlignment: P0): R;
    _setSubviewsNeedLayout<R = void>(): R;
    _removeTitleTextField<R = void>(): R;
    _setTitleTextField<R = void, P0 = unknown>(__setTitleTextField: P0): R;
    _titleTextField<R = unknown>(): R;
    _updateBackgroundViewWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(__updateBackgroundViewWithFrame: P0, _inView: P1): R;
    _backgroundViewType<R = number>(): R;
    _wantsBackgroundViewInView<R = boolean, P0 = unknown>(__wantsBackgroundViewInView: P0): R;
    _hideBackgroundView<R = void>(): R;
    _removeBackgroundView<R = void>(): R;
    _setBackgroundView<R = void, P0 = unknown>(__setBackgroundView: P0): R;
    _backgroundView<R = unknown>(): R;
    _subclassOverridesAnyDrawMethodsAffectingVibrancy<R = boolean, P0 = string>(__subclassOverridesAnyDrawMethodsAffectingVibrancy: P0): R;
    _subclassOverridesDrawImage<R = boolean>(): R;
    _classForOverrideCheck<R = unknown>(): R;
    _bezelStyleWantsUpdateLayerInView<R = boolean, P0 = unknown>(__bezelStyleWantsUpdateLayerInView: P0): R;
    _legacyDrawFocusRingInCellFrame_inView<R = void, P0 = CGRect, P1 = unknown>(__legacyDrawFocusRingInCellFrame: P0, _inView: P1): R;
    _canUseFocusRingMaskForText<R = boolean>(): R;
    _coreUIContentRectInsetsForRect_inView<R = NSEdgeInsets, P0 = CGRect, P1 = unknown>(__coreUIContentRectInsetsForRect: P0, _inView: P1): R;
    _coreUIAlignmentRectInsetsForRect_inView<R = NSEdgeInsets, P0 = CGRect, P1 = unknown>(__coreUIAlignmentRectInsetsForRect: P0, _inView: P1): R;
    _coreUIWidgetFrameSizeForRect_inView<R = CGSize, P0 = CGRect, P1 = unknown>(__coreUIWidgetFrameSizeForRect: P0, _inView: P1): R;
    _contentHuggingDefault_isUsuallyFixedHeight<R = boolean>(): R;
    _contentHuggingDefault_isUsuallyFixedWidth<R = boolean>(): R;
    _alignmentRectInsetsForRect_inView<R = NSEdgeInsets, P0 = CGRect, P1 = unknown>(__alignmentRectInsetsForRect: P0, _inView: P1): R;
    _autolayout_cellSize<R = CGSize>(): R;
    _minCellSizeIncrement<R = CGSize>(): R;
    _minCellSize<R = CGSize>(): R;
    _titleRectForProposedTitleRect<R = CGRect, P0 = CGRect>(__titleRectForProposedTitleRect: P0): R;
    _imageRect_titleRect_forBounds<R = void, P0 = CGRect, P1 = CGRect, P2 = CGRect>(__imageRect: P0, _titleRect: P1, _forBounds: P2): R;
    _bezelRectForBounds_inView<R = CGRect, P0 = CGRect, P1 = unknown>(__bezelRectForBounds: P0, _inView: P1): R;
    _preferredBezelSizeForBounds_inView<R = CGSize, P0 = CGRect, P1 = unknown>(__preferredBezelSizeForBounds: P0, _inView: P1): R;
    _shouldDrawWithContentTintColorInView<R = boolean, P0 = unknown>(__shouldDrawWithContentTintColorInView: P0): R;
    _isEligibleForContentTintColor<R = boolean>(): R;
    _preeffectBaseImage_state_backgroundStyle_inView<R = void, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(__preeffectBaseImage: P0, _state: P1, _backgroundStyle: P2, _inView: P3): R;
    _disabledForDrawingContent<R = boolean>(): R;
    _coreUIBezelDrawOptionsWithFrame_inView<R = __CFDictionary, P0 = CGRect, P1 = unknown>(__coreUIBezelDrawOptionsWithFrame: P0, _inView: P1): R;
    _wantsToUseFocusRingMask<R = boolean>(): R;
    _inToolbar<R = boolean>(): R;
    _templateImageShouldPunchHoleInBezel<R = boolean>(): R;
    _preferOnArtForBezel<R = boolean>(): R;
    _preferredFocusLocationMask<R = number>(): R;
    _hasCustomFocusMask<R = boolean>(): R;
    _shouldShowFocus<R = boolean>(): R;
    _preferAlternateContentForImage<R = boolean>(): R;
    _preferAlternateContent<R = boolean>(): R;
    _stateForDrawing<R = number>(): R;
    interiorBackgroundStyle<R = number>(): R;
    _setShowsDisclosureChevron<R = void, P0 = boolean>(__setShowsDisclosureChevron: P0): R;
    _showsDisclosureChevron<R = boolean>(): R;
    setBezelStyle<R = void, P0 = number>(_setBezelStyle: P0): R;
    bezelStyle<R = number>(): R;
    setBackgroundColor<R = void, P0 = unknown>(_setBackgroundColor: P0): R;
    backgroundColor<R = unknown>(): R;
    setShowsBorderOnlyWhileMouseInside<R = void, P0 = boolean>(_setShowsBorderOnlyWhileMouseInside: P0): R;
    showsBorderOnlyWhileMouseInside<R = boolean>(): R;
    _updateMouseTracking<R = void>(): R;
    setBordered<R = void, P0 = boolean>(_setBordered: P0): R;
    isBordered<R = boolean>(): R;
    setButtonType<R = void, P0 = number>(_setButtonType: P0): R;
    _isMultiLevelAcceleratorButton<R = boolean>(): R;
    _isAnyAcceleratorButton<R = boolean>(): R;
    _isFunctionRowButton<R = boolean>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    objectValue<R = unknown>(): R;
    setDoubleValue<R = void, P0 = number>(_setDoubleValue: P0): R;
    doubleValue<R = number>(): R;
    setFloatValue<R = void, P0 = number>(_setFloatValue: P0): R;
    floatValue<R = number>(): R;
    setIntegerValue<R = void, P0 = number>(_setIntegerValue: P0): R;
    integerValue<R = number>(): R;
    setIntValue<R = void, P0 = number>(_setIntValue: P0): R;
    intValue<R = number>(): R;
    setStringValue<R = void, P0 = unknown>(_setStringValue: P0): R;
    stringValue<R = unknown>(): R;
    setSpringLoadingEmphasized<R = void, P0 = boolean>(_setSpringLoadingEmphasized: P0): R;
    isSpringLoadingEmphasized<R = boolean>(): R;
    setSpringLoaded<R = void, P0 = boolean>(_setSpringLoaded: P0): R;
    isSpringLoaded<R = boolean>(): R;
    setState<R = void, P0 = number>(_setState: P0): R;
    nextState<R = number>(): R;
    setHighlighted<R = void, P0 = boolean>(_setHighlighted: P0): R;
    _preferredAppearanceForAppearance_inView<R = unknown, P0 = unknown, P1 = unknown>(__preferredAppearanceForAppearance: P0, _inView: P1): R;
    _controlViewDidMoveToWindow<R = void, P0 = unknown>(__controlViewDidMoveToWindow: P0): R;
    _stateAnimationDone<R = void>(): R;
    _maybeBeginStateChangeAnimationWithFrame_inView<R = boolean, P0 = CGRect, P1 = unknown>(__maybeBeginStateChangeAnimationWithFrame: P0, _inView: P1): R;
    _obtainButtonAnimator<R = unknown>(): R;
    setBackgroundStyle<R = void, P0 = number>(_setBackgroundStyle: P0): R;
    _updateAllOtherButtonsInGroupToNotBeChecked<R = void>(): R;
    _hasRolloverContentArt<R = boolean>(): R;
    _acceptsFirstMouseForEvent_inView<R = boolean, P0 = unknown, P1 = unknown>(__acceptsFirstMouseForEvent: P0, _inView: P1): R;
    setPeriodicDelay_interval<R = void, P0 = number, P1 = number>(_setPeriodicDelay: P0, _interval: P1): R;
    setKeyEquivalentFont_size<R = void, P0 = unknown, P1 = number>(_setKeyEquivalentFont: P0, _size: P1): R;
    _setSound<R = void, P0 = unknown>(__setSound: P0): R;
    _sound<R = unknown>(): R;
    setSound<R = void, P0 = unknown>(_setSound: P0): R;
    sound<R = unknown>(): R;
    compressionOptions<R = unknown>(): R;
    setCompressionOptions<R = void, P0 = unknown>(_setCompressionOptions: P0): R;
    setUserInterfaceLayoutDirection<R = void, P0 = number>(_setUserInterfaceLayoutDirection: P0): R;
    setImageDimsWhenDisabled<R = void, P0 = boolean>(_setImageDimsWhenDisabled: P0): R;
    imageDimsWhenDisabled<R = boolean>(): R;
    setImageHugsTitle<R = void, P0 = boolean>(_setImageHugsTitle: P0): R;
    imageHugsTitle<R = boolean>(): R;
    _setPresentationImagePosition<R = void, P0 = number>(__setPresentationImagePosition: P0): R;
    _presentationImagePosition<R = number>(): R;
    _alternateImageSynthesizedForCheckOrRadio<R = unknown, P0 = string>(__alternateImageSynthesizedForCheckOrRadio: P0): R;
    setImage<R = void, P0 = unknown>(_setImage: P0): R;
    image<R = unknown>(): R;
    _imageSynthesizedForCheckOrRadio<R = unknown, P0 = string>(__imageSynthesizedForCheckOrRadio: P0): R;
    setAttributedAlternateTitle<R = void, P0 = unknown>(_setAttributedAlternateTitle: P0): R;
    _displayedAttributedAlternateTitle<R = unknown>(): R;
    attributedAlternateTitle<R = unknown>(): R;
    setFont<R = void, P0 = unknown>(_setFont: P0): R;
    setAttributedTitle<R = void, P0 = unknown>(_setAttributedTitle: P0): R;
    _displayedAttributedTitle<R = unknown>(): R;
    attributedTitle<R = unknown>(): R;
    _setAltContents<R = void, P0 = unknown>(__setAltContents: P0): R;
    _altContents<R = unknown>(): R;
    _disposeAnimator<R = void>(): R;
    _clearButtonCellAux<R = void>(): R;
    _buttonCellAuxAllocatingIfNeeded<R = unknown, P0 = boolean>(__buttonCellAuxAllocatingIfNeeded: P0): R;
    _buttonCellAux<R = unknown>(): R;
    _hasButtonCellAux<R = boolean>(): R;
    _setMinimumPressDuration<R = void, P0 = number>(__setMinimumPressDuration: P0): R;
    _setGuarded<R = void, P0 = boolean>(__setGuarded: P0): R;
    _setBezelTintColor<R = void, P0 = unknown>(__setBezelTintColor: P0): R;
    _bezelTintColor<R = unknown>(): R;
    _setContentTintColor<R = void, P0 = unknown>(__setContentTintColor: P0): R;
    _contentTintColor<R = unknown>(): R;
    _renderCurrentAnimationFrameInContext_atLocation<R = void, P0 = CGContext, P1 = CGPoint>(__renderCurrentAnimationFrameInContext: P0, _atLocation: P1): R;
    _setHighlighted_animated<R = void, P0 = boolean, P1 = boolean>(__setHighlighted: P0, _animated: P1): R;
    _setState_animated<R = void, P0 = number, P1 = boolean>(__setState: P0, _animated: P1): R;
    _stateAnimationRunning<R = boolean>(): R;
    _interiorBackgroundFillColor<R = unknown>(): R;
    _centerTitle_inRect<R = CGRect, P0 = unknown, P1 = CGRect>(__centerTitle: P0, _inRect: P1): R;
    _alignedTitleRectWithRect<R = CGRect, P0 = CGRect>(__alignedTitleRectWithRect: P0): R;
    _imageRectWithRect_allowImageScaling<R = CGRect, P0 = CGRect, P1 = boolean>(__imageRectWithRect: P0, _allowImageScaling: P1): R;
    _imageRectWithRect<R = CGRect, P0 = CGRect>(__imageRectWithRect: P0): R;
    _titleSizeWithSize<R = CGSize, P0 = CGSize>(__titleSizeWithSize: P0): R;
    _unconstrainedImageSize<R = CGSize>(): R;
    _insetRect<R = CGRect, P0 = CGRect>(__insetRect: P0): R;
    _alwaysEnablesRadioButtonExclusivity<R = boolean>(): R;
    _setAlwaysEnablesRadioButtonExclusivity<R = void, P0 = boolean>(__setAlwaysEnablesRadioButtonExclusivity: P0): R;
    _shouldDrawDragged<R = boolean>(): R;
    _canBecomeDefaultButtonCell<R = boolean>(): R;
    _titleSpacing<R = number>(): R;
    _titlePadding<R = number>(): R;
    _leading<R = number>(): R;
    _subclassHasVibrancyIncompatibleDrawing<R = boolean>(): R;
    _shouldDrawTextWithDisabledAppearance<R = boolean>(): R;
    _shouldDrawBezel<R = boolean>(): R;
    _alwaysShowBezelForCurrentBezelStyleAndState<R = boolean>(): R;
    _hasTitle<R = boolean>(): R;
    _hasImage<R = boolean>(): R;
    _textDimColor<R = unknown>(): R;
    _textHighlightColor<R = unknown>(): R;
    _setButtonType_adjustingImage<R = void, P0 = number, P1 = boolean>(__setButtonType: P0, _adjustingImage: P1): R;
    _buttonType<R = number>(): R;
    _isDrawingDisclosure<R = boolean>(): R;
    _nextDisclosureState<R = number>(): R;
    _buttonImageSource<R = unknown>(): R;
    _setButtonImageSource<R = void, P0 = unknown>(__setButtonImageSource: P0): R;
    _stringDrawingContextForStyleEffectConfiguration_replacementColor<R = unknown, P0 = unknown, P1 = unknown>(__stringDrawingContextForStyleEffectConfiguration: P0, _replacementColor: P1): R;
    _focusRingBoundsWithFrame_inView<R = CGRect, P0 = CGRect, P1 = unknown>(__focusRingBoundsWithFrame: P0, _inView: P1): R;
    _setDefaultButtonIndicatorNeedsDisplay<R = void>(): R;
    _shouldDrawAsDefaultButtonInView<R = boolean, P0 = unknown>(__shouldDrawAsDefaultButtonInView: P0): R;
    _isDefaultButton<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    _hasDefaultButtonIndicator<R = boolean>(): R;
    _layoutExitingViewsWithRect_inView<R = void, P0 = CGRect, P1 = unknown>(__layoutExitingViewsWithRect: P0, _inView: P1): R;
    _exchangeImageViewsWithRect_inView_withMutation<R = void, P0 = CGRect, P1 = unknown, P2 = CDUnknownBlockType>(__exchangeImageViewsWithRect: P0, _inView: P1, _withMutation: P2): R;
    _exchangeTextFieldsWithRect_inView_withMutation<R = void, P0 = CGRect, P1 = unknown, P2 = CDUnknownBlockType>(__exchangeTextFieldsWithRect: P0, _inView: P1, _withMutation: P2): R;
    _detachCurrentImageView<R = unknown>(): R;
    _detachCurrentTextField<R = unknown>(): R;
    _setBezelTintColor_animatedInRect_inView<R = void, P0 = unknown, P1 = CGRect, P2 = unknown>(__setBezelTintColor: P0, _animatedInRect: P1, _inView: P2): R;
    _setImagePosition_animatedInRect_inView<R = void, P0 = number, P1 = CGRect, P2 = unknown>(__setImagePosition: P0, _animatedInRect: P1, _inView: P2): R;
    _setAlternateImage_animatedInRect_inView<R = void, P0 = unknown, P1 = CGRect, P2 = unknown>(__setAlternateImage: P0, _animatedInRect: P1, _inView: P2): R;
    _setImage_animatedInRect_inView<R = void, P0 = unknown, P1 = CGRect, P2 = unknown>(__setImage: P0, _animatedInRect: P1, _inView: P2): R;
    _setAttributedAlternateTitle_animatedInRect_inView<R = void, P0 = unknown, P1 = CGRect, P2 = unknown>(__setAttributedAlternateTitle: P0, _animatedInRect: P1, _inView: P2): R;
    _setAttributedTitle_animatedInRect_inView<R = void, P0 = unknown, P1 = CGRect, P2 = unknown>(__setAttributedTitle: P0, _animatedInRect: P1, _inView: P2): R;
    _setAlternateTitle_animatedInRect_inView<R = void, P0 = unknown, P1 = CGRect, P2 = unknown>(__setAlternateTitle: P0, _animatedInRect: P1, _inView: P2): R;
    _setTitle_animatedInRect_inView<R = void, P0 = unknown, P1 = CGRect, P2 = unknown>(__setTitle: P0, _animatedInRect: P1, _inView: P2): R;
    setAlternateTitleWithMnemonic<R = void, P0 = unknown>(_setAlternateTitleWithMnemonic: P0): R;
    setAlternateMnemonicLocation<R = void, P0 = number>(_setAlternateMnemonicLocation: P0): R;
    alternateMnemonicLocation<R = number>(): R;
    alternateMnemonic<R = unknown>(): R;
    accessibilityActivationPointAttribute<R = unknown>(): R;
    accessibilityFocusRingBoundsForBounds<R = CGRect, P0 = CGRect>(_accessibilityFocusRingBoundsForBounds: P0): R;
    accessibilityIsDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityDescriptionAttribute<R = unknown>(): R;
    accessibilityIsTitleAttributeSettable<R = boolean>(): R;
    accessibilityTitleAttribute<R = unknown>(): R;
    accessibilitySubroleAttribute<R = unknown>(): R;
    _accessibilityIncludeDescriptionAttribute<R = boolean>(): R;
    _axIsNonCheckboxToggleButton<R = boolean>(): R;
    _buttonCellAccessibilityRoleAttribute<R = unknown>(): R;
    _imageView<R = NSImageView>(): R;
    transparent<R = boolean>(): R;
    setTransparent<R = void, P0 = boolean>(_v: P0): R;
    showsStateBy<R = number>(): R;
    setShowsStateBy<R = void, P0 = number>(_v: P0): R;
    highlightsBy<R = number>(): R;
    setHighlightsBy<R = void, P0 = number>(_v: P0): R;
    maxAcceleratorLevel<R = number>(): R;
    setMaxAcceleratorLevel<R = void, P0 = number>(_v: P0): R;
    opaque<R = boolean>(): R;
    keyEquivalentFont<R = NSFont>(): R;
    setKeyEquivalentFont<R = void, P0 = NSFont>(_v: P0): R;
    keyEquivalentModifierMask<R = number>(): R;
    setKeyEquivalentModifierMask<R = void, P0 = number>(_v: P0): R;
    keyEquivalent<R = NSString>(): R;
    setKeyEquivalent<R = void, P0 = NSString>(_v: P0): R;
    imageScaling<R = number>(): R;
    setImageScaling<R = void, P0 = number>(_v: P0): R;
    imagePosition<R = number>(): R;
    setImagePosition<R = void, P0 = number>(_v: P0): R;
    alternateImage<R = NSImage>(): R;
    setAlternateImage<R = void, P0 = NSImage>(_v: P0): R;
    alternateTitle<R = NSString>(): R;
    setAlternateTitle<R = void, P0 = NSString>(_v: P0): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
    _backgroundColor<R = NSColor>(): R;
    set_backgroundColor<R = void, P0 = NSColor>(_v: P0): R;
    gradientType<R = number>(): R;
    setGradientType<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSButtonCell<T = any> extends NSActionCell {
      alloc<R = NSButtonCell>(): R;
      new: <R = NSButtonCell>() => R;
      _keyEquivalentSizeWithFont<R = CGSize, P0 = unknown>(__keyEquivalentSizeWithFont: P0): R;
      _requireMainThreadDefaultBezelCaching<R = boolean>(): R;
      _resetDefaultButtonCycleValue<R = void>(): R;
      _defaultButtonCycleValue<R = number>(): R;
      _defaultButtonCycleTime<R = number>(): R;
      _setDefaultButtonCycleTime<R = void, P0 = number>(__setDefaultButtonCycleTime: P0): R;
    }
  }
}

declare const NSButtonCell: cocoa.classes.NSButtonCell;
