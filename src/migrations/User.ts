// import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from "typeorm";

// export class createCustomerTable1600607159610 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<any> {
//         await queryRunner.createTable(new Table({
//             name: "customers",
//             columns: [
//                 {
//                     name: 'id',
//                     type: 'int',
//                     isPrimary: true,
//                     isGenerated: true,
//                     generationStrategy: 'increment',
//                 },
//                 {
//                     name: "name",
//                     type: "varchar",
//                 },
//                 {
//                     name: 'created_at',
//                     type: 'datetime',
//                     default: 'now()',
//                 },
//                 {
//                     name: 'updated_at',
//                     type: 'datetime',
//                     default: 'now()',
//                 }
//             ]
//         }), true)
//     }

//     public async down(queryRunner: QueryRunner): Promise<any> {
//         await queryRunner.dropTable("customers");
//     }

// }
