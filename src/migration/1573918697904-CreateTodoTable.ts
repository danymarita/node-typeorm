import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTodoTable1573918697904 implements MigrationInterface {
    name = 'CreateTodoTable1573918697904'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `todo` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `isComplete` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `todo`", undefined);
    }

}
