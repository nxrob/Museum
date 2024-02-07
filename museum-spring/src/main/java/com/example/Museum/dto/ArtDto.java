package com.example.Museum.dto;

import com.example.Museum.model.Art;
import com.example.Museum.model.Museum;
import jakarta.persistence.Column;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ArtDto {

    private Long id;
    private String title;
    private String artistName;
    private String yearOf;
    private String medium;
    private String location;
    private String locationId;
    private String description;
    private String style;

    public ArtDto(Art art) {
        this.id = art.getId();
        this.title = art.getTitle();
        this.artistName = art.getArtist().getName();
        this.yearOf = art.getYearOf();
        this.medium = art.getMedium();
        this.description = art.getDescription();
        this.location = "" + art.getMuseum().getName() + " (" + art.getMuseum().getLocation() + ")";
        this.locationId = "" + art.getMuseum().getId();
        this.style = art.getStyle();
    }
}