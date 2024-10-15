import FeatureHeader from '@/features/dashboard/components/feature-header/FeatureHeader';
import FeatureLayout from '@/features/dashboard/layouts/feature-layout/FeatureLayout';
import React from 'react';

const CreateUpdateLesson = () => {
  return (
    <FeatureLayout>
      <FeatureHeader title="Tạo bài học" backPath="/dashboard/courses/:id" />
    </FeatureLayout>
  );
};

export default CreateUpdateLesson;
