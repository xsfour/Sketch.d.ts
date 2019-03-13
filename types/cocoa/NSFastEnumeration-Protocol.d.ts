/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFastEnumerationProtocol<T = any> {
    countByEnumeratingWithState_objects_count<R = number, P0 = unknown, P1 = unknown, P2 = number>(_countByEnumeratingWithState: P0, _objects: P1, _count: P2): R;
  }
  namespace classes {
    export interface NSFastEnumerationProtocol<T = any> {  }
  }
}
