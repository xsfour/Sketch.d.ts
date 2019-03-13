/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PDFScanner<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    operatorglyphBoundsWithInfo<R = void, P0 = unknown>(_operatorglyphBoundsWithInfo: P0): R;
    registerOperatorglyphBounds<R = void>(): R;
    operatordeclareGlyphWithInfo<R = void, P0 = unknown>(_operatordeclareGlyphWithInfo: P0): R;
    registerOperatordeclareGlyph<R = void>(): R;
    operatorendTextWithInfo<R = void, P0 = unknown>(_operatorendTextWithInfo: P0): R;
    registerOperatorendText<R = void>(): R;
    operatortextArrayWithInfo<R = void, P0 = unknown>(_operatortextArrayWithInfo: P0): R;
    registerOperatortextArray<R = void>(): R;
    operatortextWithInfo<R = void, P0 = unknown>(_operatortextWithInfo: P0): R;
    registerOperatortext<R = void>(): R;
    operatortextSetMatrixWithInfo<R = void, P0 = unknown>(_operatortextSetMatrixWithInfo: P0): R;
    registerOperatortextSetMatrix<R = void>(): R;
    operatornextLineAndTextWithSpacingWithInfo<R = void, P0 = unknown>(_operatornextLineAndTextWithSpacingWithInfo: P0): R;
    registerOperatornextLineAndTextWithSpacing<R = void>(): R;
    operatornextLineAndTextWithInfo<R = void, P0 = unknown>(_operatornextLineAndTextWithInfo: P0): R;
    registerOperatornextLineAndText<R = void>(): R;
    operatornextLineWithInfo<R = void, P0 = unknown>(_operatornextLineWithInfo: P0): R;
    registerOperatornextLine<R = void>(): R;
    operatortextNextLineSetLeadingWithInfo<R = void, P0 = unknown>(_operatortextNextLineSetLeadingWithInfo: P0): R;
    registerOperatortextNextLineSetLeading<R = void>(): R;
    operatortextNextLineWithInfo<R = void, P0 = unknown>(_operatortextNextLineWithInfo: P0): R;
    registerOperatortextNextLine<R = void>(): R;
    operatortextModeWithInfo<R = void, P0 = unknown>(_operatortextModeWithInfo: P0): R;
    registerOperatortextMode<R = void>(): R;
    operatortextScalingWithInfo<R = void, P0 = unknown>(_operatortextScalingWithInfo: P0): R;
    registerOperatortextScaling<R = void>(): R;
    operatortextRiseWithInfo<R = void, P0 = unknown>(_operatortextRiseWithInfo: P0): R;
    registerOperatortextRise<R = void>(): R;
    operatortextLeadingWithInfo<R = void, P0 = unknown>(_operatortextLeadingWithInfo: P0): R;
    registerOperatortextLeading<R = void>(): R;
    operatortextWordSpacingWithInfo<R = void, P0 = unknown>(_operatortextWordSpacingWithInfo: P0): R;
    registerOperatortextWordSpacing<R = void>(): R;
    operatortextCharacterSpacingWithInfo<R = void, P0 = unknown>(_operatortextCharacterSpacingWithInfo: P0): R;
    registerOperatortextCharacterSpacing<R = void>(): R;
    operatorsetFontWithInfo<R = void, P0 = unknown>(_operatorsetFontWithInfo: P0): R;
    registerOperatorsetFont<R = void>(): R;
    operatorbeginTextWithInfo<R = void, P0 = unknown>(_operatorbeginTextWithInfo: P0): R;
    registerOperatorbeginText<R = void>(): R;
    operatorendImageWithInfo<R = void, P0 = unknown>(_operatorendImageWithInfo: P0): R;
    registerOperatorendImage<R = void>(): R;
    operatorbeginImageWithInfo<R = void, P0 = unknown>(_operatorbeginImageWithInfo: P0): R;
    registerOperatorbeginImage<R = void>(): R;
    operatordefineMarkedContentPointWithInfo<R = void, P0 = unknown>(_operatordefineMarkedContentPointWithInfo: P0): R;
    registerOperatordefineMarkedContentPoint<R = void>(): R;
    operatorendMarkedContentWithInfo<R = void, P0 = unknown>(_operatorendMarkedContentWithInfo: P0): R;
    registerOperatorendMarkedContent<R = void>(): R;
    operatorbeginMarkedContentWithInfo<R = void, P0 = unknown>(_operatorbeginMarkedContentWithInfo: P0): R;
    registerOperatorbeginMarkedContent<R = void>(): R;
    operatorbeginMarkedContentWithPropertyWithInfo<R = void, P0 = unknown>(_operatorbeginMarkedContentWithPropertyWithInfo: P0): R;
    registerOperatorbeginMarkedContentWithProperty<R = void>(): R;
    operatorendCompatibilityWithInfo<R = void, P0 = unknown>(_operatorendCompatibilityWithInfo: P0): R;
    registerOperatorendCompatibility<R = void>(): R;
    operatorbeginCompatibilityWithInfo<R = void, P0 = unknown>(_operatorbeginCompatibilityWithInfo: P0): R;
    registerOperatorbeginCompatibility<R = void>(): R;
    operatorfillWithShadingPatternWithInfo<R = void, P0 = unknown>(_operatorfillWithShadingPatternWithInfo: P0): R;
    registerOperatorfillWithShadingPattern<R = void>(): R;
    operatorfillEvenOddWithInfo<R = void, P0 = unknown>(_operatorfillEvenOddWithInfo: P0): R;
    registerOperatorfillEvenOdd<R = void>(): R;
    operatorfillObsoleteWithInfo<R = void, P0 = unknown>(_operatorfillObsoleteWithInfo: P0): R;
    registerOperatorfillObsolete<R = void>(): R;
    operatorfillWithInfo<R = void, P0 = unknown>(_operatorfillWithInfo: P0): R;
    registerOperatorfill<R = void>(): R;
    operatorfillStrokeEvenOddWithInfo<R = void, P0 = unknown>(_operatorfillStrokeEvenOddWithInfo: P0): R;
    registerOperatorfillStrokeEvenOdd<R = void>(): R;
    operatorfillStrokeWithInfo<R = void, P0 = unknown>(_operatorfillStrokeWithInfo: P0): R;
    registerOperatorfillStroke<R = void>(): R;
    operatorcloseFillStrokeEvenOddWithInfo<R = void, P0 = unknown>(_operatorcloseFillStrokeEvenOddWithInfo: P0): R;
    registerOperatorcloseFillStrokeEvenOdd<R = void>(): R;
    operatorcloseFillStrokeWithInfo<R = void, P0 = unknown>(_operatorcloseFillStrokeWithInfo: P0): R;
    registerOperatorcloseFillStroke<R = void>(): R;
    operatorclipEvenOddWithInfo<R = void, P0 = unknown>(_operatorclipEvenOddWithInfo: P0): R;
    registerOperatorclipEvenOdd<R = void>(): R;
    operatorclipWithInfo<R = void, P0 = unknown>(_operatorclipWithInfo: P0): R;
    registerOperatorclip<R = void>(): R;
    operatorsetFlatnessToleranceWithInfo<R = void, P0 = unknown>(_operatorsetFlatnessToleranceWithInfo: P0): R;
    registerOperatorsetFlatnessTolerance<R = void>(): R;
    operatorsetFillCMYKWithInfo<R = void, P0 = unknown>(_operatorsetFillCMYKWithInfo: P0): R;
    registerOperatorsetFillCMYK<R = void>(): R;
    operatorsetStrokeCMYKWithInfo<R = void, P0 = unknown>(_operatorsetStrokeCMYKWithInfo: P0): R;
    registerOperatorsetStrokeCMYK<R = void>(): R;
    operatorsetFillRGBWithInfo<R = void, P0 = unknown>(_operatorsetFillRGBWithInfo: P0): R;
    registerOperatorsetFillRGB<R = void>(): R;
    operatorsetStrokeRGBWithInfo<R = void, P0 = unknown>(_operatorsetStrokeRGBWithInfo: P0): R;
    registerOperatorsetStrokeRGB<R = void>(): R;
    operatorsetFillColourNameWithInfo<R = void, P0 = unknown>(_operatorsetFillColourNameWithInfo: P0): R;
    registerOperatorsetFillColourName<R = void>(): R;
    operatorsetStrokeColourNameWithInfo<R = void, P0 = unknown>(_operatorsetStrokeColourNameWithInfo: P0): R;
    registerOperatorsetStrokeColourName<R = void>(): R;
    operatorsetFillColourWithInfo<R = void, P0 = unknown>(_operatorsetFillColourWithInfo: P0): R;
    registerOperatorsetFillColour<R = void>(): R;
    operatorsetStrokeColourWithInfo<R = void, P0 = unknown>(_operatorsetStrokeColourWithInfo: P0): R;
    registerOperatorsetStrokeColour<R = void>(): R;
    operatorsetStrokeGreyWithInfo<R = void, P0 = unknown>(_operatorsetStrokeGreyWithInfo: P0): R;
    registerOperatorsetStrokeGrey<R = void>(): R;
    operatorsetFillGreyWithInfo<R = void, P0 = unknown>(_operatorsetFillGreyWithInfo: P0): R;
    registerOperatorsetFillGrey<R = void>(): R;
    operatorsetColourRenderingIntentWithInfo<R = void, P0 = unknown>(_operatorsetColourRenderingIntentWithInfo: P0): R;
    registerOperatorsetColourRenderingIntent<R = void>(): R;
    operatorsetFillColourSpaceWithInfo<R = void, P0 = unknown>(_operatorsetFillColourSpaceWithInfo: P0): R;
    registerOperatorsetFillColourSpace<R = void>(): R;
    operatorsetStrokeColourSpaceWithInfo<R = void, P0 = unknown>(_operatorsetStrokeColourSpaceWithInfo: P0): R;
    registerOperatorsetStrokeColourSpace<R = void>(): R;
    operatorstrokePathWithInfo<R = void, P0 = unknown>(_operatorstrokePathWithInfo: P0): R;
    registerOperatorstrokePath<R = void>(): R;
    operatorcloseAndStrokePathWithInfo<R = void, P0 = unknown>(_operatorcloseAndStrokePathWithInfo: P0): R;
    registerOperatorcloseAndStrokePath<R = void>(): R;
    operatorsetMitreLimitWithInfo<R = void, P0 = unknown>(_operatorsetMitreLimitWithInfo: P0): R;
    registerOperatorsetMitreLimit<R = void>(): R;
    operatorsetLineDashWithInfo<R = void, P0 = unknown>(_operatorsetLineDashWithInfo: P0): R;
    registerOperatorsetLineDash<R = void>(): R;
    operatorsetLineCapWithInfo<R = void, P0 = unknown>(_operatorsetLineCapWithInfo: P0): R;
    registerOperatorsetLineCap<R = void>(): R;
    operatorsetLineJoinWithInfo<R = void, P0 = unknown>(_operatorsetLineJoinWithInfo: P0): R;
    registerOperatorsetLineJoin<R = void>(): R;
    operatorsetLineWidthWithInfo<R = void, P0 = unknown>(_operatorsetLineWidthWithInfo: P0): R;
    registerOperatorsetLineWidth<R = void>(): R;
    operatorrestoreGraphicStateWithInfo<R = void, P0 = unknown>(_operatorrestoreGraphicStateWithInfo: P0): R;
    registerOperatorrestoreGraphicState<R = void>(): R;
    operatorsaveGraphicStateWithInfo<R = void, P0 = unknown>(_operatorsaveGraphicStateWithInfo: P0): R;
    registerOperatorsaveGraphicState<R = void>(): R;
    operatorsetGraphicStateWithInfo<R = void, P0 = unknown>(_operatorsetGraphicStateWithInfo: P0): R;
    registerOperatorsetGraphicState<R = void>(): R;
    operatorconcatMatrixWithInfo<R = void, P0 = unknown>(_operatorconcatMatrixWithInfo: P0): R;
    registerOperatorconcatMatrix<R = void>(): R;
    operatorprocessXObjectWithInfo<R = void, P0 = unknown>(_operatorprocessXObjectWithInfo: P0): R;
    registerOperatorprocessXObject<R = void>(): R;
    operatordefineMarkedPointWithInfo<R = void, P0 = unknown>(_operatordefineMarkedPointWithInfo: P0): R;
    registerOperatordefineMarkedPoint<R = void>(): R;
    operatorappendRectangleWithInfo<R = void, P0 = unknown>(_operatorappendRectangleWithInfo: P0): R;
    registerOperatorappendRectangle<R = void>(): R;
    operatorendPathWithInfo<R = void, P0 = unknown>(_operatorendPathWithInfo: P0): R;
    registerOperatorendPath<R = void>(): R;
    operatorclosePathWithInfo<R = void, P0 = unknown>(_operatorclosePathWithInfo: P0): R;
    registerOperatorclosePath<R = void>(): R;
    operatorcurveToFinalPointReplicatedWithInfo<R = void, P0 = unknown>(_operatorcurveToFinalPointReplicatedWithInfo: P0): R;
    registerOperatorcurveToFinalPointReplicated<R = void>(): R;
    operatorcurveToInitialPointReplicatedWithInfo<R = void, P0 = unknown>(_operatorcurveToInitialPointReplicatedWithInfo: P0): R;
    registerOperatorcurveToInitialPointReplicated<R = void>(): R;
    operatorcurveToWithInfo<R = void, P0 = unknown>(_operatorcurveToWithInfo: P0): R;
    registerOperatorcurveTo<R = void>(): R;
    operatorlineToWithInfo<R = void, P0 = unknown>(_operatorlineToWithInfo: P0): R;
    registerOperatorlineTo<R = void>(): R;
    operatormoveToWithInfo<R = void, P0 = unknown>(_operatormoveToWithInfo: P0): R;
    registerOperatormoveTo<R = void>(): R;
    appendString<R = void, P0 = unknown>(_appendString: P0): R;
    processForm<R = void, P0 = unknown>(_processForm: P0): R;
    setFontName_size<R = void, P0 = unknown, P1 = number>(_setFontName: P0, _size: P1): R;
    glyphBounds<R = void>(): R;
    declareGlyph<R = void>(): R;
    endText<R = void>(): R;
    offset<R = void, P0 = number>(_offset: P0): R;
    appendText<R = void, P0 = unknown>(_appendText: P0): R;
    nextLineWithOffset<R = void, P0 = CGPoint>(_nextLineWithOffset: P0): R;
    setTextMatrix<R = void, P0 = unknown>(_setTextMatrix: P0): R;
    endImage<R = void>(): R;
    imageData<R = void>(): R;
    beginImage<R = void>(): R;
    endMarkedContent<R = void>(): R;
    beginMarkedContent<R = void>(): R;
    beginMarkedContentWithProperty<R = void>(): R;
    endCompatibility<R = void>(): R;
    beginCompatibility<R = void>(): R;
    fillWithShadingPattern<R = void, P0 = unknown>(_fillWithShadingPattern: P0): R;
    fillWithWinding<R = void, P0 = number>(_fillWithWinding: P0): R;
    strokeWithWinding<R = void, P0 = number>(_strokeWithWinding: P0): R;
    clipWithWinding<R = void, P0 = number>(_clipWithWinding: P0): R;
    setMitreLimit<R = void, P0 = number>(_setMitreLimit: P0): R;
    concatMatrix<R = void, P0 = unknown>(_concatMatrix: P0): R;
    restoreGraphicState<R = void>(): R;
    saveGraphicState<R = void>(): R;
    processImage_info<R = void, P0 = unknown, P1 = unknown>(_processImage: P0, _info: P1): R;
    processXObject<R = void, P0 = unknown>(_processXObject: P0): R;
    defineMarkedPoint<R = void>(): R;
    endPath<R = void>(): R;
    closePath<R = void>(): R;
    setTextMode<R = void, P0 = number>(_setTextMode: P0): R;
    setTextScale<R = void, P0 = number>(_setTextScale: P0): R;
    setTextRise<R = void, P0 = number>(_setTextRise: P0): R;
    setTextLeading<R = void, P0 = number>(_setTextLeading: P0): R;
    setTextWordSpacing<R = void, P0 = number>(_setTextWordSpacing: P0): R;
    setTextCharacterSpacing<R = void, P0 = number>(_setTextCharacterSpacing: P0): R;
    setFontName_size_info<R = void, P0 = unknown, P1 = number, P2 = unknown>(_setFontName: P0, _size: P1, _info: P2): R;
    beginText<R = void>(): R;
    setOverprintMode<R = void, P0 = number>(_setOverprintMode: P0): R;
    setStrokeAlphaConstant<R = void, P0 = number>(_setStrokeAlphaConstant: P0): R;
    setFillAlphaConstant<R = void, P0 = number>(_setFillAlphaConstant: P0): R;
    setStrokePattern<R = void, P0 = unknown>(_setStrokePattern: P0): R;
    setFillPattern<R = void, P0 = unknown>(_setFillPattern: P0): R;
    setStrokeColour<R = void, P0 = unknown>(_setStrokeColour: P0): R;
    setFillColour<R = void, P0 = unknown>(_setFillColour: P0): R;
    setColourRenderingIntent<R = void, P0 = number>(_setColourRenderingIntent: P0): R;
    setFillColourSpace_mapping<R = void, P0 = unknown, P1 = unknown>(_setFillColourSpace: P0, _mapping: P1): R;
    setStrokeColourSpace_mapping<R = void, P0 = unknown, P1 = unknown>(_setStrokeColourSpace: P0, _mapping: P1): R;
    setLineDash_phase<R = void, P0 = unknown, P1 = number>(_setLineDash: P0, _phase: P1): R;
    setLineCap<R = void, P0 = number>(_setLineCap: P0): R;
    setLineJoin<R = void, P0 = number>(_setLineJoin: P0): R;
    setLineWidth<R = void, P0 = number>(_setLineWidth: P0): R;
    appendRectangle<R = void, P0 = CGRect>(_appendRectangle: P0): R;
    curveTo_control1_control2<R = void, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint>(_curveTo: P0, _control1: P1, _control2: P2): R;
    lineTo<R = void, P0 = CGPoint>(_lineTo: P0): R;
    moveTo<R = void, P0 = CGPoint>(_moveTo: P0): R;
    currentRenderingIntent<R = number>(): R;
    currentStrokeColorSpaceMapping<R = unknown>(): R;
    currentStrokeColorSpace<R = unknown>(): R;
    currentFillColorSpaceMapping<R = unknown>(): R;
    currentFillColorSpace<R = unknown>(): R;
    currentLeading<R = number>(): R;
    currentPoint<R = CGPoint>(): R;
    currentFont<R = unknown>(): R;
    gradientForPattern<R = unknown, P0 = unknown>(_gradientForPattern: P0): R;
    componentIndexForColorSpace_colorSpaceInfo<R = number, P0 = unknown, P1 = unknown>(_componentIndexForColorSpace: P0, _colorSpaceInfo: P1): R;
    isCMYKColorSpaceName<R = boolean, P0 = unknown>(_isCMYKColorSpaceName: P0): R;
    tryToPopObject<R = unknown>(): R;
    popObject<R = unknown>(): R;
    popArray<R = unknown>(): R;
    popName<R = unknown>(): R;
    popString<R = unknown>(): R;
    popNumber<R = unknown>(): R;
    popBool<R = boolean>(): R;
    popInteger<R = number>(): R;
    popDouble<R = number>(): R;
    popPattern<R = unknown>(): R;
    popColorForColorSpace_mapping<R = unknown, P0 = unknown, P1 = unknown>(_popColorForColorSpace: P0, _mapping: P1): R;
    popCMYKColor<R = unknown>(): R;
    popRGBColor<R = unknown>(): R;
    popTransform<R = unknown>(): R;
    popPoint<R = CGPoint>(): R;
    popRectangle<R = CGRect>(): R;
    fontResourceNamed<R = unknown, P0 = unknown>(_fontResourceNamed: P0): R;
    newImageFromStream_details<R = CGImage, P0 = unknown, P1 = unknown>(_newImageFromStream: P0, _details: P1): R;
    interpretObjectStream<R = void, P0 = unknown>(_interpretObjectStream: P0): R;
    interpretImageStream<R = void, P0 = unknown>(_interpretImageStream: P0): R;
    data_filteredWith<R = unknown, P0 = unknown, P1 = unknown>(_data: P0, _filteredWith: P1): R;
    inflate<R = unknown, P0 = unknown>(_inflate: P0): R;
    renderingIntentNamed<R = number, P0 = unknown>(_renderingIntentNamed: P0): R;
    deviceNColorSpace<R = unknown, P0 = unknown>(_deviceNColorSpace: P0): R;
    colorSpaceWithParameters_mapping<R = unknown, P0 = unknown, P1 = unknown>(_colorSpaceWithParameters: P0, _mapping: P1): R;
    colorSpaceWithInfo_mapping<R = unknown, P0 = unknown, P1 = unknown>(_colorSpaceWithInfo: P0, _mapping: P1): R;
    colorSpaceNamed_mapping<R = unknown, P0 = unknown, P1 = unknown>(_colorSpaceNamed: P0, _mapping: P1): R;
    defaultColorSpaceNamed<R = unknown, P0 = unknown>(_defaultColorSpaceNamed: P0): R;
    resourceNamed_ofKind<R = unknown, P0 = unknown, P1 = unknown>(_resourceNamed: P0, _ofKind: P1): R;
    scanStream_dictionary<R = void, P0 = CGPDFContentStream, P1 = unknown>(_scanStream: P0, _dictionary: P1): R;
    scanPage_parser_isPasted<R = void, P0 = CGPDFPage, P1 = unknown, P2 = boolean>(_scanPage: P0, _parser: P1, _isPasted: P2): R;
    addOperator_name_description<R = unknown, P0 = CDUnknownFunctionPointerType, P1 = unknown, P2 = unknown>(_addOperator: P0, _name: P1, _description: P2): R;
    registerAllOperators<R = void>(): R;
    dealloc<R = void>(): R;
    encodingMap<R = NSDictionary>(): R;
    setEncodingMap<R = void, P0 = NSDictionary>(_v: P0): R;
    fontTypesToMap<R = NSSet>(): R;
    setFontTypesToMap<R = void, P0 = NSSet>(_v: P0): R;
    fonts<R = NSMutableDictionary>(): R;
    setFonts<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    stream<R = CGPDFContentStream>(): R;
    setStream<R = void, P0 = CGPDFContentStream>(_v: P0): R;
    scanner<R = CGPDFScanner>(): R;
    setScanner<R = void, P0 = CGPDFScanner>(_v: P0): R;
    table<R = CGPDFOperatorTable>(): R;
    setTable<R = void, P0 = CGPDFOperatorTable>(_v: P0): R;
    dictionary<R = NSDictionary>(): R;
    setDictionary<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface PDFScanner<T = any> extends NSObject {
      alloc<R = PDFScanner>(): R;
      new: <R = PDFScanner>() => R;
      convertObject<R = unknown, P0 = CGPDFObject>(_convertObject: P0): R;
      convertDictionary<R = unknown, P0 = CGPDFDictionary>(_convertDictionary: P0): R;
      convertArray<R = unknown, P0 = CGPDFArray>(_convertArray: P0): R;
    }
  }
}

declare const PDFScanner: cocoa.classes.PDFScanner;
