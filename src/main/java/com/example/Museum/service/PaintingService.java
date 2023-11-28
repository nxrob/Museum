package com.example.Museum.service;

import com.example.Museum.model.Object;
import com.example.Museum.model.Painting;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PaintingService {

    List<Painting> findByStyleContains(String style);

}
