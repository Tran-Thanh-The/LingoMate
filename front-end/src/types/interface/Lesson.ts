import { LessonTypes } from '../enum/LessonType';
export interface LessonResponse {
  id: string;
  title: string;
  lessonType: LessonTypes;
  sections?: number;
  totalSections?: number;
  stars?: number;
  totalStars?: number;
}
export interface LessonRequest {
  title?: string;
  content?: string;
  videoUrl?: string;
  lessonType?: LessonTypes;
}
