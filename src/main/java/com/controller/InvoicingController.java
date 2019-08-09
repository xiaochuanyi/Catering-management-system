package com.controller;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pojo.CookDishes;
import com.pojo.ResultMap;
import com.service.CookDishesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 提交已点的菜品到数据库用于厨房菜单展示的controller
 */
@Controller
@RequestMapping("/invoicing")
public class InvoicingController {
    @Autowired
    private CookDishesService cookDishesService;
    @RequestMapping("/toInvoicing")
    @ResponseBody
    public ResultMap invoicing(@RequestBody String str){
        ResultMap map = new ResultMap();
       try {
           //封装前端传过来的json数组
           ObjectMapper objectMapper = new ObjectMapper();
           JavaType javaType = objectMapper.getTypeFactory().constructParametricType(List.class,CookDishes.class);
           List<CookDishes> list = objectMapper.readValue(str,javaType);
           for (CookDishes cookDishes:list) {
               cookDishesService.insertDishes(cookDishes);
           }
       }catch (Exception e){
           e.printStackTrace();
           map.setStatus("300");
           map.setMsg("操作数据库失误");
       }
        map.setStatus("200");
       map.setMsg("点餐成功");
        return map;
    }
    @RequestMapping("/toCartDishesDisplay")
    public String toCartDishesDisplay(){
        return "cartDishesDisplay";
    }

}
