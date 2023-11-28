package com.example.Museum.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@NoArgsConstructor
public abstract class Object {

    @Id
    private Long id;

    private String title;
    @ManyToOne
    @JsonManagedReference
    private Artist artist;
    private String yearOf;
    private String medium;
    @Column(length = 1000)
    private String description;

    @Nonnull
    @ManyToOne
    @JsonManagedReference
    private Museum museum;

}