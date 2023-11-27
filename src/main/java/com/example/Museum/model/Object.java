package com.example.Museum.model;

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
    @GeneratedValue
    private Long id;

    private String title;
    private String artist;
    private String yearOf;
    private String medium;
    private String description;

    private String format;

    @Nonnull
    @ManyToOne
    private Museum museum;

}