package com.example.Museum.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@NamedQuery(
        name="findArtistWithMostWorks",
        query="SELECT a.name, counter.count FROM Artist a " +
                "JOIN (SELECT art.artist.id, COUNT(art.artist.id) AS count FROM Art art GROUP BY art.artist.id) AS counter ON counter.a.artist.id=artist.id " +
                "ORDER BY counter.COUNT(a.artist.id) DESC LIMIT 1"
)
@Data
public class Artist {

    @Id
    private Long id;

    private String name;
    private String dobAndDod;
    private String birthplace;
    @Column(length = 1000)
    private String bio;

    @OneToMany(mappedBy = "artist")
    @JsonManagedReference(value = "repertoireReference")
    private List<Art> repertoire;

}
