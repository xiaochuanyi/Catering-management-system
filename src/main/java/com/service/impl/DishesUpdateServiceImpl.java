package com.service.impl;

import com.dao.DishesUpdateDao;
import com.pojo.DishesWithNewName;
import com.service.DishesUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 菜品修改的service
 */
@Service
public class DishesUpdateServiceImpl  implements DishesUpdateService {
    @Autowired
    private DishesUpdateDao dishesUpdateDao;
    @Override
    public int dishesUpdate(DishesWithNewName dishesWithNewName) {
        return dishesUpdateDao.dishesUpdate(dishesWithNewName);
    }
}
