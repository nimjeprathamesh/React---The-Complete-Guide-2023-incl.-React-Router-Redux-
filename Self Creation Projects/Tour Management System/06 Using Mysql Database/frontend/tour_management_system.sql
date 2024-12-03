-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 25, 2024 at 04:48 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tour_management_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `contactinfo`
--

DROP TABLE IF EXISTS `contactinfo`;
CREATE TABLE IF NOT EXISTS `contactinfo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Subject` varchar(255) NOT NULL,
  `Message` varchar(10000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contactinfo`
--

INSERT INTO `contactinfo` (`id`, `Name`, `Email`, `Subject`, `Message`) VALUES
(1, 'Prathamesh Nimje', 'nimjeprathamesh1@gmail.com', 'Purchase', 'I want to purchase an package.'),
(2, 'Prathamesh Nimje', 'nimjeprathamesh1@gmail.com', 'Purchase', 'I want to purchase an package.'),
(3, 'Robert Liot', 'liotrobert14@gmail.com', 'Purchase', 'I want to purchase an package.'),
(4, 'Poonam Nimje', 'nimjepoonam@gmail.com', 'Purchase', 'I want to purchase an package.'),
(5, 'Jayshree Nimje', 'nimjejayshree@gmail.com', 'Purchase', 'I want to purchase an package.'),
(6, 'Smita Nimje', 'nimjesmita@gmail.com', 'Purchase', 'I want to purchase an package.'),
(7, 'Rushita Nimje', 'nimjerushita@gmail.com', 'Purchase', 'I want to purchase an package.'),
(8, 'Shubham Shrirame', 'shrirameshubham@gmail.com', 'Purchase', 'I want to purchase an package.'),
(9, 'Rajesh Gosh', 'goshrajesh@gmail.com', 'Purchase', 'I want to purchase an package.'),
(10, 'Dhawal Bhanushali', 'bhanshalidhawal@gmail.com', 'Purchase', 'I want to purchase an package.'),
(11, 'Salman Khan', 'khansalman@gmail.com', 'Purchase', 'I want to purchase an package.');

-- --------------------------------------------------------

--
-- Table structure for table `destination`
--

DROP TABLE IF EXISTS `destination`;
CREATE TABLE IF NOT EXISTS `destination` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Date` date NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Details` varchar(10000) NOT NULL,
  `Duration` varchar(255) NOT NULL,
  `Image` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `destination`
--

INSERT INTO `destination` (`id`, `Date`, `Name`, `Details`, `Duration`, `Image`) VALUES
(1, '2023-05-23', 'Dubai', 'Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.\r\nDubai is the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai, the most populated of the 7 emirates of the United Arab Emirates. Established in the 18th century as a small fishing village, the city grew rapidly in the early 21st century with a focus on tourism and luxury, having the second most five-star hotels in the world, and the tallest building in the world, the Burj Khalifa, which is 828 metres (2,717 ft) tall.\r\nIn the eastern Arabian Peninsula on the coast of the Persian Gulf, it is also a major global transport hub for passengers and cargo. Oil revenue helped accelerate the development of the city, which was already a major mercantile hub. A centre for regional and international trade since the early 20th century, Dubais economy relies on revenues from trade, tourism, aviation, real estate, and financial services. Oil production contributed less than 1 percent of the emirates GDP in 2018.The city has a population of around 3.49 million (as of 2021).', '8 Days 9 Nights', 'images/burj-khalifa.jpg'),
(2, '2023-05-23', 'Sikkim', 'Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. Part of the Himalayas, the area has a dramatic landscape that includes Indias highest mountain, 8,586m Kangchenjunga. Sikkim is also home to glaciers, alpine meadows and thousands of varieties of wildflowers. Steep paths lead to hilltop Buddhist monasteries such as Pemayangtse, which dates to the early 1700s\\r\\nSikkim is a state in northeastern India. It borders the Tibet Autonomous Region of China in the north and northeast, Bhutan in the east, Koshi Province of Nepal in the west and West Bengal in the south. Sikkim is also close to the Siliguri Corridor, which borders Bangladesh. Sikkim is the least populous and second smallest among the Indian states. Situated in the Eastern Himalaya, Sikkim is notable for its biodiversity, including alpine and subtropical climates, as well as being a host to Kangchenjunga, the highest peak in India and third highest on Earth. Sikkims capital and largest city is Gangtok. Almost 35% of the state is covered by Khangchendzonga National Park - a UNESCO World Heritage Site.\\r\\nThe Kingdom of Sikkim was founded by the Namgyal dynasty in the 17th century. It was ruled by Buddhist priest-kings known as the Chogyal. It became a princely state of British India in 1890. Following Indian independence, Sikkim continued its protectorate status with the Union of India after 1947, and the Republic of India after 1950. It enjoyed the highest literacy rate and per capita income among Himalayan states. In 1973, anti-royalist riots took place in front of the Chogyals palace. In 1975, after the Indian Army took over the city of Gangtok, a referendum was held that led to the dissolution of the monarchy and Sikkim joining India as its 22nd state.', '4 Days 5 Nights', 'images/trevi-fountain.jpg'),
(3, '2023-05-23', 'Bangkok, Thailand', 'Bangkok, Thailands capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and its sacred Wat Phra Kaew Temple. Nearby is Wat Pho Temple with an enormous reclining Buddha and, on the opposite shore, Wat Arun Temple with its steep steps and Khmer-style spire.\\r\\nBangkok is the capital and most populous city of Thailand. The city occupies 1,568.7 square kilometres (605.7 sq mi) in the Chao Phraya River delta in central Thailand and has an estimated population of 10.539 million as of 2020, 15.3 percent of the countrys population. Over 14 million people (22.2 percent) lived within the surrounding Bangkok Metropolitan Region at the 2010 census, making Bangkok an extreme primate city, dwarfing Thailands other urban centres in both size and importance to the national economy.\\r\\nBangkok traces its roots to a small trading post during the Ayutthaya Kingdom in the 15th century, which eventually grew and became the site of two capital cities, Thonburi in 1768 and Rattanakosin in 1782. Bangkok was at the heart of the modernization of Siam, later renamed Thailand, during the late-19th century, as the country faced pressures from the West. The city was at the centre of Thailands political struggles throughout the 20th century, as the country abolished absolute monarchy, adopted constitutional rule, and underwent numerous coups and several uprisings. The city, incorporated as a special administrative area under the Bangkok Metropolitan Administration in 1972, grew rapidly during the 1960s through the 1980s and now exerts a significant impact on Thailands politics, economy, education, media and modern society.', '5 Days 5 Nights', 'images/iceland.jpg'),
(4, '2023-05-23', 'Marseille, France', 'Marseille, a Marseille, a port city in southern France, has been a crossroads of immigration and trade since its founding by the Greeks circa 600 B.C. At its heart is the Vieux-Port (Old Port), where fishmongers sell their catch along the boat-lined quay. Basilique Notre-Dame-de-la-Garde is a Romanesque-Byzantine church. Modern landmarks include Le Corbusiers influential Cité Radieuse complex and Zaha Hadids CMA CGM Tower.\\r\\nMarseille is the prefecture of the French department of Bouches-du-Rhône and capital of the Provence-Alpes-Cote d Azur region. Situated in the Provence region of southern France, it is located on the coast of the Gulf of Lion, part of the Mediterranean Sea, near the mouth of the Rhône river. Its occupants are called Marseillais.\\r\\nMarseille is the second most populous city in France, with 870,321 inhabitants in 2020 (Jan. census) over a municipal territory of 241 km2 (93 sq mi). Together with its suburbs and exurbs, the Marseille metropolitan area, which extends over 3,972 km2 (1,534 sq mi), had a population of 1,879,601 at the Jan. 2020 census, the third most populated in France after those of Paris and Lyon. The cities of Marseille, Aix-en-Provence, and 90 suburban municipalities have formed since 2016 the Aix-Marseille-Provence Metropolis, an indirectly elected metropolitan authority now in charge of wider metropolitan issues, with a population of 1,903,173 at the Jan. 2020 census.\\r\\n\\r\\nPort city in southern France, has been a crossroads of immigration and trade since its founding by the Greeks circa 600 B.C. At its heart is the Vieux-Port (Old Port), where fishmongers sell their catch along the boat-lined quay. Basilique Notre-Dame-de-la-Garde is a Romanesque-Byzantine church. Modern landmarks include Le Corbusiers influential Cité Radieuse complex and Zaha Hadids CMA CGM Tower.', '5 Days 6 Nights', 'images/marseille_france.jpg'),
(5, '2023-05-23', 'Bordeaux, France', 'Bordeaux, hub of the famed wine-growing region, is a port city on the Garonne River in southwestern France. Its known for its Gothic Cathédrale Saint-André, 18th- to 19th-century mansions and notable art museums such as the Musée des Beaux-Arts de Bordeaux. Public gardens line the curving river quays. The grand Place de la Bourse, centered on the Three Graces fountain, overlooks the Miroir d Eau reflecting pool.\\r\\nBordeaux is a port city on the river Garonne in the Gironde department, Southwestern France. It is the capital of the Nouvelle-Aquitaine region, as well as the prefecture of the Gironde department. Its inhabitants are called \\\"Bordelais\\\" (masculine) or \\\"Bordelaises\\\" (feminine). The term \\\"Bordelais\\\" may also refer to the city and its surrounding region.\\r\\nThe city of Bordeaux proper had a population of 259,809 in 2020 within its small municipal territory of 49 km2 (19 sq mi), but together with its suburbs and exurbs the Bordeaux metropolitan area had a population of 1,376,375 that same year (Jan. 2020 census), the sixth-most populated in France after Paris, Lyon, Marseille, Lille, and Toulouse. Bordeaux and 27 suburban municipalities form the Bordeaux Metropolis, an indirectly elected metropolitan authority now in charge of wider metropolitan issues. The Bordeaux Metropolis, with a population of 819,604 at the Jan. 2020 census, is the fifth most populated metropolitan council in France after those of Paris, Marseille, Lyon and Lille.', '5 Days 6 Nights', 'images/bordeaux_france.jpg'),
(6, '2023-05-23', 'Paris, France', 'Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.\\r\\nParis is the capital and most populous city of France, with an official estimated population of 2,102,650 residents as of 1 January 2023 in an area of more than 105 km² (41 sq mi), making it the fourth-most populated city in the European Union as well as the 30th most densely populated city in the world in 2022. Since the 17th century, Paris has been one of the worlds major centres of finance, diplomacy, commerce, fashion, gastronomy, and science. For its leading role in the arts and sciences, as well as its early and extensive system of street lighting, in the 19th century, it became known as \\\"the City of Light\\\". Like London, prior to the Second World War, it was also sometimes called the capital of the world.\\r\\nThe City of Paris is the centre of the Ile-de-France region, or Paris Region, with an official estimated population of 12,271,794 inhabitants on January 1, 2023, or about 19% of the population of France, making the region Frances primate city. The Paris Region had a GDP of €739 billion ($743 billion) in 2019, the highest in Europe. According to the Economist Intelligence Unit Worldwide Cost of Living Survey, in 2022, Paris was the city with the ninth-highest cost of living in the world.', '5 Days 6 Nights', 'images/paris_france.jpg'),
(7, '2023-05-23', 'Nice, France', 'Nice, capital of the Alpes-Maritimes department on the French Riviera, sits on the pebbly shores of the Baie des Anges. Founded by the Greeks and later a retreat for 19th-century European elite, the city has also long attracted artists. Former resident Henri Matisse is honored with a career-spanning collection of paintings at Musee Matisse. Musee Marc Chagall features some of its namesakes major religious works.\\r\\nNice is the prefecture of the Alpes-Maritimes department in France. The Nice agglomeration extends far beyond the administrative city limits, with a population of nearly 1 million[4][3] on an area of 744 km2 (287 sq mi).[3] Located on the French Riviera, the southeastern coast of France on the Mediterranean Sea, at the foot of the French Alps, Nice is the second-largest French city on the Mediterranean coast and second-largest city in the Provence-Alpes-Cote d Azur region after Marseille. Nice is approximately 13 kilometres (8 mi) from the principality of Monaco and 30 kilometres (19 mi) from the French–Italian border. Nices airport serves as a gateway to the region.\\r\\nThe city is nicknamed Nice la Belle (Nissa La Bella in Niçard), meaning Nice the Beautiful, which is also the title of the unofficial anthem of Nice, written by Menica Rondelly in 1912. The area of todays Nice contains Terra Amata, an archaeological site which displays evidence of a very early use of fire 380,000 years ago. Around 350 BC, Greeks of Marseille founded a permanent settlement and called it Νίκαια, Nikaia, after Nike, the goddess of victory.[5] Through the ages, the town has changed hands many times. Its strategic location and port significantly contributed to its maritime strength. From 1388 it was a dominion of Savoy, then became part of the French First Republic between 1792 and 1815, when it was returned to the Kingdom of Piedmont-Sardinia, the legal predecessor of the Kingdom of Italy, until its re-annexation by France in 1860.', '5 Days 6 Nights', 'images/nice_france.jpg'),
(8, '2023-06-25', 'Newyork', 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough thats among the worlds major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.\\u003Cbr /\\u003E\\u003Cbr /\\u003E\\r\\nNew York, often called New York City or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is the most densely populated major city in the United States and more than twice as populous as Los Angeles, the nations second-largest city. The city also has a population that is larger than that of 38 individual U.S. states. New York City is located at the southern tip of New York State. The city constitutes the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the U.S. by both population and urban area. With over 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York is one of the worlds most populous megacities, and over 58 million people live within 250 mi (400 km) of the city. New York City is a global cultural, financial, high-tech, entertainment, glamor, and media center with a significant influence on commerce, health care and life sciences, research, technology, education, politics, tourism, dining, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy, and is sometimes described as the capital of the world.\\u003Cbr /\\u003E\\u003Cbr /\\u003E\\r\\nSituated on one of the worlds largest natural harbors and extending into the Atlantic Ocean, New York City comprises five boroughs, each of which is coextensive with a respective county of the state of New York. The five boroughs, which were created in 1898 when local governments were consolidated into a single municipal entity, are: Brooklyn (in Kings County), Queens (in Queens County), Manhattan (in New York County), The Bronx (in Bronx County), and Staten Island (in Richmond County).', '5 Days 5 Nights', 'images/tower-bridge.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `destinationdata`
--

DROP TABLE IF EXISTS `destinationdata`;
CREATE TABLE IF NOT EXISTS `destinationdata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Date` date NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Details` varchar(10000) NOT NULL,
  `Duration` varchar(255) NOT NULL,
  `Image` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `destinationdata`
--

INSERT INTO `destinationdata` (`id`, `Date`, `Name`, `Details`, `Duration`, `Image`) VALUES
(1, '2023-05-24', 'Dubai', 'Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.\r\n\r\nDubai is the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai, the most populated of the 7 emirates of the United Arab Emirates. Established in the 18th century as a small fishing village, the city grew rapidly in the early 21st century with a focus on tourism and luxury, having the second most five-star hotels in the world, and the tallest building in the world, the Burj Khalifa, which is 828 metres (2,717 ft) tall.\r\n\r\nIn the eastern Arabian Peninsula on the coast of the Persian Gulf, it is also a major global transport hub for passengers and cargo. Oil revenue helped accelerate the development of the city, which was already a major mercantile hub. A centre for regional and international trade since the early 20th century, Dubais economy relies on revenues from trade, tourism, aviation, real estate, and financial services. Oil production contributed less than 1 percent of the emirates GDP in 2018.The city has a population of around 3.49 million (as of 2021).', '8 Days 9 Nights', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2022/10/burj-khalifa-g6042f22f6_640.jpg'),
(2, '2023-05-23', 'Sikkim', 'Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. Part of the Himalayas, the area has a dramatic landscape that includes Indias highest mountain, 8,586m Kangchenjunga. Sikkim is also home to glaciers, alpine meadows and thousands of varieties of wildflowers. Steep paths lead to hilltop Buddhist monasteries such as Pemayangtse, which dates to the early 1700s\\r\\nSikkim is a state in northeastern India. It borders the Tibet Autonomous Region of China in the north and northeast, Bhutan in the east, Koshi Province of Nepal in the west and West Bengal in the south. Sikkim is also close to the Siliguri Corridor, which borders Bangladesh. Sikkim is the least populous and second smallest among the Indian states. Situated in the Eastern Himalaya, Sikkim is notable for its biodiversity, including alpine and subtropical climates, as well as being a host to Kangchenjunga, the highest peak in India and third highest on Earth. Sikkims capital and largest city is Gangtok. Almost 35% of the state is covered by Khangchendzonga National Park - a UNESCO World Heritage Site.\\r\\nThe Kingdom of Sikkim was founded by the Namgyal dynasty in the 17th century. It was ruled by Buddhist priest-kings known as the Chogyal. It became a princely state of British India in 1890. Following Indian independence, Sikkim continued its protectorate status with the Union of India after 1947, and the Republic of India after 1950. It enjoyed the highest literacy rate and per capita income among Himalayan states. In 1973, anti-royalist riots took place in front of the Chogyals palace. In 1975, after the Indian Army took over the city of Gangtok, a referendum was held that led to the dissolution of the monarchy and Sikkim joining India as its 22nd state.', '4 Days 5 Nights', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2022/10/trevi-fountain-gb603e661c_640.jpg'),
(3, '2023-05-23', 'Bangkok, Thailand', 'Bangkok, Thailands capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and its sacred Wat Phra Kaew Temple. Nearby is Wat Pho Temple with an enormous reclining Buddha and, on the opposite shore, Wat Arun Temple with its steep steps and Khmer-style spire.\\r\\nBangkok is the capital and most populous city of Thailand. The city occupies 1,568.7 square kilometres (605.7 sq mi) in the Chao Phraya River delta in central Thailand and has an estimated population of 10.539 million as of 2020, 15.3 percent of the countrys population. Over 14 million people (22.2 percent) lived within the surrounding Bangkok Metropolitan Region at the 2010 census, making Bangkok an extreme primate city, dwarfing Thailands other urban centres in both size and importance to the national economy.\\r\\nBangkok traces its roots to a small trading post during the Ayutthaya Kingdom in the 15th century, which eventually grew and became the site of two capital cities, Thonburi in 1768 and Rattanakosin in 1782. Bangkok was at the heart of the modernization of Siam, later renamed Thailand, during the late-19th century, as the country faced pressures from the West. The city was at the centre of Thailands political struggles throughout the 20th century, as the country abolished absolute monarchy, adopted constitutional rule, and underwent numerous coups and several uprisings. The city, incorporated as a special administrative area under the Bangkok Metropolitan Administration in 1972, grew rapidly during the 1960s through the 1980s and now exerts a significant impact on Thailands politics, economy, education, media and modern society.', '5 Days 5 Nights', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/iceland-4699702_640.jpg'),
(4, '2023-05-23', 'Marseille, France', 'Marseille, a Marseille, a port city in southern France, has been a crossroads of immigration and trade since its founding by the Greeks circa 600 B.C. At its heart is the Vieux-Port (Old Port), where fishmongers sell their catch along the boat-lined quay. Basilique Notre-Dame-de-la-Garde is a Romanesque-Byzantine church. Modern landmarks include Le Corbusiers influential Cité Radieuse complex and Zaha Hadids CMA CGM Tower.\\r\\nMarseille is the prefecture of the French department of Bouches-du-Rhône and capital of the Provence-Alpes-Cote d Azur region. Situated in the Provence region of southern France, it is located on the coast of the Gulf of Lion, part of the Mediterranean Sea, near the mouth of the Rhône river. Its occupants are called Marseillais.\\r\\nMarseille is the second most populous city in France, with 870,321 inhabitants in 2020 (Jan. census) over a municipal territory of 241 km2 (93 sq mi). Together with its suburbs and exurbs, the Marseille metropolitan area, which extends over 3,972 km2 (1,534 sq mi), had a population of 1,879,601 at the Jan. 2020 census, the third most populated in France after those of Paris and Lyon. The cities of Marseille, Aix-en-Provence, and 90 suburban municipalities have formed since 2016 the Aix-Marseille-Provence Metropolis, an indirectly elected metropolitan authority now in charge of wider metropolitan issues, with a population of 1,903,173 at the Jan. 2020 census.\\r\\n\\r\\nPort city in southern France, has been a crossroads of immigration and trade since its founding by the Greeks circa 600 B.C. At its heart is the Vieux-Port (Old Port), where fishmongers sell their catch along the boat-lined quay. Basilique Notre-Dame-de-la-Garde is a Romanesque-Byzantine church. Modern landmarks include Le Corbusiers influential Cité Radieuse complex and Zaha Hadids CMA CGM Tower.', '5 Days 6 Nights', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/destinations4.jpg'),
(5, '2023-05-23', 'Bordeaux, France', 'Bordeaux, hub of the famed wine-growing region, is a port city on the Garonne River in southwestern France. Its known for its Gothic Cathédrale Saint-André, 18th- to 19th-century mansions and notable art museums such as the Musée des Beaux-Arts de Bordeaux. Public gardens line the curving river quays. The grand Place de la Bourse, centered on the Three Graces fountain, overlooks the Miroir d Eau reflecting pool.\\r\\nBordeaux is a port city on the river Garonne in the Gironde department, Southwestern France. It is the capital of the Nouvelle-Aquitaine region, as well as the prefecture of the Gironde department. Its inhabitants are called \\\"Bordelais\\\" (masculine) or \\\"Bordelaises\\\" (feminine). The term \\\"Bordelais\\\" may also refer to the city and its surrounding region.\\r\\nThe city of Bordeaux proper had a population of 259,809 in 2020 within its small municipal territory of 49 km2 (19 sq mi), but together with its suburbs and exurbs the Bordeaux metropolitan area had a population of 1,376,375 that same year (Jan. 2020 census), the sixth-most populated in France after Paris, Lyon, Marseille, Lille, and Toulouse. Bordeaux and 27 suburban municipalities form the Bordeaux Metropolis, an indirectly elected metropolitan authority now in charge of wider metropolitan issues. The Bordeaux Metropolis, with a population of 819,604 at the Jan. 2020 census, is the fifth most populated metropolitan council in France after those of Paris, Marseille, Lyon and Lille.', '5 Days 6 Nights', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/destinations3.jpg'),
(6, '2023-05-23', 'Paris, France', 'Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.\\r\\nParis is the capital and most populous city of France, with an official estimated population of 2,102,650 residents as of 1 January 2023 in an area of more than 105 km² (41 sq mi), making it the fourth-most populated city in the European Union as well as the 30th most densely populated city in the world in 2022. Since the 17th century, Paris has been one of the worlds major centres of finance, diplomacy, commerce, fashion, gastronomy, and science. For its leading role in the arts and sciences, as well as its early and extensive system of street lighting, in the 19th century, it became known as \\\"the City of Light\\\". Like London, prior to the Second World War, it was also sometimes called the capital of the world.\\r\\nThe City of Paris is the centre of the Ile-de-France region, or Paris Region, with an official estimated population of 12,271,794 inhabitants on January 1, 2023, or about 19% of the population of France, making the region Frances primate city. The Paris Region had a GDP of €739 billion ($743 billion) in 2019, the highest in Europe. According to the Economist Intelligence Unit Worldwide Cost of Living Survey, in 2022, Paris was the city with the ninth-highest cost of living in the world.', '5 Days 6 Nights', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/destinations2.jpg'),
(7, '2023-05-23', 'Nice, France', 'Nice, capital of the Alpes-Maritimes department on the French Riviera, sits on the pebbly shores of the Baie des Anges. Founded by the Greeks and later a retreat for 19th-century European elite, the city has also long attracted artists. Former resident Henri Matisse is honored with a career-spanning collection of paintings at Musee Matisse. Musee Marc Chagall features some of its namesakes major religious works.\\r\\nNice is the prefecture of the Alpes-Maritimes department in France. The Nice agglomeration extends far beyond the administrative city limits, with a population of nearly 1 million[4][3] on an area of 744 km2 (287 sq mi).[3] Located on the French Riviera, the southeastern coast of France on the Mediterranean Sea, at the foot of the French Alps, Nice is the second-largest French city on the Mediterranean coast and second-largest city in the Provence-Alpes-Cote d Azur region after Marseille. Nice is approximately 13 kilometres (8 mi) from the principality of Monaco and 30 kilometres (19 mi) from the French–Italian border. Nices airport serves as a gateway to the region.\\r\\nThe city is nicknamed Nice la Belle (Nissa La Bella in Niçard), meaning Nice the Beautiful, which is also the title of the unofficial anthem of Nice, written by Menica Rondelly in 1912. The area of todays Nice contains Terra Amata, an archaeological site which displays evidence of a very early use of fire 380,000 years ago. Around 350 BC, Greeks of Marseille founded a permanent settlement and called it Νίκαια, Nikaia, after Nike, the goddess of victory.[5] Through the ages, the town has changed hands many times. Its strategic location and port significantly contributed to its maritime strength. From 1388 it was a dominion of Savoy, then became part of the French First Republic between 1792 and 1815, when it was returned to the Kingdom of Piedmont-Sardinia, the legal predecessor of the Kingdom of Italy, until its re-annexation by France in 1860.', '5 Days 6 Nights', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/destinations1.jpg'),
(8, '2023-05-23', 'Newyork', 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough thats among the worlds major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.\\u003Cbr /\\u003E\\u003Cbr /\\u003E\\r\\nNew York, often called New York City or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is the most densely populated major city in the United States and more than twice as populous as Los Angeles, the nations second-largest city. The city also has a population that is larger than that of 38 individual U.S. states. New York City is located at the southern tip of New York State. The city constitutes the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the U.S. by both population and urban area. With over 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York is one of the worlds most populous megacities, and over 58 million people live within 250 mi (400 km) of the city. New York City is a global cultural, financial, high-tech, entertainment, glamor, and media center with a significant influence on commerce, health care and life sciences, research, technology, education, politics, tourism, dining, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy, and is sometimes described as the capital of the world.\\u003Cbr /\\u003E\\u003Cbr /\\u003E\\r\\nSituated on one of the worlds largest natural harbors and extending into the Atlantic Ocean, New York City comprises five boroughs, each of which is coextensive with a respective county of the state of New York. The five boroughs, which were created in 1898 when local governments were consolidated into a single municipal entity, are: Brooklyn (in Kings County), Queens (in Queens County), Manhattan (in New York County), The Bronx (in Bronx County), and Staten Island (in Richmond County).', '5 Days 5 Nights', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2022/10/tower-bridge-g51a67256d_640.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `membership`
--

DROP TABLE IF EXISTS `membership`;
CREATE TABLE IF NOT EXISTS `membership` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Type_of_Tour` varchar(255) NOT NULL,
  `Location` varchar(1000) NOT NULL,
  `Image` varchar(10000) NOT NULL,
  `Package_Price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `membership`
--

INSERT INTO `membership` (`id`, `Type_of_Tour`, `Location`, `Image`, `Package_Price`) VALUES
(1, 'Business Tour', 'Suzhou-China', 'images/business tour 2.jpg', 199),
(2, 'Family Tour', 'Suzhou-China', 'images/family tour.jpg', 199),
(3, 'Business Tour', 'Suzhou-China', 'images/business tour 1.jpg', 199);

-- --------------------------------------------------------

--
-- Table structure for table `membershipdata`
--

DROP TABLE IF EXISTS `membershipdata`;
CREATE TABLE IF NOT EXISTS `membershipdata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Type_of_Tour` varchar(255) NOT NULL,
  `Location` varchar(1000) NOT NULL,
  `Image` varchar(1000) NOT NULL,
  `Package_Price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `membershipdata`
--

INSERT INTO `membershipdata` (`id`, `Type_of_Tour`, `Location`, `Image`, `Package_Price`) VALUES
(1, 'Business Tour', 'Suzhou-China', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/travel-2081174_640.jpg', 199),
(2, 'Family Tour', 'Suzhou-China', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/travel-2081174_640.jpg', 199),
(3, 'Business Tour', 'Suzhou-China', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/zermatt-3303684_640.jpg', 199);

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

DROP TABLE IF EXISTS `packages`;
CREATE TABLE IF NOT EXISTS `packages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(20) NOT NULL,
  `Location` varchar(1000) NOT NULL,
  `Image` varchar(1000) NOT NULL,
  `Details` varchar(10000) NOT NULL,
  `Duration` varchar(1000) NOT NULL,
  `Price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `Title`, `Location`, `Image`, `Details`, `Duration`, `Price`) VALUES
(1, 'Adventour', 'Adventour', 'images/adventure.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis nulla vel lorem tempor congue. Donec a dolor sollicitudin, posuere magna a, fermentum sapien. Pellentesque accumsan ut odio sit amet venenatis. Etiam sagittis tristique pharetra. Nam rutrum enim at nisi consequat volutpat. Donec efficitur est quis velit consequat mattis vel in nulla. Sed fermentum id tellus ac vestibulum. Aliquam quis aliquam eros, id pulvinar tellus. Vivamus facilisis ante sit amet purus dictum aliquam. Maecenas dapibus iaculis diam, non congue arcu interdum in.\r\n\r\nCras lacinia ligula sed imperdiet condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas semper cursus erat. Integer at ipsum elit. Sed at ante quis diam iaculis faucibus sit amet eget ligula. Cras auctor magna sed tellus dapibus, vitae dignissim lacus pretium. Fusce congue ultrices pharetra. Nulla facilisi. Donec congue orci ac bibendum fringilla. Aliquam volutpat at nisl at tempus.\r\n\r\nMorbi id tempus tortor, ut vulputate justo. Duis id convallis nulla. Mauris justo ex, sodales in massa a, varius vulputate tortor. Sed vestibulum vel velit eu sollicitudin. Nullam molestie rhoncus consequat. Vivamus at cursus augue. Sed pharetra maximus orci, non pharetra odio maximus vitae. Etiam vel odio euismod, ullamcorper orci vel, posuere mauris. Nunc suscipit ante ac augue ultricies, vel tristique nibh lacinia. Fusce tempus rhoncus erat vitae tempor. Fusce laoreet efficitur sem, vel sollicitudin augue scelerisque sit amet. Sed vestibulum quam eu augue euismod, ut condimentum ante viverra. In id metus eget orci tincidunt interdum. Aenean eget nulla scelerisque, pretium tortor ut, interdum risus.', '10 Days 9 Nights', 199),
(2, 'Simply Andaman', 'Iceland', 'images/trevi-fountain.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis nulla vel lorem tempor congue. Donec a dolor sollicitudin, posuere magna a, fermentum sapien. Pellentesque accumsan ut odio sit amet venenatis. Etiam sagittis tristique pharetra. Nam rutrum enim at nisi consequat volutpat. Donec efficitur est quis velit consequat mattis vel in nulla. Sed fermentum id tellus ac vestibulum. Aliquam quis aliquam eros, id pulvinar tellus. Vivamus facilisis ante sit amet purus dictum aliquam. Maecenas dapibus iaculis diam, non congue arcu interdum in.\r\n\r\nCras lacinia ligula sed imperdiet condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas semper cursus erat. Integer at ipsum elit. Sed at ante quis diam iaculis faucibus sit amet eget ligula. Cras auctor magna sed tellus dapibus, vitae dignissim lacus pretium. Fusce congue ultrices pharetra. Nulla facilisi. Donec congue orci ac bibendum fringilla. Aliquam volutpat at nisl at tempus.\r\n\r\nMorbi id tempus tortor, ut vulputate justo. Duis id convallis nulla. Mauris justo ex, sodales in massa a, varius vulputate tortor. Sed vestibulum vel velit eu sollicitudin. Nullam molestie rhoncus consequat. Vivamus at cursus augue. Sed pharetra maximus orci, non pharetra odio maximus vitae. Etiam vel odio euismod, ullamcorper orci vel, posuere mauris. Nunc suscipit ante ac augue ultricies, vel tristique nibh lacinia. Fusce tempus rhoncus erat vitae tempor. Fusce laoreet efficitur sem, vel sollicitudin augue scelerisque sit amet. Sed vestibulum quam eu augue euismod, ut condimentum ante viverra. In id metus eget orci tincidunt interdum. Aenean eget nulla scelerisque, pretium tortor ut, interdum risus', '10 Days 9 Nights', 199),
(3, 'Spirational Himachal', 'Iceland', 'images/tower-bridge.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis nulla vel lorem tempor congue. Donec a dolor sollicitudin, posuere magna a, fermentum sapien. Pellentesque accumsan ut odio sit amet venenatis. Etiam sagittis tristique pharetra. Nam rutrum enim at nisi consequat volutpat. Donec efficitur est quis velit consequat mattis vel in nulla. Sed fermentum id tellus ac vestibulum. Aliquam quis aliquam eros, id pulvinar tellus. Vivamus facilisis ante sit amet purus dictum aliquam. Maecenas dapibus iaculis diam, non congue arcu interdum in. Cras lacinia ligula sed imperdiet condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas semper cursus erat. Integer at ipsum elit. Sed at ante quis diam iaculis faucibus sit amet eget ligula. Cras auctor magna sed tellus dapibus, vitae dignissim lacus pretium. Fusce congue ultrices pharetra. Nulla facilisi. Donec congue orci ac bibendum fringilla. Aliquam volutpat at nisl at tempus. Morbi id tempus tortor, ut vulputate justo. Duis id convallis nulla. Mauris justo ex, sodales in massa a, varius vulputate tortor. Sed vestibulum vel velit eu sollicitudin. Nullam molestie rhoncus consequat. Vivamus at cursus augue. Sed pharetra maximus orci, non pharetra odio maximus vitae. Etiam vel odio euismod, ullamcorper orci vel, posuere mauris. Nunc suscipit ante ac augue ultricies, vel tristique nibh lacinia. Fusce tempus rhoncus erat vitae tempor. Fusce laoreet efficitur sem, vel sollicitudin augue scelerisque sit amet. Sed vestibulum quam eu augue euismod, ut condimentum ante viverra. In id metus eget orci tincidunt interdum. Aenean eget nulla scelerisque, pretium tortor ut, interdum risus.', '10 Days 9 Nights', 199),
(4, 'Super Saver', 'Iceland', 'images/burj-khalifa.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis nulla vel lorem tempor congue. Donec a dolor sollicitudin, posuere magna a, fermentum sapien. Pellentesque accumsan ut odio sit amet venenatis. Etiam sagittis tristique pharetra. Nam rutrum enim at nisi consequat volutpat. Donec efficitur est quis velit consequat mattis vel in nulla. Sed fermentum id tellus ac vestibulum. Aliquam quis aliquam eros, id pulvinar tellus. Vivamus facilisis ante sit amet purus dictum aliquam. Maecenas dapibus iaculis diam, non congue arcu interdum in.\r\n\r\nCras lacinia ligula sed imperdiet condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas semper cursus erat. Integer at ipsum elit. Sed at ante quis diam iaculis faucibus sit amet eget ligula. Cras auctor magna sed tellus dapibus, vitae dignissim lacus pretium. Fusce congue ultrices pharetra. Nulla facilisi. Donec congue orci ac bibendum fringilla. Aliquam volutpat at nisl at tempus.\r\n\r\nMorbi id tempus tortor, ut vulputate justo. Duis id convallis nulla. Mauris justo ex, sodales in massa a, varius vulputate tortor. Sed vestibulum vel velit eu sollicitudin. Nullam molestie rhoncus consequat. Vivamus at cursus augue. Sed pharetra maximus orci, non pharetra odio maximus vitae. Etiam vel odio euismod, ullamcorper orci vel, posuere mauris. Nunc suscipit ante ac augue ultricies, vel tristique nibh lacinia. Fusce tempus rhoncus erat vitae tempor. Fusce laoreet efficitur sem, vel sollicitudin augue scelerisque sit amet. Sed vestibulum quam eu augue euismod, ut condimentum ante viverra. In id metus eget orci tincidunt interdum. Aenean eget nulla scelerisque, pretium tortor ut, interdum risus.', '10 Days 9 Nights', 199),
(5, 'Greenery', 'Europe', 'images/iceland.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis nulla vel lorem tempor congue. Donec a dolor sollicitudin, posuere magna a, fermentum sapien. Pellentesque accumsan ut odio sit amet venenatis. Etiam sagittis tristique pharetra. Nam rutrum enim at nisi consequat volutpat. Donec efficitur est quis velit consequat mattis vel in nulla. Sed fermentum id tellus ac vestibulum. Aliquam quis aliquam eros, id pulvinar tellus. Vivamus facilisis ante sit amet purus dictum aliquam. Maecenas dapibus iaculis diam, non congue arcu interdum in.\r\n\r\nCras lacinia ligula sed imperdiet condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas semper cursus erat. Integer at ipsum elit. Sed at ante quis diam iaculis faucibus sit amet eget ligula. Cras auctor magna sed tellus dapibus, vitae dignissim lacus pretium. Fusce congue ultrices pharetra. Nulla facilisi. Donec congue orci ac bibendum fringilla. Aliquam volutpat at nisl at tempus.\r\n\r\nMorbi id tempus tortor, ut vulputate justo. Duis id convallis nulla. Mauris justo ex, sodales in massa a, varius vulputate tortor. Sed vestibulum vel velit eu sollicitudin. Nullam molestie rhoncus consequat. Vivamus at cursus augue. Sed pharetra maximus orci, non pharetra odio maximus vitae. Etiam vel odio euismod, ullamcorper orci vel, posuere mauris. Nunc suscipit ante ac augue ultricies, vel tristique nibh lacinia. Fusce tempus rhoncus erat vitae tempor. Fusce laoreet efficitur sem, vel sollicitudin augue scelerisque sit amet. Sed vestibulum quam eu augue euismod, ut condimentum ante viverra. In id metus eget orci tincidunt interdum. Aenean eget nulla scelerisque, pretium tortor ut, interdum risus.', '10 Days 9 Nights', 199),
(6, 'Hill Station', 'Iceland', 'images/europe.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis nulla vel lorem tempor congue. Donec a dolor sollicitudin, posuere magna a, fermentum sapien. Pellentesque accumsan ut odio sit amet venenatis. Etiam sagittis tristique pharetra. Nam rutrum enim at nisi consequat volutpat. Donec efficitur est quis velit consequat mattis vel in nulla. Sed fermentum id tellus ac vestibulum. Aliquam quis aliquam eros, id pulvinar tellus. Vivamus facilisis ante sit amet purus dictum aliquam. Maecenas dapibus iaculis diam, non congue arcu interdum in.\r\n\r\nCras lacinia ligula sed imperdiet condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas semper cursus erat. Integer at ipsum elit. Sed at ante quis diam iaculis faucibus sit amet eget ligula. Cras auctor magna sed tellus dapibus, vitae dignissim lacus pretium. Fusce congue ultrices pharetra. Nulla facilisi. Donec congue orci ac bibendum fringilla. Aliquam volutpat at nisl at tempus.\r\n\r\nMorbi id tempus tortor, ut vulputate justo. Duis id convallis nulla. Mauris justo ex, sodales in massa a, varius vulputate tortor. Sed vestibulum vel velit eu sollicitudin. Nullam molestie rhoncus consequat. Vivamus at cursus augue. Sed pharetra maximus orci, non pharetra odio maximus vitae. Etiam vel odio euismod, ullamcorper orci vel, posuere mauris. Nunc suscipit ante ac augue ultricies, vel tristique nibh lacinia. Fusce tempus rhoncus erat vitae tempor. Fusce laoreet efficitur sem, vel sollicitudin augue scelerisque sit amet. Sed vestibulum quam eu augue euismod, ut condimentum ante viverra. In id metus eget orci tincidunt interdum. Aenean eget nulla scelerisque, pretium tortor ut, interdum risus.', '10 Days 9 Nights', 199);

-- --------------------------------------------------------

--
-- Table structure for table `packagesdata`
--

DROP TABLE IF EXISTS `packagesdata`;
CREATE TABLE IF NOT EXISTS `packagesdata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(20) NOT NULL,
  `Location` varchar(1000) NOT NULL,
  `Image` varchar(1000) NOT NULL,
  `Details` varchar(10000) NOT NULL,
  `Duration` varchar(1000) NOT NULL,
  `Price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `packagesdata`
--

INSERT INTO `packagesdata` (`id`, `Title`, `Location`, `Image`, `Details`, `Duration`, `Price`) VALUES
(1, 'Adventour', 'Adventour', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/adventure-1850912_640.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis nulla vel lorem tempor congue. Donec a dolor sollicitudin, posuere magna a, fermentum sapien. Pellentesque accumsan ut odio sit amet venenatis. Etiam sagittis tristique pharetra. Nam rutrum enim at nisi consequat volutpat. Donec efficitur est quis velit consequat mattis vel in nulla. Sed fermentum id tellus ac vestibulum. Aliquam quis aliquam eros, id pulvinar tellus. Vivamus facilisis ante sit amet purus dictum aliquam. Maecenas dapibus iaculis diam, non congue arcu interdum in.\n\nCras lacinia ligula sed imperdiet condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas semper cursus erat. Integer at ipsum elit. Sed at ante quis diam iaculis faucibus sit amet eget ligula. Cras auctor magna sed tellus dapibus, vitae dignissim lacus pretium. Fusce congue ultrices pharetra. Nulla facilisi. Donec congue orci ac bibendum fringilla. Aliquam volutpat at nisl at tempus.\n\nMorbi id tempus tortor, ut vulputate justo. Duis id convallis nulla. Mauris justo ex, sodales in massa a, varius vulputate tortor. Sed vestibulum vel velit eu sollicitudin. Nullam molestie rhoncus consequat. Vivamus at cursus augue. Sed pharetra maximus orci, non pharetra odio maximus vitae. Etiam vel odio euismod, ullamcorper orci vel, posuere mauris. Nunc suscipit ante ac augue ultricies, vel tristique nibh lacinia. Fusce tempus rhoncus erat vitae tempor. Fusce laoreet efficitur sem, vel sollicitudin augue scelerisque sit amet. Sed vestibulum quam eu augue euismod, ut condimentum ante viverra. In id metus eget orci tincidunt interdum. Aenean eget nulla scelerisque, pretium tortor ut, interdum risus.', '10 Days 9 Nights', 199),
(2, 'Simply Andaman', 'Iceland', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2022/10/trevi-fountain-gb603e661c_640.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis nulla vel lorem tempor congue. Donec a dolor sollicitudin, posuere magna a, fermentum sapien. Pellentesque accumsan ut odio sit amet venenatis. Etiam sagittis tristique pharetra. Nam rutrum enim at nisi consequat volutpat. Donec efficitur est quis velit consequat mattis vel in nulla. Sed fermentum id tellus ac vestibulum. Aliquam quis aliquam eros, id pulvinar tellus. Vivamus facilisis ante sit amet purus dictum aliquam. Maecenas dapibus iaculis diam, non congue arcu interdum in.\n\nCras lacinia ligula sed imperdiet condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas semper cursus erat. Integer at ipsum elit. Sed at ante quis diam iaculis faucibus sit amet eget ligula. Cras auctor magna sed tellus dapibus, vitae dignissim lacus pretium. Fusce congue ultrices pharetra. Nulla facilisi. Donec congue orci ac bibendum fringilla. Aliquam volutpat at nisl at tempus.\n\nMorbi id tempus tortor, ut vulputate justo. Duis id convallis nulla. Mauris justo ex, sodales in massa a, varius vulputate tortor. Sed vestibulum vel velit eu sollicitudin. Nullam molestie rhoncus consequat. Vivamus at cursus augue. Sed pharetra maximus orci, non pharetra odio maximus vitae. Etiam vel odio euismod, ullamcorper orci vel, posuere mauris. Nunc suscipit ante ac augue ultricies, vel tristique nibh lacinia. Fusce tempus rhoncus erat vitae tempor. Fusce laoreet efficitur sem, vel sollicitudin augue scelerisque sit amet. Sed vestibulum quam eu augue euismod, ut condimentum ante viverra. In id metus eget orci tincidunt interdum. Aenean eget nulla scelerisque, pretium tortor ut, interdum risus', '10 Days 9 Nights', 199),
(3, 'Spirational Himachal', 'Iceland', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2022/10/tower-bridge-g51a67256d_640.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis nulla vel lorem tempor congue. Donec a dolor sollicitudin, posuere magna a, fermentum sapien. Pellentesque accumsan ut odio sit amet venenatis. Etiam sagittis tristique pharetra. Nam rutrum enim at nisi consequat volutpat. Donec efficitur est quis velit consequat mattis vel in nulla. Sed fermentum id tellus ac vestibulum. Aliquam quis aliquam eros, id pulvinar tellus. Vivamus facilisis ante sit amet purus dictum aliquam. Maecenas dapibus iaculis diam, non congue arcu interdum in. Cras lacinia ligula sed imperdiet condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas semper cursus erat. Integer at ipsum elit. Sed at ante quis diam iaculis faucibus sit amet eget ligula. Cras auctor magna sed tellus dapibus, vitae dignissim lacus pretium. Fusce congue ultrices pharetra. Nulla facilisi. Donec congue orci ac bibendum fringilla. Aliquam volutpat at nisl at tempus. Morbi id tempus tortor, ut vulputate justo. Duis id convallis nulla. Mauris justo ex, sodales in massa a, varius vulputate tortor. Sed vestibulum vel velit eu sollicitudin. Nullam molestie rhoncus consequat. Vivamus at cursus augue. Sed pharetra maximus orci, non pharetra odio maximus vitae. Etiam vel odio euismod, ullamcorper orci vel, posuere mauris. Nunc suscipit ante ac augue ultricies, vel tristique nibh lacinia. Fusce tempus rhoncus erat vitae tempor. Fusce laoreet efficitur sem, vel sollicitudin augue scelerisque sit amet. Sed vestibulum quam eu augue euismod, ut condimentum ante viverra. In id metus eget orci tincidunt interdum. Aenean eget nulla scelerisque, pretium tortor ut, interdum risus.', '10 Days 9 Nights', 199),
(4, 'Super Saver', 'Iceland', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2022/10/burj-khalifa-g6042f22f6_640.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis nulla vel lorem tempor congue. Donec a dolor sollicitudin, posuere magna a, fermentum sapien. Pellentesque accumsan ut odio sit amet venenatis. Etiam sagittis tristique pharetra. Nam rutrum enim at nisi consequat volutpat. Donec efficitur est quis velit consequat mattis vel in nulla. Sed fermentum id tellus ac vestibulum. Aliquam quis aliquam eros, id pulvinar tellus. Vivamus facilisis ante sit amet purus dictum aliquam. Maecenas dapibus iaculis diam, non congue arcu interdum in.\n\nCras lacinia ligula sed imperdiet condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas semper cursus erat. Integer at ipsum elit. Sed at ante quis diam iaculis faucibus sit amet eget ligula. Cras auctor magna sed tellus dapibus, vitae dignissim lacus pretium. Fusce congue ultrices pharetra. Nulla facilisi. Donec congue orci ac bibendum fringilla. Aliquam volutpat at nisl at tempus.\n\nMorbi id tempus tortor, ut vulputate justo. Duis id convallis nulla. Mauris justo ex, sodales in massa a, varius vulputate tortor. Sed vestibulum vel velit eu sollicitudin. Nullam molestie rhoncus consequat. Vivamus at cursus augue. Sed pharetra maximus orci, non pharetra odio maximus vitae. Etiam vel odio euismod, ullamcorper orci vel, posuere mauris. Nunc suscipit ante ac augue ultricies, vel tristique nibh lacinia. Fusce tempus rhoncus erat vitae tempor. Fusce laoreet efficitur sem, vel sollicitudin augue scelerisque sit amet. Sed vestibulum quam eu augue euismod, ut condimentum ante viverra. In id metus eget orci tincidunt interdum. Aenean eget nulla scelerisque, pretium tortor ut, interdum risus.', '10 Days 9 Nights', 199),
(5, 'Greenery', 'Europe', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/iceland-4699702_640.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis nulla vel lorem tempor congue. Donec a dolor sollicitudin, posuere magna a, fermentum sapien. Pellentesque accumsan ut odio sit amet venenatis. Etiam sagittis tristique pharetra. Nam rutrum enim at nisi consequat volutpat. Donec efficitur est quis velit consequat mattis vel in nulla. Sed fermentum id tellus ac vestibulum. Aliquam quis aliquam eros, id pulvinar tellus. Vivamus facilisis ante sit amet purus dictum aliquam. Maecenas dapibus iaculis diam, non congue arcu interdum in.\n\nCras lacinia ligula sed imperdiet condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas semper cursus erat. Integer at ipsum elit. Sed at ante quis diam iaculis faucibus sit amet eget ligula. Cras auctor magna sed tellus dapibus, vitae dignissim lacus pretium. Fusce congue ultrices pharetra. Nulla facilisi. Donec congue orci ac bibendum fringilla. Aliquam volutpat at nisl at tempus.\n\nMorbi id tempus tortor, ut vulputate justo. Duis id convallis nulla. Mauris justo ex, sodales in massa a, varius vulputate tortor. Sed vestibulum vel velit eu sollicitudin. Nullam molestie rhoncus consequat. Vivamus at cursus augue. Sed pharetra maximus orci, non pharetra odio maximus vitae. Etiam vel odio euismod, ullamcorper orci vel, posuere mauris. Nunc suscipit ante ac augue ultricies, vel tristique nibh lacinia. Fusce tempus rhoncus erat vitae tempor. Fusce laoreet efficitur sem, vel sollicitudin augue scelerisque sit amet. Sed vestibulum quam eu augue euismod, ut condimentum ante viverra. In id metus eget orci tincidunt interdum. Aenean eget nulla scelerisque, pretium tortor ut, interdum risus.', '10 Days 9 Nights', 199),
(6, 'Hill Station', 'Iceland', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/verdon-4058085_640.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis nulla vel lorem tempor congue. Donec a dolor sollicitudin, posuere magna a, fermentum sapien. Pellentesque accumsan ut odio sit amet venenatis. Etiam sagittis tristique pharetra. Nam rutrum enim at nisi consequat volutpat. Donec efficitur est quis velit consequat mattis vel in nulla. Sed fermentum id tellus ac vestibulum. Aliquam quis aliquam eros, id pulvinar tellus. Vivamus facilisis ante sit amet purus dictum aliquam. Maecenas dapibus iaculis diam, non congue arcu interdum in.\n\nCras lacinia ligula sed imperdiet condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas semper cursus erat. Integer at ipsum elit. Sed at ante quis diam iaculis faucibus sit amet eget ligula. Cras auctor magna sed tellus dapibus, vitae dignissim lacus pretium. Fusce congue ultrices pharetra. Nulla facilisi. Donec congue orci ac bibendum fringilla. Aliquam volutpat at nisl at tempus.\n\nMorbi id tempus tortor, ut vulputate justo. Duis id convallis nulla. Mauris justo ex, sodales in massa a, varius vulputate tortor. Sed vestibulum vel velit eu sollicitudin. Nullam molestie rhoncus consequat. Vivamus at cursus augue. Sed pharetra maximus orci, non pharetra odio maximus vitae. Etiam vel odio euismod, ullamcorper orci vel, posuere mauris. Nunc suscipit ante ac augue ultricies, vel tristique nibh lacinia. Fusce tempus rhoncus erat vitae tempor. Fusce laoreet efficitur sem, vel sollicitudin augue scelerisque sit amet. Sed vestibulum quam eu augue euismod, ut condimentum ante viverra. In id metus eget orci tincidunt interdum. Aenean eget nulla scelerisque, pretium tortor ut, interdum risus.', '10 Days 9 Nights', 199);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

DROP TABLE IF EXISTS `subscription`;
CREATE TABLE IF NOT EXISTS `subscription` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Mail` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `subscription`
--

INSERT INTO `subscription` (`id`, `Mail`) VALUES
(1, 'liotrobert14@gmail.com'),
(2, 'nimjeprathamesh1@gmail.com'),
(3, 'nimjeprathamesh1@gmail.com'),
(4, 'testing123@gmail.com'),
(5, 'trial123@gmail.com'),
(6, 'demo@gmail.com'),
(7, 'nimjeprathamesh1@gmail.com'),
(8, 'demo@gmail.com'),
(9, 'nimjeprathamesh1@gmail.com'),
(10, 'demo@gmail.com'),
(11, 'trial123@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `testimonial`
--

DROP TABLE IF EXISTS `testimonial`;
CREATE TABLE IF NOT EXISTS `testimonial` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Designation` varchar(255) NOT NULL,
  `Image` varchar(1000) NOT NULL,
  `Feedback` varchar(10000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `testimonial`
--

INSERT INTO `testimonial` (`id`, `Name`, `Designation`, `Image`, `Feedback`) VALUES
(1, 'Francy J.', 'Supporter', 'images/francy.jpg', 'Luzuk helped us easily implement a responsive design that follows best practices. Our traffic, sales and bounce rates have all improved since the launch of our website!'),
(2, 'Alena H.', 'Head', 'images/alena.jpg', 'Great theme with great potential Simple and very functional theme + super quick support. Thank you for your work and this theme.'),
(3, 'Edger D.', 'CEO', 'images/edger.jpg', 'Very clean, simple and professional layout. Nice layout, well suited to the job. Good choice of colours. Looks equally good on my laptop and on my phone!'),
(4, 'Marianna B.', 'Manager', 'images/marianna.jpeg', 'Nice list of theme we get a right design for our Restaurant website and also gets support for developing, My restaurant product and blog customization are done easily. I highly recomnded Luzuk themes thank you'),
(5, 'Joseph C.', 'Project Head', 'images/joseph.jpg', 'Super fast Due to this light weight and fast loading theme I am able to handle the traffic to my site which was not possible earlier with my earlier theme.');

-- --------------------------------------------------------

--
-- Table structure for table `testimonialdata`
--

DROP TABLE IF EXISTS `testimonialdata`;
CREATE TABLE IF NOT EXISTS `testimonialdata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Designation` varchar(255) NOT NULL,
  `Image` varchar(1000) NOT NULL,
  `Feedback` varchar(10000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `testimonialdata`
--

INSERT INTO `testimonialdata` (`id`, `Name`, `Designation`, `Image`, `Feedback`) VALUES
(1, 'Francy J.', 'Supporter', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/team3.jpg', 'Luzuk helped us easily implement a responsive design that follows best practices. Our traffic, sales and bounce rates have all improved since the launch of our website!'),
(2, 'Alena H.', 'Head', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/testi2-2.jpg', 'Great theme with great potential Simple and very functional theme + super quick support. Thank you for your work and this theme.'),
(3, 'Edger D.', 'CEO', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/Team4-2.jpg', 'Very clean, simple and professional layout. Nice layout, well suited to the job. Good choice of colours. Looks equally good on my laptop and on my phone!'),
(4, 'Marianna B.', 'Manager', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/team3.jpeg', 'Nice list of theme we get a right design for our Restaurant website and also gets support for developing, My restaurant product and blog customization are done easily. I highly recomnded Luzuk themes thank you'),
(5, 'Joseph C.', 'Project Head', 'https://www.luzukdemo.com/demo/inside-tours/wp-content/uploads/sites/35/2021/11/team1.jpg', 'Super fast Due to this light weight and fast loading theme I am able to handle the traffic to my site which was not possible earlier with my earlier theme.');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `Email`, `Password`) VALUES
(7, 'liotrobert14@gmail.com', 'liot141199'),
(6, 'nimjeprathamesh1@gmail.com', 'pra141199');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
