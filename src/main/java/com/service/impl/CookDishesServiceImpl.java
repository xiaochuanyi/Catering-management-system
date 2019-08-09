package com.service.impl;

import com.dao.CookDishesDao;
import com.pojo.CookDishes;
import com.service.CookDishesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 展示给厨师的已点菜品名单的service
 */
@Service
public class CookDishesServiceImpl implements CookDishesService {
    @Autowired
    private CookDishesDao cookDishesDao;
    @Override
    public void deleteAllDishes() {
        cookDishesDao.deleteAllDishes();
    }

    @Override
    public List<CookDishes> selectAllDishes() {
        return cookDishesDao.selectAllDishes();
    }

    @Override
    public void insertDishes(CookDishes cookDishes) {
        cookDishesDao.insertDishes(cookDishes);
    }
}
