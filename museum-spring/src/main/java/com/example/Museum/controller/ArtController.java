package com.example.Museum.controller;

import com.example.Museum.dto.ArtDto;
import com.example.Museum.model.Art;
import com.example.Museum.model.Painting;
import com.example.Museum.model.Sculpture;
import com.example.Museum.service.ArtService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;


import java.util.Collections;
import java.util.List;

@Slf4j
@RestController
@CrossOrigin()
public class ArtController {

    private ArtService artService;


    public ArtController(ArtService artService) {
        this.artService = artService;
    }

    @GetMapping("/art/{id}")
    public ArtDto getArtById(@PathVariable Long id) {
        return artService.getArtById(id);
    }
    @GetMapping("/art")
    public List<ArtDto> getAllArt(@RequestParam(value = "filter",required = false) String filter) {
        List<ArtDto> allArt = Collections.emptyList();

        if(StringUtils.hasText(filter)) {
            allArt = artService.findByTitleContainsIgnoreCase(filter);
            allArt.addAll(artService.findByArtistNameContainsIgnoreCase(filter));
        }
        else {
            allArt = artService.findAllDto();
        }
        return allArt;
    }

    @GetMapping("/{title}/location")
    public String getLocation(@PathVariable String title) {
        Art art = artService.findByTitleIs(title);
        return art.getTitle() + " by " + art.getArtist().getName() +
                " is housed at the " + art.getMuseum().getName() + " (" + art.getMuseum().getLocation() + ").";
    }

    @GetMapping("/{style}")
    public List<ArtDto> getObjectsInStyleOf(@PathVariable String style) {
        return artService.findByStyleContains(style);
    }

//    @PostMapping("/art")
//    public ArtDto createArt(@RequestBody ArtDto art) {
//        return artService.saveArt(art, new Painting());
//    }
//    Comment

    @PutMapping("/art")
    public ArtDto editArt(@RequestBody ArtDto art) {
        log.debug("in the put" + art);
        return artService.saveArt(art);
    }

    @PostMapping("/painting")
    public ArtDto createPainting(@RequestBody ArtDto artDto) {
        return artService.saveArt(artDto,new Painting());
    }

    @PutMapping("/painting")
    public ArtDto updatePainting(@RequestBody ArtDto artDto) {
        return artService.saveArt(artDto,new Painting());
    }



    @PostMapping("/sculpture")
    public ArtDto createSculpture(@RequestBody ArtDto artDto) {
        return artService.saveArt(artDto,new Sculpture());
    }

    @PutMapping("/sculpture")
    public ArtDto updateSculpture(@RequestBody ArtDto artDto) {
        return artService.saveArt(artDto,new Sculpture());
    }

}
