/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputAlignmentController<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    clearAlignmentStateForItem<R = void, P0 = unknown>(_clearAlignmentStateForItem: P0): R;
    setAlignmentGuides_affectingItem<R = void, P0 = unknown, P1 = unknown>(_setAlignmentGuides: P0, _affectingItem: P1): R;
    checkAlignmentOfItem<R = unknown, P0 = unknown>(_checkAlignmentOfItem: P0): R;
    alignItem_usingFilter<R = unknown, P0 = unknown, P1 = unknown>(_alignItem: P0, _usingFilter: P1): R;
    dealloc<R = void>(): R;
    _delegateShouldAlignOnMatch<R = boolean, P0 = unknown>(__delegateShouldAlignOnMatch: P0): R;
    _sessionForItem<R = unknown, P0 = unknown>(__sessionForItem: P0): R;
    delegate<R = NSInputAlignmentControllerDelegate>(): R;
    setDelegate<R = void, P0 = NSInputAlignmentControllerDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSInputAlignmentController<T = any> extends NSObject {
      alloc<R = NSInputAlignmentController>(): R;
      new: <R = NSInputAlignmentController>() => R;
      alignmentDeltaFromMatches<R = CGPoint, P0 = unknown>(_alignmentDeltaFromMatches: P0): R;
    }
  }
}

declare const NSInputAlignmentController: cocoa.classes.NSInputAlignmentController;
