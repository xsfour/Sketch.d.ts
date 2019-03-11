/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOClassDescription<T = any> extends cocoa.NSObject {
    registerClass<R = unknown>(): R;
    addInstanceVariableWithName_typeEncoding<R = boolean, P0 = cocoa.NSString, P1 = cocoa.NSString>(_addInstanceVariableWithName: P0, _typeEncoding: P1): R;
    addClassMethodWithSelector_typeEncoding_block<R = boolean, P0 = string, P1 = cocoa.NSString, P2 = unknown>(_addClassMethodWithSelector: P0, _typeEncoding: P1, _block: P2): R;
    addClassMethodWithSelector_function<R = boolean, P0 = string, P1 = cocoa.MOJavaScriptObject>(_addClassMethodWithSelector: P0, _function: P1): R;
    addInstanceMethodWithSelector_typeEncoding_block<R = boolean, P0 = string, P1 = cocoa.NSString, P2 = unknown>(_addInstanceMethodWithSelector: P0, _typeEncoding: P1, _block: P2): R;
    addInstanceMethodWithSelector_function<R = boolean, P0 = string, P1 = cocoa.MOJavaScriptObject>(_addInstanceMethodWithSelector: P0, _function: P1): R;
    addProperty<R = boolean, P0 = cocoa.MOPropertyDescription>(_addProperty: P0): R;
    addProtocol<R = void, P0 = cocoa.MOProtocolDescription>(_addProtocol: P0): R;
    name<R = cocoa.NSString>(): R;
    descriptedClass<R = unknown>(): R;
    superclass<R = cocoa.MOClassDescription>(): R;
    ancestors<R = cocoa.NSArray>(): R;
    instanceVariables<R = cocoa.NSArray>(): R;
    instanceVariablesWithAncestors<R = cocoa.NSArray>(): R;
    classMethods<R = cocoa.NSArray>(): R;
    classMethodsWithAncestors<R = cocoa.NSArray>(): R;
    instanceMethods<R = cocoa.NSArray>(): R;
    instanceMethodsWithAncestors<R = cocoa.NSArray>(): R;
    properties<R = cocoa.NSArray>(): R;
    propertiesWithAncestors<R = cocoa.NSArray>(): R;
    protocols<R = cocoa.NSArray>(): R;
    protocolsWithAncestors<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MOClassDescription<T = any> extends cocoa.classes.NSObject {
      alloc<R = MOClassDescription>(): R;
      new: <R = MOClassDescription>() => R;
      descriptionForClassWithName<R = cocoa.MOClassDescription, P0 = cocoa.NSString>(_descriptionForClassWithName: P0): R;
      descriptionForClass<R = cocoa.MOClassDescription, P0 = unknown>(_descriptionForClass: P0): R;
      allocateDescriptionForClassWithName_superclass<R = cocoa.MOClassDescription, P0 = cocoa.NSString, P1 = unknown>(_allocateDescriptionForClassWithName: P0, _superclass: P1): R;
    }
  }
}

declare const MOClassDescription: cocoa.classes.MOClassDescription;
