/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHSBColorPicker<T = any> extends NSControl, BCColorPreviewDelegateProtocol, BCMagnifierButtonDelegateProtocol {
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
    ligComponentTextField<R = NSTextField>(): R;
    setLigComponentTextField<R = void, P0 = NSTextField>(_v: P0): R;
    satComponentTextField<R = NSTextField>(): R;
    setSatComponentTextField<R = void, P0 = NSTextField>(_v: P0): R;
    hueComponentTextField<R = NSTextField>(): R;
    setHueComponentTextField<R = void, P0 = NSTextField>(_v: P0): R;
    blueComponentTextField<R = NSTextField>(): R;
    setBlueComponentTextField<R = void, P0 = NSTextField>(_v: P0): R;
    greenComponentTextField<R = NSTextField>(): R;
    setGreenComponentTextField<R = void, P0 = NSTextField>(_v: P0): R;
    redComponentTextField<R = NSTextField>(): R;
    setRedComponentTextField<R = void, P0 = NSTextField>(_v: P0): R;
    magnifierButton<R = BCMagnifierButton>(): R;
    setMagnifierButton<R = void, P0 = BCMagnifierButton>(_v: P0): R;
    colorPreviewView<R = BCColorPreview>(): R;
    setColorPreviewView<R = void, P0 = BCColorPreview>(_v: P0): R;
    aPickerView<R = BCAlphaColorPicker>(): R;
    setAPickerView<R = void, P0 = BCAlphaColorPicker>(_v: P0): R;
    hPickerView<R = BCHueColorPicker>(): R;
    setHPickerView<R = void, P0 = BCHueColorPicker>(_v: P0): R;
    sbPickerView<R = BCSaturationBrightnessColorPicker>(): R;
    setSbPickerView<R = void, P0 = BCSaturationBrightnessColorPicker>(_v: P0): R;
    separatorView<R = MSColorInspectorSeparatorView>(): R;
    setSeparatorView<R = void, P0 = MSColorInspectorSeparatorView>(_v: P0): R;
    alphaComponentTextField<R = NSTextField>(): R;
    setAlphaComponentTextField<R = void, P0 = NSTextField>(_v: P0): R;
    hexValueTextField<R = NSTextField>(): R;
    setHexValueTextField<R = void, P0 = NSTextField>(_v: P0): R;
    delegate<R = BCHSBColorPickerDelegate>(): R;
    setDelegate<R = void, P0 = BCHSBColorPickerDelegate>(_v: P0): R;
    color<R = MSColor>(): R;
    setColor<R = void, P0 = MSColor>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface BCHSBColorPicker<T = any> extends NSControl, BCColorPreviewDelegateProtocol, BCMagnifierButtonDelegateProtocol {
      alloc<R = BCHSBColorPicker>(): R;
      new: <R = BCHSBColorPicker>() => R;
    }
  }
}

declare const BCHSBColorPicker: cocoa.classes.BCHSBColorPicker;
