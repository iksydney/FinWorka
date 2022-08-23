import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import "./nav.module.css";
export default function NavBar() {
  return (
    <>
      <AnchorWrapper>
        <LeftAnchor>
          <Link to="/">FindWorka</Link>
          <Link to="/books">Books</Link>
          <Link to="/movies">Movies</Link>
        </LeftAnchor>
        <div class="rightAnchor">
          <form class="d-flex" method="get">
            <input
              class="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </AnchorWrapper>
    </>
  );
}
const AnchorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const LeftAnchor = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  & > * {
    margin-left: 50px;
  }
`;
