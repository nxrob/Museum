package com.example.Museum.model;

import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class Photograph extends Object {



    private String analogOrDigital;

}
