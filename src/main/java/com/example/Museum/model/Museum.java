package com.example.Museum.model;

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
    @GeneratedValue
    private Long id;

    private String name;
    private String location;

    @OneToMany(mappedBy = "museum")
    private List<Object> collection;

}