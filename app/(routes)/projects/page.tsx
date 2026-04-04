"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/project-card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const allTechnologies = ["HTML", "CSS", "JavaScript", "Java", "C++", "Spring Boot"];

export default function ProjectsPage() {


  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A showcase of my work across various technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <Badge variant="outline" className="text-sm py-2 px-3">
              All Projects
            </Badge>
            {allTechnologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-sm py-2 px-3"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
{projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}