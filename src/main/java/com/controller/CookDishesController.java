package com.controller;

import com.pojo.CookDishes;
import com.pojo.ResultMap;
import com.service.CookDishesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 展示给厨师的已点菜品名单的Controller
 */
@Controller
@RequestMapping("/CookDishes")
public class CookDishesController {
    @Autowired
    private CookDishesService cookDishesService;
    @ResponseBody
    @RequestMapping("/CookDishes")
    public List<CookDishes> cookDishesDisplay(){
        List<CookDishes> result = cookDishesService.selectAllDishes();
        //获得返回结果之后删除掉数据库所有菜品,因为一次点菜已经完成
        cookDishesService.deleteAllDishes();
        return result;
    }
    @RequestMapping("/toCookDishesDisplay")
    public String toCookDishesDisplay(){
        return "cookDishesDisplay";
    }

    @RequestMapping("/addCookDishes")
    @ResponseBody
    public ResultMap addCookDishes(List<CookDishes> list){
        ResultMap result = new ResultMap();
       try {
           for (CookDishes cookDishes:list) {
               cookDishesService.insertDishes(cookDishes);
           result.setStatus("200");
           result.setMsg("提交成功");
           }
       }catch (Exception e){
           result.setStatus("101");
           result.setMsg("插入失败");
           e.printStackTrace();
       }
       return result;
    }

}
