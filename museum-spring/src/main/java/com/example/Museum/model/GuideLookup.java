package com.example.Museum.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Table(name="guide_lookup")
@Data
@Entity
public class GuideLookup {
    private int guide_id;
    private int museum_id;
    private int rating;
    @Id
    @GeneratedValue
    private Long id;


}
