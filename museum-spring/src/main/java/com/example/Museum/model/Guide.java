package com.example.Museum.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="guide")
@Data
public class Guide {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String summary;

}
