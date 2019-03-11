/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SUAppcastItem<T = any> {
    // + SUAppcastItem(MSAssetLibraryUpdater):
    downloadFileSize<R = number>(): R;
  }
  namespace classes {
    export interface SUAppcastItem<T = any> {
      // + SUAppcastItem(MSAssetLibraryUpdater):
      
    }
  }
}

declare const SUAppcastItem: cocoa.classes.SUAppcastItem;
