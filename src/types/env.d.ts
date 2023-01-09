namespace Type {
  export interface init {
    method: string;
    headers: Headers;
    body?: string;
  }
}
declare function fetch(params: URL, init: Type.init): Promise<Response>;
declare class Headers {}
