import React, { useState } from 'react';
import SideBar from '../components/SideBar';

const Syllabus = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    } else {
      alert('Please upload a valid PDF file');
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <main className="flex bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 min-h-screen text-white font-sans">
      <SideBar />
      <div className="flex-1 p-10 my-auto mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">📚 Upload Syllabus Pdf Here</h2>

          <label className="block text-sm font-medium mb-2 text-gray-300">Select PDF File</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileUpload}
            className="block w-full text-sm font-bold text-gray-200 bg-gray-800 rounded-lg border border-gray-700 p-2 mb-6 focus:outline-none focus:ring focus:ring-indigo-500"
          />

          <label className="block text-sm font-medium mb-2 text-gray-300">Syllabus Description</label>
          <textarea
            placeholder="Write something helpful..."
            value={description}
            onChange={handleDescriptionChange}
            rows={5}
            className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 mb-6 focus:outline-none focus:ring focus:ring-indigo-500 resize-none"
          />

          {pdfFile && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">📄 PDF Preview</h3>
              <iframe
                src={URL.createObjectURL(pdfFile)}
                title="Syllabus PDF"
                className="w-full h-[480px] rounded-md border border-gray-700 shadow-md"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Syllabus;
