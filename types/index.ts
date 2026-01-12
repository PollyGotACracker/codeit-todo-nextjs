export interface Item {
  id: number;
  name: string;
  isCompleted: boolean;
}
export interface ItemPostReq {
  name: string;
}
export interface ItemDetail {
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
export interface ImageUploadRes {
  url: string;
}
export interface ItemDeleteRes {
  message: string;
}
