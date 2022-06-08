-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2021 at 04:43 AM
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
-- Table structure for table `managestudent`
--

CREATE TABLE `managestudent` (
  `Subjectcode` varchar(20) NOT NULL,
  `Coursename` varchar(20) NOT NULL,
  `Location` varchar(20) NOT NULL,
  `Date` date NOT NULL,
  `Time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Student_Name` varchar(50) NOT NULL,
  `StudentId` varchar(50) NOT NULL,
  `Phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables

insert into managestudent(Subjectcode,Coursename,Location,Date,Time,Student_Name,StudentID,Phone)
values('4321','WDM','online','2021-09-08','00:00:00','Keerthi',123-456-890)
--

--
-- Indexes for table `managestudent`
--
ALTER TABLE `managestudent`
  ADD PRIMARY KEY (`Student_Name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
