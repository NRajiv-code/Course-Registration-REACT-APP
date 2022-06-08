-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2021 at 03:13 AM
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
-- Table structure for table `managecourses`
--

CREATE TABLE `managecourses` (
  `Subjectcode` varchar(20) NOT NULL,
  `Coursename` varchar(20) NOT NULL,
  `Location` varchar(20) NOT NULL,
  `schedule` date NOT NULL,
  `Studentname` varchar(50) NOT NULL,
  `StudentID` varchar(20) NOT NULL,
  `Professor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

insert into managecourses(Subjectcode,Coursename,Location,Schedule,Studentname,StudentID,Professor)
values(1234,'WDM','US','','Keerthi',123456789,'')

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
