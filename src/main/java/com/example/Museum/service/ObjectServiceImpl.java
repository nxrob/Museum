package com.example.Museum.service;

import com.example.Museum.model.Object;
import com.example.Museum.repository.ObjectRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ObjectServiceImpl implements ObjectService {

    private final ObjectRepository objectRepository;

    @Override
    public List<Object> findAll() {
        List<Object> objects = new ArrayList<>();
        Iterable<Object> objectsItr = objectRepository.findAll();
        objectsItr.forEach(objects::add);
        return objects;
    }

    @Override
    public List<Object> findByTitleContainsIgnoreCase(String filter) {
        return objectRepository.findByTitleContainsIgnoreCase(filter);
    }

    @Override
    public List<Object> findByArtistNameContainsIgnoreCase(String filter) {
        return objectRepository.findByArtistNameContainsIgnoreCase(filter);
    }
}
