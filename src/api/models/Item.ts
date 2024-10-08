import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Item extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  })
  price!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  last_updated_dt!: Date;
}

