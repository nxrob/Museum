package com.example.Museum.repository;

import com.example.Museum.dto.ArtistDto;
import com.example.Museum.model.Artist;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtistRepository extends CrudRepository<Artist, Integer> {

    List<Artist> findAll();
    Artist findByName(String name);     //Returns the Artist object for specific name

    //The following two methods are entirely independent of the CrudRepository as they take in their own queries
    @Query("SELECT new com.example.Museum.dto.ArtistDto(a) FROM Artist a")
    List<ArtistDto> findAllArtistsDto();
    @Query("SELECT new com.example.Museum.dto.ArtistDto(a.id, a.name) FROM Artist a WHERE a.name LIKE %:name%")
    List<ArtistDto> findArtistDtoByName(String name);   //Returns the ArtistDto object for a specific artist, with fields specified above


    void deleteById(int id);


    @Query("SELECT new com.example.Museum.dto.ArtistDto(a) FROM Artist a WHERE a.name LIKE %:name%")
    List<ArtistDto> getArtistsByName(String name);

}
