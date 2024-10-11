import { Injectable } from '@nestjs/common';
import { CreatePracticeExerciseDto } from './dto/create-practice-exercise.dto';
import { UpdatePracticeExerciseDto } from './dto/update-practice-exercise.dto';

@Injectable()
export class PracticeExercisesService {
  create(createPracticeExerciseDto: CreatePracticeExerciseDto) {
    return 'This action adds a new practiceExercise';
  }

  findAll() {
    return `This action returns all practiceExercises`;
  }

  findOne(id: number) {
    return `This action returns a #${id} practiceExercise`;
  }

  update(id: number, updatePracticeExerciseDto: UpdatePracticeExerciseDto) {
    return `This action updates a #${id} practiceExercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} practiceExercise`;
  }
}
