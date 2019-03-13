/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDynamicColorModifierProtocol<T = any> extends NSObjectProtocol, NSCopyingProtocol, NSCodingProtocol {
    colorByApplyingToColor<R = NSColor, P0 = NSColor>(_colorByApplyingToColor: P0): R;
  }
  namespace classes {
    export interface NSDynamicColorModifierProtocol<T = any> extends NSObjectProtocol, NSCopyingProtocol, NSCodingProtocol {  }
  }
}
