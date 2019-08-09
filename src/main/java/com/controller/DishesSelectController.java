package com.controller;


import com.pojo.Dishes;
import com.pojo.DishesResultMap;
import com.service.DishesSelectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/select")
public class DishesSelectController {
    @Autowired
    private DishesSelectService dishesSelectService;
    /**
     * 返回菜单所有菜品
     * @return
     */
    @RequestMapping("/dishesSelect")
    @ResponseBody
    public DishesResultMap getDishesSelect(){
        DishesResultMap map = new DishesResultMap();
        try {
            List<Dishes> list = dishesSelectService.dishesSelect();
            map.setStatus("200");
            map.setMsg(list);
        }catch (Exception e){
            map.setStatus("303");
        }
        return map;
    }
    /**
     * 返回当前分页菜品
     */
    @RequestMapping("/dishesSelectWithPage")
    @ResponseBody
    public DishesResultMap getDishesSelectWithPage(int page){
        DishesResultMap map = new DishesResultMap();
        try {
            List<Dishes> list = dishesSelectService.dishesSelectWithPage(page);
            map.setStatus("200");
            map.setMsg(list);
        }catch (Exception e){
            map.setStatus("303");
            e.printStackTrace();
        }
        return map;
    }
    /**
     * 跳转菜品展示界面
     * @return
     */
    @RequestMapping("/display")
    public String dishesDisplay(){
        return "dishesManage";
    }

    /**
     * 跳转菜品添加界面
     */
    @RequestMapping("/add")
    public String dishesAdd(){
        return "dishesAdd";
    }
}
