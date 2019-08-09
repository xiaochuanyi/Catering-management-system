package com.dao;

import com.pojo.DishesWithNewName;

/**
 * 修改菜品的dao
 */
public interface DishesUpdateDao {
    int dishesUpdate(DishesWithNewName dishesWithNewName);
}
