package com.example.Museum.repository;

import com.example.Museum.model.Artist;
import com.example.Museum.model.Object;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtistRepository extends CrudRepository<Artist, Integer> {

    Artist findByName(String name);     //Returns the Artist object for specific name

}
