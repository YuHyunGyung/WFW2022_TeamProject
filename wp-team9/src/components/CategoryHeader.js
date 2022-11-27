
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CategoryHeader.css';

const CategoryHeader = () => {
  return (
    <>
    <div style={{height:"100px"}}>
    <div class="headerbar" style={{height:"100px"}}>
      <div style={{display:"inline-block"}}>
      <Link to={"/category/한식"} style={{textDecoration : "none"}}>
        <p class="cate">
          한식
        </p>
      </Link>
      </div>
      <div style={{display:"inline-block"}}>
      <Link to={"/category/중식"} style={{textDecoration : "none"}}>
      <p class="cate">
        중식
      </p>
      </Link>
      </div>
      <div style={{display:"inline-block", textAlign:"center"}}>
      <Link to={"/category/일식"} style={{textDecoration : "none"}}>
      <p class="cate">
        일식
      </p>
      </Link>
      </div>
      <div style={{display:"inline-block", textAlign:"center"}}>
      <Link to={"/category/양식"} style={{textDecoration : "none"}}>
      <p class="cate">
        양식
      </p>
      </Link>
      </div>
      <div style={{display:"inline-block", textAlign:"center"}}>
      <Link to={"/category/분식"} style={{textDecoration : "none"}}>
      <p class="cate">
        분식
      </p>
      </Link>
      </div>
      <div style={{display:"inline-block", textAlign:"center"}}>
      <Link to={"/category/카페"} style={{textDecoration : "none"}}>
      <p class="cate">
        카페
      </p>
      </Link>
      </div>
    </div>
    </div>
    </>
  );
}

export default CategoryHeader;