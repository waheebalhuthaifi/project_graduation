-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 26, 2024 at 12:12 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `freelancer_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `balances`
--

CREATE TABLE `balances` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `total_balance` decimal(10,2) NOT NULL,
  `withdrawable_balance` decimal(10,2) NOT NULL,
  `pending_balance` decimal(10,2) NOT NULL,
  `total_earnings` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `balances`
--

INSERT INTO `balances` (`id`, `user_id`, `total_balance`, `withdrawable_balance`, `pending_balance`, `total_earnings`, `created_at`, `updated_at`) VALUES
(1, 4, 400.00, 10.00, 40.00, 300.00, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'التطوير والبرمجة', NULL, NULL),
(2, 'التصميم الجرافيكي', NULL, NULL),
(3, 'التسويق الرقمي', NULL, NULL),
(4, 'الترجمة والكتابة', NULL, NULL),
(5, 'الاستشارات والأعمال', NULL, NULL),
(7, 'تطبيقات سطح المكتب', '2024-06-24 23:33:21', '2024-06-24 23:34:57');

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `conversation_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `freelancer_id` bigint(20) UNSIGNED NOT NULL,
  `message` text NOT NULL,
  `type` enum('EventChat','PublicChat') NOT NULL DEFAULT 'PublicChat',
  `service_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chats`
--

