/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataMenuProviderDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    dataMenuProviderDataIdentifier<R = cocoa.NSString, P0 = cocoa.MSDataMenuProvider>(_dataMenuProviderDataIdentifier: P0): R;
    dataMenuProviderRemoveDataRecord<R = void, P0 = cocoa.MSDataMenuProvider>(_dataMenuProviderRemoveDataRecord: P0): R;
    dataMenuProviderRefreshMasterData<R = void, P0 = cocoa.MSDataMenuProvider>(_dataMenuProviderRefreshMasterData: P0): R;
    dataMenuProviderRefreshData<R = void, P0 = cocoa.MSDataMenuProvider>(_dataMenuProviderRefreshData: P0): R;
    dataMenuProvider_didChooseData<R = void, P0 = cocoa.MSDataMenuProvider, P1 = cocoa.MSDataSupplier>(_dataMenuProvider: P0, _didChooseData: P1): R;
    dataMenuProviderIsInspectorPopupMenu<R = boolean, P0 = cocoa.MSDataMenuProvider>(_dataMenuProviderIsInspectorPopupMenu: P0): R;
    dataMenuProviderDataTypeForMenuBuilding<R = number, P0 = cocoa.MSDataMenuProvider>(_dataMenuProviderDataTypeForMenuBuilding: P0): R;
    dataMenuProviderSelectedLayersWithAppliedData<R = cocoa.NSArray, P0 = cocoa.MSDataMenuProvider>(_dataMenuProviderSelectedLayersWithAppliedData: P0): R;
    dataMenuProviderCanRefreshData<R = boolean, P0 = cocoa.MSDataMenuProvider>(_dataMenuProviderCanRefreshData: P0): R;
    dataMenuProviderCanApplyMasterDataToInstances<R = boolean, P0 = cocoa.MSDataMenuProvider>(_dataMenuProviderCanApplyMasterDataToInstances: P0): R;
    dataMenuProvider_canChooseDataOfType<R = boolean, P0 = cocoa.MSDataMenuProvider, P1 = number>(_dataMenuProvider: P0, _canChooseDataOfType: P1): R;
  }
  namespace classes {
    export interface MSDataMenuProviderDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSDataMenuProviderDelegateProtocol: cocoa.classes.MSDataMenuProviderDelegateProtocol;
