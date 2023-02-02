import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import LinearLodder from '../../container/lodder/linearLodder/LinearLodder';
import { getBlogs, useAppDispatch, useAppSelector } from '../../redux';

const ShowBlog = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useAppDispatch()
  const { blogId } = useParams()
  const { blogs, loading } = useAppSelector((state)=>state?.blog)
  const filterArr:any = blogs?.filter((item:any)=> item.id == blogId)

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(getBlogs())
    }
  }, [blogs])

  const handleSelect = (selectedIndex:any, e:any) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    {filterArr[0]?.image || !loading ? <Carousel onSelect={handleSelect} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={filterArr[0]?.image}
          alt="First slide"
        /> 
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      : <LinearLodder/> }
      </>
  );
}

export default ShowBlog