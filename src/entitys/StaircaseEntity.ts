import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ database: "alphaboy_data", name: "staircase" })
export class StaircaseEntity extends BaseEntity {

};