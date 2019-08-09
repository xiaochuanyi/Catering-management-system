package com.service;

import com.pojo.Dishes;

import java.util.List;

public interface DishesSelectService {
    //查询所有菜品
    List<Dishes> dishesSelect();

    //查询分页菜品
    List<Dishes> dishesSelectWithPage(int page);
    //根据菜名查询单个菜品
    Dishes dishesSelectOne(String dishesName);
    //根据菜名查询id
    String dishesSelectId(String dishesName);
    //根据id查询菜品
    Dishes dishesSelectWithId(String id);
}
