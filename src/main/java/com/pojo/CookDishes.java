package com.pojo;

import java.io.Serializable;

public class CookDishes implements Serializable {
    private String tableId;
    private String dishesName;

    public String getTableId() {
        return tableId;
    }

    public void setTableId(String tableId) {
        this.tableId = tableId;
    }

    public String getDishesName() {
        return dishesName;
    }

    public void setDishesName(String dishesName) {
        this.dishesName = dishesName;
    }

    @Override
    public String toString() {
        return "CookDishes{" +
                "tableId='" + tableId + '\'' +
                ", dishesName='" + dishesName + '\'' +
                '}';
    }
}
