import {MigrationInterface, QueryRunner} from "typeorm";

export class AddAuthorIndex1573965181742 implements MigrationInterface {
    name = 'AddAuthorIndex1573965181742'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_d1f431fd7974ef1af9318304fa2`", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_c56120106977cc14f975726af07`", undefined);
        await queryRunner.query("ALTER TABLE `todo` CHANGE `metadataId` `metadataId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `todo` CHANGE `authorId` `authorId` int NULL", undefined);
        await queryRunner.query("CREATE INDEX `IDX_c56120106977cc14f975726af0` ON `todo` (`authorId`)", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_d1f431fd7974ef1af9318304fa2` FOREIGN KEY (`metadataId`) REFERENCES `todo_metadata`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_c56120106977cc14f975726af07` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_c56120106977cc14f975726af07`", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_d1f431fd7974ef1af9318304fa2`", undefined);
        await queryRunner.query("DROP INDEX `IDX_c56120106977cc14f975726af0` ON `todo`", undefined);
        await queryRunner.query("ALTER TABLE `todo` CHANGE `authorId` `authorId` int NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `todo` CHANGE `metadataId` `metadataId` int NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_c56120106977cc14f975726af07` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_d1f431fd7974ef1af9318304fa2` FOREIGN KEY (`metadataId`) REFERENCES `todo_metadata`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

}
