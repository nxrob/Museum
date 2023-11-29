package com.example.Museum.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Transient;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Museum {

    @Id
    private Long id;

    private String name;
    private String location;

    @JsonManagedReference(value = "collectionReference")
    @OneToMany(mappedBy = "museum")
    @JsonIgnore
    private List<Object> collection;

}