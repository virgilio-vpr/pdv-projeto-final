import { Inject, Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from '../database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SalesService {
  @Inject()
  private readonly prisma: PrismaService;
  async create(createSaleDto: CreateSaleDto) {
    return await this.prisma.sale.create({
      data: {
        product: createSaleDto.product,
        price: createSaleDto.price,
      },
    });
  }

  async findAll() {
    return await this.prisma.sale.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.sale.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateSaleDto: UpdateSaleDto) {
    return await this.prisma.sale.update({
      where: {
        id,
      },
      data: {
        product: updateSaleDto.product,
        price: updateSaleDto.price,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.sale.delete({
      where: {
        id,
      },
    });
  }
}
