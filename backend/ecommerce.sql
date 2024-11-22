-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2024 at 01:39 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `produit`
--

CREATE TABLE `produit` (
  `id` int(11) NOT NULL,
  `libelle` varchar(256) NOT NULL,
  `prix` float NOT NULL,
  `qte` int(11) NOT NULL,
  `des` text NOT NULL,
  `image` varchar(256) NOT NULL,
  `promo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produit`
--

INSERT INTO `produit` (`id`, `libelle`, `prix`, `qte`, `des`, `image`, `promo`) VALUES
(1, 'Asus I7 1To\r\n', 2500, 20, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia esse', 'https://picsum.photos/200/200', 0),
(2, 'Dell XPS 15', 3000, 15, 'Ordinateur portable puissant avec un écran époustouflant et d\'excellentes performances.', 'https://picsum.photos/200/200', 1),
(3, 'HP Pavilion 14', 1200, 25, 'Design élégant et léger, parfait pour un usage quotidien.', 'https://picsum.photos/200/200', 0),
(4, 'Lenovo ThinkPad X1', 1800, 10, 'Ordinateur professionnel avec une sécurité et une fiabilité de premier plan.', 'https://picsum.photos/200/200', 1),
(5, 'Acer Swift 3', 900, 30, 'Ordinateur portable compact avec une excellente autonomie.', 'https://picsum.photos/200/200', 0),
(6, 'MacBook Pro 13', 3500, 12, 'Ordinateur portable haute performance avec écran Retina et puce M1.', 'https://picsum.photos/200/200', 1),
(7, 'Surface Laptop 4', 2200, 18, 'Design élégant et performances puissantes avec Windows OS.', 'https://picsum.photos/200/200', 0),
(8, 'Asus ROG Strix', 2800, 8, 'Ordinateur portable de jeu avec un refroidissement avancé et un éclairage RGB.', 'https://picsum.photos/200/200', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `produit`
--
ALTER TABLE `produit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
