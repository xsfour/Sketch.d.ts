/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuItemProtocol<T = any> extends cocoa.NSObjectProtocol, cocoa.NSCopyingProtocol, cocoa.NSCodingProtocol, cocoa.NSValidatedUserInterfaceItemProtocol {
    toolTip<R = cocoa.NSString>(): R;
    setToolTip<R = void, P0 = cocoa.NSString>(_setToolTip: P0): R;
    representedObject<R = unknown>(): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    tag<R = number>(): R;
    setTag<R = void, P0 = number>(_setTag: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_setAction: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_setTarget: P0): R;
    indentationLevel<R = number>(): R;
    setIndentationLevel<R = void, P0 = number>(_setIndentationLevel: P0): R;
    isAlternate<R = boolean>(): R;
    setAlternate<R = void, P0 = boolean>(_setAlternate: P0): R;
    isEnabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    mixedStateImage<R = cocoa.NSImage>(): R;
    setMixedStateImage<R = void, P0 = cocoa.NSImage>(_setMixedStateImage: P0): R;
    offStateImage<R = cocoa.NSImage>(): R;
    setOffStateImage<R = void, P0 = cocoa.NSImage>(_setOffStateImage: P0): R;
    onStateImage<R = cocoa.NSImage>(): R;
    setOnStateImage<R = void, P0 = cocoa.NSImage>(_setOnStateImage: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_setState: P0): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_setImage: P0): R;
    setTitleWithMnemonic<R = void, P0 = cocoa.NSString>(_setTitleWithMnemonic: P0): R;
    mnemonic<R = cocoa.NSString>(): R;
    mnemonicLocation<R = number>(): R;
    setMnemonicLocation<R = void, P0 = number>(_setMnemonicLocation: P0): R;
    userKeyEquivalentModifierMask<R = number>(): R;
    userKeyEquivalent<R = cocoa.NSString>(): R;
    keyEquivalentModifierMask<R = number>(): R;
    setKeyEquivalentModifierMask<R = void, P0 = number>(_setKeyEquivalentModifierMask: P0): R;
    keyEquivalent<R = cocoa.NSString>(): R;
    setKeyEquivalent<R = void, P0 = cocoa.NSString>(_setKeyEquivalent: P0): R;
    isSeparatorItem<R = boolean>(): R;
    attributedTitle<R = cocoa.NSAttributedString>(): R;
    setAttributedTitle<R = void, P0 = cocoa.NSAttributedString>(_setAttributedTitle: P0): R;
    title<R = cocoa.NSString>(): R;
    setTitle<R = void, P0 = cocoa.NSString>(_setTitle: P0): R;
    submenu<R = cocoa.NSMenu>(): R;
    setSubmenu<R = void, P0 = cocoa.NSMenu>(_setSubmenu: P0): R;
    hasSubmenu<R = boolean>(): R;
    menu<R = cocoa.NSMenu>(): R;
    setMenu<R = void, P0 = cocoa.NSMenu>(_setMenu: P0): R;
    initWithTitle_action_keyEquivalent<R = unknown, P0 = cocoa.NSString, P1 = string, P2 = cocoa.NSString>(_initWithTitle: P0, _action: P1, _keyEquivalent: P2): R;
  }
  namespace classes {
    export interface NSMenuItemProtocol<T = any> extends cocoa.classes.NSObjectProtocol, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSCodingProtocol, cocoa.classes.NSValidatedUserInterfaceItemProtocol {
      separatorItem<R = cocoa.NSMenuItem>(): R;
      usesUserKeyEquivalents<R = boolean>(): R;
      setUsesUserKeyEquivalents<R = void, P0 = boolean>(_setUsesUserKeyEquivalents: P0): R;
    }
  }
}

declare const NSMenuItemProtocol: cocoa.classes.NSMenuItemProtocol;
