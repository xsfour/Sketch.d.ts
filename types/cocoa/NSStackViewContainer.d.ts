/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStackViewContainer<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    reattachViews<R = void, P0 = unknown>(_reattachViews: P0): R;
    detachViews<R = void, P0 = unknown>(_detachViews: P0): R;
    _valueOfVisibilityPriorityForView<R = unknown, P0 = unknown>(__valueOfVisibilityPriorityForView: P0): R;
    _setValueOfVisibilityPriority_forView<R = void, P0 = unknown, P1 = unknown>(__setValueOfVisibilityPriority: P0, _forView: P1): R;
    visibilityPriorityForView<R = number, P0 = unknown>(_visibilityPriorityForView: P0): R;
    setVisibilityPriority_forView<R = void, P0 = number, P1 = unknown>(_setVisibilityPriority: P0, _forView: P1): R;
    _valueOfCustomSpacingAfterView<R = unknown, P0 = unknown>(__valueOfCustomSpacingAfterView: P0): R;
    _setValueOfCustomSpacing_afterView<R = void, P0 = unknown, P1 = unknown>(__setValueOfCustomSpacing: P0, _afterView: P1): R;
    customSpacingAfterView<R = number, P0 = unknown>(_customSpacingAfterView: P0): R;
    setCustomSpacing_afterView<R = void, P0 = number, P1 = unknown>(_setCustomSpacing: P0, _afterView: P1): R;
    replaceView_with<R = void, P0 = unknown, P1 = unknown>(_replaceView: P0, _with: P1): R;
    removeView<R = void, P0 = unknown>(_removeView: P0): R;
    insertView_atIndex<R = void, P0 = unknown, P1 = number>(_insertView: P0, _atIndex: P1): R;
    containsView<R = boolean, P0 = unknown>(_containsView: P0): R;
    customSpaceMapping<R = unknown>(): R;
    visibilityPriorityMapping<R = unknown>(): R;
    initWithStackView<R = unknown, P0 = unknown>(_initWithStackView: P0): R;
    stackView<R = cocoa.NSStackView>(): R;
    setStackView<R = void, P0 = cocoa.NSStackView>(_v: P0): R;
    attachedViews<R = cocoa.NSArray>(): R;
    detachedViews<R = cocoa.NSArray>(): R;
    views<R = cocoa.NSArray>(): R;
    setViews<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface NSStackViewContainer<T = any> extends cocoa.classes.NSView {
      alloc<R = NSStackViewContainer>(): R;
      new: <R = NSStackViewContainer>() => R;
    }
  }
}

declare const NSStackViewContainer: cocoa.classes.NSStackViewContainer;
