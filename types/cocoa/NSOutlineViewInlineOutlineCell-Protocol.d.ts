/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOutlineViewInlineOutlineCellProtocol<T = any> extends cocoa.NSObjectProtocol {
    updateOutlineCellFrame_withCellFrame_inView<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGRect, P2 = cocoa.NSView>(_updateOutlineCellFrame: P0, _withCellFrame: P1, _inView: P2): R;
    outlineCellFrame<R = cocoa.CGRect>(): R;
    setOutlineCellFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface NSOutlineViewInlineOutlineCellProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSOutlineViewInlineOutlineCellProtocol: cocoa.classes.NSOutlineViewInlineOutlineCellProtocol;
