import CourseDetail from '@/features/dashboard/features/courses/features/course-detail/CourseDetail';
import CourseList from '@/features/dashboard/features/courses/features/course-list/CourseList';
import CreateUpdateCourse from '@/features/dashboard/features/courses/features/create-update-course/CreateUpdateCourse';
import { Navigate, Route, Routes } from 'react-router-dom';
import CreateUpdateLesson from './features/course-detail/components/create-lesson/CreateLesson';

export default function CourseRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="course-list" replace />} />
      <Route path="/course-list" element={<CourseList />} />
      <Route path="/create" element={<CreateUpdateCourse />} />
      <Route path="/update/:id" element={<CreateUpdateCourse />} />
      <Route path="/:idCourse" element={<CourseDetail />} />
      <Route path="/:idCourse/create-lesson" element={<CreateUpdateLesson />} />
      <Route
        path="/:idCourse/edit-lesson/:selectedLessonId"
        element={<CreateUpdateLesson />}
      />
    </Routes>
  );
}
