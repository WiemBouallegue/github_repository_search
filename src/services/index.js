import { Octokit } from "@octokit/core";
import { useState } from "react";

export const isRepositoryPopular = (stars, forks) => {
  return Number(stars) * 1 + Number(forks * 2) >= 500 ? true : false;
};
export const searchGitHubRepo = async (repoName) => {
  const octokit = new Octokit({ auth: process.env.REACT_APP_ACCESS_TOKEN });
  try {
    const response = await octokit.request("GET /search/repositories", {
      q: repoName,
    });

    if (response.status === 200) {
      const repository = response.data.items[0]; // Assuming the first search result is the desired repository
      const name = repository.full_name;
      const author = repository.owner.login;
      const stars = repository.stargazers_count;
      const forks = repository.forks_count;
      const authorImage = repository.owner.avatar_url;
      const isPopular = isRepositoryPopular(stars, forks);

      return {
        name,
        author,
        stars,
        forks,
        authorImage,
        isPopular,
      };
    } else {
      throw new Error(
        `GitHub API request failed with status: ${response.status}`
      );
    }
  } catch (error) {
    console.error("Error searching GitHub repository:", error.message);
  }
};
