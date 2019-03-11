/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPathControl<T = any> extends cocoa.NSControl {
    _cleanUpTransientDragState<R = void>(): R;
    _updateDropTargetForDraggingInfo<R = void, P0 = unknown>(__updateDropTargetForDraggingInfo: P0): R;
    _updateDropTargetToCell<R = void, P0 = unknown>(__updateDropTargetToCell: P0): R;
    _ensureDragContext<R = void>(): R;
    _draggedURL<R = unknown, P0 = unknown>(__draggedURL: P0): R;
    ignoreModifierKeysWhileDragging<R = boolean>(): R;
    draggedImage_endedAt_operation<R = void, P0 = unknown, P1 = cocoa.CGPoint, P2 = number>(_draggedImage: P0, _endedAt: P1, _operation: P2): R;
    draggedImage_beganAt<R = void, P0 = unknown, P1 = cocoa.CGPoint>(_draggedImage: P0, _beganAt: P1): R;
    draggingSourceOperationMaskForLocal<R = number, P0 = boolean>(_draggingSourceOperationMaskForLocal: P0): R;
    setDraggingSourceOperationMask_forLocal<R = void, P0 = number, P1 = boolean>(_setDraggingSourceOperationMask: P0, _forLocal: P1): R;
    _performDragOfCell_fromMouseDown<R = boolean, P0 = unknown, P1 = unknown>(__performDragOfCell: P0, _fromMouseDown: P1): R;
    _dragImageForCell_withEvent_offset<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CGPoint>(__dragImageForCell: P0, _withEvent: P1, _offset: P2): R;
    _dragShouldBeginFromMouseDown<R = boolean, P0 = unknown>(__dragShouldBeginFromMouseDown: P0): R;
    pathCell_willPopUpMenu<R = void, P0 = unknown, P1 = unknown>(_pathCell: P0, _willPopUpMenu: P1): R;
    pathCell_willDisplayOpenPanel<R = void, P0 = unknown, P1 = unknown>(_pathCell: P0, _willDisplayOpenPanel: P1): R;
    arrayWithArray_transformedByBlock<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_arrayWithArray: P0, _transformedByBlock: P1): R;
    setPathComponentCells<R = void, P0 = unknown>(_setPathComponentCells: P0): R;
    pathComponentCells<R = unknown>(): R;
    clickedPathComponentCell<R = unknown>(): R;
    _setNeedsDisplay<R = void>(): R;
    isFlipped<R = boolean>(): R;
    preservesContentDuringLiveResize<R = boolean>(): R;
    _mainContentBounds<R = cocoa.CGRect>(): R;
    _removeTrackingRects<R = void>(): R;
    _preferredAppearance<R = unknown>(): R;
    _commonInit<R = void>(): R;
    menu<R = cocoa.NSMenu>(): R;
    setMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    delegate<R = cocoa.NSPathControlDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSPathControlDelegate>(_v: P0): R;
    backgroundColor<R = cocoa.NSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    pathStyle<R = number>(): R;
    setPathStyle<R = void, P0 = number>(_v: P0): R;
    URL<R = cocoa.NSURL>(): R;
    setURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    doubleAction<R = string>(): R;
    setDoubleAction<R = void, P0 = string>(_v: P0): R;
    pathItems<R = cocoa.NSArray>(): R;
    setPathItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    clickedPathItem<R = cocoa.NSPathControlItem>(): R;
    placeholderAttributedString<R = cocoa.NSAttributedString>(): R;
    setPlaceholderAttributedString<R = void, P0 = cocoa.NSAttributedString>(_v: P0): R;
    placeholderString<R = cocoa.NSString>(): R;
    setPlaceholderString<R = void, P0 = cocoa.NSString>(_v: P0): R;
    allowedTypes<R = cocoa.NSArray>(): R;
    setAllowedTypes<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    editable<R = boolean>(): R;
    setEditable<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSPathControl<T = any> extends cocoa.classes.NSControl {
      alloc<R = NSPathControl>(): R;
      new: <R = NSPathControl>() => R;
    }
  }
}

declare const NSPathControl: cocoa.classes.NSPathControl;
