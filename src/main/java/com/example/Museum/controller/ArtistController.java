package com.example.Museum.controller;

import com.example.Museum.model.Artist;
import com.example.Museum.model.Museum;
import com.example.Museum.model.Object;
import com.example.Museum.service.ArtistService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ArtistController {

    private ArtistService artistService;

    public ArtistController(ArtistService artistService) {
        this.artistService = artistService;
    }

    @GetMapping("/artist")
    public List<Artist> getAllArtists() {
        return artistService.findAll();
    }

    @GetMapping("/artist/{name}")
    public List<Object> getObjectsByArtist(@PathVariable String name) {
        return artistService.findObjectsByArtist(name);
    }




    @GetMapping("/artist/{name}/mostworks")
    public Museum getMuseumWithMostWorksByArtist(@PathVariable String name) {
        return artistService.getMuseumWithMostWorksByArtist(name);
    }

}
