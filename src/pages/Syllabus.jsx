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
      alert('🚫 Please upload a valid PDF file.');
    }
  };

  return (
    <main className="flex  bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 min-h-screen text-white font-sans bg-[url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg')] bg-fixed bg-cover bg-center overflow-hidden">
      <SideBar />
      <section className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 w-full max-w-3xl p-6 space-y-6">
          <header>
            <h2 className="text-3xl font-extrabold text-white mb-4">📚 Upload Syllabus PDF</h2>
          </header>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Select PDF File</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileUpload}
              className="w-full text-sm font-medium text-gray-100 bg-gray-800 rounded-lg border border-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 file:cursor-pointer file:bg-indigo-600 file:text-white file:rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Syllabus Description</label>
            <textarea
              placeholder="e.g. Biology Form 2, Unit 1: Classification of Living Organisms"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {pdfFile && (
            <div className="space-y-1 ">
              <h3 className="text-lg font-semibold text-white">📄 PDF Preview</h3>
              <div className="max-h-[500px] overflow-hidden rounded-lg border border-gray-700 shadow-lg">
                <iframe
                  src={URL.createObjectURL(pdfFile)}
                  title="Preview"
                  className="w-full h-[480px]"
                />
              </div>
              <div className="text-center">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-5 rounded-lg transition-all duration-200 mt-2 shadow-md">
                  Upload Document
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Syllabus;
