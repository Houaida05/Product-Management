package com.api.productMgmt;

import com.api.productMgmt.model.Category;
import com.api.productMgmt.model.Photo;
import com.api.productMgmt.model.Product;
import com.api.productMgmt.repository.CategoryRepository;
import com.api.productMgmt.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins="http://localhost:4200")
public class ProductMgmtApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductMgmtApplication.class, args);
	}

	@Bean
	CommandLineRunner start( RepositoryRestConfiguration repositoryRestConfiguration) {
		repositoryRestConfiguration.exposeIdsFor(Product.class, Category.class, Photo.class);
		return args -> {

		};

	}
}
