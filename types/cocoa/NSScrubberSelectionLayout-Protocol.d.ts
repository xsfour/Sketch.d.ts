/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberSelectionLayoutProtocol<T = any> extends cocoa.NSObjectProtocol {
    selectionLayoutAttributesForItemAtIndex_withState_inLayout_presentationItemAttributes_inView<R = cocoa.NSScrubberLayoutAttributes, P0 = number, P1 = unknown, P2 = cocoa.NSScrubberItemLayout, P3 = cocoa.NSSet, P4 = cocoa.NSView>(_selectionLayoutAttributesForItemAtIndex: P0, _withState: P1, _inLayout: P2, _presentationItemAttributes: P3, _inView: P4): R;
    selectionLayoutAttributesForState_inLayout_presentationItemAttributes_inView<R = cocoa.NSSet, P0 = unknown, P1 = cocoa.NSScrubberItemLayout, P2 = cocoa.NSSet, P3 = cocoa.NSView>(_selectionLayoutAttributesForState: P0, _inLayout: P1, _presentationItemAttributes: P2, _inView: P3): R;
    itemAlignment<R = number>(): R;
    setItemAlignment<R = void, P0 = number>(_v: P0): R;
    floatingSelection<R = boolean>(): R;
    setFloatingSelection<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrubberSelectionLayoutProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSScrubberSelectionLayoutProtocol: cocoa.classes.NSScrubberSelectionLayoutProtocol;
