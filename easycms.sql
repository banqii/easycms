/*
SQLyog - Free MySQL GUI v5.02
Host - 5.0.45-community-nt : Database - easycms
*********************************************************************
Server version : 5.0.45-community-nt
*/


create database if not exists `easycms`;

USE `easycms`;

/*Table structure for table `article` */

DROP TABLE IF EXISTS `article`;

CREATE TABLE `article` (
  `articleid` int(11) NOT NULL auto_increment,
  `title` varchar(100) default NULL,
  `indeximgurl` varchar(50) default NULL,
  `content` varchar(9999) default NULL,
  `edittime` varchar(50) default NULL,
  PRIMARY KEY  (`articleid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `article` */

insert into `article` values 
(1,'yyy','yyy','yyy','2017-2-26 21:25:25'),
(2,'yyy','yyy','yyy','2017-2-26 21:56:45'),
(3,'yyy','yyy','yyy','2017-2-26 22:20:50'),
(4,'zzzzzzzzzzz','zzzzzzzz','<p>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</p>','2017-2-27 15:42:36'),
(5,'xxxxxxxxxxx','xxxxxxxxxxxxxx','<p>xxxxxxxxxxxxxxxx</p>','2017-2-27 15:42:50'),
(6,'????“????7???”???????????????','static/img/img1.jpg','<p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; color: rgb(61, 70, 77); font-family: &quot;PingFang SC&quot;, &quot;Lantinghei SC&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE???&quot;, STHeitiSC-Light, simsun, &quot;\\\\5B8B?&quot;, &quot;WenQuanYi Zen Hei&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 15px; white-space: normal; background-color: rgb(255, 255, 255);\">???????????????????????????????????????????????????????????“??????????”????????????????????</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; color: rgb(61, 70, 77); font-family: &quot;PingFang SC&quot;, &quot;Lantinghei SC&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE???&quot;, STHeitiSC-Light, simsun, &quot;\\\\5B8B?&quot;, &quot;WenQuanYi Zen Hei&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 15px; white-space: normal; background-color: rgb(255, 255, 255);\">????????CEO??·????????1????????????</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; color: rgb(61, 70, 77); font-family: &quot;PingFang SC&quot;, &quot;Lantinghei SC&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE???&quot;, STHeitiSC-Light, simsun, &quot;\\\\5B8B?&quot;, &quot;WenQuanYi Zen Hei&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 15px; white-space: normal; background-color: rgb(255, 255, 255);\">?????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p><p><br/></p>','2017-2-27 16:16:12');
