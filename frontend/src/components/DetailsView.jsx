import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsView = ({ teachers }) => {
  const { id } = useParams();
  const teacher = teachers.find(teacher => teacher.id === parseInt(id));

  if (!teacher) return <div>Teacher not found</div>;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4 ">
      <div className="p-4  ">
        <img src={teacher.imageUrl} className="w-full h-auto" alt={teacher.name} />
        <h1 className="text-2xl font-bold my-2">{teacher.name}</h1>
        <p className="text-gray-700 mb-2">{teacher.Qualification}</p>
        <p className="text-gray-700 mb-2">{teacher.Address}</p>
        <p className="text-gray-700 mb-2">{teacher.Contact}</p>
      </div>
    </div>
  );
};

export default DetailsView;
