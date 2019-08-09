package com.service.impl;

import com.dao.AdminRegisteredDao;
import com.pojo.Admin;
import com.service.AdminRegisteredService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminRegisteredServiceImpl implements AdminRegisteredService {
    @Autowired
    private AdminRegisteredDao adminRegisteredDao;

    /**
     * 管理员注册
     * @param admin
     * @return
     */
    public int adminRegistered(Admin admin){
        return adminRegisteredDao.adminRegistered(admin);
    }

    /**
     * 验证是否已经存在管理员账户
     * @return
     */
    public Admin adminIsExit(){ return  adminRegisteredDao.isExist(); }
}
