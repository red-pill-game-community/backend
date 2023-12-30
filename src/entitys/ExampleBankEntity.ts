import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ database: "alphaboy_data", name: "example_bank" })
export class ExampleBankEntity extends BaseEntity {

  @PrimaryGeneratedColumn("uuid", {
    comment: "样例ID"
  })
  id: string;

  @Column({
    type: "varchar",
    length: 120,
    comment: "案例标题"
  })
  title: string;

  @Column({
    type: "varchar",
    length: 120,
    comment: "案例简述"
  })
  description: string;

  @Column({
    type: "varchar",
    length: 120,
    comment: "案例类型(选择题,简答题)"
  })
  type: string;

  @Column({
    type: "varchar",
    length: 120,
    comment: "选择题选择a"
  })
  option_a: string;

  @Column({
    type: "varchar",
    length: 120,
    comment: "选择题选择b"
  })
  option_b: string;

  @Column({
    type: "varchar",
    length: 120,
    comment: "选择题选择c"
  })
  option_c: string;

  @Column({
    type: "varchar",
    length: 120,
    comment: "选择题选择d"
  })
  option_d: string;

};