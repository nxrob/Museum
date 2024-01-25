package com.example.Museum.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NamedQuery(
        name="findOldestArtwork",
        query="SELECT a from Art a ORDER BY a.yearOf ASC LIMIT 1"
)
@NamedQuery(
        name="sortArtworksByShortestTitle",
        query="SELECT a FROM Art a ORDER BY LENGTH(a.title) ASC"
)
@Data
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Art {

    @Id
    private Long id;

    private String title;
    @ManyToOne
    @JsonBackReference(value = "repertoireReference")
    private Artist artist;
    private String yearOf;
    private String medium;
    @Column(length = 1000)
    private String description;
    private String style;

    @Nonnull
    @JsonBackReference(value = "collectionReference")
    @ManyToOne
    private Museum museum;

}