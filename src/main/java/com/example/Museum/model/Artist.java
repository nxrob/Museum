package com.example.Museum.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Artist {

    @Id
    private Long id;

    private String name;
    private String dobAndDod;
    private String birthplace;
    @Column(length = 1000)
    private String bio;

    @OneToMany(mappedBy = "artist")
    @JsonBackReference
    private List<Object> repertoire;

}
