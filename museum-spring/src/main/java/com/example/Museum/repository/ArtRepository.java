package com.example.Museum.repository;

import com.example.Museum.model.Art;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtRepository extends CrudRepository<Art, Integer> {

    List<Art> findAll();
    List<Art> findByTitleContainsIgnoreCase(String filter);
    List<Art> findByArtistNameContainsIgnoreCase(String filter);
    Art findByTitleIs(String title);
    List<Art> findByStyleContains(String style);

    void deleteById(int id);

}
