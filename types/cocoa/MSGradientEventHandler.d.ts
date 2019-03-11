/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientEventHandler<T = any> extends cocoa.MSPointsEventHandler, cocoa.MSGradientPointArrayDelegateProtocol {
    setValue_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKeyPath: P1): R;
    cursorWithDrawingBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_cursorWithDrawingBlock: P0): R;
    shouldDisplayMessageForSelectedStop<R = boolean>(): R;
    previousStop<R = unknown>(): R;
    nextStop<R = unknown>(): R;
    selectedStop<R = unknown>(): R;
    centerStopBetween<R = void>(): R;
    setSelectedStopToPercentage<R = void, P0 = number>(_setSelectedStopToPercentage: P0): R;
    setIndexForSelectedPoint<R = void, P0 = number>(_setIndexForSelectedPoint: P0): R;
    hasSelectedPoint<R = boolean>(): R;
    canInsertPointAtMouse<R = boolean, P0 = cocoa.CGPoint>(_canInsertPointAtMouse: P0): R;
    addStopAtPosition<R = number, P0 = cocoa.CGPoint>(_addStopAtPosition: P0): R;
    repairGradientIfNecessary<R = void>(): R;
    colorMagnifierAction<R = void, P0 = unknown>(_colorMagnifierAction: P0): R;
    gradient<R = unknown>(): R;
    insertPointCursor<R = cocoa.NSCursor>(): R;
    setInsertPointCursor<R = void, P0 = cocoa.NSCursor>(_v: P0): R;
    selectPointCursor<R = cocoa.NSCursor>(): R;
    setSelectPointCursor<R = void, P0 = cocoa.NSCursor>(_v: P0): R;
    gradientDelegate<R = cocoa.MSGradientEventHandlerDelegate>(): R;
    setGradientDelegate<R = void, P0 = cocoa.MSGradientEventHandlerDelegate>(_v: P0): R;
    stylePart<R = cocoa.MSStyleBasicFill>(): R;
    setStylePart<R = void, P0 = cocoa.MSStyleBasicFill>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSGradientEventHandler<T = any> extends cocoa.classes.MSPointsEventHandler, cocoa.classes.MSGradientPointArrayDelegateProtocol {
      alloc<R = MSGradientEventHandler>(): R;
      new: <R = MSGradientEventHandler>() => R;
      gradientHandlerForStylePart_manager<R = unknown, P0 = unknown, P1 = unknown>(_gradientHandlerForStylePart: P0, _manager: P1): R;
    }
  }
}

declare const MSGradientEventHandler: cocoa.classes.MSGradientEventHandler;
