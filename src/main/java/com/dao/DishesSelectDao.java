package com.dao;

import com.pojo.Dishes;

import java.util.List;

/**
 * 查询菜单菜品
 */
public interface DishesSelectDao {
    //查询所有菜品
    List<Dishes> dishesSelect();

    //查询分页菜品，传入的值应该是当前页面数 * 5
    List<Dishes> dishesSelectWithPage(int page);
    //查询单个菜品
    Dishes dishesSelectOne(String dishesName);
    //根据菜品名字查询id
    String dishesSelectId(String dishesName);
    //根据id 查询菜品
    Dishes dishesSelectWithId(String id);
}
