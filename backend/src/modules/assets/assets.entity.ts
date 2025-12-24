import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductsEntity } from '../products/products.entity';

@Entity('assets')
export class AssetsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  urlImage: string;

  @Column({ type: 'boolean', default: false })
  isMain: boolean;

  @ManyToOne(() => ProductsEntity, (product) => product.assets, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  product: ProductsEntity;
}
