import React from 'react';
import {NextPage} from "next";
import Favorites from "../../components/Favorites/Favorites";

const FavoritesPage:NextPage = () => {
    return (
        <div>
            <h1>Избранное</h1>
            <Favorites/>
        </div>
    );
};

export default FavoritesPage;