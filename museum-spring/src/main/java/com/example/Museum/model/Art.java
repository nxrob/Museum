package com.example.Museum.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public abstract class Art {

    @Id
    private Long id;  

    private String title;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }

    public String getYearOf() {
        return yearOf;
    }

    public void setYearOf(String yearOf) {
        this.yearOf = yearOf;
    }

    public String getMedium() {
        return medium;
    }

    public void setMedium(String medium) {
        this.medium = medium;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public Museum getMuseum() {
        return museum;
    }

    public void setMuseum(Museum museum) {
        this.museum = museum;
    }

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