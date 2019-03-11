/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserInterfaceCompressionProtocol<T = any> {
    minimumSizeWithPrioritizedCompressionOptions<R = cocoa.CGSize, P0 = cocoa.NSArray>(_minimumSizeWithPrioritizedCompressionOptions: P0): R;
    compressWithPrioritizedCompressionOptions<R = void, P0 = cocoa.NSArray>(_compressWithPrioritizedCompressionOptions: P0): R;
    activeCompressionOptions<R = cocoa.NSUserInterfaceCompressionOptions>(): R;
  }
  namespace classes {
    export interface NSUserInterfaceCompressionProtocol<T = any> {  }
  }
}

declare const NSUserInterfaceCompressionProtocol: cocoa.classes.NSUserInterfaceCompressionProtocol;
