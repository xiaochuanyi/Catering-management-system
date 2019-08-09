package com.controller;

import com.pojo.Admin;
import com.pojo.ResultMap;
import com.service.AdminLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import toolClass.Md5;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@Controller
public class AdminLoginController {
    @Autowired
    private AdminLoginService adminLoginService;
    @RequestMapping("/Login")
    @ResponseBody
    public ResultMap validation(HttpServletRequest request,HttpServletResponse response){
        //将获取到的数据存入admin对象中
        Admin admin = new Admin();
        admin.setName(request.getParameter("name"));
        admin.setPassword(request.getParameter("password"));
        //创建返回结果的map
        ResultMap map = new ResultMap();
        //创建session对象
        HttpSession session = request.getSession();
        session.setAttribute("LOGIN_USER",Md5.toMD5(admin.getPassword()));
        //因为对密码进行的md5加密后存储，所以校验时也需要同样加密后校验
        try {
            admin.setPassword(Md5.toMD5(admin.getPassword()));
            Admin getAdmin = adminLoginService.validationResult(admin);
            if (getAdmin == null) {
                map.setStatus("201");
                map.setMsg("密码错误");
            } else {

                map.setStatus("200");
                map.setMsg("密码正确");
            }
        }catch (Exception e){
            map.setStatus("202");
            map.setMsg("运行出错");
        }
        return map;
    }

    /**
     * 跳转注册界面
     * @return
     */
    @RequestMapping("/toRegister")
    public String toRegister(){
        return "registered";
    }

    /**
     * 跳转登录界面
     * @return
     */
    @RequestMapping("/toLogin")
    public String toLogin(){
        return "login";
    }
}
