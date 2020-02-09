import styled from "styled-components";

export const Review = styled.div`
  height: 90px;
  background-color: #fff;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  position: relative;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #c3c3c3;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 970px;

  @media (min-width: 1200px) {
    width: 1170px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 768px) {
    width: 750px;
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: normal;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  padding: 0;
  background: #fff;
  color: #ff7200;
  border: 1px solid #ff7200;
  border-radius: 4px;
  cursor: pointer;
`;
