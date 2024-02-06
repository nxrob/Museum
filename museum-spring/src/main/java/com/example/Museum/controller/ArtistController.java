package com.example.Museum.controller;

import com.example.Museum.dto.ArtistDto;
import com.example.Museum.model.Art;
import com.example.Museum.service.ArtistService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ArtistController {

    private final ArtistService artistService;

    public ArtistController(ArtistService artistService) {
        this.artistService = artistService;
    }

    @GetMapping("/artist")
    public List<ArtistDto> getAllArtists() {
        return artistService.findAllArtistsDtoNoRepertoire();
    }

    @GetMapping("/artist/{name}")
    public List<Art> getObjectsByArtist(@PathVariable String name) {
        return artistService.findObjectsByArtist(name);
    }

    @DeleteMapping("/artist/{id}")
    public void deleteArtist(@PathVariable int id)  {
        artistService.deleteArtist(id);
    }

    @GetMapping("/artist/{name}/mostworks")
    public String getMuseumWithMostWorksByArtist(@PathVariable String name) {
        return artistService.getMuseumWithMostWorksByArtist(name);
    }

    @GetMapping("/artist/{name}/oldestnewest")
    public List<Art> findFirstAndLastObject(@PathVariable String name) {
        return artistService.findFirstAndLastObject(name);
    }
}
