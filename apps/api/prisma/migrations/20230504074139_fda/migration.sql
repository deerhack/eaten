/*
  Warnings:

  - You are about to drop the column `eventId` on the `Participant` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Participant` DROP FOREIGN KEY `Participant_eventId_fkey`;

-- AlterTable
ALTER TABLE `Participant` DROP COLUMN `eventId`;

-- CreateTable
CREATE TABLE `_ParticipationEvent` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ParticipationEvent_AB_unique`(`A`, `B`),
    INDEX `_ParticipationEvent_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ParticipationEvent` ADD CONSTRAINT `_ParticipationEvent_A_fkey` FOREIGN KEY (`A`) REFERENCES `Event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ParticipationEvent` ADD CONSTRAINT `_ParticipationEvent_B_fkey` FOREIGN KEY (`B`) REFERENCES `Participant`(`participant_id`) ON DELETE CASCADE ON UPDATE CASCADE;
