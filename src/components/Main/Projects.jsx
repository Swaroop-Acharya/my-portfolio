import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import { CodeIcon, GithubIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge"

export default function Projects() {

return (
  <section
      id="projects"
      className="text-white flex flex-col justify-center items-center gap-1"
    >
      <div className="flex flex-col justify-center items-center gap-1  w-4/5">
        <div className="flex justify-center items-center w-full gap-8">
          <div className="h-px w-full border  border-slate-400"></div>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">Projects</h1>
          </div>
        </div>
      </div>
      <div className="project_container">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <CodeIcon />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/Medical.jpeg"
              alt="green iguana"
            />
            <CardContent>
              <div className="flex justify-between">
                <Typography gutterBottom variant="h5" component="div">
                  Medical Management System
                </Typography>
                <GitHubIcon />
              </div>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
              <Chip label="HTML/CSS" color="info"/>
              <Chip label="PHP"  color="info"/>
              <Chip label="SQL"  color="info"/>
          </CardActions>
        </Card>

        <div className="max-w-[345px] border-clr border rounded-lg overflow-hidden ">
          <div>
            <img src="/Hotel.jpg" className="" alt="" />
          </div>
          <div className="m-4 flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="font-normal text-2xl w-64">Medical Management System</div>
              <div><GitHubIcon /></div>
            </div>
            <div className="font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt aperiam quas, necessitatibus </div>
            <div className="flex gap-3">
                <Badge variant="secondary">HTML/CSS</Badge>
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">PHP</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
