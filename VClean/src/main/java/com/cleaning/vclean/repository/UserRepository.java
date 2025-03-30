package com.cleaning.vclean.repository;

import com.cleaning.vclean.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// @Repository annotation marks this interface as a Spring Data repository
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}

