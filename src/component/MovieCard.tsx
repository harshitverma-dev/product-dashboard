import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge'
import { MoviesDataType } from '../data/MoviesData';
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router-dom';

interface MovieProps {
    movieItem: MoviesDataType,
    id: number,
    index: number,
    movieListState: MoviesDataType[],
    setMovieListState: React.Dispatch<React.SetStateAction<MoviesDataType[]>>
}

const MovieCard: React.FC<MovieProps> = (props) => {
    const { movieItem, id, index, movieListState, setMovieListState } = props
    const header = (
        <>
            <img alt="Card" src={movieItem.img} />
            <div className='bookmarkIcon absolute top-1 right-1'>
                <CiBookmark size={30} />
            </div>
        </>
    );
    const footer = (
        <>
            {/* <Button label="Save" icon="pi pi-check" size='small' />
            <Button label="Cancel" severity="secondary" size='small' icon="pi pi-times" style={{ marginLeft: '0.5em' }} /> */}
            <Link to={`movie-detail/${movieItem.movieLink}`}>
                <Button icon="pi pi-external-link" label="Go to full detail" link />
            </Link>
            {console.log(id, 'ddd', index, movieListState, setMovieListState)} // details
        </>
    );
    return (
        <Card title={movieItem.title} subTitle={movieItem.description} footer={footer} header={header} className="md:w-25rem">
            {/* <h4>{movieItem.title}</h4> */}
            <div className='flex'>
                <p>Director :</p>
                <p className='ms-2'>{movieItem.director}</p>
                {/* <Badge value={movieItem.year} severity="success" /> */}
            </div>
            <div className=''>
                {movieItem?.genre?.split(',').map((items) => {
                    return (
                        <Badge value={items} severity="info" className='mr-1' />
                    )
                })
                }
            </div>
            <p className="m-0">
                {movieItem.description}
            </p>
        </Card>
    )
}

export default MovieCard
