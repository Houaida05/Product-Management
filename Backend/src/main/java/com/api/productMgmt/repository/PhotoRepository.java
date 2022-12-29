package com.api.productMgmt.repository;

import com.api.productMgmt.model.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestController
@CrossOrigin("*")
public interface PhotoRepository extends JpaRepository<Photo,Long> {
}
