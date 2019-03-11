/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleStylePartInspectorViewController<T = any> extends cocoa.NSViewController, cocoa.MSReorderingContainerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    updateDisplayedValues<R = void>(): R;
    shouldShowAdvancedOptionsButton<R = boolean>(): R;
    prepareInspector_parts_index<R = void, P0 = unknown, P1 = unknown, P2 = number>(_prepareInspector: P0, _parts: P1, _index: P2): R;
    hasEnabledStyle<R = boolean>(): R;
    stylePartType<R = number>(): R;
    deleteUnusedStylePartsAction<R = void, P0 = unknown>(_deleteUnusedStylePartsAction: P0): R;
    tagFromSender<R = number, P0 = unknown>(_tagFromSender: P0): R;
    duplicateStylePartAction<R = void, P0 = unknown>(_duplicateStylePartAction: P0): R;
    deleteStylePartAction<R = void, P0 = unknown>(_deleteStylePartAction: P0): R;
    addStylePartsForSelection<R = unknown>(): R;
    hasPopOver<R = boolean>(): R;
    lastEnabledStylePartController<R = unknown>(): R;
    addStylePartAction<R = void, P0 = unknown>(_addStylePartAction: P0): R;
    addNewStylePart<R = void>(): R;
    closePopovers<R = void>(): R;
    rotatedStyleParts<R = unknown>(): R;
    validateSpecialButtons<R = void>(): R;
    prepare<R = void>(): R;
    prepareForReuse<R = void>(): R;
    viewForStyleAtOffset_index<R = unknown, P0 = number, P1 = number>(_viewForStyleAtOffset: P0, _index: P1): R;
    styleDidEnableOrDisable<R = void>(): R;
    resizeViewToFit<R = void>(): R;
    inspectorForStyleParts_atIndex<R = unknown, P0 = unknown, P1 = number>(_inspectorForStyleParts: P0, _atIndex: P1): R;
    validateAdvancedOptionsButton<R = void>(): R;
    validateRemoveDisabledStylesButton<R = void>(): R;
    loadViewControllers<R = void>(): R;
    awakeFromNib<R = void>(): R;
    headerButton<R = cocoa.NSButton>(): R;
    setHeaderButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    showAdvancedOptionsButton<R = cocoa.NSButton>(): R;
    setShowAdvancedOptionsButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    removeDisabledStylesButton<R = cocoa.NSButton>(): R;
    setRemoveDisabledStylesButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    nameView<R = cocoa.NSView>(): R;
    setNameView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    nameFieldShadow<R = cocoa.NSTextField>(): R;
    setNameFieldShadow<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    nameField<R = cocoa.NSTextField>(): R;
    setNameField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    reorderingContainer<R = cocoa.MSReorderingContainerView>(): R;
    setReorderingContainer<R = void, P0 = cocoa.MSReorderingContainerView>(_v: P0): R;
    delegate<R = cocoa.MSStylePartInspectorDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSStylePartInspectorDelegate>(_v: P0): R;
    stylePartViewControllers<R = cocoa.NSArray>(): R;
    setStylePartViewControllers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    layers<R = cocoa.NSArray>(): R;
    setLayers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSMultipleStylePartInspectorViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.MSReorderingContainerDelegateProtocol {
      alloc<R = MSMultipleStylePartInspectorViewController>(): R;
      new: <R = MSMultipleStylePartInspectorViewController>() => R;
    }
  }
}

declare const MSMultipleStylePartInspectorViewController: cocoa.classes.MSMultipleStylePartInspectorViewController;
