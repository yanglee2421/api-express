import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: "Table_Joke" })
export class Joke {
  @PrimaryGeneratedColumn("uuid")
  joke_id: string;
  @Column({ type: "text", length: 500 })
  joke_text: string;
}
