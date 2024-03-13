import React, { useState } from 'react';

const RightBody = () => {
    const [fileName, setFileName] = useState('No file chosen');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('No file chosen');
    }
  };
  return (
    <div>
        <div className='right flex flex-col justify-center items-center gap-6'>
            <div>Upload Job Description</div>
            <div>Select Job Description file in (Doc/Docx/PDF format only)</div>
            
          <div className="file-upload-box flex flex-row items-center justify-center gap-2 py-3 px-8 w-full border-[1px] rounded">
            <label htmlFor = 'fileInput' className="text-[#5F5D62] font-bold shadow-md rounded-lg bg-white px-2 cursor-pointer p-1">
            Choose a File
              <input
              type="file"
              id="fileInput"
              className="hidden "
              onChange={handleFileChange}
              />
            </label>
            <div className="file-name">{fileName}</div>
          </div>
          <button className='gap-2 py-3 px-8 w-full border-[1px] '>START AI PARSING</button>
          <div>
            <hr className="border-t border-gray-400 mb-2"/>
            <div className="text-center">or</div>
          </div>
          <button className='bg-black text-white gap-2 py-3 px-8 w-[90%] border-[1px] rounded-lg'>USE AI TO CREATE JOB DESCRIPTION</button>
        </div>
          
    </div>
  )
}

export default RightBody