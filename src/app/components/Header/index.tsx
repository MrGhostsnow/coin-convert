import React, { useEffect, useState } from "react";
import {
  ContainerHeader,
  DateHeader,
  InfoHeader,
  LabelHeader,
  SectionDateTime,
  TimeHeader,
} from "./styles";
import logo from "../../assets/logo.png";
import Image from "next/image";

const Header: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date) => {
    return `${addZero(date.getDate())}-${addZero(
      date.getMonth() + 1
    )}-${date.getFullYear()}`;
  };

  const formatTime = (date: Date) => {
    return `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
  };

  const addZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <ContainerHeader>
      <Image src={logo} alt="logo" width={163} height={81} />
      <InfoHeader>
        <SectionDateTime>
          <DateHeader>{formatDate(currentDate)}</DateHeader>
          <span style={{ color: "#45505E" }}>|</span>
          <TimeHeader>{formatTime(currentDate)} UTC</TimeHeader>
        </SectionDateTime>
        <LabelHeader>
          Dados de câmbio disponibilizados pela Morningstar.
        </LabelHeader>
      </InfoHeader>
    </ContainerHeader>
  );
};

export default Header;
