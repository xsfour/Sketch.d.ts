/// <reference path="./cocoa/index.d.ts" />

declare namespace cocoa {
  export interface CGPoint {
    /** `float` */
    x: number;
    /** `float` */
    y: number;
  }

  export interface CGSize {
    /** `float` */
    width: number;
    /** `float` */
    height: number;
  }

  export interface CGRect {
    origin: CGPoint;
    size: CGSize;
  }

  /**
   * NOTE: Function `map` is overwritten
   */
  export interface NSArray<T> extends Array<T> {}

  export interface NSString extends String {}

  export interface MSDocument {
    pages(): NSArray<MSPage>;
    selectedLayers(): MSLayerArray;
  }

  export interface MSDocumentData {
    addSymbolMaster(_addSymbolMaster: MSSymbolMaster): void;
    symbolWithID(symbolID: string): MSSymbolMaster;
    allForeignObjects(): NSArray<MSForeignSymbol>;
    allSymbols(): NSArray<MSSymbolMaster>;
    localSymbols(): NSArray<MSSymbolMaster>;
    allArtboards(): NSArray<MSArtboardGroup>;
    layersByObjectID(): NSDictionary<MSLayer>;
    artboardWithID(objectID: NSString): MSArtboardGroup;
    layerWithID(objectID: NSString): MSLayer;
    layerTreeLayoutDidChange<R = void>(): R;
    selectedLayers(): MSLayerArray;
    documentIsEmpty(): boolean;
    nameForNewPage(): NSString;
    symbolsPageOrCreateIfNecessary(): MSPage;
    symbolsPage(): MSPage | null;
    addBlankPage(): MSPage;
    /** Chang current page */
    setCurrentPageIndex(pageIndex: number): void;
    documentData(): this;
    symbolMap(): NSDictionary<MSSymbolMaster>;
    currentPage(): MSPage;
    pages(): NSArray<MSPage>;
  }

  export interface MSLayerGroup {
    layers(): NSArray<MSLayer>;
  }
}

declare const NSUTF8StringEncoding: number;
declare const NSViewWidthSizable: number;
declare const NSViewHeightSizable: number;
declare const NSTitledWindowMask: number;
declare const NSWindowStyleMaskClosable: number;
declare const NSResizableWindowMask: number;
declare const NSBackingStoreBuffered: number;
declare const NSLayoutAttributeHeight: number;
declare const NSLayoutRelationEqual: number;
declare const NSLayoutAttributeTop: any;
declare const NSPasteboardTypeString: unique symbol;
