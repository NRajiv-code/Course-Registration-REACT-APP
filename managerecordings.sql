-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2021 at 04:42 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sayitright`
--

-- --------------------------------------------------------

--
-- Table structure for table `managerecordings`
--

CREATE TABLE `managerecordings` (
  `Studentname` varchar(50) NOT NULL,
  `Recordings` varchar(50) NOT NULL,
  `Language` varchar(20) NOT NULL,
  `Subject` varchar(20) NOT NULL,
  `Country` varchar(20) NOT NULL,
  `Action` varchar(20) NOT NULL,
  `StudentID` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;


insert into values(Studentname,Recordings,Language,Subject,Country,Action,StudentId)
values('Keerthi','','English','WDM','US','submitted',123456789)

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
