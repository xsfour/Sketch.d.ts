/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollViewDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    allowPanningInScrollView<R = boolean, P0 = cocoa.NSScrollView>(_allowPanningInScrollView: P0): R;
    magnificationInflectionPointsForScrollView<R = cocoa.NSArray, P0 = cocoa.NSScrollView>(_magnificationInflectionPointsForScrollView: P0): R;
    scrollView_didChangePresentationOrigin_active<R = void, P0 = cocoa.NSScrollView, P1 = cocoa.CGPoint, P2 = boolean>(_scrollView: P0, _didChangePresentationOrigin: P1, _active: P2): R;
    scrollView_pageAlignedOriginOnAxis_forProposedDestination_currentOrigin_initialOrigin_velocity<R = number, P0 = cocoa.NSScrollView, P1 = number, P2 = number, P3 = number, P4 = number, P5 = number>(_scrollView: P0, _pageAlignedOriginOnAxis: P1, _forProposedDestination: P2, _currentOrigin: P3, _initialOrigin: P4, _velocity: P5): R;
    scrollViewBeganMomentum_withVelocity_targetContentOffset<R = void, P0 = cocoa.NSScrollView, P1 = cocoa.CGPoint, P2 = cocoa.CGPoint>(_scrollViewBeganMomentum: P0, _withVelocity: P1, _targetContentOffset: P2): R;
    didEndScrollInScrollView<R = void, P0 = cocoa.NSScrollView>(_didEndScrollInScrollView: P0): R;
    didScrollInScrollView<R = void, P0 = cocoa.NSScrollView>(_didScrollInScrollView: P0): R;
    didBeginScrollInScrollView<R = void, P0 = cocoa.NSScrollView>(_didBeginScrollInScrollView: P0): R;
    _wantsPageAlignedVerticalAxis<R = boolean>(): R;
    set_wantsPageAlignedVerticalAxis<R = void, P0 = boolean>(_v: P0): R;
    _wantsPageAlignedHorizontalAxis<R = boolean>(): R;
    set_wantsPageAlignedHorizontalAxis<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrollViewDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSScrollViewDelegateProtocol: cocoa.classes.NSScrollViewDelegateProtocol;
