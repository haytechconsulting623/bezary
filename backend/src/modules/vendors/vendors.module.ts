import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VendorsEntity } from "./vendors.entity";
import { VendorsService } from "./vendors.service";
import { VendorsRepository } from "./vendors.repository";
import { VendorsController } from "./vendors.controller";

@Module({
    imports:[TypeOrmModule.forFeature([VendorsEntity])],
    controllers: [VendorsController],
    providers: [VendorsService, VendorsRepository],
    exports: [VendorsService],
})
export class VendorsModule {}