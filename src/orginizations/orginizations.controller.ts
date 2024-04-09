import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { OrginizationsService } from './orginizations.service';
import { OrgDto } from './orginization.dto';
import { JwtGuard } from 'src/auth/guard';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';

@Controller('orginizations')
export class OrginizationsController {
    constructor(private readonly orgService: OrginizationsService) {}

    @UseGuards(JwtGuard)
    @Post()
    async createOrg(@Body() dto: OrgDto,@GetUser() user: User) {
        const userId = user.id; // Assuming you have userId in the request
        return this.orgService.createOrg({ ...dto }, userId);
      }
  
    @Get()
    async getAllOrg() {
      return this.orgService.getAllOrg();
    }
  
    @Get(':id')
    async getOrgById(@Param('id') id: string) {
      const numericId = parseInt(id, 10);
      return this.orgService.getOrgById(numericId);
    }
  
    @Put(':id')
    async updateOrg(@Param('id') id: string, @Body() dto: OrgDto) {
      const numericId = parseInt(id, 10);
      return this.orgService.updateOrg(numericId, dto);
    }
  
    @Delete(':id')
    async deleteOrg(@Param('id') id: string) {
      const numericId = parseInt(id, 10);
      return this.orgService.deleteOrg(numericId);
    }
}
