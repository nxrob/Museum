package com.example.Museum.controller;

import com.example.Museum.model.Object;
import com.example.Museum.model.Painting;
import com.example.Museum.service.ObjectService;
import com.example.Museum.service.PaintingService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class PaintingController {

    private PaintingService paintingService;

    @GetMapping("/{style}")
    public List<Painting> getPaintingsInStyleOf(@PathVariable String style) {
        return paintingService.findByStyleContains(style);
    }
}
