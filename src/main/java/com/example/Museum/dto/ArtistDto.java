package com.example.Museum.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ArtistDto {

    private Long id;
    private String name;
    private String dobAndDod;
    private String birthplace;
    private String bio;

    public ArtistDto(Long id, String name, String dobAndDod, String birthplace, String bio) {
        this.id = id;
        this.name = name;
        this.dobAndDod = dobAndDod;
        this.birthplace = birthplace;
        this.bio = bio;
    }
}
