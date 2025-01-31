-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 31, 2025 at 04:14 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ai_culture`
--

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `flag` varchar(255) NOT NULL,
  `capital` varchar(50) NOT NULL,
  `capital_image` varchar(255) NOT NULL,
  `leader_name` varchar(100) NOT NULL,
  `leader_image` varchar(255) NOT NULL,
  `tier1` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`tier1`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `flag`, `capital`, `capital_image`, `leader_name`, `leader_image`, `tier1`) VALUES
(1, 'Kosovo', './assets/images/KOSOVO.png', 'Pristina', './assets/images/Pristina.jpg', 'Vjosa Osmani', './assets/images/Kosovo President.jpg', '{\r\n        \"greetings\": \"🤝 In Kosovo, greetings depend on familiarity. A handshake is common in formal settings, while friends often greet with a kiss on both cheeks.\",\r\n        \"etiquette\": \"☕ Hospitality is key in Kosovo! Always accept coffee or tea when offered.\",\r\n        \"culturalTips\": \"🎶 Music and dance are integral to Kosovan culture.\",\r\n        \"funFacts\": \"🌍 The Albanian language, spoken in Kosovo, is over 8000 years old.\"\r\n    }'),
(2, 'USA', './assets/images/USA.png', 'Washington, D.C.', './assets/images/DC.jpeg', 'Joe Biden', './assets/images/Joe Biden.jpg', '{\r\n        \"greetings\": \"🤝 A firm handshake is the standard greeting in the USA.\",\r\n        \"etiquette\": \"💰 Tipping is important! In restaurants, 15-20% is customary.\",\r\n        \"culturalTips\": \"🌟 Americans love personal space—don’t stand too close!\"\r\n    }'),
(3, 'Japan', './assets/images/JAPAN.png', 'Tokyo', './assets/images/Tokyo.jpeg', 'Fumio Kishida', './assets/images/Japan President.jpg', '{\r\n        \"greetings\": \"🙏 In Japan, bowing is the traditional greeting.\",\r\n        \"etiquette\": \"👞 Remove your shoes before entering someone\'s home.\",\r\n        \"culturalTips\": \"🎁 When giving a gift, present it with both hands as a sign of respect.\"\r\n    }');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `category` varchar(50) NOT NULL,
  `type` enum('business','leisure','study abroad') NOT NULL,
  `question` text NOT NULL,
  `options` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`options`)),
  `correct` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `category`, `type`, `question`, `options`, `correct`) VALUES
(1, 'usa', 'business', 'What is the official language of business in the USA?', '[\"English\",\"Spanish\",\"French\",\"German\"]', '0'),
(2, 'usa', 'business', 'The USA is known for networking at business events.', NULL, 'True'),
(3, 'usa', 'business', 'What is the currency used in the USA?', '[\"Dollar\",\"Euro\",\"Pound\",\"Yen\"]', '0'),
(4, 'usa', 'business', 'The USA has many co-working spaces for startups.', NULL, 'True'),
(5, 'usa', 'business', 'What city is often called the financial capital of the USA?', '[\"New York\",\"Los Angeles\",\"Chicago\",\"Houston\"]', '0'),
(6, 'usa', 'business', 'Business meetings in the USA are generally formal.', NULL, 'True'),
(7, 'usa', 'business', 'Which US city is known for its tech industry?', '[\"San Francisco\",\"Miami\",\"Seattle\",\"Boston\"]', '0'),
(8, 'usa', 'business', 'The USA is a popular destination for international trade fairs.', NULL, 'True'),
(9, 'usa', 'business', 'What is a common way to close a business meeting in the USA?', '[\"A handshake\",\"A bow\",\"A kiss on the cheek\",\"A wave\"]', '0'),
(10, 'usa', 'business', 'The USA promotes entrepreneurship as a core value.', NULL, 'True'),
(11, 'usa', 'study abroad', 'The USA is home to Ivy League universities.', NULL, 'True'),
(12, 'usa', 'study abroad', 'What test is commonly required for admission to US universities?', '[\"SAT\",\"IELTS\",\"TOEFL\",\"GMAT\"]', '0'),
(13, 'usa', 'study abroad', 'What is the typical academic calendar in the USA?', '[\"Semester-based\",\"Quarter-based\",\"Year-long\",\"Trimesters\"]', '0'),
(14, 'usa', 'study abroad', 'Student visas in the USA are called F1 visas.', NULL, 'True'),
(15, 'usa', 'study abroad', 'What is a common language of instruction in the USA?', '[\"English\",\"French\",\"Spanish\",\"German\"]', '0'),
(16, 'usa', 'study abroad', 'Which state has the largest number of universities?', '[\"California\",\"Texas\",\"New York\",\"Florida\"]', '0'),
(17, 'usa', 'study abroad', 'The USA allows international students to work part-time on campus.', NULL, 'True'),
(18, 'usa', 'study abroad', 'What document is essential for studying in the USA?', '[\"I-20 Form\",\"Work Permit\",\"Visa Waiver\",\"Green Card\"]', '0'),
(19, 'usa', 'study abroad', 'The USA is known for offering scholarships to international students.', NULL, 'True'),
(20, 'usa', 'study abroad', 'Which city is famous for student life in the USA?', '[\"Boston\",\"Dallas\",\"Las Vegas\",\"Orlando\"]', '0'),
(21, 'usa', 'leisure', 'The Grand Canyon is located in the USA.', NULL, 'True'),
(22, 'usa', 'leisure', 'What is the most visited city in the USA?', '[\"New York\",\"Los Angeles\",\"Miami\",\"Chicago\"]', '0'),
(23, 'usa', 'leisure', 'Disneyland is located in which state?', '[\"California\",\"Florida\",\"New York\",\"Texas\"]', '0'),
(24, 'usa', 'leisure', 'What is the name of the famous waterfall shared with Canada?', '[\"Niagara Falls\",\"Victoria Falls\",\"Angel Falls\",\"Iguazu Falls\"]', '0'),
(25, 'usa', 'leisure', 'The USA is known for its national parks.', NULL, 'True'),
(26, 'usa', 'leisure', 'Which state is famous for its beaches and surfing?', '[\"Hawaii\",\"Florida\",\"California\",\"Texas\"]', '0'),
(27, 'usa', 'leisure', 'What is the capital of the USA?', '[\"Washington, D.C.\",\"New York\",\"Los Angeles\",\"Chicago\"]', '0'),
(28, 'usa', 'leisure', 'What type of food is most associated with the USA?', '[\"Burgers and fries\",\"Pasta\",\"Sushi\",\"Tacos\"]', '0'),
(29, 'usa', 'leisure', 'The Statue of Liberty is a symbol of freedom in the USA.', NULL, 'True'),
(30, 'usa', 'leisure', 'Which city is known as the entertainment capital of the world?', '[\"Los Angeles\",\"New York\",\"Las Vegas\",\"Chicago\"]', '0'),
(31, 'france', 'business', 'What is the official language of business in France?', '[\"French\",\"English\",\"Spanish\",\"German\"]', '0'),
(32, 'france', 'business', 'Business meetings in France typically start with a handshake.', NULL, 'True'),
(33, 'france', 'business', 'What is the currency used in France?', '[\"Euro\",\"Dollar\",\"Pound\",\"Yen\"]', '0'),
(34, 'france', 'business', 'France is known for prioritizing punctuality in business meetings.', NULL, 'True'),
(35, 'france', 'business', 'Which French city is known as a financial hub?', '[\"Paris\",\"Lyon\",\"Marseille\",\"Nice\"]', '0'),
(36, 'france', 'business', 'Business attire in France is typically formal and stylish.', NULL, 'True'),
(37, 'france', 'business', 'What is commonly exchanged during business meetings in France?', '[\"Business cards\",\"Gifts\",\"Contracts\",\"Laptops\"]', '0'),
(38, 'france', 'business', 'The French value long-term relationships in business partnerships.', NULL, 'True'),
(39, 'france', 'business', 'Which industry is a major part of France’s economy?', '[\"Luxury goods\",\"Technology\",\"Mining\",\"Automobiles\"]', '0'),
(40, 'france', 'business', 'Which region in France is famous for its wine exports?', '[\"Bordeaux\",\"Normandy\",\"Brittany\",\"Alsace\"]', '0'),
(41, 'france', 'study abroad', 'France is one of the most popular destinations for international students.', NULL, 'True'),
(42, 'france', 'study abroad', 'What is the capital city of France?', '[\"Paris\",\"Lyon\",\"Marseille\",\"Nice\"]', '0'),
(43, 'france', 'study abroad', 'Which French exam is often required for university admission?', '[\"DELF\",\"TOEFL\",\"IELTS\",\"SAT\"]', '0'),
(44, 'france', 'study abroad', 'The French grading system uses a scale of 0 to 20.', NULL, 'True'),
(45, 'france', 'study abroad', 'What is a popular scholarship for studying in France?', '[\"Eiffel Scholarship\",\"Rhodes Scholarship\",\"Chevening Scholarship\",\"Fulbright Program\"]', '0'),
(46, 'france', 'study abroad', 'Most French universities offer programs taught in English.', NULL, 'True'),
(47, 'france', 'study abroad', 'Which French city is famous for its student life?', '[\"Grenoble\",\"Toulouse\",\"Bordeaux\",\"Marseille\"]', '0'),
(48, 'france', 'study abroad', 'What is the academic year format in France?', '[\"Semester-based\",\"Year-round\",\"Trimester-based\",\"Quarter-based\"]', '0'),
(49, 'france', 'study abroad', 'International students in France can work part-time while studying.', NULL, 'True'),
(50, 'france', 'study abroad', 'What is an essential document for studying in France?', '[\"Student visa\",\"Passport only\",\"Green Card\",\"Work Permit\"]', '0'),
(51, 'france', 'leisure', 'The Eiffel Tower is located in Paris, France.', NULL, 'True'),
(52, 'france', 'leisure', 'What is the name of the famous museum in Paris?', '[\"The Louvre\",\"The Prado\",\"The Met\",\"The British Museum\"]', '0'),
(53, 'france', 'leisure', 'France is known for its diverse and high-quality cuisine.', NULL, 'True'),
(54, 'france', 'leisure', 'What is a famous French dish?', '[\"Coq au vin\",\"Sushi\",\"Pizza\",\"Tacos\"]', '0'),
(55, 'france', 'leisure', 'Which region in France is famous for its lavender fields?', '[\"Provence\",\"Alsace\",\"Normandy\",\"Brittany\"]', '0'),
(56, 'france', 'leisure', 'The French Riviera is a popular tourist destination.', NULL, 'True'),
(57, 'france', 'leisure', 'What is the name of the famous wine region in France?', '[\"Bordeaux\",\"Tuscany\",\"Napa Valley\",\"Champagne\"]', '0'),
(58, 'france', 'leisure', 'Which French city is known as the city of lights?', '[\"Paris\",\"Lyon\",\"Marseille\",\"Nice\"]', '0'),
(59, 'france', 'leisure', 'The Tour de France is a world-famous cycling race held annually in France.', NULL, 'True'),
(60, 'france', 'leisure', 'Mont Blanc is the highest mountain in France.', NULL, 'True'),
(61, 'japan', 'business', 'What is the traditional way to greet someone in Japan?', '[\"Handshake\",\"Bow\",\"High-five\",\"Wave\"]', '1'),
(62, 'japan', 'business', 'Exchanging business cards (meishi) is an important part of business etiquette in Japan.', NULL, 'True'),
(63, 'japan', 'business', 'What is the official language of business in Japan?', '[\"Japanese\",\"English\",\"Korean\",\"Mandarin\"]', '0'),
(64, 'japan', 'business', 'Business meetings in Japan are often formal and require proper preparation.', NULL, 'True'),
(65, 'japan', 'business', 'What is a common phrase used to express gratitude in Japanese business culture?', '[\"Arigatou gozaimasu\",\"Bonjour\",\"Gracias\",\"Danke\"]', '0'),
(66, 'japan', 'business', 'Punctuality is highly valued in Japanese business culture.', NULL, 'True'),
(67, 'japan', 'business', 'Which Japanese city is known as a financial hub?', '[\"Tokyo\",\"Kyoto\",\"Osaka\",\"Nagoya\"]', '0'),
(68, 'japan', 'business', 'Wearing conservative and professional attire is important in Japanese business settings.', NULL, 'True'),
(69, 'japan', 'business', 'In Japan, decisions are often made through a process called \'ringi,\' which involves consensus-building.', NULL, 'True'),
(70, 'japan', 'business', 'Which industry is Japan globally recognized for?', '[\"Automobiles\",\"Mining\",\"Luxury goods\",\"Textiles\"]', '0'),
(71, 'japan', 'study abroad', 'Japan is a popular destination for international students.', NULL, 'True'),
(72, 'japan', 'study abroad', 'What is the capital city of Japan?', '[\"Tokyo\",\"Kyoto\",\"Osaka\",\"Nagoya\"]', '0'),
(73, 'japan', 'study abroad', 'What is a common language of instruction in Japanese universities?', '[\"Japanese\",\"English\",\"Mandarin\",\"Korean\"]', '0'),
(74, 'japan', 'study abroad', 'International students in Japan are often required to pass the JLPT (Japanese Language Proficiency Test).', NULL, 'True'),
(75, 'japan', 'study abroad', 'Which document is essential for studying in Japan?', '[\"Student visa\",\"Work permit\",\"Green card\",\"Passport only\"]', '0'),
(76, 'japan', 'study abroad', 'What is the academic year format in most Japanese universities?', '[\"April to March\",\"January to December\",\"September to June\",\"June to May\"]', '0'),
(77, 'japan', 'study abroad', 'Which Japanese city is known for its historic universities?', '[\"Kyoto\",\"Osaka\",\"Tokyo\",\"Hiroshima\"]', '0'),
(78, 'japan', 'study abroad', 'The MEXT scholarship is a well-known program for studying in Japan.', NULL, 'True'),
(79, 'japan', 'study abroad', 'International students in Japan are allowed to work part-time during their studies.', NULL, 'True'),
(80, 'japan', 'study abroad', 'Which field of study is Japan particularly known for?', '[\"Engineering\",\"Arts\",\"History\",\"Law\"]', '0'),
(81, 'japan', 'leisure', 'Mount Fuji is the highest mountain in Japan.', NULL, 'True'),
(82, 'japan', 'leisure', 'What is the name of the famous cherry blossom season in Japan?', '[\"Sakura\",\"Hanami\",\"Bonsai\",\"Ume\"]', '0'),
(83, 'japan', 'leisure', 'Japan is famous for its sushi cuisine.', NULL, 'True'),
(84, 'japan', 'leisure', 'What is the traditional garment worn in Japan?', '[\"Kimono\",\"Hanbok\",\"Sari\",\"Cheongsam\"]', '0'),
(85, 'japan', 'leisure', 'Which Japanese city is famous for its temples and shrines?', '[\"Kyoto\",\"Osaka\",\"Tokyo\",\"Fukuoka\"]', '0'),
(86, 'japan', 'leisure', 'The Shinkansen is also known as the bullet train in Japan.', NULL, 'True'),
(87, 'japan', 'leisure', 'What is the name of the famous bamboo forest in Japan?', '[\"Arashiyama\",\"Fushimi Inari\",\"Ritsurin\",\"Himeji\"]', '0'),
(88, 'japan', 'leisure', 'Tokyo Disneyland is one of the most visited theme parks in Japan.', NULL, 'True'),
(89, 'japan', 'leisure', 'Which island in Japan is known for its hot springs and snow festivals?', '[\"Hokkaido\",\"Honshu\",\"Shikoku\",\"Kyushu\"]', '0'),
(90, 'japan', 'leisure', 'Japan is known for its traditional tea ceremonies.', NULL, 'True'),
(91, 'brazil', 'business', 'What is the official language of business in Brazil?', '[\"Portuguese\",\"Spanish\",\"English\",\"French\"]', '0'),
(92, 'brazil', 'business', 'Business meetings in Brazil often begin with a handshake and friendly conversation.', NULL, 'True'),
(93, 'brazil', 'business', 'What is a common topic for small talk in Brazilian business culture?', '[\"Family\",\"Weather\",\"Politics\",\"Sports\"]', '3'),
(94, 'brazil', 'business', 'Punctuality in Brazilian business meetings is less rigid compared to other cultures.', NULL, 'True'),
(95, 'brazil', 'business', 'Which city is known as Brazil\'s financial center?', '[\"S\\u00e3o Paulo\",\"Rio de Janeiro\",\"Bras\\u00edlia\",\"Salvador\"]', '0'),
(96, 'brazil', 'business', 'Building personal relationships is essential in Brazilian business culture.', NULL, 'True'),
(97, 'brazil', 'business', 'What is the currency used in Brazil?', '[\"Real\",\"Peso\",\"Dollar\",\"Euro\"]', '0'),
(98, 'brazil', 'business', 'Exchanging business cards is a common practice in Brazil.', NULL, 'True'),
(99, 'brazil', 'business', 'Business attire in Brazil is often formal, especially in urban areas.', NULL, 'True'),
(100, 'brazil', 'business', 'Which Brazilian export industry is among the largest in the world?', '[\"Coffee\",\"Technology\",\"Textiles\",\"Gold\"]', '0'),
(101, 'brazil', 'study abroad', 'Brazil has many prestigious universities, such as the University of São Paulo.', NULL, 'True'),
(102, 'brazil', 'study abroad', 'What is the primary language of instruction in Brazilian universities?', '[\"Portuguese\",\"English\",\"Spanish\",\"French\"]', '0'),
(103, 'brazil', 'study abroad', 'International students often need a student visa to study in Brazil.', NULL, 'True'),
(104, 'brazil', 'study abroad', 'Which Brazilian city is known for its vibrant student life?', '[\"S\\u00e3o Paulo\",\"Rio de Janeiro\",\"Curitiba\",\"Bras\\u00edlia\"]', '1'),
(105, 'brazil', 'study abroad', 'Brazil is known for offering scholarships to international students.', NULL, 'True'),
(106, 'brazil', 'study abroad', 'What is the academic year format in most Brazilian universities?', '[\"March to December\",\"January to June\",\"September to June\",\"July to June\"]', '0'),
(107, 'brazil', 'study abroad', 'Many Brazilian universities have programs in environmental studies and biodiversity.', NULL, 'True'),
(108, 'brazil', 'study abroad', 'International students in Brazil can participate in cultural exchange programs.', NULL, 'True'),
(109, 'brazil', 'study abroad', 'Which field of study is Brazil particularly known for?', '[\"Agriculture\",\"Law\",\"History\",\"Space Exploration\"]', '0'),
(110, 'brazil', 'study abroad', 'The Brazilian Ministry of Education offers resources for international students.', NULL, 'True'),
(111, 'brazil', 'leisure', 'The Amazon Rainforest is located in Brazil.', NULL, 'True'),
(112, 'brazil', 'leisure', 'What is the capital city of Brazil?', '[\"Bras\\u00edlia\",\"Rio de Janeiro\",\"S\\u00e3o Paulo\",\"Salvador\"]', '0'),
(113, 'brazil', 'leisure', 'Carnival is one of the most famous festivals in Brazil.', NULL, 'True'),
(114, 'brazil', 'leisure', 'Which sport is most popular in Brazil?', '[\"Soccer\",\"Basketball\",\"Tennis\",\"Volleyball\"]', '0'),
(115, 'brazil', 'leisure', 'Christ the Redeemer is a famous statue located in Rio de Janeiro.', NULL, 'True'),
(116, 'brazil', 'leisure', 'What is a popular Brazilian dish?', '[\"Feijoada\",\"Tacos\",\"Sushi\",\"Pizza\"]', '0'),
(117, 'brazil', 'leisure', 'The Iguazu Falls is one of the most visited natural attractions in Brazil.', NULL, 'True'),
(118, 'brazil', 'leisure', 'Which Brazilian beach is world-famous?', '[\"Copacabana\",\"Waikiki\",\"Bondi\",\"Santa Monica\"]', '0'),
(119, 'brazil', 'leisure', 'Samba is a traditional music and dance style in Brazil.', NULL, 'True'),
(120, 'brazil', 'leisure', 'Which Brazilian city hosted the 2016 Summer Olympics?', '[\"Rio de Janeiro\",\"S\\u00e3o Paulo\",\"Bras\\u00edlia\",\"Curitiba\"]', '0'),
(121, 'kosovo', 'business', 'What is the official currency used in Kosovo?', '[\"Euro\",\"Dollar\",\"Lek\",\"Dinar\"]', '0'),
(122, 'kosovo', 'business', 'Networking is a key part of business culture in Kosovo.', NULL, 'True'),
(123, 'kosovo', 'business', 'What is the official language of business in Kosovo?', '[\"Albanian\",\"Serbian\",\"English\",\"German\"]', '0'),
(124, 'kosovo', 'business', 'Punctuality is highly valued in business meetings in Kosovo.', NULL, 'True'),
(125, 'kosovo', 'business', 'Which city in Kosovo is known as a business hub?', '[\"Pristina\",\"Peja\",\"Gjakova\",\"Mitrovica\"]', '0'),
(126, 'kosovo', 'business', 'Building trust is important in business relationships in Kosovo.', NULL, 'True'),
(127, 'kosovo', 'business', 'What is a common way to greet someone in a business meeting in Kosovo?', '[\"Handshake\",\"Bow\",\"Kiss on the cheek\",\"Wave\"]', '0'),
(128, 'kosovo', 'business', 'Kosovo\'s economy heavily relies on small and medium-sized enterprises (SMEs).', NULL, 'True'),
(129, 'kosovo', 'business', 'Which industry plays a significant role in Kosovo\'s exports?', '[\"Metals\",\"Textiles\",\"Technology\",\"Agriculture\"]', '0'),
(130, 'kosovo', 'business', 'English is widely spoken in business settings in Kosovo.', NULL, 'True'),
(131, 'kosovo', 'study abroad', 'Kosovo has a growing number of international students.', NULL, 'True'),
(132, 'kosovo', 'study abroad', 'What is the capital city of Kosovo?', '[\"Pristina\",\"Peja\",\"Gjakova\",\"Mitrovica\"]', '0'),
(133, 'kosovo', 'study abroad', 'What is the main language of instruction in Kosovo\'s universities?', '[\"Albanian\",\"Serbian\",\"English\",\"German\"]', '0'),
(134, 'kosovo', 'study abroad', 'The University of Pristina is the largest public university in Kosovo.', NULL, 'True'),
(135, 'kosovo', 'study abroad', 'What is a popular field of study for students in Kosovo?', '[\"Computer Science\",\"Space Exploration\",\"Marine Biology\",\"Archaeology\"]', '0'),
(136, 'kosovo', 'study abroad', 'Scholarships are available for international students in Kosovo.', NULL, 'True'),
(137, 'kosovo', 'study abroad', 'What is the academic calendar format in Kosovo?', '[\"October to June\",\"January to December\",\"March to December\",\"June to May\"]', '0'),
(138, 'kosovo', 'study abroad', 'International students in Kosovo can explore cultural exchange programs.', NULL, 'True'),
(139, 'kosovo', 'study abroad', 'Which document is essential for studying in Kosovo?', '[\"Student visa\",\"Green Card\",\"Work Permit\",\"Residence Permit\"]', '0'),
(140, 'kosovo', 'study abroad', 'Kosovo offers affordable education for international students.', NULL, 'True'),
(141, 'kosovo', 'leisure', 'Rugova Canyon is a popular natural attraction in Kosovo.', NULL, 'True'),
(142, 'kosovo', 'leisure', 'What is the name of Kosovo\'s traditional dance?', '[\"Valle\",\"Sirtaki\",\"Tango\",\"Waltz\"]', '0'),
(143, 'kosovo', 'leisure', 'Which traditional food is a signature dish in Kosovo?', '[\"Flija\",\"Pizza\",\"Burek\",\"Cevapi\"]', '0'),
(144, 'kosovo', 'leisure', 'Kosovo is known for its hospitality and welcoming culture.', NULL, 'True'),
(145, 'kosovo', 'leisure', 'What is the name of the famous bazaar in Gjakova?', '[\"Grand Bazaar\",\"Old Bazaar\",\"Carshia e Vjeter\",\"Sheshi Bazaar\"]', '2'),
(146, 'kosovo', 'leisure', 'What is the main language spoken in Kosovo?', '[\"Albanian\",\"Serbian\",\"English\",\"German\"]', '0'),
(147, 'kosovo', 'leisure', 'Which mountain range is found in Kosovo?', '[\"Bjeshk\\u00ebt e Nemuna\",\"Alps\",\"Carpathians\",\"Pyrenees\"]', '0'),
(148, 'kosovo', 'leisure', 'Pristina is home to the Newborn Monument, a symbol of Kosovo\'s independence.', NULL, 'True'),
(149, 'kosovo', 'leisure', 'What is a common beverage served during social gatherings in Kosovo?', '[\"Coffee\",\"Tea\",\"Juice\",\"Wine\"]', '0'),
(150, 'kosovo', 'leisure', 'Kosovo is known for its vibrant music festivals, such as Dokufest.', NULL, 'True');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `score` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
