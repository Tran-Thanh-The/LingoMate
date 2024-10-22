import { LessonResponse } from './Lesson';

export interface CourseResponse {
  id: string;
  title: string;
  description: string;
  price: number;
  createdAt: Date;
  totalLesson: number;
  completedLesson: number;
  isMyCourse: boolean;
  lessons: LessonResponse[];
}
