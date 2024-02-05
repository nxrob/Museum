package com.example.Museum.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name="museum")
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