import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PracticeExercisesService } from './practice-exercises.service';
import { CreatePracticeExerciseDto } from './dto/create-practice-exercise.dto';
import { UpdatePracticeExerciseDto } from './dto/update-practice-exercise.dto';

@Controller('practice-exercises')
export class PracticeExercisesController {
  constructor(private readonly practiceExercisesService: PracticeExercisesService) {}

  @Post()
  create(@Body() createPracticeExerciseDto: CreatePracticeExerciseDto) {
    return this.practiceExercisesService.create(createPracticeExerciseDto);
  }

  @Get()
  findAll() {
    return this.practiceExercisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.practiceExercisesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePracticeExerciseDto: UpdatePracticeExerciseDto) {
    return this.practiceExercisesService.update(+id, updatePracticeExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.practiceExercisesService.remove(+id);
  }
}
