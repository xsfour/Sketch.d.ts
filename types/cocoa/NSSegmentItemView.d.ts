/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentItemView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    _preferredAppearanceForSegmentLabelView<R = unknown, P0 = unknown>(__preferredAppearanceForSegmentLabelView: P0): R;
    _preferredAppearanceForSegmentImageView<R = unknown, P0 = unknown>(__preferredAppearanceForSegmentImageView: P0): R;
    _vibrancyBlendModeForSegmentLabelView_proposedBlendMode<R = number, P0 = unknown, P1 = number>(__vibrancyBlendModeForSegmentLabelView: P0, _proposedBlendMode: P1): R;
    _vibrancyBlendModeForSegmentImageView_proposedBlendMode<R = number, P0 = unknown, P1 = number>(__vibrancyBlendModeForSegmentImageView: P0, _proposedBlendMode: P1): R;
    _vibrancyBlendModeForSegmentBezelView_proposedBlendMode<R = number, P0 = unknown, P1 = number>(__vibrancyBlendModeForSegmentBezelView: P0, _proposedBlendMode: P1): R;
    _updateBezelView<R = void>(): R;
    _labelSize<R = CGSize>(): R;
    _updateLabelState<R = void>(): R;
    setLabelView<R = void, P0 = unknown>(_setLabelView: P0): R;
    labelView<R = unknown>(): R;
    _updateImageState<R = void>(): R;
    setImageRect<R = void, P0 = CGRect>(_setImageRect: P0): R;
    _segmentAlignmentRectInsets<R = NSEdgeInsets>(): R;
    _availableTruncationWidth<R = number>(): R;
    _preferredSegmentSize<R = CGSize>(): R;
    _minimumSegmentSize<R = CGSize>(): R;
    _minimumSegmentSizeWithOptions<R = CGSize, P0 = unknown>(__minimumSegmentSizeWithOptions: P0): R;
    minimumLabelWidth<R = number>(): R;
    contentPadding<R = number>(): R;
    contentSpacing<R = number>(): R;
    _requestMetrics<R = unknown, P0 = unknown>(__requestMetrics: P0): R;
    _coreUIOptions<R = unknown>(): R;
    _coreUISegmentPosition<R = unknown>(): R;
    _coreUIState<R = unknown>(): R;
    _isSeparatedSegmentStyle<R = boolean>(): R;
    _updateContentState<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _stopObserving<R = void>(): R;
    _setupObserving<R = void>(): R;
    compressibleOptions<R = NSUserInterfaceCompressionOptions>(): R;
    setCompressibleOptions<R = void, P0 = NSUserInterfaceCompressionOptions>(_v: P0): R;
    alignment<R = number>(): R;
    setAlignment<R = void, P0 = number>(_v: P0): R;
    trailingSegmentSelected<R = boolean>(): R;
    setTrailingSegmentSelected<R = void, P0 = boolean>(_v: P0): R;
    leadingSegmentSelected<R = boolean>(): R;
    setLeadingSegmentSelected<R = void, P0 = boolean>(_v: P0): R;
    trailingSeparator<R = boolean>(): R;
    setTrailingSeparator<R = void, P0 = boolean>(_v: P0): R;
    leadingSeparator<R = boolean>(): R;
    setLeadingSeparator<R = void, P0 = boolean>(_v: P0): R;
    trailingCap<R = boolean>(): R;
    setTrailingCap<R = void, P0 = boolean>(_v: P0): R;
    leadingCap<R = boolean>(): R;
    setLeadingCap<R = void, P0 = boolean>(_v: P0): R;
    selected<R = boolean>(): R;
    setSelected<R = void, P0 = boolean>(_v: P0): R;
    active<R = boolean>(): R;
    setActive<R = void, P0 = boolean>(_v: P0): R;
    rollover<R = boolean>(): R;
    setRollover<R = void, P0 = boolean>(_v: P0): R;
    emphasized<R = boolean>(): R;
    setEmphasized<R = void, P0 = boolean>(_v: P0): R;
    highlighted<R = boolean>(): R;
    setHighlighted<R = void, P0 = boolean>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    segmentStyle<R = number>(): R;
    setSegmentStyle<R = void, P0 = number>(_v: P0): R;
    controlSize<R = number>(): R;
    setControlSize<R = void, P0 = number>(_v: P0): R;
    segmentWidth<R = number>(): R;
    setSegmentWidth<R = void, P0 = number>(_v: P0): R;
    bezelTintColor<R = NSColor>(): R;
    setBezelTintColor<R = void, P0 = NSColor>(_v: P0): R;
    segmentItemData<R = NSSegmentItem>(): R;
    setSegmentItemData<R = void, P0 = NSSegmentItem>(_v: P0): R;
    drawsBezel<R = boolean>(): R;
    setDrawsBezel<R = void, P0 = boolean>(_v: P0): R;
    parentCell<R = NSSegmentedCell>(): R;
    setParentCell<R = void, P0 = NSSegmentedCell>(_v: P0): R;
    font<R = NSFont>(): R;
    setFont<R = void, P0 = NSFont>(_v: P0): R;
    labelRect<R = CGRect>(): R;
    label<R = NSString>(): R;
    setLabel<R = void, P0 = NSString>(_v: P0): R;
    showMenuIndicator<R = boolean>(): R;
    setShowMenuIndicator<R = void, P0 = boolean>(_v: P0): R;
    imageScaling<R = number>(): R;
    setImageScaling<R = void, P0 = number>(_v: P0): R;
    imageRect<R = CGRect>(): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface NSSegmentItemView<T = any> extends NSView {
      alloc<R = NSSegmentItemView>(): R;
      new: <R = NSSegmentItemView>() => R;
    }
  }
}

declare const NSSegmentItemView: cocoa.classes.NSSegmentItemView;
