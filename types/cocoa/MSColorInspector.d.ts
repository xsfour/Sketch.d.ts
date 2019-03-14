/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspector<T0 = void, T1 = void, T2 = void> extends NSViewController, MSColorInspectorSectionDelegateProtocol, MSModeModePickerDelegateProtocol, BCPopoverDelegateProtocol, NSTouchBarDelegateProtocol, BCHSBColorPickerDelegateProtocol, MSStylePartPreviewButtonDelegateProtocol {
    cxx_destruct<R = void>(): R;
    touchBarColorAction<R = void, P0 = unknown>(_touchBarColorAction: P0): R;
    customTouchBarItemIdentifiers<R = unknown>(): R;
    adjustInspectorToColorPopoverIfNeeded<R = void, P0 = unknown>(_adjustInspectorToColorPopoverIfNeeded: P0): R;
    colorMagnifierAction<R = void, P0 = unknown>(_colorMagnifierAction: P0): R;
    setColorTabIndex<R = void, P0 = number>(_setColorTabIndex: P0): R;
    colorTabIndex<R = number>(): R;
    switchToColorTabAtIndex<R = void, P0 = number>(_switchToColorTabAtIndex: P0): R;
    reloadTouchBarsAfterSelectionChange<R = void, P0 = unknown>(_reloadTouchBarsAfterSelectionChange: P0): R;
    reloadTouchBars<R = void>(): R;
    refreshTabbingCycle<R = void>(): R;
    filteredStyleParts<R = unknown, P0 = unknown>(_filteredStyleParts: P0): R;
    close<R = void>(): R;
    refreshAction<R = void, P0 = unknown>(_refreshAction: P0): R;
    colorChangedTo<R = void, P0 = unknown>(_colorChangedTo: P0): R;
    colorPickerAction<R = void, P0 = unknown>(_colorPickerAction: P0): R;
    setColor<R = void, P0 = unknown>(_setColor: P0): R;
    changeColor<R = void, P0 = unknown>(_changeColor: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    redo<R = void, P0 = unknown>(_redo: P0): R;
    undo<R = void, P0 = unknown>(_undo: P0): R;
    documentRedoAction<R = unknown>(): R;
    documentUndoAction<R = unknown>(): R;
    setMaximumAvailableHeight<R = void, P0 = number>(_setMaximumAvailableHeight: P0): R;
    validateEnableButtons<R = void>(): R;
    currentSection<R = unknown>(): R;
    colorTypePickerModeForStyle<R = number, P0 = unknown>(_colorTypePickerModeForStyle: P0): R;
    currentColorTypePickerMode<R = number>(): R;
    initialColorTypePickerMode<R = number>(): R;
    stylePartIsGradient<R = boolean, P0 = unknown>(_stylePartIsGradient: P0): R;
    findFrequentColors<R = void>(): R;
    prepareForDisplay<R = void>(): R;
    setInitialColor<R = void, P0 = unknown>(_setInitialColor: P0): R;
    currentModePicker<R = unknown>(): R;
    colorModeViewDidChange<R = void, P0 = unknown>(_colorModeViewDidChange: P0): R;
    initWithSender_document_handlerManager_globalAssets<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithSender: P0, _document: P1, _handlerManager: P2, _globalAssets: P3): R;
    textFieldToContinueEditing<R = NSTextField>(): R;
    setTextFieldToContinueEditing<R = void, P0 = NSTextField>(_v: P0): R;
    stackView<R = MSStackView>(): R;
    setStackView<R = void, P0 = MSStackView>(_v: P0): R;
    displayingDiverseStyles<R = boolean>(): R;
    setDisplayingDiverseStyles<R = void, P0 = boolean>(_v: P0): R;
    globalAssets<R = MSPersistentAssetCollection>(): R;
    setGlobalAssets<R = void, P0 = MSPersistentAssetCollection>(_v: P0): R;
    document<R = MSDocument>(): R;
    setDocument<R = void, P0 = MSDocument>(_v: P0): R;
    eventHandlerManager<R = MSEventHandlerManager>(): R;
    setEventHandlerManager<R = void, P0 = MSEventHandlerManager>(_v: P0): R;
    noiseSection<R = MSColorInspectorSectionNoise>(): R;
    setNoiseSection<R = void, P0 = MSColorInspectorSectionNoise>(_v: P0): R;
    patternSection<R = MSColorInspectorSectionPattern>(): R;
    setPatternSection<R = void, P0 = MSColorInspectorSectionPattern>(_v: P0): R;
    gradientSection<R = MSColorInspectorSectionGradient>(): R;
    setGradientSection<R = void, P0 = MSColorInspectorSectionGradient>(_v: P0): R;
    colorSection<R = MSColorInspectorSectionColor>(): R;
    setColorSection<R = void, P0 = MSColorInspectorSectionColor>(_v: P0): R;
    borderBlendingOpacityView<R = NSView>(): R;
    setBorderBlendingOpacityView<R = void, P0 = NSView>(_v: P0): R;
    shadowBlendingView<R = NSView>(): R;
    setShadowBlendingView<R = void, P0 = NSView>(_v: P0): R;
    colorPickerView<R = NSView>(): R;
    setColorPickerView<R = void, P0 = NSView>(_v: P0): R;
    emptyTopView<R = NSView>(): R;
    setEmptyTopView<R = void, P0 = NSView>(_v: P0): R;
    colorPicker<R = BCHSBColorPicker>(): R;
    setColorPicker<R = void, P0 = BCHSBColorPicker>(_v: P0): R;
    fillColorTypePicker<R = MSModePickerView>(): R;
    setFillColorTypePicker<R = void, P0 = MSModePickerView>(_v: P0): R;
    borderColorTypePicker<R = MSModePickerView>(): R;
    setBorderColorTypePicker<R = void, P0 = MSModePickerView>(_v: P0): R;
    hsbFieldsView<R = MSAlternatingView>(): R;
    setHsbFieldsView<R = void, P0 = MSAlternatingView>(_v: P0): R;
    rgbFieldsView<R = MSAlternatingView>(): R;
    setRgbFieldsView<R = void, P0 = MSAlternatingView>(_v: P0): R;
    delegate<R = MSColorInspectorDelegate>(): R;
    setDelegate<R = void, P0 = MSColorInspectorDelegate>(_v: P0): R;
    styleParts<R = NSArray>(): R;
    setStyleParts<R = void, P0 = NSArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSColorInspector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, MSColorInspectorSectionDelegateProtocol, MSModeModePickerDelegateProtocol, BCPopoverDelegateProtocol, NSTouchBarDelegateProtocol, BCHSBColorPickerDelegateProtocol, MSStylePartPreviewButtonDelegateProtocol {
      alloc<R = MSColorInspector>(): R;
      new: <R = MSColorInspector>() => R;
      presentColorInspectorPopoverForViewController_document_globalAssets_relativeToView_colorInspectorSetupHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = CDUnknownBlockType>(_presentColorInspectorPopoverForViewController: P0, _document: P1, _globalAssets: P2, _relativeToView: P3, _colorInspectorSetupHandler: P4): R;
      presentColorInspectorPopoverForViewController_inspectorController_relativeToView_colorInspectorSetupHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_presentColorInspectorPopoverForViewController: P0, _inspectorController: P1, _relativeToView: P2, _colorInspectorSetupHandler: P3): R;
    }
  }
}

declare const MSColorInspector: cocoa.MSColorInspector.CLASS;
