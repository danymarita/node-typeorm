import {MigrationInterface, QueryRunner} from "typeorm";

export class AddAuthorTable1573961866149 implements MigrationInterface {
    name = 'AddAuthorTable1573961866149'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_d1f431fd7974ef1af9318304fa` ON `todo`", undefined);
        await queryRunner.query("CREATE TABLE `author` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD `authorId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_d1f431fd7974ef1af9318304fa2`", undefined);
        await queryRunner.query("ALTER TABLE `todo` CHANGE `metadataId` `metadataId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_d1f431fd7974ef1af9318304fa2` FOREIGN KEY (`metadataId`) REFERENCES `todo_metadata`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_c56120106977cc14f975726af07` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_c56120106977cc14f975726af07`", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_d1f431fd7974ef1af9318304fa2`", undefined);
        await queryRunner.query("ALTER TABLE `todo` CHANGE `metadataId` `metadataId` int NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_d1f431fd7974ef1af9318304fa2` FOREIGN KEY (`metadataId`) REFERENCES `todo_metadata`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP COLUMN `authorId`", undefined);
        await queryRunner.query("DROP TABLE `author`", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_d1f431fd7974ef1af9318304fa` ON `todo` (`metadataId`)", undefined);
    }

}
