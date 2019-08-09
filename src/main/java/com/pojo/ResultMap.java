package com.pojo;

import java.io.Serializable;
import java.util.List;

public class ResultMap implements Serializable {
    private String status;
    private String msg;

    public ResultMap(String status, String msg) {
        this.status = status;
        this.msg = msg;
    }
    public ResultMap() {

    }
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
