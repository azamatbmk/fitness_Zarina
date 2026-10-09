import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreatePreorderDto } from './dto/create-preorder.dto.js';
import { PreorderRateLimitGuard } from './preorder-rate-limit.guard.js';
import { PreordersService } from './preorders.service.js';

@Controller('preorders')
export class PreordersController {
  constructor(private readonly preordersService: PreordersService) {}

  @Post()
  @UseGuards(PreorderRateLimitGuard)
  create(@Body() dto: CreatePreorderDto) {
    return this.preordersService.create(dto);
  }
}
