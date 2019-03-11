/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopoverColorWell<T = any> extends cocoa.NSColorWell, cocoa.NSPopoverDelegateProtocol {
    setColor<R = void, P0 = unknown>(_setColor: P0): R;
    _showPopover<R = void>(): R;
    _drawColor<R = boolean, P0 = boolean>(__drawColor: P0): R;
    _colorSwatchEdgeInsets<R = cocoa.NSEdgeInsets>(): R;
    setColorMatrixColorList<R = void, P0 = unknown>(_setColorMatrixColorList: P0): R;
    setTopBarMatrixColorList<R = void, P0 = unknown>(_setTopBarMatrixColorList: P0): R;
    controlSize<R = number>(): R;
    setControlSize<R = void, P0 = number>(_setControlSize: P0): R;
    _commonInit<R = void>(): R;
    _bezelRenderingButton<R = unknown>(): R;
    afterRenderer<R = cocoa.CDUnknownBlockType>(): R;
    setAfterRenderer<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    hasNoSelection<R = boolean>(): R;
    setHasNoSelection<R = void, P0 = boolean>(_v: P0): R;
    emptyColorEnabled<R = boolean>(): R;
    setEmptyColorEnabled<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSPopoverColorWell<T = any> extends cocoa.classes.NSColorWell, cocoa.classes.NSPopoverDelegateProtocol {
      alloc<R = NSPopoverColorWell>(): R;
      new: <R = NSPopoverColorWell>() => R;
      nullColor<R = unknown>(): R;
      emptyColor<R = unknown>(): R;
      drawNoColorSwatchInRect_enabled_active<R = void, P0 = cocoa.CGRect, P1 = boolean, P2 = boolean>(_drawNoColorSwatchInRect: P0, _enabled: P1, _active: P2): R;
      drawEmptyColorSwatchInRect_enabled<R = void, P0 = cocoa.CGRect, P1 = boolean>(_drawEmptyColorSwatchInRect: P0, _enabled: P1): R;
      _colorPopoverCreateIfNecessary<R = unknown, P0 = boolean>(__colorPopoverCreateIfNecessary: P0): R;
    }
  }
}

declare const NSPopoverColorWell: cocoa.classes.NSPopoverColorWell;
