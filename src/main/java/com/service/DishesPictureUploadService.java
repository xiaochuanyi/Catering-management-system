package com.service;

import org.springframework.web.multipart.MultipartFile;

public interface DishesPictureUploadService {
     void dishesPictureUpload(MultipartFile[] file);
}
