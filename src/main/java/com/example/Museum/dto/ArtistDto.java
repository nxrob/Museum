package com.example.Museum.dto;

import com.example.Museum.model.Artist;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ArtistDto {

    private Long id;
    private String name;
    private String dobAndDod;
    private String birthplace;
    private String bio;

    public ArtistDto(Artist artist) {
        this.id = artist.getId();
        this.name = artist.getName();
        this.dobAndDod = artist.getDobAndDod();
        this.birthplace = artist.getBirthplace();
        this.bio = artist.getBio();
    }
}