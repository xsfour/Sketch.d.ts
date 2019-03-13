/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarButtonsStackView<T = any> extends NSStackView, _NSTouchBarItemLayoutWrapperProtocol {
    cxx_destruct<R = void>(): R;
    _compressedImagePosition<R = number>(): R;
    _setButtonsWithShortTitlesCompressedImage<R = void>(): R;
    _setButtonsWithShortTitles<R = void>(): R;
    _setButtonsWithFullTitles<R = void>(): R;
    _buttonsFitShortTitles<R = boolean>(): R;
    _buttonsFitFullTitles<R = boolean>(): R;
    insertPopover_atIndex<R = void, P0 = unknown, P1 = number>(_insertPopover: P0, _atIndex: P1): R;
    insertView_atIndex<R = void, P0 = unknown, P1 = number>(_insertView: P0, _atIndex: P1): R;
    resetButtons<R = void>(): R;
    updateButtons<R = void>(): R;
    setFrame<R = void, P0 = CGRect>(_setFrame: P0): R;
    resetLayout<R = void>(): R;
    _removeConstraintsForView_fromConstraints<R = void, P0 = unknown, P1 = unknown>(__removeConstraintsForView: P0, _fromConstraints: P1): R;
    _removeConstraintsForView<R = void, P0 = unknown>(__removeConstraintsForView: P0): R;
    initWithBarItem<R = unknown, P0 = unknown>(_initWithBarItem: P0): R;
    popoverItems<R = NSMutableArray>(): R;
    setPopoverItems<R = void, P0 = NSMutableArray>(_v: P0): R;
    adjustableButtons<R = NSMutableArray>(): R;
    setAdjustableButtons<R = void, P0 = NSMutableArray>(_v: P0): R;
    desiredWidthConstraint<R = NSLayoutConstraint>(): R;
    setDesiredWidthConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    equalWidthConstraints<R = NSMutableArray>(): R;
    setEqualWidthConstraints<R = void, P0 = NSMutableArray>(_v: P0): R;
    preferredWidthConstraints<R = NSMutableArray>(): R;
    setPreferredWidthConstraints<R = void, P0 = NSMutableArray>(_v: P0): R;
    groupTouchBarItem<R = NSButtonGroupTouchBarItem>(): R;
    setGroupTouchBarItem<R = void, P0 = NSButtonGroupTouchBarItem>(_v: P0): R;
    isSpace<R = boolean>(): R;
    contentClippingSize<R = CGSize>(): R;
    maxSize<R = CGSize>(): R;
    minSize<R = CGSize>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    itemPosition<R = number>(): R;
    preferredSize<R = CGSize>(): R;
    preferredTrailingPosition<R = number>(): R;
    preferredZOrder<R = number>(): R;
    priorityIndex<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSTouchBarButtonsStackView<T = any> extends NSStackView, _NSTouchBarItemLayoutWrapperProtocol {
      alloc<R = _NSTouchBarButtonsStackView>(): R;
      new: <R = _NSTouchBarButtonsStackView>() => R;
      makePopoverItemWithIdentifier_popoverTouchBar_title_image_preferredWidth<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = number>(_makePopoverItemWithIdentifier: P0, _popoverTouchBar: P1, _title: P2, _image: P3, _preferredWidth: P4): R;
      makeAlertButtonWithTitle_image_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string>(_makeAlertButtonWithTitle: P0, _image: P1, _target: P2, _action: P3): R;
      makeButtonWithTitle_image_target_action_preferredWidth<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string, P4 = number>(_makeButtonWithTitle: P0, _image: P1, _target: P2, _action: P3, _preferredWidth: P4): R;
      _buttonWithTitle_image_target_action_preferredWidth_isAlertButton<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string, P4 = number, P5 = boolean>(__buttonWithTitle: P0, _image: P1, _target: P2, _action: P3, _preferredWidth: P4, _isAlertButton: P5): R;
    }
  }
}
