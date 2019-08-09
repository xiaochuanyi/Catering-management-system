package com.service.impl;

import com.dao.DishesAddDao;
import com.pojo.Dishes;
import com.service.DishesAddService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 添加菜品的service
 */
@Service
public class DishesAddServiceImpl implements DishesAddService {
    @Autowired
    private DishesAddDao dishesAddDao;
    @Override
    public int dishesAdd(Dishes dishes) {
        int result = dishesAddDao.dishesAdd(dishes);
        return result;
    }
}
