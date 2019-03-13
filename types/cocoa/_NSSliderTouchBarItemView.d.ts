/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSliderTouchBarItemView<T = any> extends NSView, NSSliderAccessoryContainerProtocol, NSUserInterfaceCompressionProtocol {
    cxx_destruct<R = void>(): R;
    _sliderDidCancelTracking<R = void>(): R;
    _sliderDidEndTracking<R = void>(): R;
    _sliderWillBeginTracking<R = void>(): R;
    _maxValueAccessoryDidFire<R = void, P0 = unknown>(__maxValueAccessoryDidFire: P0): R;
    _minValueAccessoryDidFire<R = void, P0 = unknown>(__minValueAccessoryDidFire: P0): R;
    _sliderDidChange<R = void, P0 = unknown>(__sliderDidChange: P0): R;
    _loadViewHierarchy<R = void>(): R;
    _commonInit<R = void>(): R;
    _autounbinder<R = unknown>(): R;
    _showsValueAccessories<R = boolean>(): R;
    set_showsValueAccessories<R = void, P0 = boolean>(_v: P0): R;
    _showsLabel<R = boolean>(): R;
    set_showsLabel<R = void, P0 = boolean>(_v: P0): R;
    _layoutView<R = NSStackView>(): R;
    _presentationCollapsed<R = boolean>(): R;
    set_presentationCollapsed<R = void, P0 = boolean>(_v: P0): R;
    _modelCollapsed<R = boolean>(): R;
    set_modelCollapsed<R = void, P0 = boolean>(_v: P0): R;
    label<R = NSString>(): R;
    setLabel<R = void, P0 = NSString>(_v: P0): R;
    valueAccessoryWidth<R = number>(): R;
    setValueAccessoryWidth<R = void, P0 = number>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    activeCompressionOptions<R = NSUserInterfaceCompressionOptions>(): R;
    collapsed<R = boolean>(): R;
    setCollapsed<R = void, P0 = boolean>(_v: P0): R;
    slider<R = NSSlider>(): R;
    setSlider<R = void, P0 = NSSlider>(_v: P0): R;
    _maxValueAccessoryIsHidden<R = boolean>(): R;
    _sliderIsHidden<R = boolean>(): R;
    _minValueAccessoryIsHidden<R = boolean>(): R;
    _labelIsHidden<R = boolean>(): R;
    _layoutEdgeInsets<R = NSEdgeInsets>(): R;
    maximumValueAccessory<R = NSSliderAccessory>(): R;
    setMaximumValueAccessory<R = void, P0 = NSSliderAccessory>(_v: P0): R;
    minimumValueAccessory<R = NSSliderAccessory>(): R;
    setMinimumValueAccessory<R = void, P0 = NSSliderAccessory>(_v: P0): R;
    _hasStepBehaviorContext<R = boolean>(): R;
    incrementValue<R = number>(): R;
    setIncrementValue<R = void, P0 = number>(_v: P0): R;
    value<R = number>(): R;
    setValue<R = void, P0 = number>(_v: P0): R;
    maximumValue<R = number>(): R;
    setMaximumValue<R = void, P0 = number>(_v: P0): R;
    minimumValue<R = number>(): R;
    setMinimumValue<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSSliderTouchBarItemView<T = any> extends NSView, NSSliderAccessoryContainerProtocol, NSUserInterfaceCompressionProtocol {
      alloc<R = _NSSliderTouchBarItemView>(): R;
      new: <R = _NSSliderTouchBarItemView>() => R;
      automaticallyNotifiesObserversOfCollapsed<R = boolean>(): R;
      keyPathsForValuesAffectingCollapsed<R = unknown>(): R;
      keyPathsForValuesAffecting_maxValueAccessoryIsHidden<R = unknown>(): R;
      keyPathsForValuesAffecting_sliderIsHidden<R = unknown>(): R;
      keyPathsForValuesAffecting_minValueAccessoryIsHidden<R = unknown>(): R;
      keyPathsForValuesAffecting_labelIsHidden<R = unknown>(): R;
      keyPathsForValuesAffecting_layoutEdgeInsets<R = unknown>(): R;
      keyPathsForValuesAffecting_hasStepBehaviorContext<R = unknown>(): R;
    }
  }
}
