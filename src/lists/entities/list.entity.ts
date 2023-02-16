import { Column, Model, Table } from 'sequelize-typescript';

export type ListAtrribuites = {
  name: string;
};

@Table
export class List extends Model<ListAtrribuites> {
  @Column
  name: string;
}
