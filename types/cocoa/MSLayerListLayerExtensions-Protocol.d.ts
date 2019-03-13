/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerListLayerExtensionsProtocol<T = any> extends BCOutlineViewNodeProtocol {
    childrenForLayerList<R = NSArray>(): R;
    updateLayerListPreviewIfRequiredWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_updateLayerListPreviewIfRequiredWithCompletionHandler: P0): R;
    handleBadgeClickWithAltState<R = void, P0 = boolean>(_handleBadgeClickWithAltState: P0): R;
    addMastersForInstancesToDocument<R = void, P0 = NSArray>(_addMastersForInstancesToDocument: P0): R;
    moveToLayer_beforeLayer<R = void, P0 = MSLayer, P1 = MSLayer>(_moveToLayer: P0, _beforeLayer: P1): R;
    canCopyToLayer_beforeLayer<R = boolean, P0 = MSLayer, P1 = MSLayer>(_canCopyToLayer: P0, _beforeLayer: P1): R;
    canMoveToLayer_beforeLayer<R = boolean, P0 = MSLayer, P1 = MSLayer>(_canMoveToLayer: P0, _beforeLayer: P1): R;
    layerListExpandedType<R = number>(): R;
    setLayerListExpandedType<R = void, P0 = number>(_v: P0): R;
    previewShouldIndicateSharedStyle<R = boolean>(): R;
    isExportableViaDragAndDrop<R = boolean>(): R;
    lockedOnCanvas<R = boolean>(): R;
    containedByHiddenAncestorNode<R = boolean>(): R;
    hiddenOnCanvas<R = boolean>(): R;
    selectedInLayerList<R = boolean>(): R;
    expandableInLayerList<R = boolean>(): R;
  }
  namespace classes {
    export interface MSLayerListLayerExtensionsProtocol<T = any> extends BCOutlineViewNodeProtocol {  }
  }
}
