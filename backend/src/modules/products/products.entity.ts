import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { VendorsEntity } from '../vendors/vendors.entity';
import { AssetsEntity } from '../assets/assets.entity';
import { VariantsEntity } from '../variants-product/variants.entity';

export enum ProductStatus {
  DRAFT = 'DRAFT',
  PENDING_REVIEW = 'PENDING_REVIEW',
  ACTIVE = 'ACTIVE',
  REJECTED = 'REJECTED',
}

@Entity('products')
export class ProductsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  nameProduct: string;

  @Column({ type: 'varchar', length: 255 })
  categoryProduct: string;

  @Column({ type: 'enum', enum: ProductStatus, default: ProductStatus.DRAFT })
  statusProduct: ProductStatus;

  @Column({ default: false })
  isDelete: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @ManyToOne(() => VendorsEntity, (vendor) => vendor.products, {
    onDelete: 'CASCADE',
  })
  vendor: VendorsEntity;

  @OneToMany(() => VariantsEntity, (variant) => variant.product, { cascade: true })
  variants: VariantsEntity[];

  @OneToMany(() => AssetsEntity, (asset) => asset.product, { cascade: true })
  assets: AssetsEntity[];
}
