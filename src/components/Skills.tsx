"use client";

import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("data.json");
        const fetchedData = await response.json();
        setSkills(fetchedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSkills();
  }, []);

  // console.log(skills);

  return <div>skills</div>;
};

export default Skills;
