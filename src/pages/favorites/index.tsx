import React from 'react';
import {NextPage} from "next";
import Favorites from "../../components/favorites/Favorites";

const FavoritesPage:NextPage = () => {
    return (
        <div>
            <h1>Избранное</h1>
            <Favorites/>
        </div>
    );
};

export default FavoritesPage;