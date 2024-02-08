package com.example.Museum.controller;

import com.example.Museum.dto.ArtDto;
import com.example.Museum.dto.ArtistDto;
import com.example.Museum.model.Art;
import com.example.Museum.model.Artist;
import com.example.Museum.model.Museum;
import com.example.Museum.service.ArtistService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
public class ArtistController {

    private ArtistService artistService;

    public ArtistController(ArtistService artistService) {
        this.artistService = artistService;
    }

    @GetMapping("/artist")
    public List<ArtistDto> getAllArtists() {
        return artistService.findAllArtistsDtoNoRepertoire();
    }

    @GetMapping("/artist/{name}")
    public List<ArtDto> getObjectsByArtist(@PathVariable String name) {
        return artistService.findObjectsByArtist(name);
    }

    @GetMapping("/artist/{name}/info")
    public Artist getArtistInfo(@PathVariable String name) {
        return artistService.getArtistInfo(name);
    }

    @GetMapping("/artist/{name}/mostworks")
    public Museum getMuseumWithMostWorksByArtist(@PathVariable String name) {
        return artistService.getMuseumWithMostWorksByArtist(name);
    }

    @GetMapping("/artist/{name}/oldestnewest")
    public List<Art> findFirstAndLastObject(@PathVariable String name) {
        return artistService.findFirstAndLastObject(name);
    }

    @PostMapping("/artist")
    public Artist createArtist(@RequestBody Artist artist) {
        return artistService.saveArtist(artist);
    }

    @PutMapping("/artist")
    public Artist editArtist(@RequestBody Artist artist) {
        return artistService.saveArtist(artist);
    }
}
