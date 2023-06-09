import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { projectsData } from "./Data";
import BusinessItems from './BusinessItems';

const Businessx = () => {
    const [item, setItem] = useState({ name:'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    useEffect(() => {
        if(item.name ==="all"){
            setProjects(projectsData);
        }
        else{
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);
    const handleClick = (e, index) => {
        setItem({name: e.target.textContent});
        setActive(index)
    };
    return (
        <div>
        <div className="work__container container grid">
            {projects.map((item) => {
                return <BusinessItems item={item} key={item.id}/>
            })}
        </div>
        </div>
    )
}

export default Businessx