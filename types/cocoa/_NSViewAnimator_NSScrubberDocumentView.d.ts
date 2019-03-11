/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewAnimator_NSScrubberDocumentView<T = any> extends cocoa._NSViewAnimator {
    updateForTrackingPoint_isTrackingSelection<R = void, P0 = cocoa.CGPoint, P1 = boolean>(_updateForTrackingPoint: P0, _isTrackingSelection: P1): R;
    setHighlightedIndex<R = void, P0 = number>(_setHighlightedIndex: P0): R;
    setSelectedIndex<R = void, P0 = number>(_setSelectedIndex: P0): R;
    targetView<R = cocoa.NSScrubberDocumentView>(): R;
  }
  namespace classes {
    export interface _NSViewAnimator_NSScrubberDocumentView<T = any> extends cocoa.classes._NSViewAnimator {  }
  }
}
