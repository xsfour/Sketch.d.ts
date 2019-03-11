/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSectionDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    touchBar<R = cocoa.NSTouchBar>(): R;
    didRemoveAssetOfType<R = void, P0 = number>(_didRemoveAssetOfType: P0): R;
    didAddAsset<R = void, P0 = cocoa.MSAsset>(_didAddAsset: P0): R;
    stack<R = void>(): R;
    eventHandlerManager<R = cocoa.MSEventHandlerManager>(): R;
    globalAssets<R = cocoa.MSPersistentAssetCollection>(): R;
    documentAssets<R = cocoa.MSAssetCollection>(): R;
    inspectorSectionDidUpdate<R = void, P0 = cocoa.MSColorInspectorSectionPattern>(_inspectorSectionDidUpdate: P0): R;
    colorDidChangeTo<R = void, P0 = cocoa.MSColor>(_colorDidChangeTo: P0): R;
    document<R = cocoa.MSDocument>(): R;
  }
  namespace classes {
    export interface MSColorInspectorSectionDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSColorInspectorSectionDelegateProtocol: cocoa.classes.MSColorInspectorSectionDelegateProtocol;
