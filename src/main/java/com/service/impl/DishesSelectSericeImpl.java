package com.service.impl;

import com.dao.DishesSelectDao;
import com.pojo.Dishes;
import com.service.DishesSelectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 管理员菜品展示界面的service
 */
@Service
public class DishesSelectSericeImpl implements DishesSelectService {
    @Autowired
    private DishesSelectDao dishesSelectDao;
    public List<Dishes> dishesSelect() {
        return dishesSelectDao.dishesSelect();
    }

    /**
     * 查询分页菜品，传入的值应该是页面数 * 5 每页 5个
     * @param page
     * @return
     */
    @Override
    public List<Dishes> dishesSelectWithPage(int page) {
        return dishesSelectDao.dishesSelectWithPage((page-1) * 5);
    }

    @Override
    public Dishes dishesSelectOne(String dishesName) {
        return dishesSelectDao.dishesSelectOne(dishesName);
    }

    @Override
    public String dishesSelectId(String dishesName) {
        return dishesSelectDao.dishesSelectId(dishesName);
    }

    @Override
    public Dishes dishesSelectWithId(String id) {
        return dishesSelectDao.dishesSelectWithId(id);
    }
}
