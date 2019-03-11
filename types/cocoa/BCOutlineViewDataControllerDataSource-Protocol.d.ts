/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCOutlineViewDataControllerDataSourceProtocol<T = any> extends cocoa.NSObjectProtocol {
    rootObject<R = unknown>(): R;
    dataController_childrenOfNode<R = cocoa.NSArray, P0 = cocoa.BCOutlineViewDataController, P1 = unknown>(_dataController: P0, _childrenOfNode: P1): R;
  }
  namespace classes {
    export interface BCOutlineViewDataControllerDataSourceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const BCOutlineViewDataControllerDataSourceProtocol: cocoa.classes.BCOutlineViewDataControllerDataSourceProtocol;
