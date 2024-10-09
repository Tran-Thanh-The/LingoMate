import React from 'react';
import Banner from './components/banner/Banner';
import ListCourses from './components/list-courses/ListCourses';
import ExcellentMember from './components/excellent-member/ExcellentMember';
import AdditionalInfo from './components/additional-info/AdditionalInfo';

const ListCourse = () => {
  return (
    <>
      <Banner />
      <ListCourses />
      <ExcellentMember />
      <AdditionalInfo />
    </>
  );
};

export default ListCourse;
