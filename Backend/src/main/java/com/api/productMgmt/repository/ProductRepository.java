package com.api.productMgmt.repository;
import com.api.productMgmt.DTO.TotalProductDTO;
import com.api.productMgmt.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@RepositoryRestController
@CrossOrigin("*")
public interface ProductRepository extends JpaRepository<Product,Long> {
    long countByCategoryId(@RequestParam("id") Long id);
    @Query("SELECT new com.api.productMgmt.DTO.TotalProductDTO(p.category.name, COUNT(p.category.name)) FROM Product AS p GROUP BY p.category.name")
    List<TotalProductDTO> countTotalProductsByCategory();

    Page<Product>  findByCategoryId(@RequestParam("id") Long id, Pageable pageable);
    Page<Product> findByDescriptionContainingOrTitleContaining(@RequestParam("name") String name,@RequestParam("title") String title, Pageable pageable);
}

