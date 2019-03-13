/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCOutlineViewDataControllerDataSourceProtocol<T = any> extends NSObjectProtocol {
    rootObject<R = unknown>(): R;
    dataController_childrenOfNode<R = NSArray, P0 = BCOutlineViewDataController, P1 = unknown>(_dataController: P0, _childrenOfNode: P1): R;
  }
  namespace classes {
    export interface BCOutlineViewDataControllerDataSourceProtocol<T = any> extends NSObjectProtocol {  }
  }
}
