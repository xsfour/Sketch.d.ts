/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CAKeyframeAnimation<T = any> {
    // + CAKeyframeAnimation(NSInternal):
    NS_transformValuesAtKeyPath_usingBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_NS_transformValuesAtKeyPath: P0, _usingBlock: P1): R;
  }
  namespace classes {
    export interface CAKeyframeAnimation<T = any> {
      // + CAKeyframeAnimation(NSInternal):
      
    }
  }
}

declare const CAKeyframeAnimation: cocoa.classes.CAKeyframeAnimation;
