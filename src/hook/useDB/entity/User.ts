import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "Table_User" })
export default class User {
  @PrimaryGeneratedColumn("uuid")
  user_id: string;

  @Column({ type: "text", length: 20 })
  user_name: string;

  @Column({ type: "text", length: 16 })
  user_pwd: string;
}
