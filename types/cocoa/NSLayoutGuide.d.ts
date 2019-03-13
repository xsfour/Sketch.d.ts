/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutGuide<T = any> extends NSObject, NSCodingProtocol, NSUserInterfaceItemIdentificationProtocol {
    cxx_destruct<R = void>(): R;
    centerY<R = unknown>(): R;
    centerX<R = unknown>(): R;
    height<R = unknown>(): R;
    width<R = unknown>(): R;
    bottom<R = unknown>(): R;
    top<R = unknown>(): R;
    right<R = unknown>(): R;
    left<R = unknown>(): R;
    trailing<R = unknown>(): R;
    leading<R = unknown>(): R;
    nsis_orientationHintForVariable<R = number, P0 = unknown>(_nsis_orientationHintForVariable: P0): R;
    nsis_descriptionOfVariable<R = unknown, P0 = unknown>(_nsis_descriptionOfVariable: P0): R;
    nsis_valueOfVariableIsUserObservable<R = boolean, P0 = unknown>(_nsis_valueOfVariableIsUserObservable: P0): R;
    nsis_shouldIntegralizeVariable<R = boolean, P0 = unknown>(_nsis_shouldIntegralizeVariable: P0): R;
    nsis_valueOfVariable_didChangeInEngine<R = void, P0 = unknown, P1 = unknown>(_nsis_valueOfVariable: P0, _didChangeInEngine: P1): R;
    nsli_isCollectingConstraintChangesForLaterCoordinatedFlush<R = boolean, P0 = unknown>(_nsli_isCollectingConstraintChangesForLaterCoordinatedFlush: P0): R;
    _heightVariable<R = unknown>(): R;
    _widthVariable<R = unknown>(): R;
    _minYVariable<R = unknown>(): R;
    _minXVariable<R = unknown>(): R;
    nsli_boundsHeightVariable<R = unknown>(): R;
    nsli_boundsWidthVariable<R = unknown>(): R;
    nsli_heightVariable<R = unknown>(): R;
    nsli_widthVariable<R = unknown>(): R;
    nsli_minYVariable<R = unknown>(): R;
    nsli_minXVariable<R = unknown>(): R;
    nsli_installedConstraints<R = unknown>(): R;
    nsli_marginOffsetForAttribute<R = number, P0 = number>(_nsli_marginOffsetForAttribute: P0): R;
    nsli_removeConstraint<R = boolean, P0 = unknown>(_nsli_removeConstraint: P0): R;
    nsli_addConstraint<R = void, P0 = unknown>(_nsli_addConstraint: P0): R;
    nsli_setPiercingToken<R = void, P0 = number>(_nsli_setPiercingToken: P0): R;
    nsli_piercingToken<R = number>(): R;
    nsli_itemDescribingLayoutDirectionForConstraint_toItem<R = unknown, P0 = unknown, P1 = unknown>(_nsli_itemDescribingLayoutDirectionForConstraint: P0, _toItem: P1): R;
    nsli_isRTL<R = boolean>(): R;
    nsli_isFlipped<R = boolean>(): R;
    nsli_autoresizingMask<R = number>(): R;
    nsli_descriptionIncludesPointer<R = boolean>(): R;
    nsli_description<R = unknown>(): R;
    nsli_resolvedValue_forSymbolicConstant_inConstraint_error<R = boolean, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown>(_nsli_resolvedValue: P0, _forSymbolicConstant: P1, _inConstraint: P2, _error: P3): R;
    nsli_ancestorSharedWithItem<R = unknown, P0 = unknown>(_nsli_ancestorSharedWithItem: P0): R;
    nsli_layoutRect<R = unknown>(): R;
    nsli_superitem<R = unknown>(): R;
    nsli_convertSizeFromEngineSpace<R = CGSize, P0 = CGSize>(_nsli_convertSizeFromEngineSpace: P0): R;
    nsli_convertSizeToEngineSpace<R = CGSize, P0 = CGSize>(_nsli_convertSizeToEngineSpace: P0): R;
    nsli_layoutEngine<R = unknown>(): R;
    _referencingConstraints<R = unknown>(): R;
    constraintsAffectingLayoutForOrientation<R = unknown, P0 = number>(_constraintsAffectingLayoutForOrientation: P0): R;
    _discardEngine<R = void, P0 = unknown>(__discardEngine: P0): R;
    _didMoveFromLayoutEngine_toEngine<R = void, P0 = unknown, P1 = unknown>(__didMoveFromLayoutEngine: P0, _toEngine: P1): R;
    _updateFrameIfNeeded<R = void>(): R;
    setShouldBeArchived<R = void, P0 = boolean>(_setShouldBeArchived: P0): R;
    shouldBeArchived<R = boolean>(): R;
    _snipReferencingConstraints<R = void>(): R;
    convertRect_toView<R = CGRect, P0 = CGRect, P1 = unknown>(_convertRect: P0, _toView: P1): R;
    layoutRect<R = unknown>(): R;
    bounds<R = CGRect>(): R;
    _alignmentFrame<R = CGRect>(): R;
    setFrame<R = void, P0 = CGRect>(_setFrame: P0): R;
    setObservationInfo<R = void, P0 = void>(_setObservationInfo: P0): R;
    nsli_lowersExpressionRelativeToConstraintContainer<R = boolean>(): R;
    nsli_lowerAttribute_intoExpression_withCoefficient_container<R = boolean, P0 = number, P1 = unknown, P2 = number, P3 = unknown>(_nsli_lowerAttribute: P0, _intoExpression: P1, _withCoefficient: P2, _container: P3): R;
    nsli_lowerAttribute_intoExpression_withCoefficient_forConstraint<R = boolean, P0 = number, P1 = unknown, P2 = number, P3 = unknown>(_nsli_lowerAttribute: P0, _intoExpression: P1, _withCoefficient: P2, _forConstraint: P3): R;
    removeFromOwningView<R = void>(): R;
    allowsNegativeSize<R = boolean>(): R;
    initAllowingNegativeSize<R = unknown>(): R;
    dealloc<R = void>(): R;
    ns_containerWidgetType<R = unknown>(): R;
    ns_widgetType<R = unknown>(): R;
    centerYAnchor<R = NSLayoutYAxisAnchor>(): R;
    centerXAnchor<R = NSLayoutXAxisAnchor>(): R;
    heightAnchor<R = NSLayoutDimension>(): R;
    widthAnchor<R = NSLayoutDimension>(): R;
    bottomAnchor<R = NSLayoutYAxisAnchor>(): R;
    topAnchor<R = NSLayoutYAxisAnchor>(): R;
    rightAnchor<R = NSLayoutXAxisAnchor>(): R;
    leftAnchor<R = NSLayoutXAxisAnchor>(): R;
    trailingAnchor<R = NSLayoutXAxisAnchor>(): R;
    leadingAnchor<R = NSLayoutXAxisAnchor>(): R;
    hasAmbiguousLayout<R = boolean>(): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    owningView<R = NSView>(): R;
    setOwningView<R = void, P0 = NSView>(_v: P0): R;
    frame<R = CGRect>(): R;
  }
  namespace classes {
    export interface NSLayoutGuide<T = any> extends NSObject, NSCodingProtocol, NSUserInterfaceItemIdentificationProtocol {
      alloc<R = NSLayoutGuide>(): R;
      new: <R = NSLayoutGuide>() => R;
      _allowingStaleFramesPerformBlock<R = void, P0 = CDUnknownBlockType>(__allowingStaleFramesPerformBlock: P0): R;
    }
  }
}

declare const NSLayoutGuide: cocoa.classes.NSLayoutGuide;
