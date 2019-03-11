/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModelObjectCommon<T = any> extends cocoa.NSObject, cocoa.MSModelObjectCommonProtocol {
    cxx_destruct<R = void>(): R;
    propertiesAreEqual<R = boolean, P0 = unknown>(_propertiesAreEqual: P0): R;
    traits<R = number>(): R;
    primitiveObjectID<R = unknown>(): R;
    hasObjectID<R = boolean>(): R;
    recursivelyGenerateObjectID<R = unknown>(): R;
    generateObjectID<R = unknown>(): R;
    enumerateDescendants_withAncestors<R = void, P0 = cocoa.CDUnknownBlockType, P1 = unknown>(_enumerateDescendants: P0, _withAncestors: P1): R;
    enumerateDescendants<R = void, P0 = cocoa.CDUnknownBlockType>(_enumerateDescendants: P0): R;
    enumerateChildProperties<R = void, P0 = cocoa.CDUnknownBlockType>(_enumerateChildProperties: P0): R;
    enumerateProperties<R = void, P0 = cocoa.CDUnknownBlockType>(_enumerateProperties: P0): R;
    setNilValueForKey<R = void, P0 = unknown>(_setNilValueForKey: P0): R;
    defaultName<R = unknown>(): R;
    objectDidInit<R = void>(): R;
    initializeUnsetObjectPropertiesWithDefaults<R = void>(): R;
    performInitEmptyObject<R = void>(): R;
    initWithMinimalSetup<R = unknown>(): R;
    initWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_initWithBlock: P0): R;
    treeAsDictionary<R = unknown>(): R;
    simpleTreeStructure<R = unknown>(): R;
    treeStructure<R = unknown>(): R;
    appendTreeStructureToString_withIndent<R = void, P0 = unknown, P1 = number>(_appendTreeStructureToString: P0, _withIndent: P1): R;
    appendSimpleStructureToString_withIndent<R = void, P0 = unknown, P1 = number>(_appendSimpleStructureToString: P0, _withIndent: P1): R;
    isContainedByInstanceOfForeignSymbol<R = boolean, P0 = unknown>(_isContainedByInstanceOfForeignSymbol: P0): R;
    hasModelObjectCacheGeneration<R = boolean>(): R;
    modelObjectCacheGeneration<R = cocoa.MSModelObjectCacheGeneration>(): R;
    objectID<R = cocoa.NSString>(): R;
    setObjectID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    description<R = cocoa.NSString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSModelObjectCommon<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSModelObjectCommonProtocol {
      alloc<R = MSModelObjectCommon>(): R;
      new: <R = MSModelObjectCommon>() => R;
    }
  }
}

declare const MSModelObjectCommon: cocoa.classes.MSModelObjectCommon;
