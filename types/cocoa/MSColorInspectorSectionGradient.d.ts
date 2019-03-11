/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSectionGradient<T = any> extends cocoa.MSColorInspectorSection, cocoa.MSGradientEventHandlerDelegateProtocol, cocoa.MSGradientBarViewDelegateProtocol {
    closeGradientHandler<R = void>(): R;
    gradients<R = unknown>(): R;
    rotateGradientAction<R = void, P0 = unknown>(_rotateGradientAction: P0): R;
    drawGradient_inRect_colorSpace<R = void, P0 = unknown, P1 = cocoa.CGRect, P2 = unknown>(_drawGradient: P0, _inRect: P1, _colorSpace: P2): R;
    updateOtherGradientsToReflectChanges<R = void>(): R;
    switchToGradientHandler<R = void>(): R;
    gradientBarAction<R = void, P0 = unknown>(_gradientBarAction: P0): R;
    switchToGradientHandlerIfNecessary<R = void>(): R;
    awakeFromNib<R = void>(): R;
    gradientHandler<R = cocoa.MSGradientEventHandler>(): R;
    setGradientHandler<R = void, P0 = cocoa.MSGradientEventHandler>(_v: P0): R;
    rotateRightButton<R = cocoa.NSButton>(): R;
    setRotateRightButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    rotateLeftButton<R = cocoa.NSButton>(): R;
    setRotateLeftButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    gradientBarView<R = cocoa.MSGradientBarView>(): R;
    setGradientBarView<R = void, P0 = cocoa.MSGradientBarView>(_v: P0): R;
    gradientBarParentView<R = cocoa.NSView>(): R;
    setGradientBarParentView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSColorInspectorSectionGradient<T = any> extends cocoa.classes.MSColorInspectorSection, cocoa.classes.MSGradientEventHandlerDelegateProtocol, cocoa.classes.MSGradientBarViewDelegateProtocol {
      alloc<R = MSColorInspectorSectionGradient>(): R;
      new: <R = MSColorInspectorSectionGradient>() => R;
    }
  }
}

declare const MSColorInspectorSectionGradient: cocoa.classes.MSColorInspectorSectionGradient;
