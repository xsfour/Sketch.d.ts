/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDetachedTabDraggingImageToWindowTransitionControllerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    detachedTabDraggingImageToWindowTransitionController_didFinishTransitionAnimationForWindow<R = void, P0 = cocoa.NSDetachedTabDraggingImageToWindowTransitionController, P1 = cocoa.NSWindow>(_detachedTabDraggingImageToWindowTransitionController: P0, _didFinishTransitionAnimationForWindow: P1): R;
    destinationWindowForDetachedTabDraggingImageToWindowTransitionController<R = cocoa.NSWindow, P0 = cocoa.NSDetachedTabDraggingImageToWindowTransitionController>(_destinationWindowForDetachedTabDraggingImageToWindowTransitionController: P0): R;
    destinationWindowShouldMoveToDropPointInSpace_forDetachedTabDraggingImageToWindowTransitionController<R = boolean, P0 = number, P1 = cocoa.NSDetachedTabDraggingImageToWindowTransitionController>(_destinationWindowShouldMoveToDropPointInSpace: P0, _forDetachedTabDraggingImageToWindowTransitionController: P1): R;
  }
  namespace classes {
    export interface NSDetachedTabDraggingImageToWindowTransitionControllerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSDetachedTabDraggingImageToWindowTransitionControllerDelegateProtocol: cocoa.classes.NSDetachedTabDraggingImageToWindowTransitionControllerDelegateProtocol;
