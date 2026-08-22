import { useRef, useState } from "react";
import "./LandingPage.css";

interface UploadBoxProps {
  onFilesSelected: (files: File[]) => void;
}

export default function UploadBox({
  onFilesSelected
}: UploadBoxProps) {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);


  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const images = Array.from(files).filter(file =>
      file.type.startsWith("image/")
    );

    onFilesSelected(images);
  };


  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    setIsDragging(false);

    handleFiles(event.dataTransfer.files);
  };


  return (
    <div
      className={`upload-box ${isDragging ? "dragging" : ""}`}

      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}

      onDragLeave={() => {
        setIsDragging(false);
      }}

      onDrop={handleDrop}

      onClick={() => fileInputRef.current?.click()}
    >

      <div className="upload-icon">
        🖼️
      </div>


      <h3>
        Drop your images here
      </h3>


      <p>
        or click to browse files
      </p>


      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(e) => handleFiles(e.target.files)}
      />


      <button
        className="btn"
        onClick={(e) => {
          e.stopPropagation();
          fileInputRef.current?.click();
        }}
      >
        Select Images
      </button>


      <small>
        All image formats up to 20MB
      </small>

    </div>
  );
}