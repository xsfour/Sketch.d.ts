/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewItem<T = any> extends NSObject, NSCodingProtocol {
    cxx_destruct<R = void>(): R;
    _tabViewWillRemoveFromSuperview<R = void>(): R;
    _resetToolTipIfNecessary<R = void>(): R;
    _removeToolTip<R = void>(): R;
    _addToolTipRect<R = number, P0 = CGRect>(__addToolTipRect: P0): R;
    _fullLabel<R = unknown>(): R;
    _computeNominalDisplayedLabelSize<R = CGSize>(): R;
    _computeMinimumDisplayedLabelSize<R = CGSize>(): R;
    _computeDisplayedSizeOfString<R = CGSize, P0 = unknown>(__computeDisplayedSizeOfString: P0): R;
    _computeMinimumDisplayedLabelForWidth<R = unknown, P0 = number>(__computeMinimumDisplayedLabelForWidth: P0): R;
    _rangeOfPrefixOfString_fittingWidth_withFont<R = _NSRange, P0 = unknown, P1 = number, P2 = unknown>(__rangeOfPrefixOfString: P0, _fittingWidth: P1, _withFont: P2): R;
    description<R = unknown>(): R;
    _old_initWithCoder_NSTabViewItem<R = void, P0 = unknown>(__old_initWithCoder_NSTabViewItem: P0): R;
    _old_encodeWithCoder_NSTabViewItem<R = void, P0 = unknown>(__old_encodeWithCoder_NSTabViewItem: P0): R;
    sizeOfLabel<R = CGSize, P0 = boolean>(_sizeOfLabel: P0): R;
    _invalidLabelSize<R = void>(): R;
    _drawKeyViewOutline<R = void, P0 = CGRect>(__drawKeyViewOutline: P0): R;
    drawLabel_inRect<R = void, P0 = boolean, P1 = CGRect>(_drawLabel: P0, _inRect: P1): R;
    interiorBackgroundStyle<R = number>(): R;
    _setActive<R = void, P0 = boolean>(__setActive: P0): R;
    _isReallyPressed<R = boolean>(): R;
    _drawOrientedLabel_inRect<R = void, P0 = boolean, P1 = CGRect>(__drawOrientedLabel: P0, _inRect: P1): R;
    _rotateCoordsForDrawLabelInRect<R = boolean, P0 = CGRect>(__rotateCoordsForDrawLabelInRect: P0): R;
    _clearInitialFirstResponderAndLastKeyViewIfAutoGenerated<R = void>(): R;
    _setDefaultKeyViewLoopAndInitialFirstResponder<R = void>(): R;
    _initialFirstResponderIsAutoGenerated<R = boolean>(): R;
    _setAutoGeneratedInitialFirstResponder<R = void, P0 = unknown>(__setAutoGeneratedInitialFirstResponder: P0): R;
    _canAutoGenerateKeyboardLoops<R = boolean>(): R;
    _finishedWiringNibConnections<R = void>(): R;
    _setInitialFirstResponder_autoGenerated<R = void, P0 = unknown, P1 = boolean>(__setInitialFirstResponder: P0, _autoGenerated: P1): R;
    _updateWithViewController<R = void, P0 = unknown>(__updateWithViewController: P0): R;
    _setSpringLoadingHighlight<R = void, P0 = number>(__setSpringLoadingHighlight: P0): R;
    _springLoadingHighlight<R = number>(): R;
    _labelColor<R = unknown>(): R;
    _isTabEnabled<R = boolean>(): R;
    _setTabEnabled<R = void, P0 = boolean>(__setTabEnabled: P0): R;
    _setTabState<R = void, P0 = number>(__setTabState: P0): R;
    _setTabRect<R = void, P0 = CGRect>(__setTabRect: P0): R;
    _setTabView<R = void, P0 = unknown>(__setTabView: P0): R;
    _hasCustomColor<R = boolean>(): R;
    _tabRect<R = CGRect>(): R;
    _lastKeyView<R = unknown>(): R;
    _validateViewIsInViewHeirarchy<R = void, P0 = unknown>(__validateViewIsInViewHeirarchy: P0): R;
    setMenu<R = void, P0 = unknown>(_setMenu: P0): R;
    menu<R = unknown>(): R;
    setAlternateImage<R = void, P0 = unknown>(_setAlternateImage: P0): R;
    alternateImage<R = unknown>(): R;
    dealloc<R = void>(): R;
    _commonInit<R = void>(): R;
    initWithIdentifier<R = unknown, P0 = unknown>(_initWithIdentifier: P0): R;
    _deallocAuxiliaryStorage<R = void>(): R;
    _allocAuxiliaryStorage<R = void>(): R;
    accessibilityFocusedUIElement<R = unknown>(): R;
    accessibilityHitTest<R = unknown, P0 = CGPoint>(_accessibilityHitTest: P0): R;
    accessibilityIsIgnored<R = boolean>(): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionDescription<R = unknown, P0 = unknown>(_accessibilityActionDescription: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilitySetValue_forAttribute<R = void, P0 = unknown, P1 = unknown>(_accessibilitySetValue: P0, _forAttribute: P1): R;
    accessibilityIsAttributeSettable<R = boolean, P0 = unknown>(_accessibilityIsAttributeSettable: P0): R;
    accessibilityAttributeValue<R = unknown, P0 = unknown>(_accessibilityAttributeValue: P0): R;
    accessibilityIsSizeAttributeSettable<R = boolean>(): R;
    accessibilitySizeAttribute<R = unknown>(): R;
    accessibilityIsPositionAttributeSettable<R = boolean>(): R;
    accessibilityPositionAttribute<R = unknown>(): R;
    accessibilityIsTopLevelUIElementAttributeSettable<R = boolean>(): R;
    accessibilityTopLevelUIElementAttribute<R = unknown>(): R;
    accessibilityIsWindowAttributeSettable<R = boolean>(): R;
    accessibilityWindowAttribute<R = unknown>(): R;
    accessibilityIsParentAttributeSettable<R = boolean>(): R;
    accessibilityParentAttribute<R = unknown>(): R;
    accessibilityIsTitleAttributeSettable<R = boolean>(): R;
    accessibilityTitleAttribute<R = unknown>(): R;
    accessibilitySetFocusedAttribute<R = void, P0 = unknown>(_accessibilitySetFocusedAttribute: P0): R;
    accessibilityIsFocusedAttributeSettable<R = boolean>(): R;
    accessibilityFocusedAttribute<R = unknown>(): R;
    accessibilityIsEnabledAttributeSettable<R = boolean>(): R;
    accessibilityEnabledAttribute<R = unknown>(): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
    accessibilityIsHelpAttributeSettable<R = boolean>(): R;
    accessibilityHelpAttribute<R = unknown>(): R;
    accessibilitySubroleAttribute<R = unknown>(): R;
    accessibilityIsRoleDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityRoleDescriptionAttribute<R = unknown>(): R;
    accessibilityIsRoleAttributeSettable<R = boolean>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
    accessibilityAttributeNames<R = unknown>(): R;
    _view<R = NSView>(): R;
    set_view<R = void, P0 = NSView>(_v: P0): R;
    _label<R = NSString>(): R;
    set_label<R = void, P0 = NSString>(_v: P0): R;
    _initialFirstResponder<R = NSView>(): R;
    set_initialFirstResponder<R = void, P0 = NSView>(_v: P0): R;
    _color<R = NSColor>(): R;
    set_color<R = void, P0 = NSColor>(_v: P0): R;
    tabState<R = number>(): R;
    identifier<R = unknown>(): R;
    setIdentifier<R = void, P0 = unknown>(_v: P0): R;
    tabView<R = NSTabView>(): R;
    initialFirstResponder<R = NSView>(): R;
    setInitialFirstResponder<R = void, P0 = NSView>(_v: P0): R;
    viewController<R = NSViewController>(): R;
    setViewController<R = void, P0 = NSViewController>(_v: P0): R;
    view<R = NSView>(): R;
    setView<R = void, P0 = NSView>(_v: P0): R;
    toolTip<R = NSString>(): R;
    setToolTip<R = void, P0 = NSString>(_v: P0): R;
    label<R = NSString>(): R;
    setLabel<R = void, P0 = NSString>(_v: P0): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface NSTabViewItem<T = any> extends NSObject, NSCodingProtocol {
      alloc<R = NSTabViewItem>(): R;
      new: <R = NSTabViewItem>() => R;
      _labelCell<R = unknown>(): R;
      tabViewItemWithViewController<R = unknown, P0 = unknown>(_tabViewItemWithViewController: P0): R;
    }
  }
}

declare const NSTabViewItem: cocoa.classes.NSTabViewItem;
