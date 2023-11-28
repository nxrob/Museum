package com.example.Museum.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Museum {

    @Id
    private Long id;

    private String name;
    private String location;

    @OneToMany(mappedBy = "museum")
    @JsonBackReference
    private List<Object> collection;

}