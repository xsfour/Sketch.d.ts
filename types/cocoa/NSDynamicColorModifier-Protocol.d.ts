/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDynamicColorModifierProtocol<T = any> extends cocoa.NSObjectProtocol, cocoa.NSCopyingProtocol, cocoa.NSCodingProtocol {
    colorByApplyingToColor<R = cocoa.NSColor, P0 = cocoa.NSColor>(_colorByApplyingToColor: P0): R;
  }
  namespace classes {
    export interface NSDynamicColorModifierProtocol<T = any> extends cocoa.classes.NSObjectProtocol, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSCodingProtocol {  }
  }
}

declare const NSDynamicColorModifierProtocol: cocoa.classes.NSDynamicColorModifierProtocol;
