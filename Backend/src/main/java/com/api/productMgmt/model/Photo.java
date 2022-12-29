package com.api.productMgmt.model;
import lombok.*;
import javax.persistence.*;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String url;
    @ManyToOne
    private Product product;
}
