package com.example.Museum.repository;

import com.example.Museum.model.Object;
import com.example.Museum.model.Painting;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PaintingRepository extends CrudRepository<Painting, Integer> {

    List<Painting> findByStyleContains(String style);

}
