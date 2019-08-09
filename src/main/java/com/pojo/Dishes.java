package com.pojo;
/**
 * 菜品的pojo
 * 包含菜品名字，单价和菜品描述和图片的url
 */

import java.io.Serializable;

public class Dishes implements Serializable {
    private String dishesName;
    private String dishesPrice;
    private String dishesDescription;
    private String pictureUrl;

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
}
