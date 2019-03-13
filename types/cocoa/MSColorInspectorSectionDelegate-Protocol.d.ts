/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSectionDelegateProtocol<T = any> extends NSObjectProtocol {
    touchBar<R = NSTouchBar>(): R;
    didRemoveAssetOfType<R = void, P0 = number>(_didRemoveAssetOfType: P0): R;
    didAddAsset<R = void, P0 = MSAsset>(_didAddAsset: P0): R;
    stack<R = void>(): R;
    eventHandlerManager<R = MSEventHandlerManager>(): R;
    globalAssets<R = MSPersistentAssetCollection>(): R;
    documentAssets<R = MSAssetCollection>(): R;
    inspectorSectionDidUpdate<R = void, P0 = MSColorInspectorSectionPattern>(_inspectorSectionDidUpdate: P0): R;
    colorDidChangeTo<R = void, P0 = MSColor>(_colorDidChangeTo: P0): R;
    document<R = MSDocument>(): R;
  }
  namespace classes {
    export interface MSColorInspectorSectionDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
