/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintPanelAccessorizingProtocol<T = any> {
    localizedSummaryItems<R = cocoa.NSArray>(): R;
    keyPathsForValuesAffectingPreview<R = cocoa.NSSet>(): R;
  }
  namespace classes {
    export interface NSPrintPanelAccessorizingProtocol<T = any> {  }
  }
}

declare const NSPrintPanelAccessorizingProtocol: cocoa.classes.NSPrintPanelAccessorizingProtocol;
