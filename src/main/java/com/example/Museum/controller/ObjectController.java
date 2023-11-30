package com.example.Museum.controller;

import com.example.Museum.dto.ObjectDto;
import com.example.Museum.model.Object;
import com.example.Museum.service.ObjectService;
import io.micrometer.common.util.StringUtils;
import jakarta.websocket.server.PathParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
public class ObjectController {

    private ObjectService objectService;


    public ObjectController(ObjectService objectService) {
        this.objectService = objectService;
    }

    @GetMapping("")
    public List<ObjectDto> getObjects(@PathParam("filter") String filter) {
        List<ObjectDto> allObjects = Collections.emptyList();

        if(StringUtils.isNotBlank(filter)) {
            allObjects = objectService.findByTitleContainsIgnoreCase(filter);
            allObjects.addAll(objectService.findByArtistNameContainsIgnoreCase(filter));
        }
        else {
            allObjects = objectService.findAllDto();
        }
        return allObjects;
    }

    @GetMapping("/{title}/location")
    public String getLocation(@PathVariable String title) {
        Object object = objectService.findByTitleIs(title);
        return object.getTitle() + " by " + object.getArtist().getName() +
                " is housed at the " + object.getMuseum().getName() + " (" + object.getMuseum().getLocation() + ").";
    }

    @GetMapping("/{style}")
    public List<ObjectDto> getObjectsInStyleOf(@PathVariable String style) {
        return objectService.findByStyleContains(style);
    }

}
