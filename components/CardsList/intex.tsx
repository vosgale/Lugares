import { useEffect, useState } from "react";
import * as Styled from "../Styles";
import { LocalDB } from "../../pages/api/fetchers";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
type Countries = {
  name: string;
  flag: string;
  id: number;
  meta: string;
  place: string;
};
function CardsList() {
  const [countries, setCountries] = useState<Countries[]>([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await LocalDB.LIST();
      const data = await response.json();
      setCountries(data);
    };
    fetchCountries();
  }, []);
  return (
    <>
      <Styled.CardsContainer>
        {countries.map((item) => (
          <Styled.Card key={item.name}>
            <div className="card__header">
              <div className="card__flag-container">
                <Image
                  src={item.flag || ""}
                  width="56px"
                  height="34px"
                  alt="logo"
                />
                <h3>{item.name}</h3>
              </div>
              <div>
                <IconButton aria-label="delete" size="small">
                  1
                </IconButton>
                <IconButton aria-label="delete" size="small">
                  2
                </IconButton>
              </div>
            </div>
            <p>Local: {item.place}</p>
            <p>Meta: {item.meta}</p>
          </Styled.Card>
        ))}
      </Styled.CardsContainer>
    </>
  );
}

export default CardsList;
