package com.example.Museum.service;

import com.example.Museum.dto.ObjectDto;
import com.example.Museum.model.Object;
import com.example.Museum.repository.ObjectRepository;
import com.example.Museum.util.ObjectDtoConverter;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ObjectServiceImpl implements ObjectService {

    private ObjectRepository objectRepository;

    @Override
    public List<ObjectDto> findAllDto() {
        List<Object> objectsTemp = objectRepository.findAll();
        List<ObjectDto> objectsDto = new ArrayList<>();
        ObjectDtoConverter objectDtoConverter = new ObjectDtoConverter();
        for(Object object : objectsTemp) {
            objectsDto.add(objectDtoConverter.convertObjectToStandardDto(object));
        }
        return objectsDto;
    }

    @Override
    public Object findByTitleIs(String title) {
        return objectRepository.findByTitleIs(title);
    }

    @Override
    public List<ObjectDto> findByTitleContainsIgnoreCase(String filter) {
        List<Object> objectsTemp = objectRepository.findByTitleContainsIgnoreCase(filter);
        List<ObjectDto> objectsDto = new ArrayList<>();
        ObjectDtoConverter objectDtoConverter = new ObjectDtoConverter();
        for(Object object : objectsTemp) {
            objectsDto.add(objectDtoConverter.convertObjectToStandardDto(object));
        }
        return objectsDto;
    }

    @Override
    public List<ObjectDto> findByArtistNameContainsIgnoreCase(String filter) {
        List<Object> objectsTemp = objectRepository.findByArtistNameContainsIgnoreCase(filter);
        List<ObjectDto> objectsDto = new ArrayList<>();
        ObjectDtoConverter objectDtoConverter = new ObjectDtoConverter();
        for(Object object : objectsTemp) {
            objectsDto.add(objectDtoConverter.convertObjectToStandardDto(object));
        }
        return objectsDto;
    }

    @Override
    public List<ObjectDto> findByStyleContains(String style) {
        List<Object> objectsTemp = objectRepository.findByStyleContains(style);
        List<ObjectDto> objectsDto = new ArrayList<>();
        ObjectDtoConverter objectDtoConverter = new ObjectDtoConverter();
        for(Object object : objectsTemp) {
            objectsDto.add(objectDtoConverter.convertObjectToStandardDto(object));
        }
        return objectsDto;
    }

}
