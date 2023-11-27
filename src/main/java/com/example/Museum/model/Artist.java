package com.example.Museum.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Artist {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String dobAndDod;
    private String birthplace;
    private String bio;

}
