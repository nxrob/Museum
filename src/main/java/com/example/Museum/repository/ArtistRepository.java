package com.example.Museum.repository;

import com.example.Museum.dto.ArtistDto;
import com.example.Museum.model.Artist;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtistRepository extends CrudRepository<Artist, Integer> {

    @Query("SELECT new com.example.Museum.dto.ArtistDto(a.id, a.name) FROM Artist a")
    List<ArtistDto> findAllArtistsDtoNameId();
    @Query("SELECT new com.example.Museum.dto.ArtistDto(a.id, a.name, a.dobAndDod, a.birthplace, a.bio) FROM Artist a")
    List<ArtistDto> findAllArtistsDtoNoRepertoire();
    List<Artist> findAll();
    Artist findByName(String name);     //Returns the Artist object for specific name
    @Query("SELECT new com.example.Museum.dto.ArtistDto(a.id, a.name) FROM Artist a WHERE a.name LIKE %:name%")
    List<ArtistDto> findArtistDtoByName(String name);   //Returns the ArtistDto object for a specific artist, with fields specified above

}
