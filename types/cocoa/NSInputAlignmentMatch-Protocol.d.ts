/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputAlignmentMatchProtocol<T = any> extends cocoa.NSObjectProtocol {
    alignmentGuide<R = cocoa.NSInputAlignmentGuide>(): R;
    itemRepresentativeGuide<R = cocoa.NSInputAlignmentGuide>(): R;
    item<R = cocoa.NSInputAlignmentItem>(): R;
  }
  namespace classes {
    export interface NSInputAlignmentMatchProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSInputAlignmentMatchProtocol: cocoa.classes.NSInputAlignmentMatchProtocol;
