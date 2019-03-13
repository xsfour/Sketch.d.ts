/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewToolTipOwnerProtocol<T = any> extends NSObjectProtocol {
    view_stringForToolTip_point_userData<R = NSString, P0 = NSView, P1 = number, P2 = CGPoint, P3 = void>(_view: P0, _stringForToolTip: P1, _point: P2, _userData: P3): R;
  }
  namespace classes {
    export interface NSViewToolTipOwnerProtocol<T = any> extends NSObjectProtocol {  }
  }
}
