/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNestedProperty<T = any> extends cocoa.NSKeyValueProperty {
    _keyPathIfAffectedByValueForMemberOfKeys<R = unknown, P0 = unknown>(__keyPathIfAffectedByValueForMemberOfKeys: P0): R;
    _keyPathIfAffectedByValueForKey_exactMatch<R = unknown, P0 = unknown, P1 = string>(__keyPathIfAffectedByValueForKey: P0, _exactMatch: P1): R;
    _isaForAutonotifying<R = unknown>(): R;
    _addDependentValueKey<R = void, P0 = unknown>(__addDependentValueKey: P0): R;
    _givenPropertiesBeingInitialized_getAffectingProperties<R = void, P0 = cocoa.__CFSet, P1 = unknown>(__givenPropertiesBeingInitialized: P0, _getAffectingProperties: P1): R;
    description<R = unknown>(): R;
    _initWithContainerClass_keyPath_firstDotIndex_propertiesBeingInitialized<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = cocoa.__CFSet>(__initWithContainerClass: P0, _keyPath: P1, _firstDotIndex: P2, _propertiesBeingInitialized: P3): R;
  }
  namespace classes {
    export interface NSKeyValueNestedProperty<T = any> extends cocoa.classes.NSKeyValueProperty {
      alloc<R = NSKeyValueNestedProperty>(): R;
      new: <R = NSKeyValueNestedProperty>() => R;
    }
  }
}

declare const NSKeyValueNestedProperty: cocoa.classes.NSKeyValueNestedProperty;
