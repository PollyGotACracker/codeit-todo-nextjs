export interface ItemGetRes {
  id: number;
  name: string;
  isCompleted: boolean;
}
export interface ItemPostReq {
  name: string;
}
export interface ItemPostRes {
  id: number;
  tenantId: string;
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}
export interface ItemPatchReq {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}
export interface ItemPatchRes {
  id: number;
  imageUrl: string;
  memo: string;
  name: string;
  tenantId: string;
  isCompleted: boolean;
}
