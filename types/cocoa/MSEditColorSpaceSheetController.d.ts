/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEditColorSpaceSheetController<T = any> extends cocoa.CHSheetController {
    viewDocumentation<R = void, P0 = unknown>(_viewDocumentation: P0): R;
    disableUI<R = void>(): R;
    showOptionsViewIfAppropriate<R = void>(): R;
    refreshDescription<R = void>(): R;
    validateConfirmButton<R = void>(): R;
    pickChangeLogic<R = void, P0 = unknown>(_pickChangeLogic: P0): R;
    pickColorSpace<R = void, P0 = unknown>(_pickColorSpace: P0): R;
    optionsViewHeight<R = number>(): R;
    optionsViewBottomMargin<R = number>(): R;
    convertDescriptionTextField<R = cocoa.NSTextField>(): R;
    setConvertDescriptionTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    convertButton<R = cocoa.NSButton>(): R;
    setConvertButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    confirmButton<R = cocoa.NSButton>(): R;
    setConfirmButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    descriptionTextField<R = cocoa.NSTextField>(): R;
    setDescriptionTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    colorSpacePopUpButton<R = cocoa.NSPopUpButton>(): R;
    setColorSpacePopUpButton<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    assignDescriptionTextField<R = cocoa.NSTextField>(): R;
    setAssignDescriptionTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    assignButton<R = cocoa.NSButton>(): R;
    setAssignButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    optionsViewBottomMarginConstraint<R = cocoa.NSLayoutConstraint>(): R;
    optionsView<R = cocoa.NSView>(): R;
    selectedColorSpace<R = number>(): R;
    currentColorSpace<R = number>(): R;
    currentDocument<R = cocoa.MSDocument>(): R;
  }
  namespace classes {
    export interface MSEditColorSpaceSheetController<T = any> extends cocoa.classes.CHSheetController {
      alloc<R = MSEditColorSpaceSheetController>(): R;
      new: <R = MSEditColorSpaceSheetController>() => R;
    }
  }
}

declare const MSEditColorSpaceSheetController: cocoa.classes.MSEditColorSpaceSheetController;
