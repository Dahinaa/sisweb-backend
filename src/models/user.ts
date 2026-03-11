import {
  Table,
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  DataType
} from "sequelize-typescript";
import { Optional } from "sequelize";

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

@Table({
  tableName: "Users"
})
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column({
    type: DataType.STRING
  })
  name!: string;

  @Column({
    type: DataType.STRING
  })
  email!: string;

  @Column({
    type: DataType.STRING
  })
  password!: string;

  @CreatedAt
  @Column({
    type: DataType.DATE
  })
  createdAt!: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE
  })
  updatedAt!: Date;
}