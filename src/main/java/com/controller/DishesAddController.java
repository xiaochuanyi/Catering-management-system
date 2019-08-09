package com.controller;

import com.pojo.Dishes;
import com.pojo.ResultMap;
import com.service.DishesAddService;
import com.service.DishesPictureUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

/**
 * 添加菜品的controller
 */
@Controller
@RequestMapping("/add")
@ResponseBody
public class DishesAddController {
    @Autowired
    private DishesPictureUploadService dishesPictureUploadService;
    @Autowired
    private DishesAddService dishesAddService;
    @RequestMapping(value = "/pictureAdd",method = RequestMethod.POST)
    public ResultMap pictureAdd(@RequestParam("photo") MultipartFile[] file,@RequestParam("dishesName") String dishesName,
                                @RequestParam("dishesPrice") String dishesPrice,@RequestParam("dishesDescribe") String dishesDescribe){
        ResultMap map = new ResultMap();
        try {
            Dishes dishes = new Dishes();
            String filename = file[0].getOriginalFilename();// 文件名
            //存储到数据库的图片的url地址
            String pictureUrl = "../img/" + filename;
            //封装存储进数据库的菜品类
            dishes.setDishesName(dishesName);
            dishes.setDishesPrice(dishesPrice);
            dishes.setDishesDescription(dishesDescribe);
            dishes.setPictureUrl(pictureUrl);
            //图片上传到本地
            dishesPictureUploadService.dishesPictureUpload(file);
            //将菜品存入数据库
            int result = dishesAddService.dishesAdd(dishes);
            if(result == 0){
                map.setStatus("101");
                map.setMsg("插入失败");
            }else {
                map.setMsg("success");
                map.setStatus("200");
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return map;
    }
}
