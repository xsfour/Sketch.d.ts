/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderTouchBarItem<T = any> extends cocoa.NSTouchBarItem, cocoa.NSSliderAccessoryContainerProtocol {
    cxx_destruct<R = void>(): R;
    _itemViewDidCancelTracking<R = void>(): R;
    _itemViewDidEndTracking<R = void>(): R;
    _itemViewWillBeginTracking<R = void>(): R;
    _sliderDidChange<R = void, P0 = unknown>(__sliderDidChange: P0): R;
    _loadViewIfNecessary<R = void>(): R;
    preferredPopoverTransposerClass<R = unknown>(): R;
    preferredPopoverTransposerPriority<R = number>(): R;
    _autounbinder<R = unknown>(): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    customizationLabel<R = cocoa.NSString>(): R;
    setCustomizationLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    label<R = cocoa.NSString>(): R;
    setLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    valueAccessoryWidth<R = number>(): R;
    setValueAccessoryWidth<R = void, P0 = number>(_v: P0): R;
    slider<R = cocoa.NSSlider>(): R;
    setSlider<R = void, P0 = cocoa.NSSlider>(_v: P0): R;
    maximumValueAccessory<R = cocoa.NSSliderAccessory>(): R;
    setMaximumValueAccessory<R = void, P0 = cocoa.NSSliderAccessory>(_v: P0): R;
    minimumValueAccessory<R = cocoa.NSSliderAccessory>(): R;
    setMinimumValueAccessory<R = void, P0 = cocoa.NSSliderAccessory>(_v: P0): R;
    view<R = cocoa.NSUserInterfaceCompression>(): R;
    _sliderItemView<R = cocoa._NSSliderTouchBarItemView>(): R;
    incrementValue<R = number>(): R;
    setIncrementValue<R = void, P0 = number>(_v: P0): R;
    value<R = number>(): R;
    setValue<R = void, P0 = number>(_v: P0): R;
    maximumValue<R = number>(): R;
    setMaximumValue<R = void, P0 = number>(_v: P0): R;
    minimumValue<R = number>(): R;
    setMinimumValue<R = void, P0 = number>(_v: P0): R;
    _hasStepBehaviorContext<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSSliderTouchBarItem<T = any> extends cocoa.classes.NSTouchBarItem, cocoa.classes.NSSliderAccessoryContainerProtocol {
      alloc<R = NSSliderTouchBarItem>(): R;
      new: <R = NSSliderTouchBarItem>() => R;
      keyPathsForValuesAffecting_hasStepBehaviorContext<R = unknown>(): R;
    }
  }
}

declare const NSSliderTouchBarItem: cocoa.classes.NSSliderTouchBarItem;
