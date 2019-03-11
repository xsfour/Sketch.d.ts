/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDraggingSourceProtocol<T = any> {
    draggingSession_sourceOperationMaskForDraggingContext<R = number, P0 = cocoa.NSDraggingSession, P1 = number>(_draggingSession: P0, _sourceOperationMaskForDraggingContext: P1): R;
    ignoreModifierKeysForDraggingSession<R = boolean, P0 = cocoa.NSDraggingSession>(_ignoreModifierKeysForDraggingSession: P0): R;
    draggingSession_endedAtPoint_operation<R = void, P0 = cocoa.NSDraggingSession, P1 = cocoa.CGPoint, P2 = number>(_draggingSession: P0, _endedAtPoint: P1, _operation: P2): R;
    draggingSession_movedToPoint<R = void, P0 = cocoa.NSDraggingSession, P1 = cocoa.CGPoint>(_draggingSession: P0, _movedToPoint: P1): R;
    draggingSession_willBeginAtPoint<R = void, P0 = cocoa.NSDraggingSession, P1 = cocoa.CGPoint>(_draggingSession: P0, _willBeginAtPoint: P1): R;
  }
  namespace classes {
    export interface NSDraggingSourceProtocol<T = any> {  }
  }
}

declare const NSDraggingSourceProtocol: cocoa.classes.NSDraggingSourceProtocol;
