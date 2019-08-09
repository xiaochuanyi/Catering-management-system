package com.dao;

import com.pojo.Admin;

public interface AdminRegisteredDao {
    /**
     * 注册管理员账号
     */
    int adminRegistered(Admin admin);
    /**
     *
     * 验证是否存在一个管理员用户
     */
    Admin isExist();
}
