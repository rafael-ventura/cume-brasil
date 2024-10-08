import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1726094103854 implements MigrationInterface {
    name = 'InitialMigration1726094103854'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."participante" ("id" SERIAL NOT NULL, "tipo" character varying NOT NULL, "nome" character varying NOT NULL, "email" character varying, "escaladaId" integer, CONSTRAINT "PK_1aac3475896941c1b7e42dcfda8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."escalada" ("id" SERIAL NOT NULL, "data" character varying NOT NULL, "observacao" character varying, "usuarioIdId" integer, "viaIdId" integer, CONSTRAINT "PK_44d747c585fa468148a151ffad2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."usuario" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "password_hash" character varying NOT NULL, "data_atividade" character varying, "clube_organizacao" character varying, "localizacao" character varying, "biografia" character varying, "via_preferida" integer, "fotoPerfilId" integer, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."colecao" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying, "usuarioId" integer, "imagemId" integer, CONSTRAINT "PK_013ae470d376ce2572630925424" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."face" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "montanhaId" integer, "fonteId" integer, CONSTRAINT "PK_6bb13517bcd59d462a466f2e4d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."montanha" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "bairro" character varying, "altura" integer, "fonteId" integer, "imagemId" integer, CONSTRAINT "PK_1aa35a0cfe0c967aba343bd82fa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."imagem" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "descricao" character varying, "tipo_entidade" character varying NOT NULL, "fonteId" integer, CONSTRAINT "PK_7ee30edd85bb84d644b88ac624f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."fonte" ("id" SERIAL NOT NULL, "autor" character varying NOT NULL, "referencia" character varying NOT NULL, CONSTRAINT "PK_4c3b9c572532f43652dc3a8d791" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."croqui" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "fonteId" integer, "imagemId" integer, CONSTRAINT "PK_b3c5934698cb1f63ef9fc2269fa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."via" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "grau" character varying, "crux" character varying, "artificial" character varying, "duracao" character varying, "exposicao" character varying, "extensao" numeric(5,2), "conquistadores" character varying, "detalhes" character varying, "data" character varying, "montanhaId" integer, "viaPrincipalId" integer, "fonteId" integer, "faceId" integer, "imagemId" integer, CONSTRAINT "PK_8bfbf81a6b34cb7607e6ae297cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."via_colecao" ("colecao_id" integer NOT NULL, "via_id" integer NOT NULL, CONSTRAINT "PK_bade85a2a7d21a160a14018dc87" PRIMARY KEY ("colecao_id", "via_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bee235400d2a1ae74b45f7fb25" ON "public"."via_colecao" ("colecao_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_a2dfca95bbaa165dd76e08500c" ON "public"."via_colecao" ("via_id") `);
        await queryRunner.query(`CREATE TABLE "public"."via_croqui" ("via_id" integer NOT NULL, "croqui_id" integer NOT NULL, CONSTRAINT "PK_733c69065e0f28a8a4f2458e46f" PRIMARY KEY ("via_id", "croqui_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_286d36a105f0ff1803e06a1892" ON "public"."via_croqui" ("via_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_3da8bfbf959565796991033085" ON "public"."via_croqui" ("croqui_id") `);
        await queryRunner.query(`ALTER TABLE "public"."participante" ADD CONSTRAINT "FK_353d337b2cdb461857c443e0b5c" FOREIGN KEY ("escaladaId") REFERENCES "public"."escalada"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."escalada" ADD CONSTRAINT "FK_a8849d6c35436965bfe9df93c2b" FOREIGN KEY ("usuarioIdId") REFERENCES "public"."usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."escalada" ADD CONSTRAINT "FK_4ca5140f3861383beb507fbe786" FOREIGN KEY ("viaIdId") REFERENCES "public"."via"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."usuario" ADD CONSTRAINT "FK_27572483c5d4289d5a5aaa6aa11" FOREIGN KEY ("via_preferida") REFERENCES "public"."via"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."usuario" ADD CONSTRAINT "FK_35aa0d34a013e3514205d4b24f7" FOREIGN KEY ("fotoPerfilId") REFERENCES "public"."imagem"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."colecao" ADD CONSTRAINT "FK_b9397dc23a3d8a68cf52fef3416" FOREIGN KEY ("usuarioId") REFERENCES "public"."usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."colecao" ADD CONSTRAINT "FK_5e71c3d8895ea5c8ff919531621" FOREIGN KEY ("imagemId") REFERENCES "public"."imagem"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."face" ADD CONSTRAINT "FK_2665c7bce4e6afe69fd617b4e7b" FOREIGN KEY ("montanhaId") REFERENCES "public"."montanha"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."face" ADD CONSTRAINT "FK_6b77a77b154821418159b9335c7" FOREIGN KEY ("fonteId") REFERENCES "public"."fonte"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."montanha" ADD CONSTRAINT "FK_e8728225851e2e4c815ab9e563e" FOREIGN KEY ("fonteId") REFERENCES "public"."fonte"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."montanha" ADD CONSTRAINT "FK_bb8ee4fa9a0a4b32cd31aa4f0cb" FOREIGN KEY ("imagemId") REFERENCES "public"."imagem"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."imagem" ADD CONSTRAINT "FK_b3829a6e4f0d694aab1e9fce9ac" FOREIGN KEY ("fonteId") REFERENCES "public"."fonte"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."croqui" ADD CONSTRAINT "FK_d14e2aecef01c88f2bfb7696c8f" FOREIGN KEY ("fonteId") REFERENCES "public"."fonte"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."croqui" ADD CONSTRAINT "FK_fc27b59f75351cacce57840c259" FOREIGN KEY ("imagemId") REFERENCES "public"."imagem"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."via" ADD CONSTRAINT "FK_4cc16ee9b6d4562a8726f8252a8" FOREIGN KEY ("montanhaId") REFERENCES "public"."montanha"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."via" ADD CONSTRAINT "FK_27d650271375fd000f9446a95c5" FOREIGN KEY ("viaPrincipalId") REFERENCES "public"."via"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."via" ADD CONSTRAINT "FK_c2d51f29d46f20f1085eb67a5f8" FOREIGN KEY ("fonteId") REFERENCES "public"."fonte"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."via" ADD CONSTRAINT "FK_ff7363cdc4061d3e9e5ea9f5ac2" FOREIGN KEY ("faceId") REFERENCES "public"."face"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."via" ADD CONSTRAINT "FK_8948e86277ce7a2021bb052fad9" FOREIGN KEY ("imagemId") REFERENCES "public"."imagem"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."via_colecao" ADD CONSTRAINT "FK_bee235400d2a1ae74b45f7fb255" FOREIGN KEY ("colecao_id") REFERENCES "public"."colecao"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "public"."via_colecao" ADD CONSTRAINT "FK_a2dfca95bbaa165dd76e08500c4" FOREIGN KEY ("via_id") REFERENCES "public"."via"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."via_croqui" ADD CONSTRAINT "FK_286d36a105f0ff1803e06a18929" FOREIGN KEY ("via_id") REFERENCES "public"."via"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "public"."via_croqui" ADD CONSTRAINT "FK_3da8bfbf9595657969910330857" FOREIGN KEY ("croqui_id") REFERENCES "public"."croqui"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."via_croqui" DROP CONSTRAINT "FK_3da8bfbf9595657969910330857"`);
        await queryRunner.query(`ALTER TABLE "public"."via_croqui" DROP CONSTRAINT "FK_286d36a105f0ff1803e06a18929"`);
        await queryRunner.query(`ALTER TABLE "public"."via_colecao" DROP CONSTRAINT "FK_a2dfca95bbaa165dd76e08500c4"`);
        await queryRunner.query(`ALTER TABLE "public"."via_colecao" DROP CONSTRAINT "FK_bee235400d2a1ae74b45f7fb255"`);
        await queryRunner.query(`ALTER TABLE "public"."via" DROP CONSTRAINT "FK_8948e86277ce7a2021bb052fad9"`);
        await queryRunner.query(`ALTER TABLE "public"."via" DROP CONSTRAINT "FK_ff7363cdc4061d3e9e5ea9f5ac2"`);
        await queryRunner.query(`ALTER TABLE "public"."via" DROP CONSTRAINT "FK_c2d51f29d46f20f1085eb67a5f8"`);
        await queryRunner.query(`ALTER TABLE "public"."via" DROP CONSTRAINT "FK_27d650271375fd000f9446a95c5"`);
        await queryRunner.query(`ALTER TABLE "public"."via" DROP CONSTRAINT "FK_4cc16ee9b6d4562a8726f8252a8"`);
        await queryRunner.query(`ALTER TABLE "public"."croqui" DROP CONSTRAINT "FK_fc27b59f75351cacce57840c259"`);
        await queryRunner.query(`ALTER TABLE "public"."croqui" DROP CONSTRAINT "FK_d14e2aecef01c88f2bfb7696c8f"`);
        await queryRunner.query(`ALTER TABLE "public"."imagem" DROP CONSTRAINT "FK_b3829a6e4f0d694aab1e9fce9ac"`);
        await queryRunner.query(`ALTER TABLE "public"."montanha" DROP CONSTRAINT "FK_bb8ee4fa9a0a4b32cd31aa4f0cb"`);
        await queryRunner.query(`ALTER TABLE "public"."montanha" DROP CONSTRAINT "FK_e8728225851e2e4c815ab9e563e"`);
        await queryRunner.query(`ALTER TABLE "public"."face" DROP CONSTRAINT "FK_6b77a77b154821418159b9335c7"`);
        await queryRunner.query(`ALTER TABLE "public"."face" DROP CONSTRAINT "FK_2665c7bce4e6afe69fd617b4e7b"`);
        await queryRunner.query(`ALTER TABLE "public"."colecao" DROP CONSTRAINT "FK_5e71c3d8895ea5c8ff919531621"`);
        await queryRunner.query(`ALTER TABLE "public"."colecao" DROP CONSTRAINT "FK_b9397dc23a3d8a68cf52fef3416"`);
        await queryRunner.query(`ALTER TABLE "public"."usuario" DROP CONSTRAINT "FK_35aa0d34a013e3514205d4b24f7"`);
        await queryRunner.query(`ALTER TABLE "public"."usuario" DROP CONSTRAINT "FK_27572483c5d4289d5a5aaa6aa11"`);
        await queryRunner.query(`ALTER TABLE "public"."escalada" DROP CONSTRAINT "FK_4ca5140f3861383beb507fbe786"`);
        await queryRunner.query(`ALTER TABLE "public"."escalada" DROP CONSTRAINT "FK_a8849d6c35436965bfe9df93c2b"`);
        await queryRunner.query(`ALTER TABLE "public"."participante" DROP CONSTRAINT "FK_353d337b2cdb461857c443e0b5c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3da8bfbf959565796991033085"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_286d36a105f0ff1803e06a1892"`);
        await queryRunner.query(`DROP TABLE "public"."via_croqui"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a2dfca95bbaa165dd76e08500c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bee235400d2a1ae74b45f7fb25"`);
        await queryRunner.query(`DROP TABLE "public"."via_colecao"`);
        await queryRunner.query(`DROP TABLE "public"."via"`);
        await queryRunner.query(`DROP TABLE "public"."croqui"`);
        await queryRunner.query(`DROP TABLE "public"."fonte"`);
        await queryRunner.query(`DROP TABLE "public"."imagem"`);
        await queryRunner.query(`DROP TABLE "public"."montanha"`);
        await queryRunner.query(`DROP TABLE "public"."face"`);
        await queryRunner.query(`DROP TABLE "public"."colecao"`);
        await queryRunner.query(`DROP TABLE "public"."usuario"`);
        await queryRunner.query(`DROP TABLE "public"."escalada"`);
        await queryRunner.query(`DROP TABLE "public"."participante"`);
    }

}
