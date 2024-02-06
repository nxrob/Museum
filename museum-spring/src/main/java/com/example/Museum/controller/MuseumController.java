package com.example.Museum.controller;

import com.example.Museum.dto.MuseumDto;
import com.example.Museum.dto.ArtDto;
import com.example.Museum.model.Art;
import com.example.Museum.model.Museum;
import com.example.Museum.service.MuseumService;
import io.micrometer.common.util.StringUtils;
import jakarta.websocket.server.PathParam;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
public class MuseumController {

    private MuseumService museumService;

    public MuseumController(MuseumService museumService) {
        this.museumService = museumService;
    }

    @GetMapping("/museum")
    public List<MuseumDto> getMuseums(@PathParam("name") String name) {
        List<MuseumDto> museums;
        if(StringUtils.isNotBlank(name)){
            museums = museumService.findMuseumByName(name);
        }
        else {
            museums = museumService.findAllDto();

        }
        return museums;
    }

    @GetMapping("/museum/{museumName}")
    public List<ArtDto> getWorksInMuseum(@PathVariable String museumName) {
        return museumService.getWorksInMuseum(museumName);
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