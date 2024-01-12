import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Badge } from "../ui/badge";

export default function Projects({
  imgUrl,
  title,
  gitHubLink,
  description,
  techStack,
}) {
  return (
    <div className="max-w-[345px] border-clr border rounded-lg overflow-hidden ">
      <div>
        <img src={imgUrl} className="w-[350px] h-[170px]" alt={title} />
      </div>
      <div className="m-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="font-normal text-2xl w-64">{title}</div>
          <div>
            <a href={gitHubLink} target="__blank">
              <GitHubIcon />
            </a>
          </div>
        </div>
        <div className="font-light">{description}</div>
        <div className="flex gap-3">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
