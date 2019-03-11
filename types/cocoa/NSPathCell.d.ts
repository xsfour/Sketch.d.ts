/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPathCell<T = any> extends cocoa.NSActionCell, cocoa.NSMenuItemValidationProtocol, cocoa.NSOpenSavePanelDelegateProtocol {
    cxx_destruct<R = void>(): R;
    _menuDidEndTracking<R = void, P0 = unknown>(__menuDidEndTracking: P0): R;
    _resetClickedCell<R = void>(): R;
    _popUpMenu<R = unknown>(): R;
    _otherItemClick<R = void, P0 = unknown>(__otherItemClick: P0): R;
    _willDisplayOpenPanel<R = void, P0 = unknown>(__willDisplayOpenPanel: P0): R;
    _menuItemClick<R = void, P0 = unknown>(__menuItemClick: P0): R;
    _setClickedPathComponentCell<R = void, P0 = unknown>(__setClickedPathComponentCell: P0): R;
    _sendActionOrDoubleAction<R = boolean, P0 = boolean>(__sendActionOrDoubleAction: P0): R;
    _changeContentsToPath<R = void, P0 = unknown>(__changeContentsToPath: P0): R;
    rectOfPathComponentCell_withFrame_inView<R = cocoa.CGRect, P0 = unknown, P1 = cocoa.CGRect, P2 = unknown>(_rectOfPathComponentCell: P0, _withFrame: P1, _inView: P2): R;
    pathComponentCellAtPoint_withFrame_inView<R = unknown, P0 = cocoa.CGPoint, P1 = cocoa.CGRect, P2 = unknown>(_pathComponentCellAtPoint: P0, _withFrame: P1, _inView: P2): R;
    removePathComponentCellAtIndex<R = void, P0 = number>(_removePathComponentCellAtIndex: P0): R;
    insertPathComponentCell_atIndex<R = void, P0 = unknown, P1 = number>(_insertPathComponentCell: P0, _atIndex: P1): R;
    addPathComponentCell<R = void, P0 = unknown>(_addPathComponentCell: P0): R;
    mouseExited_withFrame_inView<R = void, P0 = unknown, P1 = cocoa.CGRect, P2 = unknown>(_mouseExited: P0, _withFrame: P1, _inView: P2): R;
    mouseEntered_withFrame_inView<R = void, P0 = unknown, P1 = cocoa.CGRect, P2 = unknown>(_mouseEntered: P0, _withFrame: P1, _inView: P2): R;
    _hoveredCell<R = unknown>(): R;
    _setHoveredCell<R = void, P0 = unknown>(__setHoveredCell: P0): R;
    animation_didReachProgressMark<R = void, P0 = unknown, P1 = number>(_animation: P0, _didReachProgressMark: P1): R;
    animationDidStop<R = void, P0 = unknown>(_animationDidStop: P0): R;
    animationDidEnd<R = void, P0 = unknown>(_animationDidEnd: P0): R;
    _createHoverChangeAnimation<R = void>(): R;
    _updateTrackingRects<R = void>(): R;
    _updateCell<R = void>(): R;
    _legacyDrawFocusRingInCellFrame_inView<R = void, P0 = cocoa.CGRect, P1 = unknown>(__legacyDrawFocusRingInCellFrame: P0, _inView: P1): R;
    _wantsToUseFocusRingMask<R = boolean>(): R;
    _shouldDrawRTL<R = boolean>(): R;
    _insetFrameForBorder<R = cocoa.CGRect, P0 = cocoa.CGRect>(__insetFrameForBorder: P0): R;
    _drawBorderWithFrame<R = void, P0 = cocoa.CGRect>(__drawBorderWithFrame: P0): R;
    setBorderColor<R = void, P0 = unknown>(_setBorderColor: P0): R;
    borderColorForEdge<R = unknown, P0 = number>(_borderColorForEdge: P0): R;
    _borderColors<R = unknown>(): R;
    setBorderColor_forEdge<R = void, P0 = unknown, P1 = number>(_setBorderColor: P0, _forEdge: P1): R;
    setBezelStyle<R = void, P0 = number>(_setBezelStyle: P0): R;
    bezelStyle<R = number>(): R;
    setBordered<R = void, P0 = boolean>(_setBordered: P0): R;
    isOpaque<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    _realPlaceHolderAttributedString<R = unknown>(): R;
    _setupPopUpButtonCellWithResizedImages<R = void, P0 = boolean>(__setupPopUpButtonCellWithResizedImages: P0): R;
    _setPopUpButtonCell<R = void, P0 = unknown>(__setPopUpButtonCell: P0): R;
    _popUpButtonCell<R = unknown>(): R;
    _scaleImage_forSize_lockFocusOK<R = unknown, P0 = unknown, P1 = cocoa.CGSize, P2 = boolean>(__scaleImage: P0, _forSize: P1, _lockFocusOK: P2): R;
    _iconSize<R = cocoa.CGSize>(): R;
    setFont<R = void, P0 = unknown>(_setFont: P0): R;
    setControlSize<R = void, P0 = number>(_setControlSize: P0): R;
    _titleAttributes<R = unknown>(): R;
    _updateSizesForInteriorFrame<R = void, P0 = cocoa.CGRect>(__updateSizesForInteriorFrame: P0): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    _autoUpdateCellContents<R = void>(): R;
    _stopAnimation<R = void>(): R;
    _valueAsFilePath<R = unknown>(): R;
    _setNeedsSizeUpdate<R = void>(): R;
    setBaseWritingDirection<R = void, P0 = number>(_setBaseWritingDirection: P0): R;
    setUserInterfaceLayoutDirection<R = void, P0 = number>(_setUserInterfaceLayoutDirection: P0): R;
    accessibilityHelpStringForChild<R = unknown, P0 = unknown>(_accessibilityHelpStringForChild: P0): R;
    accessibilitySizeOfChild<R = unknown, P0 = unknown>(_accessibilitySizeOfChild: P0): R;
    accessibilityPositionOfChild<R = unknown, P0 = unknown>(_accessibilityPositionOfChild: P0): R;
    accessibilitySetFocus_forChild<R = void, P0 = unknown, P1 = unknown>(_accessibilitySetFocus: P0, _forChild: P1): R;
    accessibilityIsChildFocusable<R = boolean, P0 = unknown>(_accessibilityIsChildFocusable: P0): R;
    accessibilityIsOrientationAttributeSettable<R = boolean>(): R;
    accessibilityOrientationAttribute<R = unknown>(): R;
    accessibilityIsDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityDescriptionAttribute<R = unknown>(): R;
    accessibilityIsSelectedChildrenAttributeSettable<R = boolean>(): R;
    accessibilitySelectedChildrenAttribute<R = unknown>(): R;
    accessibilityIsVisibleChildrenAttributeSettable<R = boolean>(): R;
    accessibilityVisibleChildrenAttribute<R = unknown>(): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityPerformAction_forChild<R = void, P0 = unknown, P1 = unknown>(_accessibilityPerformAction: P0, _forChild: P1): R;
    _accessibilityScreenRectForPathComponent<R = cocoa.CGRect, P0 = unknown>(__accessibilityScreenRectForPathComponent: P0): R;
    placeholderAttributedString<R = cocoa.NSAttributedString>(): R;
    setPlaceholderAttributedString<R = void, P0 = cocoa.NSAttributedString>(_v: P0): R;
    placeholderString<R = cocoa.NSString>(): R;
    setPlaceholderString<R = void, P0 = cocoa.NSString>(_v: P0): R;
    backgroundColor<R = cocoa.NSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    doubleAction<R = string>(): R;
    setDoubleAction<R = void, P0 = string>(_v: P0): R;
    clickedPathComponentCell<R = cocoa.NSPathComponentCell>(): R;
    pathStyle<R = number>(): R;
    setPathStyle<R = void, P0 = number>(_v: P0): R;
    URL<R = cocoa.NSURL>(): R;
    setURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    pathComponentCells<R = cocoa.NSArray>(): R;
    setPathComponentCells<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    delegate<R = cocoa.NSPathCellDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSPathCellDelegate>(_v: P0): R;
    allowedTypes<R = cocoa.NSArray>(): R;
    setAllowedTypes<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSPathCell<T = any> extends cocoa.classes.NSActionCell, cocoa.classes.NSMenuItemValidationProtocol, cocoa.classes.NSOpenSavePanelDelegateProtocol {
      alloc<R = NSPathCell>(): R;
      new: <R = NSPathCell>() => R;
      pathComponentCellClass<R = unknown>(): R;
    }
  }
}

declare const NSPathCell: cocoa.classes.NSPathCell;
