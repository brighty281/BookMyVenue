package com.bmv.bookmyvenuebackend.controller;

import com.bmv.bookmyvenuebackend.service.UserService;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    
    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/")
    public String hello() {
        return "Hello Spring Boot";
    }

    @GetMapping("/checkage")
    public String checkAge(@RequestParam int age){
        return  userService.CheckEligibilty(age);
    }

    @GetMapping("/getuser")
    public HashMap<String,String> getUser(){

        HashMap<String,String> response = new HashMap<>();
        response.put("name","brighty");
        response.put("place","chengannur");

        return response;
    }
    
}
