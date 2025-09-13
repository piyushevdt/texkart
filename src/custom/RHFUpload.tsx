import React, { useCallback, useEffect, useMemo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Box, TextField, IconButton, Avatar, Tooltip } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { Icon } from "@iconify/react";

interface FileWithPreview extends File {
  preview?: string;
}

interface RHFUploadProps {
  name: string;
  label?: string;
  multiple?: boolean;
  placeholder?: string;
}

const RHFUpload: React.FC<RHFUploadProps> = ({ 
  name, 
  label, 
  multiple = true, 
  placeholder = "Upload files...", 
  ...other 
}) => {
  const { control, setValue, watch } = useFormContext();
  const watchedFiles = watch(name);
  
  const files = useMemo(() => watchedFiles || [], [watchedFiles]);
  
  useEffect(() => {
    if (!Array.isArray(files)) {
      setValue(name, []);
    }
  }, [files, name, setValue]);

  const addFiles = useCallback((newFiles: FileWithPreview[]) => {
    if (multiple) {
      setValue(
        name,
        [
          ...files,
          ...newFiles
        ],
        { shouldValidate: true }
      );
    } else {
      setValue(
        name,
        [...newFiles].slice(0, 1),
        { shouldValidate: true }
      );
    }
  }, [multiple, files, name, setValue]);

  const removeFile = useCallback((inputFile: FileWithPreview) => {
    const filtered = files.filter((file: FileWithPreview) => file !== inputFile);
    
    if (inputFile.preview) {
      URL.revokeObjectURL(inputFile.preview);
    }
    
    setValue(name, filtered, { shouldValidate: true });
  }, [files, name, setValue]);

  const removeAllFiles = useCallback(() => {
    files.forEach((file: FileWithPreview) => {
      if (file.preview) URL.revokeObjectURL(file.preview);
    });
    
    setValue(name, [], { shouldValidate: true });
  }, [files, name, setValue]);

  const handleDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file: File) => {
      console.log("File type:", file.type); // Debug file type
      return Object.assign(file, {
        preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
      });
    });

    addFiles(newFiles);
  }, [addFiles]);

  useEffect(() => {
    return () => {
      files.forEach((file: FileWithPreview) => {
        if (file.preview) URL.revokeObjectURL(file.preview);
      });
    };
  }, [files]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ fieldState: { error } }) => (
        <Box width="100%">
          <DropzoneArea
            onDrop={handleDrop}
            multiple={multiple}
            placeholder={placeholder}
            label={label}
            files={files}
            error={!!error}
            helperText={error?.message}
            removeAllFiles={removeAllFiles}
            {...other}
          />

          {files.length > 0 && (
            <Box 
              display="flex" 
              flexWrap="wrap" 
              gap={1} 
              mt={1} 
              p={1}
              sx={{
                border: "1px solid #FCA120",
                borderRadius: "8px",
                backgroundColor: "white",
                width: "fit-content",
                maxWidth: "100%",
              }}
            >
              {files.map((file: FileWithPreview, index: number) => (
                <Box
                  key={index}
                  position="relative"
                  sx={{
                    "&:hover .delete-button": {
                      opacity: 1,
                    },
                  }}
                >
                  {file.type?.startsWith('image/') && file.preview ? (
                    <Tooltip title={file.name}>
                      <Avatar
                        src={file.preview}
                        alt={file.name}
                        variant="rounded"
                        sx={{ 
                          width: 60, 
                          height: 60,
                          border: "1px solid #ddd",
                        }}
                      />
                    </Tooltip>
                  ) : (
                    <Tooltip title={file.name}>
                      <Avatar
                        variant="rounded"
                        sx={{ 
                          width: 60, 
                          height: 60,
                          bgcolor: "#f5f5f5",
                          border: "1px solid #ddd",
                        }}
                      >
                        <Icon icon="mdi:file-outline" width="24" />
                      </Avatar>
                    </Tooltip>
                  )}
                  <IconButton
                    size="small"
                    className="delete-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(file);
                    }}
                    sx={{
                      position: "absolute",
                      top: -8,
                      right: -8,
                      opacity: 0,
                      transition: "opacity 0.2s",
                      bgcolor: "white",
                      border: "1px solid #ddd",
                      p: "2px",
                      "&:hover": {
                        bgcolor: "#f5f5f5",
                      },
                    }}
                  >
                    <Icon icon="mdi:close" width="16" />
                  </IconButton>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      )}
    />
  );
};

interface DropzoneAreaProps {
  onDrop: (acceptedFiles: File[]) => void;
  multiple: boolean;
  placeholder: string;
  label?: string;
  files: FileWithPreview[];
  error: boolean;
  helperText?: string;
  removeAllFiles: () => void;
}

const DropzoneArea: React.FC<DropzoneAreaProps> = ({
  onDrop,
  multiple,
  placeholder,
  label,
  files,
  error,
  helperText,
  removeAllFiles,
  ...other
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/png": [".png"], 
    },
    multiple,
  });

  return (
    <Box width="100%" {...getRootProps()} sx={{ cursor: "pointer", position: "relative" }}>
      <input {...getInputProps()} />
      <TextField
        fullWidth
        label={label}
        placeholder={placeholder}
        variant="outlined"
        value={files.length > 0 ? 
          files.map((file: FileWithPreview) => file.name).join(", ") : 
          ""
        }
        error={error}
        helperText={helperText}
        InputProps={{
          readOnly: true,
          startAdornment: (
            <Icon icon="mdi:cloud-upload-outline" width="24" color="#FCA120" />
          ),
          endAdornment: files.length > 0 && (
            <Tooltip title="Clear all files">
              <IconButton 
                onClick={(e) => {
                  e.stopPropagation();
                  removeAllFiles();
                }}
                color="error"
                size="small"
                sx={{ ml: 1 }}
              >
                <Icon icon="mdi:trash-can-outline" width="18" />
              </IconButton>
            </Tooltip>
          ),
        }}
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          "& fieldset": {
            borderRadius: "8px",
            borderColor: "#FCA120",
          },
          "& .MuiInputBase-input": { cursor: "pointer" },
        }}
        {...other}
      />
    </Box>
  );
};

export default RHFUpload;