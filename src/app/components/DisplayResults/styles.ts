import styled from "styled-components";


export const ContainerDisplayResults = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 360px;
    height: 298px;
    gap: 32px;
    margin-top: 64px;
    margin-left: 48px;
`;


export const ButtonReturn = styled.button`
    width: 120px;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #D7E0EB;
    padding: 16px;
    gap: 16px;
    box-shadow: 0px 8px 4px 0px rgba(13, 17, 27, 0.08);
    cursor: pointer;
    background-color: #FFFF;
    color: #2E3742;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
`;


export const SectionResult = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 360px;
    height: 268px;
    gap: 24;
`;


export const LabelResult = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    color: #000000;
`;


export const InfoTaxes = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
    color: #2E3742;
`;


export const InfoCurrency = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
    color: #2E3742;
`;


export const ShowResult = styled.p`
    font-weight: 600;
    font-size: 64px;
    line-height: 80px;
    color: #00AB63;
`;