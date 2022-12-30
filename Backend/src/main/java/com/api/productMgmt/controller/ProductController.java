package com.api.productMgmt.controller;

import com.api.productMgmt.model.Photo;
import com.api.productMgmt.model.Product;
import com.api.productMgmt.repository.CategoryRepository;
import com.api.productMgmt.repository.PhotoRepository;
import com.api.productMgmt.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class ProductController {
    private final CategoryRepository categoryRepository;
    private final PhotoRepository photoRepository;
    private final ProductRepository productRepository;

  @PostMapping("/products/new")
    public void addProduct(MultipartFile[] files, String title, String description, long category) {
      Product p = new Product();
      p.setCategory(categoryRepository.findById(category).get());
      p.setTitle(title);
      p.setDescription(description);
      List<Photo> photos = new ArrayList<>();
      productRepository.save(p);
      Arrays.asList(files).stream().forEach(file -> {
          try {
              Files.write(Paths.get(System.getProperty("user.dir") + "/images/" + file.getOriginalFilename()), file.getBytes());
              Photo photo = new Photo(null,"/images/" + file.getOriginalFilename(),p);
              photos.add(photo);
              photoRepository.save(photo);
          } catch (IOException e) {
              throw new RuntimeException(e);
          }
      });
        p.setPhotos(photos);
        productRepository.save(p);
      }
    @GetMapping(path = "/images/{id}", produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getImage(@PathVariable("id") Long id) throws Exception {
        Photo photo = photoRepository.findById(id).get();
        return Files.readAllBytes(Paths.get(System.getProperty("user.dir") + photo.getUrl()));
    }

}

