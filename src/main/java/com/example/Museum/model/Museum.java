package com.example.Museum.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @JsonManagedReference(value = "collectionReference")
    @OneToMany(mappedBy = "museum")
    @JsonIgnore
    private List<Art> collection;

}