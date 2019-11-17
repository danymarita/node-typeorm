import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateTodoCategoryColumn1573967662275 implements MigrationInterface {
    name = 'UpdateTodoCategoryColumn1573967662275'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `todo_categories_category` (`todoId` int NOT NULL, `categoryId` int NOT NULL, INDEX `IDX_4347fec6e6cc3be4ce39d9d9f3` (`todoId`), INDEX `IDX_80456ff2d7fd676c1ac2d107f3` (`categoryId`), PRIMARY KEY (`todoId`, `categoryId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_d1f431fd7974ef1af9318304fa2`", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_c56120106977cc14f975726af07`", undefined);
        await queryRunner.query("ALTER TABLE `todo` CHANGE `metadataId` `metadataId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `todo` CHANGE `authorId` `authorId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_d1f431fd7974ef1af9318304fa2` FOREIGN KEY (`metadataId`) REFERENCES `todo_metadata`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_c56120106977cc14f975726af07` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `todo_categories_category` ADD CONSTRAINT `FK_4347fec6e6cc3be4ce39d9d9f36` FOREIGN KEY (`todoId`) REFERENCES `todo`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `todo_categories_category` ADD CONSTRAINT `FK_80456ff2d7fd676c1ac2d107f31` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `todo_categories_category` DROP FOREIGN KEY `FK_80456ff2d7fd676c1ac2d107f31`", undefined);
        await queryRunner.query("ALTER TABLE `todo_categories_category` DROP FOREIGN KEY `FK_4347fec6e6cc3be4ce39d9d9f36`", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_c56120106977cc14f975726af07`", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_d1f431fd7974ef1af9318304fa2`", undefined);
        await queryRunner.query("ALTER TABLE `todo` CHANGE `authorId` `authorId` int NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `todo` CHANGE `metadataId` `metadataId` int NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_c56120106977cc14f975726af07` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_d1f431fd7974ef1af9318304fa2` FOREIGN KEY (`metadataId`) REFERENCES `todo_metadata`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("DROP INDEX `IDX_80456ff2d7fd676c1ac2d107f3` ON `todo_categories_category`", undefined);
        await queryRunner.query("DROP INDEX `IDX_4347fec6e6cc3be4ce39d9d9f3` ON `todo_categories_category`", undefined);
        await queryRunner.query("DROP TABLE `todo_categories_category`", undefined);
    }

}
