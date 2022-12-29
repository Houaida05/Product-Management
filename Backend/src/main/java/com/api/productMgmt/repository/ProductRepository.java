package com.api.productMgmt.repository;
import com.api.productMgmt.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Collection;
import java.util.List;

@RepositoryRestController
@CrossOrigin("*")
public interface ProductRepository extends JpaRepository<Product,Long> {
    @RestResource(path = "/byTitleDescCateg")
     Page<Product> findByTitleContainsAndDescriptionContainsAndCategoryId(@Param("title") String title,@Param("description") String description, @Param("category") Long id,Pageable pageable);
}

