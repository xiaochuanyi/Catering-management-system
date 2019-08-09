package com.service;

import com.pojo.CookDishes;

import java.util.List;

public interface CookDishesService {
    //删除所有菜品
    public void deleteAllDishes();

    //展示已点的菜品

    public List<CookDishes> selectAllDishes();

    //添加菜品

    public void insertDishes(CookDishes cookDishes);
}
