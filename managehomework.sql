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
-- Table structure for table `managehomework`
--

CREATE TABLE `managehomework` (
  `Subjectcode` varchar(50) NOT NULL,
  `CourseName` varchar(20) NOT NULL,
  `Submission` varchar(20) NOT NULL,
  `Date` date NOT NULL,
  `Grade` varchar(20) NOT NULL,
  `Studentname` varchar(50) NOT NULL,
  `UTA_ID` varchar(50) NOT NULL,
  `Phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--
insert into managehomework(Subjectcode,Coursename,Submission,date,Grade,Studentname,UTA_ID,Phone)
values(123,'WDM','done','2021-11-11','A','Keerthi',12345678,123-456-7890)
--
-- Indexes for table `managehomework`
--
ALTER TABLE `managehomework`
  ADD PRIMARY KEY (`UTA_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
