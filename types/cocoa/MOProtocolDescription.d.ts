/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOProtocolDescription<T = any> extends cocoa.NSObject {
    addClassMethod_required<R = void, P0 = cocoa.MOMethodDescription, P1 = boolean>(_addClassMethod: P0, _required: P1): R;
    addInstanceMethod_required<R = void, P0 = cocoa.MOMethodDescription, P1 = boolean>(_addInstanceMethod: P0, _required: P1): R;
    addProperty_required<R = void, P0 = cocoa.MOPropertyDescription, P1 = boolean>(_addProperty: P0, _required: P1): R;
    addProtocol<R = void, P0 = cocoa.MOProtocolDescription>(_addProtocol: P0): R;
    name<R = cocoa.NSString>(): R;
    requiredClassMethods<R = cocoa.NSArray>(): R;
    optionalClassMethods<R = cocoa.NSArray>(): R;
    requiredInstanceMethods<R = cocoa.NSArray>(): R;
    optionalInstanceMethods<R = cocoa.NSArray>(): R;
    properties<R = cocoa.NSArray>(): R;
    protocols<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MOProtocolDescription<T = any> extends cocoa.classes.NSObject {
      alloc<R = MOProtocolDescription>(): R;
      new: <R = MOProtocolDescription>() => R;
      descriptionForProtocol<R = cocoa.MOProtocolDescription, P0 = cocoa.Protocol>(_descriptionForProtocol: P0): R;
      descriptionForProtocolWithName<R = cocoa.MOProtocolDescription, P0 = cocoa.NSString>(_descriptionForProtocolWithName: P0): R;
      allocateDescriptionForProtocolWithName<R = cocoa.MOProtocolDescription, P0 = cocoa.NSString>(_allocateDescriptionForProtocolWithName: P0): R;
    }
  }
}

declare const MOProtocolDescription: cocoa.classes.MOProtocolDescription;
