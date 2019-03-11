/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentImporter<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    showProgressSheet<R = unknown>(): R;
    importerDidFinish<R = void>(): R;
    close<R = void>(): R;
    collapseSinglePage<R = void>(): R;
    expandPages<R = boolean>(): R;
    run<R = void>(): R;
    addedLayers<R = cocoa.NSArray>(): R;
    setAddedLayers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    sheet<R = cocoa.CHProgressSheet>(): R;
    setSheet<R = void, P0 = cocoa.CHProgressSheet>(_v: P0): R;
    fileURL<R = cocoa.NSURL>(): R;
    setFileURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    importer<R = cocoa.MSImporter>(): R;
    setImporter<R = void, P0 = cocoa.MSImporter>(_v: P0): R;
    group<R = cocoa.MSLayerGroup>(): R;
    setGroup<R = void, P0 = cocoa.MSLayerGroup>(_v: P0): R;
    view<R = cocoa.MSContentDrawView>(): R;
  }
  namespace classes {
    export interface MSDocumentImporter<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSDocumentImporter>(): R;
      new: <R = MSDocumentImporter>() => R;
      importFromURL_inPage_importer<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_importFromURL: P0, _inPage: P1, _importer: P2): R;
    }
  }
}

declare const MSDocumentImporter: cocoa.classes.MSDocumentImporter;
