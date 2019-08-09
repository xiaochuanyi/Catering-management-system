package com.pojo;

import java.io.Serializable;
import java.util.List;

public class DishesResultMap implements Serializable {
    private String status;
    private List<Dishes> msg;

    public DishesResultMap(String status, List<Dishes> msg) {
        this.status = status;
        this.msg = msg;
    }

    public DishesResultMap() {
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<Dishes> getMsg() {
        return msg;
    }

    public void setMsg(List<Dishes> msg) {
        this.msg = msg;
    }
}
