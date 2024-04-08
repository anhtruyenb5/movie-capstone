import React, { useEffect } from 'react'
import { Table } from "antd"
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovieThunk } from '../../redux/slice/phimSlice';
import { NavLink } from 'react-router-dom';

const MovieManager = () => {
    const { arrMovie } = useSelector((state) => state.phimSlice);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllMovieThunk("abc"))
    }, [])
    // const dataSource = [
    //     {
    //         key: '1',
    //         name: 'Mike',
    //         age: 32,
    //         address: '10 Downing Street',
    //     },
    //     {
    //         key: '2',
    //         name: 'John',
    //         age: 42,
    //         address: '10 Downing Street',
    //     },
    // ];

    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Tên phim',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'img',
            key: 'img',
        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            key: 'moTa',
        },
        {
            title: 'Update',
            dataIndex: '',
            key: 'u',
            render: () =>
                <NavLink to="/">Update</NavLink>
        },
        {
            title: 'Delete',
            dataIndex: '',
            key: 'x',
            render: () =>
                <NavLink to="/">Delete</NavLink>
        },
    ];
    return (
        <Table dataSource={arrMovie.map((movie, index) => {
            return (
                {
                    key: index,
                    id: <h2 className='text-3xl'>{movie.maPhim}</h2>,
                    name: <h2 className='text-3xl'>{movie.tenPhim}</h2>,
                    img: <img className='w-1/2 h-96 object-cover rounded' src={movie.hinhAnh} />,
                    moTa: <p className="line-clamp-2 w-60">{movie.moTa}</p>,
                }

            )
        })} columns={columns}
        />
    )
}

export default MovieManager