import axiosInstance from '@/core/intercepter/Intercepter';

const courseApi = {
  getCategories: () => {
    return axiosInstance.get<any>('/categories');
  },
  getCourses: () => {
    return axiosInstance.get<any>('/courses?page=1&limit=5');
  },
  createCourse: (data: any) => {
    return axiosInstance.post<any>('/courses', data);
  },
  updateCourse: (id: string, data: any) => {
    return axiosInstance.put<any>(`/courses/${id}`, data);
  },
  deleteCourse: (id: string) => {
    return axiosInstance.delete<any>(`/courses/${id}`);
  },
  getCourseById: (id: string) => {
    return axiosInstance.get<any>(`/courses/${id}`);
  },
};

export default courseApi;
