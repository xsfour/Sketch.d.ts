/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputAlignmentMatchProtocol<T = any> extends NSObjectProtocol {
    alignmentGuide<R = NSInputAlignmentGuide>(): R;
    itemRepresentativeGuide<R = NSInputAlignmentGuide>(): R;
    item<R = NSInputAlignmentItem>(): R;
  }
  namespace classes {
    export interface NSInputAlignmentMatchProtocol<T = any> extends NSObjectProtocol {  }
  }
}
