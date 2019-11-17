import {MigrationInterface, QueryRunner} from "typeorm";

export class RemovePersistedNameColumn1573925631196 implements MigrationInterface {
    name = 'RemovePersistedNameColumn1573925631196'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `todo` DROP COLUMN `persistedName`", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `todo` ADD `persistedName` varchar(255) NOT NULL", undefined);
    }

}
