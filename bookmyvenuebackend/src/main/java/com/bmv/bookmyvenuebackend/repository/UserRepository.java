package com.bmv.bookmyvenuebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bmv.bookmyvenuebackend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
    
}
