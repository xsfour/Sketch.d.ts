/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserInterfaceCompressionProtocol<T = any> {
    minimumSizeWithPrioritizedCompressionOptions<R = CGSize, P0 = NSArray>(_minimumSizeWithPrioritizedCompressionOptions: P0): R;
    compressWithPrioritizedCompressionOptions<R = void, P0 = NSArray>(_compressWithPrioritizedCompressionOptions: P0): R;
    activeCompressionOptions<R = NSUserInterfaceCompressionOptions>(): R;
  }
  namespace classes {
    export interface NSUserInterfaceCompressionProtocol<T = any> {  }
  }
}
