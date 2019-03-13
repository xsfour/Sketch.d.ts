/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberFlowLayoutDelegateProtocol<T = any> extends NSScrubberDelegateProtocol {
    scrubber_layout_sizeForItemAtIndex<R = CGSize, P0 = NSScrubber, P1 = NSScrubberFlowLayout, P2 = number>(_scrubber: P0, _layout: P1, _sizeForItemAtIndex: P2): R;
  }
  namespace classes {
    export interface NSScrubberFlowLayoutDelegateProtocol<T = any> extends NSScrubberDelegateProtocol {  }
  }
}
