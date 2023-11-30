package com.example.Museum.dto;

import com.example.Museum.model.Object;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private List<Object> collection;
    private Integer collectionSize;
    @JsonIgnore
    private boolean dummy;
    private Integer numberOfPaintingsBySpecificArtist;

    public MuseumDto(String name, String location, Integer collectionSize) {
        this.name = name;
        this.location = location;
        this.collectionSize = collectionSize;
    }

    public MuseumDto(String name, String location, Integer numberOfPaintingsBySpecificArtist, boolean dummy) {
        this.name = name;
        this.location = location;
        this.numberOfPaintingsBySpecificArtist = numberOfPaintingsBySpecificArtist;
        this.dummy = true;
    }

}
