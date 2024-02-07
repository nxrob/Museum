package com.example.Museum.controller;


import com.example.Museum.model.Guide;
import com.example.Museum.dto.MuseumDto;
import com.example.Museum.service.GuideService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin()
public class GuideController {

    private final GuideService guideService;

    public GuideController(GuideService guideService) {
        this.guideService = guideService;
    }

    @GetMapping("/guide")
    public List<Guide> getGuides(){
        return guideService.findAll();
    }

    @GetMapping("/guide/{guideName}")
    public Guide getGuideByName(@PathVariable String guideName) {
        return guideService.getGuideByName(guideName);
    }

    @GetMapping("/guide/{guideName}/list")
        public List<MuseumDto> getMuseumsInGuide(@PathVariable String guideName) {
        return guideService.getMuseumsInGuide(guideName);
    }
}
