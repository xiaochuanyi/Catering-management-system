package com.dao;

import com.pojo.CookDishes;

import java.util.List;

public interface CookDishesDao {
    void deleteAllDishes();

    List<CookDishes> selectAllDishes();

    void insertDishes(CookDishes cookDishes);
}
