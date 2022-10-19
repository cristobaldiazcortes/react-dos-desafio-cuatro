import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pizza() {

  const { id } = useParams();
  console.log(id)


 
  
  return (
    <div>
      <p> pizza</p>
    
    </div>
  );
}