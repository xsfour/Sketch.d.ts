/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CABasicAnimation<T = any> {
    // + CABasicAnimation(NSInternal):
    NS_transformValuesAtKeyPath_usingBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_NS_transformValuesAtKeyPath: P0, _usingBlock: P1): R;
    NS_takeImpliedValuesFromPresentationObject_modelObject<R = void, P0 = unknown, P1 = unknown>(_NS_takeImpliedValuesFromPresentationObject: P0, _modelObject: P1): R;
  }
  namespace classes {
    export interface CABasicAnimation<T = any> {
      // + CABasicAnimation(NSInternal):
      
    }
  }
}

declare const CABasicAnimation: cocoa.classes.CABasicAnimation;
