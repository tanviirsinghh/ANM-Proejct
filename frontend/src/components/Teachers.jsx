import React from 'react';
import Teacher from "./Teacher";

const Teachers = ({ tutor }) => {
  return (
    <div className='mt-20 grid grid-cols-1 gap-8'> 
        {
            tutor.map((teacher) => (
                <div key={teacher.id} className="w-full">
                    <Teacher {...teacher} />
                </div>
            ))
        }
    </div>
  );
};

export default Teachers;
