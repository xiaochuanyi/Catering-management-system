package com.controller;

import com.pojo.Dishes;
import com.pojo.DishesWithNewName;
import com.pojo.ResultMap;
import com.service.DishesPictureUploadService;
import com.service.DishesSelectService;
import com.service.DishesUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 菜品修改的controller
 */
@Controller
@RequestMapping("/update")
public class DishesUpdateController {
    @Autowired
    private DishesPictureUploadService dishesPictureUploadService;
    @Autowired
    private DishesUpdateService dishesUpdateService;
    @Autowired
    private DishesSelectService dishesSelectService;
    @RequestMapping("/dishesUpdate")
    @ResponseBody
    public ResultMap dishesUpdate(@RequestParam("photo") MultipartFile[] file, @RequestParam("dishesName") String dishesName,
                                  @RequestParam("dishesPrice") String dishesPrice, @RequestParam("dishesDescribe") String dishesDescribe,
                                  @RequestParam("dishesWithNewName") String dishesNewName){
        DishesWithNewName dishes = new DishesWithNewName();
        String filename = file[0].getOriginalFilename();// 文件名
        //存储到数据库的图片的url地址
        String pictureUrl = "../img/" + filename;
        //封装存储进数据库的菜品类
        dishes.setBeforeDishesName(dishesName);
        dishes.setDishesPrice(dishesPrice);
        dishes.setDishesDescription(dishesDescribe);
        dishes.setPictureUrl(pictureUrl);
        dishes.setDishesName(dishesNewName);
        System.out.println(dishes.toString());
        //图片上传到本地
        dishesPictureUploadService.dishesPictureUpload(file);
        ResultMap resultMap = new ResultMap();
        int result = dishesUpdateService.dishesUpdate(dishes);
        if(result == 0){
            resultMap.setStatus("101");
            resultMap.setMsg("更新数据库失败");
        }else {
            resultMap.setStatus("200");
            resultMap.setMsg("success");
        }
        return  resultMap;
    }

    /**
     * 为跳转页面存储修改数据
     * @param request
     * @param response
     * @return
     */
    @RequestMapping("/toSetCookie")
    @ResponseBody
    public ResultMap toSetCookie(HttpServletRequest request, HttpServletResponse response){
        //获取id
        String id = dishesSelectService.dishesSelectId(request.getParameter("dishesName"));
        Cookie cookie = new Cookie("dishes",id);
        cookie.setPath("/");
        response.addCookie(cookie);
        ResultMap map = new ResultMap();
        map.setStatus("200");
        return map;
    }

    @RequestMapping("/toUpdate")
    public String toUpdate(){
        return "changeDishes";
    }

    /**
     * 展示修改菜品的原来的数据
     * @param id
     * @return
     */
    @RequestMapping("/displayData")
    @ResponseBody
    public Dishes displayData(String id){
        Dishes dishes = dishesSelectService.dishesSelectWithId(id);
        return dishes;
    }


    @RequestMapping("/test")
    public String test(){
        return "test";
    }

}
