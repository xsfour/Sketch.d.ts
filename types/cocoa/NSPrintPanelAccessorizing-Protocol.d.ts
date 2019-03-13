/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintPanelAccessorizingProtocol<T = any> {
    localizedSummaryItems<R = NSArray>(): R;
    keyPathsForValuesAffectingPreview<R = NSSet>(): R;
  }
  namespace classes {
    export interface NSPrintPanelAccessorizingProtocol<T = any> {  }
  }
}
