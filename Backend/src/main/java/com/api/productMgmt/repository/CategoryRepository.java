package com.api.productMgmt.repository;

import com.api.productMgmt.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestController
@CrossOrigin("*")

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
