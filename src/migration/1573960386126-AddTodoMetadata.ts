import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTodoMetadata1573960386126 implements MigrationInterface {
    name = 'AddTodoMetadata1573960386126'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `todo_metadata` (`id` int NOT NULL AUTO_INCREMENT, `comment` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD `metadataId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD UNIQUE INDEX `IDX_d1f431fd7974ef1af9318304fa` (`metadataId`)", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_d1f431fd7974ef1af9318304fa` ON `todo` (`metadataId`)", undefined);
        await queryRunner.query("ALTER TABLE `todo` ADD CONSTRAINT `FK_d1f431fd7974ef1af9318304fa2` FOREIGN KEY (`metadataId`) REFERENCES `todo_metadata`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `todo` DROP FOREIGN KEY `FK_d1f431fd7974ef1af9318304fa2`", undefined);
        await queryRunner.query("DROP INDEX `REL_d1f431fd7974ef1af9318304fa` ON `todo`", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP INDEX `IDX_d1f431fd7974ef1af9318304fa`", undefined);
        await queryRunner.query("ALTER TABLE `todo` DROP COLUMN `metadataId`", undefined);
        await queryRunner.query("DROP TABLE `todo_metadata`", undefined);
    }

}
