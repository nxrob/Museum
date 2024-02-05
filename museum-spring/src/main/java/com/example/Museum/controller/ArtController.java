package com.example.Museum.controller;

import com.example.Museum.dto.ArtDto;
import com.example.Museum.model.Art;
import com.example.Museum.service.ArtService;
import io.micrometer.common.util.StringUtils;
import jakarta.websocket.server.PathParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin()
public class ArtController {

    private ArtService artService;


    public ArtController(ArtService artService) {
        this.artService = artService;
    }

    @GetMapping("")
    public List<ArtDto> getAllArt(@PathParam("filter") String filter) {
        List<ArtDto> allArt = Collections.emptyList();

        if(StringUtils.isNotBlank(filter)) {
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

}
