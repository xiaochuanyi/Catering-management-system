package com.controller;

import com.pojo.Admin;
import com.pojo.ResultMap;
import com.service.AdminRegisteredService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import toolClass.Md5;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/Register")
public class AdminRegisteredController {
    @Autowired
    private AdminRegisteredService adminRegisteredService;
    @RequestMapping("/adminRegistered")
    @ResponseBody
    public ResultMap adminRegistered(Admin admin){
        ResultMap resultMap = new ResultMap();
        try {
            //验证是否存在一个管理员用户
            Admin getAdmin = adminRegisteredService.adminIsExit();
            if (getAdmin != null) {
                resultMap.setStatus("301");
                resultMap.setMsg("已经存在一个管理员用户，不允许再注册");
            } else {
                //使用md5加密存储管理员用户密码
                admin.setPassword(Md5.toMD5(admin.getPassword()));
                int result = adminRegisteredService.adminRegistered(admin);
                if (result == 0) {
                    resultMap.setStatus("302");
                    resultMap.setMsg("注册失败，请重新注册");
                } else {
                    resultMap.setStatus("200");
                    resultMap.setMsg("注册成功");
                }
            }
        }catch (Exception e){
            resultMap.setStatus("303");
            resultMap.setMsg("运行出错");
        }
        return resultMap;
    }

    /**
     * 测试
     * @return
     */
    @RequestMapping("/test")
    public String test(){
        return "redirect:http://www.baidu.com";
    }
}
