import {ContactUpdateModel} from './contactUpdate.model';

export class ListAllModel {
  contacts: Array<ContactUpdateModel>;
  kind: string;
  etag: string;
}
