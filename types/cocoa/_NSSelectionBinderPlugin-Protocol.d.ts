/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSelectionBinderPluginProtocol<T = any> extends NSObjectProtocol, _NSValueBinderPluginProtocol {
    shouldRefreshDisplayAfterSelectionMechanismWasDismissed<R = boolean, P0 = unknown>(_shouldRefreshDisplayAfterSelectionMechanismWasDismissed: P0): R;
    storeModeWhenIgnoringObjectPopulation<R = void, P0 = __NSKeyValueCodingControllerModeType>(_storeModeWhenIgnoringObjectPopulation: P0): R;
    canIgnorePopulatingObject<R = boolean, P0 = unknown>(_canIgnorePopulatingObject: P0): R;
    populateObject_withContent_valueKey_objectKey_insertsNullPlaceholder<R = void, P0 = unknown, P1 = NSArray, P2 = NSString, P3 = NSString, P4 = boolean>(_populateObject: P0, _withContent: P1, _valueKey: P2, _objectKey: P3, _insertsNullPlaceholder: P4): R;
    canMixDynamicAndStaticContent<R = boolean>(): R;
    canPopulateWithPlaceholders<R = boolean>(): R;
    allowedContentBindingMask<R = number>(): R;
  }
  namespace classes {
    export interface _NSSelectionBinderPluginProtocol<T = any> extends NSObjectProtocol, _NSValueBinderPluginProtocol {  }
  }
}
