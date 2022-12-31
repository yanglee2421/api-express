import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: "Table_Pwd" })
class Pwd {
  @PrimaryGeneratedColumn("uuid")
  pwd_id: string;
  @Column({ type: "text", length: 20 })
  pwd_site: string;
  @Column({ type: "text", length: 20 })
  pwd_username: string = "";
  @Column({ type: "text", length: 20 })
  pwd_pwd: string;
}
export default Pwd;
