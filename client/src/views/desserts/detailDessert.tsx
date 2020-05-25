import React from 'react';
import { useParams } from "react-router-dom";
interface DetailDessert {
}
export const DetailDessert: React.FC<DetailDessert> = () => { let { dessertId } = useParams(); return (<div>dessertId: {dessertId}</div>) }

