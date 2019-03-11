/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollViewLayoutHelper<T = any> extends cocoa.NSObject {
    updateLayoutWithMinimumDocumentFrameSize<R = void, P0 = cocoa.CGSize>(_updateLayoutWithMinimumDocumentFrameSize: P0): R;
    initWithScrollView<R = unknown, P0 = unknown>(_initWithScrollView: P0): R;
    contentViewInsets<R = cocoa.NSEdgeInsets>(): R;
    cornerFrame<R = cocoa.CGRect>(): R;
    hLegacyScrollerFrame<R = cocoa.CGRect>(): R;
    vLegacyScrollerFrame<R = cocoa.CGRect>(): R;
    hScrollerFrame<R = cocoa.CGRect>(): R;
    vScrollerFrame<R = cocoa.CGRect>(): R;
    insetContentFrame<R = cocoa.CGRect>(): R;
    contentFrame<R = cocoa.CGRect>(): R;
    findBarFrame<R = cocoa.CGRect>(): R;
    hRulerFrame<R = cocoa.CGRect>(): R;
    vRulerFrame<R = cocoa.CGRect>(): R;
    headerFrame<R = cocoa.CGRect>(): R;
    contentsExtendUnderInsets<R = boolean>(): R;
    cornerShown<R = boolean>(): R;
    vScrollerShown<R = boolean>(): R;
    hScrollerShown<R = boolean>(): R;
    documentMinimumSize<R = cocoa.CGSize>(): R;
  }
  namespace classes {
    export interface _NSScrollViewLayoutHelper<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSScrollViewLayoutHelper>(): R;
      new: <R = _NSScrollViewLayoutHelper>() => R;
    }
  }
}
