/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSlider<T = any> extends cocoa.NSControl, cocoa.NSGestureRecognizerDelegateProtocol {
    setHighlighted<R = void, P0 = boolean>(_setHighlighted: P0): R;
    isHighlighted<R = boolean>(): R;
    _valueAtLocation<R = number, P0 = number>(__valueAtLocation: P0): R;
    doubleValue<R = number>(): R;
    setDoubleValue<R = void, P0 = number>(_setDoubleValue: P0): R;
    floatValue<R = number>(): R;
    setFloatValue<R = void, P0 = number>(_setFloatValue: P0): R;
    integerValue<R = number>(): R;
    setIntegerValue<R = void, P0 = number>(_setIntegerValue: P0): R;
    intValue<R = number>(): R;
    setIntValue<R = void, P0 = number>(_setIntValue: P0): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    objectValue<R = unknown>(): R;
    hideLabel<R = void>(): R;
    hideLabelAnimated<R = void>(): R;
    setHideLabelTimer<R = void>(): R;
    showLabel<R = void>(): R;
    flashLabel<R = void>(): R;
    _endUnminimizeGesture<R = void>(): R;
    _beginUnminimizeGesture<R = void>(): R;
    _handlePan<R = void, P0 = unknown>(__handlePan: P0): R;
    _handlePress<R = void, P0 = unknown>(__handlePress: P0): R;
    _autounbinder<R = unknown>(): R;
    accessibilityExpandedAttribute<R = unknown>(): R;
    accessibilityIsActivationPointAttributeSettable<R = boolean>(): R;
    accessibilityActivationPointAttribute<R = unknown>(): R;
    accessibilityIsOrientationAttributeSettable<R = boolean>(): R;
    accessibilityOrientationAttribute<R = unknown>(): R;
    accessibilityIsAllowedValuesAttributeSettable<R = boolean>(): R;
    accessibilityIsMaxValueAttributeSettable<R = boolean>(): R;
    accessibilityMaxValueAttribute<R = unknown>(): R;
    accessibilityIsMinValueAttributeSettable<R = boolean>(): R;
    accessibilityMinValueAttribute<R = unknown>(): R;
    accessibilityIsValueIndicatorAttributeSettable<R = boolean>(): R;
    accessibilityValueIndicatorAttribute<R = unknown>(): R;
    accessibilitySetValueAttribute<R = void, P0 = unknown>(_accessibilitySetValueAttribute: P0): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
    accessibilitySubroleAttribute<R = unknown>(): R;
    labelTextEffect<R = number>(): R;
    setLabelTextEffect<R = void, P0 = number>(_v: P0): R;
    labelIsOnLeadingSideOfKnob<R = boolean>(): R;
    setLabelIsOnLeadingSideOfKnob<R = void, P0 = boolean>(_v: P0): R;
    allowedColorSpaces<R = cocoa.NSArray>(): R;
    setAllowedColorSpaces<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    relativeTracking<R = boolean>(): R;
    setRelativeTracking<R = void, P0 = boolean>(_v: P0): R;
    active<R = boolean>(): R;
    setActive<R = void, P0 = boolean>(_v: P0): R;
    minimizationDelegate<R = cocoa.NSTouchBarColorPickerSliderMinimizationDelegate>(): R;
    setMinimizationDelegate<R = void, P0 = cocoa.NSTouchBarColorPickerSliderMinimizationDelegate>(_v: P0): R;
    minimized<R = boolean>(): R;
    setMinimized<R = void, P0 = boolean>(_v: P0): R;
    valueIsFlipped<R = boolean>(): R;
    setValueIsFlipped<R = void, P0 = boolean>(_v: P0): R;
    artworkProvider<R = cocoa.NSTouchBarColorPickerSliderArtworkProvider>(): R;
    setArtworkProvider<R = void, P0 = cocoa.NSTouchBarColorPickerSliderArtworkProvider>(_v: P0): R;
    displayedColor<R = cocoa.NSColor>(): R;
    setDisplayedColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    knobIsPressed<R = boolean>(): R;
    labelAlphaValue<R = number>(): R;
    valueLabel<R = cocoa.NSAttributedString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSlider<T = any> extends cocoa.classes.NSControl, cocoa.classes.NSGestureRecognizerDelegateProtocol {
      alloc<R = NSTouchBarColorPickerSlider>(): R;
      new: <R = NSTouchBarColorPickerSlider>() => R;
      keyPathsForValuesAffectingKnobIsPressed<R = unknown>(): R;
      keyPathsForValuesAffectingLabelAlphaValue<R = unknown>(): R;
      keyPathsForValuesAffectingValueLabel<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarColorPickerSlider: cocoa.classes.NSTouchBarColorPickerSlider;
