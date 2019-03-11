/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFontOptionsAttributeDescriptor<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithName_allowedClass<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _allowedClass: P1): R;
    allowedClass<R = unknown>(): R;
    name<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSFontOptionsAttributeDescriptor<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSFontOptionsAttributeDescriptor>(): R;
      new: <R = NSFontOptionsAttributeDescriptor>() => R;
      attributeDescriptorWithName_allowedClass<R = unknown, P0 = unknown, P1 = unknown>(_attributeDescriptorWithName: P0, _allowedClass: P1): R;
    }
  }
}

declare const NSFontOptionsAttributeDescriptor: cocoa.classes.NSFontOptionsAttributeDescriptor;
