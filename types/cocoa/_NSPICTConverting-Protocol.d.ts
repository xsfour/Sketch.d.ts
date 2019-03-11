/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPICTConvertingProtocol<T = any> {
    imageDataRecordFromPICTDataRecord<R = cocoa.NSDictionary, P0 = cocoa.NSDictionary>(_imageDataRecordFromPICTDataRecord: P0): R;
    PICTDataRecordFromImageDataRecord<R = cocoa.NSDictionary, P0 = cocoa.NSDictionary>(_PICTDataRecordFromImageDataRecord: P0): R;
    renderedBitmapInfoFromPICTDataRecord<R = cocoa.NSDictionary, P0 = cocoa.NSDictionary>(_renderedBitmapInfoFromPICTDataRecord: P0): R;
  }
  namespace classes {
    export interface _NSPICTConvertingProtocol<T = any> {  }
  }
}
