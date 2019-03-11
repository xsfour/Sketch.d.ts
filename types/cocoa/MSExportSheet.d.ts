/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportSheet<T = any> extends cocoa.CHSheetController {
    toggleItemSelectedForExportState<R = void, P0 = unknown>(_toggleItemSelectedForExportState: P0): R;
    isItemSelectedForExport<R = boolean, P0 = unknown>(_isItemSelectedForExport: P0): R;
    document<R = unknown>(): R;
    collectionView_newItemForRepresentedObject<R = unknown, P0 = unknown, P1 = unknown>(_collectionView: P0, _newItemForRepresentedObject: P1): R;
    resizeWindowToFit<R = void>(): R;
    includeAllCheckboxAction<R = void, P0 = unknown>(_includeAllCheckboxAction: P0): R;
    updateExportSheetItems<R = void, P0 = boolean>(_updateExportSheetItems: P0): R;
    validateIncludeAllSlicesCheckBox<R = void>(): R;
    findConflictingNamesInSlices<R = void, P0 = unknown>(_findConflictingNamesInSlices: P0): R;
    awakeFromNib<R = void>(): R;
    warningSliceIDs<R = cocoa.NSSet>(): R;
    setWarningSliceIDs<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    slices<R = cocoa.NSArray>(): R;
    setSlices<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    selectedSlices<R = cocoa.NSMutableArray>(): R;
    setSelectedSlices<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    exportButton<R = cocoa.NSButton>(): R;
    setExportButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    includeAllSlicesCheckBox<R = cocoa.NSButton>(): R;
    setIncludeAllSlicesCheckBox<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    collectionView<R = cocoa.NSCollectionView>(): R;
    setCollectionView<R = void, P0 = cocoa.NSCollectionView>(_v: P0): R;
    slicesCheckBoxState<R = number>(): R;
  }
  namespace classes {
    export interface MSExportSheet<T = any> extends cocoa.classes.CHSheetController {
      alloc<R = MSExportSheet>(): R;
      new: <R = MSExportSheet>() => R;
    }
  }
}

declare const MSExportSheet: cocoa.classes.MSExportSheet;
