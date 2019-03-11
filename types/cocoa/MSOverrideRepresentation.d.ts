/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideRepresentation<T = any> extends cocoa.MSOverrideRepresentationBase, cocoa.BCOutlineViewNodeProtocol, cocoa.MSLayerListLayerExtensionsProtocol, cocoa.MSInterfaceImageOwnerProtocol, cocoa.MSHoverableItemProtocol {
    updateExpandedStateAfterSelection<R = void>(): R;
    transformForConvertingToInstance<R = unknown>(): R;
    calculateTransformAndPath<R = void>(): R;
    dealloc<R = void>(): R;
    initWithParent<R = unknown, P0 = unknown>(_initWithParent: P0): R;
    overrideRepresentation<R = unknown>(): R;
    placeholderIdentifier<R = unknown>(): R;
    overrideViewControllerHeightWithLayers_shouldShowLabel_indentationLevel<R = number, P0 = unknown, P1 = boolean, P2 = number>(_overrideViewControllerHeightWithLayers: P0, _shouldShowLabel: P1, _indentationLevel: P2): R;
    createOverrideViewController<R = unknown>(): R;
    hasHighlight<R = boolean>(): R;
    hudDescription<R = unknown>(): R;
    selectionHitTest<R = unknown, P0 = cocoa.CGPoint>(_selectionHitTest: P0): R;
    layerListExpandedType<R = number>(): R;
    setLayerListExpandedType<R = void, P0 = number>(_v: P0): R;
    previousSibling<R = cocoa.MSOverrideRepresentation>(): R;
    setPreviousSibling<R = void, P0 = cocoa.MSOverrideRepresentation>(_v: P0): R;
    parent<R = cocoa.MSOverrideRepresentationBase>(): R;
    availableOverride<R = cocoa.MSAvailableOverride>(): R;
    setAvailableOverride<R = void, P0 = cocoa.MSAvailableOverride>(_v: P0): R;
    description<R = cocoa.NSString>(): R;
    pathInInstance<R = cocoa.CGPath>(): R;
    setPathInInstance<R = void, P0 = cocoa.CGPath>(_v: P0): R;
    modifiedParentMaster<R = cocoa.MSImmutableSymbolMaster>(): R;
    isEditable<R = boolean>(): R;
    isAtRootLevel<R = boolean>(): R;
    selectionID<R = cocoa.NSString>(): R;
    previewShouldIndicateSharedStyle<R = boolean>(): R;
    isExportableViaDragAndDrop<R = boolean>(): R;
    containedByHiddenAncestorNode<R = boolean>(): R;
    lockedOnCanvas<R = boolean>(): R;
    hiddenOnCanvas<R = boolean>(): R;
    selectedInLayerList<R = boolean>(): R;
    expandableInLayerList<R = boolean>(): R;
    badgeImages<R = cocoa.MSTintedImages>(): R;
    hasBadgedIcon<R = boolean>(): R;
    isEditableInLayerList<R = boolean>(): R;
    isActive<R = boolean>(): R;
    nodeName<R = cocoa.NSString>(): R;
    setNodeName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    filterTypeMask<R = number>(): R;
    displayType<R = number>(): R;
    interfaceImageIdentifier<R = cocoa.NSString>(): R;
    cacheOwner<R = unknown>(): R;
    hoveredLayer<R = cocoa.MSLayer>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    isExpanded<R = boolean>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSOverrideRepresentation<T = any> extends cocoa.classes.MSOverrideRepresentationBase, cocoa.classes.BCOutlineViewNodeProtocol, cocoa.classes.MSLayerListLayerExtensionsProtocol, cocoa.classes.MSInterfaceImageOwnerProtocol, cocoa.classes.MSHoverableItemProtocol {
      alloc<R = MSOverrideRepresentation>(): R;
      new: <R = MSOverrideRepresentation>() => R;
    }
  }
}

declare const MSOverrideRepresentation: cocoa.classes.MSOverrideRepresentation;
