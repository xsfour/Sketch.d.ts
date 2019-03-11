/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindIndicator<T = any> extends cocoa.NSObject, cocoa.NSImmediateActionAnimationControllerProtocol {
    focusUAZoom<R = void>(): R;
    _cancel<R = void>(): R;
    _fade<R = void, P0 = number>(__fade: P0): R;
    _dissolve_animate<R = void, P0 = number, P1 = boolean>(__dissolve: P0, _animate: P1): R;
    _pulse<R = void, P0 = number>(__pulse: P0): R;
    dissolve<R = void>(): R;
    pulseWithFade_andDissolve<R = void, P0 = boolean, P1 = boolean>(_pulseWithFade: P0, _andDissolve: P1): R;
    pulseAndFade<R = void, P0 = boolean>(_pulseAndFade: P0): R;
    _redrawReusingWindows<R = void>(): R;
    _buildFindIndicatorWindows<R = unknown>(): R;
    _contentImage<R = unknown>(): R;
    _cacheDisplayInRect_ofView_toBitmapImageRep<R = void, P0 = cocoa.CGRect, P1 = unknown, P2 = unknown>(__cacheDisplayInRect: P0, _ofView: P1, _toBitmapImageRep: P2): R;
    _findIndicatorPathForRects<R = unknown, P0 = unknown>(__findIndicatorPathForRects: P0): R;
    _indicatorWindowGroupsOfRectGroupsForRects<R = unknown, P0 = unknown>(__indicatorWindowGroupsOfRectGroupsForRects: P0): R;
    _effectiveParentWindow<R = unknown>(): R;
    updateWithRects<R = void, P0 = unknown>(_updateWithRects: P0): R;
    dealloc<R = void>(): R;
    imageProvider<R = cocoa.CDUnknownBlockType>(): R;
    setImageProvider<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    completionHandler<R = cocoa.CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    contentDrawer<R = cocoa.CDUnknownBlockType>(): R;
    setContentDrawer<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    view<R = cocoa.NSView>(): R;
    setView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    textFinder<R = cocoa.NSTextFinder>(): R;
    setTextFinder<R = void, P0 = cocoa.NSTextFinder>(_v: P0): R;
    usesThreadedAnimation<R = boolean>(): R;
    setUsesThreadedAnimation<R = void, P0 = boolean>(_v: P0): R;
    delegate<R = cocoa.NSFindIndicatorDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSFindIndicatorDelegate>(_v: P0): R;
    parentWindow<R = cocoa.NSWindow>(): R;
    setParentWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
    visible<R = boolean>(): R;
    setVisible<R = void, P0 = boolean>(_v: P0): R;
    rects<R = cocoa.NSArray>(): R;
    setRects<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSFindIndicator<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSImmediateActionAnimationControllerProtocol {
      alloc<R = NSFindIndicator>(): R;
      new: <R = NSFindIndicator>() => R;
      endDrawing<R = void>(): R;
      beginDrawing<R = void>(): R;
      isDrawing<R = boolean>(): R;
    }
  }
}

declare const NSFindIndicator: cocoa.classes.NSFindIndicator;
