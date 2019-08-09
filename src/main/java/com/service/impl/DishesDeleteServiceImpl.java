package com.service.impl;

import com.dao.DishesDeleteDao;
import com.service.DishesDeleteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 删除菜品的service
 */
@Service
public class DishesDeleteServiceImpl implements DishesDeleteService {
    @Autowired
    private DishesDeleteDao dishesDeleteDao;
    @Override
    public int dishesDelete(String dishesName) {
        return dishesDeleteDao.dishesDelete(dishesName);
    }
}

