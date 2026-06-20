"use client";

import React, { useState, useRef } from "react";
import { Upload, X, Loader2, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CloudinaryUploadProps {
  onUploadSuccess: (urls: string[]) => void;
  disabled?: boolean;
  maxFilesPerUpload: number;
}

export function CloudinaryUpload({ onUploadSuccess, disabled = false, maxFilesPerUpload }: CloudinaryUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<{ url: string; file: File }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setError(null);

    const currentCount = selectedFiles.length;
    if (currentCount + files.length > maxFilesPerUpload) {
      alert(`You can only select up to ${maxFilesPerUpload} total image(s) at a time. You already have ${currentCount} ready to upload.`);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // Validate size (5MB = 5 * 1024 * 1024 bytes)
    const MAX_SIZE = 5 * 1024 * 1024;
    const validFiles: { url: string; file: File }[] = [];

    for (const file of files) {
      if (file.size > MAX_SIZE) {
        alert(`File ${file.name} exceeds the 5MB limit and was skipped!`);
        continue;
      }
      validFiles.push({
        url: URL.createObjectURL(file),
        file,
      });
    }

    setSelectedFiles((prev) => [...prev, ...validFiles]);
    
    // Clear the input so selecting the same file again works
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setError("Please select at least one image first.");
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      const uploadPromises = selectedFiles.map(async ({ file }) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ml_default");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dtsh613l2/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to upload ${file.name}`);
        }

        const data = await response.json();
        return data.secure_url;
      });

      const uploadedUrls = await Promise.all(uploadPromises);

      // Clear selection
      setSelectedFiles([]);
      
      // Pass the urls to parent
      onUploadSuccess(uploadedUrls);
    } catch (err: any) {
      setError(err.message || "An error occurred during upload.");
    } finally {
      setIsUploading(false);
    }
  };

  const removeFile = (indexToRemove: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== indexToRemove));
  };

  const canAddMore = selectedFiles.length < maxFilesPerUpload;

  return (
    <div className="flex flex-col gap-4 p-4 border border-zinc-200 rounded-xl bg-zinc-50 mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <input
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading || disabled || !canAddMore}
            className="bg-white hover:bg-zinc-100"
          >
            <ImagePlus className="mr-2 h-4 w-4" />
            Choose Files
          </Button>
          <span className="text-sm text-zinc-500 font-medium">
            {selectedFiles.length} / {maxFilesPerUpload} selected
          </span>
        </div>

        <Button
          onClick={handleUpload}
          disabled={isUploading || disabled || selectedFiles.length === 0}
          className="w-full sm:w-auto"
        >
          {isUploading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Upload Photos
            </>
          )}
        </Button>
      </div>
      
      {error && <p className="text-sm text-red-500">{error}</p>}
      
      {selectedFiles.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-2">
          {selectedFiles.map((sf, index) => (
            <div key={index} className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-zinc-200 group bg-white shadow-sm">
              <img src={sf.url} alt="Preview" className="object-cover w-full h-full transition-transform group-hover:scale-105" />
              <button
                onClick={() => removeFile(index)}
                className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all hover:bg-black hover:scale-110"
                disabled={isUploading}
                title="Remove"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
