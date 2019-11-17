import {MigrationInterface, QueryRunner} from "typeorm";

export class AddPersistedNameColumn1573925322068 implements MigrationInterface {
    name = 'AddPersistedNameColumn1573925322068'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `todo` ADD `persistedName` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `todo` DROP COLUMN `persistedName`", undefined);
    }

}
