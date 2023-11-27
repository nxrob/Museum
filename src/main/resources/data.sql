-- MUSEUMS --
INSERT INTO MUSEUM (id, name, location) VALUES
(100001, 'Museo Nacional del Prado', 'Madrid, Spain'),
(100002, 'National Gallery', 'London, UK'),
(100003, 'Tate Modern', 'London, UK'),
(100004, 'Metropolitan Museum of Art', 'New York City, USA'),
(100005, 'Los Angeles County Museum of Modern Art', 'Los Angeles, USA'),
(100006, 'Louvre Museum', 'Paris, France'),
(100007, 'Art Institute of Chicago', 'Chicago, USA'),
(100008, 'Hermitage Museum', 'St. Petersburg, Russia'),
(100009, 'Van Gogh Museum', 'Amsterdam, Netherlands'),
(100012, 'National Gallery of Art', 'Washington D.C., USA'),
(100013, 'Museum of Modern Art', 'New York City, USA')
;


-- EL GRECO --
INSERT INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200001, 'El Greco', '1541 - 1614', 'Crete, Greece', 'El Greco was a renowned Greek painter known for his distinct style of elongated figures and vibrant colors. He blended Byzantine traditions with Western art techniques and gained fame in Spain, particularly in Toledo. His work emphasized spiritual depth and emotion in religious subjects. He passed away in 1614, leaving a lasting legacy as a visionary artist.');
INSERT INTO PAINTING (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(101, 100001, 200001, 'The Nobleman with his Hand on his Chest', '1580', 'Oil on canvas', 'Spanish Renaissance', 'This portrait by El Greco, along with five others, was donated to the Museo Del Prado by the widow of the Duke of Arco, Master of the Horse to King Philip the fifth of Spain. One of the first El Greco paintings to be shown at the Prado, this gentleman has become famous for his melancholy gaze and mysterious identity.'),
(102, 100001, 200001, 'Christ carrying the Cross', '1602', 'Oil on canvas', 'Spanish Renaissance', 'El Greco''s "Christ Carrying the Cross" showcases Jesus'' burdened journey to crucifixion. The painting''s elongated forms and vibrant colors amplify the emotional weight, depicting both agony and divine resilience, creating a poignant representation of Christian conviction and the human condition.'),
(103, 100004, 200001, 'View of Toledo', 'circa 1596-1600', 'Oil on canvas', 'Spanish Renaissance', 'El Greco portrays Toledo with an otherworldly essence, employing dramatic lighting to evoke a spiritual atmosphere. The cityscape''s distorted perspectives and bold contrasts between light and shadow reflect the artist''s innovative and expressive style.'),
(104, 100001, 200001, 'The Disrobing of Christ', '1577-1579', 'Oil on canvas', 'Spanish Renaissance', 'In this poignant scene, El Greco captures the moment before Christ''s crucifixion. The elongated figures and intense emotions depict the anguish of Christ and the cruelty of his tormentors, showcasing the artist''s distinctive style and religious fervor.'),
(105, 100007, 200001, 'The Assumption of the Virgin', '1577-1579', 'Oil on canvas', 'Spanish Renaissance', 'This ethereal depiction of the Virgin Mary''s ascent into heaven showcases El Greco''s mastery of heavenly compositions. The figures'' elongation and celestial light convey a sense of spiritual elevation and divine transcendence.'),
(106, 100004, 200001, 'The Opening of the Fifth Seal', '1608-1614', 'Oil on canvas', 'Spanish Renaissance', 'El Greco''s final masterpiece portrays the biblical moment from the Book of Revelation. The intense, elongated figures express spiritual fervor, depicting martyrs'' souls pleading for justice as the heavens unfold, symbolizing the divine realm.'),
(107, 100001, 200001, 'The Annunciation', '1596-1600', 'Oil on canvas', 'Spanish Renaissance', 'El Greco''s rendition of the Annunciation scene exudes divine splendor and spiritual significance. The ethereal light and elongated figures emphasize the angel''s message to Mary, capturing the transcendent moment with reverence.'),
(108, 100001, 200001, 'The Adoration of the Shepherds', '1612-1614', 'Oil on canvas', 'Spanish Renaissance', 'This depiction of the shepherds'' adoration of the infant Jesus radiates with spiritual devotion. El Greco''s elongated figures and vibrant colors convey the awe and reverence of the humble witnesses to the divine birth.')
;

-- LEONARDO DA VINCI --
INSERT INTO ARTIST (id, name, dob_and_dod, birthplace, bio) VALUES (200002, 'Leonardo da Vinci', '1452 - 1519', 'Vinci, Italy', 'Leonardo da Vinci was a polymath of the Italian Renaissance, renowned for his achievements as a painter, sculptor, architect, scientist, and inventor. His artistry and intellect influenced generations, creating iconic works and pioneering advancements in various fields.');
INSERT INTO PAINTING (id, museum_id, artist_id, title, year_of, medium, style, description) VALUES
(200, 100006, 200002, 'Mona Lisa', '1503-1506', 'Oil on poplar panel', 'Renaissance', 'The enigmatic smile of the "Mona Lisa" remains one of the most famous and debated aspects of this portrait. Leonardo da Vinci''s masterful technique and intricate details continue to captivate viewers around the world.'),
(201, 100006, 200002, 'The Last Supper', '1495-1498', 'Tempera on gesso, pitch, and mastic', 'Renaissance', 'Leonardo da Vinci''s "The Last Supper" depicts the moment Jesus announces that one of his disciples will betray him. The painting''s composition and emotional depth have made it a masterpiece of religious art.'),
(202, 100006, 200002, 'Virgin of the Rocks', '1483-1486', 'Oil on panel', 'Renaissance', 'This depiction of the Madonna and Child with angels reflects Leonardo da Vinci''s mastery of light and shadow. The painting''s mystical atmosphere and intricate details showcase the artist''s exceptional skill.'),
(203, 100006, 200002, 'Lady with an Ermine', '1489-1490', 'Oil on wood', 'Renaissance', 'This portrait of Cecilia Gallerani features an ermine, symbolizing purity, and was praised for its innovative composition and the subject''s captivating gaze, characteristic of Leonardo da Vinci''s portraiture.'),
(204, 100008, 200002, 'Benois Madonna', '1478-1480', 'Tempera on panel', 'Renaissance', 'Leonardo da Vinci''s "Benois Madonna" portrays the Virgin Mary with the infant Jesus, displaying tender affection and intimacy between mother and child in a manner that was groundbreaking for its time.'),
(205, 100008, 200002, 'Annunciation', '1472-1475', 'Oil and tempera on panel', 'Renaissance', 'This early work by Leonardo da Vinci depicts the angel Gabriel''s announcement to the Virgin Mary. The painting showcases the artist''s talent for creating a serene and harmonious scene.'),
(206, 100001, 200002, 'Madonna of the Carnation', '1480-1490', 'Oil on panel', 'Renaissance', 'This tender portrayal of the Madonna and Child with a carnation flower reflects Leonardo da Vinci''s delicate approach to expressing maternal love and innocence.'),
(207, 100006, 200002, 'Ginevra de’ Benci', '1474-1478', 'Oil on panel', 'Renaissance', 'Leonardo da Vinci''s portrait of Ginevra de’ Benci is celebrated for its exquisite detail and enigmatic quality, capturing the subject''s intelligence and grace.'),
(208, 100003, 200002, 'Portrait of a Musician', '1485', 'Tempera on panel', 'Renaissance', 'This haunting portrait by Leonardo da Vinci is praised for its introspective mood and the artist''s skillful representation of musical expression.'),
(209, 100006, 200002, 'La Belle Ferronière', '1490-1496', 'Oil on panel', 'Renaissance', 'Leonardo da Vinci''s depiction of an unknown woman, possibly Lucrezia Crivelli, showcases his mastery of light and shadow, emphasizing the subject''s beauty and allure.'),
(210, 100005, 200002, 'Bacchus', '1510-1515', 'Oil on panel', 'Renaissance', 'This painting attributed to Leonardo da Vinci depicts Bacchus, the Roman god of wine, in a contemplative mood, reflecting the artist''s interest in mythology and the human form.')
;

