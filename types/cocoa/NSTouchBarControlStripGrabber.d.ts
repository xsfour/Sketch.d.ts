/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarControlStripGrabber<T = any> extends NSView, NSCollectionViewElementProtocol, NSGestureRecognizerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    handlePress<R = void, P0 = unknown>(_handlePress: P0): R;
    layoutLayers<R = void>(): R;
    isFlipped<R = boolean>(): R;
    wantsLayer<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    _commonInit<R = void>(): R;
    accessibilityDescriptionAttribute<R = unknown>(): R;
    accessibilityIdentifierAttribute<R = unknown>(): R;
    highlighted<R = boolean>(): R;
    setHighlighted<R = void, P0 = boolean>(_v: P0): R;
    expanded<R = boolean>(): R;
    setExpanded<R = void, P0 = boolean>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    alignmentRectInsets<R = NSEdgeInsets>(): R;
    setAlignmentRectInsets<R = void, P0 = NSEdgeInsets>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarControlStripGrabber<T = any> extends NSView, NSCollectionViewElementProtocol, NSGestureRecognizerDelegateProtocol {
      alloc<R = NSTouchBarControlStripGrabber>(): R;
      new: <R = NSTouchBarControlStripGrabber>() => R;
    }
  }
}

declare const NSTouchBarControlStripGrabber: cocoa.classes.NSTouchBarControlStripGrabber;
