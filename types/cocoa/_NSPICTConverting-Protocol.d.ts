/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPICTConvertingProtocol<T = any> {
    imageDataRecordFromPICTDataRecord<R = NSDictionary, P0 = NSDictionary>(_imageDataRecordFromPICTDataRecord: P0): R;
    PICTDataRecordFromImageDataRecord<R = NSDictionary, P0 = NSDictionary>(_PICTDataRecordFromImageDataRecord: P0): R;
    renderedBitmapInfoFromPICTDataRecord<R = NSDictionary, P0 = NSDictionary>(_renderedBitmapInfoFromPICTDataRecord: P0): R;
  }
  namespace classes {
    export interface _NSPICTConvertingProtocol<T = any> {  }
  }
}
