-- AlterTable
ALTER TABLE `Participant` ADD COLUMN `eventId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `start_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `end_time` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Participant` ADD CONSTRAINT `Participant_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
