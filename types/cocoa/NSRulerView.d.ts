/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRulerView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    mouseDownCanMoveWindow<R = boolean>(): R;
    _drawContentRect<R = void, P0 = cocoa.CGRect>(__drawContentRect: P0): R;
    drawRulerLines<R = void>(): R;
    drawMarkersInRect<R = void, P0 = cocoa.CGRect>(_drawMarkersInRect: P0): R;
    drawHashMarksAndLabelsInRect<R = void, P0 = cocoa.CGRect>(_drawHashMarksAndLabelsInRect: P0): R;
    setLabelString_forValue<R = void, P0 = unknown, P1 = unknown>(_setLabelString: P0, _forValue: P1): R;
    labelStringForValue<R = unknown, P0 = unknown>(_labelStringForValue: P0): R;
    drawSeparatorInRect<R = void, P0 = cocoa.CGRect>(_drawSeparatorInRect: P0): R;
    _centerScanSeparatorRect<R = cocoa.CGRect, P0 = cocoa.CGRect>(__centerScanSeparatorRect: P0): R;
    _rectWithSingleThickness<R = cocoa.CGRect, P0 = cocoa.CGRect>(__rectWithSingleThickness: P0): R;
    invalidateHashMarks<R = void>(): R;
    moveRulerlineFromLocation_toLocation<R = void, P0 = number, P1 = number>(_moveRulerlineFromLocation: P0, _toLocation: P1): R;
    trackMarker_withMouseEvent<R = boolean, P0 = unknown, P1 = unknown>(_trackMarker: P0, _withMouseEvent: P1): R;
    removeMarker<R = void, P0 = unknown>(_removeMarker: P0): R;
    addMarker<R = void, P0 = unknown>(_addMarker: P0): R;
    initWithScrollView_orientation<R = unknown, P0 = unknown, P1 = number>(_initWithScrollView: P0, _orientation: P1): R;
    _commonInit<R = void>(): R;
    _addMarker<R = void, P0 = unknown>(__addMarker: P0): R;
    _cancelAddMarker<R = void, P0 = unknown>(__cancelAddMarker: P0): R;
    _locationFromUnitsValue<R = number, P0 = number>(__locationFromUnitsValue: P0): R;
    accessibilitySizeOfChild<R = unknown, P0 = unknown>(_accessibilitySizeOfChild: P0): R;
    accessibilityPositionOfChild<R = unknown, P0 = unknown>(_accessibilityPositionOfChild: P0): R;
    accessibilityIsChildFocusable<R = boolean, P0 = unknown>(_accessibilityIsChildFocusable: P0): R;
    accessibilityHelpStringForChild<R = unknown, P0 = unknown>(_accessibilityHelpStringForChild: P0): R;
    testPart<R = unknown, P0 = cocoa.CGPoint>(_testPart: P0): R;
    accessibilityIsMarkerUIElementsAttributeSettable<R = boolean>(): R;
    accessibilityMarkerUIElementsAttribute<R = unknown>(): R;
    accessibilityIsUnitDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityUnitDescriptionAttribute<R = unknown>(): R;
    accessibilityIsUnitsAttributeSettable<R = boolean>(): R;
    accessibilityUnitsAttribute<R = unknown>(): R;
    accessibilityIsOrientationAttributeSettable<R = boolean>(): R;
    accessibilityOrientationAttribute<R = unknown>(): R;
    accessibilityMinValueAttribute<R = unknown>(): R;
    accessibilityMaxValueAttribute<R = unknown>(): R;
    _setAccessoryViewHostMode<R = void, P0 = boolean>(__setAccessoryViewHostMode: P0): R;
    _isAccessoryViewHostMode<R = boolean>(): R;
    setUserInterfaceLayoutDirection<R = void, P0 = number>(_setUserInterfaceLayoutDirection: P0): R;
    userInterfaceLayoutDirection<R = number>(): R;
    _unitsForRulerLocation<R = number, P0 = number>(__unitsForRulerLocation: P0): R;
    _unitsForClientLocation<R = number, P0 = number>(__unitsForClientLocation: P0): R;
    _setDraggingMarker<R = void, P0 = unknown>(__setDraggingMarker: P0): R;
    _draggingMarkerView<R = unknown>(): R;
    _scrollToMatchContentView<R = void>(): R;
    setDisplaysTooltips<R = void, P0 = boolean>(_setDisplaysTooltips: P0): R;
    displaysTooltips<R = boolean>(): R;
    _markerHitTest<R = unknown, P0 = cocoa.CGPoint>(__markerHitTest: P0): R;
    _hashMarkDictionaryForDocView_measurementUnitToBoundsConversionFactor_stepUpCycle_stepDownCycle_minimumHashSpacing_minimumLabelSpacing<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown, P4 = number, P5 = number>(__hashMarkDictionaryForDocView: P0, _measurementUnitToBoundsConversionFactor: P1, _stepUpCycle: P2, _stepDownCycle: P3, _minimumHashSpacing: P4, _minimumLabelSpacing: P5): R;
    _hashMarkDictionaryForDocumentView_measurementUnitName<R = unknown, P0 = unknown, P1 = unknown>(__hashMarkDictionaryForDocumentView: P0, _measurementUnitName: P1): R;
    _hashMarkDictionary<R = unknown>(): R;
    _rulerOrigin<R = cocoa.CGPoint>(): R;
    _rulerAccessoryViewAreaRect<R = cocoa.CGRect>(): R;
    _markerAreaRect<R = cocoa.CGRect>(): R;
    _ruleAreaMarginRect<R = cocoa.CGRect>(): R;
    _maxRuleAreaRect<R = cocoa.CGRect>(): R;
    _ruleAreaRect<R = cocoa.CGRect>(): R;
    flipped<R = boolean>(): R;
    accessoryView<R = cocoa.NSView>(): R;
    setAccessoryView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    markers<R = cocoa.NSArray>(): R;
    setMarkers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    clientView<R = cocoa.NSView>(): R;
    setClientView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    originOffset<R = number>(): R;
    setOriginOffset<R = void, P0 = number>(_v: P0): R;
    measurementUnits<R = cocoa.NSString>(): R;
    setMeasurementUnits<R = void, P0 = cocoa.NSString>(_v: P0): R;
    reservedThicknessForAccessoryView<R = number>(): R;
    setReservedThicknessForAccessoryView<R = void, P0 = number>(_v: P0): R;
    reservedThicknessForMarkers<R = number>(): R;
    setReservedThicknessForMarkers<R = void, P0 = number>(_v: P0): R;
    ruleThickness<R = number>(): R;
    setRuleThickness<R = void, P0 = number>(_v: P0): R;
    requiredThickness<R = number>(): R;
    baselineLocation<R = number>(): R;
    orientation<R = number>(): R;
    setOrientation<R = void, P0 = number>(_v: P0): R;
    scrollView<R = cocoa.NSScrollView>(): R;
    setScrollView<R = void, P0 = cocoa.NSScrollView>(_v: P0): R;
  }
  namespace classes {
    export interface NSRulerView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSRulerView>(): R;
      new: <R = NSRulerView>() => R;
      registerUnitWithName_abbreviation_unitToPointsConversionFactor_stepUpCycle_stepDownCycle<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown>(_registerUnitWithName: P0, _abbreviation: P1, _unitToPointsConversionFactor: P2, _stepUpCycle: P3, _stepDownCycle: P4): R;
      accessibilityIsSingleCelled<R = boolean>(): R;
      _registrationDictionaryForUnitNamed<R = unknown, P0 = unknown>(__registrationDictionaryForUnitNamed: P0): R;
      _registerUnitWithName_abbreviation_unitToPointsConversionFactor_stepUpCycle_stepDownCycle<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown>(__registerUnitWithName: P0, _abbreviation: P1, _unitToPointsConversionFactor: P2, _stepUpCycle: P3, _stepDownCycle: P4): R;
      _labelCell<R = unknown>(): R;
      rulerLineColor<R = unknown>(): R;
      separatorColor<R = unknown>(): R;
      hashMarkColor<R = unknown>(): R;
      labelColor<R = unknown>(): R;
    }
  }
}

declare const NSRulerView: cocoa.classes.NSRulerView;
