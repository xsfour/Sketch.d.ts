/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGImporter<T = any> extends cocoa.NSObject, cocoa.MSImporterProtocol {
    cxx_destruct<R = void>(): R;
    scale_rootGroup<R = void, P0 = number, P1 = unknown>(_scale: P0, _rootGroup: P1): R;
    graph<R = cocoa.SVGElement>(): R;
    setGraph<R = void, P0 = cocoa.SVGElement>(_v: P0): R;
    importer<R = cocoa.SVGImporter>(): R;
    setImporter<R = void, P0 = cocoa.SVGImporter>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSVGImporter<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSImporterProtocol {
      alloc<R = MSSVGImporter>(): R;
      new: <R = MSSVGImporter>() => R;
      svgImporter<R = unknown>(): R;
    }
  }
}

declare const MSSVGImporter: cocoa.classes.MSSVGImporter;
