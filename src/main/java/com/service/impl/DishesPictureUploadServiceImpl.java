package com.service.impl;

import com.service.DishesPictureUploadService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 * 上传图片的service
 */
import java.io.File;
@Service
public class DishesPictureUploadServiceImpl implements DishesPictureUploadService {
    public void dishesPictureUpload(MultipartFile[] file){
       try {
           String filename = file[0].getOriginalFilename();// 文件名
           String path = "C:\\课用软件\\workplace\\RestaurantSystem\\src\\main\\webapp\\WEB-INF\\img\\"+ filename;
           File picture = new File(path);
           file[0].transferTo(picture);
       }catch (Exception e){
           e.printStackTrace();
       }
    }
}
