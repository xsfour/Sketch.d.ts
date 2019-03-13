/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetsCategory<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    initWithDictionaryRepresentation<R = unknown, P0 = unknown>(_initWithDictionaryRepresentation: P0): R;
    initWithName_sections<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _sections: P1): R;
    sections<R = NSArray>(): R;
    name<R = NSString>(): R;
  }
  namespace classes {
    export interface MSArtboardPresetsCategory<T = any> extends NSObject {
      alloc<R = MSArtboardPresetsCategory>(): R;
      new: <R = MSArtboardPresetsCategory>() => R;
      categoriesWithContentsOfURL<R = unknown, P0 = unknown>(_categoriesWithContentsOfURL: P0): R;
    }
  }
}

declare const MSArtboardPresetsCategory: cocoa.classes.MSArtboardPresetsCategory;
