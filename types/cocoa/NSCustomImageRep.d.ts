/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCustomImageRep<T = any> extends cocoa.NSImageRep {
    initWithSize_flipped_drawingHandler<R = unknown, P0 = cocoa.CGSize, P1 = boolean, P2 = cocoa.CDUnknownBlockType>(_initWithSize: P0, _flipped: P1, _drawingHandler: P2): R;
    initWithDrawSelector_delegate<R = unknown, P0 = string, P1 = unknown>(_initWithDrawSelector: P0, _delegate: P1): R;
    setFlipped<R = void, P0 = boolean>(_setFlipped: P0): R;
    isFlipped<R = boolean>(): R;
    drawHandler<R = cocoa.CDUnknownBlockType>(): R;
    initWithSize_drawHandler<R = unknown, P0 = cocoa.CGSize, P1 = cocoa.CDUnknownBlockType>(_initWithSize: P0, _drawHandler: P1): R;
    initWithSize_flipped_drawHandler<R = unknown, P0 = cocoa.CGSize, P1 = boolean, P2 = cocoa.CDUnknownBlockType>(_initWithSize: P0, _flipped: P1, _drawHandler: P2): R;
    initWithDrawSelector_delegate_flipped<R = unknown, P0 = string, P1 = unknown, P2 = boolean>(_initWithDrawSelector: P0, _delegate: P1, _flipped: P2): R;
    delegate<R = unknown>(): R;
    drawSelector<R = string>(): R;
    drawingHandler<R = cocoa.CDUnknownBlockType>(): R;
  }
  namespace classes {
    export interface NSCustomImageRep<T = any> extends cocoa.classes.NSImageRep {
      alloc<R = NSCustomImageRep>(): R;
      new: <R = NSCustomImageRep>() => R;
    }
  }
}

declare const NSCustomImageRep: cocoa.classes.NSCustomImageRep;
