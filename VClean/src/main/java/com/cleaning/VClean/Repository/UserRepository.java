package com.cleaning.VClean.Repository;

import com.cleaning.VClean.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// @Repository annotation marks this interface as a Spring Data repository
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}

