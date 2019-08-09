package com.pojo;

import java.io.Serializable;

/**
 * 管理员用户名和密码
 */
public class Admin implements Serializable {
    private String name;
    private String password;
    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }
}
