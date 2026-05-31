package com.bmv.bookmyvenuebackend.controller;

import com.bmv.bookmyvenuebackend.entity.User;
import com.bmv.bookmyvenuebackend.service.UserService;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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


    @PostMapping("/user/create")
    public User creatUser(@RequestBody User user){
        return userService.createUser(user);
    }


    @GetMapping("/user/getall")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    
    }
    
    @GetMapping("user/getbyid")
    public User getUserById(@RequestParam Long id){
        return userService.getUserById(id);
    }
    
}
