package com.example.Museum.repository;

import com.example.Museum.model.Object;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ObjectRepository extends CrudRepository<Object, Integer> {

    List<Object> findAll();

    //@Query("SELECT new com.example.Museum.dto.ObjectDto(o.id, o.title, o.artistDto, o.yearOf, o.medium, o.description) FROM Object o")
    //List<ObjectDto> findAllDto();
    List<Object> findByTitleContainsIgnoreCase(String filter);
    List<Object> findByArtistNameContainsIgnoreCase(String filter);
    Object findByTitleIs(String title);
    List<Object> findByStyleContains(String style);

}
