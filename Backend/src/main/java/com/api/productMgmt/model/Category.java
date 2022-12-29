package com.api.productMgmt.model;
import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @OneToMany(mappedBy = "category",cascade = CascadeType.ALL)
    private Collection<Product> products = new ArrayList<>();
}
