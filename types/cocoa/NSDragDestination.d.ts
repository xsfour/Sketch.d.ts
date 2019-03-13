/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDragDestination<T = any> extends NSObject, NSDraggingInfoProtocol, NSDraggingInfoPrivateProtocol, NSDraggingInfo_PrivateProtocol {
    cxx_destruct<R = void>(): R;
    _deviceID<R = number>(): R;
    _resetOnDemandSpringLoading<R = void>(): R;
    _isSpringLoadingEnabled<R = boolean>(): R;
    _setOnDemandSpringLoadingHoverArmed<R = void, P0 = boolean>(__setOnDemandSpringLoadingHoverArmed: P0): R;
    _setOnDemandSpringLoadingArmed<R = void, P0 = boolean>(__setOnDemandSpringLoadingArmed: P0): R;
    _setOnDemandSpringLoadingActivated<R = void, P0 = boolean>(__setOnDemandSpringLoadingActivated: P0): R;
    _setDragDeepEnabled<R = void, P0 = boolean>(__setDragDeepEnabled: P0): R;
    _isDragDeep<R = boolean>(): R;
    _invalidateUpdateDraggingItemTimer<R = void>(): R;
    _resetUpdateDraggingItemTimer<R = void>(): R;
    enumerateDraggingItemsForClass_view_usingBlock<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_enumerateDraggingItemsForClass: P0, _view: P1, _usingBlock: P2): R;
    _doAutoscroll<R = void, P0 = unknown>(__doAutoscroll: P0): R;
    _stopDraggingUpdates<R = void>(): R;
    _startDraggingUpdatesIfNeeded<R = void>(): R;
    _startDraggingUpdates<R = void>(): R;
    _unsetFinalSlide<R = void>(): R;
    _setDragCompletionTargets<R = void, P0 = unknown>(__setDragCompletionTargets: P0): R;
    _dragCompletionTargets<R = unknown>(): R;
    _setTarget<R = void, P0 = unknown>(__setTarget: P0): R;
    _target<R = unknown>(): R;
    _updateRespondsToSelectorFlags<R = void>(): R;
    _springLoadingActivated<R = void, P0 = boolean>(__springLoadingActivated: P0): R;
    _springLoadingHighlightChanged<R = void>(): R;
    _updateDraggingItemsForDrag<R = void>(): R;
    _draggingExited<R = void>(): R;
    _draggingUpdate<R = void>(): R;
    _draggingEntered<R = void>(): R;
    _updateForSpringLoadingOptions<R = void, P0 = number>(__updateForSpringLoadingOptions: P0): R;
    _stopSpringLoadingFlash<R = void>(): R;
    _flashSpringLoading<R = void>(): R;
    _startSpringLoadingFlash<R = void>(): R;
    _lastSpringLoadingOptions<R = number>(): R;
    _setLastDragDestinationOperation<R = void, P0 = number>(__setLastDragDestinationOperation: P0): R;
    _finalSlideLocation<R = CGPoint>(): R;
    _setFinalSlideLocation<R = void, P0 = CGPoint>(__setFinalSlideLocation: P0): R;
    _draggingFargo<R = number>(): R;
    dealloc<R = void>(): R;
    _setDragRef<R = void, P0 = OpaqueCoreDrag>(__setDragRef: P0): R;
    _receiveHandlerRef<R = OpaqueCoreDragHandler>(): R;
    _trackingHandlerRef<R = OpaqueCoreDragHandler>(): R;
    _setReceiveHandlerRef<R = void, P0 = OpaqueCoreDragHandler>(__setReceiveHandlerRef: P0): R;
    _setTrackingHandlerRef<R = void, P0 = OpaqueCoreDragHandler>(__setTrackingHandlerRef: P0): R;
    _initWithWindow<R = unknown, P0 = unknown>(__initWithWindow: P0): R;
    _lastDragLocation<R = CGPoint>(): R;
    set_lastDragLocation<R = void, P0 = CGPoint>(_v: P0): R;
    _lastDragTimestamp<R = number>(): R;
    set_lastDragTimestamp<R = void, P0 = number>(_v: P0): R;
    _dragID<R = number>(): R;
    set_dragID<R = void, P0 = number>(_v: P0): R;
    springLoadingHighlight<R = number>(): R;
    numberOfValidItemsForDrop<R = number>(): R;
    setNumberOfValidItemsForDrop<R = void, P0 = number>(_v: P0): R;
    animatesToDestination<R = boolean>(): R;
    setAnimatesToDestination<R = void, P0 = boolean>(_v: P0): R;
    draggingFormation<R = number>(): R;
    setDraggingFormation<R = void, P0 = number>(_v: P0): R;
    draggingSequenceNumber<R = number>(): R;
    draggingSource<R = unknown>(): R;
    draggingPasteboard<R = NSPasteboard>(): R;
    draggedImage<R = NSImage>(): R;
    draggedImageLocation<R = CGPoint>(): R;
    draggingLocation<R = CGPoint>(): R;
    draggingSourceOperationMask<R = number>(): R;
    draggingDestinationWindow<R = NSWindow>(): R;
    description<R = NSString>(): R;
    _needUpdateTimer<R = boolean>(): R;
    set_needUpdateTimer<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDragDestination<T = any> extends NSObject, NSDraggingInfoProtocol, NSDraggingInfoPrivateProtocol, NSDraggingInfo_PrivateProtocol {
      alloc<R = NSDragDestination>(): R;
      new: <R = NSDragDestination>() => R;
    }
  }
}

declare const NSDragDestination: cocoa.classes.NSDragDestination;
