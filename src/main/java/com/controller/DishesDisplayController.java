package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 菜品展示的，客户点单的controller
 *
 */
@Controller
@RequestMapping("/display")
public class DishesDisplayController {
    @RequestMapping("/dishesDisplay")
    public String dishesDisplay(){
        return "dishesDisplay";
    }


    @RequestMapping("/cartDishesDisplay")
    public String cartDishesDisplay(){
        return "cartDishesDisplay";
    }

    @RequestMapping("/test")
    public String test(){
        return "test";
    }
}
