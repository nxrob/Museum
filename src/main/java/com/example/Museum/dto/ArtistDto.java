package com.example.Museum.dto;

import com.example.Museum.model.Object;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ArtistDto {

    private Long id;
    private String name;
    private String dobAndDod;
    private String birthplace;
    private String bio;

    public ArtistDto(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public ArtistDto(Long id, String name, String dobAndDod, String birthplace, String bio) {
        this.id = id;
        this.name = name;
        this.dobAndDod = dobAndDod;
        this.birthplace = birthplace;
        this.bio = bio;
    }
}
