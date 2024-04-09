import { Injectable, NotFoundException } from '@nestjs/common';
import slugify from 'slugify';
import { CareersDto } from 'src/careers/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrgDto } from './orginization.dto';

@Injectable()
export class OrginizationsService {
    constructor(private readonly prisma: PrismaService) {}

    async createOrg(dto: OrgDto, userId: number) {
        // Generate random API key
        const apiKey = this.generateApiKey();
  
        // Generate unique client ID
        const clientId = await this.generateClientId();
  
        // Create organization with generated API key and client ID
        const orginization = await this.prisma.orginization.create({
            data: {
              name: dto.name,
              clientId: clientId,
              apiKey: apiKey,
              Balnce: dto.Balance,
              active: dto.active,
              pictureUrl: dto.pictureUrl,
              fileUrl: dto.fileUrl,
              OrganizationUser: {
                create: {
                  userId
                }
              }
            }
          });
    
        return orginization;
      }

    private generateApiKey(): string {
      // Generate random alphanumeric string of length 16
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let apiKey = '';
      for (let i = 0; i < 16; i++) {
        apiKey += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return apiKey;
    }

    private async generateClientId(): Promise<string> {
      // Generate unique client ID
      let clientId = '';
      let unique = false;
      while (!unique) {
        clientId = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit random number
        // Check if client ID already exists in the database
        const existingOrg = await this.prisma.orginization.findFirst({
          where: { clientId: clientId },
        });
        if (!existingOrg) {
          unique = true; // Client ID is unique
        }
      }
      return clientId;
    }
  
    async getAllOrg() {
      return this.prisma.orginization.findMany({
      });
    }
    
  
    async getOrgById(id: number) {
      const orginization = await this.prisma.orginization.findUnique({
        where: { id },
      });
  
      if (!orginization) {
        throw new NotFoundException(`orginization with ID ${id} not found`);
      }
  
      return orginization;
    }
  
    async updateOrg(id: number, dto: OrgDto) {
      const existingOrg = await this.prisma.orginization.findUnique({
        where: { id },
      });
  
      if (!existingOrg) {
        throw new NotFoundException(`orginization with ID ${id} not found`);
      }
  
      return this.prisma.orginization.update({
        where: { id },
        data: dto,
      });
    }
  
    async deleteOrg(id: number) {
      const existingOrg = await this.prisma.orginization.findUnique({
        where: { id },
      });
  
      if (!existingOrg) {
        throw new NotFoundException(`orginization with ID ${id} not found`);
      }
  
      return this.prisma.orginization.delete({
        where: { id },
      });
    }
}
