package com.example.Museum.repository;

import com.example.Museum.model.Object;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ObjectRepository extends CrudRepository<Object, Integer> {

    List<Object> findByTitleContainsIgnoreCase(String filter);
    List<Object> findByArtistNameContainsIgnoreCase(String filter);

}
