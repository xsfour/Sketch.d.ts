/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLocalDataSupplier<T = any> extends MSDataSupplier {
    respondToContentChanged<R = void>(): R;
    shuffleArray_truncateToLength<R = unknown, P0 = unknown, P1 = number>(_shuffleArray: P0, _truncateToLength: P1): R;
    shuffledArrayWithCount_fromArray<R = unknown, P0 = number, P1 = unknown>(_shuffledArrayWithCount: P0, _fromArray: P1): R;
    makeTextDataFileSystemMonitor<R = void>(): R;
    makeImageDataFileSystemMonitor<R = void>(): R;
    makeFolderMonitor<R = void>(): R;
    generateDataForCount_dataApplier<R = void, P0 = number, P1 = CDUnknownBlockType>(_generateDataForCount: P0, _dataApplier: P1): R;
    valid<R = boolean>(): R;
    initWithFileSystemURL_isBuiltin<R = unknown, P0 = unknown, P1 = boolean>(_initWithFileSystemURL: P0, _isBuiltin: P1): R;
    data<R = NSArray>(): R;
    setData<R = void, P0 = NSArray>(_v: P0): R;
    folderMonitor<R = MSFolderMonitor>(): R;
    setFolderMonitor<R = void, P0 = MSFolderMonitor>(_v: P0): R;
    dataSource<R = NSURL>(): R;
    isBuiltin<R = boolean>(): R;
  }
  namespace classes {
    export interface MSLocalDataSupplier<T = any> extends MSDataSupplier {
      alloc<R = MSLocalDataSupplier>(): R;
      new: <R = MSLocalDataSupplier>() => R;
      validImageFileUTIs<R = unknown>(): R;
      imageFileNamesFromFolderURL<R = unknown, P0 = unknown>(_imageFileNamesFromFolderURL: P0): R;
      textDataFromFileURL<R = unknown, P0 = unknown>(_textDataFromFileURL: P0): R;
    }
  }
}

declare const MSLocalDataSupplier: cocoa.classes.MSLocalDataSupplier;
