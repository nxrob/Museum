package com.example.Museum.model;

import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class Painting extends Object {

    private String style;

}
