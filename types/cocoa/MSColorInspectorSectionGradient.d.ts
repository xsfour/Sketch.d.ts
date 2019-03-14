/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSectionGradient<T0 = void, T1 = void, T2 = void> extends MSColorInspectorSection, MSGradientEventHandlerDelegateProtocol, MSGradientBarViewDelegateProtocol {
    closeGradientHandler<R = void>(): R;
    gradients<R = unknown>(): R;
    rotateGradientAction<R = void, P0 = unknown>(_rotateGradientAction: P0): R;
    drawGradient_inRect_colorSpace<R = void, P0 = unknown, P1 = CGRect, P2 = unknown>(_drawGradient: P0, _inRect: P1, _colorSpace: P2): R;
    updateOtherGradientsToReflectChanges<R = void>(): R;
    switchToGradientHandler<R = void>(): R;
    gradientBarAction<R = void, P0 = unknown>(_gradientBarAction: P0): R;
    switchToGradientHandlerIfNecessary<R = void>(): R;
    awakeFromNib<R = void>(): R;
    gradientHandler<R = MSGradientEventHandler>(): R;
    setGradientHandler<R = void, P0 = MSGradientEventHandler>(_v: P0): R;
    rotateRightButton<R = NSButton>(): R;
    setRotateRightButton<R = void, P0 = NSButton>(_v: P0): R;
    rotateLeftButton<R = NSButton>(): R;
    setRotateLeftButton<R = void, P0 = NSButton>(_v: P0): R;
    gradientBarView<R = MSGradientBarView>(): R;
    setGradientBarView<R = void, P0 = MSGradientBarView>(_v: P0): R;
    gradientBarParentView<R = NSView>(): R;
    setGradientBarParentView<R = void, P0 = NSView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSColorInspectorSectionGradient {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorInspectorSection, MSGradientEventHandlerDelegateProtocol, MSGradientBarViewDelegateProtocol {
      alloc<R = MSColorInspectorSectionGradient>(): R;
      new: <R = MSColorInspectorSectionGradient>() => R;
    }
  }
}

declare const MSColorInspectorSectionGradient: cocoa.MSColorInspectorSectionGradient.CLASS;
