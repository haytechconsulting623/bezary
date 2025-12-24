import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Index,
} from 'typeorm';
import { ProductsEntity } from '../products/products.entity';

@Entity('variants')
export class VariantsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', unsigned: true })
  priceCent: number;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 100 })
  sku: string;

  @Column({ type: 'int', default: 0 })
  stockQuantity: number;

  @Column({ type: 'jsonb', nullable: true })
  attributes: Record<string, any>;

  @ManyToOne(() => ProductsEntity, (product) => product.variants, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  product: ProductsEntity;
}
