/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSButton<T = any> extends cocoa.NSControl, cocoa._NSAlertSensitiveViewProtocol, cocoa.NSUserInterfaceValidationsProtocol, cocoa.NSAccessibilityButtonProtocol, cocoa.NSUserInterfaceCompressionProtocol {
    _preferredAppearance<R = unknown>(): R;
    _supportedOptionsFromPrioritizedOptions<R = unknown, P0 = unknown>(__supportedOptionsFromPrioritizedOptions: P0): R;
    touchBarHitTestInsets<R = cocoa.NSEdgeInsets>(): R;
    setMinimumPressDuration<R = void, P0 = number>(_setMinimumPressDuration: P0): R;
    minimumPressDuration<R = number>(): R;
    setGuarded<R = void, P0 = boolean>(_setGuarded: P0): R;
    isGuarded<R = boolean>(): R;
    alwaysEnablesRadioButtonExclusivity<R = boolean>(): R;
    setAlwaysEnablesRadioButtonExclusivity<R = void, P0 = boolean>(_setAlwaysEnablesRadioButtonExclusivity: P0): R;
    springLoadingActivated_draggingInfo<R = void, P0 = boolean, P1 = unknown>(_springLoadingActivated: P0, _draggingInfo: P1): R;
    springLoadingHighlightChanged<R = void, P0 = unknown>(_springLoadingHighlightChanged: P0): R;
    springLoadingEntered<R = number, P0 = unknown>(_springLoadingEntered: P0): R;
    _inToolbar<R = boolean>(): R;
    stopSpeaking<R = void, P0 = unknown>(_stopSpeaking: P0): R;
    startSpeaking<R = void, P0 = unknown>(_startSpeaking: P0): R;
    _sound<R = unknown>(): R;
    _setSound<R = void, P0 = unknown>(__setSound: P0): R;
    sound<R = unknown>(): R;
    setSound<R = void, P0 = unknown>(_setSound: P0): R;
    isFlipped<R = boolean>(): R;
    _popupToSubstituteInInit<R = unknown>(): R;
    altModifySelection<R = void, P0 = unknown>(_altModifySelection: P0): R;
    shiftModifySelection<R = void, P0 = unknown>(_shiftModifySelection: P0): R;
    setTitleWithMnemonic<R = void, P0 = unknown>(_setTitleWithMnemonic: P0): R;
    _canBecomeDefaultButton<R = boolean>(): R;
    _keyEquivalentModifierMaskMatchesModifierFlags<R = boolean, P0 = number>(__keyEquivalentModifierMaskMatchesModifierFlags: P0): R;
    highlight<R = void, P0 = boolean>(_highlight: P0): R;
    getPeriodicDelay_interval<R = void, P0 = number, P1 = number>(_getPeriodicDelay: P0, _interval: P1): R;
    setPeriodicDelay_interval<R = void, P0 = number, P1 = number>(_setPeriodicDelay: P0, _interval: P1): R;
    setShowsDisclosureChevron<R = void, P0 = boolean>(_setShowsDisclosureChevron: P0): R;
    showsDisclosureChevron<R = boolean>(): R;
    setPeriodicInterval<R = void, P0 = number>(_setPeriodicInterval: P0): R;
    periodicInterval<R = number>(): R;
    setPeriodicDelay<R = void, P0 = number>(_setPeriodicDelay: P0): R;
    periodicDelay<R = number>(): R;
    setButtonType<R = void, P0 = number>(_setButtonType: P0): R;
    setAttributedAlternateTitle<R = void, P0 = unknown>(_setAttributedAlternateTitle: P0): R;
    attributedAlternateTitle<R = unknown>(): R;
    setAttributedTitle<R = void, P0 = unknown>(_setAttributedTitle: P0): R;
    attributedTitle<R = unknown>(): R;
    setNextState<R = void>(): R;
    activeCompressionOptions<R = cocoa.NSUserInterfaceCompressionOptions>(): R;
    bezelColor<R = cocoa.NSColor>(): R;
    setBezelColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    contentTintColor<R = cocoa.NSColor>(): R;
    setContentTintColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    keyEquivalentModifierMask<R = number>(): R;
    setKeyEquivalentModifierMask<R = void, P0 = number>(_v: P0): R;
    keyEquivalent<R = cocoa.NSString>(): R;
    setKeyEquivalent<R = void, P0 = cocoa.NSString>(_v: P0): R;
    transparent<R = boolean>(): R;
    setTransparent<R = void, P0 = boolean>(_v: P0): R;
    bordered<R = boolean>(): R;
    setBordered<R = void, P0 = boolean>(_v: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
    imageScaling<R = number>(): R;
    setImageScaling<R = void, P0 = number>(_v: P0): R;
    imageHugsTitle<R = boolean>(): R;
    setImageHugsTitle<R = void, P0 = boolean>(_v: P0): R;
    imagePosition<R = number>(): R;
    setImagePosition<R = void, P0 = number>(_v: P0): R;
    alternateImage<R = cocoa.NSImage>(): R;
    setAlternateImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    alternateTitle<R = cocoa.NSString>(): R;
    setAlternateTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    title<R = cocoa.NSString>(): R;
    setTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    springLoaded<R = boolean>(): R;
    setSpringLoaded<R = void, P0 = boolean>(_v: P0): R;
    maxAcceleratorLevel<R = number>(): R;
    setMaxAcceleratorLevel<R = void, P0 = number>(_v: P0): R;
    wantsAlertStylePadding<R = boolean>(): R;
    bezelStyle<R = number>(): R;
    setBezelStyle<R = void, P0 = number>(_v: P0): R;
    allowsMixedState<R = boolean>(): R;
    setAllowsMixedState<R = void, P0 = boolean>(_v: P0): R;
    showsBorderOnlyWhileMouseInside<R = boolean>(): R;
    setShowsBorderOnlyWhileMouseInside<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + NSButton(NextKeyViewSupport):
    canBeKeyView<R = boolean>(): R;
  }
  namespace classes {
    export interface NSButton<T = any> extends cocoa.classes.NSControl, cocoa.classes._NSAlertSensitiveViewProtocol, cocoa.classes.NSUserInterfaceValidationsProtocol, cocoa.classes.NSAccessibilityButtonProtocol, cocoa.classes.NSUserInterfaceCompressionProtocol {
      alloc<R = NSButton>(): R;
      new: <R = NSButton>() => R;
      radioButtonWithTitle_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_radioButtonWithTitle: P0, _target: P1, _action: P2): R;
      checkboxWithTitle_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_checkboxWithTitle: P0, _target: P1, _action: P2): R;
      buttonWithTitle_image_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string>(_buttonWithTitle: P0, _image: P1, _target: P2, _action: P3): R;
      buttonWithImage_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_buttonWithImage: P0, _target: P1, _action: P2): R;
      buttonWithTitle_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_buttonWithTitle: P0, _target: P1, _action: P2): R;
      _buttonWithTitle_image_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string>(__buttonWithTitle: P0, _image: P1, _target: P2, _action: P3): R;
      // + NSButton(NextKeyViewSupport):
      
    }
  }
}

declare const NSButton: cocoa.classes.NSButton;
