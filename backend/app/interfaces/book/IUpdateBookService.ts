import { ICreateBookDTO } from "./ICreateBookService.js";

export interface IUpdateBookDTO extends Partial<ICreateBookDTO> {}
