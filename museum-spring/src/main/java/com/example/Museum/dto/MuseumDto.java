package com.example.Museum.dto;

import com.example.Museum.model.Art;
import com.example.Museum.model.Museum;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class MuseumDto {

    private Long id;
    private String name;
    private String location;
    private List<Art> collection;
    private Integer collectionSize;
    private Integer numberOfPaintingsBySpecificArtist;

    public MuseumDto(Museum museum) {
        this.id = museum.getId();
        this.name = museum.getName();
        this.location = museum.getLocation();
        this.collectionSize = museum.getCollection().size();
    }

}
