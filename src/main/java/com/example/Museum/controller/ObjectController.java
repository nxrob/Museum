package com.example.Museum.controller;

import com.example.Museum.model.Object;
import com.example.Museum.service.ObjectService;
import io.micrometer.common.util.StringUtils;
import jakarta.websocket.server.PathParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
public class ObjectController {

    private ObjectService objectService;

    public ObjectController(ObjectService objectService) {
        this.objectService = objectService;
    }

    @GetMapping("/all")
    public List<Object> getObjects(@PathParam("filter") String filter) {
        List<Object> allObjects = Collections.emptyList();

        if(StringUtils.isNotBlank(filter)) {
            allObjects = objectService.findByTitleContainsIgnoreCase(filter);
            allObjects.addAll(objectService.findByArtistNameContainsIgnoreCase(filter));
        }
        else {
            allObjects = objectService.findAll();
        }
        return allObjects;
    }

}
