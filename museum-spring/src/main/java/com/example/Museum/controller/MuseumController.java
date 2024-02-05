package com.example.Museum.controller;

import com.example.Museum.dto.MuseumDto;
import com.example.Museum.dto.ArtDto;
import com.example.Museum.model.Art;
import com.example.Museum.model.Museum;
import com.example.Museum.service.MuseumService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
public class MuseumController {

    private final MuseumService museumService;

    public MuseumController(MuseumService museumService) {
        this.museumService = museumService;
    }

    @GetMapping("/museum")
    public List<MuseumDto> getMuseums() {
        return museumService.findAllDto();
    }

    @GetMapping("/museum/{museumName}")
    public Museum getMuseum(@PathVariable String museumName) {
        return museumService.getMuseum(museumName);
    }

    @GetMapping("/museum/{museumName}/works")
    public List<ArtDto> getMuseumWorks(@PathVariable String museumName) {
        return museumService.getMuseumWorks(museumName);
    }

    @GetMapping("/museum/{museumName}/{artistName}")
    public List<Art> getWorksByArtistInMuseum(@PathVariable String museumName, @PathVariable String artistName) {
        return museumService.getWorksByArtistInMuseum(museumName, artistName);
    }

    @PostMapping("/museum")
    public Museum createMuseum(@RequestBody Museum museum) {
        return museumService.saveMuseum(museum);
    }

    @PutMapping("/museum")
    public Museum editMuseum(@RequestBody Museum museum) {
        return museumService.saveMuseum(museum);
    }

}