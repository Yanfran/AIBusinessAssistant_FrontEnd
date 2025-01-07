import React from 'react';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

const Breadcrumbs: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-5">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="#" icon={HiHome}>
          Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Overview</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;