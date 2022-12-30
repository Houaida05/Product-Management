package com.api.productMgmt.repository;
import com.api.productMgmt.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;


@RepositoryRestController
@CrossOrigin("*")
public interface ProductRepository extends JpaRepository<Product,Long> {
    long countByCategoryId(@RequestParam("id") Long id);
    Page<Product>  findByCategoryId(@RequestParam("id") Long id, Pageable pageable);
    Page<Product> findByDescriptionContainingOrTitleContaining(@RequestParam("name") String name,@RequestParam("title") String title, Pageable pageable);
}

