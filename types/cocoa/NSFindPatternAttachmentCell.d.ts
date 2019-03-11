/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindPatternAttachmentCell<T = any> extends cocoa.NSTextAttachmentCell {
    drawTokenWithFrame_inView<R = void, P0 = cocoa.CGRect, P1 = unknown>(_drawTokenWithFrame: P0, _inView: P1): R;
    drawTokenInRect_withOptions<R = void, P0 = cocoa.CGRect, P1 = unknown>(_drawTokenInRect: P0, _withOptions: P1): R;
    pullDownRectForBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(_pullDownRectForBounds: P0): R;
    pullDownImage<R = unknown>(): R;
    menu<R = unknown>(): R;
    _hasMenu<R = boolean>(): R;
    textColor<R = unknown>(): R;
    tokenColor<R = unknown>(): R;
    interiorBackgroundStyle<R = number>(): R;
    _isActiveInView<R = boolean, P0 = unknown>(__isActiveInView: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _attributedString<R = unknown>(): R;
    _setGroupID<R = void, P0 = number>(__setGroupID: P0): R;
    description<R = unknown>(): R;
    field<R = cocoa.NSFindPatternField>(): R;
    setField<R = void, P0 = cocoa.NSFindPatternField>(_v: P0): R;
    findPattern<R = cocoa.NSFindPattern>(): R;
    setFindPattern<R = void, P0 = cocoa.NSFindPattern>(_v: P0): R;
  }
  namespace classes {
    export interface NSFindPatternAttachmentCell<T = any> extends cocoa.classes.NSTextAttachmentCell {
      alloc<R = NSFindPatternAttachmentCell>(): R;
      new: <R = NSFindPatternAttachmentCell>() => R;
    }
  }
}

declare const NSFindPatternAttachmentCell: cocoa.classes.NSFindPatternAttachmentCell;
