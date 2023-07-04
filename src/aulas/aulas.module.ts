import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { AulasController } from './aulas.controller';
import { Alumno } from './entities/alumno.entity';
import { AlumnoAsignatura } from './entities/alumno-asignatura.entity';
import { Asignatura } from './entities/asignatura.entity';
import { AulaAsignatura } from './entities/asignatura-aula.entity';
import { Curso } from './entities/curso.entity';
import { Profesor } from './entities/profesor.entity';
import { Aula } from './entities/aula.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Alumno,
      AlumnoAsignatura,
      Asignatura,
      AulaAsignatura,
      Curso,
      Profesor,
      Aula,
    ]),
  ],
  controllers: [AulasController],
  providers: [AulasService],
})
export class AulasModule {}
