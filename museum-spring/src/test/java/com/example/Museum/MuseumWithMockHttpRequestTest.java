//package com.example.Museum;
//
//import com.example.Museum.dto.MuseumDto;
//import com.example.Museum.model.Art;
//import com.example.Museum.model.Museum;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import lombok.extern.slf4j.Slf4j;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.http.MediaType;
//import org.springframework.test.annotation.DirtiesContext;
//import org.springframework.test.context.TestPropertySource;
//import org.springframework.test.context.jdbc.Sql;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MvcResult;
//import org.springframework.test.web.servlet.ResultActions;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//@Sql("classpath:test-data.sql")
//@SpringBootTest
//@AutoConfigureMockMvc
//@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
//@TestPropertySource(properties = {"spring.sql.init.mode=never"})
//@Slf4j
//public class MuseumWithMockHttpRequestTest {
//
//    @Autowired
//    MockMvc mockMvc;
//    ObjectMapper mapper = new ObjectMapper();
//
//    @Test
//    void testFindAllMuseums() throws Exception {
//        int expectedLength = 15;
//
//        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/museum")
//                        .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
//                .andExpect(MockMvcResultMatchers.status().isOk());
//
//        MvcResult result = resultActions.andReturn();
//        String contentAsString = result.getResponse().getContentAsString();
//
//        MuseumDto[] museums = mapper.readValue(contentAsString, MuseumDto[].class);
//
//        assertEquals(expectedLength, museums.length);
//    }
//
//    @Test
//    void testAllWorksInMuseum() throws Exception {
//        int expectedLength = 13;
//
//        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/museum/Louvre Museum")
//                        .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
//                .andExpect(MockMvcResultMatchers.status().isOk());
//
//        MvcResult result = resultActions.andReturn();
//        String contentAsString = result.getResponse().getContentAsString();
//
//        Art[] arts = mapper.readValue(contentAsString, Art[].class);
//
//        assertEquals(expectedLength, arts.length);
//    }
//
//    @Test
//    void testWorksBySpecificArtistInSpecificMuseum() throws Exception {
//        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/museum/Prado/Leonardo da Vinci")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andExpect(MockMvcResultMatchers.status().isOk());
//
//        MvcResult result = resultActions.andReturn();
//        String contentAsString = result.getResponse().getContentAsString();
//
//        Art[] arts = mapper.readValue(contentAsString, Art[].class);
//
//        assertEquals("Madonna of the Carnation", arts[0].getTitle());
//    }
//
//    @Test
//    public void testPost() throws Exception {
//        Museum museum = new Museum();
//        museum.setName("Museum of Coding");
//        museum.setLocation("Javalopolis, I.D.E.");
//
//        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.post("/museum")
//                        .content(mapper.writeValueAsString(museum))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andExpect(MockMvcResultMatchers.status().isOk());
//
//        MvcResult result = resultActions.andReturn();
//        String contentAsString = result.getResponse().getContentAsString();
//
//        museum = mapper.readValue(contentAsString, Museum.class);
//
//        assertEquals("Museum of Coding", museum.getName());
//    }
//
//    @Test
//    void testPut() throws Exception {
//        Museum museum = new Museum();
//        museum.setName("Museum of Coding");
//        museum.setLocation("Javalopolis, I.D.E.");
//
//        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.put("/museum")
//                        .content(mapper.writeValueAsString(museum))
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON))
//                .andExpect(MockMvcResultMatchers.status().isOk());
//
//        MvcResult result = resultActions.andReturn();
//        String contentAsString = result.getResponse().getContentAsString();
//
//        museum = mapper.readValue(contentAsString, Museum.class);
//
//        assertEquals("Museum of Coding", museum.getName());
//    }
//
//
//}