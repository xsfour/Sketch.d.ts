/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCOutlineViewNodeProtocol<T = any> extends cocoa.NSObjectProtocol {
    badgeMenuConfigurator<R = cocoa.BCOutlineViewPopupConfigurator>(): R;
    maskIconWithState<R = cocoa.NSImage, P0 = number>(_maskIconWithState: P0): R;
    previewIconWithState<R = cocoa.NSImage, P0 = number>(_previewIconWithState: P0): R;
    isExpanded<R = boolean>(): R;
    badgeImages<R = cocoa.MSTintedImages>(): R;
    hasBadgedIcon<R = boolean>(): R;
    isEditableInLayerList<R = boolean>(): R;
    isActive<R = boolean>(): R;
    nodeName<R = cocoa.NSString>(): R;
    setNodeName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    filterTypeMask<R = number>(): R;
    displayType<R = number>(): R;
  }
  namespace classes {
    export interface BCOutlineViewNodeProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const BCOutlineViewNodeProtocol: cocoa.classes.BCOutlineViewNodeProtocol;
