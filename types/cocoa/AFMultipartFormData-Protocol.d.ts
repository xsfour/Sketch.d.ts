/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFMultipartFormDataProtocol<T = any> {
    throttleBandwidthWithPacketSize_delay<R = void, P0 = number, P1 = number>(_throttleBandwidthWithPacketSize: P0, _delay: P1): R;
    appendPartWithHeaders_body<R = void, P0 = cocoa.NSDictionary, P1 = cocoa.NSData>(_appendPartWithHeaders: P0, _body: P1): R;
    appendPartWithFormData_name<R = void, P0 = cocoa.NSData, P1 = cocoa.NSString>(_appendPartWithFormData: P0, _name: P1): R;
    appendPartWithFileData_name_fileName_mimeType<R = void, P0 = cocoa.NSData, P1 = cocoa.NSString, P2 = cocoa.NSString, P3 = cocoa.NSString>(_appendPartWithFileData: P0, _name: P1, _fileName: P2, _mimeType: P3): R;
    appendPartWithInputStream_name_fileName_length_mimeType<R = void, P0 = cocoa.NSInputStream, P1 = cocoa.NSString, P2 = cocoa.NSString, P3 = number, P4 = cocoa.NSString>(_appendPartWithInputStream: P0, _name: P1, _fileName: P2, _length: P3, _mimeType: P4): R;
    appendPartWithFileURL_name_fileName_mimeType_error<R = boolean, P0 = cocoa.NSURL, P1 = cocoa.NSString, P2 = cocoa.NSString, P3 = cocoa.NSString, P4 = unknown>(_appendPartWithFileURL: P0, _name: P1, _fileName: P2, _mimeType: P3, _error: P4): R;
    appendPartWithFileURL_name_error<R = boolean, P0 = cocoa.NSURL, P1 = cocoa.NSString, P2 = unknown>(_appendPartWithFileURL: P0, _name: P1, _error: P2): R;
  }
  namespace classes {
    export interface AFMultipartFormDataProtocol<T = any> {  }
  }
}

declare const AFMultipartFormDataProtocol: cocoa.classes.AFMultipartFormDataProtocol;
