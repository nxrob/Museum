package com.example.Museum.dto;

import jakarta.persistence.Column;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ObjectDto {

    private Long id;
    private String title;
    //private ArtistDto artistDto;
    private String artistName;
    private String yearOf;
    private String medium;
    private String location;
    @Column(length = 1000)
    private String description;
    private String style;

    //General constructor
    public ObjectDto(Long id, String title, String artistName, String yearOf, String medium, String location, String description) {
        this.id = id;
        this.title = title;
        //this.artistDto = artistDto;
        this.artistName = artistName;
        this.yearOf = yearOf;
        this.medium = medium;
        this.description = description;
        this.location = location;
    }

    //Constructor for paintings
    public ObjectDto(Long id, String title, String artistName, String yearOf, String medium, String location, String description, String style) {
        this.id = id;
        this.title = title;
        //this.artistDto = artistDto;
        this.artistName = artistName;
        this.yearOf = yearOf;
        this.medium = medium;
        this.description = description;
        this.location = location;
        this.style = style;
    }
}
