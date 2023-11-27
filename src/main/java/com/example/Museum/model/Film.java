package com.example.Museum.model;

import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class Film extends Object {

    private String duration;
    private boolean hasSound;

}
