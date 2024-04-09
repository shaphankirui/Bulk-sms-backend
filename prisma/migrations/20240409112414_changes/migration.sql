-- CreateTable
CREATE TABLE `orginization` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `clientId` VARCHAR(191) NOT NULL,
    `apiKey` VARCHAR(191) NOT NULL,
    `Balnce` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `fileUrl` VARCHAR(191) NULL,
    `pictureUrl` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `organization_users` (
    `organizationId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`organizationId`, `userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `organization_users` ADD CONSTRAINT `organization_users_organizationId_fkey` FOREIGN KEY (`organizationId`) REFERENCES `orginization`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `organization_users` ADD CONSTRAINT `organization_users_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
