import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ProductsEntity } from '../products/products.entity';
import { UsersEntity } from '../users/users.entity';

export enum VendorStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  BANNED = 'BANNED',
}

export enum SubscribeStatus {
  TRIAL = 'TRIAL',
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
  CANCELLED = 'CANCELLED',
}

@Entity('vendors')
export class VendorsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  storeLogo: string;

  @Column({ length: 150 })
  storeName: string;

  @Column({ unique: true })
  storeCin: string;

  @Column({ type: 'text' })
  storeAddress: string;

  @Column({
    type: 'enum',
    enum: VendorStatus,
    default: VendorStatus.PENDING,
  })
  statusVendor: VendorStatus;

  @Column({
    type: 'numeric',
    precision: 15,
    scale: 2,
    default: 0,
  })
  balanceAvailable: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    default: 0,
  })
  commissionRate: number;

  @Column({
    type: 'enum',
    enum: SubscribeStatus,
    default: SubscribeStatus.TRIAL,
  })
  statusSubscribe: SubscribeStatus;

  @Column({ type: 'timestamptz', nullable: true })
  subscriptionEnd: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @OneToOne(() => UsersEntity, user => user.vendorProfile, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: UsersEntity;

  @OneToMany(() => ProductsEntity, product => product.vendor)
  products: ProductsEntity[];
}
