package com.bmv.bookmyvenuebackend.service;
import org.springframework.stereotype.Service;;

@Service
public class UserService {
    public String CheckEligibilty(int age){

        if(age < 18){
            return "Book not allowed";
        }
        return "Booking allowed";
    }

    
}
