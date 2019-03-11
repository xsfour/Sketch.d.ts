/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutItemProtocol<T = any> extends cocoa.NSObjectProtocol {
    nsli_isFlipped<R = boolean>(): R;
    nsli_autoresizingMask<R = number>(): R;
    nsli_descriptionIncludesPointer<R = boolean>(): R;
    nsli_description<R = cocoa.NSString>(): R;
    nsli_resolvedValue_forSymbolicConstant_inConstraint_error<R = boolean, P0 = number, P1 = cocoa.NSString, P2 = cocoa.NSLayoutConstraint, P3 = unknown>(_nsli_resolvedValue: P0, _forSymbolicConstant: P1, _inConstraint: P2, _error: P3): R;
    nsli_lowerAttribute_intoExpression_withCoefficient_container<R = boolean, P0 = number, P1 = cocoa.NSISLinearExpression, P2 = number, P3 = cocoa.NSLayoutItem>(_nsli_lowerAttribute: P0, _intoExpression: P1, _withCoefficient: P2, _container: P3): R;
    nsli_lowerAttribute_intoExpression_withCoefficient_forConstraint<R = boolean, P0 = number, P1 = cocoa.NSISLinearExpression, P2 = number, P3 = cocoa.NSLayoutConstraint>(_nsli_lowerAttribute: P0, _intoExpression: P1, _withCoefficient: P2, _forConstraint: P3): R;
    nsli_superitem<R = cocoa.NSLayoutItem>(): R;
    nsli_convertSizeFromEngineSpace<R = cocoa.CGSize, P0 = cocoa.CGSize>(_nsli_convertSizeFromEngineSpace: P0): R;
    nsli_convertSizeToEngineSpace<R = cocoa.CGSize, P0 = cocoa.CGSize>(_nsli_convertSizeToEngineSpace: P0): R;
    nsli_layoutEngine<R = cocoa.NSISEngine>(): R;
    nsli_layoutRect<R = cocoa.NSLayoutRect>(): R;
    nsli_boundsHeightVariable<R = cocoa.NSISVariable>(): R;
    nsli_boundsWidthVariable<R = cocoa.NSISVariable>(): R;
    nsli_minYVariable<R = cocoa.NSISVariable>(): R;
    nsli_minXVariable<R = cocoa.NSISVariable>(): R;
    nsli_marginOffsetForAttribute<R = number, P0 = number>(_nsli_marginOffsetForAttribute: P0): R;
    nsli_installedConstraints<R = cocoa.NSArray>(): R;
    nsli_removeConstraint<R = boolean, P0 = cocoa.NSLayoutConstraint>(_nsli_removeConstraint: P0): R;
    nsli_addConstraint_mutuallyExclusiveConstraints<R = void, P0 = cocoa.NSLayoutConstraint, P1 = unknown>(_nsli_addConstraint: P0, _mutuallyExclusiveConstraints: P1): R;
    nsli_addConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_nsli_addConstraint: P0): R;
    nsli_engineToUserScalingCoefficients<R = cocoa.CGSize>(): R;
    nsli_layoutAnchorForAttribute<R = cocoa.NSLayoutAnchor, P0 = number>(_nsli_layoutAnchorForAttribute: P0): R;
    nsli_ancestorSharedWithItem<R = cocoa.NSLayoutItem, P0 = cocoa.NSLayoutItem>(_nsli_ancestorSharedWithItem: P0): R;
    nsli_itemDescribingLayoutDirectionForConstraint_toItem<R = cocoa.NSLayoutItem, P0 = cocoa.NSLayoutConstraint, P1 = cocoa.NSLayoutItem>(_nsli_itemDescribingLayoutDirectionForConstraint: P0, _toItem: P1): R;
    nsli_layoutMarginsItem<R = cocoa.NSLayoutItem>(): R;
    nsli_isRTL<R = boolean>(): R;
    nsli_lowersExpressionRelativeToConstraintContainer<R = boolean>(): R;
    nsli_isLegalConstraintItem<R = boolean>(): R;
    nsli_canHostIndependentVariableAnchor<R = boolean>(): R;
    nsli_piercingToken<R = number>(): R;
    setNsli_piercingToken<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSLayoutItemProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSLayoutItemProtocol: cocoa.classes.NSLayoutItemProtocol;
