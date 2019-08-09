package com.pojo;

import java.io.Serializable;

/**
 * 用于更新数据库时的polo，更新时使用菜名做判断
 */
public class DishesWithNewName implements Serializable {
    private String dishesName;
    private String dishesPrice;
    private String dishesDescription;
    private String pictureUrl;
    private String beforeDishesName;

    public String getDishesName() {
        return dishesName;
    }

    public void setDishesName(String dishesName) {
        this.dishesName = dishesName;
    }

    public String getDishesPrice() {
        return dishesPrice;
    }

    public void setDishesPrice(String dishesPrice) {
        this.dishesPrice = dishesPrice;
    }

    public String getDishesDescription() {
        return dishesDescription;
    }

    public void setDishesDescription(String dishesDescription) {
        this.dishesDescription = dishesDescription;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public String getBeforeDishesName() {
        return beforeDishesName;
    }

    public void setBeforeDishesName(String beforeDishesName) {
        this.beforeDishesName = beforeDishesName;
    }

    @Override
    public String toString() {
        return "DishesWithNewName{" +
                "dishesName='" + dishesName + '\'' +
                ", dishesPrice='" + dishesPrice + '\'' +
                ", dishesDescription='" + dishesDescription + '\'' +
                ", pictureUrl='" + pictureUrl + '\'' +
                ", beforeDishesName='" + beforeDishesName + '\'' +
                '}';
    }
}
