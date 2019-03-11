/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CAPropertyAnimation<T = any> {
    // + CAPropertyAnimation(NSInternal):
    NS_addAffectedKeyPaths<R = void, P0 = unknown>(_NS_addAffectedKeyPaths: P0): R;
    NS_renameKeyPathsUsingBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_NS_renameKeyPathsUsingBlock: P0): R;
    NS_renameKeyPath_toKeyPath<R = void, P0 = unknown, P1 = unknown>(_NS_renameKeyPath: P0, _toKeyPath: P1): R;
  }
  namespace classes {
    export interface CAPropertyAnimation<T = any> {
      // + CAPropertyAnimation(NSInternal):
      
    }
  }
}

declare const CAPropertyAnimation: cocoa.classes.CAPropertyAnimation;
