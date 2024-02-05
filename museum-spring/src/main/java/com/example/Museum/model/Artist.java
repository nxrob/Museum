package com.example.Museum.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Artist {

    @Id
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDobAndDod() {
        return dobAndDod;
    }

    public void setDobAndDod(String dobAndDod) {
        this.dobAndDod = dobAndDod;
    }

    public String getBirthplace() {
        return birthplace;
    }

    public void setBirthplace(String birthplace) {
        this.birthplace = birthplace;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public List<Art> getRepertoire() {
        return repertoire;
    }

    public void setRepertoire(List<Art> repertoire) {
        this.repertoire = repertoire;
    }

    private String name;
    private String dobAndDod;
    private String birthplace;
    @Column(length = 1000)
    private String bio;

    @OneToMany(mappedBy = "artist")
    @JsonManagedReference(value = "repertoireReference")
    private List<Art> repertoire;

}
