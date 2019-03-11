/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberDelegateProtocol<T = any> {
    didCancelInteractingWithScrubber<R = void, P0 = cocoa.NSScrubber>(_didCancelInteractingWithScrubber: P0): R;
    didFinishInteractingWithScrubber<R = void, P0 = cocoa.NSScrubber>(_didFinishInteractingWithScrubber: P0): R;
    didBeginInteractingWithScrubber<R = void, P0 = cocoa.NSScrubber>(_didBeginInteractingWithScrubber: P0): R;
    scrubber_didChangeVisibleRange<R = void, P0 = cocoa.NSScrubber, P1 = cocoa._NSRange>(_scrubber: P0, _didChangeVisibleRange: P1): R;
    scrubber_didHighlightItemAtIndex<R = void, P0 = cocoa.NSScrubber, P1 = number>(_scrubber: P0, _didHighlightItemAtIndex: P1): R;
    scrubber_didSelectItemAtIndex<R = void, P0 = cocoa.NSScrubber, P1 = number>(_scrubber: P0, _didSelectItemAtIndex: P1): R;
  }
  namespace classes {
    export interface NSScrubberDelegateProtocol<T = any> {  }
  }
}

declare const NSScrubberDelegateProtocol: cocoa.classes.NSScrubberDelegateProtocol;
