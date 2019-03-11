/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CATransaction<T = any> {
    // + CATransaction(NSBackground,NSCATransaction,MSDisableAnimation):
    
  }
  namespace classes {
    export interface CATransaction<T = any> {
      // + CATransaction(NSBackground,NSCATransaction,MSDisableAnimation):
      NS_setBackground<R = void, P0 = boolean>(_NS_setBackground: P0): R;
      NS_isBackground<R = boolean>(): R;
      NS_tryAggressiveCommit<R = boolean>(): R;
      NS_setFlushesWithDisplayRefresh<R = void>(): R;
      NS_apply_block<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_NS_apply: P0, _block: P1): R;
      disableAnimationsInBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_disableAnimationsInBlock: P0): R;
    }
  }
}

declare const CATransaction: cocoa.classes.CATransaction;
