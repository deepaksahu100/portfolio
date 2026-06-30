import React from 'react';
import { SiExpress, SiJavascript, SiMongodb, SiReact, SiNodedotjs, SiMysql, SiSocketdotio } from 'react-icons/si';
import { FaCloud, FaGithub, FaLinkedin, FaPaperPlane, FaRegFilePdf, FaRegMessage } from 'react-icons/fa6';
import { TbBrandReactNative } from 'react-icons/tb';

export const iconMap = { 
  react: SiReact,
  node: SiNodedotjs,
  mongo: SiMongodb,
  js: SiJavascript,
  mysql: SiMysql,
  socket: SiSocketdotio,
  express: SiExpress,
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaRegMessage,
  resume: FaRegFilePdf,
  send: FaPaperPlane,
  cloud: FaCloud,
  rn: TbBrandReactNative,
};

export default function Icon({ name, className = '' }) {
  const Comp = iconMap[name];
  if (!Comp) return null;
  return <Comp className={className} aria-hidden="true" />;
}

