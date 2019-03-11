/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHSBColorPicker<T = any> extends cocoa.NSControl, cocoa.BCColorPreviewDelegateProtocol, cocoa.BCMagnifierButtonDelegateProtocol {
    cxx_destruct<R = void>(): R;
    setFrequentColors<R = void, P0 = unknown>(_setFrequentColors: P0): R;
    frequentColorPicked<R = void, P0 = unknown>(_frequentColorPicked: P0): R;
    hexValueFieldChanged<R = void, P0 = unknown>(_hexValueFieldChanged: P0): R;
    rgbComponentFieldsChanged<R = void, P0 = unknown>(_rgbComponentFieldsChanged: P0): R;
    hslComponentFieldsChanged<R = void, P0 = unknown>(_hslComponentFieldsChanged: P0): R;
    lightDisplayValueForColor<R = number, P0 = unknown>(_lightDisplayValueForColor: P0): R;
    satDisplayValueForColor<R = number, P0 = unknown>(_satDisplayValueForColor: P0): R;
    hueDisplayValueForColor<R = number, P0 = unknown>(_hueDisplayValueForColor: P0): R;
    setMultiTextFieldValues<R = void>(): R;
    setTextFieldValuesWithColor_ignoringFields<R = void, P0 = unknown, P1 = unknown>(_setTextFieldValuesWithColor: P0, _ignoringFields: P1): R;
    setColor_ignoringFields<R = void, P0 = unknown, P1 = unknown>(_setColor: P0, _ignoringFields: P1): R;
    setColor_multipleValues<R = void, P0 = unknown, P1 = boolean>(_setColor: P0, _multipleValues: P1): R;
    flexibleColor<R = unknown>(): R;
    updateColorPreviewView<R = void>(): R;
    saturationBrightnessChanged<R = void, P0 = unknown>(_saturationBrightnessChanged: P0): R;
    alphaChanged<R = void, P0 = unknown>(_alphaChanged: P0): R;
    hueChanged<R = void, P0 = unknown>(_hueChanged: P0): R;
    magnifierAction<R = void, P0 = unknown>(_magnifierAction: P0): R;
    systemColorPanelDidChangeColor<R = void, P0 = unknown>(_systemColorPanelDidChangeColor: P0): R;
    awakeFromNib<R = void>(): R;
    constructSubviews<R = void>(): R;
    setAction<R = void, P0 = string>(_setAction: P0): R;
    setTarget<R = void, P0 = unknown>(_setTarget: P0): R;
    action<R = string>(): R;
    target<R = unknown>(): R;
    bc_action<R = string>(): R;
    setBc_action<R = void, P0 = string>(_v: P0): R;
    bc_target<R = unknown>(): R;
    setBc_target<R = void, P0 = unknown>(_v: P0): R;
    displaysMultipleValues<R = boolean>(): R;
    setDisplaysMultipleValues<R = void, P0 = boolean>(_v: P0): R;
    ligComponentTextField<R = cocoa.NSTextField>(): R;
    setLigComponentTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    satComponentTextField<R = cocoa.NSTextField>(): R;
    setSatComponentTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    hueComponentTextField<R = cocoa.NSTextField>(): R;
    setHueComponentTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    blueComponentTextField<R = cocoa.NSTextField>(): R;
    setBlueComponentTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    greenComponentTextField<R = cocoa.NSTextField>(): R;
    setGreenComponentTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    redComponentTextField<R = cocoa.NSTextField>(): R;
    setRedComponentTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    magnifierButton<R = cocoa.BCMagnifierButton>(): R;
    setMagnifierButton<R = void, P0 = cocoa.BCMagnifierButton>(_v: P0): R;
    colorPreviewView<R = cocoa.BCColorPreview>(): R;
    setColorPreviewView<R = void, P0 = cocoa.BCColorPreview>(_v: P0): R;
    aPickerView<R = cocoa.BCAlphaColorPicker>(): R;
    setAPickerView<R = void, P0 = cocoa.BCAlphaColorPicker>(_v: P0): R;
    hPickerView<R = cocoa.BCHueColorPicker>(): R;
    setHPickerView<R = void, P0 = cocoa.BCHueColorPicker>(_v: P0): R;
    sbPickerView<R = cocoa.BCSaturationBrightnessColorPicker>(): R;
    setSbPickerView<R = void, P0 = cocoa.BCSaturationBrightnessColorPicker>(_v: P0): R;
    separatorView<R = cocoa.MSColorInspectorSeparatorView>(): R;
    setSeparatorView<R = void, P0 = cocoa.MSColorInspectorSeparatorView>(_v: P0): R;
    alphaComponentTextField<R = cocoa.NSTextField>(): R;
    setAlphaComponentTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    hexValueTextField<R = cocoa.NSTextField>(): R;
    setHexValueTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    delegate<R = cocoa.BCHSBColorPickerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.BCHSBColorPickerDelegate>(_v: P0): R;
    color<R = cocoa.MSColor>(): R;
    setColor<R = void, P0 = cocoa.MSColor>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface BCHSBColorPicker<T = any> extends cocoa.classes.NSControl, cocoa.classes.BCColorPreviewDelegateProtocol, cocoa.classes.BCMagnifierButtonDelegateProtocol {
      alloc<R = BCHSBColorPicker>(): R;
      new: <R = BCHSBColorPicker>() => R;
    }
  }
}

declare const BCHSBColorPicker: cocoa.classes.BCHSBColorPicker;
