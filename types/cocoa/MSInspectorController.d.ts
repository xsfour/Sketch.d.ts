/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorController<T = any> extends cocoa.NSViewController, cocoa.NSTouchBarDelegateProtocol {
    cxx_destruct<R = void>(): R;
    reloadTouchBars<R = void>(): R;
    closeAnyColorPopover<R = void>(): R;
    adjustInspectorToColorPopover_sender<R = void, P0 = unknown, P1 = unknown>(_adjustInspectorToColorPopover: P0, _sender: P1): R;
    openPopoverForStylePart_atIndex<R = void, P0 = number, P1 = number>(_openPopoverForStylePart: P0, _atIndex: P1): R;
    inspectorController<R = unknown>(): R;
    recursivelyDismissAllPresentedViewControllersOfViewController<R = void, P0 = unknown>(_recursivelyDismissAllPresentedViewControllersOfViewController: P0): R;
    showBorderOptionsAction<R = void, P0 = unknown>(_showBorderOptionsAction: P0): R;
    showFillOptionsAction<R = void, P0 = unknown>(_showFillOptionsAction: P0): R;
    handlerManager<R = unknown>(): R;
    focusOnTextFieldWithIdentifier<R = void, P0 = unknown>(_focusOnTextFieldWithIdentifier: P0): R;
    findFirstTextFieldInView<R = unknown, P0 = unknown>(_findFirstTextFieldInView: P0): R;
    focusOnFirstTextField<R = void>(): R;
    refreshIfNecessary<R = void, P0 = unknown>(_refreshIfNecessary: P0): R;
    reload<R = void>(): R;
    inspectorForLayers_eventHandler<R = unknown, P0 = unknown, P1 = unknown>(_inspectorForLayers: P0, _eventHandler: P1): R;
    refreshCurrentController<R = void>(): R;
    layoutContentView<R = void>(): R;
    reloadSharedObjectsSection<R = void>(): R;
    beginRenameSharedObject_completionBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_beginRenameSharedObject: P0, _completionBlock: P1): R;
    changeTextLayerFont<R = void, P0 = unknown>(_changeTextLayerFont: P0): R;
    changeColor<R = void, P0 = unknown>(_changeColor: P0): R;
    currentHandlerChanged<R = void>(): R;
    layerPositionPossiblyChanged<R = void>(): R;
    selectionDidChangeTo<R = void, P0 = unknown>(_selectionDidChangeTo: P0): R;
    viewDidResize<R = void>(): R;
    validateAlignmentButtons<R = void>(): R;
    connectAlignmentButtons<R = void>(): R;
    awakeFromNib<R = void>(): R;
    normalInspector<R = cocoa.MSNormalInspector>(): R;
    setNormalInspector<R = void, P0 = cocoa.MSNormalInspector>(_v: P0): R;
    contentContainerView<R = cocoa.NSView>(): R;
    setContentContainerView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    alignmentContainerView<R = cocoa.NSView>(): R;
    setAlignmentContainerView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    alignmentView<R = cocoa.NSView>(): R;
    setAlignmentView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    selectedLayers<R = cocoa.MSLayerArray>(): R;
    setSelectedLayers<R = void, P0 = cocoa.MSLayerArray>(_v: P0): R;
    alignmentBarHidden<R = boolean>(): R;
    setAlignmentBarHidden<R = void, P0 = boolean>(_v: P0): R;
    globalAssets<R = cocoa.MSPersistentAssetCollection>(): R;
    setGlobalAssets<R = void, P0 = cocoa.MSPersistentAssetCollection>(_v: P0): R;
    document<R = cocoa.MSDocument>(): R;
    setDocument<R = void, P0 = cocoa.MSDocument>(_v: P0): R;
    currentController<R = cocoa.MSInspectorChildController>(): R;
    setCurrentController<R = void, P0 = cocoa.MSInspectorChildController>(_v: P0): R;
    sharedStyleInspectorVisible<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSInspectorController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSTouchBarDelegateProtocol {
      alloc<R = MSInspectorController>(): R;
      new: <R = MSInspectorController>() => R;
    }
  }
}

declare const MSInspectorController: cocoa.classes.MSInspectorController;
