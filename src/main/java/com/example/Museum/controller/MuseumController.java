package com.example.Museum.controller;

import com.example.Museum.dto.MuseumDto;
import com.example.Museum.dto.ObjectDto;
import com.example.Museum.model.Object;
import com.example.Museum.service.MuseumService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MuseumController {

    private MuseumService museumService;

    public MuseumController(MuseumService museumService) {
        this.museumService = museumService;
    }

    @GetMapping("/museum")
    public List<MuseumDto> getMuseums() {
        return museumService.findAllDto();
    }

    @GetMapping("/museum/{museumName}")
    public List<ObjectDto> getWorksInMuseum(@PathVariable String museumName) {
        return museumService.getWorksInMuseum(museumName);
    }

    @GetMapping("/museum/{museumName}/{artistName}")
    public List<Object> getWorksByArtistInMuseum(@PathVariable String museumName, @PathVariable String artistName) {
        return museumService.getWorksByArtistInMuseum(museumName, artistName);
    }

}