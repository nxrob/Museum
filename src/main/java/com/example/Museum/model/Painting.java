package com.example.Museum.model;

import jakarta.persistence.Entity;
import lombok.Data;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Data
public class Painting extends Object {

    private String style;

}
