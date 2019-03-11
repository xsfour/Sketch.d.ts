/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyle<T = any> extends cocoa._MSImmutableStyle {
    migratePropertiesFromV104OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV104OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV103OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV103OrEarlierWithUnarchiver: P0): R;
    boundsForPath<R = cocoa.CGRect, P0 = unknown>(_boundsForPath: P0): R;
    _shadowWithGreatestSpread<R = unknown, P0 = unknown>(__shadowWithGreatestSpread: P0): R;
    _boundsForShadow_path<R = cocoa.CGRect, P0 = unknown, P1 = unknown>(__boundsForShadow: P0, _path: P1): R;
    applyPropertiesToBezier<R = void, P0 = unknown>(_applyPropertiesToBezier: P0): R;
    boundingBoxForBiggestShadowSpreadForLayer<R = cocoa.CGRect, P0 = unknown>(_boundingBoxForBiggestShadowSpreadForLayer: P0): R;
    clearTextStyle<R = void>(): R;
    migratePropertiesFromV111OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV111OrEarlierWithUnarchiver: P0): R;
    renderBitmapEffects_bounds_parentCoordinateTransform<R = unknown, P0 = unknown, P1 = cocoa.CGRect, P2 = cocoa.CGAffineTransform>(_renderBitmapEffects: P0, _bounds: P1, _parentCoordinateTransform: P2): R;
    addSVGFilterAttributes_exporter_position<R = void, P0 = unknown, P1 = unknown, P2 = number>(_addSVGFilterAttributes: P0, _exporter: P1, _position: P2): R;
    addBlurFilter_exporter<R = void, P0 = unknown, P1 = unknown>(_addBlurFilter: P0, _exporter: P1): R;
    addShadowFilters_includeSource_attributes_exporter<R = void, P0 = unknown, P1 = boolean, P2 = unknown, P3 = unknown>(_addShadowFilters: P0, _includeSource: P1, _attributes: P2, _exporter: P3): R;
    applyLayerInfluenceRectBounds_document_toFilter_withRadius<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_applyLayerInfluenceRectBounds: P0, _document: P1, _toFilter: P2, _withRadius: P3): R;
    borderAtElementPosition_exporter<R = unknown, P0 = number, P1 = unknown>(_borderAtElementPosition: P0, _exporter: P1): R;
    fillAtElementPosition_exporter<R = unknown, P0 = number, P1 = unknown>(_fillAtElementPosition: P0, _exporter: P1): R;
    internalNumberOfElements<R = number, P0 = unknown>(_internalNumberOfElements: P0): R;
    borderWithGreatestInset<R = unknown>(): R;
    canCombineLastFillWithFirstBorder<R = boolean>(): R;
    requiresPathDefinition<R = boolean, P0 = unknown>(_requiresPathDefinition: P0): R;
    hasBorderRequiringMask<R = boolean>(): R;
    addSVGAttributes_exporter_elementPosition<R = void, P0 = unknown, P1 = unknown, P2 = number>(_addSVGAttributes: P0, _exporter: P1, _elementPosition: P2): R;
    numberOfElementsWithExporter<R = number, P0 = unknown>(_numberOfElementsWithExporter: P0): R;
    enabledInnerShadows<R = cocoa.NSArray>(): R;
    enabledShadows<R = cocoa.NSArray>(): R;
    enabledBorders<R = cocoa.NSArray>(): R;
    enabledFills<R = cocoa.NSArray>(): R;
    shadowStrokeType<R = number>(): R;
    shadowType<R = number>(): R;
    outerPaddingForBiggestShadowSpread<R = number>(): R;
    outerPaddingForBiggestStroke<R = number>(): R;
    thickestInnerStroke<R = number>(): R;
    thickestStroke<R = number>(): R;
    hasBlending<R = boolean>(): R;
    hasEnabledFill<R = boolean>(): R;
    hasEnabledBorder<R = boolean>(): R;
    hasEnabledInnerShadow<R = boolean>(): R;
    hasEnabledShadow<R = boolean>(): R;
    firstEnabledBorder<R = cocoa.MSImmutableStyleBorder>(): R;
    firstEnabledFill<R = cocoa.MSImmutableStyleFill>(): R;
    firstEnabledInnerShadow<R = cocoa.MSImmutableStyleInnerShadow>(): R;
    firstEnabledShadow<R = cocoa.MSImmutableStyleShadow>(): R;
    hasMoreThanOneEnabledFill<R = boolean>(): R;
    hasMarkers<R = boolean>(): R;
    hasEnabledBackgroundBlur<R = boolean>(): R;
    renderableFills<R = cocoa.NSArray>(): R;
    hasEnabledOpaqueFill<R = boolean>(): R;
  }
  namespace classes {
    export interface MSImmutableStyle<T = any> extends cocoa.classes._MSImmutableStyle {
      alloc<R = MSImmutableStyle>(): R;
      new: <R = MSImmutableStyle>() => R;
    }
  }
}

declare const MSImmutableStyle: cocoa.classes.MSImmutableStyle;
