import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";

import "./style.scss";

import useFetch from "../../hooks/useFetch";
import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
//import MovieCard from "../../components/movieCard/MovieCard";
//import Spinner from "../../components/spinner/Spinner";

const Explore = () => {

    return [
        <div className="explorePage">
            <ContentWrapper>

                
            </ContentWrapper>
        </div>

    ]
        

};

export default Explore;