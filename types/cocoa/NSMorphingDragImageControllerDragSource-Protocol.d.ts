/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMorphingDragImageControllerDragSourceProtocol<T = any> extends cocoa.NSObjectProtocol {
    dragDestinationWindowForMorphingDragImage<R = cocoa.NSWindow, P0 = cocoa.NSMorphingDragImageController>(_dragDestinationWindowForMorphingDragImage: P0): R;
    morphingDragImage_wasDroppedAtPointOnScreen<R = void, P0 = cocoa.NSMorphingDragImageController, P1 = cocoa.CGPoint>(_morphingDragImage: P0, _wasDroppedAtPointOnScreen: P1): R;
    morphingDragImage_movedToPointOnScreen<R = void, P0 = cocoa.NSMorphingDragImageController, P1 = cocoa.CGPoint>(_morphingDragImage: P0, _movedToPointOnScreen: P1): R;
  }
  namespace classes {
    export interface NSMorphingDragImageControllerDragSourceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSMorphingDragImageControllerDragSourceProtocol: cocoa.classes.NSMorphingDragImageControllerDragSourceProtocol;
