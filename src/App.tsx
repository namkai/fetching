import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";
import { Breed } from "./models";
import styled from "styled-components";
import Container from "./components/Container";

const StyledContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [breeds, setBreeds] = useState<Breed[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDogBreeds() {
      const url = "https://api.thedogapi.com/v1/breeds";

      try {
        setLoading(true);
        const { data } = await axios(url, {
          method: "GET",
          headers: {
            "X-Api-Key": process.env.REACT_APP_DOG_BREED,
          },
        });

        setBreeds(data);
      } catch (error) {
        setError("Whoops something went wrong, please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchDogBreeds();
  }, []);

  const keys: Array<keyof Breed> = ["id", "name", "life_span"];

  return (
    <StyledContainer>
      {loading && "loading..."}
      {error}
      {breeds && <Table keys={keys} data={breeds} />}
    </StyledContainer>
  );
}

export default App;
