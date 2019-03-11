/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGeometryInspectorSection<T = any> extends cocoa.MSBaseInspectorSection {
    refreshBindingsOnPath<R = void, P0 = unknown>(_refreshBindingsOnPath: P0): R;
    hasSliceLayer<R = boolean>(): R;
    hasArtboardLayer<R = boolean>(): R;
    hasOnlyImageLayers<R = boolean>(): R;
    hasOnlyArtboardAndSliceLayers<R = boolean>(): R;
    hasOnlySliceLayers<R = boolean>(): R;
    hasOnlyArtboardLayers<R = boolean>(): R;
    hasOnlyLineShapeLayers<R = boolean>(): R;
    insetSeparator<R = boolean>(): R;
    setInsetSeparator<R = void, P0 = boolean>(_v: P0): R;
    imageOriginalSizeItem<R = cocoa.MSBitmapResizeToOriginalItem>(): R;
    setImageOriginalSizeItem<R = void, P0 = cocoa.MSBitmapResizeToOriginalItem>(_v: P0): R;
    paddingItem2<R = cocoa.MSPaddingInspectorItem>(): R;
    setPaddingItem2<R = void, P0 = cocoa.MSPaddingInspectorItem>(_v: P0): R;
    paddingItem1<R = cocoa.MSPaddingInspectorItem>(): R;
    setPaddingItem1<R = void, P0 = cocoa.MSPaddingInspectorItem>(_v: P0): R;
    lineEndItem2<R = cocoa.MSLineEndpointInspectorItem2>(): R;
    setLineEndItem2<R = void, P0 = cocoa.MSLineEndpointInspectorItem2>(_v: P0): R;
    lineEndItem1<R = cocoa.MSLineEndpointInspectorItem1>(): R;
    setLineEndItem1<R = void, P0 = cocoa.MSLineEndpointInspectorItem1>(_v: P0): R;
    lineTransformItem<R = cocoa.MSLineTransformInspectorItem>(): R;
    setLineTransformItem<R = void, P0 = cocoa.MSLineTransformInspectorItem>(_v: P0): R;
    artboardPresetsItem<R = cocoa.MSArtboardPresetInspectorItem>(): R;
    setArtboardPresetsItem<R = void, P0 = cocoa.MSArtboardPresetInspectorItem>(_v: P0): R;
    artboardSizeItem<R = cocoa.MSArtboardSizeInspectorItem>(): R;
    setArtboardSizeItem<R = void, P0 = cocoa.MSArtboardSizeInspectorItem>(_v: P0): R;
    sizeItem<R = cocoa.MSSizeInspectorItem>(): R;
    setSizeItem<R = void, P0 = cocoa.MSSizeInspectorItem>(_v: P0): R;
    artboardPositionItem<R = cocoa.MSArtboardPositionInspectorItem>(): R;
    setArtboardPositionItem<R = void, P0 = cocoa.MSArtboardPositionInspectorItem>(_v: P0): R;
    positionItem<R = cocoa.MSPositionInspectorItem>(): R;
    setPositionItem<R = void, P0 = cocoa.MSPositionInspectorItem>(_v: P0): R;
  }
  namespace classes {
    export interface MSGeometryInspectorSection<T = any> extends cocoa.classes.MSBaseInspectorSection {
      alloc<R = MSGeometryInspectorSection>(): R;
      new: <R = MSGeometryInspectorSection>() => R;
    }
  }
}

declare const MSGeometryInspectorSection: cocoa.classes.MSGeometryInspectorSection;
