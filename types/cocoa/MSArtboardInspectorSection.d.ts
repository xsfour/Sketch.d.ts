/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardInspectorSection<T = any> extends cocoa.MSBaseInspectorSection {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    colorEnabled<R = boolean>(): R;
    setColorEnabled<R = void, P0 = boolean>(_v: P0): R;
    layersController<R = cocoa.NSArrayController>(): R;
    setLayersController<R = void, P0 = cocoa.NSArrayController>(_v: P0): R;
    paddingItem<R = cocoa.MSPaddingInspectorItem>(): R;
    setPaddingItem<R = void, P0 = cocoa.MSPaddingInspectorItem>(_v: P0): R;
    includeInInstancesItem<R = cocoa.MSIncludeBackgroundColorInInstancesInspectorItem>(): R;
    setIncludeInInstancesItem<R = void, P0 = cocoa.MSIncludeBackgroundColorInInstancesInspectorItem>(_v: P0): R;
    includeInExportItem<R = cocoa.MSIncludeBackgroundColorInExportInspectorItem>(): R;
    setIncludeInExportItem<R = void, P0 = cocoa.MSIncludeBackgroundColorInExportInspectorItem>(_v: P0): R;
    colorItem<R = cocoa.MSArtboardBackgroundColorInspectorItem>(): R;
    setColorItem<R = void, P0 = cocoa.MSArtboardBackgroundColorInspectorItem>(_v: P0): R;
    resizeItem<R = cocoa.MSArtboardContentResizeInspectorItem>(): R;
    setResizeItem<R = void, P0 = cocoa.MSArtboardContentResizeInspectorItem>(_v: P0): R;
  }
  namespace classes {
    export interface MSArtboardInspectorSection<T = any> extends cocoa.classes.MSBaseInspectorSection {
      alloc<R = MSArtboardInspectorSection>(): R;
      new: <R = MSArtboardInspectorSection>() => R;
    }
  }
}

declare const MSArtboardInspectorSection: cocoa.classes.MSArtboardInspectorSection;
