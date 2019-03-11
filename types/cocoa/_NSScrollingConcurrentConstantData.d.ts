/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentConstantData<T = any> extends cocoa.NSData {
    dealloc<R = void>(): R;
    decelerationRate<R = number>(): R;
    setDecelerationRate<R = void, P0 = number>(_v: P0): R;
    initialClipSize<R = cocoa.CGSize>(): R;
    setInitialClipSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    initialClipOrigin<R = cocoa.CGPoint>(): R;
    setInitialClipOrigin<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    initialStretchAmount<R = cocoa.CGSize>(): R;
    setInitialStretchAmount<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    initialOriginConstraintLoc<R = cocoa.CGPoint>(): R;
    setInitialOriginConstraintLoc<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    initialContentInsets<R = cocoa.NSEdgeInsets>(): R;
    setInitialContentInsets<R = void, P0 = cocoa.NSEdgeInsets>(_v: P0): R;
    initialDocumentFrame<R = cocoa.CGRect>(): R;
    setInitialDocumentFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    pageAlignmentsVertical<R = cocoa.NSArray>(): R;
    setPageAlignmentsVertical<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    pageAlignmentsHorizontal<R = cocoa.NSArray>(): R;
    setPageAlignmentsHorizontal<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    synchronizedSiblingsVertical<R = cocoa.NSArray>(): R;
    setSynchronizedSiblingsVertical<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    synchronizedSiblingsHorizontal<R = cocoa.NSArray>(): R;
    setSynchronizedSiblingsHorizontal<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    scrollingModeVertical<R = number>(): R;
    setScrollingModeVertical<R = void, P0 = number>(_v: P0): R;
    scrollingModeHorizontal<R = number>(): R;
    setScrollingModeHorizontal<R = void, P0 = number>(_v: P0): R;
    hasSwipeForwardingResponder<R = boolean>(): R;
    setHasSwipeForwardingResponder<R = void, P0 = boolean>(_v: P0): R;
    doesDelegateRespondToSynchLayers<R = boolean>(): R;
    setDoesDelegateRespondToSynchLayers<R = void, P0 = boolean>(_v: P0): R;
    isDocumentLayerInclusive<R = boolean>(): R;
    setIsDocumentLayerInclusive<R = void, P0 = boolean>(_v: P0): R;
    allowsVerticalStretching<R = boolean>(): R;
    setAllowsVerticalStretching<R = void, P0 = boolean>(_v: P0): R;
    allowsHorizontalStretching<R = boolean>(): R;
    setAllowsHorizontalStretching<R = void, P0 = boolean>(_v: P0): R;
    usePredominantAxisScrolling<R = boolean>(): R;
    setUsePredominantAxisScrolling<R = void, P0 = boolean>(_v: P0): R;
    isClipViewFlipped<R = boolean>(): R;
    setIsClipViewFlipped<R = void, P0 = boolean>(_v: P0): R;
    affineTransformToClipView<R = cocoa.CGAffineTransform>(): R;
    setAffineTransformToClipView<R = void, P0 = cocoa.CGAffineTransform>(_v: P0): R;
    pointsPerPixel<R = cocoa.CGSize>(): R;
    setPointsPerPixel<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    documentPerfCategory<R = cocoa.NSString>(): R;
    setDocumentPerfCategory<R = void, P0 = cocoa.NSString>(_v: P0): R;
    documentLayer<R = cocoa.CALayer>(): R;
    setDocumentLayer<R = void, P0 = cocoa.CALayer>(_v: P0): R;
    documentView<R = cocoa.NSView>(): R;
    setDocumentView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    headerClipLayer<R = cocoa.CALayer>(): R;
    setHeaderClipLayer<R = void, P0 = cocoa.CALayer>(_v: P0): R;
    headerClipView<R = cocoa.NSClipView>(): R;
    setHeaderClipView<R = void, P0 = cocoa.NSClipView>(_v: P0): R;
    clipLayer<R = cocoa.CALayer>(): R;
    setClipLayer<R = void, P0 = cocoa.CALayer>(_v: P0): R;
    clipView<R = cocoa.NSClipView>(): R;
    setClipView<R = void, P0 = cocoa.NSClipView>(_v: P0): R;
    scrollViewDelegate<R = cocoa.NSScrollViewDelegate>(): R;
    setScrollViewDelegate<R = void, P0 = cocoa.NSScrollViewDelegate>(_v: P0): R;
    scrollView<R = cocoa.NSScrollView>(): R;
    setScrollView<R = void, P0 = cocoa.NSScrollView>(_v: P0): R;
    window<R = cocoa.NSWindow>(): R;
    setWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrollingConcurrentConstantData<T = any> extends cocoa.classes.NSData {
      constantDataWithScrollView_forwardingAxis<R = unknown, P0 = unknown, P1 = number>(_constantDataWithScrollView: P0, _forwardingAxis: P1): R;
    }
  }
}
