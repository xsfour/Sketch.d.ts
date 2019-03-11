/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapeEventHandler<T = any> extends cocoa.MSEventHandler, cocoa.MSVectorCanvasDelegateProtocol, cocoa.NSTextDelegateProtocol, cocoa.NSMenuDelegateProtocol, cocoa.MSGestureRecognizerDelegateProtocol {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    performPathControllerUpdate<R = void, P0 = cocoa.CDUnknownBlockType>(_performPathControllerUpdate: P0): R;
    refreshCloseOrOpenPathUI<R = void>(): R;
    pathDidOpenOrClose<R = void>(): R;
    curveModeForPressedKey<R = number, P0 = number>(_curveModeForPressedKey: P0): R;
    parentGroupForInserting<R = unknown>(): R;
    insertNewShapeForEditingAtPoint<R = void, P0 = cocoa.CGPoint>(_insertNewShapeForEditingAtPoint: P0): R;
    updateToolButton<R = void>(): R;
    setAllowSelectionOnly<R = void, P0 = boolean>(_setAllowSelectionOnly: P0): R;
    toggleForceSelection<R = void, P0 = unknown>(_toggleForceSelection: P0): R;
    forceSelection<R = void, P0 = unknown>(_forceSelection: P0): R;
    markLayer_asEditing<R = void, P0 = unknown, P1 = boolean>(_markLayer: P0, _asEditing: P1): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    resetWithOptions<R = void, P0 = number>(_resetWithOptions: P0): R;
    styleSection<R = cocoa.MSStyleInspectorSection>(): R;
    setStyleSection<R = void, P0 = cocoa.MSStyleInspectorSection>(_v: P0): R;
    editingBehavior<R = cocoa.MSShapeEditingBehavior>(): R;
    setEditingBehavior<R = void, P0 = cocoa.MSShapeEditingBehavior>(_v: P0): R;
    pathController<R = cocoa.MSPathController>(): R;
    canvasHandler<R = cocoa.MSVectorCanvas>(): R;
    layers<R = cocoa.NSArray>(): R;
    ignorePathController<R = boolean>(): R;
    inspectorViewController<R = cocoa.MSEditShapeInspectorViewController>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSShapeEventHandler<T = any> extends cocoa.classes.MSEventHandler, cocoa.classes.MSVectorCanvasDelegateProtocol, cocoa.classes.NSTextDelegateProtocol, cocoa.classes.NSMenuDelegateProtocol, cocoa.classes.MSGestureRecognizerDelegateProtocol {
      alloc<R = MSShapeEventHandler>(): R;
      new: <R = MSShapeEventHandler>() => R;
    }
  }
}

declare const MSShapeEventHandler: cocoa.classes.MSShapeEventHandler;
