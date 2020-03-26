-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2020 at 08:03 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gamemanager`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `game_id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `comment`, `game_id`, `time`) VALUES
(1, 'good game !', 2, '2020-02-26 16:12:04'),
(2, 'the game was interesting', 6, '2020-02-26 17:39:08'),
(3, 'yalla maccabi', 4, '2020-02-26 17:39:29'),
(4, 'I LOVE REAL MADRID !!!', 1, '2020-02-26 17:56:48'),
(13, 'good game for maccabi', 4, '2020-02-26 18:36:57'),
(15, 'Barcelona was AMAZING !!!', 1, '2020-02-26 18:43:51'),
(28, 'Yalla Maccabi', 5, '2020-02-26 18:58:59'),
(29, 'מכבי זה אצלי בלב !!!', 3, '2020-02-26 19:02:27');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `teamA` text NOT NULL,
  `teamB` text NOT NULL,
  `scoreA` int(11) NOT NULL,
  `scoreB` int(11) NOT NULL,
  `time` datetime NOT NULL,
  `category` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `teamA`, `teamB`, `scoreA`, `scoreB`, `time`, `category`) VALUES
(1, 'FC Barcelona', 'Real-Madrid', 1, 3, '2020-03-01 00:00:00', 'Football'),
(2, 'Chelsea', 'Man-United', 2, 2, '2020-02-27 00:00:00', 'Football'),
(3, 'Maccabi Tel-Aviv', 'Maccabi Haifa', 4, 3, '2020-02-13 00:00:00', 'Football'),
(4, 'Maccabi Tel-Aviv', 'CSKA Moskow', 82, 61, '2019-12-11 00:00:00', 'Basketball'),
(5, 'Maccabi Tel-Aviv ', 'Real-Madrid', 88, 91, '2020-02-10 00:00:00', 'Basketball'),
(6, 'FC Barcelona', 'Real-Madrid', 78, 90, '2020-01-15 00:00:00', 'BasketBall');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
