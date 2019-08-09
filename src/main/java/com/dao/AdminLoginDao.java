package com.dao;

import com.pojo.Admin;
/**
 * 用户登录验证
 */
public interface AdminLoginDao {
    Admin validation(Admin admin);
}
