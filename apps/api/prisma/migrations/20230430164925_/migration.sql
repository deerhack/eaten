-- CreateTable
CREATE TABLE `Admin` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Admin_id_key`(`id`),
    UNIQUE INDEX `Admin_username_key`(`username`),
    UNIQUE INDEX `Admin_password_key`(`password`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Participant` (
    `participant_id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `gender` ENUM('Male', 'Female') NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `team_name` VARCHAR(191) NOT NULL,
    `qr_data` LONGBLOB NOT NULL,

    UNIQUE INDEX `Participant_uuid_key`(`uuid`),
    PRIMARY KEY (`participant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
