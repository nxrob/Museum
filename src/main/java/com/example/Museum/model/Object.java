package com.example.Museum.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
//@JsonIdentityInfo(
//        generator = ObjectIdGenerators.PropertyGenerator.class,
//        property = "id")
public class Object {

    @Id
    private Long id;

    private String title;
    @ManyToOne
    @JsonBackReference(value = "repertoireReference")
    private Artist artist;
    private String yearOf;
    private String medium;
    @Column(length = 1000)
    private String description;
    private String style;

    @Nonnull
    @JsonBackReference(value = "collectionReference")
    @ManyToOne
    private Museum museum;

}