package com.api.productMgmt.model;
import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@AllArgsConstructor
@Getter @Setter
@NoArgsConstructor
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String description;
    @OneToMany(mappedBy = "product",cascade = {CascadeType.REMOVE})
    private Collection <Photo> photos = new ArrayList<>();
    @ManyToOne
    private Category category;


}
