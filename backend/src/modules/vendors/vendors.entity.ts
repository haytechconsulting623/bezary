import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum VendorStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  BANNED = 'BANNED',
}

export enum SubscribeStatus {

}

@Entity()
export class VendorsEntity {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    storeLogo:string;

    @Column()
    storeName:string;

    @Column()
    storeCin:string;

    @Column()
    storeAddress:string;

    @Column()
    statusVendor:VendorStatus;

    @Column()
    balanceAvailable:bigint;

    @Column()
    commissionRate:number;

    @Column()
    statusSubscribe:SubscribeStatus;

    @Column()
    subscribtionEnd:Date
}