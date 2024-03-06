"use client";
import Image from "next/image";
import { ContainerHome } from "./styles";
import Header from "../Header";
import bg_home from "../../assets/bg_home.png";

const HomePage: React.FC = () => {
  return (
    <ContainerHome>
      <Header />
      <Image src={bg_home} alt="background-home" width={1340} height={1024} />
    </ContainerHome>
  );
};

export default HomePage;
