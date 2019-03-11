/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberFlowLayoutDelegateProtocol<T = any> extends cocoa.NSScrubberDelegateProtocol {
    scrubber_layout_sizeForItemAtIndex<R = cocoa.CGSize, P0 = cocoa.NSScrubber, P1 = cocoa.NSScrubberFlowLayout, P2 = number>(_scrubber: P0, _layout: P1, _sizeForItemAtIndex: P2): R;
  }
  namespace classes {
    export interface NSScrubberFlowLayoutDelegateProtocol<T = any> extends cocoa.classes.NSScrubberDelegateProtocol {  }
  }
}

declare const NSScrubberFlowLayoutDelegateProtocol: cocoa.classes.NSScrubberFlowLayoutDelegateProtocol;
