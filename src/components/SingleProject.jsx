import SP from "../styles/SingleProject.module.css";
import { NavLink, Outlet } from "react-router-dom";

export const SingleProject = ({ projects }) => {
    return (
        <>
            {projects.map((project) => {
                return (
                    <div className={SP.singleProjectWindow} key={project.id}>
                        <NavLink
                            to={`/projects/${project.id}`}
                            className={SP.a}
                        >
                            <h4 className={SP.h4}>{project.title}</h4>
                            <div className={SP.img}>
                                <img src={project.img} alt="project-img" />
                            </div>
                            <div className={SP.language}>
                                {project.language.map((lang) => {
                                    return <p className={SP.p}>{lang}</p>;
                                })}
                            </div>
                        </NavLink>
                    </div>
                );
            })}
            <Outlet />
        </>
    );
};
