/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowCustomizationDragTargetDelegateProtocol<T = any> extends NSObjectProtocol {
    dragTarget_draggingConcluded<R = void, P0 = _NSFunctionRowCustomizationDragTarget, P1 = NSDraggingInfo>(_dragTarget: P0, _draggingConcluded: P1): R;
    dragTarget_draggingExited<R = void, P0 = _NSFunctionRowCustomizationDragTarget, P1 = NSDraggingInfo>(_dragTarget: P0, _draggingExited: P1): R;
    dragTarget_draggingUpdated<R = number, P0 = _NSFunctionRowCustomizationDragTarget, P1 = NSDraggingInfo>(_dragTarget: P0, _draggingUpdated: P1): R;
    dragTarget_draggingEntered<R = number, P0 = _NSFunctionRowCustomizationDragTarget, P1 = NSDraggingInfo>(_dragTarget: P0, _draggingEntered: P1): R;
    dragTarget_mouseExited<R = void, P0 = _NSFunctionRowCustomizationDragTarget, P1 = NSEvent>(_dragTarget: P0, _mouseExited: P1): R;
    dragTarget_mouseEntered<R = void, P0 = _NSFunctionRowCustomizationDragTarget, P1 = NSEvent>(_dragTarget: P0, _mouseEntered: P1): R;
  }
  namespace classes {
    export interface _NSFunctionRowCustomizationDragTargetDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
