package com.example.Museum.controller;

import com.example.Museum.model.Museum;
import com.example.Museum.service.MuseumService;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MuseumController {

    private MuseumService museumService;

    public MuseumController(MuseumService museumService) {
        this.museumService = museumService;
    }

    @GetMapping("/museum")
    public List<Museum> getMuseums() {
        return museumService.findAll();
    }

}