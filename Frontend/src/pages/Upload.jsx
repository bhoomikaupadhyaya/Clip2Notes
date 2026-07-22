import { useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  FaCloudUploadAlt,
  FaFileVideo,
  FaTrash,
  FaUpload,
} from "react-icons/fa";

import MainLayout from "../components/MainLayout";

function Upload() {

  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);

  const [progress, setProgress] = useState(0);

  const [uploading, setUploading] = useState(false);

  // ------------------------------

  const handleBrowse = () => {
    fileInputRef.current.click();
  };

  // ------------------------------

  const handleFile = (file) => {

    if (!file) return;

    if (!file.type.startsWith("video/")) {
      alert("Please upload a video.");
      return;
    }

    setSelectedFile(file);

    setProgress(0);

  };

  // ------------------------------

  const handleChange = (e) => {

    handleFile(e.target.files[0]);

  };

  // ------------------------------

  const handleDrop = (e) => {

    e.preventDefault();

    handleFile(e.dataTransfer.files[0]);

  };

  // ------------------------------

  const handleDragOver = (e) => {

    e.preventDefault();

  };

  // ------------------------------

  const removeFile = () => {

    setSelectedFile(null);

    setProgress(0);

    setUploading(false);

  };

  // ------------------------------

  const startUpload = async () => {

    if (!selectedFile) return;

    setUploading(true);

    let value = 0;

    const interval = setInterval(() => {

      value += 10;

      setProgress(value);

      if (value >= 100) {

        clearInterval(interval);

        setUploading(false);

      }

    }, 250);

  };

  return (

    <MainLayout>

      <div className="space-y-10">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >

          <h1 className="text-4xl font-bold">

            Upload Video

          </h1>

          <p className="mt-3 text-slate-400">

            Upload lectures, YouTube videos or
            meeting recordings.

          </p>

        </motion.div>
                {/* Upload Area */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="rounded-3xl border-2 border-dashed border-slate-700 bg-slate-900 p-12 text-center transition hover:border-blue-500"
        >

          <FaCloudUploadAlt
            className="mx-auto text-blue-500"
            size={90}
          />

          <h2 className="mt-6 text-3xl font-bold">

            Drag & Drop your Video

          </h2>

          <p className="mt-4 text-slate-400">

            Upload your lecture, meeting recording,
            tutorial or YouTube download.

          </p>

          <button
            onClick={handleBrowse}
            className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
          >

            Browse Files

          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            hidden
            onChange={handleChange}
          />

        </motion.div>

        {/* Supported Formats */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
        >

          <h2 className="mb-6 text-2xl font-semibold">

            Supported Formats

          </h2>

          <div className="flex flex-wrap gap-4">

            {[
              "MP4",
              "AVI",
              "MOV",
              "MKV",
              "WEBM",
            ].map((format) => (

              <div
                key={format}
                className="rounded-full bg-blue-500/20 px-5 py-3 text-blue-400"
              >

                {format}

              </div>

            ))}

          </div>

          <p className="mt-6 text-slate-400">

            Maximum Upload Size:
            <span className="font-semibold text-white">
              {" "}
              2 GB
            </span>

          </p>

        </motion.div>

        {/* Selected File */}

        {selectedFile && (

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
          >

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex items-center gap-5">

                <div className="rounded-xl bg-blue-500 p-4">

                  <FaFileVideo
                    className="text-white"
                    size={28}
                  />

                </div>

                <div>

                  <h3 className="text-xl font-semibold">

                    {selectedFile.name}

                  </h3>

                  <p className="mt-2 text-slate-400">

                    {(selectedFile.size / (1024 * 1024)).toFixed(2)}
                    {" "}MB

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <button
                  onClick={startUpload}
                  disabled={uploading}
                  className="flex items-center gap-3 rounded-xl bg-green-600 px-6 py-3 font-semibold transition hover:bg-green-700 disabled:opacity-70"
                >

                  <FaUpload />

                  {uploading
                    ? "Uploading..."
                    : "Start Upload"}

                </button>

                <button
                  onClick={removeFile}
                  className="rounded-xl bg-red-600 p-4 transition hover:bg-red-700"
                >

                  <FaTrash />

                </button>

              </div>

            </div>
                          {/* Upload Progress */}

              {uploading || progress > 0 ? (
                <div className="mt-8">

                  <div className="mb-2 flex items-center justify-between">

                    <span className="text-slate-300">
                      Upload Progress
                    </span>

                    <span className="font-semibold text-blue-400">
                      {progress}%
                    </span>

                  </div>

                  <div className="h-3 w-full rounded-full bg-slate-700">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                      className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />

                  </div>

                </div>
              ) : null}

              {/* Upload Status */}

              {progress === 100 && !uploading && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="mt-8 rounded-xl border border-green-500 bg-green-500/10 p-5 text-center"
                >

                  <h3 className="text-xl font-bold text-green-400">
                    ✅ Upload Completed Successfully
                  </h3>

                  <p className="mt-2 text-slate-300">
                    Your video is ready for AI processing.
                  </p>

                </motion.div>
              )}

            </div>

          </motion.div>

        )}

      </div>

    </MainLayout>

  );
}

export default Upload;