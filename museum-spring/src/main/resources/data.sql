-- MUSEUMS --

INSERT IGNORE INTO MUSEUM (id, name, location) VALUES
(100001, 'Museo Nacional del Prado', 'Madrid, Spain'),
(100002, 'National Gallery', 'London, UK'),
(100003, 'Tate Modern', 'London, UK'),
(100004, 'Metropolitan Museum of Art', 'New York City, USA'),
(100005, 'Los Angeles County Museum of Modern Art', 'Los Angeles, USA'),
(100006, 'Louvre Museum', 'Paris, France'),
(100007, 'Art Institute of Chicago', 'Chicago, USA'),
(100008, 'Hermitage Museum', 'St. Petersburg, Russia'),
(100009, 'Van Gogh Museum', 'Amsterdam, Netherlands'),
(100010, 'National Gallery of Art', 'Washington D.C., USA'),
(100011, 'Museum of Modern Art', 'New York City, USA'),
(100012, 'Guggenheim Museum', 'New York City, USA'),
(100013, 'Centre Pompidou', 'Paris, France'),
(100014, 'Uffizi Gallery', 'Florence, Italy'),
(100015, 'Vatican Museums', 'Florence, Italy')
;




-- PAINTINGS --

-- EL GRECO --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200001, 'El Greco', '1541 - 1614', 'Crete, Greece', 'El Greco was a renowned Greek painter known for his distinct style of elongated figures and vibrant colors. He blended Byzantine traditions with Western art techniques and gained fame in Spain, particularly in Toledo. His work emphasized spiritual depth and emotion in religious subjects. He passed away in 1614, leaving a lasting legacy as a visionary artist.');
INSERT IGNORE INTO PAINTING (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(101, 100001, 200001, 'The Nobleman with his Hand on his Chest', '1580', 'Oil on canvas', 'Spanish Renaissance', 'This portrait by El Greco, along with five others, was donated to the Museo Del Prado by the widow of the Duke of Arco, Master of the Horse to King Philip the fifth of Spain. One of the first El Greco paintings to be shown at the Prado, this gentleman has become famous for his melancholy gaze and mysterious identity.'),
(102, 100001, 200001, 'Christ carrying the Cross', '1602', 'Oil on canvas', 'Spanish Renaissance', 'El Greco''s `Christ Carrying the Cross` showcases Jesus'' burdened journey to crucifixion. The painting''s elongated forms and vibrant colors amplify the emotional weight, depicting both agony and divine resilience, creating a poignant representation of Christian conviction and the human condition.'),
(103, 100004, 200001, 'View of Toledo', '1596', 'Oil on canvas', 'Spanish Renaissance', 'El Greco portrays Toledo with an otherworldly essence, employing dramatic lighting to evoke a spiritual atmosphere. The cityscape''s distorted perspectives and bold contrasts between light and shadow reflect the artist''s innovative and expressive style.'),
(104, 100001, 200001, 'The Disrobing of Christ', '1577', 'Oil on canvas', 'Spanish Renaissance', 'In this poignant scene, El Greco captures the moment before Christ''s crucifixion. The elongated figures and intense emotions depict the anguish of Christ and the cruelty of his tormentors, showcasing the artist''s distinctive style and religious fervor.'),
(105, 100007, 200001, 'The Assumption of the Virgin', '1577', 'Oil on canvas', 'Spanish Renaissance', 'This ethereal depiction of the Virgin Mary''s ascent into heaven showcases El Greco''s mastery of heavenly compositions. The figures'' elongation and celestial light convey a sense of spiritual elevation and divine transcendence.'),
(106, 100004, 200001, 'The Opening of the Fifth Seal', '1608', 'Oil on canvas', 'Spanish Renaissance', 'El Greco''s final masterpiece portrays the biblical moment from the Book of Revelation. The intense, elongated figures express spiritual fervor, depicting martyrs'' souls pleading for justice as the heavens unfold, symbolizing the divine realm.'),
(107, 100001, 200001, 'The Annunciation', '1596', 'Oil on canvas', 'Spanish Renaissance', 'El Greco''s rendition of the Annunciation scene exudes divine splendor and spiritual significance. The ethereal light and elongated figures emphasize the angel''s message to Mary, capturing the transcendent moment with reverence.'),
(108, 100001, 200001, 'The Adoration of the Shepherds', '1612', 'Oil on canvas', 'Spanish Renaissance', 'This depiction of the shepherds'' adoration of the infant Jesus radiates with spiritual devotion. El Greco''s elongated figures and vibrant colors convey the awe and reverence of the humble witnesses to the divine birth.')
;

-- LEONARDO DA VINCI --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200002, 'Leonardo da Vinci', '1452 - 1519', 'Vinci, Italy', 'Leonardo da Vinci was a polymath of the Italian Renaissance, renowned for his achievements as a painter, sculptor, architect, scientist, and inventor. His artistry and intellect influenced generations, creating iconic works and pioneering advancements in various fields.');
INSERT IGNORE INTO PAINTING (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(200, 100006, 200002, 'Mona Lisa', '1503', 'Oil on poplar panel', 'Renaissance', 'The enigmatic smile of the `Mona Lisa` remains one of the most famous and debated aspects of this portrait. Leonardo da Vinci''s masterful technique and intricate details continue to captivate viewers around the world.'),
(201, 100006, 200002, 'The Last Supper', '1495', 'Tempera on gesso, pitch, and mastic', 'Renaissance', 'Leonardo da Vinci''s `The Last Supper` depicts the moment Jesus announces that one of his disciples will betray him. The painting''s composition and emotional depth have made it a masterpiece of religious art.'),
(202, 100006, 200002, 'Virgin of the Rocks', '1483', 'Oil on panel', 'Renaissance', 'This depiction of the Madonna and Child with angels reflects Leonardo da Vinci''s mastery of light and shadow. The painting''s mystical atmosphere and intricate details showcase the artist''s exceptional skill.'),
(203, 100006, 200002, 'Lady with an Ermine', '1489', 'Oil on wood', 'Renaissance', 'This portrait of Cecilia Gallerani features an ermine, symbolizing purity, and was praised for its innovative composition and the subject''s captivating gaze, characteristic of Leonardo da Vinci''s portraiture.'),
(204, 100008, 200002, 'Benois Madonna', '1478', 'Tempera on panel', 'Renaissance', 'Leonardo da Vinci''s `Benois Madonna` portrays the Virgin Mary with the infant Jesus, displaying tender affection and intimacy between mother and child in a manner that was groundbreaking for its time.'),
(205, 100008, 200002, 'Annunciation', '1472', 'Oil and tempera on panel', 'Renaissance', 'This early work by Leonardo da Vinci depicts the angel Gabriel''s announcement to the Virgin Mary. The painting showcases the artist''s talent for creating a serene and harmonious scene.'),
(206, 100001, 200002, 'Madonna of the Carnation', '1480', 'Oil on panel', 'Renaissance', 'This tender portrayal of the Madonna and Child with a carnation flower reflects Leonardo da Vinci''s delicate approach to expressing maternal love and innocence.'),
(207, 100006, 200002, 'Ginevra de’ Benci', '1474', 'Oil on panel', 'Renaissance', 'Leonardo da Vinci''s portrait of Ginevra de’ Benci is celebrated for its exquisite detail and enigmatic quality, capturing the subject''s intelligence and grace.'),
(208, 100003, 200002, 'Portrait of a Musician', '1485', 'Tempera on panel', 'Renaissance', 'This haunting portrait by Leonardo da Vinci is praised for its introspective mood and the artist''s skillful representation of musical expression.'),
(209, 100006, 200002, 'La Belle Ferronière', '1490', 'Oil on panel', 'Renaissance', 'Leonardo da Vinci''s depiction of an unknown woman, possibly Lucrezia Crivelli, showcases his mastery of light and shadow, emphasizing the subject''s beauty and allure.'),
(210, 100005, 200002, 'Bacchus', '1510', 'Oil on panel', 'Renaissance', 'This painting attributed to Leonardo da Vinci depicts Bacchus, the Roman god of wine, in a contemplative mood, reflecting the artist''s interest in mythology and the human form.')
;

-- VAN GOGH --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200003, 'Vincent Van Gogh', '1853 - 1890', 'Zundert, Netherlands', 'Vincent Van Gogh was a Dutch post-impressionist painter renowned for his vivid and emotional artworks. His unique style, characterized by bold colors and dramatic brushwork, had a profound impact on the art world. Despite struggles with mental health, he created an extensive body of work, including masterpieces like `Starry Night` and `Sunflowers.` He passed away in 1890, leaving a legacy of innovation and artistic brilliance.');
INSERT IGNORE INTO PAINTING (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(301, 100009, 200003, 'Starry Night', '1889', 'Oil on canvas', 'Post-Impressionism', 'One of Van Gogh''s most famous works, `Starry Night` depicts a swirling night sky over a village, showcasing the artist''s unique brushwork and use of color to convey emotion.'),
(302, 100011, 200003, 'Sunflowers', '1888', 'Oil on canvas', 'Post-Impressionism', 'This series of still-life paintings of sunflowers highlights Van Gogh''s use of vibrant colors and textured brushstrokes, symbolizing happiness and vitality.'),
(303, 100009, 200003, 'The Bedroom', '1888', 'Oil on canvas', 'Post-Impressionism', 'Van Gogh''s `The Bedroom` portrays his bedroom in Arles, France, with vivid colors and expressive lines, reflecting the artist''s emotional state.'),
(304, 100009, 200003, 'Irises', '1889', 'Oil on canvas', 'Post-Impressionism', 'This vibrant depiction of irises in a garden showcases Van Gogh''s mastery of color and texture, exuding a sense of vitality and movement.'),
(305, 100009, 200003, 'Café Terrace at Night', '1888', 'Oil on canvas', 'Post-Impressionism', 'Van Gogh''s `Café Terrace at Night` captures a vibrant café scene, with bold colors and swirling patterns, inviting viewers into the lively atmosphere of the night.'),
(306, 100011, 200003, 'Wheatfield with Crows', '1890', 'Oil on canvas', 'Post-Impressionism', 'This haunting landscape of a wheatfield with crows showcases Van Gogh''s emotional intensity and turbulent brushwork, often interpreted as reflective of his inner turmoil.'),
(307, 100009, 200003, 'The Starry Night Over the Rhône', '1888', 'Oil on canvas', 'Post-Impressionism', 'Similar to `Starry Night,` this painting portrays the night sky, this time over the Rhône River, showcasing Van Gogh''s fascination with celestial elements and their emotional impact.')
;


-- FRANCIS BACON --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200004, 'Francis Bacon', '1909 - 1992', 'Dublin, Ireland', 'Francis Bacon was an Irish-born figurative painter known for his emotionally charged and raw imagery. His works often depicted the human form in distressing and haunting ways, exploring themes of existentialism, violence, and the human condition. Bacon''s unique style and powerful compositions made him a leading figure in contemporary art.');
INSERT IGNORE INTO PAINTING (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(400, 100003, 200004, 'Three Studies for Figures at the Base of a Crucifixion', '1944', 'Oil and pastel on board', 'Surrealism', 'Bacon''s `Three Studies for Figures at the Base of a Crucifixion` is a powerful and unsettling triptych that marked a turning point in the artist''s career, with distorted figures reflecting the anguish of the post-war era.'),
(401, 100014, 200004, 'Study after Velázquez''s Portrait of Pope Innocent X', '1953', 'Oil on canvas', 'Surrealism', 'Bacon''s `Study after Velázquez''s Portrait of Pope Innocent X` reinterprets the classic painting with distorted forms and intense emotional impact.'),
(402, 100003, 200004, 'Painting 1946', '1946', 'Oil and pastel on linen', 'Surrealism', 'This work showcases Bacon''s use of bold colors and abstracted forms, capturing the existential anxiety prevalent in post-war Europe.'),
(403, 100015, 200004, 'Figure with Meat', '1954', 'Oil on canvas', 'Surrealism', 'A haunting and visceral depiction of a distorted figure surrounded by hanging carcasses, symbolizing the brutality of existence.');

-- ROY LICHTENSTEIN --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200005, 'Roy Lichtenstein', '1923 - 1997', 'New York City, USA', 'Roy Lichtenstein was an American pop artist, known for his comic strip-inspired artwork. His iconic pieces often featured bold colors, Ben-Day dots, and thick outlines, challenging the boundaries of high and low art. Lichtenstein''s work became synonymous with the Pop Art movement of the 1960s.');
INSERT IGNORE INTO PAINTING (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(500, 100003, 200005, 'Whaam!', '1963', 'Oil and acrylic paint on canvas', 'Pop Art', 'Lichtenstein''s `Whaam!` is an iconic diptych representing a fighter aircraft firing a rocket during combat, inspired by comic book imagery.'),
(501, 100013, 200005, 'Drowning Girl', '1963', 'Oil and synthetic polymer paint on canvas', 'Pop Art', 'This painting showcases Lichtenstein''s signature Ben-Day dots and bold lines, portraying a distressed woman in a melodramatic scene.'),
(502, 100012, 200005, 'Look Mickey', '1961', 'Oil on canvas', 'Pop Art', 'One of Lichtenstein''s earliest and most famous works, `Look Mickey` marks his transition to Pop Art, depicting Mickey Mouse and Donald Duck fishing, capturing the essence of popular culture.')
;

-- PICASSO --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200006, 'Pablo Picasso', '1881 - 1973', 'Málaga, Spain', 'Pablo Picasso was a Spanish painter, sculptor, and printmaker, considered one of the most influential artists of the 20th century. He co-founded the Cubist movement and created iconic works across various styles and mediums, showcasing unparalleled creativity and innovation in art.');
INSERT IGNORE INTO PAINTING (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(600, 100001, 200006, 'Las Meninas Series', '1957', 'Oil on canvas', 'Cubism', 'Picasso''s `Las Meninas Series` reinterprets Velázquez''s masterpiece in a series of 58 paintings, exploring perspective and form.'),
(601, 100004, 200006, 'Guernica', '1937', 'Oil on canvas', 'Cubism', 'A powerful anti-war statement, `Guernica` is one of Picasso''s most famous works, depicting the horrors of the Spanish Civil War.'),
(602, 100006, 200006, 'Les Demoiselles d''Avignon', '1907', 'Oil on canvas', 'Cubism', 'This groundbreaking painting is a key early work in the development of Cubism, depicting five nude female figures in a fragmented style.'),
(603, 100008, 200006, 'The Old Guitarist', '1903', 'Oil on panel', 'Blue Period', 'Part of Picasso''s Blue Period, `The Old Guitarist` portrays a blind musician in blue tones, reflecting themes of melancholy and poverty.'),
(604, 100012, 200006, 'Portrait of Dora Maar', '1937', 'Oil on canvas', 'Surrealism', 'Picasso''s portrait of Dora Maar, his lover and muse, showcases his exploration of Surrealist techniques and distorted forms.'),
(605, 100013, 200006, 'Les Femmes d''Alger', '1955', 'Oil on canvas', 'Cubism', 'Inspired by Delacroix''s painting, Picasso''s `Les Femmes d''Alger` series features 15 variations, showcasing his mastery of form and color.');


-- MATISSE --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200007, 'Henri Matisse', '1869 - 1954', 'Le Cateau-Cambrésis, France', 'Henri Matisse was a French artist known for his use of color and fluid forms. A leading figure of modern art, he explored various styles, from Fauvism to abstraction. Matisse''s vibrant and expressive works continue to influence art and inspire artists worldwide.');
INSERT IGNORE INTO PAINTING (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(700, 100001, 200007, 'The Dance', '1910', 'Oil on canvas', 'Fauvism', 'Matisse''s `The Dance` is a vibrant depiction of joyful, dancing figures, showcasing bold colors and simplified forms characteristic of Fauvism.'),
(701, 100002, 200007, 'Woman with a Hat', '1905', 'Oil on canvas', 'Fauvism', 'Considered a masterpiece of Fauvism, `Woman with a Hat` displays Matisse''s bold use of color and expressive brushwork.'),
(702, 100004, 200007, 'The Red Studio', '1911', 'Oil on canvas', 'Fauvism', 'In `The Red Studio,` Matisse explores the boundaries between interior and exterior space, using vivid red tones to emphasize the studio''s elements.'),
(703, 100006, 200007, 'La Danse II', '1932', 'Oil on canvas', 'Modernism', 'As a later rendition of `The Dance,` `La Danse II` reflects Matisse''s evolving style, emphasizing a more simplified and abstracted form.'),
(704, 100009, 200007, 'Goldfish', '1912', 'Oil on canvas', 'Fauvism', 'Matisse''s `Goldfish` captures the tranquility of a bowl of fish through a vivid palette and loose brushstrokes, highlighting his interest in decorative elements.'),
(705, 100012, 200007, 'The Joy of Life', '1905', 'Oil on canvas', 'Fauvism', 'This masterpiece embodies the essence of Fauvism, depicting a serene scene of nude figures in a landscape filled with vibrant colors and fluid forms.');


-- RUFINO TAMAYO --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200008, 'Rufino Tamayo', '1899 - 1991', 'Oaxaca, Mexico', 'Rufino Tamayo was a Mexican painter known for his distinct style that merged European modernist elements with Mexican folk art. His paintings often showcased strong colors and indigenous themes, reflecting a unique blend of cultures. Tamayo''qs work contributed significantly to Mexican art and gained international recognition.');
INSERT IGNORE INTO PAINTING (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(800, 100001, 200008, 'Trovador', '1945', 'Oil on canvas', 'Surrealism', 'In `Trovador,` Tamayo combines elements of surrealism with Mexican folk art, depicting a troubadour playing music amidst dreamlike imagery.'),
(801, 100003, 200008, 'Mujer con Collar', '1943', 'Oil on canvas', 'Surrealism', 'This painting portrays a woman with a necklace, showcasing Tamayo''s use of bold colors and simplified forms, characteristic of his style.'),
(802, 100004, 200008, 'Perro aullando a la luna', '1942', 'Oil on canvas', 'Surrealism', 'Tamayo''s `Perro aullando a la luna` captures a dog howling at the moon in a surreal and symbolic representation.'),
(803, 100007, 200008, 'Sandías', '1954', 'Oil on canvas', 'Modernism', 'In `Sandías,` Tamayo depicts watermelons in a composition that merges elements of abstraction and Mexican cultural motifs.'),
(804, 100009, 200008, 'Hombre en Fuego', '1963', 'Oil on canvas', 'Surrealism', 'Tamayo''s `Hombre en Fuego` portrays a figure engulfed in flames, exploring themes of passion and intensity.'),
(805, 100013, 200008, 'Dos Personajes Atacados por Perros', '1983', 'Mix media on canvas', 'Surrealism', 'This artwork depicts two characters under attack by dogs, showcasing Tamayo''s later surrealistic explorations.');






-- SCULPTURES --

-- AUGUSTE RODIN --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200009, 'Auguste Rodin', '1840 - 1917', 'Paris, France', 'Auguste Rodin was a French sculptor known for his groundbreaking work in sculpture, notably `The Thinker` and `The Kiss.` His innovative approach to form and expression revolutionized the art of sculpting, earning him worldwide acclaim.');
INSERT IGNORE INTO SCULPTURE (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(900, 100006, 200009, 'The Thinker', '1902', 'Bronze', 'Realism', 'Auguste Rodin''s `The Thinker` depicts a seated man lost in contemplation, symbolizing philosophical thinking and intellect.'),
(901, 100006, 200009, 'The Kiss', '1889', 'Marble', 'Neoclassical', 'Rodin''s `The Kiss` captures an intimate moment between lovers, illustrating passion and affection in a classical style.'),
(902, 100006, 200009, 'The Burghers of Calais', '1889', 'Bronze', 'Realism', 'This sculpture commemorates the bravery of six citizens of Calais who offered their lives during the Hundred Years'' War, displaying emotional depth and sacrifice.'),
(903, 100006, 200009, 'Balzac', '1898', 'Bronze', 'Realism', 'Rodin''s portrayal of the French writer Balzac, emphasizing the author''s intellectual and visionary qualities with a powerful and contemplative stance.')
;

-- MICHELANGELO  --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200010, 'Michelangelo', '1475 - 1564', 'Caprese Michelangelo, Italy', 'Michelangelo Buonarroti, an Italian sculptor, painter, and architect, is one of the most influential figures in Western art. He created masterpieces like `David` and the ceiling of the Sistine Chapel, showcasing unparalleled skill and artistic vision.');
INSERT IGNORE INTO SCULPTURE (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(1001, 100001, 200010, 'David', '1504', 'Marble', 'High Renaissance', 'Michelangelo''s `David` is an iconic sculpture depicting the biblical hero, renowned for its detailed anatomy and powerful expression.')
;

-- CONSTANTIN BRANCUSI --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200011, 'Constantin Brancusi', '1876 - 1957', 'Hobița, Romania', 'Constantin Brancusi was a Romanian sculptor known for his abstract works that pushed the boundaries of traditional sculpture. His pieces like `Bird in Space` and `The Kiss` redefined form and medium, inspiring modernist sculptors worldwide.');
INSERT IGNORE INTO SCULPTURE (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(1101, 100006, 200011, 'Bird in Space', '1928', 'Bronze', 'Modernism', 'Brancusi''s `Bird in Space` represents the essence of flight, showcasing sleek, elongated forms that evoke a sense of movement and freedom.'),
(1102, 100013, 200011, 'The Kiss', '1916', 'Marble', 'Modernism', 'Another interpretation of `The Kiss` by Brancusi, this sculpture captures the harmony and unity between two lovers with simplified, abstract forms.')
;

-- HENRY MOORE --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200012, 'Henry Moore', '1898 - 1986', 'Castleford, UK', 'Henry Moore, a British sculptor, revolutionized modern sculpture with his organic, abstract forms. His monumental works, such as `Reclining Figure` and `Large Two Forms,` became landmarks in contemporary art.');
INSERT IGNORE INTO SCULPTURE (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(1201, 100007, 200012, 'Reclining Figure', '1951', 'Bronze', 'Modernism', 'Henry Moore''s `Reclining Figure` explores the human form in repose, showcasing abstract, organic shapes and negative space.'),
(1202, 100012, 200012, 'Large Two Forms', '1966', 'Bronze', 'Modernism', 'This sculpture emphasizes Moore''s interest in the relationship between forms, portraying two abstract, interlocking shapes.')
;

-- LOUISE BOURGEOIS --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200013, 'Louise Bourgeois', '1911 - 2010', 'Paris, France', 'Louise Bourgeois, a French-American artist, was known for her emotionally charged sculptures. `Maman,` her giant spider sculpture, and her exploration of themes like motherhood and sexuality made her a leading figure in contemporary art.');
INSERT IGNORE INTO SCULPTURE (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(1301, 100014, 200013, 'Maman', '1999', 'Bronze', 'Contemporary', 'Louise Bourgeois''s `Maman` is a giant spider sculpture, symbolizing maternity and protection, while also evoking fear and anxiety.')
;

-- ISAMU NOGUCHI --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200014, 'Isamu Noguchi', '1904 - 1988', 'Los Angeles, USA', 'Isamu Noguchi was a Japanese-American artist known for his sculptures and landscape architecture. His abstract works, including `Red Cube,` embodied a unique blend of Eastern and Western aesthetics.');
INSERT IGNORE INTO SCULPTURE (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(1401, 100015, 200014, 'Red Cube', '1968', 'Steel', 'Abstract', 'Isamu Noguchi''s `Red Cube` is a geometric sculpture exploring space and form, standing as a symbol of strength and vitality.')
;

-- BARBARA HEPWORTH --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200015, 'Barbara Hepworth', '1903 - 1975', 'Wakefield, UK', 'Barbara Hepworth, a British artist, was a prominent figure in modern sculpture. Her abstract, organic forms, seen in works like `Single Form,` emphasized the relationship between sculpture and landscape.');
INSERT IGNORE INTO SCULPTURE (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(1501, 100011, 200015, 'Single Form', '1961', 'Bronze', 'Modernism', 'Barbara Hepworth''s `Single Form` is a monumental abstract sculpture symbolizing unity and the human spirit.')
;

-- JACQUES LIPCHITZ --
INSERT IGNORE INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200016, 'Jacques Lipchitz', '1891 - 1973', 'Druskininkai, Lithuania', 'Jacques Lipchitz was a Lithuanian-born French sculptor known for his Surrealist sculptures. Pieces like `Prometheus Strangling the Vulture II` and `Birth of the Muses` showcased his mastery of form and symbolism.');
INSERT IGNORE INTO SCULPTURE (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(1601, 100010, 200016, 'Prometheus Strangling the Vulture II', '1944', 'Bronze', 'Surrealism', 'Jacques Lipchitz''s sculpture portrays the mythological figure Prometheus engaged in a struggle against adversity.'),
(1602, 100004, 200016, 'Birth of the Muses', '1944', 'Bronze', 'Surrealism', 'This sculpture by Lipchitz depicts the mythical birth of the Muses, symbolizing creativity and inspiration.'),
(1603, 100002, 200016, 'Bather with a Shell', '1930', 'Bronze', 'Surrealism', 'Another work by Lipchitz, this sculpture captures a bather in a serene moment, holding a shell.')
;

--INSERT IGNORE INTO ART SELECT * FROM PAINTING;
--INSERT IGNORE INTO ART SELECT * FROM SCULPTURE;