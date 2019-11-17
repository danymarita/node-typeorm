import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCategoryTable1573967566762 implements MigrationInterface {
    name = 'AddCategoryTable1573967566762'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `category` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `todo_category_category` (`todoId` int NOT NULL, `categoryId` int NOT NULL, INDEX `IDX_f479c03fbaedec69b75cfc37ee` (`todoId`), INDEX `IDX_b301b2fc197fc36e1faa6f3217` (`categoryId`), PRIMARY KEY (`todoId`, `categoryId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_d1f431fd7974ef1af9318304fa2`", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_c56120106977cc14f975726af07`", undefined);
        await queryRunner.query("ALTER TABLE `todo` CHANGE `metadataId` `metadataId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `todo` CHANGE `authorId` `authorId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_d1f431fd7974ef1af9318304fa2` FOREIGN KEY (`metadataId`) REFERENCES `todo_metadata`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_c56120106977cc14f975726af07` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `todo_category_category` ADD CONSTRAINT `FK_f479c03fbaedec69b75cfc37eec` FOREIGN KEY (`todoId`) REFERENCES `todo`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `todo_category_category` ADD CONSTRAINT `FK_b301b2fc197fc36e1faa6f32173` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `todo_category_category` DROP FOREIGN KEY `FK_b301b2fc197fc36e1faa6f32173`", undefined);
        await queryRunner.query("ALTER TABLE `todo_category_category` DROP FOREIGN KEY `FK_f479c03fbaedec69b75cfc37eec`", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_c56120106977cc14f975726af07`", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_d1f431fd7974ef1af9318304fa2`", undefined);
        await queryRunner.query("ALTER TABLE `todo` CHANGE `authorId` `authorId` int NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `todo` CHANGE `metadataId` `metadataId` int NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_c56120106977cc14f975726af07` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_d1f431fd7974ef1af9318304fa2` FOREIGN KEY (`metadataId`) REFERENCES `todo_metadata`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("DROP INDEX `IDX_b301b2fc197fc36e1faa6f3217` ON `todo_category_category`", undefined);
        await queryRunner.query("DROP INDEX `IDX_f479c03fbaedec69b75cfc37ee` ON `todo_category_category`", undefined);
        await queryRunner.query("DROP TABLE `todo_category_category`", undefined);
        await queryRunner.query("DROP TABLE `category`", undefined);
    }

}
