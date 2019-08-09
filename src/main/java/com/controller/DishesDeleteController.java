package com.controller;

import com.pojo.ResultMap;
import com.service.DishesDeleteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 删除菜品的controller
 */
@Controller
@RequestMapping("/delete")
public class DishesDeleteController {
    @Autowired
    private DishesDeleteService dishesDeleteService;
    @RequestMapping("/dishesDelete")
    @ResponseBody
    public ResultMap dishesDelete(String dishesName){
        ResultMap resultMap = new ResultMap();
        int result = dishesDeleteService.dishesDelete(dishesName);
        if(result == 0){
            resultMap.setStatus("101");
            resultMap.setMsg("操作数据库失败");
        }else {
            resultMap.setStatus("200");
            resultMap.setMsg("success");
        }
        return resultMap;
    }
}
