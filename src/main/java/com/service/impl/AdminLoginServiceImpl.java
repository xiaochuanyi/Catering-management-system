package com.service.impl;

import com.dao.AdminLoginDao;
import com.pojo.Admin;
import com.service.AdminLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 管理员登录的service
 */
@Service
public class AdminLoginServiceImpl implements AdminLoginService {
    @Autowired
    private AdminLoginDao adminLoginDao;
    public Admin validationResult(Admin admin){
        return adminLoginDao.validation(admin);
    }
}