INSERT INTO `chats` (`id`, `conversation_id`, `client_id`, `freelancer_id`, `message`, `type`, `service_id`, `created_at`, `updated_at`) VALUES
(1, 2, 4, 4, 'مرحبا', 'PublicChat', NULL, '2024-06-14 22:02:28', '2024-06-14 22:02:28'),
(2, 1, 4, 7, 'مرحبا', 'PublicChat', NULL, '2024-06-14 22:03:17', '2024-06-14 22:03:17'),
(3, 1, 7, 4, 'هلا', 'PublicChat', NULL, '2024-06-14 22:05:24', '2024-06-14 22:05:24'),
(4, 1, 13, 13, 'مرحبا', 'PublicChat', NULL, '2024-06-14 22:06:02', '2024-06-14 22:06:02'),
(5, 1, 4, 20, 'هلا', 'PublicChat', NULL, '2024-06-14 22:56:43', '2024-06-14 22:56:43'),
(6, 1, 4, 4, 'تمام', 'PublicChat', NULL, NULL, NULL),
(7, 1, 4, 4, 'هههههه', 'PublicChat', NULL, NULL, NULL),
(8, 1, 4, 4, 'من كروم', 'PublicChat', NULL, NULL, NULL),
(9, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(10, 1, 4, 4, 'تمام', 'PublicChat', NULL, NULL, NULL),
(11, 1, 4, 4, 'تمام', 'PublicChat', NULL, NULL, NULL),
(12, 1, 4, 4, 'ghgh', 'PublicChat', NULL, NULL, NULL),
(13, 1, 4, 4, 'refrdc', 'PublicChat', NULL, NULL, NULL),
(14, 1, 4, 4, 'هههههه', 'PublicChat', NULL, NULL, NULL),
(15, 1, 4, 4, 'تمام', 'PublicChat', NULL, NULL, NULL),
(16, 1, 4, 4, 'هههههه', 'PublicChat', NULL, NULL, NULL),
(17, 1, 4, 4, 'هههههه', 'PublicChat', NULL, NULL, NULL),
(18, 1, 4, 4, 'تمام', 'PublicChat', NULL, NULL, NULL),
(19, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(20, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(21, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(22, 1, 4, 4, 'تمام', 'PublicChat', NULL, NULL, NULL),
(23, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(24, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(25, 2, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(26, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(27, 1, 4, 4, 'igh', 'PublicChat', NULL, NULL, NULL),
(28, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(29, 1, 4, 4, 'من كروم', 'PublicChat', NULL, NULL, NULL),
(30, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(31, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(32, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(33, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(34, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(35, 1, 4, 4, 'كيفك', 'PublicChat', NULL, NULL, NULL),
(36, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(37, 1, 4, 4, 'تمام', 'PublicChat', NULL, NULL, NULL),
(38, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(39, 1, 4, 4, 'تمام', 'PublicChat', NULL, NULL, NULL),
(40, 1, 4, 4, 'من كروم', 'PublicChat', NULL, NULL, NULL),
(41, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(42, 1, 4, 4, 'تمام', 'PublicChat', NULL, NULL, NULL),
(43, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(44, 1, 4, 4, 'هههههه', 'PublicChat', NULL, NULL, NULL),
(45, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(46, 1, 4, 4, 'تمام', 'PublicChat', NULL, NULL, NULL),
(47, 1, 4, 4, 'تمام', 'PublicChat', NULL, NULL, NULL),
(48, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(49, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(50, 1, 4, 4, 'تمام', 'PublicChat', NULL, NULL, NULL),
(51, 1, 4, 4, 'تمام', 'PublicChat', NULL, NULL, NULL),
(52, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(53, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(54, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(55, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(56, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(57, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(58, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(59, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(60, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(61, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(62, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(63, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(64, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(65, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(66, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(67, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(68, 1, 4, 4, 'igh', 'PublicChat', NULL, NULL, NULL),
(69, 1, 4, 4, 'igh', 'PublicChat', NULL, NULL, NULL),
(70, 1, 4, 4, 'igh', 'PublicChat', NULL, NULL, NULL),
(71, 1, 4, 4, 'igh', 'PublicChat', NULL, NULL, NULL),
(72, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(73, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(74, 1, 4, 4, 'تمام', 'PublicChat', NULL, NULL, NULL),
(75, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(76, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(77, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(78, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(79, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(80, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(81, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(82, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(83, 1, 4, 4, 'ih', 'PublicChat', NULL, NULL, NULL),
(84, 1, 4, 4, 'هههههه', 'PublicChat', NULL, NULL, NULL),
(85, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(86, 1, 4, 4, 'هههههه', 'PublicChat', NULL, NULL, NULL),
(87, 1, 4, 4, 'igh', 'PublicChat', NULL, NULL, NULL),
(88, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(89, 1, 4, 4, 'كيفك', 'PublicChat', NULL, NULL, NULL),
(90, 1, 4, 4, 'كيفك', 'PublicChat', NULL, NULL, NULL),
(91, 1, 4, 4, 'كيفك', 'PublicChat', NULL, NULL, NULL),
(92, 1, 4, 4, 'كيفك', 'PublicChat', NULL, NULL, NULL),
(93, 1, 4, 4, 'كيفك', 'PublicChat', NULL, NULL, NULL),
(94, 1, 4, 4, 'كيفكم', 'PublicChat', NULL, NULL, NULL),
(95, 1, 4, 4, 'من كروم', 'PublicChat', NULL, NULL, NULL),
(96, 1, 4, 4, 'تمام', 'PublicChat', NULL, NULL, NULL),
(97, 1, 4, 4, 'من كروم', 'PublicChat', NULL, NULL, NULL),
(98, 1, 4, 4, 'هههههه', 'PublicChat', NULL, NULL, NULL),
(99, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(100, 1, 4, 4, 'كيفك', 'PublicChat', NULL, NULL, NULL),
(101, 2, 4, 4, 'كيفك', 'PublicChat', NULL, NULL, NULL),
(102, 1, 4, 4, 'من تعز', 'PublicChat', NULL, NULL, NULL),
(103, 1, 4, 4, 'الحمدلله', 'PublicChat', NULL, NULL, NULL),
(104, 1, 4, 4, 'هههههه', 'PublicChat', NULL, NULL, NULL),
(105, 1, 4, 4, 'هههههه', 'PublicChat', NULL, NULL, NULL),
(106, 1, 4, 4, 'هههههه', 'PublicChat', NULL, NULL, NULL),
(107, 1, 4, 4, 'تحبتي', 'PublicChat', NULL, NULL, NULL),
(108, 1, 4, 4, 'لاا', 'PublicChat', NULL, NULL, NULL),
(109, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(110, 1, 4, 4, 'تحبني', 'PublicChat', NULL, NULL, NULL),
(111, 1, 4, 4, 'تحبني', 'PublicChat', NULL, NULL, NULL),
(112, 1, 4, 4, 'كيفكك', 'PublicChat', NULL, NULL, NULL),
(113, 1, 4, 4, 'chat getChatUsersAboutService', 'PublicChat', NULL, NULL, NULL),
(114, 1, 4, 4, 'chat getChatUsersAboutService', 'PublicChat', NULL, NULL, NULL),
(115, 1, 4, 4, 'chat getChatUsersAboutService', 'PublicChat', NULL, NULL, NULL),
(116, 1, 4, 4, 'chat getChatUsersAboutService', 'PublicChat', NULL, NULL, NULL),
(117, 1, 4, 4, 'chat getChatUsersAboutService', 'PublicChat', NULL, NULL, NULL),
(118, 1, 4, 4, 'هههههه', 'PublicChat', NULL, NULL, NULL),
(119, 1, 4, 4, 'صنعاء', 'PublicChat', NULL, NULL, NULL),
(120, 1, 4, 4, 'ثراء', 'PublicChat', NULL, NULL, NULL),
(121, 1, 4, 1, 'تمام', 'PublicChat', NULL, NULL, NULL),
(122, 1, 4, 1, 'هلا', 'PublicChat', NULL, NULL, NULL),
(123, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(124, 1, 4, 4, 'هلا', 'PublicChat', NULL, NULL, NULL),
(125, 1, 4, 4, 'من كروم', 'PublicChat', NULL, NULL, NULL),
(126, 1, 4, 4, 'الحمدلله', 'PublicChat', NULL, NULL, NULL),
(127, 1, 4, 1, 'هلا', 'PublicChat', NULL, NULL, NULL),
(128, 3, 1, 4, 'بسم الله', 'PublicChat', NULL, '2024-06-19 19:15:46', '2024-06-19 19:15:46'),
(129, 3, 1, 4, 'هلا', 'PublicChat', NULL, '2024-06-19 19:16:57', '2024-06-19 19:16:57'),
(130, 3, 1, 4, 'igm', 'PublicChat', NULL, '2024-06-19 19:20:06', '2024-06-19 19:20:06'),
(131, 3, 1, 4, 'هاي', 'PublicChat', NULL, '2024-06-19 19:21:54', '2024-06-19 19:21:54'),
(132, 3, 1, 4, 'مرحبا', 'PublicChat', NULL, '2024-06-19 19:25:52', '2024-06-19 19:25:52'),
(133, 3, 1, 4, 'هواريو', 'PublicChat', NULL, '2024-06-19 19:26:58', '2024-06-19 19:26:58'),
(134, 3, 1, 4, 'هاي', 'PublicChat', NULL, '2024-06-19 19:27:34', '2024-06-19 19:27:34'),
(135, 2, 4, 4, 'الحمدلله', 'PublicChat', NULL, '2024-06-19 19:38:13', '2024-06-19 19:38:13'),
(136, 3, 1, 4, 'مرحبتين', 'PublicChat', NULL, '2024-06-19 19:41:35', '2024-06-19 19:41:35'),
(137, 2, 4, 4, 'هلا اخي', 'PublicChat', NULL, '2024-06-19 19:42:58', '2024-06-19 19:42:58'),
(138, 2, 4, 4, 'كييييي', 'PublicChat', NULL, '2024-06-19 19:43:22', '2024-06-19 19:43:22'),
(139, 2, 4, 4, 'عاشو', 'PublicChat', NULL, '2024-06-19 19:44:46', '2024-06-19 19:44:46'),
(140, 2, 4, 4, 'هههههه', 'PublicChat', NULL, '2024-06-19 19:45:33', '2024-06-19 19:45:33'),
(141, 4, 7, 4, 'هلا 7 انا رقم 4', 'PublicChat', NULL, '2024-06-19 19:54:34', '2024-06-19 19:54:34'),
(142, 4, 7, 4, 'وووي', 'PublicChat', NULL, '2024-06-19 19:56:37', '2024-06-19 19:56:37'),
(143, 5, 7, 7, 'مرحبا', 'PublicChat', NULL, '2024-06-19 19:57:46', '2024-06-19 19:57:46'),
(144, 5, 7, 7, 'كيفك', 'PublicChat', NULL, '2024-06-19 19:58:09', '2024-06-19 19:58:09'),
(145, 4, 7, 4, 'الحمدلله', 'PublicChat', NULL, '2024-06-19 19:58:20', '2024-06-19 19:58:20'),
(146, 4, 7, 4, 'من كروم', 'PublicChat', NULL, '2024-06-19 20:03:25', '2024-06-19 20:03:25'),
(147, 4, 7, 4, 'igh', 'PublicChat', NULL, '2024-06-19 20:07:24', '2024-06-19 20:07:24'),
(148, 5, 4, 7, 'كيف الان ؟ من مكرسوفت', 'PublicChat', NULL, '2024-06-19 20:07:39', '2024-06-19 20:07:39'),
(149, 4, 7, 4, 'هلا', 'PublicChat', NULL, '2024-06-19 20:14:57', '2024-06-19 20:14:57'),
(150, 4, 7, 4, 'مرحبا', 'PublicChat', NULL, '2024-06-19 20:15:05', '2024-06-19 20:15:05'),
(151, 4, 7, 4, 'غيرتها', 'PublicChat', NULL, '2024-06-19 20:48:41', '2024-06-19 20:48:41'),
(152, 5, 7, 7, 'كيف الان ؟', 'PublicChat', NULL, '2024-06-19 20:48:56', '2024-06-19 20:48:56'),
(153, 4, 7, 4, 'ي سلام عليكم', 'PublicChat', NULL, '2024-06-19 20:49:15', '2024-06-19 20:49:15'),
(154, 4, 7, 4, 'انا 4', 'PublicChat', NULL, '2024-06-19 20:50:43', '2024-06-19 20:50:43'),
(155, 4, 7, 4, 'غيرتها', 'PublicChat', NULL, '2024-06-19 20:51:59', '2024-06-19 20:51:59'),
(156, 4, 7, 4, 'صباح الخيرات ي وطني', 'PublicChat', NULL, '2024-06-19 20:53:00', '2024-06-19 20:53:00'),
(157, 4, 7, 4, 'igh', 'PublicChat', NULL, '2024-06-19 20:55:47', '2024-06-19 20:55:47'),
(158, 8, 4, 20, 'تنتنتس', 'PublicChat', NULL, '2024-06-19 20:56:13', '2024-06-19 20:56:13'),
(159, 4, 7, 4, 'تعز', 'PublicChat', NULL, '2024-06-19 20:58:20', '2024-06-19 20:58:20'),
(160, 5, 7, 7, 'مرحبا', 'PublicChat', NULL, '2024-06-19 21:05:45', '2024-06-19 21:05:45'),
(161, 5, 7, 7, 'مرحبا', 'PublicChat', NULL, '2024-06-19 21:05:47', '2024-06-19 21:05:47'),
(162, 4, 7, 4, 'من كروم', 'PublicChat', NULL, '2024-06-19 21:12:59', '2024-06-19 21:12:59'),
(163, 5, 7, 7, 'كيف الان ؟ من مكرسوفت', 'PublicChat', NULL, '2024-06-19 21:13:18', '2024-06-19 21:13:18'),
(164, 4, 7, 4, 'احد هناك', 'PublicChat', NULL, '2024-06-19 21:14:02', '2024-06-19 21:14:02'),
(165, 4, 7, 4, 'هههههه', 'PublicChat', NULL, '2024-06-19 21:17:51', '2024-06-19 21:17:51'),
(166, 4, 7, 4, 'igh', 'PublicChat', NULL, '2024-06-19 21:23:08', '2024-06-19 21:23:08'),
(167, 4, 7, 4, 'صوفيا', 'PublicChat', NULL, '2024-06-19 21:27:19', '2024-06-19 21:27:19'),
(168, 5, 7, 7, 'صوفيا بتركيا', 'PublicChat', NULL, '2024-06-19 21:27:55', '2024-06-19 21:27:55'),
(169, 4, 7, 4, 'تمام', 'PublicChat', NULL, '2024-06-19 21:55:59', '2024-06-19 21:55:59'),
(170, 5, 7, 7, 'كيف الان ؟ من مكرسوفت', 'PublicChat', NULL, '2024-06-19 21:56:20', '2024-06-19 21:56:20'),
(171, 7, 7, 20, 'chat getChatUsersAboutService', 'PublicChat', NULL, '2024-06-19 21:56:29', '2024-06-19 21:56:29'),
(172, 2, 4, 4, 'هههههه', 'PublicChat', NULL, '2024-06-19 21:57:04', '2024-06-19 21:57:04'),
(173, 2, 4, 4, 'تمام', 'PublicChat', NULL, '2024-06-19 21:57:35', '2024-06-19 21:57:35'),
(174, 2, 4, 4, 'تمام', 'PublicChat', NULL, '2024-06-19 22:18:24', '2024-06-19 22:18:24'),
(175, 2, 4, 4, 'هلا', 'PublicChat', NULL, '2024-06-19 22:27:44', '2024-06-19 22:27:44'),
(176, 2, 4, 4, 'تمام', 'PublicChat', NULL, '2024-06-19 22:28:27', '2024-06-19 22:28:27'),
(177, 2, 4, 4, 'هههههه', 'PublicChat', NULL, '2024-06-19 22:31:46', '2024-06-19 22:31:46'),
(178, 8, 4, 20, 'هههههه', 'PublicChat', NULL, '2024-06-19 22:59:33', '2024-06-19 22:59:33'),
(179, 8, 4, 20, 'من كروم', 'PublicChat', NULL, '2024-06-19 23:03:13', '2024-06-19 23:03:13'),
(180, 4, 7, 4, 'igh', 'PublicChat', NULL, '2024-06-19 23:04:46', '2024-06-19 23:04:46'),
(181, 8, 4, 20, 'تمام', 'PublicChat', NULL, '2024-06-19 23:04:55', '2024-06-19 23:04:55'),
(182, 5, 7, 7, 'تاتات', 'PublicChat', NULL, '2024-06-19 23:05:12', '2024-06-19 23:05:12'),
(183, 4, 7, 4, 'انا 4', 'PublicChat', NULL, '2024-06-19 23:09:57', '2024-06-19 23:09:57'),
(184, 5, 7, 7, 'هلا', 'PublicChat', NULL, '2024-06-19 23:10:30', '2024-06-19 23:10:30'),
(185, 5, 7, 7, 'كيف الان ؟ من مكرسوفت', 'PublicChat', NULL, '2024-06-19 23:11:31', '2024-06-19 23:11:31'),
(186, 5, 7, 7, 'كيف الان ؟', 'PublicChat', NULL, '2024-06-19 23:11:45', '2024-06-19 23:11:45'),
(187, 4, 7, 4, 'chat getChatUsersAboutService', 'PublicChat', NULL, '2024-06-19 23:15:10', '2024-06-19 23:15:10'),
(188, 4, 7, 4, 'igh', 'PublicChat', NULL, '2024-06-19 23:16:12', '2024-06-19 23:16:12'),
(189, 4, 7, 4, 'من كروم', 'PublicChat', NULL, '2024-06-19 23:19:13', '2024-06-19 23:19:13'),
(190, 4, 7, 4, 'من كروم', 'PublicChat', NULL, '2024-06-19 23:53:38', '2024-06-19 23:53:38'),
(191, 4, 7, 4, 'lklk', 'PublicChat', NULL, '2024-06-20 00:01:32', '2024-06-20 00:01:32'),
(192, 3, 1, 4, 'مرحبا', 'PublicChat', NULL, '2024-06-20 21:33:11', '2024-06-20 21:33:11'),
(193, 3, 1, 4, 'chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService', 'PublicChat', NULL, '2024-06-20 21:37:41', '2024-06-20 21:37:41'),
(194, 3, 1, 4, 'chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService', 'PublicChat', NULL, '2024-06-20 21:39:14', '2024-06-20 21:39:14'),
(195, 3, 1, 4, 'chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService', 'PublicChat', NULL, '2024-06-20 21:40:37', '2024-06-20 21:40:37'),
(196, 3, 1, 4, 'chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService', 'PublicChat', NULL, '2024-06-20 21:40:56', '2024-06-20 21:40:56'),
(197, 3, 1, 4, 'chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService', 'PublicChat', NULL, '2024-06-20 21:41:22', '2024-06-20 21:41:22'),
(198, 3, 1, 4, 'chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService', 'PublicChat', NULL, '2024-06-20 21:41:50', '2024-06-20 21:41:50'),
(199, 3, 1, 4, 'chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService chat getChatUsersAboutService', 'PublicChat', NULL, '2024-06-20 21:42:11', '2024-06-20 21:42:11'),
(200, 6, 2, 4, 'هلا', 'PublicChat', NULL, '2024-06-20 21:54:39', '2024-06-20 21:54:39'),
(201, 6, 2, 4, 'من كروم', 'PublicChat', NULL, '2024-06-20 21:54:57', '2024-06-20 21:54:57'),
(202, 3, 1, 4, 'هلا', 'PublicChat', NULL, '2024-06-23 23:31:40', '2024-06-23 23:31:40'),
(203, 13, 1, 20, 'igh', 'PublicChat', NULL, '2024-06-24 09:55:06', '2024-06-24 09:55:06'),
(204, 8, 20, 4, 'هلا', 'PublicChat', 10, '2024-06-24 10:32:57', '2024-06-24 10:32:57'),
(205, 8, 20, 4, 'how are you', 'PublicChat', 10, '2024-06-24 10:34:04', '2024-06-24 10:34:04'),
(206, 8, 20, 4, 'هلا', 'PublicChat', 10, '2024-06-24 10:36:48', '2024-06-24 10:36:48'),
(207, 8, 20, 4, 'هلا', 'PublicChat', 10, '2024-06-24 10:37:03', '2024-06-24 10:37:03'),
(208, 8, 20, 4, 'سنءمسنءمس', 'PublicChat', 10, '2024-06-24 10:37:30', '2024-06-24 10:37:30'),
(209, 8, 20, 4, 'هلا', 'PublicChat', 10, '2024-06-24 10:38:21', '2024-06-24 10:38:21'),
(210, 8, 20, 4, 'هلا', 'PublicChat', 10, '2024-06-24 10:38:39', '2024-06-24 10:38:39'),
(211, 8, 20, 4, 'hi', 'PublicChat', 10, '2024-06-24 10:38:57', '2024-06-24 10:38:57'),
(212, 8, 20, 4, 'هلا kdlkl dks', 'PublicChat', 10, '2024-06-24 10:40:15', '2024-06-24 10:40:15'),
(213, 8, 20, 4, 'هههههه', 'PublicChat', 10, '2024-06-24 10:43:10', '2024-06-24 10:43:10'),
(214, 8, 20, 4, 'من كروم', 'PublicChat', 10, '2024-06-24 10:44:55', '2024-06-24 10:44:55'),
(215, 8, 20, 4, 'هلا', 'PublicChat', 10, '2024-06-24 10:50:34', '2024-06-24 10:50:34'),
(216, 8, 20, 4, 'نيمنيم خيي  سينسي خن يم', 'PublicChat', 10, '2024-06-24 10:50:54', '2024-06-24 10:50:54'),
(217, 8, 20, 4, 'هلا', 'PublicChat', 10, '2024-06-24 11:05:28', '2024-06-24 11:05:28'),
(218, 8, 20, 4, 'يمن', 'PublicChat', 10, '2024-06-24 11:41:36', '2024-06-24 11:41:36'),
(219, 8, 20, 4, 'مرحبميك', 'PublicChat', 10, '2024-06-24 11:43:41', '2024-06-24 11:43:41'),
(220, 8, 20, 4, 'سمءسمسوسكمءوسم', 'PublicChat', 10, '2024-06-24 11:44:56', '2024-06-24 11:44:56'),
(221, 8, 20, 4, 'lssxs', 'PublicChat', 10, '2024-06-24 11:46:27', '2024-06-24 11:46:27'),
(222, 8, 20, 4, 'chat getChatUsersAboutService', 'PublicChat', 10, '2024-06-24 11:47:46', '2024-06-24 11:47:46'),
(223, 8, 20, 4, 'igh', 'PublicChat', 10, '2024-06-24 11:49:25', '2024-06-24 11:49:25'),
(224, 8, 20, 4, 'جاري التنفيذ', 'PublicChat', 10, '2024-06-24 11:50:10', '2024-06-24 11:50:10'),
(225, 8, 20, 4, 'من كروم', 'PublicChat', 10, '2024-06-24 11:51:21', '2024-06-24 11:51:21'),
(226, 8, 20, 4, 'هههههه', 'PublicChat', 10, '2024-06-24 11:52:47', '2024-06-24 11:52:47'),
(227, 8, 20, 4, 'chat getChatUsersAboutService', 'PublicChat', 10, '2024-06-24 11:54:10', '2024-06-24 11:54:10'),
(228, 8, 20, 4, 'تعز', 'PublicChat', 10, '2024-06-24 11:56:36', '2024-06-24 11:56:36'),
(229, 8, 20, 4, 'تمام', 'PublicChat', 10, '2024-06-24 11:58:19', '2024-06-24 11:58:19'),
(230, 8, 20, 4, 'هواريو', 'PublicChat', 10, '2024-06-24 12:03:48', '2024-06-24 12:03:48'),
(231, 8, 20, 4, 'أدارة الطلبات  جاري التنفيذ', 'PublicChat', 10, '2024-06-24 12:04:16', '2024-06-24 12:04:16'),
(232, 8, 20, 4, 'fetchChatOrder', 'PublicChat', 10, '2024-06-24 12:05:03', '2024-06-24 12:05:03'),
(233, 8, 20, 4, 'تمام', 'PublicChat', 10, '2024-06-24 12:06:44', '2024-06-24 12:06:44'),
(234, 8, 20, 4, 'تمام', 'PublicChat', 10, '2024-06-24 12:08:03', '2024-06-24 12:08:03'),
(235, 8, 20, 4, 'chat getChatUsersAboutService', 'PublicChat', 10, '2024-06-24 12:08:18', '2024-06-24 12:08:18'),
(236, 8, 20, 4, 'هلا', 'PublicChat', 10, '2024-06-24 12:18:05', '2024-06-24 12:18:05'),
(237, 8, 20, 4, 'هلا', 'PublicChat', 10, '2024-06-24 12:18:55', '2024-06-24 12:18:55'),
(238, 8, 20, 4, 'chat getChatUsersAboutService', 'PublicChat', 10, '2024-06-24 12:19:03', '2024-06-24 12:19:03'),
(239, 8, 20, 4, 'من كروم', 'PublicChat', 10, '2024-06-24 12:20:40', '2024-06-24 12:20:40'),
(240, 8, 20, 4, 'غلغلغ', 'PublicChat', 10, '2024-06-24 12:21:34', '2024-06-24 12:21:34'),
(241, 1, 20, 4, 'هواريو', 'PublicChat', 10, '2024-06-24 18:08:06', '2024-06-24 18:08:06'),
(242, 1, 20, 4, 'Are you fine', 'EventChat', 10, '2024-06-24 18:11:08', '2024-06-24 18:11:08'),
(243, 1, 20, 4, 'yes I am fine', 'EventChat', 10, '2024-06-24 18:11:29', '2024-06-24 18:11:29'),
(244, 1, 20, 4, 'مرحبا', 'PublicChat', 10, '2024-06-24 18:23:52', '2024-06-24 18:23:52'),
(245, 1, 20, 4, 'مرحبا سامي', 'EventChat', 10, '2024-06-24 18:26:04', '2024-06-24 18:26:04'),
(246, 8, 20, 4, 'igh', 'EventChat', 10, '2024-06-24 18:37:35', '2024-06-24 18:37:35'),
(247, 8, 20, 4, 'بسم الله', 'EventChat', 10, '2024-06-24 18:37:53', '2024-06-24 18:37:53'),
(248, 13, 1, 20, 'هلا', 'PublicChat', NULL, '2024-06-24 18:38:42', '2024-06-24 18:38:42'),
(249, 3, 1, 4, 'كيفك', 'PublicChat', NULL, '2024-06-24 18:38:54', '2024-06-24 18:38:54'),
(250, 13, 1, 20, 'منمن', 'PublicChat', NULL, '2024-06-24 18:39:10', '2024-06-24 18:39:10'),
(251, 3, 1, 4, 'هههههه', 'PublicChat', NULL, '2024-06-24 18:39:29', '2024-06-24 18:39:29'),
(252, 13, 1, 20, 'igh', 'PublicChat', NULL, '2024-06-24 18:39:55', '2024-06-24 18:39:55'),
(253, 13, 1, 20, 'هههههه', 'PublicChat', NULL, '2024-06-24 18:46:53', '2024-06-24 18:46:53'),
(254, 3, 1, 4, 'كيفك', 'PublicChat', NULL, '2024-06-24 18:47:15', '2024-06-24 18:47:15'),
(255, 3, 1, 4, 'ساتسا', 'PublicChat', NULL, '2024-06-24 18:50:03', '2024-06-24 18:50:03'),
(256, 13, 1, 20, 'سمكسم', 'PublicChat', NULL, '2024-06-24 18:50:11', '2024-06-24 18:50:11'),
(257, 3, 1, 4, 'gggggg', 'PublicChat', NULL, '2024-06-24 18:55:01', '2024-06-24 18:55:01'),
(258, 13, 1, 20, 'jjjjjj', 'PublicChat', NULL, '2024-06-24 18:55:09', '2024-06-24 18:55:09'),
(259, 3, 1, 4, 'kjkj', 'PublicChat', NULL, '2024-06-24 18:55:54', '2024-06-24 18:55:54'),
(260, 13, 1, 20, 'op', 'PublicChat', NULL, '2024-06-24 18:56:01', '2024-06-24 18:56:01'),
(261, 3, 1, 4, 'poiut', 'PublicChat', NULL, '2024-06-24 18:56:13', '2024-06-24 18:56:13'),
(262, 13, 1, 20, 'vv', 'PublicChat', NULL, '2024-06-24 18:56:21', '2024-06-24 18:56:21'),
(263, 8, 20, 4, 'llklklk', 'EventChat', 10, '2024-06-24 19:04:56', '2024-06-24 19:04:56'),
(264, 8, 20, 4, 'من كروم', 'EventChat', 10, '2024-06-24 19:05:11', '2024-06-24 19:05:11'),
(265, 2, 4, 4, 'jdkfjkdj', 'PublicChat', NULL, '2024-06-24 19:05:52', '2024-06-24 19:05:52'),
(266, 2, 4, 4, ';sd;sd', 'PublicChat', NULL, '2024-06-24 19:06:02', '2024-06-24 19:06:02'),
(267, 8, 4, 20, 'aslksla', 'PublicChat', NULL, '2024-06-24 19:06:10', '2024-06-24 19:06:10'),
(268, 2, 4, 4, 'lskskskl', 'EventChat', 10, '2024-06-24 19:12:28', '2024-06-24 19:12:28'),
(269, 8, 20, 4, 'hhjhj', 'EventChat', 10, '2024-06-24 19:12:52', '2024-06-24 19:12:52'),
(270, 8, 20, 4, 'hhjhj', 'EventChat', 10, '2024-06-24 19:13:25', '2024-06-24 19:13:25'),
(271, 8, 20, 4, 'hhjhj', 'EventChat', 10, '2024-06-24 19:13:29', '2024-06-24 19:13:29'),
(272, 8, 20, 4, 'hhjhjjkj', 'EventChat', 10, '2024-06-24 19:13:32', '2024-06-24 19:13:32'),
(273, 2, 4, 4, 'اليمن', 'EventChat', 10, '2024-06-24 19:13:57', '2024-06-24 19:13:57'),
(274, 8, 20, 4, 'yemen', 'EventChat', 10, '2024-06-24 19:14:10', '2024-06-24 19:14:10'),
(275, 2, 4, 4, 'هاي', 'PublicChat', 10, '2024-06-24 19:22:39', '2024-06-24 19:22:39'),
(276, 8, 20, 4, 'ستنت', 'PublicChat', 10, '2024-06-24 19:24:02', '2024-06-24 19:24:02'),
(277, 8, 20, 4, 'سمسن', 'PublicChat', 10, '2024-06-24 19:27:22', '2024-06-24 19:27:22'),
(278, 2, 4, 4, 'سمنسن', 'PublicChat', 10, '2024-06-24 19:30:42', '2024-06-24 19:30:42'),
(279, 8, 20, 4, 'وهيب', 'EventChat', 10, '2024-06-25 17:02:35', '2024-06-25 17:02:35'),
(280, 8, 20, 4, 'مرحبا', 'EventChat', 10, '2024-06-25 17:02:57', '2024-06-25 17:02:57'),
(281, 8, 20, 4, 'askdlksldklslskdk', 'EventChat', 10, '2024-06-25 17:06:35', '2024-06-25 17:06:35'),
(282, 8, 20, 4, 'هلا', 'EventChat', 10, '2024-06-25 17:07:37', '2024-06-25 17:07:37'),
(283, 8, 20, 4, 'مسيسمكم', 'EventChat', 10, '2024-06-25 17:08:39', '2024-06-25 17:08:39'),
(284, 8, 20, 4, 'hhg', 'EventChat', 10, '2024-06-25 17:13:18', '2024-06-25 17:13:18'),
(285, 8, 20, 4, 'sklkd', 'EventChat', 10, '2024-06-25 17:14:15', '2024-06-25 17:14:15'),
(286, 8, 20, 4, 'jjkc', 'EventChat', 10, '2024-06-25 17:14:35', '2024-06-25 17:14:35'),
(287, 8, 20, 4, 'kkdls', 'EventChat', 10, '2024-06-25 17:15:14', '2024-06-25 17:15:14'),
(288, 8, 20, 4, 'sllsm', 'EventChat', 10, '2024-06-25 17:16:05', '2024-06-25 17:16:05'),
(289, 8, 20, 4, 'kdkfl', 'EventChat', 10, '2024-06-25 17:16:49', '2024-06-25 17:16:49'),
(290, 8, 20, 4, 'ls;l;sll', 'EventChat', 10, '2024-06-25 17:17:45', '2024-06-25 17:17:45'),
(291, 8, 20, 4, 'dkldk', 'EventChat', 10, '2024-06-25 17:18:12', '2024-06-25 17:18:12'),
(292, 8, 20, 4, 'kdkdlkslkdl', 'EventChat', 10, '2024-06-25 17:18:24', '2024-06-25 17:18:24'),
(293, 8, 20, 4, 'kslkdls', 'EventChat', 10, '2024-06-25 17:18:59', '2024-06-25 17:18:59'),
(294, 8, 20, 4, 'sldl;sld;sl;ld', 'EventChat', 10, '2024-06-25 17:19:10', '2024-06-25 17:19:10'),
(295, 8, 20, 4, '1111', 'EventChat', 10, '2024-06-25 17:19:19', '2024-06-25 17:19:19'),
(296, 8, 20, 4, 'sl;dlsdl;', 'EventChat', 10, '2024-06-25 17:19:58', '2024-06-25 17:19:58'),
(297, 8, 20, 4, 'بسم الله', 'EventChat', 10, '2024-06-25 17:20:08', '2024-06-25 17:20:08'),
(298, 8, 20, 4, 'الله', 'EventChat', 10, '2024-06-25 17:20:21', '2024-06-25 17:20:21'),
(299, 8, 20, 4, 'مرحبا', 'EventChat', 10, '2024-06-25 17:22:31', '2024-06-25 17:22:31'),
(300, 8, 20, 4, 'مييخخ', 'EventChat', 10, '2024-06-25 17:22:43', '2024-06-25 17:22:43'),
(301, 8, 20, 4, 'igh', 'EventChat', 10, '2024-06-25 17:22:55', '2024-06-25 17:22:55'),
(302, 8, 20, 4, 'تمام', 'EventChat', 10, '2024-06-25 17:24:02', '2024-06-25 17:24:02'),
(303, 8, 20, 4, 'sldlsdlsasdsdkaslksd;lkd', 'EventChat', 10, '2024-06-25 17:24:12', '2024-06-25 17:24:12'),
(304, 8, 20, 4, 'sld;ld;l;ds;dlsl;dl;s;x;s,xsslxlxls', 'EventChat', 10, '2024-06-25 17:26:32', '2024-06-25 17:26:32'),
(305, 8, 20, 4, 'hgdlk', 'EventChat', 10, '2024-06-25 17:27:09', '2024-06-25 17:27:09'),
(306, 8, 20, 4, 'اليمن', 'EventChat', 10, '2024-06-25 17:27:22', '2024-06-25 17:27:22'),
(307, 8, 20, 4, 'تمام', 'EventChat', 10, '2024-06-25 17:27:38', '2024-06-25 17:27:38'),
(308, 8, 20, 4, 'ميمنيمسمسنن', 'EventChat', 10, '2024-06-25 17:27:52', '2024-06-25 17:27:52'),
(309, 8, 20, 4, 'يتنتيت', 'EventChat', 10, '2024-06-25 17:28:45', '2024-06-25 17:28:45'),
(310, 8, 20, 4, 'للبيل', 'EventChat', 10, '2024-06-25 17:28:51', '2024-06-25 17:28:51'),
(311, 8, 20, 4, 'تعز', 'EventChat', 10, '2024-06-25 17:28:57', '2024-06-25 17:28:57'),
(312, 8, 20, 4, 'chat getChatUsersAboutService', 'EventChat', 10, '2024-06-25 17:35:34', '2024-06-25 17:35:34'),
(313, 8, 20, 4, 'igh', 'EventChat', 10, '2024-06-25 17:35:41', '2024-06-25 17:35:41'),
(314, 8, 20, 4, 'هلا', 'EventChat', 10, '2024-06-25 17:36:37', '2024-06-25 17:36:37'),
(315, 8, 20, 4, 'chat getChatUsersAboutService', 'EventChat', 10, '2024-06-25 17:36:47', '2024-06-25 17:36:47'),
(316, 8, 20, 4, 'هلا', 'EventChat', 10, '2024-06-25 17:37:42', '2024-06-25 17:37:42'),
(317, 8, 20, 4, 'هههههه', 'EventChat', 10, '2024-06-25 17:38:33', '2024-06-25 17:38:33'),
(318, 8, 20, 4, 'تمام', 'EventChat', 10, '2024-06-25 17:38:39', '2024-06-25 17:38:39'),
(319, 8, 20, 4, 'من كروم', 'EventChat', 10, '2024-06-25 17:39:08', '2024-06-25 17:39:08'),
(320, 8, 20, 4, 'هلا', 'EventChat', 10, '2024-06-25 17:39:24', '2024-06-25 17:39:24'),
(321, 8, 20, 4, 'هلا', 'EventChat', 10, '2024-06-25 17:39:32', '2024-06-25 17:39:32'),
(322, 2, 4, 4, 'chat getChatUsersAboutService', 'PublicChat', 10, '2024-06-25 17:41:09', '2024-06-25 17:41:09'),
(323, 2, 4, 4, 'chat getChatUsersAboutService', 'PublicChat', 10, '2024-06-25 18:22:13', '2024-06-25 18:22:13');

-- --------------------------------------------------------

--
-- Table structure for table `conversations`
--

CREATE TABLE `conversations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user1_id` bigint(20) UNSIGNED NOT NULL,
  `user2_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `conversations`
--

INSERT INTO `conversations` (`id`, `user1_id`, `user2_id`, `created_at`, `updated_at`) VALUES
(1, 4, 13, NULL, NULL),
(2, 4, 4, '2024-06-15 00:26:59', '2024-06-15 00:26:59'),
(3, 4, 1, '2024-06-19 17:40:41', '2024-06-19 17:40:41'),
(4, 4, 7, '2024-06-19 19:54:07', '2024-06-19 19:54:07'),
(5, 7, 7, '2024-06-19 19:55:55', '2024-06-19 19:55:55'),
(6, 4, 2, '2024-06-19 20:09:56', '2024-06-19 20:09:56'),
(7, 20, 7, '2024-06-19 20:50:06', '2024-06-19 20:50:06'),
(8, 20, 4, '2024-06-19 20:52:50', '2024-06-19 20:52:50'),
(9, 4, 7, '2024-06-19 21:10:40', '2024-06-19 21:10:40'),
(10, 4, 7, '2024-06-19 21:11:55', '2024-06-19 21:11:55'),
(11, 20, 4, '2024-06-19 21:12:20', '2024-06-19 21:12:20'),
(12, 7, 1, '2024-06-21 17:42:58', '2024-06-21 17:42:58'),
(13, 20, 1, '2024-06-24 09:50:46', '2024-06-24 09:50:46'),
(14, 4, 20, NULL, NULL),
(15, 4, 9, '2024-06-24 19:40:58', '2024-06-24 19:40:58');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(31, '2014_10_12_000000_create_users_table', 1),
(32, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(33, '2019_08_19_000000_create_failed_jobs_table', 1),
(34, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(35, '2024_04_30_223942_create_projects_table', 1),
(36, '2024_04_30_224933_create_services_table', 1),
(37, '2024_05_01_002027_add_user_type_to_users_table', 2),
(47, '2024_05_02_002911_add_image_to_services_table', 3),
(48, '2024_05_02_034854_alter_services_table', 3),
(49, '2024_05_02_210520_add_category_to_services_table', 4),
(50, '2024_05_03_234342_create_categories_table', 4),
(52, '2024_05_03_235637_add_category_id_to_services_table', 5),
(56, '2024_05_04_001054_add_image_to_services_table', 6),
(57, '2024_05_04_002300_create_services_table', 7),
(58, '2024_05_11_000017_add_image_column_to_users_table', 8),
(59, '2024_05_11_004923_create_chats_table', 9),
(61, '2024_05_11_004932_create_chats_table', 10),
(62, '2024_05_11_011223_create_chat_user_table', 11),
(63, '2024_05_11_012427_create_messages_table', 12),
(64, '2024_05_11_013909_add__i_d_column_to_chat_users_table', 13),
(65, '2024_05_13_000046_add_role_to_users', 14),
(66, '2024_05_13_022048_create_ratings_table', 15),
(69, '2024_05_13_024719_create_projects_table', 16),
(70, '2024_05_13_205305_add_city_to_users', 17),
(71, '2024_05_19_022017_create_portfolio_table', 18),
(73, '2024_05_21_213924_create_notifications_table', 19),
(74, '0000_00_00_000000_create_websockets_statistics_entries_table', 20),
(75, '2024_06_02_013534_create_messagess_table', 21),
(76, '2024_06_02_232634_add_email_verification_token_to_users_table', 22),
(77, '2024_06_14_211323_create_conversations_table', 23),
(78, '2024_06_15_004039_add_conversation_id_to_chats_table', 24),
(79, '2024_06_16_204053_orders', 25),
(80, '2024_06_23_181144_create_create_balances_table', 26),
(106, '2024_06_23_181248_create_balances_table', 27),
(107, '2024_06_23_202637_create_payments_table', 27),
(110, '2024_06_23_202700_create_withdrawals_table', 28),
(111, '2024_06_23_205642_transactions', 29),
(112, '2024_06_24_211709_add_type_field_to_chats_table', 29),
(114, '2024_06_25_024430_add_type_field_to_services_table', 30);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `message` text NOT NULL,
  `is_read` tinyint(1) NOT NULL DEFAULT 0,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `service_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `message`, `is_read`, `user_id`, `service_id`, `created_at`, `updated_at`) VALUES
(1, 'ارسل لك samiلتنفيذ الخدمة', 1, 4, 10, NULL, '2024-06-22 17:47:45'),
(2, 'ارسل لك samiلتنفيذ الخدمة', 1, 4, 10, NULL, '2024-06-22 17:47:44'),
(3, 'ارسل لك Laravelلتنفيذ الخدمة', 1, 4, 12, NULL, '2024-06-22 17:47:43'),
(4, 'ارسل لك Laravelلتنفيذ الخدمة', 1, 4, 12, NULL, '2024-06-22 17:47:42'),
(5, 'ارسل لك Laravelلبدء تنفيذ الخدمة', 1, 4, 12, NULL, '2024-06-22 17:47:41'),
(6, 'ارسل لك Laravelلبدء تنفيذ الخدمة', 1, 4, 12, NULL, '2024-06-22 17:47:47'),
(7, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 1, 4, 12, NULL, '2024-06-22 17:47:45'),
(8, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 1, 4, 12, NULL, '2024-06-22 17:47:49'),
(9, 'ارسل لك Laravelلبدء تنفيذ الخدمة', 1, 4, 12, NULL, '2024-06-22 17:47:46'),
(10, 'ارسل لك Laravelلبدء تنفيذ الخدمة', 1, 4, 12, NULL, '2024-06-22 17:48:13'),
(11, 'لقد قام Laravelبالغاء تنفيذ الخدمة معك', 1, 4, 12, NULL, '2024-06-22 17:47:49'),
(12, 'لقد قام Laravelبالغاء تنفيذ الخدمة معك', 1, 4, 12, NULL, '2024-06-22 17:47:55'),
(13, 'لقد قام Laravelبالغاء تنفيذ الخدمة معك', 1, 4, 12, NULL, '2024-06-22 17:48:18'),
(14, 'لقد قام Laravelبالغاء تنفيذ الخدمة معك', 1, 4, 12, NULL, '2024-06-22 17:47:53'),
(15, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 1, 4, 12, NULL, '2024-06-22 17:48:12'),
(16, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 1, 4, 12, NULL, '2024-06-22 17:48:11'),
(17, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 1, 4, 12, NULL, '2024-06-22 17:47:57'),
(18, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 1, 4, 12, NULL, '2024-06-22 17:48:17'),
(19, 'لقد قام Laravelبالغاء تنفيذ الخدمة معك', 1, 4, 12, NULL, '2024-06-22 17:47:58'),
(20, 'لقد قام Laravelبالغاء تنفيذ الخدمة معك', 1, 4, 12, NULL, '2024-06-22 17:47:56'),
(21, 'لقد قام Laravelبالغاء تنفيذ الخدمة معك', 1, 4, 12, NULL, '2024-06-22 17:48:00'),
(22, 'لقد قام Laravelبالغاء تنفيذ الخدمة معك', 1, 4, 12, NULL, '2024-06-22 17:48:01'),
(23, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 1, 4, 12, NULL, '2024-06-22 17:48:05'),
(24, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 1, 4, 12, NULL, '2024-06-22 17:48:08'),
(25, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 1, 4, 12, NULL, '2024-06-22 17:48:16'),
(26, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 1, 4, 12, NULL, '2024-06-22 17:48:16'),
(27, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 1, 4, 12, NULL, NULL),
(28, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 1, 4, 12, NULL, NULL),
(29, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 1, 4, 12, NULL, NULL),
(30, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 1, 4, 12, NULL, NULL),
(31, 'ارسل لك محمد بندرلتأكيد أستلام الخدمة', 1, 4, 12, NULL, NULL),
(32, 'ارسل لك محمد بندرلتأكيد أستلام الخدمة', 1, 4, 12, NULL, '2024-06-22 17:47:40'),
(33, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 1, 4, 10, NULL, '2024-06-22 19:31:49'),
(34, 'ارسل لك محمد بندرلتأكيد أستلام الخدمة', 1, 4, 10, NULL, '2024-06-22 19:31:41'),
(35, 'ارسل لك محمد بندرلتأكيد أستلام الخدمة', 1, 4, 10, NULL, '2024-06-22 19:31:40'),
(36, 'ارسل لك محمد بندرلتأكيد أستلام الخدمة', 1, 4, 10, NULL, '2024-06-22 19:31:38'),
(37, 'ارسل لك محمد بندرلتأكيد أستلام الخدمة', 1, 4, 10, NULL, '2024-06-22 19:31:57'),
(38, 'ارسل لك محمد بندرلتأكيد أستلام الخدمة', 1, 4, 10, NULL, '2024-06-22 19:31:43'),
(39, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 1, 4, 10, NULL, '2024-06-22 19:31:44'),
(40, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 1, 4, 10, NULL, '2024-06-22 19:31:48'),
(41, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 1, 4, 10, NULL, '2024-06-22 19:32:02'),
(42, 'ارسل لك محمد بندرلتأكيد أستلام الخدمة', 1, 4, 10, NULL, '2024-06-22 19:31:52'),
(43, 'ارسل لك محمد بندرلتأكيد أستلام الخدمة', 1, 4, 10, NULL, '2024-06-22 19:34:46'),
(44, 'ارسل لك محمد بندرلتأكيد أستلام الخدمة', 1, 4, 10, NULL, '2024-06-22 19:31:37'),
(45, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 1, 4, 10, NULL, '2024-06-23 11:19:10'),
(46, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 1, 4, 10, NULL, '2024-06-23 11:19:11'),
(47, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 1, 4, 10, NULL, '2024-06-23 11:19:12'),
(48, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 1, 4, 10, NULL, '2024-06-23 11:19:17'),
(49, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 1, 4, 10, NULL, '2024-06-23 11:19:14'),
(50, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 1, 4, 10, NULL, '2024-06-23 11:19:14'),
(51, 'لقد قام samiبالغاء تنفيذ الخدمة معك', 1, 4, 10, NULL, '2024-06-23 11:19:20'),
(52, 'لقد قام samiبالغاء تنفيذ الخدمة معك', 1, 4, 10, NULL, '2024-06-23 11:19:15'),
(53, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 0, 4, 10, NULL, NULL),
(54, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 0, 4, 10, NULL, NULL),
(55, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 0, 4, 10, NULL, NULL),
(56, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 0, 4, 10, NULL, NULL),
(57, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 0, 4, 10, NULL, NULL),
(58, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 0, 4, 10, NULL, NULL),
(59, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 0, 4, 10, NULL, NULL),
(60, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 0, 4, 10, NULL, NULL),
(61, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 0, 4, 10, NULL, NULL),
(62, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 0, 4, 10, NULL, NULL),
(63, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 0, 4, 10, NULL, NULL),
(64, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 0, 4, 10, NULL, NULL),
(65, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 0, 4, 10, NULL, NULL),
(66, 'لقد قام محمد بندربالغاء تنفيذ الخدمة معك', 0, 4, 10, NULL, NULL),
(67, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 0, 4, 10, NULL, NULL),
(68, 'ارسل لك محمد بندرلبدء تنفيذ الخدمة', 0, 4, 10, NULL, NULL),
(69, 'ارسل لك samiلتأكيد أستلام الخدمة', 0, 4, 10, NULL, NULL),
(70, 'ارسل لك samiلتأكيد أستلام الخدمة', 0, 4, 10, NULL, NULL),
(71, 'ارسل لك samiلتأكيد أستلام الخدمة', 0, 4, 10, NULL, NULL),
(72, 'ارسل لك samiلتأكيد أستلام الخدمة', 0, 4, 10, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `buyer_id` bigint(20) UNSIGNED NOT NULL,
  `seller_id` bigint(20) UNSIGNED NOT NULL,
  `service_id` bigint(20) UNSIGNED NOT NULL,
  `amount` int(11) NOT NULL,
  `status` enum('pending','in_progress','completed','cancelled') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `buyer_id`, `seller_id`, `service_id`, `amount`, `status`, `created_at`, `updated_at`) VALUES
(1, 20, 4, 10, 250, 'in_progress', '2024-06-21 11:59:29', '2024-06-23 14:07:20'),
(2, 7, 4, 12, 250, 'pending', '2024-06-21 17:53:12', '2024-06-22 00:17:52');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `freelancer_id` bigint(20) UNSIGNED NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `payment_date` datetime NOT NULL,
  `payment_status` enum('pending','paid','failed','refunded') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(3, 'App\\Models\\User', 1, 'auth_token', 'f9de4c6162c3ddff5ca638d6f96ff4e40c512b5a03725d13174696f31ca1785d', '[\"*\"]', NULL, NULL, '2024-04-30 23:36:08', '2024-04-30 23:36:08'),
(4, 'App\\Models\\User', 1, 'auth_token', '6dc66a9467a624175a9043e32590fd6f6cce67d3c0e1a1118419c40453781b70', '[\"*\"]', NULL, NULL, '2024-04-30 23:38:46', '2024-04-30 23:38:46'),
(5, 'App\\Models\\User', 1, 'auth_token', 'e7e524c32ba9d99e3f9cb24306652c723670116a40a817a4c41c03fbf07d000a', '[\"*\"]', NULL, NULL, '2024-04-30 23:39:48', '2024-04-30 23:39:48'),
(9, 'App\\Models\\User', 1, 'auth_token', '3e5de788a15e6fb33742edad811c45e277e284897bc99241b34c71e5c57dc920', '[\"*\"]', NULL, NULL, '2024-04-30 23:45:41', '2024-04-30 23:45:41'),
(11, 'App\\Models\\User', 1, 'auth_token', '3640ad7f0dc4b77d5675541b27ec30f65545e08afdaf14d27fc7622659781a04', '[\"*\"]', NULL, NULL, '2024-04-30 23:45:56', '2024-04-30 23:45:56'),
(12, 'App\\Models\\User', 1, 'auth_token', '28acbc499b9112e26e30097ff00b8da8c29955fa75d419bafa1cfb80eb6e1863', '[\"*\"]', NULL, NULL, '2024-04-30 23:46:38', '2024-04-30 23:46:38'),
(13, 'App\\Models\\User', 3, 'auth_token', '9e948f2e312958b54c3f2d1401231786dd1560b7a6b5481de2a171c242e43eab', '[\"*\"]', NULL, NULL, '2024-04-30 23:48:48', '2024-04-30 23:48:48'),
(14, 'App\\Models\\User', 3, 'auth_token', '1ad43f5d7a99e3642d333f0120c40f675c33c9543a6f1068cfdab4184e2ff6ff', '[\"*\"]', NULL, NULL, '2024-04-30 23:49:28', '2024-04-30 23:49:28'),
(15, 'App\\Models\\User', 3, 'auth_token', '233b277c1e6a1fd8b03a4318268a501be2cbffca2b16de7eae2ebc490d3dc38c', '[\"*\"]', NULL, NULL, '2024-04-30 23:50:29', '2024-04-30 23:50:29'),
(16, 'App\\Models\\User', 3, 'auth_token', 'cf65a85da9c7264f4a24a88f5a3616874c3a481b7fad4c2809e9e9888c997f69', '[\"*\"]', NULL, NULL, '2024-04-30 23:51:49', '2024-04-30 23:51:49'),
(18, 'App\\Models\\User', 1, 'auth_token', 'f27683ba416ab9fdccb66c4a49ac0af8008dc17ab6dcdc64de03a8325b9aa6e8', '[\"*\"]', NULL, NULL, '2024-05-01 20:19:35', '2024-05-01 20:19:35'),
(19, 'App\\Models\\User', 4, 'auth_token', 'befa4e8a58dbb6e154136f366bfc81cee608296d7ed3bbc3c0042d77e4336a5a', '[\"*\"]', NULL, NULL, '2024-05-01 20:20:53', '2024-05-01 20:20:53'),
(20, 'App\\Models\\User', 4, 'auth_token', 'a3fb50c87f7db5ca968648db0fd76e070956070ec33cb9cbb36e79c2bec45864', '[\"*\"]', NULL, NULL, '2024-05-01 20:21:36', '2024-05-01 20:21:36'),
(22, 'App\\Models\\User', 4, 'auth_token', 'b6e47e3101967dc104dbc09e2e9080aee54bc512c8c9977931d2627ee45f1520', '[\"*\"]', NULL, NULL, '2024-05-01 20:46:57', '2024-05-01 20:46:57'),
(23, 'App\\Models\\User', 4, 'auth_token', '215f33e993ab973d4db328a34e97f278d9c3620c4ed666489774aca68a6d21cc', '[\"*\"]', NULL, NULL, '2024-05-01 20:56:15', '2024-05-01 20:56:15'),
(24, 'App\\Models\\User', 4, 'auth_token', '33f1c4fffd7e6a2d2f61b38bc13e4ccc1473c35394c78e1b3bb8ca676d600ead', '[\"*\"]', '2024-05-02 00:53:32', NULL, '2024-05-01 21:06:35', '2024-05-02 00:53:32'),
(25, 'App\\Models\\User', 4, 'auth_token', 'c748f64bfbb6954b63e83a7da813bc39f45562491f855e0cc75de9f88e28bc63', '[\"*\"]', NULL, NULL, '2024-05-02 22:35:30', '2024-05-02 22:35:30'),
(27, 'App\\Models\\User', 2, 'auth_token', '90479a32e2f3f01ee4a479738a958aa314a43459849a43a7acd80f196c77bb16', '[\"*\"]', '2024-05-03 22:23:43', NULL, '2024-05-02 23:27:38', '2024-05-03 22:23:43'),
(30, 'App\\Models\\User', 1, 'auth_token', '18b9e88cb7427ae0b9de0efb1666bf984e72b9709ed267f41466058ea88f7919', '[\"*\"]', NULL, NULL, '2024-05-11 00:15:26', '2024-05-11 00:15:26'),
(33, 'App\\Models\\User', 1, 'auth_token', 'c46539504bc1a335e7f0d1f7aeba768e29691f5d9779b894f385bf654770e878', '[\"*\"]', NULL, NULL, '2024-05-12 21:34:10', '2024-05-12 21:34:10'),
(41, 'App\\Models\\User', 1, 'auth_token', '28bdc9e56f3a0d337861d5dbdbe5bf9847b6ed4d672d519980fd84b96858646a', '[\"*\"]', NULL, NULL, '2024-05-12 22:12:32', '2024-05-12 22:12:32'),
(54, 'App\\Models\\User', 4, 'auth_token', '338d623ea7e2db331c29c8f009d818a5e6ff9c83f2319a3f23dca04d7eaa8473', '[\"*\"]', NULL, NULL, '2024-05-13 17:10:54', '2024-05-13 17:10:54'),
(58, 'App\\Models\\User', 4, 'auth_token', 'e2f45acccef47b05a6b16922988aed96f28725d48a16663a564619f24975f9fd', '[\"*\"]', NULL, NULL, '2024-05-13 18:18:14', '2024-05-13 18:18:14'),
(65, 'App\\Models\\User', 4, 'auth_token', '3258220db5739a9fca92d393e790104b34a2b068f4c0de5f83d5b9d3adac9c45', '[\"*\"]', '2024-05-18 20:33:19', NULL, '2024-05-18 20:30:32', '2024-05-18 20:33:19'),
(71, 'App\\Models\\User', 4, 'auth_token', 'f1ea7c2e1181997d9491ce4b5d97b4589cd441298a7dcbc3f1dcc66832b03aa0', '[\"*\"]', NULL, NULL, '2024-05-20 22:31:41', '2024-05-20 22:31:41'),
(73, 'App\\Models\\User', 4, 'auth_token', 'd74b9cefdf26acd2ed1076966186799a697d0ea74715fcfc96be2eda06578212', '[\"*\"]', NULL, NULL, '2024-05-21 21:07:59', '2024-05-21 21:07:59'),
(74, 'App\\Models\\User', 4, 'auth_token', 'b83a70ad584690c100d959351dd07f1340063dff55ebd2299b9242d350660bb0', '[\"*\"]', NULL, NULL, '2024-05-21 21:08:00', '2024-05-21 21:08:00'),
(76, 'App\\Models\\User', 7, 'auth_token', 'e4a58419820caaefac9f36ec3d0fccc9b59b1c669861ee8d030cbd149f983c9c', '[\"*\"]', '2024-05-21 23:36:57', NULL, '2024-05-21 22:06:24', '2024-05-21 23:36:57'),
(78, 'App\\Models\\User', 4, 'auth_token', 'bc9a47b2f6c589f99b487a066cbe3e4c633df3b53732d608fe905a429dd1c5be', '[\"*\"]', NULL, NULL, '2024-05-22 00:30:25', '2024-05-22 00:30:25'),
(79, 'App\\Models\\User', 4, 'auth_token', 'd83d389ce6c0f83a8434111f42dbc2ae07caea943cc605236d6ebe228c08ddd2', '[\"*\"]', NULL, NULL, '2024-05-22 00:31:24', '2024-05-22 00:31:24'),
(80, 'App\\Models\\User', 4, 'auth_token', '56c077c35f07b06ddd9fc83710597b8d610a4110acc32222c522f1571ba89d96', '[\"*\"]', NULL, NULL, '2024-05-22 00:33:11', '2024-05-22 00:33:11'),
(81, 'App\\Models\\User', 4, 'auth_token', '562e9ac7b98f7ef27fb851f8dd70534030d9ccac7d16a482ce34ed958651769e', '[\"*\"]', NULL, NULL, '2024-05-22 00:36:18', '2024-05-22 00:36:18'),
(82, 'App\\Models\\User', 4, 'auth_token', 'e604eb0aca134702e9300663451c6a5aca9b3c95a47ad2b0e9959f85497cfbbc', '[\"*\"]', NULL, NULL, '2024-05-22 00:38:00', '2024-05-22 00:38:00'),
(83, 'App\\Models\\User', 4, 'auth_token', 'cfb91201d05469f716417fcc029138f07378335e6cb1bd8501d937e76530c633', '[\"*\"]', NULL, NULL, '2024-05-22 00:38:12', '2024-05-22 00:38:12'),
(84, 'App\\Models\\User', 4, 'auth_token', 'db0ddc3656b254efbc13254954995937ac094ba98f37eee37d727b90313ab888', '[\"*\"]', NULL, NULL, '2024-05-22 00:39:30', '2024-05-22 00:39:30'),
(85, 'App\\Models\\User', 4, 'auth_token', 'ea2da93accb27869cfc84e2920e643b881138a59e3debdebedb2d35036981cc3', '[\"*\"]', NULL, NULL, '2024-05-22 00:41:03', '2024-05-22 00:41:03'),
(89, 'App\\Models\\User', 4, 'auth_token', '0be072d1844e721ed4554d543a0cce70e0b7c1062db113297f487264ab4fcd49', '[\"*\"]', '2024-05-22 20:07:25', NULL, '2024-05-22 19:32:47', '2024-05-22 20:07:25'),
(94, 'App\\Models\\User', 4, 'auth_token', '129ca8734c73f899bb5e49896bac563197d9098871e714810931e354df05b4a6', '[\"*\"]', NULL, NULL, '2024-05-22 20:38:13', '2024-05-22 20:38:13'),
(96, 'App\\Models\\User', 4, 'auth_token', 'c7f048534abcdc4e9521a684df50063814fd47a104b9b11fc8883affc9273b10', '[\"*\"]', NULL, NULL, '2024-05-22 20:49:38', '2024-05-22 20:49:38'),
(97, 'App\\Models\\User', 4, 'auth_token', 'f6b8fea5d52f4f90095d821272b59ab6c3f9ba9d1fa3d39d673edb39a0770b20', '[\"*\"]', NULL, NULL, '2024-05-22 21:08:11', '2024-05-22 21:08:11'),
(98, 'App\\Models\\User', 4, 'auth_token', 'ffa42d0f1ef49466eff692dc8842b63b35faf97ee2697c7aa936c254e9929fc2', '[\"*\"]', '2024-05-23 18:41:58', NULL, '2024-05-22 22:55:34', '2024-05-23 18:41:58'),
(99, 'App\\Models\\User', 4, 'auth_token', 'da7c97f647825d9f78a390bc0abfed49f66d87a80901d175b9198c2f9d50f398', '[\"*\"]', NULL, NULL, '2024-05-22 23:13:07', '2024-05-22 23:13:07'),
(100, 'App\\Models\\User', 4, 'auth_token', '6ca47510cc74027058d723073d789c73c08554fed9eeab041231705e81c95d55', '[\"*\"]', NULL, NULL, '2024-05-22 23:13:25', '2024-05-22 23:13:25'),
(101, 'App\\Models\\User', 4, 'auth_token', '3422ad2167f1fdff34c5619f26b06af577423869b904c3347f8ab30b9f6c36f0', '[\"*\"]', '2024-05-23 19:01:38', NULL, '2024-05-23 18:42:01', '2024-05-23 19:01:38'),
(102, 'App\\Models\\User', 4, 'auth_token', '875624ed324d6d3a20e27b3a91de1e377fb44221b07c5e1bafc44cb03a070e2a', '[\"*\"]', NULL, NULL, '2024-05-23 19:01:22', '2024-05-23 19:01:22'),
(103, 'App\\Models\\User', 4, 'auth_token', 'a0326538d1dbb42944f491cb6d58e53218561e51d5c4c1835ca2ed373a98a302', '[\"*\"]', NULL, NULL, '2024-05-23 19:01:23', '2024-05-23 19:01:23'),
(104, 'App\\Models\\User', 4, 'auth_token', '525c2a8f496035c22bc77b92d9be37293b8dcc493606782b62385c6646a4816a', '[\"*\"]', NULL, NULL, '2024-05-23 19:01:25', '2024-05-23 19:01:25'),
(105, 'App\\Models\\User', 4, 'auth_token', '664a414c930722085220662d94de24acfadd172e6d5cb274c2c26b82f492b168', '[\"*\"]', NULL, NULL, '2024-05-23 19:01:26', '2024-05-23 19:01:26'),
(106, 'App\\Models\\User', 4, 'auth_token', 'b118435c37398bbf3de98a30eaeb8eb64cb1f10058d2c3edde2370888559eda6', '[\"*\"]', NULL, NULL, '2024-05-23 19:01:28', '2024-05-23 19:01:28'),
(107, 'App\\Models\\User', 4, 'auth_token', '1bf9a68af2c7f2a91513a3a75d47c517a02eba602a7c1502691ee0b83e11ffab', '[\"*\"]', NULL, NULL, '2024-05-23 19:01:29', '2024-05-23 19:01:29'),
(108, 'App\\Models\\User', 4, 'auth_token', '2a2dffad2e3a9ef86b2d5674f8c51cbdb68e19209d163645ffb18e1464e4cde9', '[\"*\"]', NULL, NULL, '2024-05-23 19:01:31', '2024-05-23 19:01:31'),
(109, 'App\\Models\\User', 4, 'auth_token', 'e6fc8c53f0304aabab35720bffe1d4c6cb97feeba8b36434a5822a302ccb812f', '[\"*\"]', NULL, NULL, '2024-05-23 19:01:32', '2024-05-23 19:01:32'),
(110, 'App\\Models\\User', 4, 'auth_token', 'b8c480a4651883d6a23514776e12092fb22d3c8641577c8d303386f7e35f5cde', '[\"*\"]', '2024-05-23 19:02:01', NULL, '2024-05-23 19:01:34', '2024-05-23 19:02:01'),
(111, 'App\\Models\\User', 4, 'auth_token', '5e98054770773aef1f55e145ae2c4b12875e09b8e42e3e3760efecc1fee78946', '[\"*\"]', '2024-05-23 19:02:01', NULL, '2024-05-23 19:01:39', '2024-05-23 19:02:01'),
(112, 'App\\Models\\User', 4, 'auth_token', '4edd3e14ac25cacc240300c66c0a34fffab439d96917e1fc6a8f07723105aee2', '[\"*\"]', '2024-05-23 19:02:11', NULL, '2024-05-23 19:01:40', '2024-05-23 19:02:11'),
(113, 'App\\Models\\User', 4, 'auth_token', '8f942c2e05e5b225e180361e16305a62e39c557a882e7b280be8b30a2ab70d4c', '[\"*\"]', '2024-05-23 19:02:12', NULL, '2024-05-23 19:01:44', '2024-05-23 19:02:12'),
(114, 'App\\Models\\User', 4, 'auth_token', 'c64859bc75c3cd275b6d22434c4ffde0facc72633252e27ebf5325e18f49c78a', '[\"*\"]', NULL, NULL, '2024-05-23 19:01:45', '2024-05-23 19:01:45'),
(115, 'App\\Models\\User', 4, 'auth_token', '310b781939ca46bd0215f6731d890adfc5c26b39ed5fcc57617a3296ef5975a1', '[\"*\"]', NULL, NULL, '2024-05-23 19:01:46', '2024-05-23 19:01:46'),
(116, 'App\\Models\\User', 4, 'auth_token', '999b1255644e69a52dc7e261ee6947bc191e5b2c53b7a2faf727a5b5e29e5373', '[\"*\"]', NULL, NULL, '2024-05-23 19:01:47', '2024-05-23 19:01:47'),
(123, 'App\\Models\\User', 4, 'auth_token', '91da54d38e188330f8164be05394ca636fad3d790f5d74d9b292a56b0438cec5', '[\"*\"]', NULL, NULL, '2024-05-25 18:45:21', '2024-05-25 18:45:21'),
(126, 'App\\Models\\User', 4, 'auth_token', 'a97eb29322c516f74e8d4e9f39db9af41283d3d6bbf82f693a407ead0cc40305', '[\"*\"]', '2024-05-26 19:21:24', NULL, '2024-05-25 19:54:36', '2024-05-26 19:21:24'),
(132, 'App\\Models\\User', 4, 'auth_token', '44fa29d38950911a4c275be600fefef47abbf77eee4bd244e2582d2668d7d031', '[\"*\"]', '2024-06-01 19:21:30', NULL, '2024-05-31 19:22:39', '2024-06-01 19:21:30'),
(133, 'App\\Models\\User', 4, 'auth_token', '6ddb54b657a4967ecfc3c338139a5891e8e7eb42560a1162fcaabb8c1b6f351b', '[\"*\"]', NULL, NULL, '2024-06-01 21:32:08', '2024-06-01 21:32:08'),
(134, 'App\\Models\\User', 4, 'auth_token', '158f330c5838c84afd8d95886fffa283e699778d722b73d49de6ff5a469e2ef0', '[\"*\"]', NULL, NULL, '2024-06-01 21:35:14', '2024-06-01 21:35:14'),
(135, 'App\\Models\\User', 4, 'auth_token', '910d5ac490e1bb9a95c6da14d41c41819b4fa610f2630becabe4bdddcb0ebfd5', '[\"*\"]', NULL, NULL, '2024-06-01 21:42:15', '2024-06-01 21:42:15'),
(136, 'App\\Models\\User', 4, 'auth_token', 'c56a7a373e244749ef72f07a5d3c48fb37c864851c46b4c0a56c917e4c9886ca', '[\"*\"]', NULL, NULL, '2024-06-01 21:42:19', '2024-06-01 21:42:19'),
(137, 'App\\Models\\User', 4, 'auth_token', 'eb6c0bbc9166135d11717b4f758e5997fed88b59f4c090a9c7ae35373d9e5c87', '[\"*\"]', NULL, NULL, '2024-06-01 22:03:29', '2024-06-01 22:03:29'),
(138, 'App\\Models\\User', 4, 'auth_token', '870295a11c2e2b328f9dcedb72dfee9f6cb4b61f703a418c7567f623fef0d9e2', '[\"*\"]', NULL, NULL, '2024-06-01 22:03:33', '2024-06-01 22:03:33'),
(139, 'App\\Models\\User', 4, 'auth_token', 'bff9b11d1a853c875e4ac9fce23dc8a5607d39d2cc06374cf74bfe71a415bbea', '[\"*\"]', NULL, NULL, '2024-06-01 22:03:35', '2024-06-01 22:03:35'),
(146, 'App\\Models\\User', 18, 'auth_token', 'bedb600810bfe818c89299273548d019413f531a9f82b06ec04645a0fe788970', '[\"*\"]', '2024-06-02 23:11:38', NULL, '2024-06-02 22:08:34', '2024-06-02 23:11:38'),
(147, 'App\\Models\\User', 19, 'auth_token', '09286e09415f397e0292a99a4ac84bd3a58b4910e357d80cccfc02f28bb028a0', '[\"*\"]', '2024-06-02 23:18:38', NULL, '2024-06-02 23:16:05', '2024-06-02 23:18:38'),
(149, 'App\\Models\\User', 4, 'auth_token', '6f05c93a6a3efece776c88aa2ffd4a80664bf00b5468eb83b59680935126c59e', '[\"*\"]', NULL, NULL, '2024-06-02 23:35:26', '2024-06-02 23:35:26'),
(155, 'App\\Models\\User', 4, 'auth_token', 'f36c7b6657e6004ff216a88f6ecbc4c0a9c5d00bd5fcd4b7cd7a8aa61ebc9765', '[\"*\"]', NULL, NULL, '2024-06-03 17:58:13', '2024-06-03 17:58:13'),
(156, 'App\\Models\\User', 4, 'auth_token', 'bd39e38a1bcc6930512da93fa4eb87ad1f771ec17c21bcdd03043a25b7f4eb8a', '[\"*\"]', '2024-06-03 22:37:37', NULL, '2024-06-03 17:58:15', '2024-06-03 22:37:37'),
(157, 'App\\Models\\User', 4, 'auth_token', '37e5d976e746f5056ffa1cdb748429f426420b67aa311f1ae26ed124416104ae', '[\"*\"]', '2024-06-12 19:49:32', NULL, '2024-06-11 19:49:52', '2024-06-12 19:49:32'),
(161, 'App\\Models\\User', 20, 'auth_token', '2f5ce738150c0756dc45d14ef288f1dcf4a2559a1db66d761cb4c153a8cf5c62', '[\"*\"]', '2024-06-12 00:51:46', NULL, '2024-06-12 00:50:22', '2024-06-12 00:51:46'),
(162, 'App\\Models\\User', 20, 'auth_token', 'bd8f0b3c287e2aec0d804c238294304458ce053ace66ce5fcae690a920abf65d', '[\"*\"]', '2024-06-13 00:52:11', NULL, '2024-06-12 00:52:20', '2024-06-13 00:52:11'),
(165, 'App\\Models\\User', 13, 'auth_token', '520e46c0931edd7ba2e41e7fa7a255115279fca3e4a3211a4236cfc77afbedd2', '[\"*\"]', '2024-06-14 00:48:07', NULL, '2024-06-13 01:01:40', '2024-06-14 00:48:07'),
(166, 'App\\Models\\User', 7, 'auth_token', '535723f1b66fa1d1e93ded78105a79879be55adaf4a19fd6e3cc8693c782e4f3', '[\"*\"]', '2024-06-13 02:57:43', NULL, '2024-06-13 01:45:25', '2024-06-13 02:57:43'),
(168, 'App\\Models\\User', 4, 'auth_token', '42d6cdab2a9a8d56c06eeda3bf3c3c5fef1ab3636ea4af1b7f0e8afb65db6e0a', '[\"*\"]', '2024-06-14 01:25:45', NULL, '2024-06-13 11:29:23', '2024-06-14 01:25:45'),
(170, 'App\\Models\\User', 7, 'auth_token', '9776bec784fdf68e2efabb11893cacbfb5cdcb8467ad2d369ca09b859e4c170f', '[\"*\"]', '2024-06-14 01:25:47', NULL, '2024-06-13 12:31:26', '2024-06-14 01:25:47'),
(171, 'App\\Models\\User', 4, 'auth_token', '44825505355b4caa65eabbffafe04975800dc30f7e8e6c5c796b22b7c7109fdc', '[\"*\"]', NULL, NULL, '2024-06-14 01:31:15', '2024-06-14 01:31:15'),
(172, 'App\\Models\\User', 13, 'auth_token', '774979803940b8e3c8de4dd90e60a68f5abfa322bf621309b908b7b59dedc766', '[\"*\"]', '2024-06-15 00:27:14', NULL, '2024-06-14 15:01:47', '2024-06-15 00:27:14'),
(173, 'App\\Models\\User', 4, 'auth_token', 'c764cdc06a61310e0cc6d5c898423139e398616132f637bbcc17f6effd5b59bc', '[\"*\"]', '2024-06-15 00:28:06', NULL, '2024-06-14 15:18:22', '2024-06-15 00:28:06'),
(174, 'App\\Models\\User', 7, 'auth_token', '9c6518a52a065b8d74bcb86c6bcdc7b02d1fbb8544552aa3bd5bf24f7d61c56d', '[\"*\"]', '2024-06-15 00:27:40', NULL, '2024-06-14 16:57:22', '2024-06-15 00:27:40'),
(175, 'App\\Models\\User', 4, 'auth_token', '98fafaf1a3a9d1427519dcf23c1359101190ad92b03c430032a1ad71e4acf12a', '[\"*\"]', '2024-06-17 19:47:47', NULL, '2024-06-16 19:55:39', '2024-06-17 19:47:47'),
(179, 'App\\Models\\User', 4, 'auth_token', '75a0f5958b479bcc7706665e6cb9952b5a837c19311f27674befdc782db7203e', '[\"*\"]', '2024-06-18 17:08:00', NULL, '2024-06-18 14:18:19', '2024-06-18 17:08:00'),
(181, 'App\\Models\\User', 4, 'auth_token', '1d57e03818355de092f0f5d60ad8422c285253ad9b8b3a5ba040ad95aad75ff7', '[\"*\"]', '2024-06-19 17:04:18', NULL, '2024-06-18 17:08:21', '2024-06-19 17:04:18'),
(183, 'App\\Models\\User', 4, 'auth_token', 'ae695f1d2edfd51227cd28576cb2811edb5e1f26f8526a5a805298560431cf44', '[\"*\"]', NULL, NULL, '2024-06-18 18:35:03', '2024-06-18 18:35:03'),
(184, 'App\\Models\\User', 4, 'auth_token', '54522042cbe0ca66be1cbf2638192b1adbf01611452658b7e4d052ad209626a7', '[\"*\"]', NULL, NULL, '2024-06-18 18:42:39', '2024-06-18 18:42:39'),
(185, 'App\\Models\\User', 7, 'auth_token', 'dad7ceec2a6b53694b632a7950c66f98359d848ec530fdb94f32a6f8a3565692', '[\"*\"]', '2024-06-19 00:05:43', NULL, '2024-06-18 18:54:09', '2024-06-19 00:05:43'),
(187, 'App\\Models\\User', 4, 'auth_token', 'f68169721d99f82fe0a47c67f1282d8092bef4d71bd61148b2283941a53b0894', '[\"*\"]', '2024-06-20 19:04:50', NULL, '2024-06-19 19:10:31', '2024-06-20 19:04:50'),
(188, 'App\\Models\\User', 7, 'auth_token', '492dbfebc2cb5bfa46ff40434172d8e848f15fa371e19c20c4b8d94fb40bc35f', '[\"*\"]', '2024-06-19 23:49:27', NULL, '2024-06-19 19:55:41', '2024-06-19 23:49:27'),
(190, 'App\\Models\\User', 20, 'auth_token', '593c53af9c4d8859177a8d603ff85882b54122aa7859dadb86828090f05df225', '[\"*\"]', '2024-06-19 23:49:43', NULL, '2024-06-19 20:49:48', '2024-06-19 23:49:43'),
(195, 'App\\Models\\User', 20, 'auth_token', '482c463198d45060ebb3e9f717db7e8f78b80dfa04c79fe4caa1103866f08e09', '[\"*\"]', '2024-06-21 12:38:26', NULL, '2024-06-21 10:54:04', '2024-06-21 12:38:26'),
(196, 'App\\Models\\User', 7, 'auth_token', 'eed449f9e97120e85063693c8b8ff6f06031a159ad3cb17ab6f07af29f9779b9', '[\"*\"]', '2024-06-22 00:25:03', NULL, '2024-06-21 11:55:51', '2024-06-22 00:25:03'),
(197, 'App\\Models\\User', 7, 'auth_token', '4eb99f7bdbf70cf0886fdfff11e9e6d1bc794db67162b7ddade8b42311b1e738', '[\"*\"]', '2024-06-21 20:26:02', NULL, '2024-06-21 17:44:47', '2024-06-21 20:26:02'),
(199, 'App\\Models\\User', 20, 'auth_token', 'df8f8c9c0a1d11cc849c2736db432e6bcf484c47f7ebb3dd75db49cd27d8c07f', '[\"*\"]', '2024-06-21 22:13:59', NULL, '2024-06-21 20:29:17', '2024-06-21 22:13:59'),
(200, 'App\\Models\\User', 4, 'auth_token', '9b27f08b3e6b82f559e0547b232a7a3a5ade21952a5b8e112cc4a65855cf8b4b', '[\"*\"]', '2024-06-22 19:45:25', NULL, '2024-06-21 23:21:55', '2024-06-22 19:45:25'),
(201, 'App\\Models\\User', 20, 'auth_token', 'cc2e2d683ca9f5ace73666c9b3a7222fe130b50857370f25ba0a3803dd493a78', '[\"*\"]', '2024-06-22 19:45:19', NULL, '2024-06-22 17:42:39', '2024-06-22 19:45:19'),
(202, 'App\\Models\\User', 20, 'auth_token', '46980f822eccc6699ef34497e02efd545366ad54e31495a90e0bb3bfc033af92', '[\"*\"]', '2024-06-23 16:35:41', NULL, '2024-06-23 10:42:52', '2024-06-23 16:35:41'),
(203, 'App\\Models\\User', 4, 'auth_token', '5c8becbf663a226231634362876f0bce067318269ef72f0bf75f906db85b01a9', '[\"*\"]', '2024-06-24 10:46:35', NULL, '2024-06-23 10:46:53', '2024-06-24 10:46:35'),
(204, 'App\\Models\\User', 20, 'auth_token', '7e52ae82d85ea0a1bbc1d9f6305daffe99bea4e2a08af2c343d3bd091f72a395', '[\"*\"]', '2024-06-24 16:30:34', NULL, '2024-06-24 09:49:06', '2024-06-24 16:30:34'),
(206, 'App\\Models\\User', 20, 'auth_token', 'b61ba1404dda7685964f8162ed38387f25d9e42fbae8574324184e9a9d3260af', '[\"*\"]', '2024-06-24 22:11:44', NULL, '2024-06-24 17:24:20', '2024-06-24 22:11:44'),
(207, 'App\\Models\\User', 1, 'auth_token', '36ad15a1e617b3e88d6571c1e6b5da04437c3c7783075df4a9e7bff5f5553687', '[\"*\"]', '2024-06-24 22:38:47', NULL, '2024-06-24 19:44:38', '2024-06-24 22:38:47'),
(208, 'App\\Models\\User', 4, 'auth_token', 'a1b3f102e6feb593649ded339218b0f8bfe92ef52ccaeaa194ae4f6feb1286e1', '[\"*\"]', '2024-06-25 16:40:17', NULL, '2024-06-25 16:30:38', '2024-06-25 16:40:17'),
(209, 'App\\Models\\User', 20, 'auth_token', 'de3a5c59eac7bbf4665eba0f03f85ee326c3434c62dfefb53f2f86b680c5fe74', '[\"*\"]', '2024-06-25 16:40:49', NULL, '2024-06-25 16:30:59', '2024-06-25 16:40:49'),
(210, 'App\\Models\\User', 4, 'auth_token', 'a023124c036a9c93a366477a6eb97f7ccb5483bc20508d697dc6609c9a3b6178', '[\"*\"]', '2024-06-25 18:57:14', NULL, '2024-06-25 16:40:23', '2024-06-25 18:57:14'),
(211, 'App\\Models\\User', 20, 'auth_token', '02ac17c3a3a60e83ebb14e9032869fc7e03ad13350860b989343f247ba91a5ca', '[\"*\"]', '2024-06-25 18:56:44', NULL, '2024-06-25 16:40:53', '2024-06-25 18:56:44');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`id`, `user_id`, `title`, `description`, `thumbnail`, `image`, `url`, `created_at`, `updated_at`) VALUES
(1, 2, 'تصميم غلاف كتاب 📖📚\r\n', 'صممت موقع وضايف باستخدام figma ،يتيح الموقع تصفح الوضائف المتاحة لدى شركات العالم العربي التي تبحث عن مستقلين و اشخاص ذوي الخبرة لتوضيفهم اذا أعجبك النموذج لا تتردد في التواصل معي لتقديم الأفضل', '', '', '', NULL, NULL),
(4, 5, 'تصميم هويه بصريه مميزه', 'اتمني ان تكون بخير عزيزي\r\nانا مصمم جرافيك متخصص في تصميم الشعارات والهويات البصرية\r\nخبرتي اكثر من 4 أعوام في المجال\r\nماذا تحصل مقابل تصميم هويه بصريه بــ 250 $\r\n* تصميم شعــــار ( تحصل علي نموذجان ليسهل الاختيار بينهما )\r\n* تحصل علي اسماء الخطوط و درجات الالوان المستخدمه * تحصل علي Patterns / shapes\r\n* المطبوعات الاساسيه ( (( تحصل علي نموذج لكل عنصر مع امكانيه التعديل عليه ))\r\n- كروت شخصيه - اوراق رسميه - فواتير - سندات - اظرف ( 2 مقاس ) - ID,s - فولدر - اختام - رول اب أو بانر\r\n* تصميمات السوشيال ميديا\r\n- عدد 1 template - عدد 2 story - تصميم الـ Cover ( بمقاسات مختلفه لجميع منصات التواصل الاجتماعي )\r\n* presentation .. تحتوي علي نبذه عن الشركه مع وجود الشعار بتفاصيله وباقي عناصر الهويه حيث يكون Guide-Line\r\nفي حاله طلب عناصر مختلفه يجب المراسله للاتفـــاق\r\nراجع اعمالي\r\nبالتوفيق لكم', 'Portfolioimages\\1716167531_1022_5fd7c08420575-1607975044.jpg', 'Portfolioimages\\1716167531_1022_5fd7c08420575-1607975044.jpg', 'http://localhost:3000/add-portfolio', '2024-05-19 22:12:11', '2024-05-19 22:12:11'),
(6, 4, 'تصميم الواجهة الرسومية', 'تصميم الواجهة الرسومية', 'Portfolioimages\\1716590326_13946_61d5f4631e546-1641411683.jpg', 'Portfolioimages\\1716590326_13946_61d5f4631e546-1641411683.jpg', 'http://localhost:3000/edite/377/portfolio', '2024-05-20 01:51:22', '2024-05-24 19:38:46'),
(7, 4, 'تصميم شعار & هوية بصرية لمتجر الكتروني', 'تصميم شعار مميز و هوية بصرية متكاملة لمتجر \" دكانلي \" , متجر الكتروني متخصص في بيع جميع انواع المنتجات.', 'Portfolioimages\\1716243001_27.webp', 'Portfolioimages\\1716243001_27.webp', 'http://localhost:3000/add-portfolio', '2024-05-20 19:10:01', '2024-05-20 19:10:01'),
(8, 4, 'داشبورد تحكم', 'صممت لوحة تحكم منصة موقع pharmaco لتبدو أكثر بساطة ووضوحًا و بواجهة جد', 'Portfolioimages\\1716590367_3993_5f10e8f28e1e5-1594943730.jpg', 'Portfolioimages\\1716590367_3993_5f10e8f28e1e5-1594943730.jpg', 'http://localhost:3000/add-portfolio', '2024-05-20 19:14:25', '2024-05-24 19:39:27');

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `price` int(11) NOT NULL,
  `delivery_time` date NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `type` enum('pending','approve') NOT NULL DEFAULT 'pending',
  `status` enum('pending','approved','refund') NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `description`, `price`, `delivery_time`, `image`, `created_at`, `updated_at`, `category_id`, `user_id`, `type`, `status`) VALUES
(1, 'sskj sjij js j jk', 'sskj sjij js j jk sskj sjij js j jk  sskj sjij js j jk sskj sjij js j jk sskj sjij js j jk', 90, '2024-05-12', 'Image_Services\\1714785701_fr.jpg', '2024-05-03 22:21:41', '2024-05-03 22:21:41', 3, 2, 'approve', 'pending'),
(2, 'انشاء موقع كامل مكون من 8 صفحات', 'يمكنني ان انفذ لك موقع الكتروني تصميم باستخدام HTML, CSS, JavaScript ومختلف التقنيات الاخري,\nوايضا برمجة باستخدام PHP, Laravel.\nفي مدة بحد اقصي 25 يوم وكوالتي مضمون 100%, سواء كان عندك تصميم علي Figma او XD او ان لم يكن هناك تصميم مسبق متفق عليه ف انا استطيع ان انفذ بدون تصميم مسبق.\nالتسليمات وهي :\nاولا Dashboard تتيح لك امكانيه التعديل علي اي سيكشن في الموقع\nو8 صفحات او 10 بحد اقصي تصميم وبرمجة بشكل متجاوب تماما مع مختلف الشاشات.\nماذا تنتظر هيا بنا ننجز بعض المشاريع', 90, '2024-05-10', 'Image_Services\\1714785752_fr.jpg', '2024-05-03 22:22:32', '2024-06-25 00:17:34', 1, 7, 'pending', 'approved'),
(3, 'انشاء موقع كامل مكون من 8 صفحات تصاميم', 'يمكنني ان انفذ لك موقع الكتروني تصميم باستخدام HTML, CSS, JavaScript ومختلف التقنيات الاخري,\r\nوايضا برمجة باستخدام PHP, Laravel.\r\nفي مدة بحد اقصي 25 يوم وكوالتي مضمون 100%, سواء كان عندك تصميم علي Figma او XD او ان لم يكن هناك تصميم مسبق متفق عليه ف انا استطيع ان انفذ بدون تصميم مسبق.\r\nالتسليمات وهي :\r\nاولا Dashboard تتيح لك امكانيه التعديل علي اي سيكشن في الموقع\r\nو8 صفحات او 10 بحد اقصي تصميم وبرمجة بشكل متجاوب تماما مع مختلف الشاشات.\r\nماذا تنتظر هيا بنا ننجز بعض المشاريع', 40, '2024-05-08', 'Image_Services\\1714785823_2_15823077845e5019c83ea57.jpg', '2024-05-03 22:23:43', '2024-06-25 00:24:36', 2, 2, 'pending', 'approved'),
(4, 'خدمة التعليق الصوتي بكل الوانه في استيديو احترافي', 'السلام عليكم اسمي عمر ملحم معلق صوتي مقيم في المانية لدي استوديو ، لدي قناة على اليوتيوب والتيك للتعليق الصوتي قدم لكم خدمات التعليق الصوتي التالي •التعليق الصوتي لاخباري باللهجة الفصحى •التعليق الصوتي للرد الالي •التعليق الصوتي الشعري التعليق الصوتي الوثائقي بكافة الوانه •التعليق الصوتي الديني •التعليق الصوتي الإعلاني •مدبلج اصوات افلام كروتونية -السعر لكل 30ثانية 100يورو فقط ومدة التسليم ٣ايام', 40, '2024-05-09', 'Image_Services\\1715037712_12364_60745ebb07054-1618239163.jpg', '2024-05-06 20:21:52', '2024-06-25 00:24:37', 3, 1, 'pending', 'approved'),
(5, 'تصميم اعلانات لمواقع السوشيال ميديا', 'السلام عليكم ..\r\nمرحبا بك فى الخدمة الخاصة بتصميم اعلانات السوشيال ميديا\r\nفى هذه الخدمة سوف اقدم لك التصميمات التى تحتاجها لمواقع التواصل الاجتماعى سواء لصفحتك او لحملة اعلانية تقوم بها\r\nمع مراعاة افضل مواصفات ومقاسات للتصميم حتى تزيد من تفاعل وانتشار منشوراتك\r\nمقابل 5 دولار تحصل علي التالي:\r\n* تصميم احترافي بفكرة ابداعية وبصيغة png ويكون متاح لديك تعديلين فقط *\r\nمقابل 10 دولار يمكنك الحصول علي تصميم حصري مميز بفكرة\r\nمدة التسليم تترواح من 24 الى 48 ساعة كحد اقصى ولكنها تعتمد ايضا على مقدار العمل المطلوب\r\nيمكنك رؤية بعض اعمالى فى تصميمات السوشيال ميديا من هنا\r\nhttps://www.behance.net/davidhany-\r\nواضمن لك فى هذه الخدمة\r\n- توصيل رسالة التصميم باستخدام افكار جذابة\r\n- تصميمات احترافية وحصرية\r\n- سرعة فى التنفيذ\r\nلن يتم تسليم الخدمة حتى رضاك التام :\")', 10, '2024-05-16', 'Image_Services\\1715044996_504_5eb1ed8b89f48-1588718987.jpg', '2024-05-06 22:23:16', '2024-06-25 00:24:40', 3, 1, 'pending', 'approved'),
(6, 'احصل على 1000 متابع اجنبي حقيقي لحسابك الانستغرام مقابل 20 دولار فقط', 'أهلا بكم,,,\r\nأقدم لكم هذه الخدمة الرائعة:)\r\nوهي التسويق الالكتروني لحساب انستقرام من خلال الإعلانات الممولة والنشروالنتائج مضمونة وحقيقية 100%\r\nلن يتم تسليم الخدمة الا بعد رضاك التام.\r\nاحصل على 1000 متابع اجنبي حقيقي لحسابك الانستغرام مقابل 20 دولار فقط\r\nيمكنك طلب الخدمة في أي وقت أو الاستفسار عن أي شئ وستسعدني تلبية طلبك\r\nتحياتي لكم:)', 40, '2024-05-22', 'Image_Services\\1715046674_69_5eace93fc064f-1588390207.jpg', '2024-05-06 22:51:14', '2024-05-06 22:51:14', 3, 1, 'pending', 'pending'),
(7, 'تصميم وبرمجة مواقع الويب باستخدام php', 'أقدم في هذه الخدمة المتمزة ميزة تصميم و برمجة مواقع الانترنت بأستخدام php\r\nوتقديم خدمات صيانة وحل المشاكل البرمجية في المواقع\r\nكما ايضا استخدم تقنيات اخرى في التصميم\r\nBootstrap 5\r\njQuery\r\nJavaScript\r\nAjax\r\nاقوم ببرمجة وتصميم الصفحة الواحدة بقيمة 5$\r\nاتمنى التوفيق دائما', 100, '2024-05-26', 'Image_Services\\1715046962_13946_61d5f4631e546-1641411683.jpg', '2024-05-06 22:56:02', '2024-05-06 22:56:02', 1, 1, 'pending', 'pending'),
(8, 'تصميم لوجو احترافي لك', 'سوف أقدم لك..\r\n1 الشعار بالالوان التي سوف تحتاجها\r\n2 الشعار بجميع الأحجام والمقاسات\r\n3 ملف العمل AI اليستريتور\r\n4 سيتم ارسال اللوجو ايضا بالموك اب\r\n5 سيتم ارسالة بصيغة png و jpg\r\nسعر الخدمة 10 دولار - مدة التنفيذ 48 ساعة', 10, '2024-05-30', 'Image_Services\\1715048251_13946_61d5f4631e546-1641411683.jpg', '2024-05-06 23:17:31', '2024-05-06 23:17:31', 2, 1, 'pending', 'pending'),
(9, 'تصميم كارت شخصي احترافي جاهز للطباعة', 'اليوم كل صاحب مشروع يحتاج إلى واجهة له عندما يلتقي بالعملاء أو أصحاب المشاريع الآخرين لكي يكتسب ثقة عملائه التي تتلخص في كارت شخصي جذاب وبسيط.\r\nأقدم لك عزيزي العميل خدمة تصميم كارت شخصي احترافي جاهز للطباعة مباشرة حيث أنني قد عملت لمدة تزيد عن العامين في مجال التصميم التجاري والإعلاني وتصميم المطبوعات.\r\nسوف تحصل تصميم احترافي مقابل 5$، سأسلمك التصميم بصيغة Jpg ( نسخة CMYK للطباعة مباشرة ونسخة RGB للعرض على الشاشات ) وأيضاً سأسلمك تجميع للتصميم ممنتج على مساحة 33*48 للطباعة.\r\nسأعدل لك مرتين مجاناً.\r\nمع العلم أنه في حالة الاحتياج إلى تعديلات أكثر يتم الاتفاق على شراء الخدمة وقتها مرة واحدة أخرى وكذلك إذا أردت الملف المصدري للتصميم (PSD) يتم الاتفاق على شراء الخدمة وقتها مرة واحدة أخرى.', 10, '2024-05-21', 'Image_Services\\1715048632_1022_5fd7c08420575-1607975044.jpg', '2024-05-06 23:23:52', '2024-05-06 23:23:52', 2, 1, 'pending', 'pending'),
(10, 'تحويل التصميم إلي صفحة ويب إحترافية متجاو', 'السلام عليكم ورحمة الله وبركاته،\r\nفي هذه الخدمة أقوم بتحويل أي تصميم تريده إلي صفحة ويب متفاعله Dynamic حيث تشمل مميزات:\r\n1. متجاوب مع جميع الشاشات مع الالتزام بكتاب كود نظيف سهل التعديل.\r\n2. برمجة الصفحة بالكامل من الصفر بوقت سريع وباحترافية تامة ودقة في العمل مع امكانية التعديل علي كل ما تريد.\r\n3. إستخدام الـ Semantic Tags الخاصة بالـ HTML وتهيئة الموقع للمحركات البحث عن طريق الـ SEO\r\nوقد قمت ببرمجة العديد من المواقع الاحترافية والضخمة ولرؤية معرض اعمالي يمكنك زيارة حسابي علي المنصه', 90, '2024-05-15', 'Image_Services\\1716801311_13946_61d5f4631e546-1641411683.jpg', '2024-05-16 22:48:37', '2024-05-27 06:15:11', 2, 4, 'pending', 'pending'),
(12, 'تصاميم لوحة اعلانية', 'تصاميم لوحة اعلانيةتصاميم لوحة اعلانية تصاميم لوحة اعلانية تصاميم لوحة اعلانيةتصاميم لوحة اعلانية تصاميم لوحة اعلانية', 10, '2024-05-06', 'Image_Services\\1715991492_1022_5fd7c08420575-1607975044.jpg', '2024-05-17 21:18:12', '2024-05-17 21:18:12', 2, 4, 'pending', 'pending'),
(13, 'انشاء موقع كامل مكون من 3صفحات', 'يمكنني ان انفذ لك موقع الكتروني تصميم باستخدام HTML, CSS, JavaScript ومختلف التقنيات الاخري,\r\nوايضا برمجة باستخدام PHP, Laravel.\r\nفي مدة بحد اقصي 25 يوم وكوالتي مضمون 100%, سواء كان عندك تصميم علي Figma او XD او ان لم يكن هناك تصميم مسبق متفق عليه ف انا استطيع ان انفذ بدون تصميم مسبق.', 10, '2024-05-07', 'Image_Services\\1716071292_file-structure.png', '2024-05-18 19:28:12', '2024-05-18 19:28:12', 1, 4, 'pending', 'pending'),
(15, 'تقديم المساعدات البرمجيه', 'يمكنني تقديم المساعدات والإستشارات البرمجيه في انشاء المواقع الإلكترونيه وتصميم الانظمه التي يتم انشائها بالبرمجه الكائنيه التوجهه OOP\r\nيتم تحديد السعر والوقت علي حسب حجم الاستشاره', 40, '2024-05-30', 'Image_Services\\1716082858_69_5eaceb1e77c38-1588390686.jpg', '2024-05-18 20:33:19', '2024-05-18 22:40:58', 2, 4, 'pending', 'pending'),
(16, 'تصميم لللعبه', 'تصميم لللعبه تصميم لللعبه', 100, '2024-05-23', 'Image_Services\\1716255272_fr.jpg', '2024-05-20 22:34:32', '2024-05-20 22:34:32', 2, 4, 'pending', 'pending'),
(17, 'تصميم لوجو لبقاله', 'تصميم لوجو لبقاله تصميم لوجو لبقاله', 90, '2024-05-29', 'Image_Services\\1716255421_13946_61d5f4631e546-1641411683.jpg', '2024-05-20 22:37:01', '2024-05-20 22:37:01', 2, 4, 'pending', 'pending'),
(18, 'عمل شعار للشركتك او شخصي logo maker for you company or you', 'عمل شعار للشركتك او شخصي logo maker for you company or you', 100, '2024-05-17', 'Image_Services\\1716334771_fr.jpg', '2024-05-21 20:39:31', '2024-05-21 20:39:31', 2, 4, 'pending', 'pending'),
(19, 'عمل شعار للشركتك او شخصي', 'عمل شعار للشركتك او شخصي', 100, '2024-05-17', 'Image_Services\\1716334826_fr.jpg', '2024-05-21 20:40:26', '2024-05-21 20:40:26', 2, 4, 'pending', 'pending'),
(20, 'عمل شعار للشركتك او شخصي', 'عمل شعار للشركتك او شخصي', 100, '2024-05-17', 'Image_Services\\1716335066_fr.jpg', '2024-05-21 20:44:26', '2024-05-21 20:44:26', 2, 4, 'pending', 'pending'),
(21, 'kjkjj hgya', 'jedjijedji jedjijedji', 90, '2024-05-21', 'Image_Services\\1716335227_1022_5fd7c08420575-1607975044.jpg', '2024-05-21 20:47:07', '2024-05-21 20:47:07', 5, 4, 'pending', 'pending'),
(22, 'ijijr eojioj', 'ijijr eojioj  ijijr eojioj ijijr eojioj', 40, '2024-05-20', 'Image_Services\\1716335339_fr.jpg', '2024-05-21 20:48:59', '2024-05-21 20:48:59', 4, 4, 'pending', 'pending'),
(23, 'djdj sdjkj dkjnk', 'dkj dcjjd njdkj dcjjd njdkj dcjjd nj', 10, '2024-05-23', 'Image_Services\\1716336047_97717.jpg', '2024-05-21 21:00:47', '2024-05-21 21:00:47', 4, 4, 'pending', 'pending'),
(24, 'dnjdn njnd sdnjdn njnd s dnjdn njnd sdnjdn njnd sdnjdn njnd s', 'dnjdn njnd sdnjdn njnd sdnjdn njnd s dnjdn njnd s', 40, '2024-05-23', 'Image_Services\\1716337669_1022_5fd7c08420575-1607975044.jpg', '2024-05-21 21:27:49', '2024-05-21 21:27:49', 5, 6, 'pending', 'pending'),
(25, 'njnd s dnjdn njnd sdnjdn njnd sdnjdn njnd s', 'dnjdn njnd sdnjdn njnd sdnjdn njnd s dnjdn njnd s', 40, '2024-05-23', 'Image_Services\\1716338407_1022_5fd7c08420575-1607975044.jpg', '2024-05-21 21:40:07', '2024-05-21 21:40:07', 5, 6, 'pending', 'pending'),
(26, 'njnd s dnjdn njnd sdnjdn njnd sdnjdn njnd s', 'dnjdn njnd sdnjdn njnd sdnjdn njnd s dnjdn njnd s', 40, '2024-05-23', 'Image_Services\\1716338768_1022_5fd7c08420575-1607975044.jpg', '2024-05-21 21:46:08', '2024-05-21 21:46:08', 5, 6, 'pending', 'pending'),
(28, 'jhuh ddjub', 'jhuh ddjub', 90, '2024-05-30', 'Image_Services\\1716340029_13946_61d5f4631e546-1641411683.jpg', '2024-05-21 22:07:09', '2024-05-21 22:07:09', 3, 7, 'pending', 'pending'),
(29, 'dkdjkjkdjk', 'dcjkcjkdm', 100, '2024-06-04', 'Image_Services\\1716340818_fr.jpg', '2024-05-21 22:20:18', '2024-05-21 22:20:18', 5, 7, 'pending', 'pending'),
(30, 'dkdjkjkdjkdcjh djc dj', 'dcjkcjkdm', 100, '2024-06-04', 'Image_Services\\1716341205_fr.jpg', '2024-05-21 22:26:45', '2024-05-21 22:26:45', 5, 7, 'pending', 'pending'),
(31, 'dkdjkjkdjkdcjh djc dj dkdjkjkdjkdcjh djc dj', 'dcjkcjkdm', 100, '2024-06-04', 'Image_Services\\1716341722_fr.jpg', '2024-05-21 22:35:22', '2024-05-21 22:35:22', 5, 7, 'pending', 'pending'),
(32, 'dkdjkjkdjkdcjh djc dj dkdjkjkdjkdcjh djc dj', 'dcjkcjkdm', 100, '2024-06-04', 'Image_Services\\1716341859_fr.jpg', '2024-05-21 22:37:39', '2024-05-21 22:37:39', 5, 7, 'pending', 'pending'),
(33, 'محمد بندر محمد بندر ر', 'محمد بندر محمد بندر محمد بندر محمد بندر محمد بندر', 10, '2024-05-31', 'Image_Services\\1716341963_Screenshot-24.png', '2024-05-21 22:39:23', '2024-05-21 22:39:23', 2, 7, 'pending', 'pending'),
(34, 'محمد بندر محمد بندر ر', 'محمد بندر محمد بندر محمد بندر محمد بندر محمد بندر', 10, '2024-05-31', 'Image_Services\\1716341990_Screenshot-24.png', '2024-05-21 22:39:50', '2024-05-21 22:39:50', 2, 7, 'pending', 'pending'),
(35, 'محمد بندر محمد بندر ر', 'محمد بندر محمد بندر محمد بندر محمد بندر محمد بندر', 10, '2024-05-31', 'Image_Services\\1716342035_Screenshot-24.png', '2024-05-21 22:40:35', '2024-05-21 22:40:35', 2, 7, 'pending', 'pending'),
(36, 'نسينمسنيمنسمنمن', 'نسينمسنيمنسمننسينمسنيمنسمنمن  نسينمسنيمنسمنمن من', 40, '2024-05-27', 'Image_Services\\1716342281_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-21 22:44:41', '2024-05-21 22:44:41', 2, 7, 'pending', 'pending'),
(37, 'نسينمسنيمنسمنمن', 'نسينمسنيمنسمننسينمسنيمنسمنمن  نسينمسنيمنسمنمن من', 40, '2024-05-27', 'Image_Services\\1716342341_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-21 22:45:41', '2024-05-21 22:45:41', 2, 7, 'pending', 'pending'),
(38, 'dfjhjh', 'cmkmxk', 10, '2024-06-05', 'Image_Services\\1716344180_1022_5fd7c08420575-1607975044.jpg', '2024-05-21 23:16:20', '2024-05-21 23:16:20', 5, 7, 'pending', 'pending'),
(39, 'احمداحمداحمد', 'احمد احمداحمداحمد', 90, '2024-05-23', 'Image_Services\\1716344266_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-21 23:17:46', '2024-05-21 23:17:46', 4, 7, 'pending', 'pending'),
(40, 'احمد احمد  احمد', 'احمداحمداحمداحمد', 40, '2024-05-16', 'Image_Services\\1716344344_13946_61d5f4631e546-1641411683.jpg', '2024-05-21 23:19:04', '2024-05-21 23:19:04', 4, 7, 'pending', 'pending'),
(41, 'نخنسخءنمس', 'نخنسخءنمس', 100, '2024-05-29', 'Image_Services\\1716344490_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-21 23:21:30', '2024-05-21 23:21:30', 3, 7, 'pending', 'pending'),
(42, 'djkdjdddddddddd', 'djkdjdddddddddd', 90, '2024-05-18', 'Image_Services\\1716345365_1022_5fd7c08420575-1607975044.jpg', '2024-05-21 23:36:05', '2024-05-21 23:36:05', 3, 7, 'pending', 'pending'),
(43, 'djkdjdddddddddd', 'djkdjdddddddddd', 90, '2024-05-18', 'Image_Services\\1716345417_1022_5fd7c08420575-1607975044.jpg', '2024-05-21 23:36:57', '2024-05-21 23:36:57', 3, 7, 'pending', 'pending'),
(44, 'skxkkxj djhj bbhsx', 'skxkkxj djhj bbhsx', 10, '2024-05-22', 'Image_Services\\1716345619_69_5eaceb1e77c38-1588390686.jpg', '2024-05-21 23:40:19', '2024-05-21 23:40:19', 3, 4, 'pending', 'pending'),
(45, 'skxkkxj djhj bbhsx', 'skxkkxj djhj bbhsx', 10, '2024-05-22', 'Image_Services\\1716345706_69_5eaceb1e77c38-1588390686.jpg', '2024-05-21 23:41:46', '2024-05-21 23:41:46', 3, 4, 'pending', 'pending'),
(46, 'dxn djn', 'dxn djn dxn djn', 100, '2024-05-24', 'Image_Services\\1716346002_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-21 23:46:42', '2024-05-21 23:46:42', 3, 4, 'pending', 'pending'),
(47, 's,ldck', 's,ldck', 100, '2024-05-30', 'Image_Services\\1716347254_1022_5fd7c08420575-1607975044.jpg', '2024-05-22 00:07:34', '2024-05-22 00:07:34', 3, 4, 'pending', 'pending'),
(48, 's,ldcksss', 's,ldck', 100, '2024-05-30', 'Image_Services\\1716347458_1022_5fd7c08420575-1607975044.jpg', '2024-05-22 00:10:58', '2024-05-22 00:10:58', 3, 4, 'pending', 'pending'),
(49, 'اياعؤ', 'يتؤهيتؤ', 90, '2024-05-26', 'Image_Services\\1716355890_13946_61d5f4631e546-1641411683.jpg', '2024-05-22 02:31:30', '2024-05-22 02:31:30', 3, 9, 'pending', 'pending'),
(50, 'اياعؤ', 'يتؤهيتؤ', 90, '2024-05-26', 'Image_Services\\1716355951_13946_61d5f4631e546-1641411683.jpg', '2024-05-22 02:32:31', '2024-05-22 02:32:31', 3, 9, 'pending', 'pending'),
(51, 'تعز', 'يتؤهيتؤ', 90, '2024-05-26', 'Image_Services\\1716355974_13946_61d5f4631e546-1641411683.jpg', '2024-05-22 02:32:54', '2024-05-22 02:32:54', 3, 9, 'pending', 'pending'),
(52, 'تعز', 'يتؤهيتؤ', 90, '2024-05-26', 'Image_Services\\1716355980_13946_61d5f4631e546-1641411683.jpg', '2024-05-22 02:33:00', '2024-05-22 02:33:00', 3, 9, 'pending', 'pending'),
(53, 'ju,clksjijd', 'ju,clksjijd', 90, '2024-05-29', 'Image_Services\\1716356564_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 02:42:44', '2024-05-22 02:42:44', 4, 9, 'pending', 'pending'),
(54, 'ju,clksjijd', 'ju,clksjijd', 90, '2024-05-29', 'Image_Services\\1716356853_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 02:47:33', '2024-05-22 02:47:33', 4, 9, 'pending', 'pending'),
(55, 'ju,clksjijd', 'ju,clksjijd', 90, '2024-05-29', 'Image_Services\\1716356948_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 02:49:08', '2024-05-22 02:49:08', 4, 9, 'pending', 'pending'),
(56, 'تعز  تعز', 'تعز  تعز', 10, '2024-05-29', 'Image_Services\\1716357025_69_5eaceb1e77c38-1588390686.jpg', '2024-05-22 02:50:25', '2024-05-22 02:50:25', 3, 9, 'pending', 'pending'),
(57, 'تعز  تعز', 'تعز  تعز', 10, '2024-05-29', 'Image_Services\\1716357355_69_5eaceb1e77c38-1588390686.jpg', '2024-05-22 02:55:55', '2024-05-22 02:55:55', 3, 9, 'pending', 'pending'),
(58, 'djdjcsdkj djdhj', 'djdjcsdkj djdhj', 10, '2024-05-23', 'Image_Services\\1716410650_1022_5fd7c08420575-1607975044.jpg', '2024-05-22 17:44:10', '2024-05-22 17:44:10', 4, 9, 'pending', 'pending'),
(59, 'djdjcsdkj djdhj', 'djdjcsdkj djdhj', 10, '2024-05-23', 'Image_Services\\1716411227_1022_5fd7c08420575-1607975044.jpg', '2024-05-22 17:53:47', '2024-05-22 17:53:47', 4, 9, 'pending', 'pending'),
(60, 'dkjksdj', 'djkdjkd', 10, '2024-05-29', 'Image_Services\\1716415073_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 18:57:53', '2024-05-22 18:57:53', 2, 9, 'pending', 'pending'),
(61, 'ddkkd dkmk qqq', 'ddkkd dkmk qqq', 90, '2024-05-30', 'Image_Services\\1716416019_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 19:13:39', '2024-05-22 19:13:39', 4, 9, 'pending', 'pending'),
(62, 'ddkkd dkmk qqq', 'ddkkd dkmk qqq', 90, '2024-05-30', 'Image_Services\\1716416043_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 19:14:03', '2024-05-22 19:14:03', 4, 9, 'pending', 'pending'),
(63, 'ddkkd dkmk qqq', 'ddkkd dkmk qqq', 90, '2024-05-30', 'Image_Services\\1716416156_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 19:15:56', '2024-05-22 19:15:56', 4, 9, 'pending', 'pending'),
(64, 'ddkkd dkmk qqq', 'ddkkd dkmk qqq', 90, '2024-05-30', 'Image_Services\\1716416750_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 19:25:50', '2024-05-22 19:25:50', 4, 9, 'pending', 'pending'),
(65, 'ddkkd dkmk qqq', 'ddkkd dkmk qqq', 90, '2024-05-30', 'Image_Services\\1716416823_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 19:27:03', '2024-05-22 19:27:03', 4, 9, 'pending', 'pending'),
(66, 'ddkkd dkmk qqq', 'ddkkd dkmk qqq', 90, '2024-05-30', 'Image_Services\\1716416843_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 19:27:23', '2024-05-22 19:27:23', 4, 9, 'pending', 'pending'),
(67, 'ddkkd dkmk qqq', 'ddkkd dkmk qqq', 90, '2024-05-30', 'Image_Services\\1716416989_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 19:29:49', '2024-05-22 19:29:49', 4, 9, 'pending', 'pending'),
(68, 'wkuhx', 'wkuhx wkuhxwkuhx wkuhx', 40, '2024-05-24', 'Image_Services\\1716417115_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 19:31:55', '2024-05-22 19:31:55', 2, 9, 'pending', 'pending'),
(69, 'لوحه اعلانيه تصميم', 'لوحه اعلانيه تصميم', 40, '2024-05-29', 'Image_Services\\1716417206_69_5eaceb1e77c38-1588390686.jpg', '2024-05-22 19:33:26', '2024-05-22 19:33:26', 2, 4, 'pending', 'pending'),
(70, 'لوحه اعلانيه تصميم', 'لوحه اعلانيه تصميم', 40, '2024-05-29', 'Image_Services\\1716417736_69_5eaceb1e77c38-1588390686.jpg', '2024-05-22 19:42:16', '2024-05-22 19:42:16', 2, 4, 'pending', 'pending'),
(71, 'sdkskslks', 'sdkskslks', 10, '2024-05-30', 'Image_Services\\1716418176_13946_61d5f4631e546-1641411683.jpg', '2024-05-22 19:49:36', '2024-05-22 19:49:36', 2, 4, 'pending', 'pending'),
(72, 'dkjkdjc djkldjkj', 'dkjkdjc djkldjkj', 100, '2024-05-28', 'Image_Services\\1716418642_69_5eaceb1e77c38-1588390686.jpg', '2024-05-22 19:57:22', '2024-05-22 19:57:22', 3, 4, 'pending', 'pending'),
(73, 'dkjkdjc djkldjkj', 'dkjkdjc djkldjkj', 100, '2024-05-28', 'Image_Services\\1716418864_69_5eaceb1e77c38-1588390686.jpg', '2024-05-22 20:01:04', '2024-05-22 20:01:04', 3, 4, 'pending', 'pending'),
(74, 'dkjkdjc djkldjkj', 'dkjkdjc djkldjkj', 100, '2024-05-28', 'Image_Services\\1716419245_69_5eaceb1e77c38-1588390686.jpg', '2024-05-22 20:07:25', '2024-05-22 20:07:25', 3, 4, 'pending', 'pending'),
(75, 'hhhelo', 'hhhelo', 10, '2024-05-24', 'Image_Services\\1716419572_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 20:12:52', '2024-05-22 20:12:52', 3, 4, 'pending', 'pending'),
(76, 'hhhelo', 'hhhelo', 10, '2024-05-24', 'Image_Services\\1716419680_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 20:14:40', '2024-05-22 20:14:40', 3, 4, 'pending', 'pending'),
(77, 'hhhelo', 'hhhelo', 10, '2024-05-24', 'Image_Services\\1716419706_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 20:15:06', '2024-05-22 20:15:06', 3, 4, 'pending', 'pending'),
(78, 'hhhelo', 'hhhelo', 10, '2024-05-24', 'Image_Services\\1716419720_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-22 20:15:20', '2024-05-22 20:15:20', 3, 4, 'pending', 'pending'),
(79, 'sakdkjkdcn', 'sakdkjkdcn', 90, '2024-05-13', 'Image_Services\\1716424311_1022_5fd7c08420575-1607975044.jpg', '2024-05-22 21:31:51', '2024-05-22 21:31:51', 5, 12, 'pending', 'pending'),
(80, 'تطوير منصة الكترونية', 'تطوير منصة الكترونية تطوير منصة الكترونية تطوير منصة الكترونية', 40, '2024-05-22', 'Image_Services\\1716433716_13946_61d5f4631e546-1641411683.jpg', '2024-05-23 00:08:36', '2024-05-23 00:08:36', 1, 4, 'pending', 'pending'),
(81, 'تصميم منتج مسرحي', 'تصميم منتج مسرحي  تصميم منتج مسرحي تصميم منتج مسرحي', 90, '2024-05-24', 'Image_Services\\1716434221_1022_5fd7c08420575-1607975044.jpg', '2024-05-23 00:17:01', '2024-05-23 00:17:01', 2, 4, 'pending', 'pending'),
(82, 'تصميم موقع لواجهات Css', 'تصميم موقع لواجهات Css تصميم موقع لواجهات Css', 100, '2024-05-24', 'Image_Services\\1716434481_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-23 00:21:21', '2024-05-23 00:21:21', 1, 4, 'pending', 'pending'),
(83, 'تعديل ع موقع Laravel', 'تعديل ع موقع Laravel', 10, '2024-05-24', 'Image_Services\\1716434652_97717.jpg', '2024-05-23 00:24:12', '2024-05-23 00:24:12', 1, 4, 'pending', 'pending'),
(84, 'sxkmskkmmx', 'sxkmskkmmx', 10, '2024-05-24', 'Image_Services\\1716434850_69_5eaceb1e77c38-1588390686.jpg', '2024-05-23 00:27:30', '2024-05-23 00:27:30', 4, 4, 'pending', 'pending'),
(85, 'amksmxlmlm', 'amksmxlmlm amksmxlmlm', 10, '2024-06-05', 'Image_Services\\1716435798_1022_5fd7c08420575-1607975044.jpg', '2024-05-23 00:43:18', '2024-05-23 00:43:18', 3, 4, 'pending', 'pending'),
(86, 'amksmxlmlm', 'amksmxlmlm amksmxlmlm', 10, '2024-06-05', 'Image_Services\\1716435869_1022_5fd7c08420575-1607975044.jpg', '2024-05-23 00:44:29', '2024-05-23 00:44:29', 3, 4, 'pending', 'pending'),
(87, 'gyg uhugyugyugyg', 'yugygy uyugyug ygyyugygy uyugyug ygyyugygy uyugyug ygyyugygy uyugyug ygy', 100, '2024-05-15', 'Image_Services\\1716801259_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-27 06:14:19', '2024-05-27 06:14:19', 2, 4, 'pending', 'pending'),
(88, 'gyg uhugyugyugyg', 'yugygy uyugyug ygyyugygy uyugyug ygyyugygy uyugyug ygyyugygy uyugyug ygy', 100, '2024-05-15', 'Image_Services\\1716801280_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-27 06:14:40', '2024-05-27 06:14:40', 2, 4, 'pending', 'pending'),
(89, 'gyg uhugyugyugyg', 'yugygy uyugyug ygyyugygy uyugyug ygyyugygy uyugyug ygyyugygy uyugyug ygy', 100, '2024-05-15', 'Image_Services\\1716801281_3993_5f10e8f28e1e5-1594943730.jpg', '2024-05-27 06:14:41', '2024-05-27 06:14:41', 2, 4, 'pending', 'pending'),
(90, 'اتصفح', 'اتصفح اتصفح اتصفح اتصفح اتصفح', 10, '2024-06-19', 'Image_Services\\1718164428_97717.jpg', '2024-06-12 00:53:48', '2024-06-12 00:53:48', 1, 20, 'pending', 'pending'),
(91, 'اتصفح', 'اتصفح اتصفح اتصفح اتصفح اتصفح', 10, '2024-06-19', 'Image_Services\\1718164449_97717.jpg', '2024-06-12 00:54:09', '2024-06-12 00:54:09', 3, 20, 'pending', 'pending'),
(92, 'اتصفح اتصفح اتصفح', 'اتصفح اتصفح اتصفح اتصفح اتصفح', 10, '2024-06-19', 'Image_Services\\1718164473_97717.jpg', '2024-06-12 00:54:33', '2024-06-12 00:54:33', 3, 20, 'pending', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `sender_name` varchar(255) NOT NULL,
  `sender_whatsapp` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `transaction_number` varchar(255) NOT NULL,
  `transaction_document` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `sender_name`, `sender_whatsapp`, `amount`, `transaction_number`, `transaction_document`, `created_at`, `updated_at`) VALUES
(1, 4, 'محمد بندر', '00967779475324', 500.00, '0390903203', 'C:\\xampp\\tmp\\php5B66.tmp', '2024-06-23 18:33:27', '2024-06-23 18:33:27'),
(2, 4, 'محمد بندر', '00967779475324', 500.00, '2892892', 'C:\\xampp\\tmp\\phpBE58.tmp', '2024-06-23 18:37:09', '2024-06-23 18:37:09'),
(3, 4, 'محمد بندر', '00967779475324', 500.00, '0390903203', 'C:\\xampp\\tmp\\php5B40.tmp', '2024-06-23 18:38:54', '2024-06-23 18:38:54'),
(4, 4, 'محمد بندر', '00967779475324', 500.00, '0390903203', 'Image_Services\\1719179197_97717.jpg', '2024-06-23 18:46:37', '2024-06-23 18:46:37');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_type` enum('freelancer','client') NOT NULL DEFAULT 'client',
  `Specialization` varchar(255) NOT NULL DEFAULT 'لا يوجد',
  `summary` varchar(255) NOT NULL DEFAULT 'لا يوجد',
  `role` tinyint(1) NOT NULL DEFAULT 0,
  `city` varchar(255) DEFAULT NULL,
  `gender` enum('male','female') DEFAULT NULL,
  `field` enum('تطوير الويب','كتابة وترجمة','التسويق والمبيعات','التصميم الجرافيكي','التدريب والاستشارات') DEFAULT NULL,
  `email_verification_token` varchar(255) DEFAULT NULL,
  `email_verified` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `username`, `phone_number`, `image`, `date_of_birth`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `user_type`, `Specialization`, `summary`, `role`, `city`, `gender`, `field`, `email_verification_token`, `email_verified`) VALUES
(1, 'admin', 'admin', 'admin@gmail.com', NULL, '009677799475324', NULL, NULL, NULL, '$2y$10$tbRoxlVKiQMRKHpwqNjJeuoqnwrFM3naD8jc9Xrr2M2zSH6uAZC16', NULL, '2024-04-30 21:04:37', '2024-04-30 21:04:37', 'client', '', '', 1, '', NULL, NULL, NULL, 0),
(2, 'Mohamme', 'bander', 'm@gmail.com', '@pro', '009677799475324', 'Image_Services\\1714785701_fr.jpg', NULL, NULL, '$2y$10$ILDZQJefM/Zy3MLz8mufEeeB5gXZq4k51NA1AzQDP/gPlfHCDGxo.', NULL, '2024-04-30 21:34:35', '2024-04-30 21:34:35', 'client', 'مهندس برمجيات', 'خريج كلية الهندسه قسم الحاسبات, اعمل في مجال الويب منذ اكتر من خمس سنوات, امتلك الشغف لتعلم الجديد ومواكبه التطور.', 0, '', NULL, NULL, NULL, 0),
(3, 'Ali', 'bander', 'bander@gmail.com', NULL, '009677799475324', 'Image_Services\\1714785701_fr.jpg', '2020-10-01', NULL, '$2y$10$akDTTQTeZHXS/UyCJwFn1eyf2KtJCbXntJ.jINSSxRdgL84YSNgwy', NULL, '2024-04-30 23:41:35', '2024-04-30 23:41:35', 'client', '', '', 0, '', NULL, NULL, NULL, 0),
(4, 'محمد بندر', 'محمد احمد', 'mohammed@gmail.com', '@mo_3', '367388898', 'Image_Services\\person.webp', '2015-03-04', NULL, '$2y$10$9Be.EjNwEfNuuSUOoGRiUe9kZMFWmYmEzFb6j.zMNVj2j1SoOax6G', NULL, '2024-05-01 20:20:53', '2024-06-03 00:05:10', 'freelancer', 'مصمم يمني', '', 0, 'taiz', 'male', 'التصميم الجرافيكي', NULL, 0),
(5, 'سيف', 'القحطاني', 'saif@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$aH1gG2Ik/RlqFSPg4Hsk7.wLuq2wu0BhtFUpwofi4yOYyUFSsTW.q', NULL, '2024-05-19 22:09:04', '2024-05-19 22:09:04', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, NULL, 0),
(6, 'john', 'bander', 'bander1@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$5cMa52iiF7GAk4GI63Ljxe2cKyRIU9.J6GuOLRQnLi1vb6xhR4IfO', NULL, '2024-05-21 21:27:04', '2024-05-21 21:27:04', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, NULL, 0),
(7, 'Laravel', 'laravel', 'laravel@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$L.6I3Kc6rcWn1ynMJbC2DObHQlcZqhURSCU4OZvzI64nMgw5fxZ2a', NULL, '2024-05-21 22:06:23', '2024-05-21 22:06:23', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, NULL, 0),
(8, 'vvvv', 'vvv', 'vvv@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$3DtHMuaV7M/IUcEIRkb.POyPViqmiZui8gSR3C33jkUOh/duGQxW6', NULL, '2024-05-22 00:43:06', '2024-05-22 00:43:06', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, NULL, 0),
(9, 'doe', 'doe', 'doe@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$3sohhKEIOmyf4d4zgl9xa.e4S3QgKfjcDd/8vPoRj9ybKt0Ml8ysO', NULL, '2024-05-22 00:46:48', '2024-05-22 00:46:48', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, NULL, 0),
(10, 'uuuu', 'uuuu', 'uuuu@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$OUjSZZwTFBUsUjHwF7qGvO9pNgBwALOzMCRa8yztdqgl86BlmzNAS', NULL, '2024-05-22 20:18:33', '2024-05-22 20:18:33', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, NULL, 0),
(11, 'salm', 'salm', 'salm@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$YLQtssnuP2hKHxWQlTanRu4y84xf85ltdm2ZhvfzJRbpbE5RblmS2', NULL, '2024-05-22 20:26:51', '2024-05-22 20:26:51', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, NULL, 0),
(12, 'rrrr', 'rrrr', 'rrrr@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$o1T6CQFGcWZ.Ciz09yBtwucrq9Gl7sIZSkYUsekZtsMMVpEBNpGLq', NULL, '2024-05-22 20:32:11', '2024-05-22 20:32:11', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, NULL, 0),
(13, 'abdo', 'abdo', 'abdo@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$nQHrBkrh8P6.DteRAZeQaeTMP8pIb.U4MF4pUmM5uomBdXeirtDV.', NULL, '2024-06-02 20:51:44', '2024-06-02 20:51:44', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, 'vq59KIBnXeCZYYzxAQ4Uub8NurfCcJG3TAWcZQnR', 0),
(14, 'tah', 'tah', 'tah@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$FdcOcBri92ZkNyW/tq0w7uoNV7icxqjSAVLAS/US3LbzR5V6VOM/.', NULL, '2024-06-02 21:13:35', '2024-06-02 21:13:35', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, 'iqSJr7ciGATOtf85agw4H8oMr0szsUPLmhMCReXf', 0),
(15, 'shakar', 'shakar', 'shakar@gmail.com', NULL, NULL, NULL, NULL, '2024-06-02 21:18:27', '$2y$10$hJ.X/AjmcsPzrpoS4Sv6qOxoNtdWrbMvF5SoLmwSkcGS2DgxwLf1K', NULL, '2024-06-02 21:18:03', '2024-06-02 21:18:27', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, NULL, 1),
(16, 'user', 'user', 'user@gmail.com', NULL, NULL, NULL, NULL, '2024-06-02 22:03:26', '$2y$10$KY8OgXoDnxkxI9a3eoslQ.WWz4BkDGe.5qMzi3QhKrT2sAlWABuIu', NULL, '2024-06-02 21:29:42', '2024-06-02 22:03:26', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, NULL, 1),
(17, 'bbbb', 'bbbb', 'bbbb@gmail.com', NULL, NULL, NULL, NULL, '2024-06-02 22:56:27', '$2y$10$N1gbPJVjil.USD3bDTSMzuTLwHmLgLl9OJT9Bzr7mqwK2KzgUBWaW', NULL, '2024-06-02 22:06:00', '2024-06-02 22:56:27', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, NULL, 1),
(18, 'reactJS', 'reactJS', 'reactJS@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$K5RtF9ezhl7Wtr.OaDomBuzQqtcXuYQi3KdZK9SN8xfw3Zimd7Xbq', NULL, '2024-06-02 22:08:29', '2024-06-02 22:11:50', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, 'PXj2e5tx7VbxWt2KqUq04jUV5Pi7O5pfsJH3a4Lf', 0),
(19, 'سيف', 'سيف', 'saiff@gmail.com', NULL, NULL, NULL, NULL, '2024-06-02 23:18:21', '$2y$10$YTsRKbPr3wmLuZnlW34maeZviimDW0tDmvDyKserLwmADWa4e0ZnG', NULL, '2024-06-02 23:16:00', '2024-06-02 23:18:21', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, NULL, 1),
(20, 'sami', 'sami', 'sami@gmail.com', NULL, NULL, NULL, NULL, '2024-06-12 00:51:35', '$2y$10$k.LWBrcGWZk3nphm4VLYXuL0kWeWR4zsT8o3KT/z3ksvXbkZkcmRK', NULL, '2024-06-12 00:50:07', '2024-06-12 00:51:35', 'client', 'لا يوجد', 'لا يوجد', 0, NULL, NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `websockets_statistics_entries`
--

CREATE TABLE `websockets_statistics_entries` (
  `id` int(10) UNSIGNED NOT NULL,
  `app_id` varchar(255) NOT NULL,
  `peak_connection_count` int(11) NOT NULL,
  `websocket_message_count` int(11) NOT NULL,
  `api_message_count` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `withdrawals`
--

CREATE TABLE `withdrawals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `withdrawal_method` varchar(255) NOT NULL,
  `withdrawal_date` date NOT NULL,
  `withdrawal_status` enum('pending','completed','canceled') NOT NULL DEFAULT 'pending',
  `commission` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `withdrawals`
--

INSERT INTO `withdrawals` (`id`, `amount`, `withdrawal_method`, `withdrawal_date`, `withdrawal_status`, `commission`, `created_at`, `updated_at`, `user_id`) VALUES
(1, 100.00, 'وان كاش', '2024-06-24', 'pending', 0.00, '2024-06-23 21:49:36', '2024-06-23 21:49:36', 4),
(2, 500.00, 'نقطة حاسب', '2024-06-24', 'pending', 0.00, '2024-06-23 21:57:38', '2024-06-23 21:57:38', 4),
(3, 10.00, 'نقطة حاسب', '2024-06-24', 'pending', 0.00, '2024-06-23 21:59:02', '2024-06-23 21:59:02', 4),
(4, 10.00, 'نقطة حاسب', '2024-06-24', 'pending', 0.00, '2024-06-23 22:02:02', '2024-06-23 22:02:02', 4),
(5, 10.00, 'نقطة حاسب', '2024-06-24', 'pending', 0.00, '2024-06-23 22:04:32', '2024-06-23 22:04:32', 4),
(6, 100.00, 'نقطة حاسب', '2024-06-24', 'pending', 0.00, '2024-06-23 22:08:38', '2024-06-23 22:08:38', 4),
(7, 10.00, 'نقطة حاسب', '2024-06-24', 'pending', 0.00, '2024-06-23 22:15:42', '2024-06-23 22:15:42', 4),
(8, 50.00, 'وان كاش', '2024-06-24', 'pending', 0.00, '2024-06-23 22:17:30', '2024-06-23 22:17:30', 4),
(9, 500.00, 'وان كاش', '2024-06-24', 'pending', 0.00, '2024-06-23 22:17:36', '2024-06-23 22:17:36', 4),
(10, 40.00, 'نقطة حاسب', '2024-06-24', 'pending', 0.00, '2024-06-23 22:19:47', '2024-06-23 22:19:47', 4),
(11, 200.00, 'نقطة حاسب', '2024-06-24', 'pending', 0.00, '2024-06-23 22:19:54', '2024-06-23 22:19:54', 4),
(12, 2000.00, 'نقطة حاسب', '2024-06-24', 'pending', 0.00, '2024-06-23 22:19:58', '2024-06-23 22:19:58', 4),
(13, 100.00, 'نقطة حاسب', '2024-06-24', 'pending', 0.00, '2024-06-23 22:21:26', '2024-06-23 22:21:26', 4),
(14, 200.00, 'نقطة حاسب', '2024-06-24', 'pending', 0.00, '2024-06-23 22:21:31', '2024-06-23 22:21:31', 4),
(15, 300.00, 'وان كاش', '2024-06-24', 'pending', 0.00, '2024-06-23 22:22:25', '2024-06-23 22:22:25', 4),
(16, 399.00, 'وان كاش', '2024-06-24', 'pending', 0.00, '2024-06-23 22:22:35', '2024-06-23 22:22:35', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `balances`
--
ALTER TABLE `balances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `balances_user_id_foreign` (`user_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chats_client_id_foreign` (`client_id`),
  ADD KEY `chats_freelancer_id_foreign` (`freelancer_id`),
  ADD KEY `chats_service_id_foreign` (`service_id`),
  ADD KEY `chats_conversation_id_foreign` (`conversation_id`);

--
-- Indexes for table `conversations`
--
ALTER TABLE `conversations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `conversations_user1_id_foreign` (`user1_id`),
  ADD KEY `conversations_user2_id_foreign` (`user2_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_user_id_foreign` (`user_id`),
  ADD KEY `notifications_service_id_foreign` (`service_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_buyer_id_foreign` (`buyer_id`),
  ADD KEY `orders_seller_id_foreign` (`seller_id`),
  ADD KEY `orders_service_id_foreign` (`service_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payments_client_id_foreign` (`client_id`),
  ADD KEY `payments_freelancer_id_foreign` (`freelancer_id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `portfolio_user_id_foreign` (`user_id`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `services_category_id_foreign` (`category_id`),
  ADD KEY `services_user_id_foreign` (`user_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `withdrawals`
--
ALTER TABLE `withdrawals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `withdrawals_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `balances`
--
ALTER TABLE `balances`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `chats`
--
ALTER TABLE `chats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=324;

--
-- AUTO_INCREMENT for table `conversations`
--
ALTER TABLE `conversations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=212;

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `withdrawals`
--
ALTER TABLE `withdrawals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `balances`
--
ALTER TABLE `balances`
  ADD CONSTRAINT `balances_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `chats`
--
ALTER TABLE `chats`
  ADD CONSTRAINT `chats_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `chats_conversation_id_foreign` FOREIGN KEY (`conversation_id`) REFERENCES `conversations` (`id`),
  ADD CONSTRAINT `chats_freelancer_id_foreign` FOREIGN KEY (`freelancer_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `chats_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`);

--
-- Constraints for table `conversations`
--
ALTER TABLE `conversations`
  ADD CONSTRAINT `conversations_user1_id_foreign` FOREIGN KEY (`user1_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `conversations_user2_id_foreign` FOREIGN KEY (`user2_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `notifications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_buyer_id_foreign` FOREIGN KEY (`buyer_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `orders_seller_id_foreign` FOREIGN KEY (`seller_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `orders_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`);

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `payments_freelancer_id_foreign` FOREIGN KEY (`freelancer_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD CONSTRAINT `portfolio_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `services_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `withdrawals`
--
ALTER TABLE `withdrawals`
  ADD CONSTRAINT `withdrawals_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
