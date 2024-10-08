import React from 'react';
import Banner from './components/banner/Banner';
import ListCourses from './components/list-courses/ListCourses';
import ExcellentMember from './components/excellent-member/ExcellentMember';

const ListCourse = () => {
  return (
    <>
      <Banner />
      <ListCourses />
      <ExcellentMember />
    </>
  );
};

export default ListCourse;
